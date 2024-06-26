import {
  MainContainer,
  CardsContainer,
  Card,
  Image,
  PriceAndButton,
} from "./styles";
import { useState } from "react";
import Cart from "../Cart/Cart";
import cards from "../../cards/card.json";
import { useEffect } from "react";

function Content(props) {
  const [cartItems, setCartItems] = useState([]);

  const addCart = (card) => {
    const exist = cartItems.find((x) => x.id === card.id); //variavel q verifica os itens do carrinho existem
    if (exist) {
      const newCart = cartItems.map((x) =>
        x.id === card.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCart)
      localStorage.setItem('cartItems', JSON.stringify(newCart))
    } else {
      const newCart = [...cartItems, { ...card, qty: 1 }]
      setCartItems(newCart)
      localStorage.setItem('cartItems', JSON.stringify(newCart))
    }
  };

  const onRemove = (card) => {
    const exist = cartItems.find((x) => x.id === card.id);
    if (exist.qty === 1) {
      const newCart = cartItems.filter((x) => x.id !== card.id)
      setCartItems(newCart)
      localStorage.setItem('cartItems', JSON.stringify(newCart))
    } else {
      const newCart = cartItems.map((x) => x.id === card.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCart)
      localStorage.setItem('cartItems', JSON.stringify(newCart))
    }
  }

  const localStorageCart = () => {
    if (localStorage.getItem('cartItems')) {
      const newCartItems = localStorage.getItem('cartItems')
      const newCartItemsParse = JSON.parse(newCartItems)
      setCartItems(newCartItemsParse)
    }
  }

  useEffect(() => {
    localStorageCart();
  }, [])


  return (
    <MainContainer className="main-container">
      <CardsContainer className="cards-container"
        addCart={addCart}
      >
        {cards
          .filter((card) => {
            return card.name
              .toLowerCase()
              .includes(props.query.toLowerCase().trim());
          })

          .filter((card) => {
            return card.price >= (props.minPrice) || (props.minPrice) === ""
          })

          .filter((card) => {
            return card.price <= (props.maxPrice) || (props.maxPrice) === ""
          })

          .sort((a, b) => {
            if (props.ordenacao === "crescente") {
              if (a.name < b.name) {
                return -1
              } else {
                return 1
              }
            } else if (props.ordenacao === "decrescente") {
              if (a.name < b.name) {
                return 1
              } else {
                return -1
              }
            }
          })

          .map((card) => (
            <Card className="div-card"
              key={card.id}
              addCart={addCart}
            >
              <Image src={card.imageUrl} alt={card.imageAlt} />

              <h1 className="title">{card.name}</h1>

              <PriceAndButton className="Price-and-cart">
                <p className="price">R${card.price.toFixed(2)}</p>
                <button onClick={() => addCart(card)} className="button"> Adicionar ao carrinho</button>
              </PriceAndButton>
            </Card>
          ))}

      </CardsContainer>
      <Cart
        cartItems={cartItems}
        addCart={addCart}
        onRemove={onRemove}
      > </Cart>
    </MainContainer>
  );
}

export default Content;

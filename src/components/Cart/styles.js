import styled from "styled-components";

export const ContainerBag = styled.div`
    width: 320px;
    margin: 12px;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid grey;
    /* background-color: #adeaea; */
    display: flex;
    flex-direction: column;

    .h1 {
    font-size: 40px;
    align-self: center;
    margin: 5px 2px 2px 2px;
    }

    .p{
        background-color: #fffb76;
        border-radius: 5px;
        margin: 15px 0 20px 0;
        display: flex;
        justify-content:center;
    }

`

export const ColumnBag = styled.div`
    width: 270px;
    margin: 8px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px; 

    .buttons{
       display: flex;
       gap: 5px;

        .button-add{
            width: 18px;
            background-color: lightgreen;
            border: none;
            cursor: pointer;
        }

        .button-remove{
            width: 18px;
            background-color: lightcoral;
            border: none;
            cursor: pointer;
        }
    }
`

export const Resume = styled.div`
margin-top: 20px;
.price-items , .shipping-items , .total-items{
    display: flex;
    justify-content: space-between;
}
`
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`


    .pizza{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20vh;
        background-image: url("https://www.ifratellipizza.com/wp-content/uploads/smMerissa-De-Falcis-Photo-1.jpg");
        object-fit: contain;
        background-repeat: no-repeat;
        height: 40vh;
    }
    .pizzaBtn {
        border: 1px solid black;
        padding: 10px 60px;
        color: black;
        background-color: red;
    }
    h2 {
        font-size: 3rem;
    }
    .city {
        display: flex;
        justify-content: space-around;
    }
    .city img {
        width: 200px;
        height: 200px;
    }
`

export default function Home() {

    return (
        <StyledHome>
            <div className="pizza">
                <h2>Your favorite food, delivered while coding</h2>
                <Link className="pizzaBtn" to='/form' >Pizza?</Link>
            </div>
            <h3>Food Delivery in Gotham City</h3>
            <div className="city" >
                <div>
                    <img src="https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/03/01/xxx-the-daily-meal-mcdonalds-04-1886-16_9.jpg" />
                    <p>Mcdonalds</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEjTcelhdxvClvxkZu_XKmP43QClkq6Q-fUA&usqp=CAU" />
                    <p>Burger King</p>
                </div>
                <div>
                    <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1208002580%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D5000%26cropY1%3D254%26cropY2%3D3068" />
                    <p>Starbucks</p>
                </div>
            </div>
        </StyledHome>
    )
}
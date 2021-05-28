import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require("../images/img-9.jpg").default} text="Explore the hidden waterfall" label="Adventure" path="/services"/>
                        <CardItem src={require("../images/img-2.jpg").default} text="Travel through the Islands" label="Luxory" path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={require("../images/img-3.jpg").default} text="Set Sail in The Atlantic Ocean" label="Mystery" path="/services"/>
                        <CardItem src={require("../images/img-4.jpg").default} text="Experience Football in the Mountains" label="Adventure" path="/products"/>
                        <CardItem src={require("../images/img-8.jpg").default} text="Ride through the Sahara Dessert" label="Adrenaline" path="/sign-up"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

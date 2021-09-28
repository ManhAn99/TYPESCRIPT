import React from 'react'
import CardItem from '../CardItem/CardItem'
//Styles
import {Wrapper} from './Card.style'
//Types
import { CartItemType } from '../App'

type Props = {
    cartItems : CartItemType[];
    addToCart : (clickedItem : CartItemType) => void;
    removeFromCart : (id : number) => void
}

const Card :React.FC<Props> = ({cartItems, addToCart,removeFromCart}) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No Items in the cart</p> : null}
            {cartItems.map(item => (
                <CardItem
                 key = {item.id}
                 item = {item}
                 addToCart = {addToCart}
                 removeFromCart = {removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Card

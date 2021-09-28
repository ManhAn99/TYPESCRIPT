import React from 'react'
import { Button } from '@mui/material'
//Types
import { CartItemType } from '../App'
//Style
import {Wrapper} from './CardItem.style'

type Props = {
    item : CartItemType;
    addToCart : (clickedItem : CartItemType) => void;
    removeFromCart : (id : number) => void
}

const CardItem :React.FC <Props>= ({item,addToCart,removeFromCart}) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className = 'information' >
                    <p>Price ${item.price}</p>
                    <p>Total : ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button 
                     size = 'small' 
                     disableElevation 
                     variant = 'contained' 
                     onClick = {() => removeFromCart(item.id)}>
                       -
                    </Button>
                    <p>{item.amount}</p>
                    <Button 
                     size = 'small' 
                     disableElevation 
                     variant = 'contained' 
                     onClick = {() => addToCart(item)}>
                       +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt="image" />
        </Wrapper>
    )
}

export default CardItem

import React,{useState} from 'react';
import { useQuery } from 'react-query';
//components
import {Drawer,LinearProgress, Grid, Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Item from './Item/Item';
import Card from './Card/Card'
//styles
import { Wrapper,StyledButton } from './App.styles';

//Types
export type CartItemType = {
  id : number;
  category : string;
  description : string;
  image : string;
  price : number;
  title : string;
  amount : number;
}

const getProducts = async () : Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}

const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products',getProducts)
  const [cartOpen,setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const getTotalItems = (items :CartItemType[])   =>{
    return items.reduce((ack : number,item) => (
       ack += item.amount
    ), 0)
  }
  const handleAddToCart = (clickedItem : CartItemType)  => {
     setCartItems(prev => {
       // existing in the cart
       const isItemInCart = prev.find(item => item.id === clickedItem.id)
       if(isItemInCart) {
         return prev.map(item => (
           item.id === clickedItem.id ? {...item, amount : item.amount + 1} : item
         ))
       }

       return [...prev, {...clickedItem, amount : 1}]
     })
  }
  const handleRemoveCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong</div>
  return (
    <Wrapper>
      <Drawer anchor = 'right' open = {cartOpen} onClose = {() => setCartOpen(false)}>
         <Card cartItems = {cartItems} addToCart = {handleAddToCart} removeFromCart = {handleRemoveCart} />
      </Drawer>
      <StyledButton onClick = {() => setCartOpen(true)}>
          <Badge badgeContent = {getTotalItems(cartItems)} color = 'error'>
            <ShoppingCartIcon />
          </Badge>
      </StyledButton>
      <Grid container spacing = {3}>
        {data?.map(item => (
          <Grid item key = {item.id} xs = {12} sm = {4}>
            <Item item = {item} handleAddToCart = {handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;

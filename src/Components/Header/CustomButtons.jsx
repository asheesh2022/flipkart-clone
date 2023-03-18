import React, { useContext, useState } from 'react'
import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
// import { Container } from '@mui/system';
import LoginDialog from '../Login/LoginDialog';
import { Link } from 'react-router-dom';

import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';




const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
     alignItems: 'center',
     justifyContent : "center",
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    marginRight: "40px",
    textTransform: 'none',
  
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}))


const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }
  return (
    <>
      
      <Wrapper>
            
      {
                account ? <Profile account={account} setAccount={setAccount} /> :
                // account ?     <Typography>    {account}</Typography>   :
                    <LoginButton style = {{marginLeft : 15}} variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            
            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    </>
  )
}

export default CustomButtons

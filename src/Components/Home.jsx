import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from './Home/NavBar';
import Banner from './Home/Banner';
// import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
// import { getProducts as listProducts } from '../redux/actions/productActions';
import { getProducts } from '../redux/actions/productActions';

// const Component = styled(Box)`
//     padding: 20px 10px;
//     background: #F2F2F2;
// `;
const Component = styled(Box)`
    padding:  10px;
    background: #F2F2F2;
`;

const Home = () => {
    // const getProducts = useSelector(state => state.getProducts);
    const {products}= useSelector(state => state.getProducts);
    // const { products, error } = getProducts;

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [dispatch])
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <Component>

           {/* <MidSlide/> */}

           <Banner/>
           <MidSection/>
           <Slide
                    products={products} 
                    title='Discounts for You'
                    timer={true} 
                    // multi={true} 
                />
                <Slide
                   products={products} 
                    title='Suggested Items'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Top Selection'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Recommended Items'
                    timer={false} 
                    // multi={true} 
                />
            </Component>
        </>
    )
}

export default Home;
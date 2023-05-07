/* eslint-disable */
import { useState, useContext } from 'react';
import { CartContext } from '../../App';
import { useParams } from 'react-router-dom';
import { Box, Grid, Text, Anchor, Layer, Button } from 'grommet';
import { FormClose } from 'grommet-icons';

const ItemCart = ({item}) => {
    
    const { name, quantity, price, id } = item
    const [ cartCtxt, setCartDetail] = useContext(CartContext);
    
    const addBtnHdler = (itemName, itemID) => {
        setCartDetail(currentItems => [...currentItems, itemID])
        setOpen(true);
        handleCart(data)
        setTimeout(() => {
            setOpen(undefined);
            setSelectedItem(undefined);
        }, 3000);
    };
    const onClose = () => setOpen(undefined);
    const minusBtnHdler = () => {}

    return (

        <Box background="light-1" pad='medium' round='medium' margin={{bottom:'xsmall'}} animation={{ type: 'fadeIn', duration: 1000 }} >

            <Grid
                fill
                areas={[
                    { name: 'close-btn', start: [0, 0], end: [0, 0] },
                    { name: 'name', start: [1, 0], end: [1, 0] },
                    { name: 'quantity', start: [2, 0], end: [2, 0] },
                    { name: 'price', start: [3, 0], end: [3, 0] },

                ]}
                columns={['xxsmall', 'flex', 'xxsmall', 'xxsmall']}
                rows={['flex']}
                gap="xsmall"
                // border={'bottom'}
            >

                <Box justify='center' align='start' gridArea="close-btn">
                    <Anchor onClick={() => closeBtnHdler()}>
                        <FormClose color='plain' size='30px' />
                    </Anchor>
                </Box>
                <Box justify='center' gridArea="name">
                    <Text> 
                        <strong>{name}</strong>
                    </Text>
                </Box>
                <Box justify='center' align='center' gridArea="quantity">
                    <Text>x{quantity}</Text>
                </Box>
                <Box justify='center' align='center' gridArea="price">
                    <Text>${price}</Text>
                </Box>
            </Grid>


        </Box>
    );
};

export default ItemCart;
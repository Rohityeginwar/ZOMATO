import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import Header from '../Header';

const url = "https://zomapi-s17p.onrender.com/orders";

const ViewOrder = () => {

    const [orders,setOrder] = useState();

    useEffect(() => {
        axios.get(url).then((res) => {setOrder(res.data)})
    })

    return(
        <>
             <Header/>
            <DisplayOrder orderData={orders}/>
        </>

    )

}

export default ViewOrder;
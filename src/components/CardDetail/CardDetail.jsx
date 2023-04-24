import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './CardDetail.css'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../../db/firebase-config'

const CardDetail = ({}) => {
    const { id } = useParams()
    const [item, setItem] = useState({})


    const getItems = async () => {
        const itemDoc = doc(db, "products", id);
        const item = await getDoc(itemDoc);

        if (item.exists()) {
            setItem(item.data());

        } else {
            console.log("No such Document")
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='boxDetail BoxBorder'>
                <h2>{item.name}</h2>
                <img src={item.img} alt="" width={200} height={200} />
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default CardDetail
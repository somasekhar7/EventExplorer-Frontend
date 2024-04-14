import React, {useEffect, useState} from 'react';
import '../styles/creditcardform.css';
import axios from "axios"; // Import your CSS file for styling

const CreditCardForm = ({data, onDeleteCard}) => {

    const sessionEmail = sessionStorage.getItem("email");

    const creditActions = sessionStorage.getItem("credit-card-actions");

    const[isCreditActionNeed, setIsCreditActionNeed]=  useState(false)

    // if(creditActions === 'true'){
    //
    //     setIsCreditActionNeed(false)
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/ee/v1/customers/${sessionEmail}/billing-info/has-credit-card`);


                sessionStorage.setItem("banKNameSession", JSON.stringify(response.data.bankName));


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    const handleDelete = async () => {


        try {
            const response = await axios.delete(`http://localhost:8082/ee/v1/customers/${sessionEmail}/credit-card`);

            onDeleteCard();

        }catch (error){


            console.log(error.response.data)
        }


    };

    const handleUpdate = async () => {


        // try {
        //     //const response = await axios.delete(`http://localhost:8082/ee/v1/customers/${sessionEmail}/credit-card`);
        //     console.log(response.data);
        //     onDeleteCard();
        //
        // }catch (error){
        //
        //
        //     console.log(error.response.data)
        // }


    };


    return (
        <div className="credit-card">
            <div className="credit-card__number">{data.cardNumber}</div>
            <div className="credit-card__info">
                <div className="credit-card__expiry">{data.expiryDate}</div>
                <div className="credit-card__bank">{data.bankName}</div>
                <div className="credit-card__cvv">{data.cvv}</div>
            </div>
            <div className="credit-card__name">{data.cardHolderName}</div>
            {isCreditActionNeed &&
                <div className="credit-card__actions">
                    <a href="#" className="credit-card__edit" onClick={handleUpdate}>Edit</a>
                    <a href="#" className="credit-card__delete" onClick={handleDelete}>Delete</a>
                </div>
            }
        </div>
    );
};

export default CreditCardForm;
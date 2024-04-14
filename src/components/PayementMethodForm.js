import React, {useState} from 'react';
import '../styles/paymentmethodform.css'
import {Button, Image} from "react-bootstrap";
import axios from "axios";
import { isSafari } from 'react-device-detect';
import logo from '../assests/apple-pay.png'
import CreditCardForm from "./CreditCardForm";


const PaymentMethodForm = () => {

    const [showForm, setShowForm] = useState(false);
    const [showApplePay, setShowApplePay] = useState(false);
    const [showPaypal, setShowPaypal] = useState(false);
    const sessionEmail = sessionStorage.getItem("email");
    const [bankNameSession, setBankNameSession] = useState('');


    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [hasCard, setHasCard] = useState('');
    const [creditCardInfo, setCreditCardInfo] = useState(null)
    const creditActions = sessionStorage.getItem("credit-card-actions");

    const[isCreditActionNeed, setIsCreditActionNeed]=  useState(true)


    const [updateData, setUpdateData] = useState({
        email: sessionEmail,
        address: '',
        city: '',
        state: '',
        phoneNumber: '',
        zipcode: '',
        cardHolderName: '',
        cardNumber: '',
        cvv:'',
        expiryDate:''
    });


    const handleCreditCardClick = async () => {


        try {
            const response = await axios.get(`http://localhost:8082/ee/v1/customers/${sessionEmail}/billing-info/has-credit-card`);

            // console.log("has a card?"+ JSON.stringify(response.data.bankName));
            setCreditCardInfo(response.data);
            console.log('after clicking the credit card'+JSON.stringify(response.data.bankName).replace(/\\/g, ''));
            sessionStorage.setItem("banKNameSession", JSON.stringify(response.data.bankName).replace(/\\/g, ''));

            // setBankNameSession(JSON.stringify(response.data.bankName).replace(/\\/g, ''));

            setHasCard(true);
            setShowForm(false);
            setShowApplePay(false);
            setShowPaypal(false);


        }catch (error){
            setHasCard(false);
            setShowForm(true);
            setShowApplePay(false);
            setShowPaypal(false);

            console.log(error.response.data)
        }


    };

    const handleApplePay = () => {
        setShowForm(false);
        setShowPaypal(false);
        setShowApplePay(true);
        setHasCard(false);

    };

    const handlePaypal = () => {
        setShowForm(false);
        setShowApplePay(false);
        setShowPaypal(true);
        setHasCard(false);
    };

    const handleDeleteCard = () =>{

        // setHasCard(false);
        setShowForm(true);
        setShowApplePay(false);
        setShowPaypal(false);

    }





    const handleUpdateChange = (e) => {

        setSuccessMessage('');
        setErrorMessage('');
        const { name, value } = e.target;

        if (name === 'expiration' && /^\d{0,2}\/\d{0,2}$/.test(value)) {
            setUpdateData({ ...updateData, [name]: value });
        }
        setUpdateData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const response = await axios.post("http://localhost:8082/ee/v1/customer/billing-info", updateData);
            setSuccessMessage('Form submitted successfully');
            console.log('Credit Card Form submitted successfully:', response.data);

            setCreditCardInfo(response.data);
            setBankNameSession(response.data.bankName)
            setHasCard(true);
            setShowForm(false);

        } catch (error) {
            setErrorMessage(error.response.data);
            console.error('Error submitting form:', error);
        }
    };
    const handlePayPalButtonClick = () => {
        window.open('https://www.paypal.com/signin', '_blank');

    };

    return (
        <div className="billing_info">
            <div className="billing_info_fields edit">
                <h2 className="title">Payment Method</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <div className="payment_method multiple">
                    <div className="payment_option card_option">
                        <input type="radio" id="card-radio" name="payment_method" value=""
                               onClick={handleCreditCardClick}/>
                        <div className="payment_tile">
                            <label htmlFor="card-radio" className="payment_option_name">Credit Card</label>
                        </div>
                    </div>
                    <div className="payment_option paypal_option">
                        <input type="radio" id="paypal-radio" name="payment_method" value="" onClick={handlePaypal} />
                        <div className="payment_tile_paypal">
                            <label htmlFor="paypal-radio" className="payment_option_name">Paypal</label>
                        </div>
                    </div>
                    <div className="payment_option apple_option">
                        <input type="radio" id="apple-radio" name="payment_method" value="" onClick={handleApplePay}/>
                        <div className="payment_tile_apple">
                            <label htmlFor="apple-radio" className="payment_option_name">Apple Pay</label>
                        </div>
                    </div>
                    {/* Add other payment options here */}
                </div>
                {/* Add other elements of the form here */}
            </div>

            {hasCard && <CreditCardForm data={creditCardInfo} onDeleteCard={handleDeleteCard}/>}
            {showForm && (
                <div className="credit-card-form">


                    <div className="accepted_cards" style={{display: 'flex'}}>
                        <div className="card_payment visa">Visa</div>
                        <div className="card_payment mastercard">MasterCard</div>
                        <div className="card_payment discover">Discover</div>
                        <div className="card_payment american_express">AmericanExpress</div>


                    </div>
                    {/*<div className="same-as-bill-to-container"><label className=""><input*/}
                    {/*    id="same-as-bill-to" type="checkbox" data-gtm-form-interact-field-id="0"/>*/}
                    {/*    Same as home address</label>*/}
                    {/*</div>*/}

                    <div className="container">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="Email"
                                value={sessionEmail}
                                name="email"
                                disabled
                            />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingHolderName"
                                placeholder="Address"
                                value={updateData.cardHolderName}
                                name="cardHolderName"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingAddress">Card Holder Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingCardNumber"
                                placeholder="cardNumber"
                                value={updateData.cardNumber}
                                name="cardNumber"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingAddress">Card Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingCVV"
                                placeholder="cvv"
                                value={updateData.cvv}
                                name="cvv"
                                onChange={handleUpdateChange}
                                maxLength="4"
                            />
                            <label htmlFor="floatingAddress">CVV</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingexpiration"
                                placeholder="MM/YY"
                                value={updateData.expiryDate}
                                name="expiryDate"
                                onChange={handleUpdateChange}
                                maxLength="5"
                            />
                            <label htmlFor="floatingAddress">MM/YY</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingAddress"
                                placeholder="Address"
                                value={updateData.address}
                                name="address"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingAddress">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingCity"
                                placeholder="City"
                                value={updateData.city}
                                name="city"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingCity">City</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingState"
                                placeholder="State"
                                value={updateData.state}
                                name="state"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingState">State</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="tel"
                                inputMode="numeric"
                                className="form-control"
                                id="floatingPhoneNumber"
                                placeholder="Phone Number"
                                value={updateData.phoneNumber}
                                name="phoneNumber"
                                required="Phone Number is Required to Update"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingPhoneNumber">Phone Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="tel"
                                className="form-control"
                                id="floatingZip"
                                placeholder="Zip Code"
                                value={updateData.zipcode}
                                name="zipcode"
                                onChange={handleUpdateChange}
                            />
                            <label htmlFor="floatingZip">Zip Code</label>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary center" onClick={handleSubmit}>Update</button>

                </div>
            )}
            {showApplePay && (
                <div className="apple-pay-form">
                    {/* Add your credit card form here */}
                    {/*<div className="card">*/}
                    {/*    <div className="card-body">*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div>
                        {isSafari ? (
                            <>
                                <div className="alert alert-info mb-3" role="alert">
                                    Click the button below to authorize payment on your device. You will not be charged
                                    at this time.
                                </div>
                                <Image src={logo} className="apple-image-pay" alt="logo"></Image>


                            </>

                        ) : (
                            <>
                                <div className="alert alert-warning mb-3" role="alert">
                                    Apple Pay payment option is only supported on eligible Apple devices running Safari
                                    browser.

                                </div>

                            </>
                        )}
                    </div>


                </div>
            )}
            {showPaypal && (
                <div className="paypal-form">
                    {/* Add your credit card form here */}
                    You will be taken to PayPal to authorize a billing agreement.
                    <br/>
                    <br/>

                    <Button type="submit" className="btn btn-primary" onClick={handlePayPalButtonClick} > Update </Button>

                </div>
            )}


        </div>


    );
};

export default PaymentMethodForm;
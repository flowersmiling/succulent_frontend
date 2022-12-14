import { Typography, Divider, Box, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AddressFormValues } from '../address/address-form-values.interface';
import { CheckoutStepper } from '../checkout-stepper/checkout-stepper';
import { Purchase } from './components/purchase';
import  getCart  from '../../store/cartStore';
import  { insertNewOrder, makePayment }  from './components/post';

import { ConfirmationProps, mapStateToProps } from './confirmation.props';

const AddressDisplay: FunctionComponent<{ address: AddressFormValues }> = ({
  address,
}) => {
  return (
    <>
      {address.firstName} {address.lastName} <br />
      {address.addressLine1} <br />
      {address.addressLine2 && (
        <>
          {address.addressLine2} <br />
        </>
      )}
      {address.city}, {address.provinceState}, {address.country}{' '}
      {address.zipPostalCode}
    </>
  );
};

const Confirmation: FunctionComponent<ConfirmationProps> = ({
  deliveryForm,
  paymentForm,
}) => {
  const navigate = useNavigate();
  const products: string[] = [];
  for(var i = 0; i < getCart.cart.cartTotalQty; i++) {
    products[i] = getCart.cart.cartItems[i]?.id;
  }

  const tax = (getCart.cart.cartTotalAmount*0.05).toFixed(2);
  const total = (getCart.cart.cartTotalAmount*1.05).toFixed(2);

  const submitForm = () => {
    //redirect to payment page
    //makePayment(total,'','','','');
    //create new order
    insertNewOrder(
      '',
      deliveryForm.signup.email,
      '',
      '',
      new Date(),
      'undelivered',
      products,
      '',
      '',
      getCart.cart.cartTotalQty,
      tax,
      total,
      '',
      deliveryForm.shippingMethod,
      '',
      'Shipping',
      deliveryForm.shippingAddress.firstName,
      deliveryForm.shippingAddress.lastName,
      deliveryForm.shippingAddress.addressLine1,
      deliveryForm.shippingAddress.addressLine2,
      deliveryForm.shippingAddress.city,
      deliveryForm.shippingAddress.country,
      deliveryForm.shippingAddress.provinceState,
      deliveryForm.shippingAddress.zipPostalCode,
      '','',paymentForm.paymentMethod,
      new Date(),
      total,
      'Success',
      paymentForm.creditCard.cardNumber
    );
    
    navigate('/');
  }
  const goBack = () => {
    navigate('/checkout/payment');
  };
  const { t } = useTranslation();
  
  return (
    <>
      <CheckoutStepper />
        <Typography variant="h3" gutterBottom textAlign={"left"}>
          {t('checkout.delivery')}
        </Typography>
        <Typography variant="h6" gutterBottom textAlign={"left"}>
          {t('checkout.shippingAddress')}
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"left"}>
          <AddressDisplay address={deliveryForm.shippingAddress} />
        </Typography>
        <Typography variant="h6" gutterBottom textAlign={"left"}>
          {t('checkout.shippingMethod.title')}
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"left"}>
          {t('checkout.shippingMethod.' + deliveryForm.shippingMethod)}
        </Typography>
        <Divider />

        <Typography variant="h3" gutterBottom textAlign={"left"}>
          {t('checkout.payment')}
        </Typography>
        <Typography variant="h6" gutterBottom textAlign={"left"}>
          {t('checkout.billingAddress')}
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"left"}>
          {paymentForm.sameAsShipping && t('checkout.sameAsShipping')}
        </Typography>
        {!paymentForm.sameAsShipping && (
          <Typography variant="body1" gutterBottom textAlign={"left"}>
            <AddressDisplay address={paymentForm.billingAddress} />
          </Typography>
        )}
        <Typography variant="h6" gutterBottom textAlign={"left"}>
          {t('checkout.paymentMethod.title')}
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"left"}>
          {t('checkout.paymentMethod.' + paymentForm.paymentMethod)}
        </Typography>
        {(paymentForm.paymentMethod == 'CreditCard') && (
          <Typography variant="body1" gutterBottom textAlign={"left"}>
            {t('####-####-####-'+paymentForm.creditCard.cardNumber.substring(15,19))}
          </Typography>
        )}
      <form onSubmit={submitForm}>
        <Box
            textAlign="right"
            display="flex"
            justifyContent="space-between"
            mt={2}
        >
          <Button
            type="button"
            variant="contained"
            color="secondary"
            endIcon={<ArrowBackIcon />}
            size="large"
            onClick={goBack}
          >
            {t('checkout.previous')}
          </Button>
          <Purchase price = {+total} tag={''}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<ArrowRightAltIcon />}
                size="large"
              >
                {t('checkout.paynow')}
            </Button>
          </Purchase>
        </Box>
      </form>
    </>
  );
};

export default connect(mapStateToProps)(Confirmation);
import React, { FunctionComponent } from 'react';
import { Typography, Divider, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AddressFormValues } from '../CheckoutPage/components/address/address-form-values.interface';
import { ConfirmationProps, mapStateToProps } from '../CheckoutPage/components/confirmation/confirmation.props';
import { Purchase } from './purchase';
import  getCart  from '../CheckoutPage/store/cartStore';

export default function PaymentPage() {
  return (
    <div>
      <Purchase price={getCart.cart.cartTotalAmount} tag={''}>
        <Button type="button">
          CHECK OUT
        </Button>
      </Purchase>
      <Typography variant="h3" gutterBottom textAlign={"left"}>
        Attribute...
      </Typography>
    </div>
  );
};

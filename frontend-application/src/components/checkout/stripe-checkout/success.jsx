import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../shared/layout';
import { CartContext } from '../../../context/cart-context';
import queryString from 'query-string'
import { fetchFromAPI } from '../../../helpers';

const Success = ({ history, location }) => {

  const { clearCart, cartItems } = useContext(CartContext);
  const [session, setSession] = useState()

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    console.log(parsed)
    const getSession = async () => {
      const { session } = await fetchFromAPI(`validate-checkout-session?sessionId=${parsed.session_id}`, { method: 'GET' })
      setSession(session)
    }
    getSession()
  }, [])

  useEffect(() => {
    if (cartItems.length !== 0) { clearCart() }
  }, [clearCart, cartItems]);

  return (
    <Layout>
      {Boolean(!session) && (
        <p>Loading</p>
      )}
      {Boolean(session) && (
        <div className='checkout'>
          <h1>Thank you for your order</h1>
          <p>
            We are currently processing your order and
            will send you a confirmation email shortly
          </p>
          <p>Your Total Price was ${(session.payment_intent.amount / 100).toFixed(2)}</p>
          <p>Your Customer Id is {session.customer}</p>
        </div>
      )}
    </Layout>
  );
}

export default withRouter(Success);
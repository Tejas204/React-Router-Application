import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate();

  return (
    <>
        <div>Order Confirmed</div>

        {/* The -1 numerical arg instructs the browser to go to the previous page by moving the history stack pointer */}
        <button class='submit-button' onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default OrderSummary
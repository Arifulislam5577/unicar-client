import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Context } from "../../context/Context";
const Checkout = ({ productInfo }) => {
  const { user } = Context();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      console.log(intentError);
    }

    if (error) {
      setCardError(error);
    } else {
      setCardError("");
    }
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await fetch("http://localhost:5000/api/v1/orders/payment", {
        method: "POST",
        body: JSON.stringify({ price: productInfo.newPrice }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      });

      const result = await res.json();
      setClientSecret(result.clientSecret);
    };

    getClientSecret();
  }, [productInfo.newPrice]);

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <CardElement className="px-5 py-5 rounded w-full bg-white" />
      <button
        type="submit"
        disabled={!stripe}
        className="my-3 px-4 py-4 bg-slate-900 text-white rounded w-full"
      >
        Pay Now
      </button>

      {cardError && <p className="my-3 text-red-500">{cardError}</p>}
    </form>
  );
};

export default Checkout;

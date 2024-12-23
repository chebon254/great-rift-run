import axios from 'axios';

interface PesapalAuthResponse {
  token: string;
  expiryDate: string;
}

interface PesapalOrderRequest {
  id: string;
  currency: string;
  amount: number;
  description: string;
  callback_url: string;
  notification_id: string;
  billing_address: {
    email_address: string;
    phone_number: string;
    first_name: string;
    last_name: string;
  };
}

export async function getPesapalToken(): Promise<string> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PESAPAL_API_URL}/api/Auth/RequestToken`,
      {
        consumer_key: process.env.NEXT_PUBLIC_PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.NEXT_PUBLIC_PESAPAL_CONSUMER_SECRET,
      }
    );
    return response.data.token;
  } catch (error) {
    console.error('Error getting Pesapal token:', error);
    throw error;
  }
}

export async function createPesapalOrder(orderData: PesapalOrderRequest, token: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PESAPAL_API_URL}/api/Transactions/SubmitOrderRequest`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating Pesapal order:', error);
    throw error;
  }
}
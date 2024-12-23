import axios from 'axios';

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

    if (!response.data.token) {
      throw new Error('No token received from Pesapal');
    }

    return response.data.token;
  } catch (error: any) {
    console.error('Error getting Pesapal token:', {
      message: error.message,
      response: error.response?.data
    });
    throw error;
  }
}

export async function registerIPN(token: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PESAPAL_API_URL}/api/URLSetup/RegisterIPN`,
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/ipn`,
        ipn_notification_type: "GET"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.data.ipn_id) {
      throw new Error('No IPN ID received from Pesapal');
    }

    return response.data.ipn_id;
  } catch (error: any) {
    console.error('Error registering IPN:', {
      message: error.message,
      response: error.response?.data
    });
    throw error;
  }
}

export async function createPesapalOrder(orderData: PesapalOrderRequest, token: string) {
  try {
    console.log('Creating Pesapal order with data:', {
      ...orderData,
      billing_address: {
        ...orderData.billing_address,
        phone_number: '***' // Mask sensitive data in logs
      }
    });

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

    console.log('Pesapal order response:', response.data);

    if (!response.data.redirect_url) {
      throw new Error('No redirect URL received from Pesapal. Response: ' + JSON.stringify(response.data));
    }

    return response.data;
  } catch (error: any) {
    console.error('Error creating Pesapal order:', {
      message: error.message,
      response: error.response?.data
    });
    throw error;
  }
}
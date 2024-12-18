import React from 'react';

const OrderList = () => {
  const orders = [
    {
      id: '#FWB127364372',
      date: '20.12.2023',
      price: '\$4,756',
      status: 'Pre-order',
      statusColor: 'bg-blue-100 text-blue-600',
      buttonLabel: 'Cancel order',
      buttonColor: 'border-red-500 text-red-500'
    },
    {
      id: '#FWB125467980',
      date: '11.12.2023',
      price: '\$499',
      status: 'In transit',
      statusColor: 'bg-yellow-100 text-yellow-600',
      buttonLabel: 'Cancel order',
      buttonColor: 'border-red-500 text-red-500'
    },
    {
      id: '#FWB139485607',
      date: '08.12.2023',
      price: '\$85',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-600',
      buttonLabel: 'Order again',
      buttonColor: 'border-blue-600 text-blue-600'
    },
    {
      id: '#FWB137364371',
      date: '16.11.2023',
      price: '\$119',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-600',
      buttonLabel: 'Order again',
      buttonColor: 'border-blue-600 text-blue-600'
    },
    {
      id: '#FWB134567890',
      date: '02.11.2023',
      price: '\$2,056',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-600',
      buttonLabel: 'Order again',
      buttonColor: 'border-blue-600 text-blue-600'
    },
    {
      id: '#FWB146284623',
      date: '26.09.2023',
      price: '\$180',
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-600',
      buttonLabel: 'Order again',
      buttonColor: 'border-blue-600 text-blue-600'
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">My orders</h1>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Price: {order.price}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <span className={`px-2 py-1 rounded ${order.statusColor}`}>
                  {order.status}
                </span>
                <button
                  className={`px-4 py-2 border rounded ${order.buttonColor}`}
                >
                  {order.buttonLabel}
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded">
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
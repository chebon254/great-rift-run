import { useState, useEffect } from 'react';
import './animations.css';

interface CartNotificationProps {
  show: boolean;
  onComplete?: () => void;
}

const CartNotification = ({ show, onComplete }: CartNotificationProps) => {
  const [notifications, setNotifications] = useState<number[]>([]);
  
  useEffect(() => {
    if (show) {
      const id = Date.now();
      setNotifications(prev => [...prev, id]);
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(notifId => notifId !== id));
        onComplete?.();
      }, 1000);
    }
  }, [show, onComplete]);

  return (
    <div className="relative">
      {notifications.map(id => (
        <div
          key={id}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full 
                     animate-[float_1s_ease-out_forwards] pointer-events-none"
        >
          Added to cart!
        </div>
      ))}
    </div>
  );
};

export default CartNotification;
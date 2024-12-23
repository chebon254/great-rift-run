// src/context/LocationContext.tsx

"use client";

import React, { createContext, useContext, useState } from 'react';

interface LocationDetails {
  city: string;
  street: string;
  house: string;
  additionalInfo: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

interface LocationContextType {
  location: LocationDetails;
  updateLocation: (details: LocationDetails) => void;
  clearLocation: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<LocationDetails>({
    city: '',
    street: '',
    house: '',
    additionalInfo: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const updateLocation = (details: LocationDetails) => {
    setLocation(details);
  };

  const clearLocation = () => {
    setLocation({
      city: '',
      street: '',
      house: '',
      additionalInfo: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

  return (
    <LocationContext.Provider value={{
      location,
      updateLocation,
      clearLocation
    }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}

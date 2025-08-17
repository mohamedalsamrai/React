import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  name: string;
  phone: string;
  age: number;
  isEmployed: boolean;
  salary: number;
}

interface FormContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
  resetUser: () => void;
  isFormValid: boolean;
}

const initialUser: User = {
  name: "",
  phone: "",
  age: 0,
  isEmployed: false,
  salary: 0
};

const FormContext = createContext<FormContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const resetUser = () => {
    setUser(initialUser);
  };

  const isFormValid = user.name.trim() !== "" && 
                     user.phone.trim() !== "" && 
                     user.age > 0 && 
                     user.salary > 0;

  const value: FormContextType = {
    user,
    updateUser,
    resetUser,
    isFormValid
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

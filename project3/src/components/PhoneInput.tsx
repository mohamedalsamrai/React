import React from 'react';
import { useFormContext } from '../context/FormContext';

interface PhoneInputProps {
  placeholder?: string;
  id?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ placeholder = "Phone", id }) => {
  const { user, updateUser } = useFormContext();
  const formatPhoneNumber = (input: string) => {
    // Remove all non-digits
    const digits = input.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    updateUser({ phone: formatted });
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={user.phone}
      onChange={handleChange}
      id={id}
      maxLength={14} // (XXX) XXX-XXXX format
    />
  );
};

export default PhoneInput;

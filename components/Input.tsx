import React, { InputHTMLAttributes, ChangeEvent } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input  = ({ onChange,type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      {...props}
      autoComplete='off'
      onChange={onChange}
      className='w-full p-1 outline-none focus:outline-[#0b9219] rounded bg-transparent disabled:line-through disabled:text-gray-400'
    />
  );
};

export default Input;

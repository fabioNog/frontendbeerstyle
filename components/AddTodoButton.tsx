"use client";
import { v4 as uuidV4 } from "uuid";
import { beerApi } from "lib/beer";
import { useRouter } from "next/navigation";
import React, { InputHTMLAttributes,MouseEvent } from 'react';
import "./button.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const AddTodoButton = ({  ...props }: InputProps)  => {
  const router = useRouter();

  return (
    <button
      className="mt-4  bg-F28E1C bg-blue-500 text-white py-2 px-4 rounded"
      type="submit"
    >
      Enviar
    </button>
  );
};

export default AddTodoButton;

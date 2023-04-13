"use client";
import Link from "next/link";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import AddTodoButton from "../../components/AddTodoButton";
import Input from "../../components/Input";
import { beerApi } from "../../lib/beer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ideal: React.FC = () => {

  const [temperature, setTemperature] = useState(0);

  const handleTemperatureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTemperature(Number(event.target.value));
    },
    []
  );

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await beerApi.getBeer({
        temperature: temperature
      });
      toast.success('Cerveja encontrada com sucesso!', {
        autoClose: 3000 // toast fica visível por 5 segundos
      });
      
    } catch (error) {
      toast.error('Erro ao inserir', {
        autoClose: 3000 // toast fica visível por 5 segundos
      });
    }
  }, [temperature]);

  return (
    <>
      <div className="absolute inset-0 w-full h-max max-h-full overflow-auto rounded">
        <form className="flex-1 flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="input1">Temperatura Ideal</label>
          <Input id="input3" type="number" onChange={handleTemperatureChange} required />
          <AddTodoButton className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" type="submit" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Ideal;

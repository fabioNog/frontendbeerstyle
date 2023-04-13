"use client";
import React, { useCallback, useState } from "react";
import AddTodoButton from "components/AddTodoButton";
import Input from "components/Input";
import { beerApi } from "lib/beer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface InputProps {}

const Home: React.FC<InputProps> = () => {
  const [stylebeer, setStyle] = useState("");
  const [minTemperature, setMinTemperature] = useState(0);
  const [maxTemperature, setMaxTemperature] = useState(0);


  const handleStyleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStyle(event.target.value);
    },
    []
  );

  const handleMinTemperatureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMinTemperature(Number(event.target.value));
    },
    []
  );

  const handleMaxTemperatureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMaxTemperature(Number(event.target.value));
    },
    []
  );

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await beerApi.create({
        stylebeer,
        mintemperature: minTemperature,
        maxtemperature: maxTemperature,
      });
      toast.success('Cerveja criada com sucesso!', {
        autoClose: 3000 // toast fica visível por 5 segundos
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000)
    } catch (error) {
      console.log(error);
      toast.error('Erro ao criar cerveja', {
        autoClose: 3000 // toast fica visível por 5 segundos
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000)
    }
  }, [stylebeer, minTemperature, maxTemperature]);

  return (
    <div
      className="absolute inset-0 w-full h-max 
    max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5"
    >
      <div className="flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer">
        <form
          className="flex-1 flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="input1">Estilo da Cerveja</label>
          <Input
            id="input1"
            type="text"
            onChange={handleStyleChange}
            required
          />
          <label htmlFor="input1">Temperatura Mínima</label>
          <Input
            id="input2"
            type="number"
            onChange={handleMinTemperatureChange}
            required
          />
          <label htmlFor="input1">Temperatura Máxima</label>
          <Input
            id="input3"
            type="number"
            onChange={handleMaxTemperatureChange}
            required
          />

          <AddTodoButton
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            type="submit"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;

export const revalidate = 10;

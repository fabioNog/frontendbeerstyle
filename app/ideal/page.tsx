"use client";
import React, { useCallback, useState } from "react";
import AddTodoButton from "../../components/AddTodoButton";
import Input from "../../components/Input";
import { beerApi } from "../../lib/beer";
import { ToastContainer, toast } from "react-toastify";
import { TemperatureType, BeerType,Props } from "interfaces";
import "react-toastify/dist/ReactToastify.css";

import "./beercard.css"




const Ideal = ({ album,artists }: Props) => {
  const [temperature, setTemperature] = useState(0);
  const [beer, setBeer] = useState<BeerType | null>(null);

  const handleTemperatureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTemperature(Number(event.target.value));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        console.log(`Estou enviando a ${temperature}`)
        const response = await beerApi.getBeer({
          temperature,
        });
        console.log(response);
        setBeer(response);
        toast.success("Cerveja encontrada com sucesso!", {
          autoClose: 3000, // toast fica visível por 5 segundos
        });
      } catch (error) {
        toast.error("Cerveja não encontrada para esta temperatura", {
          autoClose: 3000, // toast fica visível por 5 segundos
        });
      }
    },
    [temperature]
  );

  return (
    <>
      <div className="absolute inset-0 w-full space-y-4 h-max max-h-full overflow-auto rounded">
        <form
          className="flex-1 flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="input1">Temperatura Ideal</label>
          <Input
            id="input3"
            type="number"
            onChange={handleTemperatureChange}
            required
          />
          <AddTodoButton
            type="submit"
          />
        </form>
        {beer && (
          <>
          <div className="beer-card items-center justify-center flex-1 flex flex-col space-y-4">
            <h2>{beer.stylebeer}</h2>
            <p>{beer.maxtemperature}</p>
            <p>{beer.mintemperature}</p>
            <p>{beer.artists[0].name}</p>
            <p>{beer.mintemperature}</p>
          </div>
          {/* <AlbumInfo album={album} /> */}
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};



export default Ideal;

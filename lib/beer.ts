import axios, { AxiosResponse } from "axios";
import { TemperatureType, BeerType } from "interfaces";

// const BASE_URL = process.env.URL_LOCAL||"https://beearstyledeploy.onrender.com";
const BASE_URL = 'http://localhost:3001';


interface BeerApiError {
  message: string;
}

export const beerApi = {
  create: async (beer: BeerType): Promise<BeerType> => {
    try {
      const response: AxiosResponse<BeerType> = await axios.post(`${BASE_URL}/beerstyle`, beer);
      return response.data;
    } catch (error) {
      throw new Error((error as BeerApiError).message);
    }
  },
  getBeer: async (temperature: TemperatureType): Promise<BeerType> => {
    try {
      const response: AxiosResponse<BeerType> = await axios.patch(
        `${BASE_URL}/beerstyle_temperature`,
        temperature
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw new Error((error as BeerApiError).message);
    }
  },
  getAll: async (): Promise<BeerType[]> => {
    try {
      const response: AxiosResponse<BeerType[]> = await axios.get(`${BASE_URL}/beerstyle`);
      return response.data;
    } catch (error) {
      throw new Error((error as BeerApiError).message);
    }
  },
  update: async (beer: BeerType): Promise<BeerType> => {
    try {
      const response: AxiosResponse<BeerType> = await axios.patch(
        `${BASE_URL}/beerstyle/${beer.mintemperature}`,
        beer
      );
      return response.data;
    } catch (error) {
      throw new Error((error as BeerApiError).message);
    }
  },
  delete: async (id: string): Promise<BeerType> => {
    try {
      const response: AxiosResponse<BeerType> = await axios.delete(`${BASE_URL}/beerstyle/${id}`);
      return response.data;
    } catch (error) {
      throw new Error((error as BeerApiError).message);
    }
  },
};

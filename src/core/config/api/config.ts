import axios from 'axios';
import Config from 'react-native-config';
import {errorHandler} from '../helper/errorHandler';
const apiKey = Config.API_KEY;
const BASE_URL = Config.BASE_URL;

interface PayloadRequest {
  cityName: string;
  lang?: string;
  days?: number;
  date?: string;
  hour?: number;
}
interface RequestConfig {
  baseURL: string;
  url: string;
  method: string;
}

const apiCall = async (config: RequestConfig) => {
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const fetchCurrent = (params: PayloadRequest) => {
  const options = {
    method: 'GET',
    url: `current.json?key=${apiKey}&q=${params.cityName}`,
    baseURL: `${BASE_URL}`,
  };
  return apiCall(options);
};

export const fetchAstronomy = (params: PayloadRequest) => {
  const options = {
    method: 'GET',
    url: `astronomy.json?key=${apiKey}&q=${params.cityName}&dt=${params.date}`,
    baseURL: `${BASE_URL}`,
  };
  return apiCall(options);
};

export const fetchForecast = (params: PayloadRequest) => {
  const options = {
    method: 'GET',
    url: `forecast.json?key=${apiKey}&q=${params.cityName}&days=1&dt=${params.date}`,
    baseURL: `${BASE_URL}`,
  };
  return apiCall(options);
};

export const fetchHistory = (params: PayloadRequest) => {
  const options = {
    method: 'GET',
    url: `history.json?key=${apiKey}&q=${params.cityName}&dt=${params.date}`,
    baseURL: `${BASE_URL}`,
  };
  return apiCall(options);
};

export const fetchLocation = (params: PayloadRequest) => {
  console.log('Text => ', params.cityName);
  const options = {
    method: 'GET',
    url: `search.json?key=${apiKey}&q=${params.cityName}`,
    baseURL: `${BASE_URL}`,
  };
  return apiCall(options);
};

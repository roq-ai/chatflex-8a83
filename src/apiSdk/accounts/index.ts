import axios from 'axios';
import queryString from 'query-string';
import { AccountInterface, AccountGetQueryInterface } from 'interfaces/account';
import { GetQueryInterface } from '../../interfaces';

export const getAccounts = async (query?: AccountGetQueryInterface) => {
  const response = await axios.get(`/api/accounts${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAccount = async (account: AccountInterface) => {
  const response = await axios.post('/api/accounts', account);
  return response.data;
};

export const updateAccountById = async (id: string, account: AccountInterface) => {
  const response = await axios.put(`/api/accounts/${id}`, account);
  return response.data;
};

export const getAccountById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/accounts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAccountById = async (id: string) => {
  const response = await axios.delete(`/api/accounts/${id}`);
  return response.data;
};

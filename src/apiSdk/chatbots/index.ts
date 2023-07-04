import axios from 'axios';
import queryString from 'query-string';
import { ChatbotInterface, ChatbotGetQueryInterface } from 'interfaces/chatbot';
import { GetQueryInterface } from '../../interfaces';

export const getChatbots = async (query?: ChatbotGetQueryInterface) => {
  const response = await axios.get(`/api/chatbots${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createChatbot = async (chatbot: ChatbotInterface) => {
  const response = await axios.post('/api/chatbots', chatbot);
  return response.data;
};

export const updateChatbotById = async (id: string, chatbot: ChatbotInterface) => {
  const response = await axios.put(`/api/chatbots/${id}`, chatbot);
  return response.data;
};

export const getChatbotById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chatbots/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatbotById = async (id: string) => {
  const response = await axios.delete(`/api/chatbots/${id}`);
  return response.data;
};

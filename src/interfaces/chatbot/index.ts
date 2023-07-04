import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface ChatbotInterface {
  id?: string;
  name: string;
  description?: string;
  account_id?: string;
  created_at?: any;
  updated_at?: any;

  account?: AccountInterface;
  _count?: {};
}

export interface ChatbotGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  account_id?: string;
}

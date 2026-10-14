export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
  createdAt: string;
}

export interface AuthSession {
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'novo' | 'contato' | 'orçamento' | 'fechado' | 'recusado';
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projects: number;
  status: 'ativo' | 'inativo';
  createdAt: string;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  description: string;
  status: 'planejamento' | 'execução' | 'finalizado';
  startDate: string;
  endDate?: string;
  budget: number;
  spent: number;
}

// Serviço Supabase - Mock para desenvolvimento
// Em produção, integrar com @supabase/supabase-js

import type { User, Lead, Client, Project } from '../types/auth';

// Mock data
const mockUser: User = {
  id: '1',
  email: 'admin@dkrevestimentos.com.br',
  name: 'Administrador',
  role: 'admin',
  createdAt: new Date().toISOString(),
};

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 98765-4321',
    message: 'Gostaria de saber mais sobre os serviços',
    status: 'novo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    phone: '(11) 99876-5432',
    message: 'Preciso de orçamento para minha casa',
    status: 'contato',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Cliente Exemplo 1',
    email: 'cliente1@email.com',
    phone: '(11) 91234-5678',
    address: 'São Paulo, SP',
    projects: 2,
    status: 'ativo',
    createdAt: new Date().toISOString(),
  },
];

// Funções de autenticação
export const auth = {
  login: async (email: string, password: string): Promise<User | null> => {
    // Mock: aceitar qualquer credencial
    if (email && password) {
      return mockUser;
    }
    return null;
  },

  logout: async (): Promise<void> => {
    // Mock logout
    console.log('Usuário desconectado');
  },

  getCurrentUser: async (): Promise<User | null> => {
    // Mock: retornar usuário mockado
    return mockUser;
  },
};

// Funções de leads
export const leads = {
  getAll: async (): Promise<Lead[]> => {
    return mockLeads;
  },

  getById: async (id: string): Promise<Lead | null> => {
    return mockLeads.find((l) => l.id === id) || null;
  },

  create: async (data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lead> => {
    const newLead: Lead = {
      ...data,
      id: String(mockLeads.length + 1),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockLeads.push(newLead);
    return newLead;
  },

  update: async (id: string, data: Partial<Lead>): Promise<Lead | null> => {
    const lead = mockLeads.find((l) => l.id === id);
    if (!lead) return null;
    Object.assign(lead, data, { updatedAt: new Date().toISOString() });
    return lead;
  },

  delete: async (id: string): Promise<boolean> => {
    const index = mockLeads.findIndex((l) => l.id === id);
    if (index === -1) return false;
    mockLeads.splice(index, 1);
    return true;
  },
};

// Funções de clientes
export const clients = {
  getAll: async (): Promise<Client[]> => {
    return mockClients;
  },

  getById: async (id: string): Promise<Client | null> => {
    return mockClients.find((c) => c.id === id) || null;
  },

  create: async (data: Omit<Client, 'id' | 'createdAt'>): Promise<Client> => {
    const newClient: Client = {
      ...data,
      id: String(mockClients.length + 1),
      createdAt: new Date().toISOString(),
    };
    mockClients.push(newClient);
    return newClient;
  },

  update: async (id: string, data: Partial<Client>): Promise<Client | null> => {
    const client = mockClients.find((c) => c.id === id);
    if (!client) return null;
    Object.assign(client, data);
    return client;
  },

  delete: async (id: string): Promise<boolean> => {
    const index = mockClients.findIndex((c) => c.id === id);
    if (index === -1) return false;
    mockClients.splice(index, 1);
    return true;
  },
};

// Função helper para stats
export const stats = {
  getMetrics: async () => {
    return {
      totalLeads: mockLeads.length,
      newLeads: mockLeads.filter((l) => l.status === 'novo').length,
      totalClients: mockClients.length,
      activeProjects: 3,
    };
  },
};

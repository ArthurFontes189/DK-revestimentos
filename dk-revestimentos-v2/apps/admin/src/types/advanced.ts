export interface ServiceSheet {
  id: string;
  projectId: string;
  title: string;
  description: string;
  materials: Array<{
    name: string;
    quantity: number;
    unit: string;
    cost: number;
  }>;
  labor: Array<{
    task: string;
    hours: number;
    hourlyRate: number;
  }>;
  estimatedCost: number;
  status: 'draft' | 'approved' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  salary: number;
  status: 'ativo' | 'inativo';
  startDate: string;
  createdAt: string;
}

export interface FinanceEntry {
  id: string;
  type: 'receita' | 'despesa';
  category: string;
  amount: number;
  description: string;
  date: string;
  status: 'pendente' | 'confirmada' | 'cancelada';
  relatedProject?: string;
}

export interface FinanceSummary {
  totalReceita: number;
  totalDespesa: number;
  lucro: number;
  margem: number;
  mes: string;
}

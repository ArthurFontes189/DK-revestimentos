import React, { useEffect, useState } from 'react';
import { Card, Grid } from '@dk-revestimentos/design-system';
import { stats } from '../services/supabase';

interface Metrics {
  totalLeads: number;
  newLeads: number;
  totalClients: number;
  activeProjects: number;
}

export const DashboardMetrics = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const data = await stats.getMetrics();
        setMetrics(data);
      } catch (err) {
        console.error('Erro ao carregar métricas:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMetrics();
  }, []);

  if (loading) {
    return (
      <Grid columns={4} gap={24}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-32 animate-pulse" />
        ))}
      </Grid>
    );
  }

  if (!metrics) {
    return <div>Erro ao carregar métricas</div>;
  }

  const metricCards = [
    {
      label: 'Leads Novos',
      value: metrics.newLeads,
      color: 'text-yellow-600',
      icon: '📥',
      bgColor: 'bg-yellow-50',
    },
    {
      label: 'Total de Leads',
      value: metrics.totalLeads,
      color: 'text-blue-600',
      icon: '📊',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Clientes',
      value: metrics.totalClients,
      color: 'text-green-600',
      icon: '👥',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Projetos Ativos',
      value: metrics.activeProjects,
      color: 'text-purple-600',
      icon: '🏗️',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <Grid columns={4} gap={24} class="mb-12">
      {metricCards.map((metric) => (
        <Card key={metric.label} variant="elevated" class={metric.bgColor}>
          <div class="flex items-start justify-between">
            <div>
              <p class="text-gray-600 text-sm mb-2">{metric.label}</p>
              <p class={`text-4xl font-bold ${metric.color}`}>{metric.value}</p>
            </div>
            <span class="text-3xl">{metric.icon}</span>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

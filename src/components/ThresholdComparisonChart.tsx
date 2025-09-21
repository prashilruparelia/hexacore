import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const thresholdData = [
  {
    parameter: 'Total Count',
    threshold: 2000,
    observed: 2450,
    unit: 'particles/mL'
  },
  {
    parameter: 'Large Particles',
    threshold: 500,
    observed: 255,
    unit: 'particles/mL'
  },
  {
    parameter: 'PE Content',
    threshold: 800,
    observed: 858,
    unit: 'particles/mL'
  },
  {
    parameter: 'Dangerous Size',
    threshold: 100,
    observed: 145,
    unit: 'particles/mL'
  }
];

export const ThresholdComparisonChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={thresholdData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="parameter" 
            tick={{ fontSize: 11 }}
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis 
            tick={{ fontSize: 11 }}
            stroke="hsl(var(--muted-foreground))"
            label={{ value: 'Particles/mL', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value: any, name: string) => [
              `${value} particles/mL`, 
              name === 'threshold' ? 'Safety Threshold' : 'Observed Value'
            ]}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar 
            dataKey="threshold" 
            fill="hsl(var(--warning))"
            name="Safety Threshold"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="observed" 
            fill="hsl(var(--primary))"
            name="Observed Value"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
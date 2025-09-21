import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sizeData = [
  { size: '10-50 µm', concentration: 1250, channel: 'Coulter' },
  { size: '50-100 µm', concentration: 890, channel: 'Coulter' },
  { size: '100-200 µm', concentration: 640, channel: 'Dark-Field' },
  { size: '200-500 µm', concentration: 420, channel: 'Dark-Field' },
  { size: '500µm-1mm', concentration: 180, channel: 'IR Scattering' },
  { size: '1-5 mm', concentration: 75, channel: 'IR Scattering' }
];

export const SizeConcentrationChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sizeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="size" 
            tick={{ fontSize: 11 }}
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis 
            tick={{ fontSize: 11 }}
            stroke="hsl(var(--muted-foreground))"
            label={{ value: 'Particles/mL', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value: any) => [`${value} particles/mL`, 'Concentration']}
            labelFormatter={(label: any) => `Size Range: ${label}`}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Bar 
            dataKey="concentration" 
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
import { AreaChart, Area, Tooltip, ReferenceDot } from "recharts";

const data = [
  { name: "A", value: 100 },
  { name: "B", value: 130 },
  { name: "C", value: 110 },
  { name: "D", value: 165 },
  { name: "E", value: 140 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "blue",
          padding: "5px",
          border: "1px solid black",
        }}
      >
        <p>{`1BTC = $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function Graph() {
  return (
    <AreaChart width={330} height={120} data={data}>
      <defs>
        <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(255, 152, 30)" />
          <stop offset="100%" stopColor="rgb(255, 190, 60)" />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="value"
        stroke="url(#yellowGradient)"
        strokeWidth={4}
        fill="#fff7ee"
      />
      <Tooltip content={<CustomTooltip />} />
      <ReferenceDot
        x={data[data.length - 1].name}
        y={data[data.length - 1].value}
        stroke="url(#yellowGradient)"
        fill="url(#yellowGradient)"
        r={10}
      />
    </AreaChart>
  );
}

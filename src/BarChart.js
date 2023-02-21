import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="high" stackId="a" fill="#ADC5A2" />
        <Bar dataKey="low" stackId="a" fill="#888CB6" />
      </BarChart>
    </ResponsiveContainer>
  );
}

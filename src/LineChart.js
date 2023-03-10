import React from "react";
import {
  LineChart,
  Line,
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
      <LineChart
        data={data}
        margin={{
          top: 5,
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
        {/* <Line
          type="monotone"
          dataKey="open"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        /> */}
        <Line type="monotone" dataKey="volume" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

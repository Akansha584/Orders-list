import React, { PureComponent } from "react";
import { AreaChart, Area } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface Graph {
  graphColor: string;
  graphStroke: string;
}

export default class OrderGraph extends PureComponent<Graph> {
  render() {
    return (
      <AreaChart
        width={100}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area
          type="monotone"
          dataKey="uv"
          stroke={this.props.graphStroke}
          fill={this.props.graphColor}
        />
      </AreaChart>
    );
  }
}

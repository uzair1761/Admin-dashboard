import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'January',
    total:1200
    
  },
  {
    name: 'Febuary',
    total:200
    
  },
  {
    name: 'March',
    total:800
    
  },
  {
    name: 'April',
    total:1000
   
  },
  {
    name: 'May',
    total:1400
    
  },
  {
    name: 'June',
    total:1300
   
  },
  {
    name: 'July',
    total:2100
    
  },
];

const Chart = ({aspect}) => {
  return (
    
    <div className="chart">
      <div className="title">Last 6 month revenue</div>
      <ResponsiveContainer width='100%' aspect={3/3}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
 
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke='grey' fillOpacity={4} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="name" stroke="grey" fillOpacity={4} fill="url(#colorPv)" />
</AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default Chart
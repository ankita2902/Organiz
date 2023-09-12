import React from "react"
import { DashboardFilled, DashboardOutlined, ForkOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Card, Space, Statistic, Typography } from "antd"

import Charts from "../charts"

import Date from "../Date"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


function Dashboard() {
    return(
        <div>
      
            <Typography.Title level={4} >Dashboard</Typography.Title>
            <Date/>
            <Space direction="horizontal">
            <DashboardCard  icon={<DashboardOutlined style={{color: "blue",backgroundColor:"beige",borderRadius:"12",fontSize:24,padding:8}}/>} title={"forms"} value={2000}/>
            <DashboardCard icon={<UserOutlined style={{color: "blue",backgroundColor:"beige",borderRadius:"12",fontSize:24,padding:8}}/>} title={"user"} value={3400}/>
            <DashboardCard icon={<SettingOutlined style={{color: "blue",backgroundColor:"beige",borderRadius:"12",fontSize:24,padding:8}}/>} title={"settings"} value={500}/>
            <DashboardCard icon={<DashboardFilled style={{color: "blue",backgroundColor:"beige",borderRadius:"12",fontSize:24,padding:8}}/>} title={"Register"} value={500}/>
            <DashboardCard icon={<ForkOutlined style={{color: "blue",backgroundColor:"beige",borderRadius:"12",fontSize:24,padding:8}}/>} title={"data"} value={500}/>
         
            <DashboardChart />
            
   
    </Space>
    <Space direction="horizontal">
   
            <Charts />
            <Charts />
           
            </Space>
           
       
        </div>
        
    )
}


function DashboardCard({title,value,icon}){
    return(
        <Card>
            <Space direction="horizontal">
           
                   {icon}
                    <Statistic title={title} value={value}/>
                   
            </Space>
         
        </Card>
        
    )
    
}

function DashboardChart(){
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Status',
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1', 
            data: labels.map(() => Math.random()*1000),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => Math.random()*1000),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      
    return <Bar options={options} data={data} />;
}
export default Dashboard
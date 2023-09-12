import React from "react";
import { Space,Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { getUser} from "../../Api";



function UserManagement() {
    const [loading,setLoading] = useState(false)
    const [dataSource,setDataSource]= useState([])

    useEffect(() => {
        setLoading(true)
        getUser().then((res)=>{
            setDataSource(res.users)
            setLoading(false);
        })
    },[])
    
    return(
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>UserManagement</Typography.Title>
          
            <Table
   loading={loading}
            columns={[
                {
                    title:"firstName",
                    dataIndex:"firstName",
                },
                {
                    title:"lastName",
                    dataIndex:"lastNname",
                },
                {
                    title:"age",
                    dataIndex:"age",
                }, 
                {
                    title:"gender",
                    dataIndex:"gender",
                },
                {
                    title:"email",
                    dataIndex:"email",
                },
                {
                    title:"password",
                    dataIndex:"password",
                },
                {
                    title:"birthDate",
                    dataIndex:"birthDate",
                },
            ]}
            dataSource={dataSource}
            ></Table>
        </Space>
    )
}
export default UserManagement
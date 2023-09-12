import { AppstoreOutlined, SettingOutlined,  UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'




function SideMenu (){
  const navigate = useNavigate()
  return (
    <div className='SideMenu'>
   <Menu onClick={(item)=>{
    navigate(item.key)


   }}
   items={[
    {
        label:"Dasboard",
        icon:<AppstoreOutlined/>,
        key:"/"
    },
    {
        label:"User Management",
        icon:<UserOutlined/>,
        key:"/usermanagement"
    },
    {
        label:"Logo Settings",
        icon:<SettingOutlined/>,
        key:"/logosettings"
    }
   ]}
   >

   </Menu>
    </div>
  )
}

export default SideMenu

import React from 'react'
import {BellFilled, MailOutlined} from "@ant-design/icons"
import { Badge,Typography,Space} from "antd"
import { useAuth0 } from "@auth0/auth0-react";

const AppHeader = () => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <div className='AppHeader'>
   <Typography.Title>Analytics Insights Dashboard
   </Typography.Title>
   <ul>{isAuthenticated &&  <p>{user.name}</p>}</ul>
   {isAuthenticated ?(
    <ul>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </ul>

   ):(
    <ul><button onClick={() => loginWithRedirect()}>Log In</button></ul>
   )}
   
   
   <Space>
   <Badge count={10} dot>
   <MailOutlined style={{fontsize:24}}/>
   </Badge>
   <Badge count={10}>
   <BellFilled style={{fontsize:24}}/>
   </Badge>
  </Space>

    </div>
  )
}

export default AppHeader

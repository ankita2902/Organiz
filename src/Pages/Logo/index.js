import React from 'react'
import { Button, Upload } from 'antd'


export default function Logo(){
    return(
        <div style={{
           
            justifyContent:"center",
            alignItems:"center",
            height:"50vh",
            width:"50vh"
        }}>
        
      <Upload.Dragger multiple listType='picture' action={"https://localhost:3000/"}>
      <h2>Drag Logo/Photos here or</h2>
      <br/>
        <Button> Click Upload</Button>
      </Upload.Dragger>
        </div>
    )
}
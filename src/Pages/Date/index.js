import { DatePicker, Space } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;

function Date(){
    return(
        <div style={{margin:20}}>
<RangePicker/>
        </div>
    )
}
export default Date;
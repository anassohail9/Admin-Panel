import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import { COLUMNS } from './Column'

export const NewData = () => {
    const [newdata, setnewdata] = useState([])

    useEffect(() => {
        (async () => {
          const result = await axios("/getDeviceTypes");
          setnewdata(result.data);
        })();
      }, []);
      
    return (
       <div>

       </div>


    )
}


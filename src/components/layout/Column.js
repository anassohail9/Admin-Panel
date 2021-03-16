
export const DEVICE_TYPE_COLUMNS =[
    { 
        Header: 'ID',
        Cell: (row) => {
            return <div>{row.index+1}</div>;
          }
    },
    {
        Header:'DEVICE DESCRIPTION',
        accessor:'device_desc'
    },
    {
        Header:'DEVICE NAME',
        accessor:'device_name'
    },
    {
        Header:'DEVICE CODE',
        accessor:'device_code'
    }
] 

export const PARAMETER_TYPE_COLUMNS = [
    {
        Header:'ID',
        Cell: (row) => {
            return <div>{row.index+1}</div>;
          }
    },
    {
        Header:'PARAMETERS',
        accessor:'parameters'
    },
    {
        Header:'UNITS',
        accessor:'units'
    }
]

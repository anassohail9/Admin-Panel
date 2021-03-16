import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import axios from 'axios'
import { DEVICE_TYPE_COLUMNS, PARAMETER_TYPE_COLUMNS } from '../Column';
import './style.css';
import { FaSortDown, FaSortUp } from 'react-icons/fa'

export const DeviceTable = () => {
    const columns = useMemo(() => DEVICE_TYPE_COLUMNS, [])
    const [newdata, setnewdata] = useState([])
    useEffect(() => {
        (async () => {
            const result = await axios("/getDeviceTypes");
            setnewdata(result.data);
        })();
    }, []);

    return (
        <div>
            <BasicTable
                columns={columns}
                data={newdata}
            ></BasicTable>
        </div>
    )
    }
    
export const ParameterTable = ({ devicetype }) => {
    const column = useMemo(() => PARAMETER_TYPE_COLUMNS, [])
    const [parameter, setparameter] = useState([])
    const [parameterdata, setparameterdata] = useState([])

    useEffect(() => {
        if ({ parameterdata } != null && { parameterdata } !== undefined) {
            setparameter({ parameterdata }.parameters)
            return (
                <div>
                    <BasicTable
                        columns={column}
                        data={parameterdata.parameters}
                    ></BasicTable>
                </div>
            )
        }
        console.log({ column })
    }, [{parameterdata}])

    useEffect(() => {
        axios.get(`/parameters/${devicetype}`)
            .then(response => { setparameterdata(response.data) })
            .then(error => { console.log(error) })

    }, [devicetype])

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}


function BasicTable({ data, columns }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    },
        useSortBy
    )

    return !data.length ? <div>Loading...</div> :
        (
            <div id="tableDiv">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                { headerGroup.headers.map((columns) => (
                                    <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                                        { columns.render('Header')}
                                        <span>
                                            {columns.isSorted ? (columns.isSortedDesc ?<FaSortUp />:<FaSortDown />):''}
                                        </span>
                                    </th>
                                ))}

                            </tr>
                        ))}

                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row,index) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render("Cell", { index: index })}
                                        </td>
                                    })}

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
}

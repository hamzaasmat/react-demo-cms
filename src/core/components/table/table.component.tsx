import React, { useEffect, useState } from "react";
import './table.component.scss';
import { TableColumn, TableProps } from "../../interfaces/IAppTable.interface";
import httpService from '../../services/network.service';

const AppTable: React.FC<TableProps> = ({
    data,
    columns,
    apiConfigs,
    reload
}) => {

    const [itemList, setItemList] = useState<any>([]);
    const [loading, setLoading] = useState<any>(false);

    const loadResources = (pageIndex?: any) => {

        setLoading(true);
        const body: any = { ...apiConfigs?.body };

        httpService.request(
            apiConfigs?.method || "POST",
            apiConfigs?.url,
            null, false,
            { params: body }
        ).then((res: any) => {
            if (res?.data) {
                setLoading(false)
                setItemList(res?.data || []);
            }
        });
    }

    return (
        <div className="responsive">
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={`${column.key}`}>
                                {
                                    column.type === 'checkbox' ?
                                        <input type="checkbox" /> : null
                                }
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        loading && !data ? (
                            'Loading'
                        ) :
                            (data ? data : itemList).map((row: any, rowIndex: any) => (
                                <tr key={rowIndex}>
                                    {columns.map((column: any) => (
                                        <td key={`${column.key}-${rowIndex}`} className={column.class}>
                                            {
                                                column.type === 'checkbox' ?
                                                    <input type="checkbox" /> : null
                                            }
                                            {
                                                column.type === 'image' ?
                                                    <img src={row[column.key]} alt="" /> :
                                                    row[column.key]
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AppTable;
'use client'
import { useMemo, useRef, useState } from "react";

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const CustomButtonComponent = (props:any) => {
    return <button onClick={() => window.alert('clicked')} className="bg-red-400 rounded-sm w-20 h-8 flex justify-center text-center items-center">Push Me!</button>;
};

interface CurrencyData {
    currency: string;
    rate: string;
    description: string;
  }

export default function Tickets() {
    const [rowData, setRowData] = useState([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
        { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
        { make: 'Fiat', model: '500', price: 15774, electric: false },
        { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    ]);
    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: 'Make & Model',
            valueGetter: (p:any) => p.data.make + ' ' + p.data.model,
            flex: 2,
        },
        {
            field: 'price',
            valueFormatter: (p:any) => '£' + Math.floor(p.value).toLocaleString(),
            flex: 1,
        },
        { field: 'electric', flex: 1 },
        { field: 'button', cellRenderer: CustomButtonComponent, flex: 1 },
        // { field: 'make', sortable: true, filter: true },
        // { field: 'model', sortable: true, filter: true },
        // { field: 'price', sortable: true, filter: true },
        // { field: 'electric', sortable: true, filter: true },
    ] as any[]);

    const fetchData = async () => {
        // try {
        //   const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        //   const result = await response.json();
        //   const data: { bpi: Record<string, { rate: string; description: string }> } = result.data;
          
        //   const currencyData: CurrencyData[] = Object.entries(data.bpi).map(([currency, data]) => ({
        //     currency,
        //     rate: data.rate,
        //     description: data.description,
        //   }));
          
        //   setRowData(currencyData);
        // } catch (error) {
        //   console.error('Error fetching data:', error);
        // }
      };

    // useEffect(() => {
    //     fetchData();
    //   }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            editable: true
        }
    }, [])

    return (
        <div >
            <div className='ag-theme-quartz' style={{ height: '50vh', width: '80vw'}}  >
                <AgGridReact 
                    rowData={rowData} 
                    columnDefs={columnDefs} 
                    defaultColDef={defaultColDef} 
                    pagination={true}
                    paginationPageSize={10}
                    animateRows={true}
                    />
            </div>
        </div>
    );
};
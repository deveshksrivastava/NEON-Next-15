'use client'
import { useMemo, useRef, useState, useEffect } from "react";

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { ToastContainer, toast } from 'react-toastify';
import { RiDeleteBin6Fill } from "react-icons/ri";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const CustomButtonComponent = (props: any) => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/model');
            const result = await response.json();
            // const data: { bpi: Record<string, { rate: string; description: string }> } = result.data;
            console.log('data', result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <RiDeleteBin6Fill color="black"
            onClick={() => window.alert('clicked')}
            className=" rounded-sm w-6 h-8  flex justify-center text-center items-center"
        />
        // <button onClick={() => window.alert('clicked')} className="bg-red-400 rounded-sm w-20 h-8 flex justify-center text-center items-center">Push Me!</button>
    )
};

interface CurrencyData {
    name: string;
    models: string;
    price: string;
    isElectric: true,
}

export default function Tickets() {
    const [formData, setFormData] = useState({
        name: '',
        models: '',
        price: 0,
        isElectric: true,
    });
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: 'Name & Model',
            valueGetter: (p: any) => p.data.name + ' ' + p.data.models,
            flex: 2,
            filter: true, floatingFilter: true
        },
        {
            field: 'price',
            valueFormatter: (p: any) => '£' + Math.floor(p.data.price).toLocaleString(),
            flex: 1,
            filter: true, floatingFilter: true
        },
        {
            field: 'isElectric',
            flex: 1,
            valueGetter: (p: any) => p.data.isElectric ? 'Yes' : 'No',
            filter: true, floatingFilter: true
        },
        {
            field: 'action',
            cellRenderer: (params: any) => (
                <div>
                    <button onClick={() => handleDelete(params.node.rowIndex)} className="bg-red-400 rounded-sm w-20 h-8">Delete</button>
                    <button onClick={() => handleEdit(params.node.rowIndex)} className="bg-green-400 rounded-sm w-20 h-8">Edit</button>
                </div>
            ),
            editable: false,
            flex: 1
        },
    ] as any[]);

    const handleDelete = (rowIndex: any) => {
        alert(`Delete row ${rowIndex}`);
        console.log('Deleting row:', rowIndex);
        // const newData = [...rowData];
        // newData.splice(rowIndex, 1);
        // setRowData(newData);
    };

    const handleEdit = (rowIndex: any) => {
        // Implement your edit logic here, e.g., open a modal or inline editing
        console.log('Editing row:', rowIndex);
    };


    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/model');
            const result = await response.json();
            // const data: { bpi: Record<string, { rate: string; description: string }> } = result.data;
            console.log('data', result);
            setRowData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        fetch('http://localhost:3000/api/model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                fetchData();
                toast.success('Data saved successfully');
                console.log('Data saved successfully:', data);
                setFormData({
                    name: '',
                    models: '',
                    price: 0,
                    isElectric: false,
                })

            })
            .catch(error => {
                toast.error('Error saving data');
                console.error('Error saving data:', error);
            })

    };

    useEffect(() => {
        fetchData();
    }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            editable: true
        }
    }, [])

    return (
        <div >
            <h1>Tickets</h1>
            <div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4 text-gray-700">Tesla Model Y Form</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">name:</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        // disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="models" className="block text-sm font-medium text-gray-700">Model:</label>
                        <input
                            type="text"
                            id="models"
                            value={formData.models}
                            onChange={handleChange}
                            name="models"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        // disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={formData.price === 0 ? '' : formData.price}
                            onChange={handleChange}
                            name="price"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="electric" className="flex items-center  text-sm font-medium text-gray-700">
                            <input
                                type="checkbox"
                                id="isElectric"
                                checked={formData.isElectric}
                                onChange={handleChange}
                                name="isElectric"
                                className="mr-2 "
                            />
                            Electric
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
            <div className='ag-theme-quartz pt-10' style={{ height: '50vh', width: '60vw' }}  >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 25, 50]}
                    animateRows={true}
                />
            </div>
        </div>
    );
};
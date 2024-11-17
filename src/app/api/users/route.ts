// src/app/api/data/route.ts

import { NextResponse, NextRequest } from 'next/server';
import { middleware as logger } from '../middleware/logger'; // Adjust the path as necessary

// Middleware to log requests
export function middleware(request:NextRequest) {
  return logger(request); // Call the logger middleware
}


// Sample data for demonstration
let sampleData = [
    { id: 1, name: 'Item 1', category: 'A' },
    { id: 2, name: 'Item 2', category: 'B' },
    { id: 3, name: 'Item 3', category: 'A' },
    { id: 4, name: 'Item 4', category: 'C' },
];

// GET method
export async function GET(request:NextRequest) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (category) {
        const filteredData = sampleData.filter(item => item.category === category);
        return NextResponse.json(filteredData);
    }

    return NextResponse.json(sampleData);
}

// POST method
export async function POST(request:NextRequest) {
  console.log('POST', POST)
    const newItem = await request.json();
    newItem.id = sampleData.length + 1; // Assign a new ID
    sampleData.push(newItem);
    return NextResponse.json(newItem, { status: 201 });
}

// PUT method
export async function PUT(request:NextRequest) {
    const updatedItem = await request.json();
    const index = sampleData.findIndex(item => item.id === updatedItem.id);

    if (index !== -1) {
        sampleData[index] = updatedItem;
        return NextResponse.json(updatedItem);
    }

    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}

// PATCH method
export async function PATCH(request:NextRequest) {
    const partialUpdate = await request.json();
    const index = sampleData.findIndex(item => item.id === partialUpdate.id);

    if (index !== -1) {
        sampleData[index] = { ...sampleData[index], ...partialUpdate };
        return NextResponse.json(sampleData[index]);
    }

    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}

// DELETE method
export async function DELETE(request:NextRequest) {
    const { searchParams } = new URL(request.url);
    console.log('DELETE', searchParams)
    const id = parseInt(searchParams?.get('id')!, 10);
    const index = sampleData.findIndex(item => item.id === id);

    if (index !== -1) {
        const deletedItem = sampleData.splice(index, 1);
        return NextResponse.json(deletedItem);
    }

    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}

// HEAD method
export async function HEAD(request:NextRequest) {
    return new Response(null, { status: 200 });
}

// OPTIONS method
export async function OPTIONS(request:NextRequest) {
    return NextResponse.json({
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
    });
}

/// running code with the normal .next

// //GET /api/example?param1=value1&param2=value2&param3=value3
// export async function GET(request:NextRequest) {
//     const { searchParams } = new URL(request.url);
    
//     // Extracting multiple query parameters
//     const param1 = searchParams.get('param1');
//     console.log('param1',param1);

//     // // Check if a specific category is requested
//     // const category = searchParams.get('category');

//     // if (category) {
//     //     // Filter data based on the category query parameter
//     //     const filteredData = sampleData.filter(item => item.category === category);
//     //     return NextResponse.json(filteredData);
//     // }

//     // Handle GET request
//     return NextResponse.json({ message: 'GET request successful' });
// }

// export async function POST(request: NextRequest) {
//     // Handle POST request
//     const data = await request.json();
//     return NextResponse.json({ message: 'POST request successful', data });
// }
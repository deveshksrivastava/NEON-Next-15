// src/app/api/data/route.ts

import { NextResponse, NextRequest } from 'next/server';
import { middleware as logger } from '../middleware/logger'; // Adjust the path as necessary
// import Models from '@/models/Model';
import Pager from '@/models/Model';
import dbConnect from '@/lib/mongodb';

// Middleware to log requests
export function middleware(request: NextRequest) {
    return logger(request); // Call the logger middleware
}


// Sample data for demonstration
let sampleData = [
    { id: 1, name: 'Item 1', category: 'A' },
    { id: 2, name: 'Item 2', category: 'B' },
    { id: 3, name: 'Item 3', category: 'A' },
    { id: 4, name: 'Item 4', category: 'C' },
];


// // GET ALL method
export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (id) {
            const filteredData = await Pager.find({ _id: id });
            return NextResponse.json(filteredData);
        }
        const models = await Pager.find();
        return NextResponse.json(models);
    } catch (error: any) {
        console.error('Failed to Retrive Model:', error);
        return NextResponse.json({ error: 'Failed to retrive Model' }, { status: 500 });
    }

}

// POST method
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const { name, models, price, isElectric } = await request.json();
        console.log('POST model - ', name, models, price, isElectric)
        const exitModel = await Pager.findOne({ name });
        if (exitModel) {
            return NextResponse.json({ message: 'Model already exists' }, { status: 409 });
        }
        const model = new Pager({ name, models, price, isElectric });
        console.log('model', model)

        await model.save();
        return NextResponse.json(model, { status: 201 });
    } catch (error: any) {
        console.error('Failed to register Model:', error);
        return NextResponse.json({ error: 'Failed to register Model' }, { status: 500 });
    }
}

// PUT method - Full update
export async function PUT(request: NextRequest) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        console.log('searchParams----------', searchParams)
        const id = searchParams?.get('id');
        // const model = await Pager.findById(id);
        // if (!model) {
        //     return NextResponse.json({ message: 'Model not found' }, { status: 404 });
        // }

        // console.log('model**************', model)
        const updatedItem = await request.json();

        const updatedTodo = await Pager.findByIdAndUpdate(id, updatedItem, { new: false });
        NextResponse.json({ message: 'Model updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to update Model:', error);
        NextResponse.json({ message: 'Failed to update Model' }, { status: 400 });
    }
}

// PATCH method - Partial update
export async function PATCH(request: NextRequest) {
    const partialUpdate = await request.json();
    const index = sampleData.findIndex(item => item.id === partialUpdate.id);

    if (index !== -1) {
        sampleData[index] = { ...sampleData[index], ...partialUpdate };
        return NextResponse.json(sampleData[index]);
    }

    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}

// DELETE method
// http://localhost:3000/api/model?id=10000
export async function DELETE(request: NextRequest, response: NextResponse) {
    const { searchParams } = new URL(request.url);
    console.log('DELETE - ', searchParams?.get('id'))

    try {
        await dbConnect();
        // const id = parseInt(searchParams?.get('id')!, 100);
        const id = searchParams?.get('id');
        const model = await Pager.findById(id);
        if (!model) {
            return NextResponse.json({ message: 'Model not found' }, { status: 404 });
        }

        await Pager.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });

    } catch (error) {
        console.error('Failed to deleted:', error);
        return NextResponse.json({ error: 'Cannot be deleted' }, { status: 404 });
    }
}


// HEAD method
export async function HEAD(request: NextRequest) {
    return new Response(null, { status: 200 });
}

// OPTIONS method
export async function OPTIONS(request: NextRequest) {
    return NextResponse.json({
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
    });
}


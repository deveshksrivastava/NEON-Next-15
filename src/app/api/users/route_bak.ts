import { NextResponse } from 'next/server';

import User from '@/models/User'; 
import dbConnect from '@/lib/mongodb';
// import { NextResponse } from next-connect


export async function GET() {
  try {
    await dbConnect(); 

    const users = await User.find(); 
    // const users = await db
    //         .collection("users")
    //         .find({})
    //         .sort({ metacritic: -1 })
    //         .limit(10)
    //         .toArray();
    // console.log('users',users)

    return NextResponse.json(users); 
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
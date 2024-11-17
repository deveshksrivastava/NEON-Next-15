// src/middleware/logger.ts

import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log(`Request Method: ${request.method}, Request URL: ${request.url}`);
    return NextResponse.next(); // Proceed to the next middleware or route handler
}
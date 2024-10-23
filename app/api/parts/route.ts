import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const parts = await sql`SELECT * FROM harrison_parts;`;
    return NextResponse.json({ parts }, { status: 200 });
}

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const { item, part_number, description, price, stock } = body;

        const result = await sql`
            INSERT INTO harrison_parts (item, part_number, description, price, stock)
            VALUES (${item}, ${part_number}, ${description}, ${price}, ${stock})
        `;

        return NextResponse.json({ success: true, result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
    }
}

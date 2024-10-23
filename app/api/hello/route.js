export async function GET(request) {
    return new Response("Hello, Next.js!")
}

export async function POST(request) {
    return Response.json({ msg: "Hello from POST route" })
}

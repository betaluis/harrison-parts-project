export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return Response.json({ posts });
}

export async function POST() {
    return Response.json({ msg: "Hello from post blogposts"});
}

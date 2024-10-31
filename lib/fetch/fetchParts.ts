import { HarrisonPartType } from "@/app/page";

const baseUrl = process.env.NEXT_PUBLIC_API_ROUTE;

export const addPartToDatabase = async (data: HarrisonPartType) => {
    console.log(data)
    try {
        const res = await fetch(`${baseUrl}/api/parts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await res.json()

        if (res.ok) {
            console.log("Successfully added part", result)
        } else {
            console.error("Unable to add part.", result.error)
        }
    } catch (error) {
        console.error("Error making POST to database", error)
    }
}

export const getParts = async () => {

    const res = await fetch(`/api/parts`);

    if (!res.ok) throw new Error("Could not fetch parts")

    const data = await res.json();

    return data.parts.rows;

}

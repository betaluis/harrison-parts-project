import { HarrisonPartType } from "@/app/page";

export const addPartToDatabase = async (data: HarrisonPartType) => {
    try {
        const res = await fetch(`/api/parts`, {
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

    const res = await fetch(`http://localhost:3000/api/parts`);

    if (!res.ok) throw new Error("Could not fetch parts")

    const data = await res.json();

    return data.parts.rows;

}

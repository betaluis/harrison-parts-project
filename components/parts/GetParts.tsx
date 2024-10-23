"use client"
import { getParts } from "@/lib/fetch/fetchParts"
import { Button } from "../ui/button"

export const GetParts = () => {
    return (
        <Button onClick={() => getParts()}>Get Parts</Button>
    )
}

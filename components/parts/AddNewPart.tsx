"use client"
import { HarrisonPartType } from "@/app/page"
import { addPartToDatabase } from "@/lib/fetch/fetchParts"
import { Button } from "@/components/ui/button"

type AddNewPartType = {
    data: HarrisonPartType
}

export const AddNewPart = ({ data }: AddNewPartType) => {
    return (
        <Button onClick={() => addPartToDatabase(data)}>Add Part</Button>
    )
}

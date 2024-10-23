"use client"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useEffect } from "react"
import { getParts } from "@/lib/fetch/fetchParts"
import { usePartsStore } from "@/stores/parts"

export const HarrisonPartsList = () => {

    // const data = useGetPartsList()
    const setPartsList = usePartsStore(state => state.setPartsList)
    const partsList = usePartsStore(state => state.partsList)

    useEffect(() => {
        const fetchParts = async () => {
            const parts = await getParts()
            setPartsList(parts)
        }
        fetchParts()
    }, [setPartsList])

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={partsList} />
        </div>
    )
}

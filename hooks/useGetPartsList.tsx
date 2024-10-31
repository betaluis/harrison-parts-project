import { getParts } from "@/lib/fetch/fetchParts"
import { usePartsStore } from "@/stores/parts"
import { useEffect } from "react"

const useGetPartsList = () => {

    const setPartsList = usePartsStore(state => state.setPartsList)
    const partsList = usePartsStore(state => state.partsList)

    useEffect(() => {

        const fetchParts = async () => {
            const parts = await getParts()

            setPartsList(parts)
        }

        fetchParts()
    }, [setPartsList])

    return partsList;

}

export default useGetPartsList;



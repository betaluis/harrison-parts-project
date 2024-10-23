import { create } from "zustand"
import { HarrisonPartType } from "../app/page"


type TPartsStore = {
    partsList: HarrisonPartType[],
    setPartsList: (parts: HarrisonPartType[]) => void,
    addPartToList: (newPart: HarrisonPartType) => void
}

export const usePartsStore = create<TPartsStore>((set, get) => ({
    partsList: [],
    setPartsList: (parts: HarrisonPartType[]) => {
        set(() => ({ partsList: parts }))
    },
    addPartToList: (newPart: HarrisonPartType) => {
        set(() => ({ partsList: [ ...get().partsList, newPart ]}))
    }
}))

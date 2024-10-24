/* eslint-disable */
"use client"


import { ColumnDef } from "@tanstack/react-table"
import { HarrisonPartType } from "@/app/page"
import { dataTableCheckBoxSize } from "@/lib/constants"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<HarrisonPartType>[] = [
    {
        accessorKey: "item",
        header: "Item",
    },
    {
        accessorKey: "part_number",
        header: "Part Number",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            //
            // TODO: Format currency for "price" column

            const priceValue: any = row.getValue("price");

            const priceString = typeof priceValue === 'string' ? priceValue : priceValue.toString();

            // Remove non-numeric characters except for the decimal point
            const amount = parseFloat(priceString.replace(/[^0-9.-]+/g, ''));

            // If the amount is valid, format it as currency
            if (!isNaN(amount)) {
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount);

                return <div className="text-left">{formatted}</div>;
            }

            return <div className="text-left">Invalid Price</div>;

        },
    },
    {
        accessorKey: "stock",
        header: () => <div className="text-center">In Stock</div>,
        cell: ({ row }) => {
            const isInStock = row.getValue("stock")

            return isInStock ?
                <div className="flex justify-center items-center"><Checkmark checked={true} /></div>
                : <div className="flex justify-center items-center"><Checkmark checked={false} /></div>
        }
    }
]

const Checkmark = ({ checked }: { checked: boolean }) => {

    if (checked) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={dataTableCheckBoxSize} height={dataTableCheckBoxSize}>
                <rect x="4" y="4" width="56" height="56" rx="10" ry="10" fill="black" />
                <path d="M20 32L28 40L44 24" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    } else {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={dataTableCheckBoxSize} height={dataTableCheckBoxSize}>
                <rect x="4" y="4" width="56" height="56" rx="10" ry="10" fill="white" stroke="black" stroke-width="4" />
            </svg>
        )
    }
}


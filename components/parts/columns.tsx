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
            const priceValue: any = row.getValue("price");

            const priceString = typeof priceValue === 'string' ? priceValue : priceValue.toString();

            const amount = parseFloat(priceString.replace(/[^0-9.-]+/g, ''));

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
        accessorKey: "availibility",
        header: () => <div className="text-center">Availability</div>,
        cell: ({ row }) => {
            const isInStock = row.getValue("availibility")

            return isInStock ?
                <div className="flex justify-center items-center py-1 px-4 rounded-full bg-blue-50 text-blue-500">In Stock</div>
                : <div className="flex justify-center items-center py-1 px-4 rounded-full bg-red-50 text-red-500">Out of Stock</div>
        }
    }
]

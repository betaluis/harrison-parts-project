"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, } from "@/components/ui/form"
import MyFormField from "@/components/formComponents/MyFormField"
import { HarrisonPartType } from '@/app/page'
import { addPartToDatabase } from '@/lib/fetch/fetchParts'
import { usePartsStore } from '@/stores/parts'


const formSchema = z.object({
    item: z.string().min(2, {
        message: "Item must be atleast 2 characters long."
    }),
    partNumber: z.string().min(2, {
        message: "Part number must be atleast 2 characters long."
    }),
    description: z.string().max(150, {
        message: "Description must be less than 150 characters."
    }),
    price: z.number().positive({
        message: "Number must be a positive number."
    }),
    availability: z.boolean().default(false)
})

export default function MyForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            item: "",
            partNumber: "",
            description: "",
            price: 0,
            availability: false
        }
    })

    const addPartToList = usePartsStore(state => state.addPartToList)

    async function onSubmit(values: z.infer<typeof formSchema>) {

        const newItem: HarrisonPartType = {
            item: values.item,
            part_number: values.partNumber,
            description: values.description,
            price: values.price,
            availability: values.availability
        }

        addPartToList(newItem) // Zustand list
        
        // TODO : New parts aren't added to the database from production
        addPartToDatabase(newItem) // Database

        form.reset()
        console.log("Values submitted")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <MyFormField
                    form={form}
                    name="item"
                    placeholder="Item name"
                    type="input"
                    label="Item Name"
                />
                <MyFormField
                    form={form}
                    name="partNumber"
                    placeholder="Part Number"
                    type="input"
                    label="Part Number"
                />
                <MyFormField
                    form={form}
                    name="price"
                    placeholder="$0.00"
                    type="money"
                    label="Price"
                />
                <MyFormField
                    form={form}
                    name="description"
                    placeholder="Write a part description"
                    type="textarea"
                    label="Description"
                />
                <MyFormField
                    form={form}
                    name="inStock"
                    placeholder="In Stock"
                    type="checkbox"
                    label="In Stock?"
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}


"use client"

import axios from "axios"
import { error } from "console"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function RandomImage() {
    const [image, setImage] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        try {
            axios.get("https://dog.ceo/api/breeds/image/random")
                .then(res => setImage(res.data.message))
                .catch(err => console.error(err))
        } catch (e) {
            setError(true)
            console.log(error)
        }

    }, [])

    if (!image) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error in fetching data </p>
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="font-bold">Image</h1>
            <Image
                src={image}
                alt="Random dog"
                width={400}
                height={400}
                className="h-[10rem] object-contain rounded-2xl shadow "
            />
        </div>
    )
}

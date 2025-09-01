"use client"

import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function RandomImage() {
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(res => setImage(res.data.message))
            .catch(err => console.error(err))
    }, [])

    if (!image) {
        return <p>Loading...</p>
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1>Image</h1>
            <Image
                src={image}
                alt="Random dog"
                width={400}
                height={400}
                className="rounded-2xl shadow "
            />
        </div>
    )
}

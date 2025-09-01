"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { NewsArticle } from "@/types/index";
import { URLS } from "@/constants/urls";


export default function useNewsData(country: string) {
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                setIsLoading(true);
                const response = await axios.get(`${URLS.LOCALURLFORNEWS}`, {
                    params: {
                        country: country,
                        apiKey: process.env.NEWS_API_KEY,
                    },
                });
                setArticle(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchNews();
    }, [country]);

    return { article, isLoading, error };
}
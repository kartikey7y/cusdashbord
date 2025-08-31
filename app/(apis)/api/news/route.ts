import { URLS } from "@/constants/urls";
import axios from "axios";

export async function GET(req: Request) {
 
    const url = new URL(req.url);
    const country = url.searchParams.get("country") || "US"; 

    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
        return new Response(
            JSON.stringify({ message: "API key is missing" }),
            { status: 500 }
        );
    }

    try {
     
        const response = await axios.get(URLS.NEWSAPIURL, {
            params: {
                country: country,
                apiKey: apiKey,
            },
        });

     
        return new Response(
            JSON.stringify(response.data.articles[0]),
            { status: 200 }
        );
    } catch (error) {

        return new Response(
            JSON.stringify({
                message: "Error fetching news",
                error: error,
            }),
            { status: 500 }
        );
    }
}
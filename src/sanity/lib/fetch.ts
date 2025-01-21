import { createClient } from "next-sanity";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10"
})

export async function sanityFetch({query, params = {}}: {query : string, params? : any}){
    return await client.fetch(query, params)
}
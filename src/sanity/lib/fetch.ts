import { createClient } from "next-sanity";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, // Explicitly cast as string
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

// Define proper types for the fetch function
type SanityFetchParams = {
  query: string;
  params?: Record<string, unknown>; // A record with string keys and unknown values
};

export async function sanityFetch<T = unknown>({ query, params = {} }: SanityFetchParams): Promise<T> {
  // The function now uses generics to specify the return type.
  return await client.fetch<T>(query, params);
}

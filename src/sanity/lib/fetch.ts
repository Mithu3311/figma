import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, // Explicitly cast as string
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

export async function sanityFetch<T = unknown>({ query, params = {} }: { query: string; params?: Record<string, unknown> }): Promise<T> {
  return await client.fetch<T>(query, params);
}

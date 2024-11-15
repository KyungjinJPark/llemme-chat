import { NextRequest } from "next/server";

const { API_ENDPOINT, API_KEY } = process.env

export async function POST(request: NextRequest) {
  if (!API_ENDPOINT) { return Response.error() }

  const response = await fetch(
    API_ENDPOINT,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: await request.text(),
    }
  );
  const result = await response.json();
  return Response.json(result)
}

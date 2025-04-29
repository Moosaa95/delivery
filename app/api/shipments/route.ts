import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const searchTerm = searchParams.get("search") || ""
  const filterStatus = searchParams.get("status") || "all"
  const sortBy = searchParams.get("sortBy") || "date"
  const sortOrder = searchParams.get("sortOrder") || "desc"

  try {
    // In production, you would replace this with your actual Django API URL
    const response = await fetch(
      `${process.env.DJANGO_API_URL}/api/shipments/?search=${searchTerm}&status=${filterStatus}&sort_by=${sortBy}&sort_order=${sortOrder}`,
      {
        headers: {
          "Content-Type": "application/json",
          // You might need to include authentication headers here
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Error fetching shipments: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching shipments:", error)
    return NextResponse.json({ error: "Failed to fetch shipments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // In production, you would replace this with your actual Django API URL
    const response = await fetch(`${process.env.DJANGO_API_URL}/api/shipments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You might need to include authentication headers here
      },
      body: JSON.stringify(body),
    })
    console.log("RESPONSE======", response, process.env.DJANGO_API_URL)

    if (!response.ok) {
      throw new Error(`Error creating shipment: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error creating shipment:", error)
    return NextResponse.json({ error: "Failed to create shipment" }, { status: 500 })
  }
}

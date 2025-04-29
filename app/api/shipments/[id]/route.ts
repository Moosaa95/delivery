import { type NextRequest, NextResponse } from "next/server"

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ team: string }> }
// ) {
//   const team = (await params).team
// }

export async function GET(
    request: NextRequest, 
    { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  try {
    // In production, you would replace this with your actual Django API URL
    const response = await fetch(`${process.env.DJANGO_API_URL}/api/shipments/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        // You might need to include authentication headers here
      },
    })

    if (!response.ok) {
      throw new Error(`Error fetching shipment: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching shipment:", error)
    return NextResponse.json({ error: "Failed to fetch shipment" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  try {
    const body = await request.json()

    // In production, you would replace this with your actual Django API URL
    const response = await fetch(`${process.env.DJANGO_API_URL}/api/shipments/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // You might need to include authentication headers here
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Error updating shipment: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error updating shipment:", error)
    return NextResponse.json({ error: "Failed to update shipment" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  try {
    // In production, you would replace this with your actual Django API URL
    const response = await fetch(`${process.env.DJANGO_API_URL}/api/shipments/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // You might need to include authentication headers here
      },
    })

    if (!response.ok) {
      throw new Error(`Error deleting shipment: ${response.statusText}`)
    }

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("Error deleting shipment:", error)
    return NextResponse.json({ error: "Failed to delete shipment" }, { status: 500 })
  }
}

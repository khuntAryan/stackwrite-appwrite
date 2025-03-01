import { NextResponse,NextRequest } from "next/server";
export async function POST(request: NextRequest){
    try {
        
    } catch (error:any) {
        return NextResponse.json(
            {
                error: error?.message || "Error creating voting"
            },
            {
                status: error?.status || error?.code || 500
            }
        )
    }
}
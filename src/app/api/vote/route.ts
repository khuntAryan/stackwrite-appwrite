import { db, voteCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import { NextResponse,NextRequest } from "next/server";
import { Query } from "node-appwrite";
export async function POST(request: NextRequest){
    try {
        // get the data
        const {voteStatus, type, typeId , votedById} = await request.json()
        //list the documents using appwrite queries
        const response = await databases.listDocuments(db, voteCollection, [
            Query.equal("type", type),
            Query.equal("typeId", typeId),
            Query.equal("votedById", votedById) 
        ])

        if (response.documents.length > 0) {
            //
        }

        if (response.documents[0]?.voteStatus !== voteStatus ) {
            //
        }

        const [upvotes, downvotes] = await Promise.all([
            databases.listDocuments(db, voteCollection,[
                Query.equal("type", type),
                Query.equal("typeId", typeId),
                Query.equal("voteStatus", "upvotes"),
                Query.equal("votedById", votedById),
                Query.limit(1)
            ]),
            databases.listDocuments(db, voteCollection,[
                Query.equal("type", type),
                Query.equal("typeId", typeId),
                Query.equal("voteStatus", "downvotes"),
                Query.equal("votedById", votedById),
                Query.limit(1)
            ]),

        ])

        return NextResponse.json(
            {
                data:{
                    document: null, voteResult: upvotes.total = downvotes.total
                }
            },
            {
                status: 200
            }
        )

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
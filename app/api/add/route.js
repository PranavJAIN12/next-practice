
 
export async function POST(request) {
    let data = await request.json()
    console.log(data)
    return Response.json({success: true, data:data})

}
 

 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.

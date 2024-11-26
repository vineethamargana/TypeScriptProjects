import ViewJobBasedOnId from "../_repository/ViewJobREpo.ts";
import { HttpMethod } from "../_shared/_constants/HttpMethods.ts";

Deno.serve(async(req)=>{
    const url = new URL(req.url);
    const method = req.method;
    const jobid = url.searchParams.get("id");

    if (method === HttpMethod.GET && jobid) {
        const job = await ViewJobBasedOnId(parseInt(jobid));
        return new Response(
          JSON.stringify(job),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ error: "Unsupported operation" }),
        { headers: { "Content-Type": "application/json" }, status: 400 }
      );
    });
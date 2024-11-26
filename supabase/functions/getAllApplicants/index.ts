import listApplicants from "../_repository/ListOfApplicants.ts";
import { HttpMethod } from "../_shared/_constants/HttpMethods.ts";


Deno.serve(async (req) => {
  const url = new URL(req.url);
  const method = req.method;
  const applicantId = url.searchParams.get("id");

  // Handle GET (List all applicants)
  if (method === HttpMethod.GET && !applicantId) {
    const applicants = await listApplicants();
    return new Response(
      JSON.stringify(applicants),
      { headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(
    JSON.stringify({ error: "Unsupported operation" }),
    { headers: { "Content-Type": "application/json" }, status: 400 }
  );
});
  
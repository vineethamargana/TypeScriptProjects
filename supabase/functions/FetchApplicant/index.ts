import getApplicantById from "../_repository/FetchApplicantonIdRepo.ts";
//import listApplicants from "../_repository/ListOfApplicants.ts";


Deno.serve(async (req) => {
  const url = new URL(req.url);
  const method = req.method;
  const applicantId = url.searchParams.get("id");

  // Handle GET by ID
  if (method === "GET" && applicantId) {
    const applicant = await getApplicantById(parseInt(applicantId));
    return new Response(
      JSON.stringify(applicant),
      { headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(
    JSON.stringify({ error: "Unsupported operation" }),
    { headers: { "Content-Type": "application/json" }, status: 400 }
  );
});
  
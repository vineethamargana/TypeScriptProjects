// import { Applicant } from "../_model/ApplicantModel.ts";
// import createApplicant from "../_repository/CreateNewApplicant.ts";


// Deno.serve(async (req) => { 
// //  const url = new URL(req.url);
//   const method = req.method;


//   // Handle POST (Create) - Create new applicant
//   if (method === "POST") {
//     const body = await req.json();
//     const newApplicant: Applicant = body; // Assuming body has the Applicant data
//     const createdApplicant = await createApplicant(newApplicant);

//     return new Response(
//       JSON.stringify(createdApplicant),
//       { headers: { "Content-Type": "application/json" } }
//     );
//   }


//   // Return error for unsupported methods or missing parameters
//   return new Response(
//     JSON.stringify({ error: "Unsupported operation" }),
//     { headers: { "Content-Type": "application/json" }, status: 400 }
//   );
// });
import { Applicant } from "../_model/ApplicantModel.ts";
import createApplicant from "../_repository/CreateNewApplicant.ts";

Deno.serve(async (req) => {
  const method = req.method;

  // Handle POST (Create) - Create new applicant
  if (method === "POST") {
    try {
      const body = await req.json();

      // Validate that the required fields exist in the request body
      if (!body.name || !body.email || !body.mobile || !body.password || !body.roles || body.local_resume === undefined) {
        return new Response(
          JSON.stringify({ error: "Missing required fields in the request body" }),
          { headers: { "Content-Type": "application/json" }, status: 400 }
        );
      }

      // Create the new applicant
      const newApplicant: Applicant = body;
      const createdApplicant = await createApplicant(newApplicant);

      // Return the created applicant data
      return new Response(
        JSON.stringify(createdApplicant),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      // Handle any other errors (e.g., invalid JSON format, server-side issues)
      console.error("Error creating applicant:", error);
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        { headers: { "Content-Type": "application/json" }, status: 500 }
      );
    }
  }

  // Return error for unsupported methods
  return new Response(
    JSON.stringify({ error: "Unsupported operation" }),
    { headers: { "Content-Type": "application/json" }, status: 405 } // 405 Method Not Allowed
  );
});

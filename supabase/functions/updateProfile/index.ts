// // your original server handler (e.g., in your main file)
 
 import { ErrorHandlerForUpdate } from "../_handler/updateHandler.ts";
 import { HttpMethod } from "../_shared/_constants/HttpMethods.ts";
 import { ErrorResponseImpl } from "../_error/ErrorResponse.ts";
// Deno.serve(async (req) => {
//   const url = new URL(req.url);
//   const method = req.method;
//   const applicantId = url.searchParams.get("id");

//   // Handle PUT (Update)
//   if (method ==HttpMethod.PUT && applicantId) {
//     const body = await req.json();
//     const updatedApplicant = await ErrorHandlerForUpdate(parseInt(applicantId), body);

//       // Check if updatedApplicant contains the error property
//       if ('error' in updatedApplicant) {
//         return new Response(
//           JSON.stringify(updatedApplicant),
//           { headers: { "Content-Type": "application/json" }, status: 400 }
//         );
//       }

//     // Return updated applicant if successful
//     return new Response(
//       JSON.stringify(updatedApplicant),
//       { headers: { "Content-Type": "application/json" } }
//     );
//   }

//   return new Response(
//     JSON.stringify({ error: "Unsupported operation" }),
//     { headers: { "Content-Type": "application/json" }, status: 400 }
//   );
// });
Deno.serve(async (req) => {
  const url = new URL(req.url);
  const method = req.method;
  const applicantId = url.searchParams.get("id");

  if (method == HttpMethod.PUT && applicantId) {
    const body = await req.json();
    const updatedApplicant = await ErrorHandlerForUpdate(parseInt(applicantId), body);

    // Check if updatedApplicant contains the error property
    if (updatedApplicant instanceof ErrorResponseImpl) {
      return new Response(
        JSON.stringify({
          errorMessage: updatedApplicant.errorMessage,
          errorTime: updatedApplicant.errorTime,
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: updatedApplicant.statusCode,
        }
      );
    }

    // Return updated applicant if successful
    return new Response(
      JSON.stringify(updatedApplicant),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ error: "Unsupported operation" }),
    { headers: { "Content-Type": "application/json" }, status: 400 }
  );
});
import { Applicant } from "../_model/ApplicantModel.ts";
import { updateApplicant } from "../_repository/updateApplicantdetailsRepo.ts";
import { ErrorResponseImpl } from "../_error/ErrorResponse.ts";
// export async function ErrorHandlerForUpdate(id:number,data:Applicant) {
//   try{
//     if(!id || isNaN(id)){
//       throw new Error("Invalid applicant id");
//     }
//     const updatedApplicant = await updateApplicant(id, data);

//   if (!updatedApplicant) {
//     throw new Error("Applicant update failed. Applicant not found or database error.");
//   }
//   return updatedApplicant;
//   }
//   catch (error) {
//     console.log(error);
  
//     // Check if error is an instance of Error
//     if (error instanceof Error) {
//       return { error: error.message, message: "An unexpected error occurred" };
//     } else {
//       // Handle cases where the error is not an instance of Error
//       return { error: String(error), message: "An unexpected error occurred" };
//     }
// }
// }
export async function ErrorHandlerForUpdate(id: number, data: Applicant) {
    try {
      if (!id || isNaN(id)) {
        throw new Error("Invalid applicant id");
      }
      const updatedApplicant = await updateApplicant(id, data);
  
      if (!updatedApplicant) {
        throw new Error("Applicant update failed. Applicant not found or database error.");
      }
      return updatedApplicant; // Return the updated applicant if successful
    } catch (error) {
      console.log(error);
  if (error instanceof Error) {
      return new ErrorResponseImpl(
        400,  // Status code for Bad Request
        error.message,
        new Date() // Capture the error time
      );
    } else {
      return new ErrorResponseImpl(
        400,  // Status code for Bad Request
        String(error),
        new Date() // Capture the error time
      );
    }
  }
}
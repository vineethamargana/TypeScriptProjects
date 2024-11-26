import { Applicant } from "../_model/ApplicantModel.ts";
import supabase from "../_shared/_config/supabaseClient.ts"; // Adjust the import based on your directory structure

export default async function createApplicant(data: Applicant) {
  try {
    // Log data for debugging
    console.log('Creating new applicant with data:', data);

    const { data: insertedApplicant, error } = await supabase
      .from('Applicant') 
      .insert([{
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        roles: data.roles,
        resume_id: data.resume_id,
        local_resume: data.local_resume,
        utm_source: data.utm_source,
      }])
      .single(); // Use .single() to return only the first inserted row

    // Handle error if insertion fails
    if (error) {
      console.error('Error inserting applicant:', error); // Log the error for debugging
      return { error: error.message }; // Return error message if there's an issue
    }

    // Return the inserted applicant data if successful
    console.log('Inserted applicant:', insertedApplicant);  // Log the inserted applicant data
    return insertedApplicant;

  } catch (err) {
    console.error('Unexpected error:', err); // Catch any unexpected errors
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}

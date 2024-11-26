import { Applicant } from "../_model/ApplicantModel.ts";
import supabase from "../_shared/_config/supabaseClient.ts";


export const updateApplicant = async (id: number, data: Partial<Applicant>): Promise<Applicant | { error: string }> => 
  {
  if (!data || Object.keys(data).length === 0) 
  {
    return { error: "No data provided for update" }; 
  }

  try {
    const { data: updatedApplicant, error } = await supabase
      .from('Applicant')  
      .update(data)       
      .eq('id', id)      
      .select('*')        
      .single();          


    if (error) 
      {
         return { error: error.message }; 
      }
    if (!updatedApplicant) 
      {
        return { error: "Applicant not found or no changes made" };
      }

    return updatedApplicant;
  } 
  catch (err)
   {
    //handling unexpected runtime errors
    return { error: `Unexpected error: ${(err as Error).message}` };
   }
};

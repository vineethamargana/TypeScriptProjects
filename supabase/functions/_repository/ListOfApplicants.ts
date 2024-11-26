// import { Applicant } from "../_model/AppliedJobModel.ts";
import supabase from "../_shared/_config/supabaseClient.ts"; 

  export default async function listApplicants() {
    const {data,error} = await supabase
    .from('Applicant')
    .select('*')

    if (error) {
      return { error: error.message };  
    }
  
    if (!data || data.length === 0) {
      return { error: "No applicants found" }; 
    }
    return data;
  }

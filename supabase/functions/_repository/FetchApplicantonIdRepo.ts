// import {Applicant } from "../_model/AppliedJobModel.ts";
import supabase from "../_shared/_config/supabaseClient.ts"; 

export default async function getApplicantById(applicant_id:number){
  const { data, error } = await supabase
   .from('Applicant')
   .select('*')
   .eq('id', applicant_id)
   .single();

   if(error)
    return error;

   return data;
}
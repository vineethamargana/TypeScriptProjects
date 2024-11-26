import supabase from "../_shared/_config/supabaseClient.ts";

export default async function ViewJobBasedOnId(jobid:number) {
    const { data, error } = await supabase
   .from('jobs')
   .select('*')
   .eq('id', jobid)
   .single();

   if(error)
    return error;

   return data;
}
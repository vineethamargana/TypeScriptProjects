import { createClient } from 'npm:@supabase/supabase-js'
 
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || '';
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || '';
 
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 
export default supabase;
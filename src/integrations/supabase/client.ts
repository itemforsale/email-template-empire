// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tdinaioygbgcpqjrxcml.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaW5haW95Z2JnY3BxanJ4Y21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NDM3NTMsImV4cCI6MjA1MjAxOTc1M30.RBJjjljhpEgIWx8yaphw7pU40h8TBQ7X_Q3pDpe9wis";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
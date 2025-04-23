import { createClient } from '@supabase/supabase-js';
import { DB_API_KEY, DB_URL } from '$env/static/private';

export const db = createClient(DB_URL, DB_API_KEY);

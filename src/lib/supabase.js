import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('placeholder') &&
  !supabaseUrl.includes('your-supabase-url')
)

if (!isSupabaseConfigured) {
  console.warn('⚠️ Supabase credentials missing or unconfigured. Running with local fallback mode.')
}

// Fallback to safe dummy URL/key to prevent synchronous startup crash
const safeUrl = isSupabaseConfigured ? supabaseUrl : 'https://placeholder.supabase.co'
const safeKey = isSupabaseConfigured ? supabaseAnonKey : 'placeholder-anon-key'

export const supabase = createClient(safeUrl, safeKey)

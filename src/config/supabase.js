
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jsqckivnjimadtyuxblt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcWNraXZuamltYWR0eXV4Ymx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM2MDQyMjksImV4cCI6MTk3OTE4MDIyOX0.hm4e94tJMiWvGFSEapfDTdrSRHm3_-YlxuDOiAleTnM"

const supabase = ()=>{
    return createClient(supabaseUrl, supabaseKey)
} 

export default supabase;
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/tasks')
  } else {
    redirect('/login')
  }
}
```

---

## Step 2: If app/page.tsx is Different or Has Errors

**Replace the entire content** with the code above and save it (Ctrl+S).

---

## Step 3: Check .env.local

You mentioned it in the instructions. Let me verify - in VS Code:

1. Look for `.env.local` in the root folder (you can see it in the file explorer as a green `$` icon)
2. Open it and make sure it has:
```
NEXT_PUBLIC_SUPABASE_URL=https://cxnroxpyiovobbogacob.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4bnJveHB5aW92b2Jib2dhY29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NDA0MzIsImV4cCI6MjA3ODExNjQzMn0.DTP4cHgn8YHU706FHny8vyI_LZ884tsdfUSm9hgFqRw
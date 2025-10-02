# Hello Vercel + Supabase 👋

Minimal Next.js project to test integration between **Vercel** (hosting) and **Supabase** (backend).

## 🚀 Steps
1. Create Supabase project and add a simple `hello` table:
   ```sql
   create table hello (
     id uuid primary key default gen_random_uuid(),
     content text not null
   );
   insert into hello (content) values ('Hello, Supabase!');
   alter table hello enable row level security;
   create policy "Allow anon read" on hello for select to anon using (true);

# Environment setup — StillHere (increment 2)

Everything in increment 2 (Google sign-in, saving a person, the AI reflection
chat) needs **four secrets**. None of them live in the code — they go into
environment variables, set once on Vercel. This guide is written for someone who
has never touched any of these services before.

Copy `.env.example` to `.env.local` for local runs; for Vercel, add each value in
**Project → Settings → Environment Variables**.

---

## 1. `AUTH_SECRET`

A random string Auth.js uses to sign sessions. It is not a password you type — it
just needs to be long and unguessable.

Generate one and paste it in:

```bash
openssl rand -base64 32
```

## 2. Google OAuth — `AUTH_GOOGLE_ID` + `AUTH_GOOGLE_SECRET`

This lets people sign in with their Google account.

1. Go to <https://console.cloud.google.com/apis/credentials>.
2. **Create OAuth client ID** → Application type **Web application**.
3. Under **Authorized redirect URIs**, add BOTH:
   - `http://localhost:3000/api/auth/callback/google`  (for local testing)
   - `https://your-vercel-domain/api/auth/callback/google`  (for production)
4. Copy **Client ID** → `AUTH_GOOGLE_ID`.
5. Copy **Client secret** → `AUTH_GOOGLE_SECRET`.

> If you see a "redirect_uri_mismatch" error at sign-in, it is always this step —
> the callback URL must match exactly, including `https` and the trailing path.

## 3. Neon Postgres — `DATABASE_URL`

The database that stores your people and conversations.

1. Go to <https://neon.tech> and create a project.
2. On the dashboard, find **Connection string** and switch to the
   **pooled** version.
3. Copy the whole string → `DATABASE_URL`.

The app creates its own tables on first use (the `persons` and `messages`
tables), so you do **not** need to run any SQL.

## 4. DeepSeek — `DEEPSEEK_API_KEY` (+ optional `DEEPSEEK_MODEL`)

This powers the AI reflection in F2.

1. Go to <https://platform.deepseek.com> and create an API key.
2. Copy the key → `DEEPSEEK_API_KEY`.
3. `DEEPSEEK_MODEL` is optional. It defaults to `deepseek-chat`, which works
   today. When "DeepSeek V4 Flash" is published, set this to its model id.

---

## Deploying to Vercel

1. Push this repo to GitHub (already done: `https://github.com/863683348/stillhere`).
2. In Vercel, **New Project → Import** that repo.
3. Framework preset is auto-detected as Next.js — no changes needed.
4. Open **Settings → Environment Variables** and add the four groups above.
5. **Deploy.** Vercel builds and gives you a `*.vercel.app` URL.
6. Go back to step 2 of the Google section and add
   `https://<your-vercel-app>/api/auth/callback/google` to the redirect URIs,
   then click **Save** in Google.
7. Visit the site, click **Begin**, sign in with Google, and create your first
   person.

---

## Testing it locally (optional)

```bash
cp .env.example .env.local   # then fill in the four secrets
npm install
npm run dev                 # http://localhost:3000
```

A local Postgres is not required — `DATABASE_URL` can point at your Neon project
from anywhere.

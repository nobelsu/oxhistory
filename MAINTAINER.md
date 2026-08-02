# Looking after the OUHS website — a plain-English guide

You do **not** need to know how to code to keep this website up to date. Everything you'll
normally change — the committee, events, the announcement banner, contact details — is edited
through a simple web dashboard with forms. When you hit **Save**, the website updates itself
within a minute or two.

This guide is written for the incoming Secretary / Webmaster. Keep it, and pass it on.

---

## The one-time setup (do this once, at handover)

You need two free accounts and about 15 minutes. If the previous maintainer already did this,
skip to **"How to edit the website"**.

1. **A GitHub account** — this is where the website's files live. Sign up at
   [github.com](https://github.com). Ask the outgoing committee to add you to the society's
   GitHub as a collaborator (ideally the society has a shared GitHub "organisation" so it passes
   down each year — see the README).
2. **Pages CMS** — the visual editor. Go to [pagescms.org](https://pagescms.org), click
   **Sign in**, and sign in with your GitHub account. Give it access to the website's repository
   (the one called something like `ouhs-website`).

That's it. From now on you just log into Pages CMS to make changes.

---

## How to edit the website

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open the **ouhs-website** project.
3. Pick what you want to change from the menu on the left:
   **Site settings · Committee · Events · Constitution**.
4. Edit the form fields.
5. Click **Save**. Wait 1–2 minutes, then refresh the live website to see your change.

> Every change is saved permanently and can be undone, so don't be afraid to experiment.

---

## Common jobs

### Update the committee (do this every year)

1. Open **Committee**.
2. Change the **Committee year** (e.g. `2026/2027` → `2027/2028`).
3. For each member: edit the **Role**, **Name**, **College**, **Subject** and **Photo**.
   - Use the **＋ / Add** button to add a new person.
   - Use the **🗑 / remove** button to delete someone who's left.
   - **Photo** is optional — upload a headshot and it appears on their card. If you leave it blank,
     the card shows their initials instead. Portrait photos look best.
   - Roles with more than one person (e.g. *Academic Events Officer*) are automatically grouped
     and pluralised on the site — just give each person the same **Role** text.
4. **Save**.

### Post the termcard / add an event

1. Open **Events** and click **Add** (or open an existing event to edit it).
2. Fill in:
   - **Event title** — e.g. *Michaelmas Guest Lecture*
   - **Date** — pick from the calendar
   - **Time** — e.g. `6:00 PM` (optional)
   - **Type** — Academic, Social, or Welfare (this sets the colour tag)
   - **Location** — e.g. *Examination Schools, High Street* (optional)
   - **One-line summary** — the short line shown in listings
   - **Sign-up / tickets link** — paste a URL if there is one (optional)
   - **Draft** — tick this to hide the event while you're still writing it
   - **Full description** — the longer text shown on the event
3. **Save**. Upcoming events appear automatically; past events move to a "Past events" list.

> There are two example events in there to start with. Edit or delete them once you have real ones.

### Add or remove a sponsor

1. Open **Sponsors**.
2. Edit the **Intro paragraph** if you like.
3. Under **Sponsors**, click **Add** for each one:
   - **Name** (required)
   - **Logo image** — upload a logo (optional; if none, the name shows as text)
   - **Website link** — makes the card clickable (optional)
   - **Short description** (optional)
4. **Save**. With no sponsors added, the page shows a friendly "Interested in sponsoring us?" call-out instead.

### Change the membership (Join) form

The **Join** page embeds your Google Form directly. If you ever swap the form:

1. Open your Google Form → **Send** → the **`< >`** (embed) tab → copy the URL inside `src="…"`
   (it ends in `/viewform?embedded=true`).
2. In the CMS open **Site settings** → paste it into **Membership form EMBED link**.
3. Also update the plain **Membership / join form link** (the normal share link, used as a fallback).
4. **Save**.

### Change the announcement banner (the notice on the homepage)

1. Open **Site settings**.
2. Edit **Announcement banner**. Leave it **blank** to hide the banner entirely.
3. **Save**.

### Update contact details / the join form

1. Open **Site settings**.
2. Edit **Membership / join form link**, **Instagram handle**, or **Contact email**
   (leave the email blank until the society has one — it stays hidden while empty).
3. **Save**.

### Edit the constitution or complaints procedure

1. Open **Constitution** (or **Complaints Procedure**).
2. Edit the text. **Save**. (The University requires the current constitution *and* complaints
   procedure to be published on the site, so keep them up to date after any AGM changes.)

---

## Things to remember

- **You must keep the website online.** The society's constitution requires a live website showing
  the current committee contacts and the constitution. Don't delete the project.
- **Tell the Clubs Office the web address** when it changes (this is a Secretary's duty).
- **Handover:** add your successor as a collaborator on GitHub, point them at this guide, and make
  sure the society keeps ownership of the GitHub account/organisation and the domain name.
- If something looks broken and you can't fix it in the CMS, contact whoever set the site up, or
  ask a technical friend — the full technical notes are in `README.md`.

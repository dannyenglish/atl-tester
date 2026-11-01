# IB ATL Skills Tester — Test your knowledge of the IB Approaches to Learning

A three-stage self-check for teachers:

1. **Identify the 5 IB ATL skills** — pick them from a list of 20 education-related options (15 are decoys).
2. **Match each subskill to its ATL** — 31 subskills, shuffled so same-ATL items aren't clustered. Click a subskill → choose its ATL from the pop-up menu. Use "Check answers" to mark mistakes; mistakes stay red until you fix them.
3. **Identify each stem cluster** — 31 cards, each showing the full cluster of 4–5 question stems from one subskill. Choose the ATL, then the subskill. You get instant right/wrong feedback and can retry any cluster.

The score is **first-try accuracy**; retries are reported separately.

Fully bilingual — English / 简体中文 (toggle top-right).

---

## Option A — Share the single file (easiest)

`atl-tester.html` is completely self-contained. Double-click it, or email/upload it to
Google Drive, OneDrive, Dropbox, Canvas, etc. It needs no internet and no installation.

## Option B — Host it free (share a link)

The `index.html` + `data.js` + `i18n.js` files are a plain static site.

**Netlify Drop** — go to https://app.netlify.com/drop and drag the whole folder in. You get a public
URL immediately.

**GitHub Pages** — push the folder to a repo, then Settings → Pages → Deploy from branch → `main` / `/`.

**Vercel / Cloudflare Pages** — import the folder as a static project; no build command needed.

**Your own school server** — upload the folder to any web directory. There is no backend, no
database and no build step.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The site (HTML + CSS + JS) |
| `data.js` | The 5 ATLs, 31 subskills and 128 question stems (EN + 中文) |
| `i18n.js` | All UI strings (EN + 中文) |
| `atl-tester.html` | Single-file version — everything inlined |

## Notes

- No frameworks, no external requests, no tracking. Works offline.
- The language choice is remembered in the browser (localStorage).
- Source of the content: *ATL Skills & Subskills Question Stems — Upper Primary (ver 2)*.

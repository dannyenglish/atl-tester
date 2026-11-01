# 🧠 IB ATL Skills Tester

**A bilingual (English / 简体中文) self-check for teachers on the IB Approaches to Learning.**

🌐 **Live site:** https://dannyenglish.github.io/atl-tester/

---

## What it does

Three stages that mirror how the ATL document is actually organised:

### Stage 1 — Identify the 5 IB ATL skills
The IB has exactly **five** Approaches to Learning. They are mixed in with **15 other
education-related skills** that are *not* ATLs (Curriculum Design, Classroom Management,
Scaffolding, …). Pick the five real ones.

### Stage 2 — Match each subskill to its ATL
All **31 subskills** are listed on the left, **shuffled** so that subskills from the same ATL
aren't clustered together. Click a subskill → choose its ATL from the pop-up menu → it moves
into that box automatically.

Press **✓ Check answers** to mark mistakes. Mistakes **stay red until you fix them**, so you can
work through your errors one at a time.

### Stage 3 — Identify each stem cluster
**31 cards**, each showing the **full cluster of 4–5 question stems** from a single subskill.
Choose the ATL, then the subskill. You get **instant right/wrong feedback**, and any cluster you
get wrong can be **retried immediately** without losing your place.

**Scoring:** the headline score is *first-try accuracy*; clusters that needed a retry are
reported separately, so the number reflects genuine understanding.

---

## Content

Extracted from *ATL Skills & Subskills Question Stems — Upper Primary (ver 2)*:

| ATL | Subskills | Stems |
|-----|-----------|-------|
| Thinking Skills | 4 | 20 |
| Social Skills | 6 | 25 |
| Self-Management Skills | 8 | 33 |
| Communication Skills | 8 | 32 |
| Research Skills | 5 | 18 |
| **Total** | **31** | **128** |

Every ATL, subskill and question stem is available in **English and 简体中文**.

---

## Running it

**Online** — just open https://dannyenglish.github.io/atl-tester/

**Offline** — download [`atl-tester.html`](atl-tester.html). It's a single self-contained file
(everything inlined): double-click it and it works. No server, no installation, no internet.

**Your own server** — this repo *is* the site. Copy `index.html`, `data.js` and `i18n.js` to any
web directory. There is no backend, no database and no build step.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The site (HTML + CSS + JS) |
| `data.js` | The 5 ATLs, 31 subskills and 128 question stems (EN + 中文) |
| `i18n.js` | All UI strings (EN + 中文) |
| `atl-tester.html` | Single-file version — everything inlined |
| `build-info.txt` | Plain-text share notes |

---

## Notes

- No frameworks, no external requests, no tracking. Works offline.
- The language choice is remembered in the browser (`localStorage`).
- Rebuilt from source with `build.js`; verified end-to-end with a headless test suite.

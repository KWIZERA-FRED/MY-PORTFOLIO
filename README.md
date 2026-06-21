# Kwizera Iyera Fred — Developer Portfolio

Personal portfolio showcasing fullstack projects — React, Flask, MySQL —
with a focus on backend infrastructure.

🔗 **Live site:** _add your deployed URL here once you run `npm run deploy`_
👤 **GitHub:** [KWIZERA-FRED](https://github.com/KWIZERA-FRED)
💼 **LinkedIn:** [kwizera-iyera](https://www.linkedin.com/in/kwizera-iyera-263494418)

---

## About this project

A single-page portfolio built with **React and plain CSS only** — no UI
libraries, no Tailwind, no templates. The design centers on an animated
request-pipeline diagram (`Client → React → Flask → MySQL`) in the hero
section, a visual nod to where my interest as a developer actually sits:
backend infrastructure.

## Sections

- **Hero** — intro, role, and the animated request-pipeline visual
- **Work** — selected projects pulled from my real GitHub repos
- **Stack** — tools grouped by frontend / backend / data / design & no-code
- **About** — a short bio, paired with a photo
- **Contact** — GitHub, LinkedIn, email, WhatsApp, and phone

## Tech stack

| Layer       | Tools                          |
|-------------|----------------------------------|
| Frontend    | React, plain CSS (no frameworks) |
| Build tool  | Vite                            |
| Deployment  | GitHub Pages                    |

## Running it locally

```bash
git clone https://github.com/KWIZERA-FRED/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

## Project structure

```
src/
├── Portfolio.jsx          # main component — content + logic
├── Portfolio_style.css    # all styling
└── assets/
    └── freddy.jpeg        # profile photo
```

Project content (project list, tech stack, contact info) lives in plain
objects at the top of `Portfolio.jsx` — easy to update without touching
any markup or CSS.

## Deployment

Deployed for free on GitHub Pages:

```bash
npm run build
npm run deploy
```

## Contact

- **Email:** kwiziyera@gmail.com
- **WhatsApp:** 0733109595
- **Phone:** 0793246521

---

*Built and maintained by Kwizera Iyera Fred.*

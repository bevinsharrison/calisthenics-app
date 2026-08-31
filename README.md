# Calisthenics App V1

Local-first static training app built around two weekly coach sessions plus adaptive supplemental work.

## V1
- Permanent Week + Progress shell
- Coach vs supplemental sessions clearly separated
- Weekly workout data separated from app code
- Canonical exercise IDs
- Local persistence from normal workout interactions
- Minimal manual logging only for meaningful benchmarks
- One-tap post-session recovery
- Weight/waist optional
- Export/import backup

## Existing GitHub/Vercel deployment
Your screenshots show Vercel deploying the `bevinsharrison/calisthenics-app` GitHub repo. Replace the repo root with these files, commit to `main`, and Vercel should redeploy automatically.

## Weekly workflow
1. Upload 2 coach PDFs + transcript.
2. Decode/translate instructions.
3. Add a new `data/weeks/week-XX.js` file.
4. Tag workload and recurring exercises.
5. Generate 0–2 supplemental sessions, usually 1, around gaps/recovery.
6. Add the new week script to `index.html` and push.

History lives in browser localStorage, so export a backup occasionally.

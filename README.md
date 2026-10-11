# Calisthenics — LukaMoves Hybrid Protocol

## What this version changes

- LukaMoves Beginner Hybrid Protocol (12 weeks, 3 phases, five main sessions/week) is the **default** mobile app.
- Weekly plan is faithful to the supplied LukaMoves PDF v1.3, with its five sessions each week, including detailed optional-collapsible drill **sections**; no unrequested reductions to the protocol.
- The drill lists under the heading “Planche drill sequence” and “L-sit drill sequence” are shown in collapsible groups to reduce scrolling, **not removed** from the plan.
- Tapping checkboxes immediately saves progress. On key lifts, loads/reps are entered directly in the workout and remembered by week.
- Choose Week 1–12 from the Week selector. There is no automatic rollover to avoid accidental advancement.
- The older Quentin-era application is at **legacy.html**, including all earlier workout data and its original localStorage key `cal_v1`.
- The new Luka tracker stores its data under `luka_hybrid_v1` in the same site/browser. Export backup in Settings includes both old and new local records.
- All workouts are on-device. There is no server sync. Use the existing Vercel domain and do not clear Safari website data; make backups regularly.

## Deployment

1. Export a backup from the currently deployed app **before** updating (especially for old Quentin-era logs).
2. Unzip the project.
3. Upload the **contents**, preserving directories, into your existing `calisthenics-app` GitHub repo (typically easiest with git locally or GitHub web upload for added files). Replace existing files; do not upload the ZIP itself.
4. Commit to `main`. Vercel should redeploy from the connected repo.
5. Open the same URL on your phone, check that Week 1–12 and `legacy.html` load, and export a fresh backup after your first workout.

## Important notes

- Duration labels are estimates; Monday/Friday could take longer than 90 minutes if you complete every drill with full rest.
- The written PDF prescribes load increases of 5 kg lower-body and 2.5 kg upper-body weekly, but they are **suggestions** and not automated: log what you actually lift and move up only when form is sound. PDF encourages reviewing recovery if progress stalls.
- Only meaningful exercise metrics require typing. If you want more detailed set-by-set tracking, that would be a separate future feature.
- Video links are the creator's links extracted from PDF; availability is determined by the linked owner.

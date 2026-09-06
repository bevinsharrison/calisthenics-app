window.CAL_WEEKS=window.CAL_WEEKS||[];window.CAL_WEEKS.push({
  id:'w31-32',
  label:'Sessions 31 & 32',
  dateLabel:'Deload week · Mon–Wed plan',
  analysis:{
    load:{pull:'moderate',push:'moderate',legs:'low',core:'high',straightArm:'low'},
    recommendation:'Deload week. Keep the coach work as written and use one short supplemental session for legs + vertical pressing. No extra front-lever or heavy pulling this week.'
  },
  sessions:[
    {
      id:'supp-a',source:'supplemental',schedule:'MON',title:'Strength A — Deload Complement',
      subtitle:'Leg strength · vertical push · posterior chain',duration:'45–55 min',
      focus:['Leg Strength','Vertical Push','Posterior Chain'],
      rationale:'Session 32 already supplies plenty of muscle-up, dip, pull-up and row volume. This fills the persistent leg/vertical-push gaps without adding meaningful pulling fatigue before Tuesday.',
      blocks:[
        {id:'sa-hspu',exerciseId:'pike_hspu',title:'HSPU Progression',meta:'4 × 3–6 · 2–3 min rest',kind:'checksets',sets:4,note:'Use the hardest progression you can control cleanly. Stop 1–2 reps before form breaks. If shoulders feel taxed before Tuesday, use wall-assisted or elevated pike reps rather than forcing full HSPUs.'},
        {id:'sa-bss',exerciseId:'bulgarian_split_squat',title:'Bulgarian Split Squat',meta:'3 × 6–8 / leg',kind:'strengthlog',sets:3,note:'Load these enough that the final 1–2 reps are genuinely difficult while staying controlled. This replaces the kind of underloaded leg stimulus you felt from last week\'s wall sits.'},
        {id:'sa-rdl',exerciseId:'romanian_deadlift',title:'Romanian Deadlift',meta:'3 × 6–10',kind:'strengthlog',sets:3,note:'Controlled hinge, slight knee bend, feel hamstrings load. Leave 1–2 clean reps in reserve.'},
        {id:'sa-pike',exerciseId:'pike_hspu',title:'Elevated Pike Push-Ups',meta:'3 × 6–10 · optional',kind:'checksets',sets:3,note:'Only do this if your shoulders still feel good after the HSPU work. Skip it rather than turning a deload complement into a second hard upper-body day.'},
        {id:'sa-calf',exerciseId:'calf_raise',title:'Calf Raises',meta:'3 × 10–15',kind:'strengthlog',sets:3,note:'Full range, controlled pause at the stretched position.'}
      ]
    },
    {
      id:'coach-32',source:'coach',schedule:'TUE',title:'Session 32 — Muscle-Ups & Express Circuits',
      subtitle:'Muscle-up supersets · descending circuits · core endurance',duration:'~50 min',
      focus:['Muscle-Up','Push/Pull Volume','Core'],
      blocks:[
        {id:'32-warm',title:'Warm-up',meta:'10 min',kind:'note',text:'Use your normal warm-up sheet. Pay extra attention to shoulders before the muscle-up work.'},
        {id:'32-prime',title:'Mise en route',meta:'3 cycles · 30s rest',kind:'checksets',sets:3,items:['30s plank','12 squats + 12s bottom-position isometric hold','8 push-ups + 10s bottom-position isometric hold'],coachContext:'The warm-up is deliberately more involved because the first main exercise is the muscle-up. Your coach specifically wants the front of the shoulders prepared for the transition, so do not skip the bottom-position isometric hold after the push-ups.'},
        {id:'32-mu-dips',exerciseId:'muscle_up',title:'Muscle-Ups + Bar Dips',meta:'6 sets · 2 MU + 8 bar dips',kind:'checksets',sets:6,note:'Rest as needed between supersets. Use a band for the muscle-ups if reps stop being clean.',coachContext:'This is similar to what you practiced together at the park, but with more total volume. The goal is to chain the muscle-ups into bar dips as a true superset. Do not rush the rest just because it is written as a circuit-style session.'},
        {id:'32-c1',title:'Circuit 1 — Descending Push/Pull',meta:'Goal: under 4:00 including rests',kind:'stopwatch',target:'10 scap pulls + 5 pull-ups + 25 push-ups → 30s rest → 8 + 4 + 20 → 30s rest → 6 + 3 + 15',items:['Round 1: 10 scapular pull-ups + 5 pull-ups + 25 push-ups','30s rest','Round 2: 8 scapular pull-ups + 4 pull-ups + 20 push-ups','30s rest','Round 3: 6 scapular pull-ups + 3 pull-ups + 15 push-ups'],coachContext:'Four minutes is a stretch goal, not a requirement. For the first attempt, record the time and keep the reps clean. Later, difficulty can increase by keeping sets unbroken and reducing rest rather than sacrificing form.',log:{type:'best_seconds',label:'Circuit time (seconds)'}},
        {id:'32-c2',title:'Circuit 2 — Australian Row Isometrics',meta:'3 descending rounds',kind:'pyramid',rows:['60s chest-to-bar hold + 12 Australian rows → 60s rest','45s hold + 10 rows → 45s rest','30s hold + 8 rows'],coachContext:'This block is mainly horizontal-pull endurance. Keep the chest close to the bar during the isometric portion, then continue directly into the reps. You can use either pronated or supinated grip.'},
        {id:'32-c3',title:'Circuit 3 — Dips + Tuck L-Sit + Plank',meta:'Continuous · add rest only if needed',kind:'pyramid',rows:['5 dips + 30s tuck L-sit + 60s plank','5 dips + 20s tuck L-sit + 45s plank','5 dips + 10s tuck L-sit + 30s plank'],coachContext:'Your coach expects this one to feel hard because there is no planned rest. If quality falls apart, shorten the dip range slightly and add rest equal to the plank duration (60s, 45s, then 30s). The core demand is intentional across all three movements.'},
        {id:'32-stretch',title:'Stretching',meta:'10 min',kind:'note',text:'Deltoids, triceps, biceps, brachioradialis, lats, rotator cuff, chest, lower back, abs, obliques and psoas.'}
      ]
    },
    {
      id:'coach-31',source:'coach',schedule:'WED',title:'Session 31 — The Last One Holding',
      subtitle:'Deload plank protocol · changing support points · push-up ladder',duration:'~20–30+ min',
      focus:['Core Endurance','Plank','Push-Ups'],
      rationale:'Your coach calls this a deload week and specifically says to follow how you feel. Option 1 is the recommended baseline this week after Tuesday\'s upper-body volume.',
      blocks:[
        {id:'31-select',title:'Choose Protocol',meta:'Option 1 recommended',kind:'protocolchoice',options:[
          {label:'Option 1 — Recommended',detail:'8 min on 4 points → 4 min on 3 points → 2 min on 2 points',phases:['8 min · 4 support points','4 min · 3 support points','2 min · 2 support points'],pushStart:1,pushStep:1},
          {label:'Option 2 — Medium',detail:'12 min → 8 min → 4 min',phases:['12 min · 4 support points','8 min · 3 support points','4 min · 2 support points'],pushStart:2,pushStep:2},
          {label:'Option 3 — Hard',detail:'15 min → 10 min → 5 min',phases:['15 min · 4 support points','10 min · 3 support points','5 min · 2 support points'],pushStart:5,pushStep:5}
        ],coachContext:'This is a plank challenge inspired by progressively reducing the available support points. Your coach says to try at least Option 1 and to follow how you feel because this is a deload week. The objective is endurance and position management, not proving you can survive Option 3.'},
        {id:'31-phase-4',title:'Phase 1 — Four Support Points',meta:'Use selected protocol time',kind:'protocolphase',phaseIndex:0,note:'You may change position as long as four points remain on the ground. Alternate front and oblique plank periodically. Elbows are preferred over straight arms to save shoulder energy.'},
        {id:'31-phase-3',title:'Phase 2 — Three Support Points',meta:'Use selected protocol time',kind:'protocolphase',phaseIndex:1,note:'Alternate three-point oblique plank left/right and front plank with one leg raised. Switch sides as needed.'},
        {id:'31-phase-2',title:'Phase 3 — Two Support Points',meta:'Use selected protocol time',kind:'protocolphase',phaseIndex:2,note:'Use opposite arm and leg when facing down (left arm + right leg, or vice versa). Move carefully; balance is part of the challenge.'},
        {id:'31-final',title:'Final Phase — Four-Point Plank + Push-Up Ladder',meta:'Continue until failure',kind:'pushupladder',note:'Return to four support points and keep planking. At the start of each new minute, perform the prescribed push-ups, then return to plank. Move quickly through the push-ups without sacrificing form.',coachContext:'The push-up ladder starts and increases according to the protocol you selected: Option 1 = 1,2,3...; Option 2 = 2,4,6...; Option 3 = 5,10,15.... Stop when you can no longer maintain the protocol with acceptable form.'}
      ]
    }
  ]
});

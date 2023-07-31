const Exercises = [
  {
    id: 1,
    name: "Push",
    image: "push.jpg",
    exercises: [
      {
        name: "Push-Ups",
        help: "https://www.muscleandstrength.com/exercises/push-up.html",
        sets: 3,
        reps: 10,
        video: "pushUps",
        description:
          "Get into a high plank position with hands directly under shoulders and legs extended behind you. Keeping your core engaged, bend elbows to lower chest towards the ground until elbows are at a 90 degree angle. Pause briefly before pressing back up to starting position in a controlled motion.",
        break: 90,
      },
      {
        name: "Barbell Bench Press",
        help: "https://www.muscleandstrength.com/exercises/barbell-bench-press.html",
        sets: 4,
        reps: 8,
        video: "benchPress",
        description:
          "Lie back on a flat bench holding a barbell above your chest with an overhand grip slightly wider than shoulder width. Lower bar to chest by bending elbows, keeping them tucked in at your sides. Touch bar to chest then press back up to starting position by extending arms.",
        break: 60,
      },
      {
        name: "Couch Dips",
        help: "https://www.muscleandstrength.com/exercises/single-bench-dip.html",
        sets: 3,
        reps: 12,
        video: "benchDip",
        description:
          "Sit on the edge of a sturdy couch or chair, placing hands behind you on the edge with fingers pointing forward. Walk feet out and straighten arms to lift hips off the couch into an extended position. Bend elbows to lower body towards floor, then straighten to raise back up.",
        break: 60,
      },
      {
        name: "Lean-Away Dumbbell Lateral Raise",
        help: "https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html",
        sets: 3,
        reps: 12,
        video: "lateralRaise",
        description:
          "Stand holding dumbbells by your sides with palms facing inwards. Keeping a slight bend in elbows, raise both arms straight out to the sides up to shoulder height, leaning torso slightly backwards. Pause then lower back down to starting position in a controlled motion.",
        break: 60,
      },
      {
        name: "Dumbbell Triceps",
        help: "https://www.muscleandstrength.com/exercises/two-arm-dumbbell-extension.html",
        sets: 3,
        reps: 10,
        video: "dbTricep",
        description:
          "Stand holding a dumbbell in each hand above your head with arms extended. Keeping upper arms stationary, bend elbows to lower dumbbells behind head until forearms are parallel to ground. Straighten arms back to starting position and repeat.",
        break: 60,
      },
      {
        name: "Standing Dumbbell Shoulder Press",
        help: "https://www.muscleandstrength.com/exercises/standing-dumbbell-press.html",
        sets: 3,
        reps: 10,
        video: "shoulderPress",
        description:
          "Stand holding dumbbells at shoulder height with palms facing forward. Press dumbbells directly upwards by extending arms until they are overhead, being careful not to arch back. Slowly lower back to shoulder height and repeat.",
        break: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Pull",
    image: "pull.webp",
    exercises: [
      {
        name: "Weighted Pull-Ups",
        help: "https://www.muscleandstrength.com/exercises/weighted-pull-up",
        sets: 4,
        reps: 6,
        video: "pullUps",
        description:
          "Grasp pull-up bar with an overhand grip slightly wider than shoulder width. Hang from bar with arms fully extended. Pull yourself up until your chin clears the bar, then lower back down with control. For weighted, use a weight belt or hold a dumbbell between feet.",
        break: 90,
      },
      {
        name: "Barbell Biceps Curls",
        help: "https://www.muscleandstrength.com/exercises/standing-barbell-curl.html",
        sets: 3,
        reps: 10,
        video: "bicepCurls",
        description:
          "Stand holding a barbell with an underhand shoulder width grip. Keeping upper arms stationary at your sides, curl bar up towards shoulders by bending elbows. Squeeze biceps at top then lower back down slowly with control.",
        break: 60,
      },
      {
        name: "Bent Over Dumbbell Rows",
        help: "https://www.muscleandstrength.com/exercises/bent-over-dumbbell-row.html",
        sets: 3,
        reps: 10,
        video: "dbRows",
        description:
          "Hinge forward from hips until back is nearly parallel to floor, keeping knees slightly bent. Holding a dumbbell in each hand with palms facing in, pull dumbbells up towards sides of chest by driving elbows back. Lower under control then repeat.",
        break: 60,
      },
      {
        name: "Plank with Straight Hands",
        help: "https://www.muscleandstrength.com/exercises/hover.html",
        sets: 3,
        reps: "60s",
        video: "plank",
        description:
          "Get into a straight arm plank position balancing on forearms and toes. Keeping body in straight line, raise up onto hands by straightening arms. Hold for a few seconds then lower back down onto forearms and repeat.",
        break: 60,
      },
      {
        name: "Abs V-Ups",
        help: "https://www.builtlean.com/v-ups-lower-abs-exercise-5-tips-3-variations/",
        sets: 3,
        reps: 10,
        video: "vUps",
        description:
          "Lie on floor with legs extended and arms reaching overhead. Engaging core, simultaneously lift legs and torso up off floor, reaching hands towards feet. Aim to form a V shape with your body. Slowly lower back down to starting position with control.",
        break: 60,
      },
      {
        name: "Bent Over Barbell Rows",
        help: "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html",
        sets: 3,
        reps: 10,
        video: "bbRows",
        description:
          "Hinge at hips to bend torso forward, holding barbell with knees slightly bent. Keeping back flat, pull barbell up towards lower chest by driving elbows back and squeezing shoulder blades. Lower under control and repeat.",
        break: 60,
      },
    ],
  },
  {
    id: 3,
    name: "Legs",
    image: "legs.jpg",
    exercises: [
      {
        name: "Dumbbell Squats",
        help: "https://www.muscleandstrength.com/exercises/dumbbell-squat.html",
        sets: 4,
        reps: 10,
        video: "dbSquats",
        description:
          "Stand holding dumbbells at your sides with feet shoulder width. Initiate movement by pushing hips back and bending knees to lower into a squat. Descend until thighs are parallel or below knee level, then press through heels to stand back up.",
        break: 90,
      },
      {
        name: "Dumbbell Calves Raises",
        help: "https://www.muscleandstrength.com/exercises/standing-one-leg-calf-raise-with-dumbbell.html",
        sets: 4,
        reps: 15,
        video: "dbCalves",
        description:
          "Stand holding dumbbells by your sides with feet hip width. Rise up onto balls of feet, lifting heels as high as possible. Pause at top then slowly lower back down to starting position with control.",
        break: 60,
      },
      {
        name: "Barbell Deadlifts",
        help: "https://www.muscleandstrength.com/exercises/deadlifts.html",
        sets: 4,
        reps: 6,
        video: "bbDeadlifts",
        description:
          "Stand behind barbell midfoot with feet hip width apart. Hinge at hips to grip bar outside legs, back flat. Drive through heels and extend hips and knees to stand up, lifting bar. Lower bar back to floor with control.",
        break: 120,
      },
      {
        name: "Barbell Hip Thrusts",
        help: "https://www.muscleandstrength.com/exercises/barbell-hip-thrust",
        sets: 3,
        reps: 10,
        video: "bbHipThrusts",
        description:
          "Sit on ground with shoulders against a bench and barbell over hips. With feet on floor, drive through heels to raise hips, lifting bar. Squeeze glutes at top then lower back down to start.",
        break: 60,
      },
      {
        name: "Dumbbell Lunges",
        help: "https://www.muscleandstrength.com/exercises/dumbbell-lunge.html",
        sets: 3,
        reps: 10,
        video: "dbLunge",
        description:
          "Stand holding dumbbells at your sides. Step forward with one leg, lowering into a lunge by bending both knees to 90 degrees. Push off rear foot to return to standing and alternate legs.",
        break: 60,
      },
    ],
  },
  {
    id: 4,
    name: "Complete",
    image: "full_body.webp",
    exercises: [
      {
        name: "Barbell Squats",
        help: "https://www.muscleandstrength.com/exercises/squat.html",
        sets: 4,
        reps: 8,
        video: "dbSquats",
        description:
          "Set bar on upper back and stand with feet shoulder width apart. Send hips back and bend knees to lower into a squat. Descend until thighs are parallel to floor then drive through heels to return to start position.",
        break: 90,
      },
      {
        name: "Barbell Bench Press",
        help: "https://www.muscleandstrength.com/exercises/barbell-bench-press.html",
        sets: 4,
        reps: 8,
        video: "benchPress",
        description:
          "Lie back on a flat bench holding barbell above chest with overhand grip. Lower bar to chest by bending elbows out to sides. Touch chest then press bar back up by extending arms.",
        break: 60,
      },
      {
        name: "Pull-Ups",
        help: "https://www.muscleandstrength.com/exercises/pull-up",
        sets: 3,
        reps: 8,
        video: "pullUps",
        description:
          "Grasp pull-up bar with palms facing forward using overhand grip. Hang with arms extended then pull yourself up until chin clears bar. Lower back down with control and repeat.",
        break: 90,
      },
      {
        name: "Barbell Deadlifts",
        help: "https://www.muscleandstrength.com/exercises/deadlifts.html",
        sets: 4,
        reps: 5,
        video: "bbDeadlifts",
        description:
          "Stand behind bar midfoot with hip-width stance. Bend at hips to grip bar outside legs while keeping back flat. Drive through heels and extend hips and knees to stand up, lifting bar. Lower under control.",
        break: 120,
      },
      {
        name: "Push-Ups",
        help: "https://www.muscleandstrength.com/exercises/push-up.html",
        sets: 3,
        reps: 10,
        video: "pushUps",
        description:
          "In plank position with hands under shoulders, bend elbows to lower chest to ground until elbows are at 90 degree angle. Pause then press back up to starting plank position by extending arms.",
        break: 60,
      },
      {
        name: "Bent Over Barbell Rows",
        help: "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html",
        sets: 3,
        reps: 10,
        video: "bbRows",
        description:
          "With knees bent, hinge at hips to bend torso forward, holding barbell. Keeping back flat, pull barbell up towards lower chest by driving elbows back and squeezing shoulder blades. Lower under control.",
        break: 60,
      },
    ],
  },
  {
    id: 5,
    name: "Stretching",
    image: "stretching.jpg",
    exercises: [
      {
        name: "Standing Hamstring Stretch",
        help: "https://workoutlabs.com/exercise-guide/standing-hamstring-stretch/",
        sets: 3,
        reps: "30s",
        video: "hamstringStretch",
        description:
          "Stand with one leg lifted and resting on a chair or bench. Keeping back straight, hinge from hips until stretch is felt in back of lifted leg. Hold then switch legs.",
        break: 60,
      },
      {
        name: "Seated Twist Stretch",
        help: "https://www.athletico.com/2017/06/21/stretch-week-seated-twist-neck-stretch/",
        sets: 3,
        reps: "30s",
        video: "seatedTwist",
        description:
          "Sit on floor with knees bent and feet flat. Keeping back straight, rotate torso to one side until stretch is felt. Hold then repeat on opposite side.",
        break: 30,
      },
      {
        name: "Kneeling Hip Flexor",
        help: "https://evofitness.ch/hip-flexor-stretch/",
        sets: 3,
        reps: "30s",
        video: "hipFlexor",
        description:
          "From kneeling lunge position, squeeze glutes and tilt pelvis forward until stretch is felt in front of hip. Hold then switch legs.",
        break: 30,
      },
    ],
  },
  {
    id: 6,
    name: "Balance",
    image: "balance.jpg",
    exercises: [
      {
        name: "Tree Pose",
        help: "https://www.yogajournal.com/poses/tree-pose-2/",
        sets: 5,
        reps: "60s",
        video: "treePose",
        description:
          "Balance on one leg, pressing foot into standing leg. Bring other foot to calf or inner thigh and raise arms overhead. Focus gaze and hold.",
        break: 30,
      },
      {
        name: "Warrior 3",
        help: "https://www.yogajournal.com/poses/warrior-iii-pose",
        sets: 5,
        reps: "60s",
        video: "warrior3",
        description:
          "From standing, hinge at hips to extend one leg back, arms forward and torso parallel to floor. Find balance and hold with gaze steady.",
        break: 30,
      },
      {
        name: "Standing Leg Lifts",
        help: "https://www.daniwinksflexibility.com/flexopedia/standing-leg-lifts",
        sets: 3,
        reps: 10,
        video: "legLifts",
        description:
          "Stand behind chair for support. Raise one leg straight out in front of you, engaging core. Hold briefly then lower back down with control. Repeat on both sides.",
        break: 30,
      },
    ],
  },
  {
    id: 7,
    name: "Cardio",
    image: "cardio.jpg",
    exercises: [
      {
        name: "Jumping Jacks",
        help: "https://www.spotebi.com/exercise-guide/jumping-jacks/",
        sets: 4,
        reps: 20,
        video: "jumpingJacks",
        description:
          "Stand with feet together and arms at sides. Jump feet out wide and raise arms overhead at same time. Jump back to start position and repeat.",
        break: 60,
      },
      {
        name: "High Knees",
        help: "https://www.healthline.com/health/fitness/high-knees-benefits#how-to",
        sets: 4,
        reps: 20,
        video: "highKnees",
        description:
          "Run in place, lifting knees as high as possible towards chest. Pump arms and keep torso upright. Repeat for specified reps.",
        break: 60,
      },
      {
        name: "Mountain Climbers",
        help: "https://www.verywellfit.com/mountain-climbers-exercise-3966947",
        sets: 4,
        reps: 20,
        video: "mtnClimbers",
        description:
          "In high plank position, drive one knee towards chest. Switch legs in quick succession, like climbing a mountain. Keep core engaged.",
        break: 60,
      },
    ],
  },
];

export default Exercises;

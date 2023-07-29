const Exercises = [
  {
    id: 1,
    name: "Push",
    image: "push.jpg",
    exercises: [
      {
        name: "Push-Ups",
        gif: "pushups.gif",
        video: "pushUps.mp4",
        description:
          "Get into a high plank position with hands directly under shoulders and legs extended behind you. Keeping your core engaged, bend elbows to lower chest towards the ground until elbows are at a 90 degree angle. Pause briefly before pressing back up to starting position in a controlled motion.",
      },
      {
        name: "Barbell Bench Press",
        gif: "bb-bench-press.gif",
        video: "",
        description:
          "Lie back on a flat bench holding a barbell above your chest with an overhand grip slightly wider than shoulder width. Lower bar to chest by bending elbows, keeping them tucked in at your sides. Touch bar to chest then press back up to starting position by extending arms.",
      },
      {
        name: "Couch Dips",
        gif: "couch-dips.gif",
        video: "",
        description:
          "Sit on the edge of a sturdy couch or chair, placing hands behind you on the edge with fingers pointing forward. Walk feet out and straighten arms to lift hips off the couch into an extended position. Bend elbows to lower body towards floor, then straighten to raise back up.",
      },
      {
        name: "Lean-Away Dumbbell Lateral Raise",
        gif: "db-lateral-raise.gif",
        video: "",
        description:
          "Stand holding dumbbells by your sides with palms facing inwards. Keeping a slight bend in elbows, raise both arms straight out to the sides up to shoulder height, leaning torso slightly backwards. Pause then lower back to starting position in a controlled motion.",
      },
      {
        name: "Dumbbell Triceps",
        gif: "db-tricep.gif",
        video: "",
        description:
          "Stand holding a dumbbell in each hand above your head with arms extended. Keeping upper arms stationary, bend elbows to lower dumbbells behind head until forearms are parallel to ground. Straighten arms back to starting position and repeat.",
      },
      {
        name: "Standing Dumbbell Shoulder Press",
        gif: "db-shoulder-press.gif",
        video: "",
        description:
          "Stand holding dumbbells at shoulder height with palms facing forward. Press dumbbells directly upwards by extending arms until they are overhead, being careful not to arch back. Slowly lower back to shoulder height and repeat.",
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
        gif: "weighted-pullup.gif",
        video: "",
        description:
          "Grasp pull-up bar with an overhand grip slightly wider than shoulder width. Hang from bar with arms fully extended. Pull yourself up until your chin clears the bar, then lower back down with control. For weighted, use a weight belt or hold a dumbbell between feet.",
      },
      {
        name: "Barbell Biceps Curls",
        gif: "bb-bicep-curl.gif",
        video: "",
        description:
          "Stand holding a barbell with an underhand shoulder width grip. Keeping upper arms stationary at your sides, curl bar up towards shoulders by bending elbows. Squeeze biceps at top then lower back down slowly with control.",
      },
      {
        name: "Bent Over Dumbbell Rows",
        gif: "db-tripod-row.gif",
        video: "",
        description:
          "Hinge forward from hips until back is nearly parallel to floor, keeping knees slightly bent. Holding a dumbbell in each hand with palms facing in, pull dumbbells up towards sides of chest by driving elbows back. Lower under control then repeat.",
      },
      {
        name: "Plank with Straight Hands",
        gif: "plank.webp",
        video: "",
        description:
          "Get into a straight arm plank position balancing on forearms and toes. Keeping body in straight line, raise up onto hands by straightening arms. Hold for a few seconds then lower back down onto forearms and repeat.",
      },
      {
        name: "Abs V-Ups",
        gif: "v-ups.gif",
        video: "",
        description:
          "Lie on floor with legs extended and arms reaching overhead. Engaging core, simultaneously lift legs and torso up off floor, reaching hands towards feet. Aim to form a V shape with your body. Slowly lower back down to starting position with control.",
      },
      {
        name: "Bent Over Barbell Rows",
        gif: "bb-under-hand-row.gif",
        video: "",
        description:
          "Hinge at hips to bend torso forward, holding barbell with knees slightly bent. Keeping back flat, pull barbell up towards lower chest by driving elbows back and squeezing shoulder blades. Lower under control and repeat.",
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
        gif: "db-drop-squat.gif",
        video: "",
        description:
          "Stand holding dumbbells at your sides with feet shoulder width. Initiate movement by pushing hips back and bending knees to lower into a squat. Descend until thighs are parallel or below knee level, then press through heels to stand back up.",
      },
      {
        name: "Dumbbell Calves Raises",
        gif: "calf-calfraises.gif",
        video: "",
        description:
          "Stand holding dumbbells by your sides with feet hip width. Rise up onto balls of feet, lifting heels as high as possible. Pause at top then slowly lower back down to starting position with control.",
      },
      {
        name: "Barbell Deadlifts",
        gif: "deadlifts.gif",
        video: "",
        description:
          "Stand behind barbell midfoot with feet hip width apart. Hinge at hips to grip bar outside legs, back flat. Drive through heels and extend hips and knees to stand up, lifting bar. Lower bar back to floor with control.",
      },
      {
        name: "Barbell Hip Thrusts",
        gif: "hip-barbell.gif",
        video: "",
        description:
          "Sit on ground with shoulders against a bench and barbell over hips. With feet on floor, drive through heels to raise hips, lifting bar. Squeeze glutes at top then lower back down to start.",
      },
      {
        name: "Dumbbell Lunges",
        gif: "bodyweight-split-squats.gif",
        video: "",
        description:
          "Stand holding dumbbells at your sides. Step forward with one leg, lowering into a lunge by bending both knees to 90 degrees. Push off rear foot to return to standing and alternate legs.",
      },
    ],
  },
  {
    id: 4,
    name: "Full Body",
    image: "full_body.webp",
    exercises: [
      {
        name: "Barbell Squats",
        gif: "bb-back-squats.gif",
        video: "",
        description:
          "Set bar on upper back and stand with feet shoulder width apart. Send hips back and bend knees to lower into a squat. Descend until thighs are parallel to floor then drive through heels to return to start position.",
      },
      {
        name: "Barbell Bench Press",
        gif: "bb-bench-press.gif",
        video: "",
        description:
          "Lie back on a flat bench holding barbell above chest with overhand grip. Lower bar to chest by bending elbows out to sides. Touch chest then press bar back up by extending arms.",
      },
      {
        name: "Pull-Ups",
        gif: "weighted-pullup.gif",
        video: "",
        description:
          "Grasp pull-up bar with palms facing forward using overhand grip. Hang with arms extended then pull yourself up until chin clears bar. Lower back down with control and repeat.",
      },
      {
        name: "Barbell Deadlifts",
        gif: "deadlifts.gif",
        video: "",
        description:
          "Stand behind bar midfoot with hip-width stance. Bend at hips to grip bar outside legs while keeping back flat. Drive through heels and extend hips and knees to stand up, lifting bar. Lower under control.",
      },
      {
        name: "Push-Ups",
        gif: "pushups.gif",
        video: "",
        description:
          "In plank position with hands under shoulders, bend elbows to lower chest to ground until elbows are at 90 degree angle. Pause then press back up to starting plank position by extending arms.",
      },
      {
        name: "Bent Over Barbell Rows",
        gif: "bb-under-hand-row.gif",
        video: "",
        description:
          "With knees bent, hinge at hips to bend torso forward, holding barbell. Keeping back flat, pull barbell up towards lower chest by driving elbows back and squeezing shoulder blades. Lower under control.",
      },
    ],
  },
];

export default Exercises;

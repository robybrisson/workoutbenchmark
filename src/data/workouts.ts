export interface Exercise {
  name: string;
  reps: string;
  imageUrl: string;
  description: string;
}

export interface Workout {
  id: string;
  name: string;
  type: "For Time" | "AMRAP" | "EMOM";
  description: string;
  exercises: Exercise[];
}

export const workouts: Workout[] = [
  {
    id: "fran",
    name: "Fran",
    type: "For Time",
    description: "Complete 21-15-9 reps of each movement",
    exercises: [
      {
        name: "Thrusters",
        reps: "21-15-9 reps (95/65 lbs)",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Thruster-exercise-guide.png",
        description: "A front squat into a push press in one fluid motion"
      },
      {
        name: "Pull-ups",
        reps: "21-15-9 reps",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Pull-up-exercise-guide.png",
        description: "Strict, kipping, or butterfly pull-ups are allowed"
      }
    ]
  },
  {
    id: "grace",
    name: "Grace",
    type: "For Time",
    description: "30 Clean and Jerks (135/95 lbs)",
    exercises: [
      {
        name: "Clean and Jerk",
        reps: "30 reps",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Clean-and-Jerk-exercise-guide.png",
        description: "Ground to overhead in any way - touch and go or reset allowed"
      }
    ]
  },
  {
    id: "helen",
    name: "Helen",
    type: "For Time",
    description: "3 rounds for time",
    exercises: [
      {
        name: "Run",
        reps: "400 meters",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Running-exercise-guide.png",
        description: "400 meter run at the start of each round"
      },
      {
        name: "Kettlebell Swings",
        reps: "21 reps (53/35 lbs)",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Kettlebell-Swing-exercise-guide.png",
        description: "American or Russian style kettlebell swings"
      },
      {
        name: "Pull-ups",
        reps: "12 reps",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Pull-up-exercise-guide.png",
        description: "Strict, kipping, or butterfly pull-ups are allowed"
      }
    ]
  },
  {
    id: "diane",
    name: "Diane",
    type: "For Time",
    description: "Complete 21-15-9 reps of each movement",
    exercises: [
      {
        name: "Deadlifts",
        reps: "21-15-9 reps (225/155 lbs)",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Deadlift-exercise-guide.png",
        description: "Traditional deadlift with a barbell"
      },
      {
        name: "Handstand Push-ups",
        reps: "21-15-9 reps",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Handstand-Push-up-exercise-guide.png",
        description: "Strict or kipping handstand push-ups against a wall"
      }
    ]
  },
  {
    id: "elizabeth",
    name: "Elizabeth",
    type: "For Time",
    description: "Complete 21-15-9 reps of each movement",
    exercises: [
      {
        name: "Cleans",
        reps: "21-15-9 reps (135/95 lbs)",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Clean-exercise-guide.png",
        description: "Power or squat cleans are allowed"
      },
      {
        name: "Ring Dips",
        reps: "21-15-9 reps",
        imageUrl: "https://wodwell.com/wp-content/uploads/2023/05/Ring-Dip-exercise-guide.png",
        description: "Strict or kipping ring dips"
      }
    ]
  }
];
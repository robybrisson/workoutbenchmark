import { Exercise } from '../data/workouts';

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{exercise.name}</h3>
      <p className="text-gray-600 mt-2 font-medium">{exercise.reps}</p>
      <img
        src={exercise.imageUrl}
        alt={exercise.name}
        className="w-full h-64 object-cover rounded-lg mt-4"
        loading="lazy"
      />
      <p className="text-sm text-gray-500 mt-2">{exercise.description}</p>
    </div>
  );
}
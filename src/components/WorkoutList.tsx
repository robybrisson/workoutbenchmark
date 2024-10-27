import { Link } from 'react-router-dom';
import { workouts } from '../data/workouts';

export default function WorkoutList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">CrossFit Benchmark WODs</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <Link
            key={workout.id}
            to={`/workout/${workout.id}`}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-800">{workout.name}</h2>
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
              {workout.type}
            </div>
            <p className="text-gray-600 mt-2 line-clamp-2">{workout.description}</p>
            <p className="text-blue-600 mt-2 text-sm">View workout →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
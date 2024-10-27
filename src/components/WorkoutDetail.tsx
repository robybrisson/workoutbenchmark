import { useParams, Link } from 'react-router-dom';
import { workouts } from '../data/workouts';
import { sampleLeaderboard } from '../data/sampleUsers';
import ExerciseCard from './ExerciseCard';
import Timer from './Timer';
import Leaderboard from './Leaderboard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { formatTime } from '../utils/formatTime';

interface WorkoutTime {
  date: string;
  time: number;
}

interface WorkoutTimes {
  [workoutId: string]: WorkoutTime[];
}

export default function WorkoutDetail() {
  const { workoutId } = useParams();
  const workout = workouts.find((w) => w.id === workoutId);
  const [workoutTimes, setWorkoutTimes] = useLocalStorage<WorkoutTimes>('workoutTimes', {});

  const handleSaveTime = (time: number) => {
    if (!workoutId) return;
    
    const newTime: WorkoutTime = {
      date: new Date().toISOString(),
      time,
    };

    setWorkoutTimes((prev) => ({
      ...prev,
      [workoutId]: [...(prev[workoutId] || []), newTime],
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (!workout || !workoutId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl text-red-600">Workout not found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  const workoutHistory = workoutTimes[workoutId] || [];
  const sampleTimes = sampleLeaderboard[workoutId] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Workouts
      </Link>
      
      <div className="bg-white rounded-lg p-6 shadow-md mb-8">
        <h1 className="text-3xl font-bold text-center">{workout.name}</h1>
        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-4">
          {workout.type}
        </div>
        <p className="text-gray-600 text-center text-lg">{workout.description}</p>
      </div>

      <div className="mb-8">
        <Timer onSaveTime={handleSaveTime} />
      </div>

      <Leaderboard 
        workoutId={workoutId}
        sampleTimes={sampleTimes}
        userTimes={workoutHistory}
      />

      {workoutHistory.length > 0 && (
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Your History</h2>
          <div className="space-y-2">
            {workoutHistory.slice().reverse().map((record, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-600">{formatDate(record.date)}</span>
                <span className="font-mono font-medium">{formatTime(record.time)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workout.exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
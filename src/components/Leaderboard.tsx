import { UserTime } from '../data/sampleUsers';
import { formatTime } from '../utils/formatTime';

interface LeaderboardProps {
  workoutId: string;
  sampleTimes: UserTime[];
  userTimes: { date: string; time: number; }[];
}

export default function Leaderboard({ workoutId, sampleTimes, userTimes }: LeaderboardProps) {
  const combinedTimes = [
    ...sampleTimes,
    ...userTimes.map((time) => ({
      userId: 'you',
      userName: 'You',
      time: time.time,
      date: time.date,
    })),
  ].sort((a, b) => a.time - b.time);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Athlete
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {combinedTimes.map((entry, index) => (
              <tr 
                key={`${entry.userId}-${entry.date}`}
                className={entry.userId === 'you' ? 'bg-blue-50' : ''}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                  {formatTime(entry.time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
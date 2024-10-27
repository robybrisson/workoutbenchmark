export interface UserTime {
  userId: string;
  userName: string;
  time: number;
  date: string;
}

export const sampleLeaderboard: Record<string, UserTime[]> = {
  "fran": [
    { userId: "user1", userName: "Alex Smith", time: 138, date: "2024-02-01" },
    { userId: "user2", userName: "Sarah Johnson", time: 156, date: "2024-02-03" },
    { userId: "user3", userName: "Mike Chen", time: 171, date: "2024-02-02" },
    { userId: "user4", userName: "Emma Wilson", time: 189, date: "2024-02-04" },
  ],
  "grace": [
    { userId: "user2", userName: "Sarah Johnson", time: 180, date: "2024-02-01" },
    { userId: "user1", userName: "Alex Smith", time: 195, date: "2024-02-02" },
    { userId: "user4", userName: "Emma Wilson", time: 210, date: "2024-02-03" },
    { userId: "user3", userName: "Mike Chen", time: 225, date: "2024-02-04" },
  ],
  "helen": [
    { userId: "user3", userName: "Mike Chen", time: 474, date: "2024-02-01" },
    { userId: "user1", userName: "Alex Smith", time: 492, date: "2024-02-02" },
    { userId: "user2", userName: "Sarah Johnson", time: 519, date: "2024-02-03" },
    { userId: "user4", userName: "Emma Wilson", time: 537, date: "2024-02-04" },
  ],
  "diane": [
    { userId: "user4", userName: "Emma Wilson", time: 201, date: "2024-02-01" },
    { userId: "user2", userName: "Sarah Johnson", time: 219, date: "2024-02-02" },
    { userId: "user1", userName: "Alex Smith", time: 234, date: "2024-02-03" },
    { userId: "user3", userName: "Mike Chen", time: 252, date: "2024-02-04" },
  ],
  "elizabeth": [
    { userId: "user1", userName: "Alex Smith", time: 357, date: "2024-02-01" },
    { userId: "user3", userName: "Mike Chen", time: 378, date: "2024-02-02" },
    { userId: "user2", userName: "Sarah Johnson", time: 396, date: "2024-02-03" },
    { userId: "user4", userName: "Emma Wilson", time: 414, date: "2024-02-04" },
  ],
};
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutList from './components/WorkoutList';
import WorkoutDetail from './components/WorkoutDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WorkoutList />} />
          <Route path="/workout/:workoutId" element={<WorkoutDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
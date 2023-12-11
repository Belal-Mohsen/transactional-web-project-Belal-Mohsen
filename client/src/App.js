import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;

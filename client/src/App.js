import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import ContactUsPage from './pages/ContactUsPage';
import CalendarPage from './pages/CalendarPage';
import FaqPage from './pages/FaqPage';
import QuestionnairePage from './pages/QuestionnairePage';
import CartPage from './pages/CartPage';
import MyAccount from './pages/MyAccountPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/subscribe" element={<QuestionnairePage />} />
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/myaccount" element={<MyAccount/>}/>
    </Routes>
  );
}

export default App;

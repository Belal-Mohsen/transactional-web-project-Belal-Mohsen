import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import ContactUsPage from './pages/ContactUsPage';
import CalendarPage from './pages/CalendarPage';
import FaqPage from './pages/FaqPage';
import QuestionnairePage from './pages/QuestionnairePage';
import CartPage from './pages/CartPage';
import MyAccount from './pages/MyAccountPage';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentCancelPage from './pages/PaymentCancelPage';
import SubscribePage from './pages/SubscribePage';
import ChatBot from "./components/ChatBot";
import { StrictMode } from 'react';

function App() {
  // StrictMode conflicts with ChatBot, therefore ChatBot is moved outside of StrictMode
  return (
    <>
      <StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/subscribe" element={<SubscribePage />} />
              <Route path="/questionnaire" element={<QuestionnairePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/success" element={<PaymentSuccessPage />} />
              <Route path="/cancel" element={<PaymentCancelPage />} />
              <Route path="/myaccount" element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>

              } />
            </Routes>
          </Router>
        </Provider>
      </StrictMode>
      <ChatBot />
    </>
  );
}

export default App;
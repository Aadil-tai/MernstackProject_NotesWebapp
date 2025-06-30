import { Routes, Route } from 'react-router-dom';
import Header from './component/header';
import LandingPage from './component/landingPage';
import Mynotes from './component/Mynotes';
import LoginScreen from './component/LoginScreen/LoginScreen';
import RegisterScreen from './component/RegisterScreen/RegisterScreen';
import CreateNote from './component/createNote';
import NoteUpdateForm from './component/NoteUpdate';
import Mynotes2 from './component/newdesign';
import ProfilePage from './component/ProfilePage';
import { ToastContainer } from 'react-toastify';
import OTPcomponent from './component/AuthComponents/OTPcomponent';
import ResetPassword from './component/AuthComponents/resetPassword';
import Features from './component/Features';


const App = () => {
  return (
    <>
      <Header />

      {/* Main content grows to fill the space */}
      <main className="flex-1">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<RegisterScreen />} />
          <Route path="/mynotes" element={<Mynotes />} />
          <Route path="/mynotes2" element={<Mynotes2 />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/note/:id" element={<NoteUpdateForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/verify-account" element={<OTPcomponent />} />
          <Route path="/reset-password" element={<ResetPassword />} />

        </Routes>
      </main>

    </>

  );
};

export default App;

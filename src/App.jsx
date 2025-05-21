import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import EmailEntry from './pages/Signup/EmailEntry';
import EmailVerification from './pages/Signup/EmailVerification';
import NameEntry from './pages/Signup/NameEntry';
import PhoneEntry from './pages/Signup/PhoneEntry';
import ExistingProgram from './pages/Signup/ExistingProgram';
import ProgramName from './pages/Signup/ProgramName';

import TeamInvite from './pages/Signup/TeamInvite';
import OTPInput from './components/OTPInput';
import CountryDropdown from './components/CountryDropdown';
import ProgramHosting from './pages/Signup/ProgramHosting';
import PersonalDomainCheck from './pages/Signup/PersonalDomainCheck';
import PersonalDomain from './pages/Signup/PersonalDomain';
import NoWorries from './pages/Signup/NoWorries';
import CreateDomain from './pages/Signup/CreateDomain';
import ProfileHandle from './pages/Signup/ProfileHandle';
import ProfilePicture from './pages/Signup/ProfilePicture';
import SelectPlan from './pages/Signup/PlanSelection';
import FinalReview from './pages/Signup/FinalReview';
import Login from './pages/Signup/Login';
import OTPLogin from './components/OTPLogin';
import LoginDashboard from './pages/Signup/LoginDashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<EmailEntry />} />
        <Route path="/signup/opt-input" element={<OTPInput />} />
        <Route path="/login/dashbord" element={<LoginDashboard />} />
        <Route path="/login/opt-input" element={<OTPLogin />} />
        <Route path="/signup/countries" element={<CountryDropdown />} />
        <Route path="/signup/verify" element={<EmailVerification />} />
        <Route path="/signup/name" element={<NameEntry />} />
        <Route path="/signup/phone" element={<PhoneEntry />} />
        <Route path="/signup/existing-program" element={<ExistingProgram />} />
        {/* <Route path="/signup/program-hosting" element={<ProgramName />} /> */}
        <Route path="/signup/program-name" element={<ProgramName />} />
        <Route path="/signup/program-hosting" element={<ProgramHosting />} />
        <Route path="/signup/personal-domain" element={<PersonalDomain />} />
        <Route path="/signup/no-worries" element={<NoWorries />} />
        <Route path="/signup/created-domain" element={<CreateDomain />} />
        <Route path="/signup/personal-domain-check" element={<PersonalDomainCheck />} />
        <Route path="/signup/team-invite" element={<TeamInvite />} />
        <Route path="/signup/profile-handle" element={<ProfileHandle />} />
        <Route path="/signup/profile-picture" element={<ProfilePicture />} />
        <Route path="/signup/plan-selection" element={<SelectPlan />} />
        <Route path="/signup/review" element={<FinalReview />} />
      </Routes>
    </Router>
  )
}

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import EmailEntry from './pages/Signup/EmailEntry';
// // import EmailEntry from './pages/Signup/Emai';
// import EmailVerification from './pages/Signup/EmailVerification';
// import NameEntry from './pages/Signup/NameEntry';
// import PhoneEntry from './pages/Signup/PhoneEntry';
// import ExistingProgram from './pages/Signup/ExistingProgram';
// import ProgramName from './pages/Signup/ProgramName';
// import ProgramHosting from './pages/Signup/ProgramHosting';
// import PersonalDomain from './pages/Signup/PersonalDomain';
// import TeamInvite from './pages/Signup/TeamInvite';
// import ProfileHandle from './pages/Signup/ProfileHandle';
// import ProfilePicture from './pages/Signup/ProfilePicture';
// import PlanSelection from './pages/Signup/PlanSelection';

// function App() {
//   return (
    // <Router>
    //   <Toaster position="top-center" />
    //   <Routes>
    //     <Route path="/signup" element={<EmailEntry />} />
    //     <Route path="/signup/verify" element={<EmailVerification />} />
    //     <Route path="/signup/name" element={<NameEntry />} />
    //     <Route path="/signup/phone" element={<PhoneEntry />} />
    //     <Route path="/signup/existing-program" element={<ExistingProgram />} />
    //     <Route path="/signup/program-name" element={<ProgramName />} />
    //     <Route path="/signup/program-hosting" element={<ProgramHosting />} />
    //     <Route path="/signup/personal-domain" element={<PersonalDomain />} />
    //     <Route path="/signup/team-invite" element={<TeamInvite />} />
    //     <Route path="/signup/profile-handle" element={<ProfileHandle />} />
    //     <Route path="/signup/profile-picture" element={<ProfilePicture />} />
    //     <Route path="/signup/plan-selection" element={<PlanSelection />} />
    //   </Routes>
    // </Router>
//   );
// }

export default App

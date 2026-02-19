import AuthPage from "./pages/AuthPage"
import React from "react"
import {Routes, Route} from "react-router-dom"
import StudentDashboard from "./pages/StudentDashboard";
import FindRoommates from "./pages/FindRoommates";
import ProfileSetupWizard from "./pages/ProfileSetupWizard";
import Requests from "./pages/Requests";
import ChatMessages from "./pages/ChatMessages";
import Settings from "./pages/Settings";
import RoommateProfile from "./pages/RoommateProfile";

function App() {
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Routes>
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile-setup" element={<ProfileSetupWizard />} />
          <Route path="/find-roommates" element={<FindRoommates />} />
          <Route path="/abc" element={<Requests />} />
          <Route path="/" element={<RoommateProfile/>}/>
          <Route path="/chat" element = {<ChatMessages />} />
          <Route path="/Settings" element = {<Settings />} />
          <Route path="*" element={<div>404 Not found </div>} />
        </Routes>
      </div>
    </div>
  )
}

// fetch("http://localhost:5000/api/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ email, password })
// });


export default App;

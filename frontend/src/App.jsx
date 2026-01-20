import AuthPage from "./pages/AuthPage"
import React from "react"
import {Routes, Route} from "react-router-dom"
import StudentDashboard from "./pages/StudentDashboard";
import FindRoommates from "./pages/FindRoommates";
import ProfileSetupWizard from "./pages/ProfileSetupWizard";
import Requests from "./pages/Requests";
import ChatMessages from "./pages/ChatMessages";

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
          <Route path="/" element = {<ChatMessages />} />
          <Route path="*" element={<div>404 Not found </div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

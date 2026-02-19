import { registerUser, loginUser } from "../api/authApi";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Lock, 
  Sparkles, 
  Building2, 
  Eye, 
  EyeOff 
} from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle for Login/Signup tabs
  const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({ id: '', password: '' });
  const [formData, setFormData] = useState({email: '',password: '', name: '', gender: ''});

  const handleLogin = async () => {
    console.log("Login clicked", formData);//ghgjgjhb
    try {
      const res = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      alert("Login successful 🎉");
      navigate("/"); // or dashboard route
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  const handleRegister = async () => {
    console.log("Register clicked", formData);//hgvnbgh
    try {
      const res = await registerUser({
        name: formData.name || "Student",
        email: formData.email,
        password: formData.password,
        gender: formData.gender || "girl"
      });

      alert(res.data.message); // Registered successfully
      setIsLogin(true); // switch to login tab
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };



  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* --- Background Ambient Glow --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- Main Card --- */}
      <div className="w-full max-w-md bg-[var(--bg-secondary)] border border-white/5 rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-sm">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-white/10">
            {/* Placeholder for actual logo image */}
            <div className="w-12 h-12 rounded-full border-2 border-indigo-900 flex items-center justify-center">
              <span className="text-indigo-900 font-bold text-xs">MMMUT</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">MMMUT Hostel Mate</h1>
          <p className="text-[var(--text-secondary)] text-sm">AI-Powered Room Allocation System</p>
        </div>

        {/* Toggle Tabs */}
        <div className="bg-[var(--bg-primary)] p-1 rounded-xl flex mb-8 border border-white/5">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
              isLogin 
                ? 'bg-[var(--bg-secondary)] text-white shadow-sm border border-white/5' 
                : 'text-[var(--text-muted)] hover:text-white'
            }`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
              !isLogin 
                ? 'bg-[var(--bg-secondary)] text-white shadow-sm border border-white/5' 
                : 'text-[var(--text-muted)] hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-6">
          
          {/* Input 1: College ID */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wide">
              College ID / Enrollment No.
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--accent-primary)] transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="20210410XX"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[var(--bg-primary)] text-white text-sm rounded-xl pl-12 pr-4 py-3.5 border border-white/5 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all placeholder-[var(--text-muted)]"
              />
            </div>
            {/* Feature Note 1 */}
            <div className="flex items-center gap-2 mt-2 text-xs text-purple-400">
              <Sparkles size={12} />
              <span>Auto-detects hostel gender eligibility</span>
            </div>
          </div>

          {/* Input 2: Password */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wide">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--accent-primary)] transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-[var(--bg-primary)] text-white text-sm rounded-xl pl-12 pr-12 py-3.5 border border-white/5 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all placeholder-[var(--text-muted)]"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* System Note Box */}
          <div className="bg-[#1e2130]/50 border border-[var(--accent-primary)]/20 rounded-xl p-3 flex gap-3 items-center">
             <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] flex-shrink-0">
               <Building2 size={16} />
             </div>
             <p className="text-xs text-[var(--text-secondary)] leading-tight">
               System detects gender & allocates hostel automatically based on database records.
             </p>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-[var(--text-muted)] group-hover:border-white transition-colors relative flex items-center justify-center">
                 {/* Checkbox logic would go here */}
              </div>
              <span className="text-[var(--text-secondary)] group-hover:text-white transition-colors">Remember me</span>
            </label>
            <button className="text-[var(--accent-secondary)] hover:text-[var(--accent-primary)] transition-colors font-medium">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button 
            onClick={isLogin ? handleLogin : handleRegister}
            className="w-full bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25 active:scale-[0.99] transform duration-100"
          >
            Access Portal
          </button>

        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-[var(--text-muted)] mb-3">© 2025 MMMUT Gorakhpur. Restricted Access.</p>
          <div className="flex justify-center gap-4 text-xs text-[var(--text-secondary)]">
            <button className="hover:text-white transition-colors">Help Desk</button>
            <span>•</span>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
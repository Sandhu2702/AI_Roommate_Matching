import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Menu, 
  User, 
  Shield, 
  Eye, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const navItems = ['Dashboard', 'Find Roommates', 'Requests', 'Messages'];

  // State for toggles
  const [settings, setSettings] = useState({
    showProfile: true,
    onlineStatus: true,
    emailNotifs: true,
    matchAlerts: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNavigation = (item) => {
    const path = item.toLowerCase().replace(' ', '-');
    navigate(`/${path}`);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans flex flex-col">
      
      {/* --- Navbar --- */}
      <nav className="border-b border-white/5 bg-[var(--bg-primary)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <h1 className="text-xl font-bold tracking-tight text-white">
              MMMUT <span className="text-[var(--text-secondary)] font-normal">Roommate AI</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors relative"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[var(--text-secondary)] hover:text-white"><Bell size={20} /></button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px]">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-[var(--bg-primary)]" />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 flex items-center justify-center">
        
        <div className="w-full bg-[var(--bg-secondary)] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl min-h-[600px]">
          
          {/* --- Sidebar --- */}
          <aside className="w-full md:w-64 bg-[var(--bg-secondary)] border-r border-white/5 flex flex-col p-6">
            
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">General</h3>
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#1e2130] text-white text-sm font-medium rounded-lg border-l-4 border-[var(--accent-primary)]">
                  <User size={18} /> Account
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-tertiary)] text-sm font-medium rounded-lg transition-colors">
                  <Bell size={18} /> Notifications
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-tertiary)] text-sm font-medium rounded-lg transition-colors">
                  <Shield size={18} /> Privacy
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-tertiary)] text-sm font-medium rounded-lg transition-colors">
                  <Eye size={18} /> Visibility
                </button>
              </nav>
            </div>

            <div className="mb-auto">
              <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Support</h3>
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-tertiary)] text-sm font-medium rounded-lg transition-colors">
                  <HelpCircle size={18} /> Help & FAQ
                </button>
              </nav>
            </div>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 text-sm font-medium rounded-lg transition-colors mt-8">
              <LogOut size={18} /> Logout
            </button>
          </aside>

          {/* --- Settings Panel --- */}
          <div className="flex-1 p-8 md:p-12 bg-[#13151c]">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
              <p className="text-[var(--text-secondary)]">Manage your profile details and preferences</p>
            </div>

            {/* Section 1: Profile Visibility */}
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-6 pb-2 border-b border-white/5">Profile Visibility</h3>
              
              {/* Item 1 */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Show Profile to Matches</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Allow other students to see your profile in suggestions</p>
                </div>
                <button 
                  onClick={() => toggleSetting('showProfile')}
                  className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${settings.showProfile ? 'bg-[var(--accent-primary)]' : 'bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${settings.showProfile ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Online Status</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Show when you are active on the platform</p>
                </div>
                <button 
                  onClick={() => toggleSetting('onlineStatus')}
                  className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${settings.onlineStatus ? 'bg-[var(--accent-primary)]' : 'bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${settings.onlineStatus ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>

            {/* Section 2: Notifications */}
            <div>
              <h3 className="text-white font-semibold mb-6 pb-2 border-b border-white/5">Notification Preferences</h3>
              
              {/* Item 1 */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Email Notifications</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Receive weekly digest and major updates</p>
                </div>
                <button 
                  onClick={() => toggleSetting('emailNotifs')}
                  className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${settings.emailNotifs ? 'bg-[var(--accent-primary)]' : 'bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${settings.emailNotifs ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">New Match Alerts</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Get notified when a high-compatibility student joins</p>
                </div>
                <button 
                  onClick={() => toggleSetting('matchAlerts')}
                  className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${settings.matchAlerts ? 'bg-[var(--accent-primary)]' : 'bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${settings.matchAlerts ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
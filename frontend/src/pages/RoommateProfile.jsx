import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bell, 
  Menu, 
  Home, 
  BookOpen, 
  Sun, 
  VolumeX, 
  Sparkles, 
  Scale,
  Award,
  Gamepad2,
  Music
} from 'lucide-react';

const RoommateProfileDetail = () => {
  const navigate = useNavigate();
  const navItems = ['Dashboard', 'Find Roommates', 'Requests', 'Messages'];

  // Mock comparison data matching the screenshot
  const comparisons = [
    { 
      label: 'Wake Up', 
      icon: <Sun size={20} />, 
      you: 'Early Riser', 
      them: 'Early Riser', 
      match: true 
    },
    { 
      label: 'Study Noise', 
      icon: <BookOpen size={20} />, 
      you: 'Silent', 
      them: 'Silent', 
      match: true 
    },
    { 
      label: 'Cleanliness', 
      icon: <Sparkles size={20} />, 
      you: 'Very Clean', 
      them: 'Organized', 
      match: true // Close match
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
      
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
                onClick={() => navigate(item === 'Find Roommates' ? '/find-roommates' : '/')}
                className={`text-sm font-medium transition-colors ${item === 'Find Roommates' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-white'}`}
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

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/find-roommates')}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Matches</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
          
          {/* --- LEFT COLUMN: Profile Card --- */}
          <div className="bg-[var(--bg-secondary)] border border-white/5 rounded-3xl p-8 h-fit shadow-xl">
            
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 shadow-lg shadow-indigo-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop" 
                  alt="Aryan" 
                  className="w-full h-full rounded-full object-cover border-4 border-[var(--bg-secondary)]"
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">Aryan Verma</h1>
              <p className="text-[var(--text-secondary)]">CSE • 3rd Year • B.Tech</p>
            </div>

            {/* Hostel Info Box */}
            <div className="bg-[#1e2130] rounded-2xl p-4 mb-8 border border-white/5 flex items-center justify-center gap-3">
              <Home size={18} className="text-[var(--text-muted)]" />
              <span className="text-white font-medium">Tilak Hostel • Block B</span>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[var(--bg-primary)] rounded-xl p-4 text-center border border-white/5">
                <div className="text-2xl font-bold text-white mb-1">9.2</div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">CGPA</div>
              </div>
              <div className="bg-[var(--bg-primary)] rounded-xl p-4 text-center border border-white/5">
                <div className="text-2xl font-bold text-white mb-1">21</div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Age</div>
              </div>
            </div>

            {/* About Me */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">About Me</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                I'm a focused student who loves coding and early morning runs. I keep my room clean and prefer a quiet environment for studying.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Coding', 'Running', 'Chess', 'Reading'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] border border-white/5 text-xs text-[var(--text-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: Match Details --- */}
          <div className="space-y-6">
            
            {/* 1. Match Score Card */}
            <div className="bg-[var(--bg-secondary)] border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              {/* Circle Graph */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="#1e2130" strokeWidth="12" fill="none" />
                  <circle cx="64" cy="64" r="58" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="365" strokeDashoffset="14" strokeLinecap="round" />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">96%</span>
                </div>
              </div>

              {/* Text Info */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Excellent Match!</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  You and Aryan are highly compatible. You both share similar sleep schedules, cleanliness standards, and study habits. Living together should be smooth sailing.
                </p>
              </div>
            </div>

            {/* 2. Side-by-Side Comparison Table */}
            <div className="bg-[var(--bg-secondary)] border border-white/5 rounded-3xl p-8 shadow-xl">
              
              <div className="flex items-center gap-3 mb-8">
                <Scale className="text-[var(--accent-primary)]" size={24} />
                <h2 className="text-xl font-bold text-white">Side-by-Side Comparison</h2>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-3 mb-6 px-4">
                <div className="text-center text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">You</div>
                <div className="text-center text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Habit</div>
                <div className="text-center text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Aryan</div>
              </div>

              <div className="space-y-6">
                {comparisons.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-3 items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] rounded-xl transition-colors">
                    
                    {/* Column 1: You */}
                    <div className={`text-center font-medium ${item.match ? 'text-emerald-400' : 'text-white'}`}>
                      {item.you}
                    </div>
                    
                    {/* Column 2: Icon/Label */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border border-white/10 flex items-center justify-center text-[var(--accent-primary)] shadow-lg">
                        {item.icon}
                      </div>
                      <span className="text-[10px] text-[var(--text-muted)]">{item.label}</span>
                    </div>

                    {/* Column 3: Them */}
                    <div className={`text-center font-medium ${item.match ? 'text-emerald-400' : 'text-white'}`}>
                      {item.them}
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default RoommateProfileDetail;
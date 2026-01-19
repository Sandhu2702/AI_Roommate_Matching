import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GitPullRequest, 
  MessageSquare, 
  Settings, 
  User, 
  LogOut, 
  Search, 
  Bell, 
  ChevronDown,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
  Edit
} from 'lucide-react';

// --- Data Mockups (To simulate database data) ---
const stats = [
  { label: 'Total Matches', value: '128', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'New Suggestions', value: '12', icon: Sparkles, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Pending Requests', value: '4', icon: Clock, color: 'text-orange-400', bg: 'bg-orange-400/10' },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}


const activities = [
  { 
    id: 1, 
    user: 'Rohan Singh', 
    action: 'sent you a request', 
    time: '2 hours ago', 
    avatar: 'https://i.pravatar.cc/150?u=rohan',
    type: 'request'
  },
  { 
    id: 2, 
    user: 'You matched with', 
    target: 'Vikram Patel', 
    time: 'Yesterday', 
    type: 'match'
  },
  { 
    id: 3, 
    title: 'Profile verification completed', 
    time: '2 days ago', 
    type: 'system'
  },
];

const messages = [
  { id: 1, user: 'Aryan Gupta', msg: 'Hey, are you looking for a roommate...', time: '10:42 AM', avatar: 'https://i.pravatar.cc/150?u=aryan' },
  { id: 2, user: 'Kabir Sharma', msg: "Sure, let's meet at the canteen later.", time: 'Yesterday', avatar: 'https://i.pravatar.cc/150?u=kabir' },
  { id: 3, user: 'Dev Mishra', msg: 'I study CS too! Which year are you in?', time: 'Mon', avatar: 'https://i.pravatar.cc/150?u=dev' },
];

// --- Main Page Component ---
const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex h-screen w-full bg-background text-text-main overflow-hidden font-sans">
      
      {/* --- Sidebar --- */}
      <aside className="hidden md:flex flex-col w-64 h-full bg-sidebar border-r border-border p-4">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-bold tracking-tight text-white">MMMUT</h1>
          <p className="text-xs text-text-muted">Hostel Matching</p>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Dashboard" 
            isActive={activeTab === 'Dashboard'} 
            onClick={() => setActiveTab('Dashboard')}
          />
          <SidebarItem 
            icon={Users} 
            label="Find Roommates" 
            isActive={activeTab === 'Find Roommates'} 
            onClick={() => setActiveTab('Find Roommates')}
          />
          <SidebarItem 
            icon={GitPullRequest} 
            label="Requests & Matches" 
            isActive={activeTab === 'Requests'} 
            onClick={() => setActiveTab('Requests')}
          />
          <SidebarItem 
            icon={MessageSquare} 
            label="Chat" 
            badge={3}
            isActive={activeTab === 'Chat'} 
            onClick={() => setActiveTab('Chat')}
          />
        </nav>

        <div className="mt-auto space-y-2">
          <p className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Settings</p>
          <SidebarItem 
            icon={User} 
            label="My Profile" 
            isActive={activeTab === 'Profile'} 
            onClick={() => setActiveTab('Profile')}
          />
          <SidebarItem 
            icon={Settings} 
            label="Preferences" 
            isActive={activeTab === 'Preferences'} 
            onClick={() => setActiveTab('Preferences')}
          />
          <div className="pt-4 mt-4 border-t border-border">
            <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-xl transition-colors">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Header */}
        <header className="h-20 px-8 flex items-center justify-between border-b border-border/50 bg-background/50 backdrop-blur-sm z-10">
          {/* Search */}
          <div className="relative w-96 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search students, hostels..." 
              className="w-full bg-sidebar border border-border rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-text-muted/70"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-text-muted hover:text-white transition-colors bg-sidebar rounded-full border border-border">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-sidebar"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-border/50">
              <img 
                src="https://i.pravatar.cc/150?u=aditya" 
                alt="Aditya" 
                className="w-10 h-10 rounded-full border border-border object-cover"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium leading-none text-white">Aditya Kumar</p>
                <p className="text-xs text-text-muted mt-1">Ramanujan Hostel</p>
              </div>
              <ChevronDown className="text-text-muted cursor-pointer" size={16} />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          
          {/* Hero Section */}
          <div className="relative w-full rounded-3xl p-8 mb-8 overflow-hidden bg-gradient-to-br from-[#23243b] to-[#1a1b2e] border border-border shadow-xl">
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Welcome back, Aditya! 👋
                </h2>
                <p className="text-text-muted mb-8 text-lg">
                  You have 12 new potential roommate matches in Ramanujan Hostel.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                  Find My Hostel Roommate
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Profile Score Circle */}
              <div className="mt-8 md:mt-0 flex items-center gap-4 bg-sidebar/50 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-sidebar">
                  {/* CSS Variable controlled conic gradient for the ring */}
                  <div className="absolute inset-0 rounded-full progress-circle" style={{'--percentage': '85%', '--primary': '255 70% 65%'}}></div>
                  <div className="absolute inset-1 bg-sidebar rounded-full z-10"></div>
                  <span className="relative z-20 font-bold text-xl text-white">85%</span>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Profile Score</p>
                  <p className="text-xs text-green-400 mt-1">Excellent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-2xl flex items-center justify-between hover:border-border/80 transition-colors">
                <div>
                  <p className="text-text-muted text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={cn("p-3 rounded-xl", stat.bg)}>
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Grid: Activity & Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activity (Spans 2 columns) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                <button className="text-sm text-primary hover:underline">View all</button>
              </div>
              
              <div className="space-y-3">
                {activities.map((item) => (
                  <div key={item.id} className="bg-card hover:bg-card-hover border border-border rounded-2xl p-4 flex items-center gap-4 transition-colors cursor-pointer group">
                    {/* Icon/Avatar Logic */}
                    {item.type === 'request' ? (
                       <img src={item.avatar} alt="User" className="w-12 h-12 rounded-full object-cover" />
                    ) : item.type === 'match' ? (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Users size={20} />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 size={20} />
                      </div>
                    )}

                    <div className="flex-1">
                      {item.type === 'request' && (
                        <p className="text-white font-medium">{item.user} <span className="text-text-muted font-normal">{item.action}</span></p>
                      )}
                      {item.type === 'match' && (
                        <p className="text-white font-medium">{item.user} <span className="text-primary">{item.target}</span></p>
                      )}
                      {item.type === 'system' && (
                         <p className="text-white font-medium">{item.title}</p>
                      )}
                      <p className="text-xs text-text-muted mt-1">{item.time}</p>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} className="text-text-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages (Spans 1 column) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">Messages</h3>
                <button className="text-text-muted hover:text-white"><Edit size={18} /></button>
              </div>

              <div className="bg-card border border-border rounded-2xl p-2">
                {messages.map((msg, idx) => (
                  <div key={msg.id} className={cn(
                    "p-3 rounded-xl flex gap-3 cursor-pointer transition-colors hover:bg-white/5",
                    idx !== messages.length - 1 && "border-b border-border/50"
                  )}>
                    <img src={msg.avatar} alt={msg.user} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-0.5">
                        <p className="text-sm font-bold text-white truncate">{msg.user}</p>
                        <p className="text-[10px] text-text-muted">{msg.time}</p>
                      </div>
                      <p className="text-xs text-text-muted truncate">{msg.msg}</p>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-3 text-xs text-center text-primary font-medium hover:underline mt-2">
                  View all messages
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

// --- Internal Reusable Components ---

const SidebarItem = ({ icon: Icon, label, isActive, onClick, badge }) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group relative",
        isActive 
          ? "bg-gradient-to-r from-primary/20 to-transparent text-primary border-l-4 border-primary" 
          : "text-text-muted hover:text-white hover:bg-white/5"
      )}
    >
      <Icon size={20} className={cn(isActive && "text-primary")} />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-primary/40">
          {badge}
        </span>
      )}
    </button>
  );
};

export default StudentDashboard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Phone, 
  Video, 
  Info, 
  Paperclip, 
  Smile, 
  Send, 
  MoreVertical,
  Bell,
  Menu,
  Check,
  CheckCheck
} from 'lucide-react';

// --- Mock Data: Contacts List ---
const CONTACTS = [
  {
    id: 1,
    name: "Arjun Verma",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Sure, let's meet at 5!",
    time: "10:42 AM",
    unread: 0,
    online: true,
  },
  {
    id: 2,
    name: "Vikram Singh",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Sounds good, thanks.",
    time: "Yesterday",
    unread: 2,
    online: false,
  },
  {
    id: 3,
    name: "Dev Patel",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Did you submit the form?",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "Rohan Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    lastMessage: "Sent you the file.",
    time: "Mon",
    unread: 0,
    online: false,
  }
];

// --- Mock Data: Active Conversation ---
const CHAT_HISTORY = [
  { id: 1, sender: 'them', text: "Hi! I saw your profile on the matching system. We have a 92% match score!", time: "10:30 AM", date: "Yesterday" },
  { id: 2, sender: 'them', text: "I'm also in CSE 3rd year. Looking for someone who is quiet during exam weeks.", time: "10:31 AM", date: "Yesterday" },
  { id: 3, sender: 'me', text: "Hey Arjun! That's awesome. Yeah, I prefer a quiet environment too.", time: "10:35 AM", date: "Today" },
  { id: 4, sender: 'me', text: "Are you planning to take a room in Tagore hostel?", time: "10:36 AM", date: "Today" },
];

const Messages = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState(1); // Default to Arjun (ID 1)
  const [messageInput, setMessageInput] = useState("");

  const activeContact = CONTACTS.find(c => c.id === activeChat);

  // Navbar helper (Integrated to keep file single-source)
  const navItems = ['Dashboard', 'Find Roommates', 'Requests', 'Messages'];
  
  return (
    <div className="h-screen bg-[var(--bg-primary)] font-sans flex flex-col overflow-hidden">
      
      {/* --- Header / Navbar --- */}
      <nav className="border-b border-white/5 bg-[var(--bg-primary)] shrink-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <h1 className="text-xl font-bold tracking-tight text-white">
              MMMUT <span className="text-[var(--text-secondary)] font-normal">Roommate AI</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}
                className={`text-sm font-medium transition-colors relative ${
                  item === 'Messages' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {item}
                {item === 'Messages' && <span className="absolute -bottom-[22px] left-0 w-full h-[2px] bg-[var(--accent-primary)] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>}
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

      {/* --- Main Chat Layout --- */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full overflow-hidden pt-4 pb-4 px-4 md:px-6 gap-4">
        
        {/* --- LEFT SIDEBAR: Contacts --- */}
        <div className="w-full md:w-[320px] lg:w-[380px] bg-[var(--bg-secondary)] rounded-2xl border border-white/5 flex flex-col overflow-hidden">
          
          {/* Search Bar */}
          <div className="p-4 border-b border-white/5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-[var(--bg-primary)] border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]/50 transition-all"
              />
            </div>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {CONTACTS.map((contact) => (
              <div 
                key={contact.id}
                onClick={() => setActiveChat(contact.id)}
                className={`p-4 flex gap-4 cursor-pointer transition-colors border-b border-white/5 hover:bg-white/5 ${
                  activeChat === contact.id ? 'bg-[#262a3d] border-l-4 border-l-[var(--accent-primary)]' : 'border-l-4 border-l-transparent'
                }`}
              >
                <div className="relative shrink-0">
                  <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[var(--bg-secondary)] rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className={`text-sm font-semibold truncate ${activeChat === contact.id ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                      {contact.name}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)]">{contact.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-[var(--text-muted)] truncate max-w-[180px]">
                      {contact.lastMessage}
                    </p>
                    {contact.unread > 0 && (
                      <span className="w-5 h-5 flex items-center justify-center bg-[var(--accent-primary)] text-white text-[10px] font-bold rounded-full">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: Chat Window --- */}
        <div className="hidden md:flex flex-1 bg-[var(--bg-primary)] rounded-2xl border border-white/5 flex-col overflow-hidden relative">
          
          {/* Chat Header */}
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[var(--bg-secondary)]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={activeContact.avatar} alt="Active" className="w-10 h-10 rounded-full object-cover" />
                {activeContact.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[var(--bg-secondary)] rounded-full"></span>}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{activeContact.name}</h3>
                <p className="text-xs text-emerald-400">{activeContact.online ? 'Online' : 'Offline'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <button className="hover:text-white"><Phone size={20} /></button>
              <button className="hover:text-white"><Video size={20} /></button>
              <button className="hover:text-white"><Info size={20} /></button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[var(--bg-primary)]">
            
            {/* Date Separator: Yesterday */}
            <div className="flex justify-center">
              <span className="bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-xs px-3 py-1 rounded-full">Yesterday</span>
            </div>

            {CHAT_HISTORY.filter(m => m.date === 'Yesterday').map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'me' 
                    ? 'bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-white rounded-br-none' 
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-bl-none border border-white/5'
                }`}>
                  <p>{msg.text}</p>
                  <div className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Date Separator: Today */}
            <div className="flex justify-center">
              <span className="bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-xs px-3 py-1 rounded-full">Today</span>
            </div>

            {CHAT_HISTORY.filter(m => m.date === 'Today').map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'me' 
                    ? 'bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-white rounded-br-none' 
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-bl-none border border-white/5'
                }`}>
                  <p>{msg.text}</p>
                  <div className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[var(--bg-secondary)] border-t border-white/5">
            <div className="flex items-center gap-3 bg-[var(--bg-primary)] rounded-full px-4 py-2 border border-white/5">
              <button className="text-[var(--text-muted)] hover:text-white transition-colors">
                <Paperclip size={20} />
              </button>
              <input 
                type="text" 
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..." 
                className="flex-1 bg-transparent text-sm text-white placeholder-[var(--text-muted)] focus:outline-none py-2"
              />
              <button className="text-[var(--text-muted)] hover:text-white transition-colors">
                <Smile size={20} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-[var(--accent-primary)] rounded-full text-white hover:opacity-90 transition-opacity">
                <Send size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Messages;
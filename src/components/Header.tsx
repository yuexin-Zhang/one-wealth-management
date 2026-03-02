import { Phone, Mail, MessageCircle, Video, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        {/* HSBC Logo */}
        <img 
          src="/hsbc_icon.jpg" 
          alt="HSBC" 
          className="w-10 h-10 object-contain"
        />
        <span className="text-xl text-gray-800">One Wealth</span>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <Phone size={18} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <Mail size={18} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <MessageCircle size={18} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <Video size={18} />
        </button>
        <div className="ml-2 w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="User Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}

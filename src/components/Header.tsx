import { Phone, Mail, MessageCircle, Video, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        {/* HSBC Logo */}
        <img 
          src="./hsbc_icon.jpg" 
          alt="HSBC" 
          className="w-10 h-10 object-contain"
        />
        <span className="text-lg md:text-2xl xl:text-3xl text-gray-800">One Wealth</span>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <Phone size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <Mail size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <MessageCircle size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <Video size={16} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
        <button className="ml-2 w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full border border-gray-300 hover:bg-gray-300 transition-colors">
          <User size={18} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </header>
  );
}

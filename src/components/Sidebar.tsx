import { BarChart2, Users, LineChart, Target, Calendar, LogOut } from 'lucide-react';

const navItems = [
  { id: 'scorecard', icon: BarChart2, label: 'Scorecard & Sales Planning' },
  { id: 'portfolio', icon: Users, label: 'Portfolio Management' },
  { id: 'discovery', icon: LineChart, label: 'Portfolio Discovery' },
  { id: 'sales', icon: Target, label: 'Sales Opportunities & Pipeline' },
  { id: 'appointments', icon: Calendar, label: 'All appointments', active: true },
];

export default function Sidebar() {
  return (
    <aside className="w-20 md:w-24 lg:w-28 bg-gray-50 border-r border-gray-200 flex flex-col h-[calc(100vh-64px)] sticky top-16">
      <div className="flex-1 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex flex-col items-center py-4 px-2 text-center transition-all relative ${
              item.active 
                ? 'bg-white text-hsbc-red' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {item.active && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-hsbc-red" />
            )}
            <item.icon size={24} className="mb-2 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            <span className="text-[10px] md:text-xs lg:text-sm leading-tight">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      
      <div className="pb-5">
        <button className="w-full flex flex-col items-center py-4 text-gray-400 hover:text-gray-600 transition-colors">
          <LogOut size={20} className="mb-1 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span className="text-[10px] md:text-xs lg:text-sm">Off</span>
        </button>
      </div>
    </aside>
  );
}

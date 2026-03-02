import { BarChart2, Users, LineChart, Target, Calendar, Power } from 'lucide-react';

const navItems = [
  { id: 'scorecard', icon: BarChart2, label: 'Scorecard & Sales Planning' },
  { id: 'portfolio', icon: Users, label: 'Portfolio Management' },
  { id: 'discovery', icon: LineChart, label: 'Portfolio Discovery' },
  { id: 'sales', icon: Target, label: 'Sales Opportunities & Pipeline' },
  { id: 'appointments', icon: Calendar, label: 'All appointments', active: true },
];

export default function Sidebar() {
  return (
    <aside className="w-24 bg-gray-50 border-r border-gray-200 flex flex-col h-[calc(100vh-64px)] sticky top-16">
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
            <item.icon size={24} className="mb-2" />
            <span className="text-[10px] leading-tight">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      
      <div className="pb-8">
        <button className="w-full flex flex-col items-center py-4 text-gray-400 hover:text-gray-600 transition-colors">
          <Power size={20} className="mb-1" />
          <span className="text-[10px]">Off</span>
        </button>
      </div>
    </aside>
  );
}

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MeetingCalendar from './components/MeetingCalendar';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans overflow-hidden">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 p-4 min-h-0">
          <div className="h-full w-full">
            <div className="bg-white border border-gray-200 h-full shadow p-4 overflow-hidden">
              <MeetingCalendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  subDays,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isPast,
  startOfDay,
} from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, MapPin, User, FileText, MessageSquare, ChevronDown, ChevronUp, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'client' | 'ai';
  content: string;
  timestamp?: string;
}

interface Meeting {
  id: string;
  date: Date;
  time: string;
  relationshipManager: string;
  location: string;
  topic: string;
  clientName: string;
  confirmed: boolean;
  chatHistory: ChatMessage[];
}

// Helper function to get next Monday and Friday
const getNextDayOfWeek = (date: Date, dayOfWeek: number) => {
  const daysUntil = (dayOfWeek - date.getDay() + 7) % 7 || 7;
  return addDays(date, daysUntil);
};

const getMeetings = (): Meeting[] => {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const nextMonday = getNextDayOfWeek(today, 1);
  const nextFriday = getNextDayOfWeek(today, 5);
  const yesterday = subDays(today, 1);

  return [
    {
      id: '0',
      date: yesterday,
      time: '14:30',
      relationshipManager: 'Manager Li',
      location: 'HSBC Shanghai Lujiazui Branch - Room 1502',
      topic: 'Account Opening Follow-up',
      clientName: 'Wei Zhang',
      confirmed: true,
      chatHistory: [
        {
          id: 'c1',
          role: 'client',
          content: 'I would like to check the status of my account opening.',
          timestamp: format(yesterday, 'yyyy-MM-dd') + ' 10:00',
        },
        {
          id: 'a1',
          role: 'ai',
          content: 'Hello Wei Zhang, I can see that your account opening application has been processed successfully. Your new account is now active and ready for use. You can start making deposits and investments. Is there anything specific you would like to know about your new account?',
          timestamp: format(yesterday, 'yyyy-MM-dd') + ' 10:01',
        },
        {
          id: 'c2',
          role: 'client',
          content: 'What documents do I need to bring for the follow-up meeting?',
          timestamp: format(yesterday, 'yyyy-MM-dd') + ' 10:05',
        },
        {
          id: 'a2',
          role: 'ai',
          content: 'For the account opening follow-up meeting, please bring the following documents:\n\n1. Valid passport or ID card\n2. Proof of address (utility bill or bank statement within last 3 months)\n3. Initial deposit if you plan to fund the account\n\nYour appointment with Manager Li is scheduled for yesterday at 2:30 PM at HSBC Shanghai Lujiazui Branch, Room 1502.',
          timestamp: format(yesterday, 'yyyy-MM-dd') + ' 10:02',
        },
      ],
    },
    {
      id: '1',
      date: tomorrow,
      time: '10:00',
      relationshipManager: 'Manager Li',
      location: 'HSBC Shanghai Lujiazui Branch - Room 1502',
      topic: 'General Investment Consultation',
      clientName: 'Wei Zhang',
      confirmed: true,
      chatHistory: [
      {
        id: 'c1',
        role: 'client',
        content: 'What is the current market outlook?',
        timestamp: '2026-03-01 09:30',
      },
      {
        id: 'a1',
        role: 'ai',
        content: `Certainly, Wei Zhang. Let me analyze this for you.

Thank you for asking about the market outlook. Let me share our latest perspective with you.

We're currently seeing moderate but stable growth prospects for the global economy. Here are the key highlights:

1. Overall Market Environment:
- The global economy is showing encouraging signs, with expectations of moderate growth in 2026
- Inflation pressures are gradually easing, which is positive for market stability
- China's market specifically maintains a stable growth momentum, supported by policy measures

2. Key Investment Opportunities:
- Technology sector is showing particularly promising opportunities
- Chinese A-shares and Hong Kong stocks are looking attractive
- The bond market is becoming more favorable as we're entering a rate downward cycle

3. Risk Factors to Watch:
- Geopolitical tensions
- Potential inflation resurgence
- Real estate market adjustments

Given this environment, our investment strategy team recommends:
- Considering an increased exposure to technology and consumer sectors
- Taking advantage of the favorable bond market conditions
- Maintaining some gold exposure as a safety hedge

Remember, while short-term market movements can be unpredictable, it's important to stay focused on your long-term investment goals. Your current portfolio is well-diversified across different asset classes, which positions you well to navigate through various market conditions.

Would you like to discuss how these market conditions specifically relate to your investment goals?`,
        timestamp: '2026-03-01 09:31',
      },
      {
        id: 'c2',
        role: 'client',
        content: 'I have $500,000 to invest. What do you recommend?',
        timestamp: '2026-03-01 09:35',
      },
      {
        id: 'a2',
        role: 'ai',
        content: `Certainly, Wei Zhang. Let me analyze this for you.

Thank you for trusting me with your investment decision. That's a significant sum of CNY 500,000, and I understand you're looking for guidance on how to best deploy it.

Based on your current portfolio of CNY 4.5 million, this new investment would represent about an 11% increase. Let me share some thoughtful recommendations:

1. Investment Approach:
Rather than investing the full amount at once, I recommend a balanced approach:
- Invest 40% (CNY 200,000) immediately into core positions aligned with your current portfolio
- Spread the remaining 60% over the next 3-4 months through systematic investments

This strategy helps manage market timing risk while maintaining exposure to current opportunities.

2. Suggested Allocation (aligned with your current portfolio structure):
- 40% Equities (CNY 200,000): Focus on China Growth and Asia Pacific funds, particularly in technology sectors which our CIO currently views favorably
- 30% Fixed Income (CNY 150,000): Consider adding to RMB bonds, as we're seeing favorable conditions with peaking interest rates
- 20% Cash & Equivalents (CNY 100,000): For flexibility and future opportunities
- 10% Alternatives (CNY 50,000): Consider gold allocation as a hedge against current geopolitical risks

3. Market Context:
Our outlook indicates moderate global growth ahead, with China maintaining stable momentum. The current environment appears particularly favorable for both equities (especially in technology) and bonds.

Would you like to discuss any specific aspect of this recommendation in more detail? I'm here to help you make an informed decision that aligns with your long-term financial goals.`,
        timestamp: '2026-03-01 09:36',
      },
      {
        id: 'c3',
        role: 'client',
        content: "Yes, I'm interested in diversifying.",
        timestamp: '2026-03-01 09:40',
      },
      {
        id: 'a3',
        role: 'ai',
        content: `I'm glad to hear you're interested in diversification - that's a smart approach to managing your wealth! Looking at your current portfolio of CNY 4.5 million, I notice you already have a good foundation with investments spread across different asset classes. Let me suggest some opportunities to enhance your diversification further:

1. Equity Allocation (currently 40%):
   - Consider increasing exposure to Hong Kong stocks and A-shares
   - The technology and consumer sectors look particularly promising right now

2. Fixed Income (currently 30%):
   - With interest rates expected to peak, this is actually a favorable time for bonds
   - You might consider extending your bond duration to take advantage of this trend

3. Alternative Investments (currently 10%):
   - Your current gold position through the HSBC Gold ETF provides good hedge protection
   - Consider maintaining this allocation as a safety net

Looking at the market outlook, we're seeing moderate global growth expectations for 2026, with China maintaining stable growth momentum. This environment presents some interesting diversification opportunities.

One specific suggestion: You might want to look at increasing your technology sector exposure beyond your current HSBC Global Technology Fund position (which is performing well at 15% YTD), given this is one of our key investment themes.

Would you like to explore any of these areas in more detail? I'd be happy to provide specific investment options aligned with your goals.`,
        timestamp: '2026-03-01 09:41',
      },
      {
        id: 'c4',
        role: 'client',
        content: 'OK, I am interested in investment allocation, please contact my RM.',
        timestamp: '2026-03-01 09:45',
      },
      {
        id: 'a4',
        role: 'ai',
        content: `I understand you'd like to speak with your Relationship Manager about general investment consultation.

I'd be happy to arrange a meeting with Manager Li.

Here are some available times this week:
📅 Tuesday, March 03
   1. 10:00 AM
   2. 02:00 PM
   3. 04:00 PM

📅 Wednesday, March 04
   4. 10:00 AM
   5. 02:00 PM
   6. 04:00 PM

📅 Thursday, March 05
   7. 10:00 AM
   8. 02:00 PM
   9. 04:00 PM

📅 Friday, March 06
   10. 10:00 AM

📍 Location: HSBC Shanghai Lujiazui Branch - Room 1502

Which time works best for you? (Or feel free to ask me anything else first)`,
        timestamp: '2026-03-01 09:46',
      },
    ],
  },
  {
    id: '2',
    date: nextMonday,
    time: '14:00',
    relationshipManager: 'Manager Wang',
    location: 'HSBC Shanghai Lujiazui Branch - Room 1502',
    topic: 'Portfolio Review',
    clientName: 'Sarah Chen',
    confirmed: true,
    chatHistory: [
      {
        id: 'c1',
        role: 'client',
        content: 'I would like to review my portfolio performance.',
        timestamp: format(nextMonday, 'yyyy-MM-dd') + ' 11:20',
      },
      {
        id: 'a1',
        role: 'ai',
        content: `Of course, Sarah. I'd be happy to help you review your portfolio performance.

Based on your latest statement, your portfolio has shown solid performance with a 12% return year-to-date. Here's a quick summary:

1. Equity Holdings (45% of portfolio):
- China Growth Fund: +18% YTD
- Asia Pacific ETF: +14% YTD
- HSBC Global Tech Fund: +22% YTD

2. Fixed Income (30% of portfolio):
- RMB Bond Fund: +5% YTD
- Stable performance in the current rate environment

3. Alternative Investments (15% of portfolio):
- Gold ETF: +8% YTD, providing good hedge value

4. Cash & Equivalents (10% of portfolio):
- Maintained for liquidity

Your portfolio remains well-diversified across asset classes. Would you like to schedule a detailed review with your RM to discuss any rebalancing opportunities?`,
        timestamp: format(nextMonday, 'yyyy-MM-dd') + ' 11:22',
      },
    ],
  },
  {
    id: '3',
    date: nextFriday,
    time: '09:30',
    relationshipManager: 'Manager Chen',
    location: 'HSBC Shanghai Lujiazui Branch - Room 1502',
    topic: 'Retirement Planning',
    clientName: 'Michael Zhang',
    confirmed: true,
    chatHistory: [
      {
        id: 'c1',
        role: 'client',
        content: 'I want to discuss my retirement planning options.',
        timestamp: format(nextFriday, 'yyyy-MM-dd') + ' 15:00',
      },
      {
        id: 'a1',
        role: 'ai',
        content: `Absolutely, Michael. Retirement planning is one of the most important aspects of wealth management. I'd be glad to help.

To provide you with the most relevant advice, may I ask a few questions?

1. What is your target retirement age?
2. What kind of lifestyle do you envision during retirement?
3. Do you have any existing retirement accounts or pension plans?

In the meantime, here are some general retirement planning principles we typically recommend:

- Start early to benefit from compound growth
- Diversify across asset classes based on your risk tolerance and time horizon
- Consider tax-efficient investment vehicles
- Regularly review and adjust your plan as circumstances change

Based on your current portfolio value of CNY 3.2 million, you're in a good position to build a solid retirement foundation. Would you like to schedule a comprehensive retirement planning session with your RM?`,
        timestamp: format(nextFriday, 'yyyy-MM-dd') + ' 15:02',
      },
    ],
  },
  ];
};

export default function MeetingCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [expandedChatMessages, setExpandedChatMessages] = useState<Set<string>>(new Set());
  const modalRef = React.useRef<HTMLDivElement>(null);

  // Adjust modal position when chat history is toggled
  React.useEffect(() => {
    if (selectedMeeting && modalRef.current) {
      const modal = modalRef.current;
      const modalRect = modal.getBoundingClientRect();
      
      // If modal extends beyond bottom of screen, adjust its position
      if (modalRect.bottom > window.innerHeight) {
        const overflow = modalRect.bottom - window.innerHeight;
        const newTop = Math.max(10, tooltipPosition.y - overflow - 20);
        setTooltipPosition(prev => ({ ...prev, y: newTop }));
      }
    }
  }, [showChatHistory, expandedChatMessages, selectedMeeting]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const days: Date[] = [];
  let day = calendarStart;
  while (day <= calendarEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  const numRows = Math.ceil(days.length / 7);

  const meetings = getMeetings();

  const getMeetingsForDate = (date: Date) => {
    return meetings.filter((meeting) => isSameDay(meeting.date, date));
  };

  const handleMeetingClick = (meeting: Meeting, event: React.MouseEvent) => {
    const buttonRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const modalWidth = 480;
    const gap = 8;
    
    // Check if there's enough space on the right
    const spaceOnRight = window.innerWidth - buttonRect.right - gap;
    let left: number;
    
    if (spaceOnRight >= modalWidth) {
      // Position to the right of the event button
      left = buttonRect.right + gap;
    } else {
      // Position to the left of the event button
      left = buttonRect.left - modalWidth - gap;
    }
    
    // Align top of modal with top of event button
    const top = buttonRect.top;
    
    setTooltipPosition({ x: left, y: top });
    setSelectedMeeting(meeting);
    setShowChatHistory(false);
  };

  const toggleChatMessage = (id: string) => {
    const newExpanded = new Set(expandedChatMessages);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedChatMessages(newExpanded);
  };

  const formatChatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (/^\d+\./.test(line)) {
        return (
          <p key={index} className="font-medium text-gray-800 mt-3 mb-1">
            {line}
          </p>
        );
      }
      if (line.trim().startsWith('-')) {
        return (
          <p key={index} className="ml-4 text-gray-600 mb-1">
            • {line.trim().substring(1).trim()}
          </p>
        );
      }
      if (line.trim().startsWith('•')) {
        return (
          <p key={index} className="ml-8 text-gray-600 mb-1">
            ◦ {line.trim().substring(1).trim()}
          </p>
        );
      }
      if (line.trim() === '') {
        return <div key={index} className="h-2" />;
      }
      return (
        <p key={index} className="text-gray-600 mb-2">
          {line}
        </p>
      );
    });
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 className="text-lg lg:text-xl text-gray-800">My Appointments</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <span className="text-base lg:text-xl text-gray-800 min-w-[140px] text-center">
            {format(currentMonth, 'MMMM yyyy')}
          </span>
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Week day headers */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 shrink-0">
          {weekDays.map((weekDay) => (
            <div
              key={weekDay}
              className="bg-gray-50 py-3 text-center text-xs md:text-sm lg:text-base text-gray-600"
            >
              {weekDay}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div
          className="flex-1 grid grid-cols-7 gap-px bg-gray-200 border-x border-b border-gray-200 overflow-hidden"
          style={{ gridTemplateRows: `repeat(${numRows}, 1fr)` }}
        >
          {days.map((date, index) => {
            const dayMeetings = getMeetingsForDate(date);
            const isCurrentMonth = isSameMonth(date, currentMonth);
            const isToday = isSameDay(date, new Date());

            return (
              <div
                key={index}
                className={`p-2 h-full ${
                  isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div
                  className={`text-xs md:text-sm lg:text-base mb-1 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center ${
                    isToday
                      ? 'bg-hsbc-red text-white'
                      : 'text-gray-700'
                  }`}
                >
                  {format(date, 'd')}
                </div>
                <div className="space-y-1">
                  {dayMeetings.map((meeting) => {
                    const isPastEvent = isPast(startOfDay(meeting.date));
                    return (
                      <button
                        key={meeting.id}
                        onClick={(e) => handleMeetingClick(meeting, e)}
                        className={`w-full text-left px-2 py-1 text-[10px] md:text-xs lg:text-sm truncate cursor-pointer transition-colors ${
                          isPastEvent
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                            : 'bg-hsbc-red/10 text-hsbc-red hover:bg-hsbc-red hover:text-white'
                        }`}
                      >
                        {meeting.time} {meeting.topic}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meeting Detail Modal */}
      {selectedMeeting && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setSelectedMeeting(null)}
          />
          <div
            ref={modalRef}
            className="fixed z-50 bg-white shadow-lg border border-gray-200 w-[480px] max-h-[calc(100vh-40px)] overflow-hidden flex flex-col"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            {/* Meeting Info Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50 shrink-0">
              <div className="space-y-2 text-xs md:text-sm">
                {/* Topic - First */}
                <div className="flex items-start gap-2">
                  <FileText size={16} className="text-hsbc-red mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-500 text-[10px] md:text-xs">Topic</p>
                    <p className="text-gray-800 font-medium">{selectedMeeting.topic}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-500 text-[10px] md:text-xs">Date & Time</p>
                    <p className="text-gray-700">{format(selectedMeeting.date, 'MMMM dd, yyyy')} at {selectedMeeting.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <User size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-500 text-[10px] md:text-xs">Client Name</p>
                    <p className="text-gray-700">{selectedMeeting.clientName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-500 text-[10px] md:text-xs">Location</p>
                    <p className="text-gray-700">{selectedMeeting.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat History Section */}
            <div className="flex-1 overflow-hidden flex flex-col">
              <button
                onClick={() => setShowChatHistory(!showChatHistory)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 border-b border-gray-200 transition-colors shrink-0"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-hsbc-red" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">AI Chat History</span>
                  <span className="text-[10px] md:text-xs text-gray-400">
                    ({selectedMeeting.chatHistory.filter(m => m.role === 'client').length} messages)
                  </span>
                </div>
                {showChatHistory ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>

              {showChatHistory && (
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {selectedMeeting.chatHistory.map((message) => (
                    <div key={message.id} className="flex gap-3">
                      {/* Avatar */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                          message.role === 'client'
                            ? 'bg-gray-200 text-gray-600'
                            : 'bg-hsbc-red/10 text-hsbc-red'
                        }`}
                      >
                        {message.role === 'client' ? (
                          <User size={14} />
                        ) : (
                          <Bot size={14} />
                        )}
                      </div>

                      {/* Message Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] md:text-xs lg:text-sm font-medium text-gray-700">
                            {message.role === 'client' ? selectedMeeting.clientName : 'AI Advisor'}
                          </span>
                          {message.timestamp && (
                            <span className="text-[10px] md:text-xs lg:text-sm text-gray-400">{message.timestamp}</span>
                          )}
                        </div>

                        <div
                          className={`p-2.5 text-[10px] md:text-xs lg:text-sm ${
                            message.role === 'client'
                              ? 'bg-white border border-gray-200'
                              : 'bg-white border border-gray-200'
                          }`}
                        >
                          {message.role === 'ai' && message.content.length > 200 ? (
                            <>
                              <div
                                className={
                                  expandedChatMessages.has(message.id)
                                    ? ''
                                    : 'line-clamp-3'
                                }
                              >
                                {formatChatContent(message.content)}
                              </div>
                              <button
                                onClick={() => toggleChatMessage(message.id)}
                                className="mt-2 text-hsbc-red text-[10px] md:text-xs hover:underline"
                              >
                                {expandedChatMessages.has(message.id) ? 'Show less' : 'Show more'}
                              </button>
                            </>
                          ) : (
                            formatChatContent(message.content)
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

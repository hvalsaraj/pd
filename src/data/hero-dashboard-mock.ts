export interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
  dot?: boolean;
  sub?: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  phone?: string;
  lastMessage: string;
  unread?: boolean;
  info?: boolean;
}

export interface ChatMessage {
  id: string;
  direction: "in" | "out";
  text: string;
  time: string;
  dateLabel?: string;
}

export const navItems: NavItem[] = [
  { label: "Appointments by Date", icon: "calendar" },
  { label: "Message Center", icon: "message-circle", active: true, badge: "2" },
  { label: "Paperless Forms", icon: "file-text" },
  { label: "Appointment Requests", icon: "clipboard-list", dot: true },
  { label: "Payments", icon: "credit-card" },
  { label: "Online Reviews", icon: "star" },
  { label: "Mass Texting, Emails", icon: "messages-square", sub: true },
];

export const navFooterItems: NavItem[] = [
  { label: "Preferences", icon: "settings" },
  { label: "Office Information", icon: "building" },
  { label: "Help", icon: "help-circle" },
];

export const conversations: Conversation[] = [
  {
    id: "1",
    name: "James Anderson",
    phone: "(949) 484-6418",
    lastMessage: "Well, I should get back to my work. It was good talk...",
    unread: false,
    info: true,
  },
  {
    id: "2",
    name: "David Wilson",
    lastMessage: "Thanks for the reminder!",
    unread: true,
  },
  {
    id: "3",
    name: "Michael Brown",
    lastMessage: "Can I reschedule for next week?",
  },
  {
    id: "4",
    name: "Sarah Johnson",
    lastMessage: "I'll be there at 3 PM.",
  },
  {
    id: "5",
    name: "Laura Garcia",
    lastMessage: "Perfect, see you then.",
    unread: true,
  },
  {
    id: "6",
    name: "(949) 484-6418",
    lastMessage: "Hi, is this the dental office?",
  },
];

export const chatMessages: ChatMessage[] = [
  { id: "d1", direction: "out", text: "", time: "", dateLabel: "Friday, August 15, 2025" },
  {
    id: "m1",
    direction: "out",
    text: "Hi James, your dental appt is on Aug 20, 2025 at 10:00 AM. Reply YES to confirm.",
    time: "12:11 PM",
  },
  { id: "m2", direction: "in", text: "YES", time: "03:00 PM" },
  { id: "d2", direction: "out", text: "", time: "", dateLabel: "Tuesday, August 19, 2025" },
  {
    id: "m3",
    direction: "out",
    text: "Reminder: Your appointment is tomorrow at 10:00 AM. Reply YES to confirm.",
    time: "09:00 AM",
  },
  { id: "m4", direction: "in", text: "YES", time: "09:30 AM" },
  { id: "d3", direction: "out", text: "", time: "", dateLabel: "Today" },
];

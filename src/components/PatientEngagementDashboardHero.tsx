"use client";

import {
  Calendar,
  MessageCircle,
  FileText,
  ClipboardList,
  CreditCard,
  Star,
  MessagesSquare,
  Settings,
  Building,
  HelpCircle,
  Search,
  Bell,
  ChevronDown,
  Paperclip,
  Smile,
  Send,
  Check,
  Info,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  navItems,
  navFooterItems,
  conversations,
  chatMessages,
} from "@/data/hero-dashboard-mock";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  "message-circle": MessageCircle,
  "file-text": FileText,
  "clipboard-list": ClipboardList,
  "credit-card": CreditCard,
  star: Star,
  "messages-square": MessagesSquare,
  settings: Settings,
  building: Building,
  "help-circle": HelpCircle,
};

function NavIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? User;
  return <Icon className="h-4 w-4 shrink-0" />;
}

export default function PatientEngagementDashboardHero() {
  return (
    <div
      className="flex h-[540px] w-[960px] flex-col overflow-hidden rounded-xl border border-border bg-background text-border"
      aria-hidden
    >
      {/* Top bar */}
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4 text-border">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-6 w-6 items-center justify-center rounded border border-border bg-transparent">
            <span className="text-[10px] font-bold text-border">P</span>
          </div>
          <span className="text-sm tracking-wide text-border">PRACTICE DILLY</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded border border-transparent p-1.5 text-border hover:border-border"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <span className="text-sm text-border">Smile Dentistry</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-transparent py-1 pr-1 hover:border-border"
              >
                <Avatar className="h-7 w-7 border border-border bg-transparent">
                  <AvatarFallback className="text-xs text-border">M</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-3.5 w-3.5 text-border" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Left sidebar */}
        <aside className="flex w-52 shrink-0 flex-col border-r border-border">
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-border" />
              <Input
                placeholder="Search Patient"
                className="h-8 border border-border bg-transparent pl-8 text-xs placeholder:text-border"
                readOnly
              />
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 px-2 pb-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-md border px-2 py-1.5 text-xs",
                  item.active
                    ? "border-border text-border font-medium"
                    : "border-transparent text-border hover:border-border hover:text-border"
                )}
              >
                <NavIcon name={item.icon} />
                <span className="min-w-0 flex-1 truncate">{item.label}</span>
                {item.badge && (
                  <Badge variant="outline" className="h-4 min-w-4 border border-border bg-transparent px-1 text-[10px] font-medium text-border">
                    {item.badge}
                  </Badge>
                )}
                {item.dot && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-border bg-transparent" />
                )}
                {item.sub && <ChevronDown className="h-3 w-3 shrink-0" />}
              </div>
            ))}
          </nav>
          <Separator />
          <nav className="flex flex-col gap-0.5 px-2 py-2">
            {navFooterItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-md border border-transparent px-2 py-1.5 text-xs text-border hover:border-border hover:text-border"
              >
                <NavIcon name={item.icon} />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Middle: conversation list */}
        <section className="flex w-72 shrink-0 flex-col border-r border-border">
          <div className="border-b border-border px-3 py-2.5">
            <h2 className="text-sm font-semibold text-border">Message Center</h2>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-border" />
              <Input
                placeholder="Search Patient"
                className="h-8 border border-border bg-transparent pl-8 text-xs placeholder:text-border"
                readOnly
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {conversations.map((conv, i) => (
                <div
                  key={conv.id}
                  className={cn(
                    "flex cursor-default gap-2 border-b border-border px-3 py-2.5",
                    i === 0 && "border-l-2 border-l-border"
                  )}
                >
                  <Avatar className="h-9 w-9 shrink-0 border border-border bg-transparent">
                    <AvatarFallback className="text-xs text-border bg-transparent">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="truncate text-xs font-medium text-border">
                        {conv.name}
                      </span>
                      {conv.info && (
                        <Info className="h-3 w-3 shrink-0 text-border" />
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="truncate text-[11px] text-border">
                        {conv.lastMessage}
                      </span>
                      {conv.unread && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-border bg-transparent" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Right: chat */}
        <section className="flex min-w-0 flex-1 flex-col">
          <div className="border-b border-border px-4 py-2.5">
            <p className="text-sm font-semibold text-border">James Anderson</p>
            <p className="text-xs text-border">(949) 484-6418</p>
          </div>
          <ScrollArea className="flex-1 px-4 py-2">
            <div className="flex flex-col gap-3">
              {chatMessages.map((msg) =>
                msg.dateLabel ? (
                  <p
                    key={msg.id}
                    className="text-center text-[11px] text-border"
                  >
                    {msg.dateLabel}
                  </p>
                ) : msg.direction === "out" ? (
                  <div key={msg.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-lg rounded-br-sm border border-border bg-transparent px-3 py-2 text-xs text-border">
                      <p>{msg.text}</p>
                      <div className="mt-1 flex items-center justify-end gap-1">
                        <span className="h-3 w-3 rounded border border-border bg-transparent" />
                        <Check className="h-3 w-3 text-border" />
                        <span className="text-[10px] text-border">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex gap-2">
                    <Avatar className="h-6 w-6 shrink-0 border border-border bg-transparent">
                      <AvatarFallback className="text-[10px] bg-transparent">
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg rounded-bl-sm border border-border bg-transparent px-3 py-2 text-xs">
                      <p>{msg.text}</p>
                      <span className="text-[10px] text-border">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </ScrollArea>
          <div className="border-t border-border p-2">
            <Input
              placeholder="Type your message"
              className="mb-2 h-9 border border-border bg-transparent text-xs placeholder:text-border"
              readOnly
            />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Paperclip className="h-3.5 w-3.5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Smile className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Templates
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Appointment reminder</DropdownMenuItem>
                    <DropdownMenuItem>Check-in request</DropdownMenuItem>
                    <DropdownMenuItem>Recall message</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

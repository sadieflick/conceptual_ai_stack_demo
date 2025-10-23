import { Card } from "@/components/ui/card";
import { User, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  messages: Message[];
}

const ChatInterface = ({ messages }: ChatInterfaceProps) => {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b">
        <Bot className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-lg">Chat Interface</h2>
      </div>

      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 animate-fade-in`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.role === "user" 
                ? "bg-primary/10" 
                : "bg-gradient-to-br from-accent to-accent/80"
            }`}>
              {message.role === "user" ? (
                <User className="w-4 h-4 text-primary" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div className="flex-1">
              <div className={`rounded-2xl p-4 ${
                message.role === "user"
                  ? "bg-primary/5 border border-primary/20"
                  : "bg-muted"
              }`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChatInterface;

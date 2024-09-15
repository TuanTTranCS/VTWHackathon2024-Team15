import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/Avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { ScrollArea } from '../../components/ui/scroll-area';
import './inbox.css';

export default function Inbox() {
  return (
    <div className="inbox-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Card className="card">
          <CardHeader>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

            <CardTitle className="chat-user-name">Founder-coco Coco</CardTitle>
            <CardDescription className="chat-preview">Hi, I'm excited to get started...</CardDescription>
          </CardHeader>
        </Card>
        <Card className="card">
          <CardHeader>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            <CardTitle className="chat-user-name">Steve Coco</CardTitle>
            <CardDescription className="chat-preview">Hi, I'm excited to get started...</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        {/* Chat Header */}
        <div className="chat-header">Founder-coco Coco</div>

        {/* Chat Messages */}
        <ScrollArea className="chat-messages">
          <div className="message">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            <p className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="message">
            <p className="message-content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>
        </ScrollArea>

        <Separator className="separator" />

        {/* Input and Send Button */}
        <div className="input-section">
          <Input placeholder="Type anything" className="input-field" />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}

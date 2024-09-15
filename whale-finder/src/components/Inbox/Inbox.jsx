import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/Avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { ScrollArea } from '../../components/ui/scroll-area';
import './inbox.css';

export default function Inbox() {
  return (
    <div className="inbox-container ">
      {/* Sidebar */}
      <div className="sidebar ">
        <Card className="card mt-8">
          <CardHeader className="card-header ">
            <Avatar>
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aQlh8O7bgyLqxpvp4ZHA8sozFmfh3quzMQ&s" className="object-cover"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="chat-preview-text-container">
              <CardTitle className="chat-user-name">Nick Ronaldo</CardTitle>
              <CardDescription className="chat-preview">SWE @ VTW</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="card">
          <CardHeader className="card-header">
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/portraits/men/7.jpg" className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="chat-preview-text-container">
              <CardTitle className="chat-user-name">Joe Messi</CardTitle>
              <CardDescription className="chat-preview">SWE @ Google</CardDescription>
            </div>
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
            <AvatarImage  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aQlh8O7bgyLqxpvp4ZHA8sozFmfh3quzMQ&s" className="object-cover" />
            <AvatarFallback>EN</AvatarFallback>
          </Avatar>
            <p className="message-content">Hello Mary, saw your idea on the AI app. I have some very similar idea and am looking for a co-founder. Do you want to grab a coffee next Wednesday?</p>
          </div>
          <div className="message">
            <p className="message-content">OMG I have been a fan of yours for a while now! I really like your idea too! Let's do it! UBC Starbucks at 3?</p>
            <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" className="object-cover" />
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

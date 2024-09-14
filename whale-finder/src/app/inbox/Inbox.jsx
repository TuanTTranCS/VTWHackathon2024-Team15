import { Avatar, AvatarImage } from '../../components/ui/Avatar';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { ScrollArea } from '../../components/ui/scroll-area';

export default function Inbox() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 p-4 border-r">
        <Card className="mb-4">
          <CardHeader>
            <Avatar>
              <AvatarImage src="/avatar1.jpg" />
            </Avatar>
            <CardTitle>Founder-coco Coco</CardTitle>
            <CardDescription>Hi, I'm excited to get started...</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="/avatar2.jpg" />
            </Avatar>
            <CardTitle>Steve Coco</CardTitle>
            <CardDescription>Hi, I'm excited to get started...</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 p-4 flex flex-col">
        {/* Chat Header */}
        <div className="font-bold text-xl mb-4">Founder-coco Coco</div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 mb-4">
          <div className="mb-2">
            <Avatar>
              <AvatarImage src="/avatar1.jpg" />
            </Avatar>
            <p className="border p-4 rounded-lg">I am technical, passively looking...</p>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="/avatar2.jpg" />
            </Avatar>
            <p className="border p-4 rounded-lg">I am technical, passively looking...</p>
          </div>
        </ScrollArea>

        <Separator className="my-4" />

        {/* Input and Send Button */}
        <div className="flex items-center">
            <Input placeholder="Type anything" className="flex-1 mr-4" />
            <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}

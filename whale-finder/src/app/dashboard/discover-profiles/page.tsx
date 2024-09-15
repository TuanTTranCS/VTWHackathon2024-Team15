import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const DiscoverProfiles = () => {
    const overallIntroduction= "I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit."
    const textEducation= "My education background is in Computer Science and I have a Master's degree in Software Engineering. I have been working in the tech industry for 5 years and have experience in both front-end and back-end development. I have worked in both startups and large companies and have experience in leading teams and managing projects."
    const textCofounder= "I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on. I'm looking for a co-founder that can fit my requirements and help me in the next project that I'm working on."
    return ( 
        <div className="grid lg:grid-cols-3 gap-6 pt-8">
            <Card className="col-span-2 ml-5">
                <CardHeader className="justify-end flex flex-col items-center">
                    <Avatar className='w-20 h-20 mb-2'>
                        <AvatarImage src="https://randomuser.me/api/portraits/men/7.jpg" className="object-cover"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle className='text-center'>Vincent</CardTitle>
                    <CardDescription className='text-center'>California Dreamer</CardDescription>
                </CardHeader>
                <CardContent>
                    <br></br>
                    <Label className="text-2xl font-bold mb-5">Overall Introduction</Label>
                    <Textarea className='h-[110px] resize-none cursor-none' defaultValue={overallIntroduction} />
                    <br></br>
                    <Label className="text-2xl font-bold">My background</Label>
                    <Textarea className='h-[100px] resize-none cursor-none' defaultValue={textEducation} />
                    <br></br>
                    <Label className="text-2xl font-bold">What I'm looking for in a co-founder</Label>
                    <Textarea className='h-[260px] resize-none cursor-none'  defaultValue={textCofounder}></Textarea>
                </CardContent>
            </Card>
            <Card className="col-span-1 mr-5 mb-[450px]">
                <CardHeader>
                    <CardDescription>Like this potential co-founder? Send a message to get a conversation started!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                    <Label htmlFor="message">Message</Label>
                    <Textarea className="resize-none h-[140px]"/>
                    <Button variant="default" className="w-full" >
                    Send Invite
                    </Button>
                    <Button variant="grey" className="w-full mt-2 font-xl font-bold" >
                        Skip
                    </Button>
                    </form>
                </CardContent>
                </Card>
        </div> 
    );
}
 
export default DiscoverProfiles;
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { HomeIcon } from "lucide-react"

const RegisterForm = () => {
    return ( 
    <div className="container mx-auto p-4">
      <Link
        href="/"
        className="absolute top-4 right-4 text-sm text-muted-foreground hover:text-primary flex items-center"
      >
        <HomeIcon className="w-4 h-4 mr-1" />
        Back to Home
      </Link>
      <br></br>
      <h1 className="text-xl font-bold mb-6 text-center">Complete Your Registration</h1>
      <div className="grid lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Registration Steps</CardTitle>
          <CardDescription>Complete these steps to finish your registration</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Fill in your personal information</li>
            <li>Provide your contact details</li>
            <li>Set up your account credentials</li>
            <li>Choose your preferences</li>
            <li>Review and submit your application</li>
          </ol>
        </CardContent>
      </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Registration Form</CardTitle>
            <CardDescription>Please fill in all the required information</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name"  required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email@example.com" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Highest level of education</Label>
                <Select required>
                  <SelectTrigger id="education">
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I agree to the terms and conditions
                </Label>
              </div>
              <Button variant="default" className="w-full" asChild>
              <Link href="/auth/login">Complete Registration</Link>
            </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
     );
}
 
export default RegisterForm;
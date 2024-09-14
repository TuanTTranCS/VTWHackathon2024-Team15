import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Dashboard from './dashboard/Dashboard.jsx';
import Inbox from './inbox/Inbox.jsx';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300">
      <header className="bg-white shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Whali</h1>
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <Link href="auth/login">Login</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="auth/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1682685796014-2f342188a635?w=500&h=500&fit=crop"
              alt="Scenic mountain landscape"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-4xl font-bold mb-6">Discover new oportunities</h2>
            <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel porttitor orci. Praesent condimentum diam sed sem placerat imperdiet. Nullam eleifend tempor magna et lacinia. Vivamus lacus est, semper ac ligula ac, dapibus ullamcorper sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare blandit maximus. Nullam ornare ante nibh, et ullamcorper mauris accumsan ut. Aliquam erat volutpat. Aenean diam turpis, rhoncus vel fermentum quis, ornare ac odio. Nam vel blandit ex. In vel cursus sem, et suscipit urna. Donec fringilla vitae purus eu condimentum. </p>
            <br></br>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">Discover your new experience</Button>
          </div>
        </div>
      </main>
      </div>
  );
}


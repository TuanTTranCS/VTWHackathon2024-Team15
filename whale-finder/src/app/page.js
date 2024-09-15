import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300">
      <header className="bg-white shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Coco-Founder</h1>
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
            <h2 className="text-4xl font-bold mb-6">Co-founder matching</h2>
            <h1 className="text-5xl font-bold mb-6">in Vancouver</h1>
            <p className="text-xl mb-8">
              We help foster a more unified tech community in Vancouver.
              Knowledge-sharing is easier than ever.{" "}
            </p>
            <br></br>
            <div className="py-5">
              <Button
                size="lg"
                className="bg-black text-lg text-white hover:bg-gray-800"
                asChild
              >
                <Link href="auth/register">Discover your new experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


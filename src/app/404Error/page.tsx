import Link from "next/link";
import Image from "next/image"; // Keep this import if you plan to use it
import Hero from "./Hero"

export default function ErrorPage() {
  return (
    <>
    <Hero />
    <div className="min-h-screen bg-white">
      
      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] mb-4">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>

          {/* You can add an image here */}
          <div className="mb-6">
            <Image 
              src="/images/404-illustration.png" // Path to your image inside the 'public' directory
              alt="404 Error"
              width={300}
              height={300}
            />
          </div>

          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

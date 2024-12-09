import { Coffee } from 'lucide-react';
import Heading from '../Heading/Heading';
import Image from 'next/image'; // Make sure Image is imported from next/image

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0">
          <Image 
            src="/dessert.png" 
            alt="Dessert dish" 
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Items Section */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D]" size={24} />
            <Heading text="Dessert" />
          </div>

          <div className="space-y-8">
            {/* Removed menuItems mapping */}
            <p className="text-center text-gray-500">No menu items available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

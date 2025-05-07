'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const resumes = [1, 2, 3]; // Simulate multiple resumes

export default function ProductCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto md:mb-20 mb-0">
      <CarouselContent>
        {resumes.map((_, index) => (
          <CarouselItem key={index} className="p-4">
            <div className="flex min-h-[500px] shadow-lg rounded-lg overflow-hidden">
              {/* Left Column */}
              <div className="w-1/3 bg-gray-900 text-white p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 mb-4" />
                <h1 className="text-xl font-bold mb-2">John Doe</h1>
                <p className="text-sm text-gray-400 mb-4">Web Developer</p>

                <div className="w-full mb-4">
                  <h2 className="font-semibold mb-1 border-b border-gray-700 pb-1">Contact</h2>
                  <p className="text-sm">📞 (123) 456-7890</p>
                  <p className="text-sm">✉️ john@example.com</p>
                  <p className="text-sm">📍 New York</p>
                </div>

                <div className="w-full">
                  <h2 className="font-semibold mb-1 border-b border-gray-700 pb-1">Skills</h2>
                  <ul className="text-sm list-disc list-inside">
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Next.js</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-2/3 bg-white p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2 border-b pb-1">Experience</h2>
                  <p className="font-semibold">Frontend Developer, ABC Corp</p>
                  <p className="text-sm text-gray-600">2022 – Present</p>
                  <p className="text-sm mt-1">Built responsive UIs using React and Tailwind CSS.</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2 border-b pb-1">Education</h2>
                  <p className="font-semibold">B.Sc. in CS, XYZ University</p>
                  <p className="text-sm text-gray-600">2018 – 2022</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 border-b pb-1">Certifications</h2>
                  <p className="text-sm">Full-Stack Developer – freeCodeCamp</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajendra Susanto",
    avatar: "D",
    title: "Software Engineer",
    description: "This is the best AI tool I've ever used! The chatbot on this website is incredibly intelligent and responsive. It has made a significant difference in streamlining our customer support and improving user experience. Highly recommended!"
  },
  {
    name: "Rizky Pratama",
    avatar: "R",
    title: "Marketing Manager",
    description: "I'm impressed with the capabilities of this chatbot. It has revolutionized how we interact with visitors to our website. Our conversion rates have skyrocketed since implementing it!"
  },
  {
    name: "Adi Wijaya",
    avatar: "A",
    title: "Business Owner",
    description: "As a small business owner, this AI chatbot has been a game-changer. It's like having a 24/7 virtual assistant who handles customer inquiries with precision. It has saved me both time and money."
  },
  {
    name: "Diadjeng Renjana",
    avatar: "S",
    title: "UX Designer",
    description: "I appreciate the seamless integration of this chatbot into our website's design. It's not only functional; it enhances the overall user experience. The customization options are fantastic!"
  },
];



export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
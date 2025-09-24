import Image from "next/image";
import React from "react";

const customerStorys = [
  {
    content:
      "Creating my store with site.set was the best decision for my business. The platform is super intuitive, and I was able to put my products up for sale in just a few minutes.",
    author: {
      name: "Annette Bones",
      role: "CEO at Anne Corp",
      avatar: "/customer-01.png",
    },
  },
  {
    content:
      "Turning my idea into an online store was quick and easy. I loved the customization options and the ease of order management. I can already see my products reaching more people!",
    author: {
      name: "Jacob Jones",
      role: "CEO at JJ Org",
      avatar: "/customer-02.png",
    },
  },
];

export function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-heading-xl text-gray-100">
          Those who use it approve
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStorys.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">
                {customerStory.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

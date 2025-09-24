import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-heading-hg font-sans">
            Sell your products as an affiliate in one place
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100" />
                <span className="text-gray-200 text-body-md">
                  Create your website in less than 5 minutes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="text-cyan-100" />
                <span className="text-gray-200 text-body-md">
                  Track and optimize your online business
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start lg:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href="create-store">
                  Create your free store <ArrowRight />
                </Link>
              </Button>

              <p>You don&apos;t need a credit card</p>
            </div>
          </div>
        </div>
        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Illustration with story, tag and bag icons"
            width={200}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

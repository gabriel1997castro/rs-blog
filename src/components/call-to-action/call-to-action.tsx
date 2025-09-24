import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          {" "}
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>
          <h2
            className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl`}
          >
            Create your store and start selling today
          </h2>
          <Button variant="primary" asChild className="mt-6">
            <Link href="/create-store">
              Create a free store <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

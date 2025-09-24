import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          {" "}
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>
          <h2 className="fon-sans text-gray-100 text-balance text-heading-xl">
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

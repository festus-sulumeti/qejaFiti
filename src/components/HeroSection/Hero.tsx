import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button";
import Navbar from './Navbar';

import Footer from './Footer';


import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import type { ReactNode } from "react";
import {
  Coins,
  Building2,
  Users,
} from "lucide-react";

type FeatureText = {
  icon: ReactNode;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Property Management",
    description:
      "Manage all your rental properties from a single dashboard. Keep track of units, occupancy, leases, and property details with ease.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Rent Collection",
    description:
      "Simplify rent payments with secure online collection, payment tracking, automated reminders, and detailed financial records.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Tenant Management",
    description:
      "Store tenant information, manage lease agreements, handle maintenance requests, and improve communication through one centralized platform.",
  },

]

export default function Hero() {
  return (
    <> 
      <Navbar />
        <section className="relative flex h-screen w-full items-center justify-center">
          <div className="absolute inset-0 z-10 size-full">
            <div className="grid w-full grid-cols-12 divide-x divide-white/20">
              <div className="col-span-1 h-screen" />
              <div className="col-span-3 h-screen" />
              <div className="col-span-4 h-screen" />
              <div className="col-span-3 h-screen" />
              <div className="col-span-1 h-screen" />
            </div>
          </div>
          <div
           className="absolute inset-0 bg-center bg-cover"
           style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1920&q=80)",
           }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-20 max-w-5xl px-6 text-center text-white">
            <h1 className="text-center font-kanturmuy font-medium text-3xl text-white tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              Smarter Rental Management Made Simple
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-center font-light text-lg text-white/90 md:text-xl">
              Qejafiti simplifies rental operations by bringing tenants, landlords, payments,
              maintenance, and property records together in one secure system.
            </p>

            <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
              <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                <Link to="/get-started">
                  Get Started
                </Link>
              </span>
              <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
              </div>
            </Button>
          </div>
       </section>

        <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
                Everything You Need to Manage Rental Properties
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
               Qejafiti streamlines property management by bringing landlords, tenants, payments, and maintenance together in one secure and easy-to-use platform.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>

       
      <Footer />
    </>
  
  );
}

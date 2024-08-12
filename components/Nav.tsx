"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Why Swipe?",
      link: "/#features",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Templates",
      link: "/templates",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tutorials",
      link: "/tutorials",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: `FAQs`,
      link : '/faqs',
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
       name : 'Pricing',
       link : '/pricing',
       icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name :'Contact Us',
        link : '/contact',
        icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
    
  ];
  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}


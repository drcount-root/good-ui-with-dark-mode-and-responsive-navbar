"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Github,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  Menu,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function Sidebar() {
  const sidebarMenus = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Components", url: "/components" },
    { id: 3, name: "Others", url: "/others" },
    { id: 4, name: "Data", url: "/data" },
  ];

  return (
    <div
      className={`grid md:grid-cols-2 gap-2 md:hidden relative dark:text-white`}
    >
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetClose asChild>
          <SheetContent
            side={"right"}
            className="pl-10 pt-28 flex flex-col gap-10"
          >
            {sidebarMenus?.map((item: any) => (
              <Link
                href={item?.url}
                key={item?.id}
                className={`text-2xl font-semibold hover:text-blue-400 
                  `}
              >
                {item?.name}
              </Link>
            ))}

            <SheetFooter
              style={{
                position: "absolute",
                bottom: "40px",
              }}
            >
              <div className="flex gap-6 w-full items-center">
                <Github className="h-8 w-8" strokeWidth={1.6} />
                <LucideLinkedin className="h-8 w-8" strokeWidth={1.5} />
                <Twitter className="h-8 w-8" strokeWidth={1.6} />
                <Instagram className="h-8 w-8" strokeWidth={1.6} />
              </div>
            </SheetFooter>
          </SheetContent>
        </SheetClose>
      </Sheet>
    </div>
  );
}

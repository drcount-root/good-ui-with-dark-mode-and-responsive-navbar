"use client";

import { BellRing } from "lucide-react";
import { useEffect } from "react";

import { Button } from "./ui/button";

export default function NotificationAllowComponent() {
  const handleAllowNotifications = async () => {
    const { permission } = Notification;
    if (permission === "granted") {
      console.log("Notifications are already enabled.");
    } else if (permission === "denied") {
      console.log("Notifications have been denied.");
    } else {
      try {
        const result = await Notification.requestPermission();
        if (result === "granted") {
          console.log("Notifications have been enabled.");
          new Notification("Thank you for enabling notifications!");
        } else {
          console.log("Notifications have been denied or dismissed.");
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    }
  };

  useEffect(() => {
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications.");
      return;
    }
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={handleAllowNotifications}
        className="ml-10 w-fit px-6 flex gap-3"
      >
        <BellRing className="h-4 w-4" />{" "}
        <span className="font-normal">Ask to allow notifications</span>
      </Button>
    </>
  );
}

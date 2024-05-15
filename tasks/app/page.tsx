"use client";
import Tasks from "./components/tasks/tasks";
import { useGlobalState } from "./context/globalProvider";
import { SignIn, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useUser();
  const { tasks } = useGlobalState();
  if (!user) {
    redirect("/signin");
  }

  return <Tasks title="All Tasks" tasks={tasks} />;
}

"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const { user } = useUser();
  console.log("user: ", user);

  if (user) {
    router.push("/dashboard");
  }
  if (!user) {
    return (
      <main className="flex flex-col gap-4 min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Landing page</h1>
        <SignInButton 
          mode="modal"
        />
      </main>
    );
  }
  


}

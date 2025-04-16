import { SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  else {
    return (
      <main className="flex flex-col gap-4 min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Landing page</h1>
        <SignInButton mode="modal" />
      </main>
    );
  }
  


}

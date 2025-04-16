import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
const page = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  return (
    <>
      <h1>Dashboard</h1>
      <p>{user.primaryEmailAddress?.emailAddress}</p>
      <SignOutButton />
    </>
  );
};

export default page;

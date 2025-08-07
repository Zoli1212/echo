"use client";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
    <Authenticated>
      <div className="flex items-center justify-center min-h-svh">
        <p>apps/web</p>
        <UserButton />
        <Button onClick={() => addUser()}>Add</Button>
        <div className="max-w-sm w-full max-auto">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </Authenticated>
    <Unauthenticated>
      <p>Must be signed In</p>
      <SignInButton>Sign In!</SignInButton>
    </Unauthenticated>
    </>
  );
}

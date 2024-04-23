import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "./upload-btn";


export function TopNav() {

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h1>Gallery</h1>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

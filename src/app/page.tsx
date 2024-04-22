/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images].map((image) => (
        <figure key={image.id} className="w-48 flex-col">
          <img src={image.url} alt="image" />
          <figcaption>{image.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-2x1 h-full w-full text-center">Sign in to see some images</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

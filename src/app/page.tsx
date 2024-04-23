import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  const size = {
    width: 192,
    height: 192,
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {[...images].map((image) => (
        <Link href={`/img/${image.id}`}>
          <figure key={image.id} className="flex h-48 w-48 flex-col">
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={size.width}
              height={size.height}
            />
            <figcaption>{image.name}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-2x1 h-full w-full text-center">
          Sign in to see some images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

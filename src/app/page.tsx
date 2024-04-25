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
    <ul className="flex flex-wrap justify-center gap-4 p-4">
      {[...images].map((image) => (
        <Link key={image.id} href={`/img/${image.id}`}>
          <figure className="flex h-48 w-48 flex-col">
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
    </ul>
  );
}
export default async function HomePage() {
  return (
    <>
      <SignedOut>
        <article className="text-2x1 h-full w-full text-center">
          Sign in to see some images
        </article>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </>
  );
}

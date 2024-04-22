/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...images].map((image) => (
            <figure key={image.id} className="w-48 flex-col">
              <img src={image.url} alt="image" />
              <figcaption>{image.name}</figcaption>
            </figure>
          ))
        }
      </div>
    </main>
  );
}

import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
    const idAsNumber = Number(props.photoId);
    if (Number.isNaN(idAsNumber)) {
        throw new Error("Invalid photo id");
    }

    const image = await getImage(idAsNumber);
    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
            <figure className="flex-shrink flex-grow">
                <img src={image.url} className="object-contain" alt={image.name} />
            </figure>
            <section className="flex h-full w-56 flex-shrink-0 flex-col border-l">
                <h2 className="border-b p-2 text-center text-xl">{image.name}</h2>

                <article className="p-2">
                    <p>Uploaded By:</p>
                    <span>{userInfo.fullName}</span>
                </article>

                <article className="p-2">
                    <p>Created On:</p>
                    <span>{image.createdAt.toLocaleDateString()}</span>
                </article>
            </section>
        </div>
    );
}

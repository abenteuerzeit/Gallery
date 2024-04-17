/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/29f7b27c-8432-4e51-b160-7121fb07d9a4-vsia0p.jpg",
  "https://utfs.io/f/c5f4d75a-1e7c-4784-87af-c215fad0fd4b-vt1evz.jpg",
  "https://utfs.io/f/649a3787-2b0a-4079-a4c9-1a6381b3cf3a-vsi9yz.jpg",
  "https://utfs.io/f/a1748c11-d0a4-4877-85a7-bff8bc29af85-vt1wnl.jpg",
  "https://utfs.io/f/01cc0719-cb03-4c14-af5f-54a809ea6914-vt1wmx.jpg",
  "https://utfs.io/f/6816b8a7-7e5c-4539-99da-653e6054f61f-vt1xeg.jpg",
  "https://utfs.io/f/6a93daeb-5cae-4677-a487-a55623b4f28e-vsi9zz.jpg",
  "https://utfs.io/f/4a18ae8a-545b-460d-9c77-d2c3f45cec61-vt1xdh.jpg",
  "https://utfs.io/f/f14033d8-1f3a-4a9c-9fee-9b2040f988d8-vt1xdn.jpg",
  "https://utfs.io/f/d2eb94af-9340-4cdb-8f86-faf6dc9d9cc1-vsi9a4.jpg",
];


const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
          [...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}

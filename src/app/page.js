import Image from "next/image";
import backgroundImage from "../../public/home/book-bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Image
        className="brightness-90 blur-sm"
        src={backgroundImage}
        alt="background Image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className='z-10 '>
        <div className='bg-black p-10 flex flex-col justify-center items-center border rounded-md'>
          <h1 className='text-4xl text-yellow-100 py-3'>Book Addict</h1>
          <h3 className='text-slate-900 mt-3 text-2xl bg-yellow-100 p-3 rounded-md'>
            <Link href='/store'> Let's Explore The Store </Link>
          </h3>

        </div>
      </div>
    </div>
  );
}

import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl mt-20 px-4 lg:max-w-7xl lg:px-8">
      <div className="">
        <div className="relative h-[500px] w-full">
          <Image
            src={urlFor(data.image1).url()}
            alt="hero"
            fill
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

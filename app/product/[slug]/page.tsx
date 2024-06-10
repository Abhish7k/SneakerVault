import AddToBag from "@/components/AddToBag";
import CheckoutNow from "@/components/CheckOutNow";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";

interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="mt-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="flex-col py-3 px-10">
            <div className="text-2xl font-semibold mb-2 leading-tight">
              {data.name}
            </div>

            <div className="text-lg font-medium mb-5">{data.categoryName}</div>

            <div className="flex-col items-center">
              <p className="mr-2 text-lg font-medium">MRP : ₹ {data.price}</p>
              <div className="text-sm font-medium text-black/[0.5]">
                incl. of taxes
              </div>
            </div>

            <div className="flex gap-2 mt-10">
              <AddToBag
                currency="INR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="INR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>

            <div>
              <div className="text-lg font-semibold mt-10 mb-5">
                Product Details
              </div>
              <p className="text-base tracking-wide">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

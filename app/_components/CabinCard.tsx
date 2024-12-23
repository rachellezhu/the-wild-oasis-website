import { UsersIcon } from "@heroicons/react/24/solid";
import { TGetCabins } from "@/app/_types/cabin-type";
import Link from "next/link";
import Image from "next/image";

export default function CabinCard({ cabin }: { cabin: TGetCabins }) {
  const { id, name, max_capacity, regular_price, discount, image_url } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <Image src={image_url!} alt={`Cabin ${name}`} />

      <div className="flex-grow">
        <div className="pt-5 pb-4 px7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin{name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{max_capacity}</span>
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount !== null && discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regular_price! - discount!}
                </span>
                <span className="line-through fo`nt-semibold text-primary-600">
                  ${regular_price!}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regular_price!}</span>
            )}{" "}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

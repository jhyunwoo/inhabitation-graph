"use client";
import Loading from "@/components/Loading";
import dataIdToText from "@/lib/dataIdToText";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Area({
  params,
}: {
  params: { dataId: string; areaId: string };
}) {
  const decodedDataId = decodeURI(params.dataId);
  const decodedAreaId = decodeURI(params.areaId);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-slate-50 p-4 w-full min-h-screen flex flex-col ">
      {isLoading ? <Loading /> : ""}
      <Link href={`/${decodedDataId}`} className="flex items-center py-2">
        <ChevronDoubleLeftIcon className="w-6 h-6" />
        <div className="text-sm">이전</div>
      </Link>
      <div className="text-xl font-bold mt-8">
        {dataIdToText(decodedDataId)} - {decodedAreaId}
      </div>
      <Image
        src={`/graph_images/${decodedDataId}/${decodedAreaId}.png`}
        width={1000}
        height={1000}
        alt={decodedDataId + decodedAreaId}
        priority={true}
        quality={100}
        className="w-full mx-auto"
        blurDataURL="/loading.png"
        placeholder="blur"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

import dataIdToText from "@/lib/dataIdToText";
import Link from "next/link";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

type Props = {
  params: { dataId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.dataId;

  return {
    title: dataIdToText(id),
  };
}

export default function Data({ params }: { params: { dataId: string } }) {
  const decodedDataId = decodeURI(params.dataId);

  function setMainColour(dataId: string) {
    if (dataId.includes("경매낙찰통계")) {
      return "hover:bg-orange-500 hover:shadow-orange-500";
    } else if (dataId.includes("보증사고현황")) {
      return "hover:bg-lime-500 hover:shadow-lime-500";
    } else if (dataId.includes("전세가율")) {
      return "hover:bg-indigo-500 hover:shadow-indigo-500";
    }
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col p-4">
      <Link href={"/"} className="flex items-center py-2">
        <ChevronDoubleLeftIcon className="w-6 h-6" />
        <div className="text-sm">이전</div>
      </Link>
      <div className="text-xl font-bold mt-8">
        {dataIdToText(decodedDataId)}
      </div>
      <div className="grid grid-cols-1 gap-2 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/전국`}
        >
          전국
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/시도별`}
        >
          시도별
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/강원특별자치도`}
        >
          강원특별자치도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/경기도`}
        >
          경기도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/경상남도`}
        >
          경상남도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/경상북도`}
        >
          경상북도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/대구광역시`}
        >
          대구광역시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/대전광역시`}
        >
          대전광역시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/부산광역시`}
        >
          부산광역시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/서울특별시`}
        >
          서울특별시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/세종특별자치시`}
        >
          세종특별자치시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/울산광역시`}
        >
          울산광역시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/인천광역시`}
        >
          인천광역시
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/전라남도`}
        >
          전라남도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/전라북도`}
        >
          전라북도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/제주특별자치도`}
        >
          제주특별자치도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/충청남도`}
        >
          충청남도
        </Link>
        <Link
          className={`bg-white p-4 rounded-lg shadow-md text-lg text-center font-semibold ${setMainColour(
            decodedDataId
          )} hover:text-white hover:shadow-xl transition duration-300`}
          href={`/${decodedDataId}/충청북도`}
        >
          충청북도
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50 p-4">
      <div className="flex flex-col">
        <div className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          너...지금 <span className="text-red-600 font-extrabold">사기</span>
          당한거야
        </div>
        <div className="mt-4 text-sm font-bold ml-auto flex flex-col items-end">
          <div className="font-medium">제 25회 전국 학생 통계 활용 대회</div>
          <div>뽕계망치팀</div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="">
          <div className="text-lg font-semibold border-b-2">경매낙찰통계</div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-orange-500 hover:text-white transition duration-500 hover:shadow-orange-500"
              href={"/경매낙찰통계_최근3개월_경매건수"}
            >
              최근 3개월 경매건수
            </Link>
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-orange-500 hover:text-white transition duration-500 hover:shadow-orange-500"
              href={"/경매낙찰통계_최근3개월_낙찰가율"}
            >
              최근 3개월 낙찰가율
            </Link>
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-orange-500 hover:text-white transition duration-500 hover:shadow-orange-500"
              href={"/경매낙찰통계_최근3개월_낙찰건수"}
            >
              최근 3개월 낙찰건수
            </Link>
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-orange-500 hover:text-white transition duration-500 hover:shadow-orange-500"
              href={"/경매낙찰통계_최근3개월_낙찰률"}
            >
              최근 3개월 낙찰률
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text-lg font-semibold border-b-2">보증사고현황</div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-lime-500 hover:text-white duration-500 transition hover:shadow-lime-500"
              href={"/보증사고현황_사고건수"}
            >
              사고건수
            </Link>

            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-lime-500 hover:text-white duration-500 transition hover:shadow-lime-500"
              href={"/보증사고현황_사고금액"}
            >
              사고금액
            </Link>
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-lime-500 hover:text-white duration-500 transition hover:shadow-lime-500"
              href={"/보증사고현황_사고율"}
            >
              사고율
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text-lg font-semibold border-b-2">전세가율</div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-indigo-500 hover:text-white transition duration-500 hover:shadow-indigo-500"
              href={"/전세가율_아파트_최근1년"}
            >
              아파트 최근 1년
            </Link>

            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-indigo-500 hover:text-white transition duration-500 hover:shadow-indigo-500"
              href={"/전세가율_아파트_최근3개월"}
            >
              아파트 최근 3개월
            </Link>
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-indigo-500 hover:text-white transition duration-500 hover:shadow-indigo-500"
              href={"/전세가율_연립다세대_최근1년"}
            >
              연립다세대 최근 1년
            </Link>
            <Link
              className="bg-white p-4 rounded-lg hover:shadow-xl shadow-md font-medium text-lg hover:bg-indigo-500 hover:text-white transition duration-500 hover:shadow-indigo-500"
              href={"/전세가율_연립다세대_최근3개월"}
            >
              아파트 최근 3개월
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

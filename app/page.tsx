import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div>전국 학생 통계 대회 - 전세 데이터 분석</div>
      <div className="flex flex-col">
        <Link href={"/경매낙찰통계_최근3개월_경매건수"}>
          경매낙찰통계 - 최근 3개월 경매건수
        </Link>
        <Link href={"/경매낙찰통계_최근3개월_낙찰가율"}>
          경매낙찰통계 - 최근 3개월 낙찰가율
        </Link>
        <Link href={"/경매낙찰통계_최근3개월_낙찰건수"}>
          경매낙찰통계 - 최근 3개월 낙찰건수
        </Link>
        <Link href={"/경매낙찰통계_최근3개월_낙찰률"}>
          경매낙찰통계 - 최근 3개월 낙찰률
        </Link>
        <Link href={"/보증사고현황_사고건수"}>보증사고현황 - 사고건수</Link>

        <Link href={"/보증사고현황_사고건수"}>보증사고현황 - 사고금액</Link>
        <Link href={"/보증사고현황_사고건수"}>보증사고현황 - 사고율</Link>
        <Link href={"/전세가율_아파트_최근1년"}>
          전세가율 - 아파트 최근 1년
        </Link>

        <Link href={"/전세가율_아파트_최근3개월"}>
          전세가율 - 아파트 최근 3개월
        </Link>
        <Link href={"/전세가율_연립다세대_최근1년"}>
          전세가율 - 연립다세대 최근 1년
        </Link>
        <Link href={"/전세가율_연립다세대_최근3개월"}>
          전세가율 - 아파트 최근 3개월
        </Link>
      </div>
    </div>
  );
}

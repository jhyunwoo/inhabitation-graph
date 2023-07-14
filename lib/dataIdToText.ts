export default function dataIdToText(dataId: string) {
  if (dataId === "경매낙찰통계_최근3개월_경매건수") {
    return "경매낙찰통계 - 최근 3개월 경매건수";
  } else if (dataId === "경매낙찰통계_최근3개월_낙찰가율") {
    return "경매낙찰통계 - 최근 3개월 낙찰가율";
  } else if (dataId === "경매낙찰통계_최근3개월_낙찰건수") {
    return "경매낙찰통계 - 최근 3개월 낙찰건수";
  } else if (dataId === "경매낙찰통계_최근3개월_낙찰률") {
    return "경매낙찰통계 - 최근 3개월 낙찰률";
  } else if (dataId === "보증사고현황_사고건수") {
    return "보증사고현황 - 사고건수";
  } else if (dataId === "보증사고현황_사고금액") {
    return "보증사고현황 - 사고금액";
  } else if (dataId === "보증사고현황_사고율") {
    return "보증사고현황 - 사고율";
  } else if (dataId === "전세가율_아파트_최근1년") {
    return "전세가율 - 아파트 최근 1년";
  } else if (dataId === "전세가율_아파트_최근3개월") {
    return "전세가율 - 아파트 최근 3개월";
  } else if (dataId === "전세가율_연립다세대_최근1년") {
    return "전세가율 - 연립다세대 최근 1년";
  } else if (dataId === "전세가율_연립다세대_최근3개월") {
    return "전세가율 - 연립대세대 최근 3개월";
  }
}

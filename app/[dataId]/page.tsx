import Link from "next/link";

export default function Data({ params }: { params: { dataId: string } }) {
  const decodedDataId = decodeURI(params.dataId);

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <div>Data</div>
      <div>{decodedDataId}</div>
      <div className="flex flex-col">
        <Link href={`/${decodedDataId}/전국`}>전국</Link>
        <Link href={`/${decodedDataId}/시도별`}>시도별</Link>
        <Link href={`/${decodedDataId}/강원특별자치도`}>강원특별자치도</Link>
        <Link href={`/${decodedDataId}/경기도`}>경기도</Link>
        <Link href={`/${decodedDataId}/경상남도`}>경상남도</Link>
        <Link href={`/${decodedDataId}/경상북도`}>경상북도</Link>
        <Link href={`/${decodedDataId}/대구광역시`}>대구광역시</Link>
        <Link href={`/${decodedDataId}/대전광역시`}>대전광역시</Link>
        <Link href={`/${decodedDataId}/부산광역시`}>부산광역시</Link>
        <Link href={`/${decodedDataId}/서울특별시`}>서울특별시</Link>
        <Link href={`/${decodedDataId}/세종특별자치시`}>세종특별자치시</Link>
        <Link href={`/${decodedDataId}/울산광역시`}>울산광역시</Link>
        <Link href={`/${decodedDataId}/인천광역시`}>인천광역시</Link>
        <Link href={`/${decodedDataId}/전라남도`}>전라남도</Link>
        <Link href={`/${decodedDataId}/전라북도`}>전라북도</Link>
        <Link href={`/${decodedDataId}/제주특별자치도`}>제주특별자치도</Link>
        <Link href={`/${decodedDataId}/충청남도`}>충청남도</Link>
        <Link href={`/${decodedDataId}/충청북도`}>충청북도</Link>
      </div>
    </div>
  );
}

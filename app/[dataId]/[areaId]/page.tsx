import Image from "next/image";

export default function Area({
  params,
}: {
  params: { dataId: string; areaId: string };
}) {
  const decodedDataId = decodeURI(params.dataId);
  const decodedAreaId = decodeURI(params.areaId);

  return (
    <div>
      <div>{decodedDataId}</div>
      <div>{decodedAreaId}</div>
      <Image
        src={`/graph_images/${decodedDataId}/${decodedAreaId}.png`}
        width={300}
        height={300}
        alt={decodedDataId + decodedAreaId}
        priority={true}
        // placeholder="blur"
      />
    </div>
  );
}

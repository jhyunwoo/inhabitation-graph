import dataIdToText from "@/lib/dataIdToText";
import { Metadata } from "next";

type Props = {
  params: { dataId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: dataIdToText(decodeURI(params.dataId)),
  };
}

export default function AreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

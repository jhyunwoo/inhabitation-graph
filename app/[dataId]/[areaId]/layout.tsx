import dataIdToText from "@/lib/dataIdToText";
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

export default function AreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

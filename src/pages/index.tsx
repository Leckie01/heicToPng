import { Inter } from "@next/font/google";
import { Grid, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import { HeaderAction } from "@/components/HeaderAction";

const links = [
  {
    link: "/",
    label: "FAQ",
  },
  {
    link: "/",
    label: "contact",
  },
];

const DynamicDropzoneButton = dynamic(
  () => import("@/components/DropzoneButton"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Grid justify={"center"}>
        <Grid.Col xs={3}>
          <HeaderAction links={links} />
          <DynamicDropzoneButton />
        </Grid.Col>
      </Grid>
    </>
  );
}

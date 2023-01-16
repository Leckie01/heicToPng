import { Inter } from "@next/font/google";
import { Grid, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import { HeaderAction } from "@/components/HeaderAction";
import { FooterLinks } from "@/components/FooterLinks";

const links = [
  {
    link: "mailto:hsk0094@gmail.com",
    label: "contact",
  },
];

const DynamicDropzoneButton = dynamic(
  () => import("@/components/DropzoneButton"),
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Grid justify={"center"} style={{ height: "100%" }}>
        <Grid.Col
          xs={3}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div style={{ flex: 1 }}>
            <HeaderAction links={links} />
            <DynamicDropzoneButton />
          </div>

          <div>
            <FooterLinks data={[]} />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

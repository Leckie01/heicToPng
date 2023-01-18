import { Grid, Text } from "@mantine/core";
import dynamic from "next/dynamic";
import { HeaderAction } from "@/components/HeaderAction";
import { FooterLinks } from "@/components/FooterLinks";

const links: {
  link: string;
  label: string;
  links?: { link: string; label: string }[] | undefined;
}[] = [];

const DynamicDropzoneButton = dynamic(
  () => import("@/components/DropzoneButton"),
  { ssr: false }
);

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url('/background.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        justify={"center"}
        style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
      >
        <Grid.Col
          xs={3}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#fff",
            // -webkit-box-shadow: 0px 0px 15px 5px #000000;
            boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
          }}
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

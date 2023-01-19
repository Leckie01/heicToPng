import { Grid } from "@mantine/core";
import dynamic from "next/dynamic";
import { HeaderAction } from "@/components/HeaderAction";
import { FooterLinks } from "@/components/FooterLinks";
import { Faq } from "@/components/Faq";

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
        backgroundImage: `url('/background.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
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
            // height: "100%",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ flex: 1 }}>
            <HeaderAction links={links} />
            <DynamicDropzoneButton />
          </div>

          <div>
            <Faq />
            <FooterLinks data={[]} />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

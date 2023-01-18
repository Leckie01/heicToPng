import { Container, Title, Accordion, createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    // paddingTop: theme.spacing.xl * 2,
    // paddingBottom: theme.spacing.xl * 2,
    // minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function Faq() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            <Text weight={500} style={{ letterSpacing: 0.7 }}>
              What is HEIC file?
            </Text>
          </Accordion.Control>
          <Accordion.Panel style={{ letterSpacing: "0.7", lineHeight: 1.6 }}>
            {`
                  An HEIC file contains one or more images saved in the High
                  Efficiency Image Format (HEIF), a file format most commonly
                  used to store photos on iOS devices. It contains an image or
                  sequence of images likely created by an iPhone or iPad's
                  Camera app, as well as metadata describing each image. HEIC
                  files are most commonly saved with the .heic extension but may
                  also be saved as .HEIF files.`}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="it-is-free">
          <Accordion.Control>
            <Text weight={500} style={{ letterSpacing: 0.7 }}>
              No limits conversions
            </Text>
          </Accordion.Control>
          <Accordion.Panel style={{ letterSpacing: "0.7", lineHeight: 1.6 }}>
            {`
                HEIC to PNG is an online converter with unlimited conversion. You can convert any number of files.`}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

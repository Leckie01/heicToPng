import { useRef, useState } from "react";
import {
  Text,
  Group,
  Button,
  createStyles,
  Grid,
  Divider,
  Loader,
} from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons";
import heic2any from "heic2any";
const getByteSize = (size: number) => {
  const byteUnits = ["KB", "MB", "GB", "TB"];

  for (let i = 0; i < byteUnits.length; i++) {
    size = Math.floor(size / 1024);

    if (size < 1024) return size.toFixed(1) + byteUnits[i];
  }
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: 250,
    left: "calc(50% - 125px)",
    bottom: -20,
  },
}));

function DropzoneButton() {
  const { classes, theme } = useStyles();
  const [file, setFile] = useState<Blob | Blob[]>();
  const [fileName, setFileName] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRejected, setIsRejected] = useState<boolean>(false);
  const openRef = useRef<() => void>(null);

  const downloadConvertedFile = (blob: Blob) => {
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.style.display = "none";
    link.download = fileName + "";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(fileUrl);
  };

  return (
    <>
      <div className={classes.wrapper} style={{ marginBottom: "60px" }}>
        <Dropzone
          multiple={false}
          openRef={openRef}
          onReject={() => setIsRejected(true)}
          onDrop={async (files) => {
            setIsLoading(true);
            setIsRejected(false);
            const result = await heic2any({ blob: files[0] });

            setFileName(files[0]?.name.split(".")[0] || "image");
            setFile(result);
            setIsLoading(false);
          }}
          className={classes.dropzone}
          radius="md"
          // onReject={}
          accept={["image/heic", "image/heif"]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: "none" }}>
            <Group position="center">
              <Dropzone.Accept>
                <IconDownload
                  size={50}
                  color={theme.colors[theme.primaryColor][6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  size={50}
                  color={
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.black
                  }
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>

            <Text align="center" weight={700} size="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload heic File</Dropzone.Idle>
            </Text>
            <Text align="center" size="sm" mt="xs" color="dimmed">
              Drag&apos;n&apos;drop files here to upload.
            </Text>
          </div>
        </Dropzone>

        <Button
          className={classes.control}
          size="md"
          radius="xl"
          onClick={() => openRef.current?.()}
        >
          Select file to convert
        </Button>
      </div>
      {isRejected === true && (
        <Text size="sm" weight={500} align="center" color="#FF4D4F">
          Cannot convert if it is not a heic file.
        </Text>
      )}

      {isLoading === true && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      )}
      {isLoading === false && file && (
        <>
          <Divider style={{ marginBottom: "30px" }} />
          <Text size="xs" color="#777" style={{ padding: "0 10px" }}>
            Processed 1 image
          </Text>
          <div
            style={{
              padding: "0 10px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div>
              <Text size="sm">{`${fileName}.png`}</Text>
              <Text size="xs" color="#777">
                {/* @ts-ignore */}
                {getByteSize(file.size)}
              </Text>
            </div>
            {/* @ts-ignore */}
            <Button onClick={() => downloadConvertedFile(file)}>
              Download
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default DropzoneButton;

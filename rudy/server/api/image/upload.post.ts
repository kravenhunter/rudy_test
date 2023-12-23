/* eslint-disable unicorn/prefer-includes */
import { defineEventHandler } from "#imports";
import type { H3Error, MultiPartData } from "h3";
import { randomUUID } from "node:crypto";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

const storage = createStorage({
  driver: fsLiteDriver({ base: "./public/image/upload" }),
});

const FILES_KEYS = ["name", "filename", "type", "data"];
const isFile = (data: MultiPartData) => {
  return (
    Object.keys(data).filter((key) => FILES_KEYS.indexOf(key) !== -1).length === FILES_KEYS.length
  );
};
const saveFile = async (file: MultiPartData) => {
  const [_mime, ext] = String(file.type).split("/");
  const currentName = String(file.name).split(".");
  const fileName = `${randomUUID()}_${currentName[0]}.${ext}`;

  await storage.setItemRaw(fileName, file.data);

  return fileName;
};
export default defineEventHandler(async (event) => {
  try {
    const body = await readMultipartFormData(event);

    if (body?.length) {
      const filename = await saveFile(body[0]);
      return filename;
    }
    return "Emty File";
  } catch (error) {
    const errorResult = error as H3Error;
    throw createError({
      statusCode: errorResult.statusCode,
      message: errorResult.message,
      statusMessage: errorResult.statusMessage,
    });
  }
});

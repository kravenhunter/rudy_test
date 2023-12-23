import { PrismaClient } from "@prisma/client";
import type { H3Error } from "h3";

const prismaCLient = new PrismaClient();

export default defineEventHandler(async () => {
  try {
    const result = await prismaCLient.post.findMany();

    if (!result.length) {
      throw createError({
        statusCode: 404,
        message: "No any records in database ",
      });
    }
    // prismaCLient.$disconnect()
    return result;
  } catch (error) {
    const errorResult = error as H3Error;
    throw createError({
      statusCode: errorResult.statusCode,
      message: errorResult.message,
      statusMessage: errorResult.statusMessage,
    });
  }
});

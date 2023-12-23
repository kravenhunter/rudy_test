import { defineEventHandler } from "#imports";
import { PrismaClient } from "@prisma/client";
import type { H3Error } from "h3";

const prismaCLient = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const result = await prismaCLient.price.delete({
      where: {
        id: event?.context?.params?.id,
      },
    });

    if (!result) {
      // throw new Error("");
      throw createError({
        statusCode: 405,
        statusMessage: "Wrong Id ",
      });
    }

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

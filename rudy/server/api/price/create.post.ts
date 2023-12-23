import { defineEventHandler, readBody } from "#imports";
import { PrismaClient } from "@prisma/client";
import type { H3Error } from "h3";

const prismaCLient = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const result = await prismaCLient.price.create({
      data: body,
    });

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

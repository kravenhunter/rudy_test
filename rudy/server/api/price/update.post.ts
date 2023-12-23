import { defineEventHandler, readBody } from "#imports";
import { PrismaClient, type Price } from "@prisma/client";
import type { H3Error } from "h3";

const prismaCLient = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Price[]>(event);

    body.forEach(async (el) => {
      await prismaCLient.price.update({
        where: { id: el.id },
        data: {
          title: el.title,
          Price: el.Price,
        },
      });
    });

    return "Success";
  } catch (error) {
    const errorResult = error as H3Error;
    throw createError({
      statusCode: errorResult.statusCode,
      message: errorResult.message,
      statusMessage: errorResult.statusMessage,
    });
  }
});

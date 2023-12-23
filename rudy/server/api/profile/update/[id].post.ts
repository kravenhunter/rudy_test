import { defineEventHandler, readBody } from "#imports";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import type { H3Error } from "h3";

const prismaCLient = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { email, name, password } = await readBody(event);

    if (!email || !name || !password) {
      throw createError({
        statusCode: 405,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }
    // console.log("User ID", event?.context?.params?.id);
    // console.log("Credatrialc", { email, name, password });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prismaCLient.user.update({
      where: { id: event?.context?.params?.id },
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return { ...user, hashedPassword: undefined };
  } catch (error) {
    const errorResult = error as H3Error;
    throw createError({
      statusCode: errorResult.statusCode,
      message: errorResult.message,
      statusMessage: errorResult.statusMessage,
    });
  }
});

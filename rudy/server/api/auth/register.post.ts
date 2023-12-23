import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import type { H3Error } from "h3";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const { email, userName, password } = await readBody(event);

  try {
    if (!email || !userName || !password) {
      throw createError({
        statusCode: 405,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        name: userName,
        hashedPassword,
      },
    });

    return user;
  } catch (error) {
    const errorResult = error as H3Error;
    throw createError({
      statusCode: errorResult.statusCode,
      message: errorResult.message,
      statusMessage: errorResult.statusMessage,
    });
  }
});

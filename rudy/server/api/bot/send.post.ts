import { defineEventHandler, readBody } from "#imports";

import type { H3Error } from "h3";

const token = "6888597466:AAGYkPXMKrNanFcWMv9YPY_i_2M0WXdzTrI";
const chat_id = "870836485";

const API_URL = `https://api.telegram.org/bot${token}/sendMessage`;
interface IMessage {
  text: string;
}
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<string>(event);

    const result = await $fetch(API_URL, {
      method: "POST",
      body: {
        chat_id,
        parse_mode: "html",
        text: body,
      },
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

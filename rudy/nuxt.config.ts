/* eslint-disable n/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    public: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  },

  css: ["~/assets/styles/global.scss"],
  modules: ["@pinia/nuxt", "@nuxt/image", "@sidebase/nuxt-auth"],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs",
      addDefaultCallbackUrl: "/guard/auth/login",
    },

    session: {
      enableRefreshOnWindowFocus: false, //default - true
      enableRefreshPeriodically: false, // default -false , 1000 ms /1 sec
    },
  },
  app: {
    pageTransition: { name: "dashoard", mode: "out-in" },
    head: {
      titleTemplate: "%s | Rudy Studio",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        //  { hid: "description", name: "description", content: "the whole world daily news" },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
});

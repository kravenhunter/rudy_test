import { acceptHMRUpdate, defineStore } from "pinia";

import type { IError, IPrice, IPriceUpdate } from "@/types/IType";
import type { Price } from "@prisma/client";
import type { H3Error } from "h3";

export const usePriceStore = defineStore("price-list", () => {
  const apiUrl = "/api";
  const priceList = ref<Price[] | null>();

  const errorStatus = ref<IError>({ statusCode: 0, message: "" });

  /**
   * async Function Returns  isExistPost
   *  @param {string} id   state
   * @return {boolean}  boolean
   *
   **/
  const isExistPrice = (id: string) => priceList.value?.some((el) => el.id === id);

  /**
   * async Function Returns  getpriceList
   * @return {Promise<void>}  Promise void
   **/

  async function getPriceList() {
    try {
      const data = await $fetch<Price[]>(`${apiUrl}/price/list`);

      priceList.value = data;
    } catch (error) {
      const errorResult = error as H3Error;
      // console.log(` ErrorMessage: `, errorResult.message);
    }
  }

  /**
   * async Function Returns  refetchData
   * @return {Promise<void>}  Promise void
   **/
  const refetchData = async () => {
    await getPriceList();
  };

  /**
   * async Function Returns  addPost result
   * @param {FileList} filList   FileList
   *  @param {IPrice} state   IPrice
   * @return {Promise<string>}  Promise string
   *
   **/
  const addPrice = async (content: IPrice): Promise<string> => {
    try {
      const data = await $fetch<Price>(`${apiUrl}/price/create`, {
        method: "post",
        body: JSON.stringify(content),
      });

      await refetchData();
      return "Success";
    } catch (error) {
      const errorResult = error as H3Error;
      // console.log(` ErrorMessage: `, errorResult.message);
      return "Error";
    }
  };

  /**
   * async Function Returns  updatePost result


   *  @param {Price} state   Price
   * @return {Promise<string>}  Promise string
   *
   **/
  const updatePrice = async (content: IPriceUpdate[]): Promise<string> => {
    try {
      const data = await $fetch(`${apiUrl}/price/update`, {
        method: "post",
        body: JSON.stringify(content),
      });

      await refetchData();

      return "Success";
    } catch (error) {
      const errorResult = error as H3Error;
      // console.log(` ErrorMessage: `, errorResult.message);
      return "Error";
    }
  };

  /**
   * async Function Returns  findArticlesByName result
   *  @param {string} search   string
   * @return {Price[]}  Price[]
   *
   **/
  //   const findArticlesByName = (search: string) => {
  //     const getSearchResult = postsState.priceList.filter((el) => el.title?.includes(search));
  //     return getSearchResult;
  //   };

  /**
   * async Function Returns  getArticleById result
   *  @param {string} id   string
   * @return {Price}  Price
   *
   **/
  const getPriceById = (id: string) => {
    const getItem = priceList.value?.find((el) => el.id === id);

    return getItem;
  };

  /**
   * async Function Returns  deletePost result
   *  @param {string} id   string
   * @return { Promise<void>}   Promise<void>
   *
   **/
  const deletePrice = async (idData: string) => {
    const getPostById = isExistPrice(idData);

    if (getPostById) {
      try {
        const data = await $fetch<string>(`${apiUrl}/price/delete-by-id/${idData}`);

        console.log(data);
        await refetchData();
        return "Success";
      } catch (error) {
        const errorResult = error as H3Error;
        console.log(` ErrorMessage: `, errorResult.message);
        return "Error";
      }
    } else {
      return "Wrong Id";
    }
  };

  return {
    priceList,

    getPriceList,
    refetchData,
    isExistPrice,
    getPriceById,
    addPrice,
    updatePrice,
    deletePrice,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePriceStore, import.meta.hot));
}

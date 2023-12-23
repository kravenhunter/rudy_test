import { acceptHMRUpdate, defineStore } from "pinia";

import type { IError, IPost } from "@/types/IType";
import type { Post } from "@prisma/client";
import type { H3Error } from "h3";

export const useArticleStore = defineStore("article-list", () => {
  const apiUrl = "/api";
  const postList = ref<Post[] | null>();

  const searchList = ref<Post[] | undefined>();
  const errorStatus = ref<IError>({ statusCode: 0, message: "" });

  /**
   * async Function Returns  isExistPost
   *  @param {string} id   state
   * @return {boolean}  boolean
   *
   **/
  const isExistPost = (id: string) => postList.value?.some((el) => el.id === id);

  /**
   * async Function Returns  getPostList
   * @return {Promise<void>}  Promise void
   **/

  async function getPostList() {
    try {
      const data = await $fetch<Post[]>(`${apiUrl}/post/list`);

      postList.value = data;
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
    await getPostList();
  };

  /**
   * async Function Returns  addPost result
   * @param {FileList} filList   FileList
   *  @param {Post} state   IArticle
   * @return {Promise<string>}  Promise IError
   *
   **/
  const addPost = async (content: IPost): Promise<string> => {
    try {
      const data = await $fetch<Post>(`${apiUrl}/post/create`, {
        method: "post",
        body: JSON.stringify(content),
      });

      data && postList.value?.unshift(data);

      return "Success";
    } catch (error) {
      const errorResult = error as H3Error;
      // console.log(` ErrorMessage: `, errorResult.message);
      return "Error";
    }
  };

  /**
   * async Function Returns  updatePost result
   * @param {string} idData   string
   * @param {FileList | undefined} filList   FileList | undefined
   *  @param {IArticle} state   IArticle
   * @return {Promise<string>}  Promise string
   *
   **/
  const updatePost = async (idData: string, content: IPost): Promise<string> => {
    const getPostById = isExistPost(idData);

    if (getPostById) {
      try {
        const data = await $fetch<Post>(`${apiUrl}/post/update/${idData}`, {
          method: "post",
          body: JSON.stringify(content),
        });

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

  /**
   * async Function Returns  findArticlesByName result
   *  @param {string} search   string
   * @return {IArticle[]}  IArticle[]
   *
   **/
  //   const findArticlesByName = (search: string) => {
  //     const getSearchResult = postsState.postList.filter((el) => el.title?.includes(search));
  //     return getSearchResult;
  //   };

  /**
   * async Function Returns  getArticleById result
   *  @param {string} id   string
   * @return {Post}  IArticle
   *
   **/
  const getArticleById = (id: string) => {
    const getItem = postList.value?.find((el) => el.id === id);

    return getItem;
  };

  /**
   * async Function Returns  deletePost result
   *  @param {string} id   string
   * @return { Promise<void>}   Promise<void>
   *
   **/
  const deletePost = async (idData: string) => {
    const getPostById = isExistPost(idData);

    if (getPostById) {
      try {
        const { data, error } = await useFetch<string>(`${apiUrl}/post/delete-by-id/${idData}`);

        if (error.value) {
          throw error.value;
        }
        // console.log(data.value);
        await refetchData();
        return "Success";
      } catch (error) {
        const errorResult = error as H3Error;
        // console.log(` ErrorMessage: `, errorResult.message);
        return "Error";
      }
    } else {
      return "Wrong Id";
    }
  };

  return {
    postList,
    searchList,
    getPostList,
    refetchData,
    isExistPost,
    getArticleById,
    addPost,
    updatePost,
    deletePost,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot));
}

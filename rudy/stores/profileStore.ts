import { acceptHMRUpdate, defineStore } from "pinia";

import type { IUser } from "@/types/IType";
import type { User } from "@prisma/client";
import type { H3Error } from "h3";

export const useProfileStore = defineStore("profile-list", () => {
  const apiUrl = "/api";
  const profileList = ref<IUser[] | null>();

  /**
   * async Function Returns  isExistPost
   *  @param {string} id   state
   * @return {boolean}  boolean
   *
   **/
  const isExistProfile = (id: string) => profileList.value?.some((el) => el.id === id);

  /**
   * async Function Returns  getProfileList
   * @return {Promise<void>}  Promise void
   **/

  async function getProfileList() {
    try {
      const data = await $fetch<User[]>(`${apiUrl}/profile/list`);
      profileList.value = [];
      data &&
        data.forEach((el) => {
          profileList.value?.push({
            id: el.id,
            name: el?.name ?? "",
            email: el?.email ?? "",
            password: "",
          });
        });
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
    await getProfileList();
  };

  /**
   * async Function Returns  updatePost result


   *  @param {Price} state   Price
   * @return {Promise<string>}  Promise string
   *
   **/
  const updateProfile = async (content: IUser): Promise<string> => {
    try {
      const data = await $fetch(`${apiUrl}/profile/update/${content.id}`, {
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
   * async Function Returns  getArticleById result
   *  @param {string} id   string
   * @return {Price}  Price
   *
   **/
  const getProfileById = (id: string) => {
    const getItem = profileList.value?.find((el) => el.id === id);

    return getItem;
  };

  return {
    profileList,

    getProfileList,
    refetchData,
    isExistProfile,
    getProfileById,

    updateProfile,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot));
}

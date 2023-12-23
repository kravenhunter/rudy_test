<script setup lang="ts">
const { signOut } = useAuth();

const nav = [
  {
    title: "Articles",
    link: "/guard",
    iconName: "vaadin:home-o",
  },
  {
    title: "Prices",
    link: "/guard/price",
    iconName: "carbon:category-new-each",
  },
  {
    title: "Profile",
    link: "/guard/profile",
    iconName: "ph:users-three",
  },
];
const isExpanded = ref(false);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};

const logOutHandler = async () => {
  try {
    await signOut({
      callbackUrl: "/guard/auth/login",
      redirect: true,
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <aside :class="isExpanded && 'is_expanded'">
    <div class="logo grid_block">
      <UiElementsNuxtIcon />
    </div>

    <div class="menu_toglle_wrap">
      <button type="button" title="toggle_button" class="menu_toggle" @click="toggleMenu">
        <span class="material_icon">
          <UiElementsIcons
            icon-name="ri:arrow-right-double-fill"
            color-icon="white"
            size-width="35"
            size-heigth="35" />
        </span>
      </button>
    </div>
    <h3>Admin Panel</h3>
    <div class="admin_menu">
      <UiElementsAddLink
        v-for="(item, index) in nav"
        :key="index"
        class="button"
        :to-path="item.link">
        <span class="material_icon">
          <UiElementsIcons
            :icon-name="item.iconName"
            color-icon="white"
            size-width="35"
            size-heigth="35" />
        </span>
        <span class="menu_text">{{ item.title }}</span>
      </UiElementsAddLink>
    </div>
    <div class="empty_block">
      <UiElementsAddLink class="button" to-path="/">
        <span class="material_icon">
          <UiElementsIcons
            icon-name="icon-park-outline:back"
            color-icon="white"
            size-width="30"
            size-heigth="30" />
        </span>
        <span class="menu_text">Back to Site</span>
      </UiElementsAddLink>

      <UiElementsAddButton
        @click="logOutHandler"
        paddings="0px"
        class="button log_out"
        title="Log Out"
        type="button">
        <span class="material_icon">
          <UiElementsIcons
            icon-name="tabler:logout"
            color-icon="white"
            size-width="30"
            size-heigth="30" />
        </span>
        <span class="menu_text">Log Out</span>
      </UiElementsAddButton>
    </div>
  </aside>
</template>

<style scoped lang="scss">
aside .logo {
  grid-template-columns: calc(2rem + 10px);
  justify-content: center;
}
.grid_block {
  display: grid;
}

aside .admin_menu {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 150px;
}

aside .empty_block {
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
  & a,
  button {
    height: 48px;
  }
  & button {
    border: none;
  }
}
aside {
  display: grid;
  grid-template-rows: 40px 40px 50px;
  grid-template-columns: calc(2rem + 20px);

  background-color: var(--color-dark);
  color: var(--color-light);

  overflow: hidden;
  min-height: 100vh;
  padding: 1.3rem;
  transition: 0.3s ease-out;
}
@media (max-width: 768px) {
  aside {
    position: fixed;
    z-index: 99;
  }
}

aside h3,
.button .menu_text {
  opacity: 0;
  transition: 0.2s ease-out;
}

aside .button {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.1rem;

  column-gap: 20px;
}
.router-link-active {
  border-right: 5px solid var(--color-green);
}
aside .button:hover,
.router-link-active {
  background-color: var(--color-darkGrey);

  .material_icon,
  .menu_text {
    color: var(--color-green);
  }
}

aside .menu_text {
  font-size: 1.1rem;
}
aside .menu_toggle {
  background-color: transparent;
  cursor: pointer;
  border: none;
  transition: 0.2s ease-out;
}

aside .menu_toggle:hover {
  transform: translateX(0.5rem);
  transition: 0.2s ease-out;
}

aside .menu_toglle_wrap {
  display: flex;
  justify-content: flex-end;
}
.is_expanded {
  grid-template-columns: 300px;

  h3,
  .button .menu_text {
    opacity: 1;
    transition: 0.6s ease-out;
  }
}
.is_expanded .menu_toggle {
  rotate: calc(-180deg);
}
</style>

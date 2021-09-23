<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> {{ title}} </v-list-item-title>
        <v-list-item-subtitle> {{ subtitle }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav v-if="isUser">
      <v-list-item v-for="item in userItems" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
         <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["title", "isUser"],
  data() {
    return {
      subtitle: "Menu Principal",
      userItems: [
        { title: "Perfil de Usuario", icon: "mdi-account", path: "/datosusuario" },
        { title: "Toma de Presion", icon: "mdi-water", path:"/tomapresion" },
      ],
      items: [
         { title: "Home", icon: "mdi-home", path: "/" },
         { title: "Acerca de", icon: "mdi-information", path: "/about" },
      ],
    };
  }
};
</script>

<style>
</style>
<template>
  <v-app>
    <DrawerBar :drawer="drawer" :title="name" :key="updateBars"></DrawerBar>

    <AppBar
      :title="name"
      :drawer="drawer"
      @switch-drawer="switchDrawer"
      @log-out="updateBars--"
      :key="updateBars"
    ></AppBar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <transition name="slide" mode="out-in">
          <router-view @log-in="updateBars++"></router-view>
        </transition>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import DrawerBar from "./components/DrawerBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    DrawerBar,
  },
  data: () => ({
    name: "Health control",
    drawer: null,
    updateBars: 1,
  }),
  updated() {
    console.log("app actualizada");
  },
  methods: {
    switchDrawer(value) {
      this.drawer = value;
    },
  },
};
</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>

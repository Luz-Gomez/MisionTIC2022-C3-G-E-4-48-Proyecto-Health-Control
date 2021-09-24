<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#65B3FC"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
    
    <router-view></router-view>

    </v-sheet>
  </v-card>
  
</template>


<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style>
.v-app-bar-title__content {
  width: 200px;
}
</style>
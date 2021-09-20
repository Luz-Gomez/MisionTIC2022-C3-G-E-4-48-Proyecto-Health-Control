<template>
  <div id="app">
    <h1>Bienvenidos a Health control</h1>
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Acerca de</router-link> |
      <router-link to="/registro">Regístrate</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #65B3FC;
}

#nav {
  padding: 30px;
  color: #65B3FC;
}

#nav a {
  font-weight: bold;
  color: #65B3FC;
}

#nav a.router-link-exact-active {
  color: #FFBE5E
}
</style>

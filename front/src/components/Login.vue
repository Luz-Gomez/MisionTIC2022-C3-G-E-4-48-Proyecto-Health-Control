<template>
  <v-form>
    <v-text-field
      label="Email"
      prepend-icon="mdi-at"
      :rules="rulesEmail"
      hide-details="auto"
      v-model="email"
    ></v-text-field>

    <v-text-field
      label="Contraseña"
      prepend-icon="mdi-lock"
      :rules="rulesPassword"
      hide-details="auto"
      v-model="password"
      type="password"
    ></v-text-field>

    <v-spacer></v-spacer>
    <div>
      <v-btn id="boton" color="primary" v-on:click="loginFunction()"
        >Login</v-btn
      >
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      rulesEmail: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
    };
  },
  methods: {
    loginFunction() {
      console.log("print email " + this.email);
      sessionStorage.setItem("username", this.email);
      sessionStorage.setItem("role", "admin");
      this.$emit("logged", undefined);
      window.location.reload();
    },
  },
};
</script>

<style scoped>
#boton {
  margin-top: 50px;
  float: inline-end;
}
</style>
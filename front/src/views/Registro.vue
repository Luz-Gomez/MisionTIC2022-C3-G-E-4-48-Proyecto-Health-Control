<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal primary">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Bienvenido de vuelta!</h1>
                    <h5 class="text-center">
                      Para acceder a nuestros servicios, por favor ingresa a tu
                      cuenta
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn
                      to="/IniciarSesion"
                      rounded
                      color="#FFBE5E"
                      dark
                      @click="step--"
                      >Ingresar</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-1 primary--text">
                      Crea tu cuenta
                    </h1>
                    <h4 class="text-center mt-4 primary--text">
                      Agrega tu mejor correo para registrarte
                    </h4>
                    <v-form>
                      <v-text-field
                        label="Mail"
                        name="Mail"
                        :rules="rulesMail"
                        prepend-icon="mdi-at"
                        type="text"
                        color="#65B3FC"
                        v-model="mail"
                      ></v-text-field>
                      <v-radio-group v-model="tipo" row>
                        <v-radio label="Usuario" value="usuario"></v-radio>
                        <v-radio label="Medico" value="medico"></v-radio>
                      </v-radio-group>
                      <v-text-field
                        id="password"
                        label="Contraseña"
                        name="password"
                        :rules="rulesContraseña"
                        :type="showPassword ? 'text' : 'password'"
                        prepend-icon="mdi-lock"
                        color="#65B3FC"
                        @click:append="showPassword = !showPassword"
                        v-model="contraseña"
                      ></v-text-field>
                    </v-form>
                    <v-alert
                      border="left"
                      dense
                      outlined
                      type="warning"
                      v-if="showError"
                    >
                      {{ error }}
                    </v-alert>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn rounded color="#FFBE5E" dark @click="insert()"
                      >Regístrate</v-btn
                    >
                  </div>
                  <br /><br />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { insertUsuario } from "../services/Registro.Service";

export default {
  data() {
    return {
      step: 1,
      tipo: "",
      mail: "",
      contraseña: "",
      rulesMail: [
        (value) => !!value || "Requerido.",
        (value) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "E-mail debe ser válido",
      ],
      rulesContraseña: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      showError: false,
      showPassword: false,
      error: "",
    };
  },
  props: {
    source: String,
  },
  methods: {
    insert() {
      if (
        this.mail == undefined ||
        this.mail == "" ||
        this.contraseña == undefined ||
        this.contraseña == "" ||
        this.tipo == undefined ||
        this.tipo == ""
      ) {
        console.error("Registre Datos obligatorios");
        return;
      }
      let request = null;
      const usuarios = {
        mail: this.mail,
        tipo: this.tipo,
        contraseña: this.contraseña,
      };

      request = insertUsuario(usuarios);
      request
        .then(() => this.$router.push("/IniciarSesion"))
        .catch((err) => console.error(err));
    },
  },
};
</script>

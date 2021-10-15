<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 primary--text">
                      Ingresa a tu perfil Health control
                    </h1>
                    <h4 class="text-center mt-4 primary--text">
                      Ingresa el email con el que te registraste
                    </h4>
                    <v-text-field
                      label="Mail"
                      name="Mail"
                      :rules="rulesMail"
                      prepend-icon="mdi-at"
                      type="text"
                      color="#65B3FC"
                      v-model="mail"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Contraseña"
                      name="password"
                      :rules="rulesContraseña"
                      :type="showPassword ? 'text' : 'password'"
                      prepend-icon="mdi-lock"
                      color="#65B3FC"
                      v-model="contraseña"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
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
                    <v-btn runded color="#FFBE5E" dark @click="loginFunction()"
                      >Ingresa</v-btn
                    >
                    <br /><br />
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="teal primary">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">¿No tienes cuenta?</h1>
                    <h5 class="text-center">
                      Ingresa tu información personal para empezar a cuidarte
                      con nosotros
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn to="/Registro" rounded color="#FFBE5E" dark
                      >Regístrate</v-btn
                    >
                  </div>
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
import { validarUsuario } from "../services/Login.Service";

export default {
  data() {
    return {
      step: 1,
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
    loginFunction() {
      validarUsuario(this.mail, this.contraseña)
        .then((respuesta) => {
          const usuario = respuesta.data;
          sessionStorage.setItem("mail", usuario.mail);
          sessionStorage.setItem("tipo", usuario.tipo);
          this.$emit("log-in", undefined);
          if (sessionStorage.getItem("tipo") == "usuario") {
            this.$router.push("/DatosUsuario");
          } else {
            this.$router.push("/DatosMedico");
          }
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.response.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
  },
};
</script>



<template>
  <div class="home">
    <body>
      <h1>Cuida tu presión arterial</h1>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/logoHealthControl.png"
        max-height="50"
        max-width="950"
        min-height="50"
        min-width="200"
        position="center center"
        light="true"
        src="../assets/imagenes/logoHealthControl.png"
      ></v-img>

      <p>La aplicación que te permitirá registrar tus tomas de presión, así como llevar un control periódico sobre tus registros. Puedes acceder a tus 
        registros en todo momento y lugar, así como obtenerlos en formato pdf o directamente en tu correo. En health control, queremos ayudarte 
        a cuidar tu salud. Únete a la comunidad Health control y disfruta de nuestros servicios.
      </p>

       <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 primary--text">Ingresa a tu perfil Health control</h1>
                        <h4 class="text-center mt-4 primary--text">Ingresa el email con el que te registraste</h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            :rules="rulesEmail"
                            prepend-icon="mdi-at"
                            type="text"
                            color="#65B3FC"
                            v-model="mail"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            :rules="rulesPassword"
                            :type="showPassword ? 'text' : 'password'"
                            prepend-icon="mdi-lock"
                            color="#65B3FC"
                            v-model="password"
                            @click:append="showPassword = !showPassword"
                          />
                        </v-form>
                        <v-alert border="left" color="red lighten-2" dark v-model="showError">
                          {{ error }}
                        </v-alert>
                      </v-card-text>
                      <div class="text-center">
                        <v-card-actions>
                          <v-spacer></v-spacer>
                        <v-btn rounded color="#FFBE5E" dark v-on:click="loginFunction()">Ingresa</v-btn>
                        </v-card-actions>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal primary">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">¿No tienes cuenta?</h1>
                        <h5
                          class="text-center"
                        >Ingresa tu información personal para empezar a cuidarte con nosotros</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded color="#FFBE5E" dark @click="step++">Regístrate</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal primary">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bienvenido de vuelta!</h1>
                        <h5
                          class="text-center"
                        >Para acceder a nuestros servicios, por favor ingresa a tu cuenta</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded color="#FFBE5E" dark @click="step--">Ingresar</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 primary--text">Crea tu cuenta</h1>
                        
                        <h4 class="text-center mt-4 primary--text">Agrega tu mejor correo para registrarte</h4>
                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="#65B3FC"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-at"
                            type="text"
                            color="#65B3FC"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="#65B3FC"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="#FFBE5E" dark>Regístrate</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        </body>
  </div>
</template>

<style>
body {
  background-color: #65b3fc;
}

#logo {
  display: block;
  margin: auto;
  padding: 250px 100px 15px 25px;
}
h1 {
  text-align: left;
  font-family:  monospace;
  font-size: 30px;
  padding: 50px 25px 20px 25px;
  color: white;
}

p {
  text-align: justify;
  font-family: monospace;
  font-size: 20px;
  padding: 10px 100px 10px 100px;
  color: whitesmoke;
}
</style>

<script>
import {validarUsuario} from "../services/Login.Service";

export default {
  data: () => ({
    step: 1,
    return: {
      mail: "",
      password: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      rulesMail: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      rulesContraseña: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      showError: false,
      error: ""
    },
  }),
  props: {
    source: String
  },
  methods: {
    loginFunction() {

      validarUsuario(this.mail, this.contraseña)
      .then((respuesta) => {
        const usuario = respuesta.data;
        sessionStorage.setItem("mail", usuario.mail);
        sessionStorage.setItem("tipo", usuario.tipo);
        this.$emit("logged", undefined);
        window.location.reload();
      })
  .catch((err) => {
    this.showError = true;
    this.error = err.respuesta.data.message;
    setInterval(() => {
      this.showError = false;
    }, 3000);
  });
       
    },
  },
};
</script>




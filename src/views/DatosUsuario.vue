<template>
<body>
  <v-form>
    <v-container>
      <h2>Perfil del Usuario</h2>
      <h3>Completa la informacion de tu perfil y disfruta de nuestros servicios</h3>
      <v-row>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Nombre"
            solo
            :rules="nameRules"
            hide-details="auto"
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Apellido"
            solo
            :rules="nameRules"
            hide-details="auto"
            v-model="name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="10" sm="4"> 
          <v-date-picker
            v-model="picker"
          ></v-date-picker>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h3>Los datos a continuacion son opcionales</h3>
      <h5>
        Si desea que la aplicacion calcule su IMC y Categoria de peso diligencie
        la siguiente información
      </h5>
      <v-row>
        <v-col cols="4" sm="2">
          <v-text-field
            label="Estatura en mts"
            solo
            value="0.00"
            suffix="mts"
            v-model="estatura"
          ></v-text-field>
        </v-col>
        <v-col cols="4" sm="2">
          <v-text-field
            label="Peso"
            solo
            value="00.0"
            suffix="Kgr"
            v-model="peso"
          ></v-text-field>
        </v-col>
      </v-row>
      <h5>
        Si desea que podamos contactarnos con usted, favor indiquenos un numero
        de celular
      </h5>
     <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Numero celular"
            solo
            :rules="phoneRules"
            hide-details="auto"
            v-model="phoneNumber"
          ></v-text-field>
        </v-col>
      </v-row>
      <h5>
        Si desea que su medico pueda revisar sus datos de presion y
        peso, indiquenos nombre y apellido
      </h5>
      <v-row>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Nombre Medico tratante"
            solo
            :rules="medicoRulers"
            hide-details="auto"
            v-model="medico"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Apellido Medico tratante"
            solo
            :rules="medicoRulers"
            hide-details="auto"
            v-model="medico"
          ></v-text-field>
 
        </v-col>
      </v-row>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label=" Permite que le enviemos alertas a su mail, si no registra datos de toma de presion en 15 dias"
        type="checkbox"
        v-model="alerta"
        required
      ></v-checkbox>
      <v-checkbox 
        :error-messages="errors"
        value="1"
        label=" Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero fuera de esta pagina"
        type="checkbox"
        v-model="visibilidad"
        required
      ></v-checkbox>
      <v-btn rounded dark>Guardar</v-btn>
    </v-container>
  </v-form>
</body>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      fechaNacimiento: "",
      peso: "",
      estatura: "",
      phoneNumber: "",
      medicoTratante: "",
      nameRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
      fechaRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length == 10) || "AAAA/MM/DD",
      ],
      phonerules: [(value) => (value && value.length == 10) || "#########"],
      medicoRules: [
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
  methods: {}
}
</script>

<style>
h2 {
  padding: 10px 10px 10px 10px;
  text-align: center;
  font-family: monospace;
  color: white;
}
h3 {
  padding: 10px 10px 10px 10px;
  text-align: left;
  font-family: monospace;
  color: white;
}
h5 {
  padding: 10px 10px 10px 10px;
  text-align: left;
  font-family: monospace;
  color: white;
}
.v-picker__title {
  background-color: #6590fc;
}
</style>

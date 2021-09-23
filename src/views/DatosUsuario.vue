<template>
  <v-form>
    <v-container>
      <h3>Este es el Perfil del Usuario</h3>
      <v-row>
        <v-col cols="10" sm="10">
          <v-text-field
            label="Nombre y Apellido"
            :rules="nameRules"
            hide-details="auto"
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="6">
          <v-text-field
            label="Fecha de Nacimiento"
            :rules="fechaRules"
            hide-details="auto"
            v-model="fecha"
          ></v-text-field>
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
            value="0.00"
            suffix="mts"
            v-model="estatura"
          ></v-text-field>
        </v-col>
        <v-col cols="4" sm="2">
          <v-text-field
            label="Peso"
            value="00.0"
            suffix="Kgr"
            v-model="peso"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h5>
        Si desea que podamos contactarnos con usted, favor indiquenos un numero
        de celular
      </h5>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Numero celular"
            :rules="phoneRules"
            hide-details="auto"
            v-model="phoneNumber"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h5>
        Si desea que su medico de cabecera pueda revisar sus datos de presion y
        peso, indiquenos su nombre y apellido
      </h5>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Nombre y Apellido Medico tratante"
            :rules="medicoRulers"
            hide-details="auto"
            v-model="medico"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label="Permite que le enviemos alertas a su mail, si no registra datos de toma de presion en 15 dias"
        type="checkbox"
        v-model="alerta"
        required
      ></v-checkbox>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label="Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero fuera de esta pagina"
        type="checkbox"
        v-model="visibilidad"
        required
      ></v-checkbox>
    </v-container>
    <v-row align="center" justify="space-around">
      <v-btn color="success">Guardar</v-btn>
      <v-btn color="light-blue">Tomar Presión</v-btn>
      <v-btn>Home</v-btn>
    </v-row>
  </v-form>
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
    };
  },
};
</script>

<style>

</style>

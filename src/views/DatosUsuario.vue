<template>
 ajustar-app
  <div>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|min:5"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Nombre y Apellido"
            required
          ></v-text-field>
        </validation-provider>

        <v-row justify="center">
          <v-date-picker
            v-model="picker"
            year-icon="mdi-calendar-blank"
            prev-icon="mdi-skip-previous"
            next-icon="mdi-skip-next"
          ></v-date-picker>
        </v-row>

        <validation-provider
          v-slot="{ errors }"
          name="phoneNumber"
          :rules="{
            required: true,
            digits: 10,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
          }"
        >
          <v-text-field
            v-model="phoneNumber"
            :counter="10"
            :error-messages="errors"
            label="Phone Number"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="select" rules="required">
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Select"
            data-vv-name="select"
            required
          ></v-select>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Option"
            type="checkbox"
            required
          ></v-checkbox>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>
  </div>

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
 main
</template>

<script>
export default {
  data() {
    return {
 ajustar-app
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

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
 main
    };
  },
};
</script>

<style>
</style>

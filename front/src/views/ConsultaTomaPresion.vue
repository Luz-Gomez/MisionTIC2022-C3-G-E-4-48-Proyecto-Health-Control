<template>
  <body>
    <v-container>
      <h2>Consulta Toma Presión Arterial</h2>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Mail"
            filled
            hide-details="auto"
            background-color="white"
            disabled
            v-model="mail"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="left">
        <v-col cols="12" sm="6">
          <v-data-table
            :headers="headers"
            :items="tomasPresion"
            :items-per-page="8"
            item-key="mail"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-right">{{ props.item.fecha }}</td>
              <td class="text-xs-right">{{ props.item.sistole }}</td>
              <td class="text-xs-right">{{ props.item.diastole }}</td>
              <td class="text-xs-right">{{ props.item.pulso }}</td>
              <td class="text-xs-right">{{ props.item.presion }}</td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <br /><br />
      <v-row justify="space-around">
        <v-btn rounded color="primary">Generar PDF</v-btn>
        <v-btn to="/About" rounded color="primary">Regresar</v-btn>
        <br /><br />
      </v-row>
      <br /><br />
    </v-container>
  </body>
</template>

<script>
import { getPresion } from "../services/tomaPresion.Service";

export default {
  data() {
    return {
      tomasPresion: [],
      headers: [
        {
          text: "Fecha",
          mask: "date-with-time",
          align: "start",
          sortable: false,
          value: "fecha",
          sort: "fecha",
        },
        { text: "Sístole", value: "sistole" },
        { text: "Diástole", value: "diastole" },
        { text: "Pulsaciones", value: "pulso" },
        { text: "Presión Arterial", value: "presion" },
      ],
    };
  },
  created() {
    const mail = sessionStorage.getItem("mail");
    if (mail != undefined) {
      getPresion(mail)
        .then((response) => {
          this.tomasPresion = response.data;
        })
        .catch((err) => console.error(err));
    }
    this.mail = mail;
  },
};
</script>

<style scope>
h2 {
  padding: 50px 10px 10px 10px;
  text-align: left;
  font-size: 25px;
  font-family: monospace;
  color: white;
}
h3 {
  padding: 10px 10px 10px 10px;
  text-align: left;
  font-size: 20px;
  font-family: monospace;
  color: white;
}
</style>

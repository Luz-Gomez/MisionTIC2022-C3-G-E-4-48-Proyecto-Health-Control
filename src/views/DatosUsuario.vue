<template>
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
      <validation-provider v-slot="{ errors }" rules="required" name="checkbox">
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
</template>

<script>
export default {
    data () {
        return {
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    },
}
</script>

<style>

</style>
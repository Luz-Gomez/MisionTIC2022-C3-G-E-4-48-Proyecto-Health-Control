<template>
  <div class="home">
    <body>
      <h1>Bienvenidos a Health control</h1>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/logoHC.png"
        max-height="100"
        max-width="1100"
        position="center center"
        light="true"
        src="../assets/imagenes/logoHC.png"
      ></v-img>
      <br />
      <p>
        La aplicación que te permitirá llevar un registro de tus tomas de presión, para seguir un control de tu propia salud. En cualquier  
        momento y lugar podrás acceder a tus datos y análisis sobre tu estado de presión arterial.</p><br>
        
        <p>También podrás calcular tu índice de masa corporal para saber si estás pasado o pasada de peso. Este dato es importante para mantener 
        estable los valore de presión arterial y asegurarse de que se mantendrán estables en el tiempo. En Health control, queremos cuidarte 
        y ayudarte a que tengas el control de tu salud, incluso podrás brindarle acceso a tu médico de cabecera para que pueda monitorear tu 
        estado de salud y agendar tus citas cuando lo considere necesario.
      </p><br>
      <v-container color="white">
        <h2>Regístrate</h2>
        <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="50"
      label="Nombre"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Correo electrónico"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :group="group-items"
      :items="items"
      :error-messages="selectErrors"
      label="Categoría"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Está todo bien?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      Crear usuario
    </v-btn>
    
  </form>
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
  text-align: center;
  font-family: monospace;
  font-size: 60px;
  padding: 50px 25px 20px 25px;
  color: white;
}
h2 {
  text-align: center;
  font-family: monospace;
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
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(50) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Usuario',
        'Médico',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('Confirma que todos tus datos son correctos')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Debes seleccionar una categoría de usuario')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Tu nombre no debe exceder 50 caracteres')
        !this.$v.name.required && errors.push('Por favor ingresa tu nombre')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('El correo debe ser válido')
        !this.$v.email.required && errors.push('Por favor ingresa tu correo')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

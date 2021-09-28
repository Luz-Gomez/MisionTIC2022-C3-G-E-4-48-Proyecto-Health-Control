<template>
    <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg5 xl4>
        <v-card>
            <v-toolbar dark color="blue darken-3">
                <v-toolbar-title>
                    Acceso al Sistema
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-text-field v-model="email" autofocus color="accent" label="Email" required>
                </v-text-field>
                <v-text-field v-model="password" type="password" color="accent" label="Password" required>
                </v-text-field>
                <v-flex class="red--text" v-if="errorM">
                    {{errorM}}
                </v-flex>
            </v-card-text>
            <v-card-actions class="px-3 pb-3">
                <v-flex text-xs-left>
                    <v-btn share @click="ingresar()" color="primary">Ingresar</v-btn>
                </v-flex>
            </v-card-actions>
            <v-card-actions class="px-10 pb-1">
                <v-flex text-xs-right>
                    <v-btn explore @click="registro()" color="primary">Registrarse</v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </v-flex>
</v-layout>
</template>
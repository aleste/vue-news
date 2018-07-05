<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
            <h1>Register</h1>
            <v-text-field
                label="Email"
            ></v-text-field>
            <v-text-field
                label="Password"
                type="password"
                autocomplete="new-password"
            ></v-text-field>
            <v-btn class="indigo" dark>Register</v-btn>
            </v-flex>
          </v-layout>
    </v-container>
</template>

<script>
export default {
};
</script>

<style>

</style>

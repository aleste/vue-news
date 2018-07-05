<template>
    <v-toolbar color="indigo" dark fixed>
      <v-toolbar-title class="mr-4">Vue News</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat><v-icon class="mr-2">format_align_center</v-icon>News</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/register"><v-icon class="mr-2">account_box</v-icon>Register</v-btn>
        <v-btn flat><v-icon class="mr-2">fingerprint</v-icon>Login</v-btn>
        <v-btn flat><v-icon class="mr-2">exit_to_app</v-icon>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {

};
</script>

<style>

</style>

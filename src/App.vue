<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-text-field
        label="Username"
        filled
        v-model="user.username"
        ></v-text-field>
        <v-text-field
        label="Mail"
        filled
        v-model="user.email"
        ></v-text-field>
        <v-btn
          color="primary"
          @click="submit"
        >Submit</v-btn>
        <v-card class="mt-5">
          <v-btn @click="fetchData">Get Data</v-btn>
          <v-list-item v-for="u in users" :key="u">
            <v-list-item-content>
              <v-list-item-title>{{ u.username }} - {{ u.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-container>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/Shared/Header";
import AppFooter from "./components/Shared/Footer";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
    };
  },
  methods: {
    submit() {
      this.resource.saveAlt({node: this.node}, this.user);
    },
    fetchData() {
      this.resource.getData({node: this.node})
        .then(response =>{
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  },
  created() {
    const customAction = {
        saveAlt: {method: 'POST'},
        getData: {method: 'GET'}
    };
    this.resource = this.$resource('{node}.json', {}, customAction);
  }
};
</script>

<style scoped>
</style>
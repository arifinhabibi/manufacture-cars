<template>
  <div class="container mt-5">
    <h1 class="text-center">CARS LIST</h1>
    <div class="container w-25 my-4">
      <label for="option">Choose a manufacture</label>
      <select v-model="type" @change="fetchData(type)" id="option" class="form-select">
        <option value="tesla">tesla</option>
        <option value="toyota">toyota</option>
        <option value="volvo">volvo</option>
        <option value="volkswagen">volkswagen</option>
        <option value="audi">audi</option>
      </select>
    </div>
    <table class="table">
        <thead>
          <tr class="table-dark">
            <th scope="col">#</th>
            <th scope="col">Manufacture</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Fuel Type</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(car, index) in cars" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ car.make }}</td>
            <td>{{ car.model }}</td>
            <td>{{ car.year }}</td>
            <td>{{ car.fuel_type }}</td>
          </tr>
          
        </tbody>
      </table>
  </div>
</template>

<script>

import axios from "@/axios.js"

export default {
  name: 'HomeView',
  data() {
    return {
      base_url: process.env.VUE_APP_BASE_URL,
      cars: [],
      type: "toyota"  
    }
  },
  methods: {
    fetchData(type){
      axios.get("/cars/?make="+type).then(
        resp => {
          this.cars = resp.data
        }
      ).catch(
        err => {
          alert(err)
        }
      )
    }
  },
  mounted(){
    this.fetchData(this.type)
  }
}
</script>

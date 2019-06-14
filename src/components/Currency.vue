<template>
  <div>
    <h2>Currency</h2>
    <div>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <div v-if="loading" class="text-xs-center mt-5">
        <Progress />
      </div>

      {{this.rate}}
    </div>
  </div>
</template>

<script>
    import Progress from "@/components/Progress";
    import {mapActions, mapGetters} from "vuex";
    export default {
      name: "Currency",
      components: {Progress},
      computed: {
        ...mapGetters({
          rate: 'currency/getRate',
          loading: 'currency/getLoading'
        }),
      },
      data () {
        return {
          date: new Date().toISOString().substr(0, 10),
          menu: false,
        }
      },
      watch: {
        date(val, oldVal) {
          this.fetchRate({
            date: this.prepareDateForApi(
              new Date(Date.parse(val))
            )
          })
        }
      },
      created() {
        let today = new Date()
        this.fetchRate({date: this.prepareDateForApi(today)})
      },
      methods: {
        ...mapActions({
          fetchRate: 'currency/fetch'
        }),
        prepareDateForApi(date) {
          let dd = date.getDate()
          let mm = date.getMonth() + 1 //January is 0!
          if (dd < 10) {
            dd = '0' + dd;
          }
          if (mm < 10) {
            mm = '0' + mm;
          }
          let yy = date.getFullYear()

          return `${dd}.${mm}.${yy}`
        }
      }
    }
</script>

<style scoped>

</style>

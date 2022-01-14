<template>
  <v-card width="300" min-height="90">
    <v-card-title class="pb-0">
      {{ dataChose }}
    </v-card-title>
    <div v-if="hasEventList">
      <v-card-title class="title"> {{ holiday.title }}</v-card-title>
      <v-card-text class="text"> Бюджет : {{ holiday.budget }}$</v-card-text>

      <v-card-title class="title"> {{ event.title }}</v-card-title>
      <v-card-text class="text"> Адрес: {{ event.address }} </v-card-text>
      <v-card-text class="text pt-2"> Время : {{ event.time }} </v-card-text>

      <v-card-title class="title"> {{ note.title }}</v-card-title>
      <v-card-text> {{ note.text }}</v-card-text>
    </div>
    <div v-else class="no_events">
      <p class="no_events_text">Событий нет</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    dataChose: {
      type: String,
    },
  },
  watch: {
    dataChose(value) {
      this.date = value;
      this.getEventsFromLocalStorage();
    },
  },
  data() {
    return {
      holiday: {
        title: '',
        budget: '',
      },

      event: {
        title: '',
        address: '',
        time: '',
      },

      note: {
        title: '',
        text: '',
      },

      date: '',
      hasEventList: false,
    };
  },

  methods: {
    getEventsFromLocalStorage() {
      // var date = new Date().toLocaleDateString();

      // if (localStorage.getItem(`${date}`) !== null) {
      if (localStorage.getItem(`${this.date}`) !== null) {
        console.log(1111);
        this.hasEventList = !this.hasEventList;
        // const dataArray = JSON.parse(localStorage.getItem(`${date}`));
        const dataArray = JSON.parse(localStorage.getItem(`${this.date}`));

        console.log(this.date);

        dataArray.forEach((item) => {
          if (item.id === 0) {
            this.holiday.title = item.title;
            this.holiday.budget = item.budget;
          } else if (item.id === 1) {
            this.event.title = item.title;
            this.event.address = item.address;
            this.event.time = item.time;
          } else if (item.id === 2) {
            this.note.title = item.title;
            this.note.text = item.text;
          }
        });
      } else {
        console.log(2222);
      }
    },
  },
  mounted() {
    // this.getEventsFromLocalStorage();
  },
};
</script>

<style scoped>
.title {
  padding-bottom: 0;
}

.text {
  padding-bottom: 0;
}

.no_events {
  margin-left: 15px;
  margin-bottom: 15px;
}
</style>

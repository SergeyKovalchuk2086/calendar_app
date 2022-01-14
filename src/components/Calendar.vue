<template>
  <div class="container d-flex justify-space-between align-start mx-auto mt-15">
    <!-- <div class="container d-flex justify-space-between align-start"> -->
    <div>
      <input type="date" name="" id="" @click="logOut" v-model="dataChose" />
      <v-btn class="ml-5">Добавить</v-btn>
    </div>

    <div>
      <EventList v-show="openEventList" :dataChose="dataChose" />
    </div>
  </div>
</template>

<script>
import EventList from '@/components/EventList';
export default {
  components: {
    EventList,
  },
  name: 'Calendar',
  data() {
    return {
      dataChose: '',
      events: [],
      today: new Date().toLocaleDateString(),
      openEventList: false,
    };
  },

  watch: {
    dataChose() {
      this.setEventsForToday();
    },
  },

  computed: {
    // tasksForToday: {
    //   get() {
    //     return !!this.today;
    //   },
    // },
  },
  methods: {
    logOut() {
      console.log(this.dataClick);
    },

    //заполнил временно для примера
    setEventsForToday() {
      // var date = new Date().toLocaleDateString();

      const holiday = {
        id: 0,
        title: 'День рождение кореша',
        budget: 300,
      };

      const event = {
        id: 1,
        title: 'Концерт',
        address: 'пр-т Ленина, 300',
        time: '15:00',
      };

      const note = {
        id: 2,
        title: 'Заметка',
        text: 'Решить тестовое :)',
      };

      this.events.push(holiday, event, note);

      if (this.dataChose) {
        if (localStorage.getItem(`${this.dataChose}`)) {
          localStorage.setItem(
            `${this.dataChose}`,
            JSON.stringify(this.events)
          );
          this.openEventList = !this.openEventList;
        }
      }
    },
  },

  mounted() {},
  created() {
    this.setEventsForToday();
  },
};
</script>

<style scoped>
.container {
  max-width: 630px;
}
</style>

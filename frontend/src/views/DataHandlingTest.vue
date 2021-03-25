<template>
    <div id="data-handling-test">
        <v-app id="inspire">
            <v-card>
                <v-toolbar
                    color="cyan"
                    dark
                    flat
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
            
                    <v-toolbar-title>Your Dashboard</v-toolbar-title>
            
                    <v-spacer></v-spacer>
            
                    <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                    </v-btn>
            
                    <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
            
                    <template v-slot:extension>
                    <v-tabs
                        v-model="tab"
                        align-with-title
                    >
                        <v-tabs-slider color="yellow"></v-tabs-slider>
            
                        <v-tab
                        v-for="item in items"
                        :key="item"
                        >
                        {{ item }}
                        </v-tab>
                    </v-tabs>
                    </template>
                </v-toolbar>
            
                <v-tabs-items v-model="tab">
                    <v-tab-item
                    v-for="item in items"
                    :key="item"
                    >
                    <v-card flat>
                        <v-card-text v-text="text"></v-card-text>
                    </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>

            <b>count: {{ this.$store.state.count }}</b><br>
            <b>exponent: {{ this.$store.getters.exponent }}</b><br>
            <b>count^exponent: {{ this.$store.getters.calc_count_exponent }}</b><br>
            <input type="button" @click="increment()" value="inc"/><br>
            <input type="button" @click="decrement()" value="dec"/><br>
            <b>random: {{ this.$store.getters.random }}</b><br>
            <input type="button" @click="randomNumber()" value="random"/><br>

            <v-card
            class="mx-auto"
            max-width="500"
            >
            <v-system-bar
                color="indigo darken-2"
                dark
            >
                <v-spacer></v-spacer>
        
                <v-icon>mdi-window-minimize</v-icon>
        
                <v-icon>mdi-window-maximize</v-icon>
        
                <v-icon>mdi-close</v-icon>
            </v-system-bar>
        
            <v-toolbar
                color="indigo"
                dark
            >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
        
                <v-toolbar-title>Discover</v-toolbar-title>
        
                <v-spacer></v-spacer>
        
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-toolbar>
        
            <v-container fluid>
                <v-row dense>
                    <v-col
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                    >
                        <v-card>
                        <v-img
                            :src="card.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>
            
                        <v-card-actions>
                            <v-spacer></v-spacer>
            
                            <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                            </v-btn>
            
                            <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
            
                            <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            </v-card>
        </v-app>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'DataHandlingTest',
  components: {
  },
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
    tab: null,
    items: [
        'web', 'shopping', 'videos', 'images', 'news',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  methods: {
      increment: function () {
          this.$store.commit('increment')
      },
      decrement: function () {
          this.$store.commit('decrement')
      },
      randomNumber: function () {
          this.$store.dispatch('generateRandomNumber')
      }
  }
}
</script>

<style scoped>
/*
div {
  border: 1px solid #ccc;
}
*/
</style>
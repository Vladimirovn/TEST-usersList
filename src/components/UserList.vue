<template>
    <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
        
          <v-list three-line>
            <TransitionGroup name="list" tag="v-list-item">
            <template v-for="(item, index) in users">
              <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
              ></v-subheader>

              <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
              ></v-divider>

              <v-list-item
                  v-else
                  :key="item.title"
              >

                <v-list-item-avatar @click="activeIndex = (activeIndex === index) ? null : index">
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  <v-list-item-subtitle :class="(activeIndex === index) ? '' : 'd-none'" v-html="item.adress"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
            </TransitionGroup>
          </v-list>
        </v-card>
      </v-col>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'UserList',

        data:() => ({
                activeIndex: null,

                users: [
                    { header: 'USERS' },
                    {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                    country: 'usa',
                    score: '',
                    adress: 'SomeAdress.st 11'
                    },
                    { divider: true, inset: true },
                    {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                    country: 'russia',
                    score: '',
                    adress: 'SomeAdress.st 12'
                    },
                    { divider: true, inset: true },
                    {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                    country: 'usa',
                    score: '',
                    adress: 'SomeAdress.st 13'
                    },
                    { divider: true, inset: true },
                    {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Birthday gift',
                    subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                    country: 'russia',
                    score: '',
                    adress: 'SomeAdress.st 14'
                    },
                    { divider: true, inset: true },
                    {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                    country: 'russia',
                    score: '',
                    adress: 'SomeAdress.st 15'
                    },
                ],
                
            }),

            // Получение списка пользователей!!!
            // async mounted() {
            //     const res = await fetch('https://some URL.com/....')
            //     const users = await res.json()
            //     this.users = users
            // },

            computed: {
                ...mapGetters(['filtersParam']),
                
                filterObjects() {
                    return this.users.filter(obj => Object.values(filtersParam).includes(Object.values(obj)));
                }

            },
            
    }
</script>

<style scoped>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active,
    .list-leave-active {
        transition: all 1s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
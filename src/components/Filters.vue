<template>
    <v-col
        cols="12"
        md="4"
    >
    <v-select
        v-model="variant.country"
        :items="countrys"
        clearable
        @change="filterUsers"
        label="Filter by country"
    ></v-select>

    <v-select
        v-model="variant.score"
        :items="items"
        clearable
        @change="filterUsers"
        label="Filter by score"
    ></v-select>
    </v-col>
</template>

<script>

    export default {
        data: () => ({
            items: [
                '> 20',
                '< 10',
            ],
            countrys: [
                'russia',
                'usa',
            ],
            variant: {
                country: '',
                score: ''
            }
        }),

        methods: {
            filterUsers() {
                this.$store.dispatch('filterUsers', this.variant)
                console.log(this.variant);
            }
        }
    }
</script>
<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">{{heading}} Ascent</h1>
            <div class="md:flex flex-1"></div>
            <inertia-link href="/admin/ascents" class="tj-topbar_link">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>

        <form class="tj-form" @submit.prevent="processAscent">

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="mountain_id">
                    Mountain
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="ascent.mountain_id" id="mountain_id" class="tj-form_input--select">
                        <option v-for="mountain in mountains_dd" :value="mountain.value">{{mountain.text}}</option>
                    </select>
                    <div class="tj-form_input--select_icon">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.mountain_id" class="tj-form_error" v-html="errors.mountain_id[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="mountaineer_id">
                    Mountaineer
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="ascent.mountaineer_id" id="mountaineer_id" class="tj-form_input--select">
                        <option v-for="mountaineer in mountaineers_dd" :value="mountaineer.value">{{mountaineer.text}}</option>
                    </select>
                    <div class="tj-form_input--select_icon">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.mountaineer_id" class="tj-form_error" v-html="errors.mountaineer_id[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="ascent_date">
                    Ascent Date
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="ascent_date" type="date" placeholder="date" v-model="ascent.ascent_date">
                    <p v-if="errors.ascent_date" class="tj-form_error" v-html="errors.ascent_date[0]"></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button class="submit-btn" type="submit">
                    {{heading}} Ascent
                </button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'ascent-form',
        props: {
            'ascent-data': {
                type: Object,
                default: () => ({
                    mountaineer_id: '',
                    mountain_id: '',
                    ascent_date: ''
                })
            },
            errors: Array,
            mountains: Object|Array,
            mountaineers: Object|Array,
            editing: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            heading() {
                return this.editing ? 'Edit' : 'Add'
            }
        },

        data() {
            return {
                ascent: this.ascentData,
                mountains_dd: [],
                mountaineers_dd: []
            }
        },

        created(){
            this.buildDDown(this.mountains, this.mountains_dd);
            this.buildDDown(this.mountaineers, this.mountaineers_dd);
        },

        methods: {
            processAscent() {
                let uri = '/admin/ascents/create';
                let method = 'post';

                this.$inertia[method](uri, this.ascent);
            },

            buildDDown(array, ddown){
                array.forEach((object) => {
                    ddown.push({value: object.id, text: object.name});
                })
            }
        }
    }
</script>

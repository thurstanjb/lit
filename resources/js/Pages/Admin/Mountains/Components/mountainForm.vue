<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">{{heading}} Mountain</h1>
            <div class="md:flex flex-1"></div>
            <inertia-link href="/admin/mountains" class="tj-topbar_link">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>

        <form class="tj-form" @submit.prevent="processMountain">

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="name">
                    Name
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="name" type="text" placeholder="Name" v-model="mountain.name">
                    <p v-if="errors.name" class="tj-form_error" v-html="errors.name[0]"></p>
                </div>
            </div>
            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="height">
                    Height
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="height" type="text" placeholder="Height (in feet)" v-model="mountain.height">
                    <p v-if="errors.height" class="tj-form_error" v-html="errors.height[0]"></p>
                </div>
            </div>
            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="book">
                    Book
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="mountain.book" id="book" class="tj-form_input--select">
                        <option v-for="book in books" :value="book.value">{{book.text}}</option>
                    </select>
                    <div class="tj-form_input--select_icon">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.book" class="tj-form_error" v-html="errors.book[0]"></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button class="submit-btn" type="submit">
                    {{heading}} Mountain
                </button>
                <button class="delete-btn" v-if="editing" @click.prevent="deleteMountain">
                    <font-awesome-icon icon="trash-alt"/>
                </button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'mountain-form',
        props: {
            'mountain-data': {
                type: Object,
                default: () => ({
                    name: '',
                    height: null,
                    book: 'northern'
                })
            },
            errors: Array,
            editing: {
                type: Boolean,
                default: false
            },
            books: Array
        },

        computed: {
            heading() {
                return this.editing ? 'Edit' : 'Add'
            }
        },

        data() {
            return {
                mountain: this.mountainData
            }
        },

        methods: {
            processMountain() {
                let uri = '/admin/mountains/create';
                let method = 'post';

                if (this.editing) {
                    uri = '/admin/mountains/' + this.mountain.slug + '/edit'
                    method = 'put'
                }

                this.$inertia[method](uri, this.mountain);
            },

            deleteMountain() {
                this.$inertia.delete('/admin/mountains/' + this.mountain.slug);
            }
        }
    }
</script>

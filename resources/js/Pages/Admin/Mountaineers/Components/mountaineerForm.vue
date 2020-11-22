<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">{{heading}} Mountaineer</h1>
            <div class="md:flex flex-1"></div>
            <inertia-link href="/admin/mountaineers" class="tj-topbar_link">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>

        <form class="tj-form" @submit.prevent="processMountaineer">

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="name">
                    Name
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="name" type="text" placeholder="Name" v-model="mountaineer.name">
                    <p v-if="errors.name" class="tj-form_error" v-html="errors.name[0]"></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button class="submit-btn" type="submit">
                    {{heading}} Mountaineer
                </button>
                <button class="delete-btn" v-if="editing" @click.prevent="deleteMountaineer">
                    <font-awesome-icon icon="trash-alt"/>
                </button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'mountaineer-form',
        props: {
            'mountaineer-data': {
                type: Object,
                default: () => ({
                    name: ''
                })
            },
            errors: Array,
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
                mountaineer: this.mountaineerData,
            }
        },

        methods: {
            processMountaineer() {
                let uri = '/admin/mountaineers/create';
                let method = 'post';

                if (this.editing) {
                    uri = '/admin/mountaineers/' + this.mountaineer.slug + '/edit'
                    method = 'put'
                }

                this.$inertia[method](uri, this.mountaineer);
            },

            deleteMountaineer() {
                this.$inertia.delete('/admin/mountaineers/' + this.mountaineer.slug);
            }
        }
    }
</script>

<template>
    <div class="flex items-center justify-center mt-10">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2" @submit.prevent="submitForm">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="email" type="text" placeholder="Email" v-model="email">
                <p v-if="errors.email" class="text-red-500 text-xs italic" v-html="errors.email[0]"></p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send Password Reset Link
                </button>
            </div>

            <p v-if="response && Object.keys(errors).length === 0" class="text-center text-teal-900 mt-5">
                Your request has been sent. Please check your email.
            </p>
        </form>

    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout'

    export default {
        name: "auth-password-email",

        layout: Layout,

        props: {
            'title': String,
            'response': Array|Object,
            'errors': {
                type: Object,
                default: () => {}
            }
        },

        data(){
            return{
                email: '',
                request: null
            }
        },

        created() {
            this.$parent.title = this.title
        },

        methods:{
            submitForm(){
                this.$inertia.post('/password/email', {email:this.email})
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="flex items-center justify-center mt-10">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2" @submit.prevent="loginUser">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="email" type="text" placeholder="Email" v-model="user.email">
                <p v-if="errors.email" class="text-red-500 text-xs italic" v-html="errors.email[0]"></p>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="password" type="password" placeholder="******************" v-model="user.password">
                <p v-if="errors.password" class="text-red-500 text-xs italic" v-html="errors.password[0]"></p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>
                <inertia-link class="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="/password/reset">
                    Forgot Password?
                </inertia-link>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
        </p>
    </div>
</template>

<script>
    import Layout from '../../Layouts/layout';
    export default {
        name: "login",
        layout: Layout,

        props: {
            errors: {
                type: Object,
                default: () => {}
            },
            title: String
        },

        created(){
            this.$parent.title = this.title
        },

        data(){
            return {
                user:{
                    email: '',
                    password: '',
                }
            }
        },

        methods:{
            loginUser(){
                this.$inertia.post('', this.user);
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="flex items-center justify-center mt-10">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2" @submit.prevent="submitForm">

            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input id="email" type="email"
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       name="email" v-model="newEmail" required autocomplete="email" autofocus>
                <p v-if="errors.email" class="text-red-500 text-xs italic" v-html="errors.email[0]"></p>
            </div>

            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input id="password" type="password"
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       name="password" v-model="password" required autocomplete="new-password">
                <p v-if="errors.password" class="text-red-500 text-xs italic" v-html="errors.password[0]"></p>
            </div>

            <div class="mb-4">
                <label for="password-confirm" class="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                </label>
                <input id="password-confirm" type="password"
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       name="password_confirmation" v-model="pass_conf"
                       required autocomplete="new-password">
                <p v-if="errors.password_confirmation" class="text-red-500 text-xs italic" v-html="errors.password_confirmation[0]"></p>
            </div>

            <div class="flex items-center justify-between">
                <button type="submit"
                        class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Reset Password
                </button>
            </div>
        </form>
    </div>
</template>



<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "password-reset",
        layout: Layout,

        props: {
            token: String,
            email: String,
            title: String,
            errors: {
                type: Object,
                default: () => {}
            }
        },

        created() {
            this.$parent.title = this.title
        },

        data() {
            return {
                password: '',
                pass_conf: '',
                newEmail: this.email,
            }
        },

        methods: {
            submitForm() {
                this.$inertia.post('/password/reset ', {
                    email: this.newEmail,
                    token: this.token,
                    password: this.password,
                    password_confirmation: this.pass_conf
                });
            }
        }
    }
</script>

<style scoped>

</style>

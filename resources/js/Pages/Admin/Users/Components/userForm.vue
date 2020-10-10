<template>
    <div class="w-full">
        <div class="flex content-between bg-teal-400 rounded-t py-5 px-5">
            <h1 class="text-2xl flex-1">{{heading}} User</h1>
            <inertia-link href="/users" class="hover:text-white text-teal-700 text-sm pt-1">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>

        <form class="w-full bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 " @submit.prevent="processUser">

            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-sm text-right font-bold mt-2 mr-5 md:w-1/12" for="name">
                    Name
                </label>
                <div class="w-full md:w-1/2">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Name" v-model="user.name">
                    <p v-if="errors.name" class="text-red-500 text-xs italic w-full" v-html="errors.name[0]"></p>
                </div>
            </div>


            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-sm text-right font-bold mt-2 mr-5 md:w-1/12" for="role">
                    Role
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="user.role" name="role" id="role"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option v-for="option in roles" :value="option.value">{{option.text}}</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.role" class="text-red-500 text-xs italic" v-html="errors.role[0]"></p>
                </div>
            </div>

            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-right text-sm font-bold mt-2 mr-5 md:w-1/12" for="email">
                    Email
                </label>
                <div class="w-full md:w-3/4">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email" v-model="user.email">
                    <p v-if="errors.email" class="text-red-500 text-xs italic" v-html="errors.email[0]"></p>
                </div>

            </div>

            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-right text-sm font-bold mt-2 mr-5 md:w-1/12" for="password">
                    Password
                </label>
                <div class="w-full md:w-1/2">
                    <input
                        class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" v-model="user.password">
                    <p v-if="errors.password" class="text-red-500 text-xs italic" v-html="errors.password[0]"></p>
                </div>
            </div>

            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-right text-sm font-bold mt-2 mr-5 md:w-1/12" for="password_confirmation">
                    Confirm
                </label>
                <div class="w-full md:w-1/2">
                    <input
                        class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password_confirmation" type="password" placeholder="Password"
                        v-model="user.password_confirmation">
                    <p v-if="errors.password_confirmation" class="text-red-500 text-xs italic"
                       v-html="errors.password_confirmation[0]"></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button
                    class="submit-btn"
                    type="submit">
                    {{heading}} User
                </button>
                <button
                    class="delete-btn"
                    v-if="editing && $page.auth.user.name !== userData.name" @click="deleteUser">
                    <font-awesome-icon icon="trash-alt"/>
                </button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'user-form',
        props: {
            'user-data':{
                type: Object,
                default: ({
                    name: '',
                    email: '',
                    role: 'user',
                    password: '',
                    password_confirmation: ''
                })
            },
            errors: Array,
            editing: {
                type: Boolean,
                default: false
            }
        },

        computed: {
          heading(){
              return this.editing ? 'Edit' : 'Add'
          }
        },

        data(){
            return{
                user: this.userData,
                roles: [
                    {text: 'User', value: 'user'},
                    {text: 'Administrator', value: 'admin'}
                ]
            }
        },

        methods: {
            processUser() {
                let uri = '/users/create';
                let method = 'post';

                if(this.editing){
                    uri = '/users/' + this.user.id + '/edit'
                    method = 'put'
                }

                this.$inertia[method](uri, this.user);
            },

            deleteUser(){
                console.log('DeletingUser');
                this.$inertia.delete('/users/' + this.user.id);
            }
        }
    }
</script>

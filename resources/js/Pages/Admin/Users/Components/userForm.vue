<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">{{heading}} User</h1>
            <div class="md:flex flex-1"></div>
            <inertia-link href="/users" class="tj-topbar_link">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>

        <form class="tj-form" @submit.prevent="processUser">

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="name">
                    Name
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="name" type="text" placeholder="Name" v-model="user.name">
                    <p v-if="errors.name" class="tj-form_error" v-html="errors.name[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="role">
                    Role
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="user.role" name="role" id="role" class="tj-form_input--select">
                        <option v-for="option in roles" :value="option.value">{{option.text}}</option>
                    </select>
                    <div class="tj-form_input--select_icon">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.role" class="tj-form_error" v-html="errors.role[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="email">
                    Email
                </label>
                <div class="w-full md:w-3/4">
                    <input class="tj-form_input--text" id="email" type="email" placeholder="Email" v-model="user.email">
                    <p v-if="errors.email" class="tj-form_error" v-html="errors.email[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="password">
                    Password
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="password" type="password"
                           placeholder="Password" v-model="user.password"
                    >
                    <p v-if="errors.password" class="tj-form_error" v-html="errors.password[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="password_confirmation">
                    Confirm
                </label>
                <div class="w-full md:w-1/2">
                    <input class="tj-form_input--text" id="password_confirmation" type="password" placeholder="Password"
                           v-model="user.password_confirmation"
                    >
                    <p v-if="errors.password_confirmation" class="tj-form_error"
                       v-html="errors.password_confirmation[0]"
                    ></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button class="submit-btn" type="submit">
                    {{heading}} User
                </button>
                <button class="delete-btn" v-if="editing && $page.auth.user.name !== userData.name" @click="deleteUser">
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
            'user-data': {
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
            heading() {
                return this.editing ? 'Edit' : 'Add'
            }
        },

        data() {
            return {
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

                if (this.editing) {
                    uri = '/users/' + this.user.id + '/edit'
                    method = 'put'
                }

                this.$inertia[method](uri, this.user);
            },

            deleteUser() {
                this.$inertia.delete('/users/' + this.user.id);
            }
        }
    }
</script>

<template>
    <user-form :user-data="user" :errors="errors" :editing="true"></user-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import UserForm from "./Components/userForm";

    export default {
        name: "admin-users-update",

        components: {UserForm},

        props: {
            title: String,
            errors: Array,
            user: Object
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>


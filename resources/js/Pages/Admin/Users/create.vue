<template>
    <user-form :errors="errors"></user-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import UserForm from "./Components/userForm";

    export default {
        name: "admin-users-create",

        components: {UserForm},

        props: {
            title: String,
            errors: Object
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>


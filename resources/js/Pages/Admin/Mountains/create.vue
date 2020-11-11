<template>
    <mountain-form :errors="errors" :books="books"></mountain-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import MountainForm from "./Components/mountainForm";

    export default {
        name: "admin-mountain-create",

        components: {MountainForm},

        props: {
            title: String,
            errors: Object|Array,
            books: Array
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>

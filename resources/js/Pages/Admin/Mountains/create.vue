<template>
    <mountain-form :errors="errors"></mountain-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import MountainForm from "./Components/mountainForm";

    export default {
        name: "admin-mountain-create",

        components: {MountainForm},

        props: {
            title: String,
            errors: Object|Array
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>

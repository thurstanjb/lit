<template>
    <mountain-form :errors="errors" :mountain-data="mountain" :editing="true"></mountain-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import MountainForm from "./Components/mountainForm";

    export default {
        name: "admin-mountain-update",

        components: {MountainForm},

        props: {
            title: String,
            errors: Object|Array,
            mountain: Object
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>

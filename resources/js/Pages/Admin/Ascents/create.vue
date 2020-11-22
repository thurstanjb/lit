<template>
    <ascent-form :errors="errors" :mountains="mountains" :mountaineers="mountaineers"></ascent-form>
</template>

<script>
    import Layout from '../../../Layouts/admin';
    import AscentForm from "./Components/ascentForm";

    export default {
        name: "admin-ascent-create",

        components: {AscentForm},

        props: {
            title: String,
            errors: Object|Array,
            mountains: Object|Array,
            mountaineers: Object|Array
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>

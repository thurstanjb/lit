<template>
    <mountaineer-form :errors="errors" :mountaineer-data="mountaineer" :editing="true"></mountaineer-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import MountaineerForm from "./Components/mountaineerForm";

    export default {
        name: "admin-mountaineer-update",

        components: {MountaineerForm},

        props: {
            title: String,
            errors: Object|Array,
            mountaineer: Object
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        }
    }
</script>

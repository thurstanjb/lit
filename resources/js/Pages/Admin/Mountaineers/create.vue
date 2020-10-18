<template>
    <mountaineer-form :errors="errors"></mountaineer-form>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import MountaineerForm from "./Components/mountaineerForm";

    export default {
        name: "admin-mountaineer-create",

        components: {MountaineerForm},

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

<template>
    <div>
        reset password
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "password reset",
        layout: Layout,

        props: {
            token: String,
            email: String,
            title: String
        },

        created(){
            this.$parent.title = this.title
        },

        data() {
        },

        methods: {}
    }
</script>

<style scoped>

</style>

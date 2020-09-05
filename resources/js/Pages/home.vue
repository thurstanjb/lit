<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>

<script>
    import Layout from '../Layouts/layout';

    export default {
        name: "home",

        props: {
            title: String
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
        },
    }
</script>

<style scoped>

</style>

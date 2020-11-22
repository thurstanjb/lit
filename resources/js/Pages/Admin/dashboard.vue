<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading mr-10">Dashboard</h1>
            <div class="md:flex flex-1">
            </div>
        </div>

        <div class="tj-main">
            <p>Welcome {{auth.user.name}}</p>
        </div>

        <div class="tj-footer justify-items-center">
        </div>
    </div>
</template>

<script>
    import Layout from '../../Layouts/admin';

    export default {
        name: "dashboard",

        props: {
            title: String,
            auth: Object
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
        },
    }
</script>

<style scoped>

</style>

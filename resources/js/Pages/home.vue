<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading mr-10">Home</h1>
            <div class="md:flex flex-1">
            </div>
        </div>

        <div class="tj-main">
            <p>Welcome {{auth.user.name}}</p>
            <p>All current data can be found in the <inertia-link href="/admin" class="submit-btn">Admin</inertia-link> section. </p>
        </div>

        <div class="tj-footer justify-items-center">
        </div>
    </div>
</template>

<script>
    import Layout from '../Layouts/default';

    export default {
        name: "home",

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

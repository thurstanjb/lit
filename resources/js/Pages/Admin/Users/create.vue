<template>
    <div>
        <h1 class="bg-teal-200 px-10 py-5 text-2xl rounded-t">New User</h1>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "admin-users-create",

        props: {
            title: String,
            users: Array
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
        },
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <div class="flex content-between bg-teal-400 rounded-t py-5 px-5">
            <h1 class="text-2xl flex-1">Users</h1>
            <inertia-link href="/users/create" class="hover:text-white text-teal-700 font-bold pt-1">
                <font-awesome-icon icon="user-plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full">
            <thead class="border">
            <tr>
                <th class="px-4 py-2">id</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Email</th>
                <th class="px-4 py-2">Role</th>
                <th class="px-4 py-2">Joined</th>
                <th class="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td class="border px-4 py-2">{{user.id}}</td>
                <td class="border px-4 py-2">{{user.name}}</td>
                <td class="border px-4 py-2">{{user.email}}</td>
                <td class="border px-4 py-2">{{user.role}}</td>
                <td class="border px-4 py-2">{{user.joined}}</td>
                <td class="border px-4 py-2">Edit</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "admin-users-index",

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

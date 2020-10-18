<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Users</h1>
            <inertia-link href="/users/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
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
                <td class="border px-4 py-2">
                    <inertia-link :href="'/users/' + user.id + '/edit'">Edit</inertia-link>
                </td>
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

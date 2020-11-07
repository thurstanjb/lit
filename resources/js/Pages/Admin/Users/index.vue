<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Users</h1>
            <paginator :page-data="page_data" class="mx-4"></paginator>
            <inertia-link href="/users/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus"/>
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-1">id</th>
                <th class="px-4 py-1">Name</th>
                <th class="px-4 py-1">Email</th>
                <th class="px-4 py-1">Role</th>
                <th class="px-4 py-1">Joined</th>
                <th class="px-4 py-1"></th>
            </tr>
            </thead>
            <tbody v-if="users.data.length > 0">
            <tr v-for="user in users.data" :key="user.id">
                <td class="border px-4 py-1">{{user.id}}</td>
                <td class="border px-4 py-1">{{user.name}}</td>
                <td class="border px-4 py-1">{{user.email}}</td>
                <td class="border px-4 py-1">{{user.role}}</td>
                <td class="border px-4 py-1">{{user.joined}}</td>
                <td class="border px-4 py-1">
                    <inertia-link :href="'/users/' + user.id + '/edit'">Edit</inertia-link>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="6" class="text-center border px-4 py-1">
                    No users available
                </td>
            </tr>
            </tbody>
        </table>
        <div class="tj-footer justify-items-center">
            <paginator class="mx-4 justify-center" :page-data="page_data"></paginator>
        </div>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';
    import Paginator from "../../Components/paginator";

    export default {
        name: "admin-users-index",
        components: {Paginator},
        props: {
            title: String,
            users: Object
        },

        data() {
            return {
                page_data: null
            }
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
            this.page_data = _.clone(this.users);
            delete this.page_data.data;
        },
    }
</script>

<style scoped>

</style>

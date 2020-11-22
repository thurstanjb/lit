<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading mr-10">Users</h1>
            <div class="md:flex flex-1">
                <search-bar column="name" class="mr-2"></search-bar>
                <search-bar column="email" class="mr-2"></search-bar>
                <filter-ddown column="role" :options="role_options"></filter-ddown>
            </div>
            <paginator :page-data="page_data" class="mx-4"></paginator>
            <inertia-link href="/users/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus"/>
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <filtered-heading class="px-4 py-1" column="id">Id</filtered-heading>
                <filtered-heading class="px-4 py-1" column="name">Name</filtered-heading>
                <filtered-heading class="px-4 py-1" column="email">Email</filtered-heading>
                <filtered-heading class="px-4 py-1" column="role">Role</filtered-heading>
                <filtered-heading class="px-4 py-1" column="created_at">Joined</filtered-heading>
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
    import Layout from '../../../Layouts/admin';
    import Paginator from "../../Components/paginator";
    import FilteredHeading from "../../Components/filteredHeading";
    import QueryManager from "../../Components/queryManager";
    import SearchBar from "../../Components/searchBar";
    import FilterDdown from "../../Components/filterDdown";

    export default {
        name: "admin-users-index",
        components: {FilterDdown, SearchBar, FilteredHeading, Paginator},
        props: {
            title: String,
            users: Object
        },

        data() {
            return {
                page_data: null,
                query_manager: QueryManager,
                role_options: [
                    {text: 'Admin', value:'admin'},
                    {text: 'User', value:'user'}
                    ]
            }
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
            this.page_data = _.clone(this.users);
            delete this.page_data.data;
        },

        mounted(){
            this.query_manager.init(this.$inertia);
        }

    }
</script>

<style scoped>

</style>

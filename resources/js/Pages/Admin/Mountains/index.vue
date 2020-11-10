<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Mountains</h1>
            <div class="md:flex flex-1"></div>
            <paginator class="mx-4" :page-data="page_data"></paginator>
            <inertia-link href="/mountains/create" class="tj-topbar_link">
                <font-awesome-icon icon="plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive text-sm">
            <thead class="border">
            <tr>
                <filtered-heading column="id" class="px-4 py-1">Id</filtered-heading>
                <filtered-heading column="name" class="px-4 py-1">Name</filtered-heading>
                <filtered-heading column="height" class="px-4 py-1">Height</filtered-heading>
                <filtered-heading column="book" class="px-4 py-1">Book</filtered-heading>
                <filtered-heading column="slug" class="px-4 py-1">slug</filtered-heading>
                <th class="px-4 py-1"></th>
            </tr>
            </thead>
            <tbody v-if="mountains.data.length > 0">
            <tr v-for="mountain in mountains.data" :key="mountain.id">
                <td class="border px-4 py-1">{{mountain.id}}</td>
                <td class="border px-4 py-1">{{mountain.name}}</td>
                <td class="border px-4 py-1">{{mountain.height}}</td>
                <td class="border px-4 py-1">{{mountain.book}}</td>
                <td class="border px-4 py-1">{{mountain.slug}}</td>
                <td class="border px-4 py-1">
                    <inertia-link :href="'/mountains/' + mountain.slug + '/edit'">Edit</inertia-link>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="6" class="text-center border px-4 py-1">
                    No mountains available
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
    import FilteredHeading from "../../Components/filteredHeading";
    import QueryManager from "../../Components/queryManager";

    export default {
        name: "admin-mountains-index",
        components: {FilteredHeading, Paginator},
        props: {
            title: String,
            mountains: Object
        },

        data(){
            return{
                page_data: {},
                query_manager: QueryManager
            }
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
            this.page_data = _.clone(this.mountains);
            delete this.page_data.data;
        },

        mounted(){
            this.query_manager.init(this.$inertia);
        }
    }
</script>

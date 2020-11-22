<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading mr-10">Uploads</h1>
            <div class="md:flex flex-1">
                <search-bar column="filename" class="mr-2"></search-bar>
                <filter-ddown column="folder" :options="folders"></filter-ddown>
            </div>
            <paginator class="mx-4" :page-data="page_data"></paginator>
            <inertia-link href="/admin/uploads/upload-file" class="tj-topbar_link">
                <font-awesome-icon icon="upload"/>
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <filtered-heading column="id" class="px-4 py-1">Id</filtered-heading>
                <filtered-heading column="filename" class="px-4 py-1">Filename</filtered-heading>
                <filtered-heading column="folder" class="px-4 py-1">Folder</filtered-heading>
                <filtered-heading column="created_at" class="px-4 py-1">Uploaded</filtered-heading>
                <filtered-heading column="user_id" class="px-4 py-1">Uploaded By</filtered-heading>
                <th class="px-4 py-1"></th>
            </tr>
            </thead>
            <tbody v-if="uploads.data.length > 0">
            <tr v-for="upload in uploads.data" :key="upload.id">
                <td class="border px-4 py-1">{{upload.id}}</td>
                <td class="border px-4 py-1">
                    <inertia-link :href="'/admin/uploads/' + upload.id" class="hover:underline"> {{upload.filename}} </inertia-link>
                </td>
                <td class="border px-4 py-1">{{upload.folder}}</td>
                <td class="border px-4 py-1">{{upload.upload_date}}</td>
                <td class="border px-4 py-1">{{upload.user.name}}</td>
                <td class="border px-4 py-1 text-center">
                    <a href="#">
                        <font-awesome-icon class="text-red-500 hover:text-red-700" icon="trash-alt" @click="deleteUpload(upload.id)"/>
                    </a>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="6" class="text-center border px-4 py-1">
                    No files available
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
    import QueryManager from "../../Components/queryManager"
    import SearchBar from "../../Components/searchBar";
    import FilterDdown from "../../Components/filterDdown";

    export default {
        name: "upload-index",
        components: {FilterDdown, SearchBar, FilteredHeading, Paginator},
        props: {
            title: String,
            uploads: Object,
            folders: Array
        },

        data(){
            return{
                page_data: null,
                query_manager: QueryManager
            }
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title;
            this.page_data = _.clone(this.uploads);
            delete this.page_data.data
        },

        mounted(){
            this.query_manager.init(this.$inertia);
        },

        methods:{
            deleteUpload(id){
                this.$inertia.delete('/admin/uploads/' + id);
            }
        }
    }
</script>

<style scoped>

</style>

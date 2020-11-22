<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading mr-10">Ascents</h1>
            <div class="md:flex flex-1">
                <filter-ddown column="mountaineer" :options="mountaineers" class="mr-2"></filter-ddown>
                <search-bar column="mountain" class="mr-2"></search-bar>
                <filter-ddown column="book" :options="books" class="mr-2"></filter-ddown>
                <filter-ddown column="year" :options="years"></filter-ddown>
            </div>
            <paginator class="mx-4" :page-data="page_data"></paginator>
            <inertia-link href="/ascents/create" class="tj-topbar_link">
                <font-awesome-icon icon="plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th>Index</th>
                <filtered-heading column="mountaineer_id" class="px-4 py-1">Mountaineer</filtered-heading>
                <filtered-heading column="mountain_id" class="px-4 py-1">Mountain</filtered-heading>
                <filtered-heading column="ascent_date" class="px-4 py-1">Ascent Date</filtered-heading>
                <th class="px-4 py-1"></th>
            </tr>
            </thead>
            <tbody v-if="ascents.data.length > 0">
            <tr v-for="(ascent, index) in ascents.data" :key="ascent.id">
                <td class="border px-4 py-1">{{(ascents.from + index)}}</td>
                <td class="border px-4 py-1">{{ascent.mountaineer.name}}</td>
                <td class="border px-4 py-1">{{ascent.mountain.name}}</td>
                <td class="border px-4 py-1">{{ascent.ascent_date}}</td>
                <td class="border px-4 py-1">
                    <a href="#" v-if="">
                        <font-awesome-icon class="text-red-500 hover:text-red-700" icon="trash-alt" @click="deleteAscent(ascent.id)"/>
                    </a>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="6" class="text-center border px-4 py-1">
                    No ascents available
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
    import QueryManager from "../../Components/queryManager"
    import FilteredHeading from "../../Components/filteredHeading";
    import FilterDdown from "../../Components/filterDdown";
    import SearchBar from "../../Components/searchBar";

    export default {
        name: "admin-ascents-index",
        components: {SearchBar, FilterDdown, FilteredHeading, Paginator},
        props: {
            title: String,
            ascents: Object,
            mountaineers: Array,
            books: Array,
            years: Array
        },

        data(){
            return{
                page_data: null,
                query_manager: QueryManager
            }
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title;
            this.page_data = _.clone(this.ascents);
            delete this.page_data.data;
        },

        mounted(){
            this.query_manager.init(this.$inertia);
        },

        methods:{
            deleteAscent(id){
                this.$inertia.delete('/ascents/' + id);
            }
        }
    }
</script>

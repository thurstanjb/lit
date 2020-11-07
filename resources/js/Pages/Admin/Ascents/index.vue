<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Ascents</h1>
            <paginator class="mx-4" :page-data="page_data"></paginator>
            <inertia-link href="/ascents/create" class="tj-topbar_link">
                <font-awesome-icon icon="plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-1">id</th>
                <th class="px-4 py-1">Mountaineer</th>
                <th class="px-4 py-1">Mountain</th>
                <th class="px-4 py-1">Ascent Date</th>
                <th class="px-4 py-1"></th>
            </tr>
            </thead>
            <tbody v-if="ascents.data.length > 0">
            <tr v-for="ascent in ascents.data" :key="ascent.id">
                <td class="border px-4 py-1">{{ascent.id}}</td>
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
    import Layout from '../../../Layouts/layout';
    import Paginator from "../../Components/paginator";

    export default {
        name: "admin-ascents-index",
        components: {Paginator},
        props: {
            title: String,
            ascents: Object
        },

        data(){
            return{
                page_data: null
            }
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title;
            this.page_data = _.clone(this.ascents);
            delete this.page_data.data;
        },

        methods:{
            deleteAscent(id){
                this.$inertia.delete('/ascents/' + id);
            }
        }
    }
</script>

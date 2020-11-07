<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Mountaineers</h1>
            <paginator class="mx-4" :page-data="page_data"></paginator>
            <inertia-link href="/mountaineers/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-1">id</th>
                <th class="px-4 py-1">Name</th>
                <th class="px-4 py-1">Slug</th>
                <th class="px-4 py-1">Created</th>
                <th class="px-4 py-1"></th>
            </tr>
            </thead>
            <tbody v-if="mountaineers.data.length > 0">
            <tr v-for="mountaineer in mountaineers.data" :key="mountaineer.id">
                <td class="border px-4 py-1">{{mountaineer.id}}</td>
                <td class="border px-4 py-1">{{mountaineer.name}}</td>
                <td class="border px-4 py-1">{{mountaineer.slug}}</td>
                <td class="border px-4 py-1">{{mountaineer.created_at}}</td>
                <td class="border px-4 py-1">
                    <inertia-link :href="'/mountaineers/' + mountaineer.slug + '/edit'">Edit</inertia-link>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="6" class="text-center border px-4 py-1">
                    No mountaineers available
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
        name: "admin-mountaineers-index",
        components: {Paginator},
        props: {
            title: String,
            mountaineers: Object,
        },

        data(){
            return{
                page_data: null,
            }
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title;
            this.page_data = _.clone(this.mountaineers);
            delete this.page_data.data;
        }
    }
</script>

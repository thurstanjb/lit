<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Mountaineers</h1>
            <inertia-link href="/mountaineers/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-2">id</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Slug</th>
                <th class="px-4 py-2">Created</th>
                <th class="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mountaineer in mountaineers" :key="mountaineer.id">
                <td class="border px-4 py-2">{{mountaineer.id}}</td>
                <td class="border px-4 py-2">{{mountaineer.name}}</td>
                <td class="border px-4 py-2">{{mountaineer.slug}}</td>
                <td class="border px-4 py-2">{{mountaineer.created_at}}</td>
                <td class="border px-4 py-2">
                    <inertia-link :href="'/mountaineers/' + mountaineer.slug + '/edit'">Edit</inertia-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "admin-mountaineers-index",

        props: {
            title: String,
            mountaineers: Array
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
        },
    }
</script>

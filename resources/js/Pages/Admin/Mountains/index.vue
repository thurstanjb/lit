<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Mountains</h1>
            <inertia-link href="/mountains/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-2">id</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Height</th>
                <th class="px-4 py-2">Book</th>
                <th class="px-4 py-2">slug</th>
                <th class="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mountain in mountains" :key="mountain.id">
                <td class="border px-4 py-2">{{mountain.id}}</td>
                <td class="border px-4 py-2">{{mountain.name}}</td>
                <td class="border px-4 py-2">{{mountain.height}}</td>
                <td class="border px-4 py-2">{{mountain.book}}</td>
                <td class="border px-4 py-2">{{mountain.slug}}</td>
                <td class="border px-4 py-2">
                    <inertia-link :href="'/mountains/' + mountain.slug + '/edit'">Edit</inertia-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "admin-mountains-index",

        props: {
            title: String,
            mountains: Array
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
        },
    }
</script>

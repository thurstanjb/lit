<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Ascents</h1>
            <inertia-link href="/ascents/create" class="tj-topbar_link">
                <font-awesome-icon icon="user-plus" />
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-2">id</th>
                <th class="px-4 py-2">Mountaineer</th>
                <th class="px-4 py-2">Mountain</th>
                <th class="px-4 py-2">Ascent Date</th>
                <th class="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="ascent in ascents" :key="ascent.id">
                <td class="border px-4 py-2">{{ascent.id}}</td>
                <td class="border px-4 py-2">{{ascent.mountaineer.name}}</td>
                <td class="border px-4 py-2">{{ascent.mountain.name}}</td>
                <td class="border px-4 py-2">{{ascent.ascent_date}}</td>
                <td class="border px-4 py-2">
                    <a href="#" v-if="">
                        <font-awesome-icon class="text-red-500 hover:text-red-700" icon="trash-alt" @click="deleteAscent(ascent.id)"/>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "admin-ascents-index",

        props: {
            title: String,
            ascents: Array
        },

        layout: Layout,

        created(){
            this.$parent.title = this.title
        },

        methods:{
            deleteAscent(id){
                this.$inertia.delete('/ascents/' + id);
            }
        }
    }
</script>

<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">Uploads</h1>
            <inertia-link href="/uploads/upload-file" class="tj-topbar_link">
                <font-awesome-icon icon="upload"/>
            </inertia-link>
        </div>
        <table class="table-auto w-full table-responsive">
            <thead class="border">
            <tr>
                <th class="px-4 py-2">id</th>
                <th class="px-4 py-2">Filename</th>
                <th class="px-4 py-2">Folder</th>
                <th class="px-4 py-2">Uploaded</th>
                <th class="px-4 py-2">Uploaded By</th>
                <th class="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody v-if="uploads.length > 0">
            <tr v-for="upload in uploads" :key="upload.id">
                <td class="border px-4 py-2">{{upload.id}}</td>
                <td class="border px-4 py-2">
                    <inertia-link :href="'/uploads/' + upload.id" class="hover:underline"> {{upload.filename}} </inertia-link>
                </td>
                <td class="border px-4 py-2">{{upload.folder}}</td>
                <td class="border px-4 py-2">{{upload.upload_date}}</td>
                <td class="border px-4 py-2">{{upload.user.name}}</td>
                <td class="border px-4 py-2 text-center">
                    <a href="#">
                        <font-awesome-icon class="text-red-500 hover:text-red-700" icon="trash-alt" @click="deleteUpload(upload.id)"/>
                    </a>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="6" class="text-center border px-4 py-2">
                    No files available
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Layout from '../../Layouts/layout';

    export default {
        name: "upload-index",

        props: {
            title: String,
            uploads: Array
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        },

        methods:{
            deleteUpload(id){
                this.$inertia.delete('/uploads/' + id);
            }
        }
    }
</script>

<style scoped>

</style>

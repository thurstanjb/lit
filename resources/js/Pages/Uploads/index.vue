<template>
    <div>
        <div class="flex content-between bg-teal-400 rounded-t py-5 px-5">
            <h1 class="text-2xl flex-1">Uploads</h1>
            <inertia-link href="/uploads/upload-file" class="hover:text-white text-teal-700 font-bold pt-1">
                <font-awesome-icon icon="upload"/>
            </inertia-link>
        </div>
        <table class="table-auto w-full">
            <thead class="border">
            <tr>
                <th class="px-4 py-2">id</th>
                <th class="px-4 py-2">Filename</th>
                <th class="px-4 py-2">Folder</th>
                <th class="px-4 py-2">Uploaded</th>
                <th class="px-4 py-2">BY User</th>
                <th class="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody v-if="uploads.length > 0">
            <tr v-for="upload in uploads" :key="upload.id">
                <td class="border px-4 py-2">{{upload.id}}</td>
                <td class="border px-4 py-2">{{upload.filename}}</td>
                <td class="border px-4 py-2">{{upload.folder}}</td>
                <td class="border px-4 py-2">{{upload.created_at}}</td>
                <td class="border px-4 py-2">{{upload.user.name}}</td>
                <td class="border px-4 py-2">
                    <a href="#">
                        <font-awesome-icon icon="trash-alt"/>
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
    }
</script>

<style scoped>

</style>

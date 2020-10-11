<template>
    <div>
        <div class="flex content-between bg-teal-400 rounded-t py-5 px-5">
            <h1 class="text-2xl flex-1">File Upload</h1>
            <inertia-link href="/uploads" class="hover:text-white text-teal-700 font-bold pt-1">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>
    </div>
</template>

<script>
    import Layout from '../../Layouts/layout';

    export default {
        name: "upload-uploadFile",

        props: {
            title: String
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        },
    }
</script>

<style scoped>

</style>

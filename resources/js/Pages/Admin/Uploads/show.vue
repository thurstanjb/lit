<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">{{upload.filename}}</h1>
            <div class="md:flex flex-1"></div>
            <inertia-link href="/uploads" class="tj-topbar_link">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>
        <div class="w-full bg-white shadow-md rounded px-10 pt-4 pb-4 mb-4 divide-y divide-gray-400">
            <section class="py-3">
                <h2 class="text-capitalize text-lg font-bold mb-2">Details</h2>
                <p><b>Filename: </b>{{upload.filename}}</p>
                <p><b>Folder: </b>{{upload.folder}}</p>
                <p><b>Uploaded: </b>{{upload.created_at}}</p>
            </section>
            <section class="py-3">
                <h2 class="text-capitalize text-lg font-bold mb-2">Actions</h2>
                <button class="submit-btn" type="button" @click="processAscentLog">{{processing_ascent_log ? 'Processing...' : 'Ascent Log Import'}}</button>
            </section>

        </div>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/admin';

    export default {
        name: "upload-index",

        props: {
            title: String,
            upload: Object
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        },

        data(){
            return {
                processing_ascent_log: false
            }
        },

        methods:{
            processAscentLog(){
                this.processing_ascent_log = true;
                window.axios.post('/imports/ascent-log/' + this.upload.id)
                .then(response => {
                    this.processing_ascent_log = false;
                })
                .catch(error => {
                    console.error(error);
                });
            }

        }
    }
</script>

<style scoped>

</style>

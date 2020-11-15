<template>
    <div class="w-full px-1">
        <div class="tj-topbar">
            <h1 class="tj-topbar_heading">File Upload</h1>
            <div class="md:flex flex-1"></div>
            <inertia-link href="/uploads" class="tj-topbar_link">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>
        <form id="upload_form" class="tj-form" @submit.prevent="processUpload">
            <div class="tj-form_upload">
                <label class="tj-form_upload--label">
                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="tj-form_upload--label_text">Select a file</span>
                    <input type='file' name="file" @change="fileData" class="hidden" />
                </label>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label w-full md:w-1/12 md:text-right" for="filename">
                    File Name
                </label>
                <div class="w-full md:w-1/3">
                    <input class="tj-form_input--text" id="filename"
                           type="text" name="filename" placeholder="File Name"
                           v-model="upload.filename"
                    >
                    <p v-if="errors.filename" class="tj-form_error" v-html="errors.filename[0]"></p>
                </div>
            </div>

            <div class="md:flex w-full mb-4">
                <label class="tj-form_label md:w-1/12 md:text-right" for="folder">
                    Folder
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="upload.folder" name="folder" id="folder" class="tj-form_input--select">
                        <option v-for="option in folders" :value="option.value">{{option.text}}</option>
                    </select>
                    <div class="tj-form_input--select_icon">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.folder" class="tj-form_error" v-html="errors.folder[0]"></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button class="submit-btn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout';

    export default {
        name: "upload-uploadFile",

        props: {
            title: String,
            errors: Object|Array,
            folders: Array
        },

        data(){
            return{
                upload:{
                    filename: '',
                    folder: 'mountains'
                },
                formData: null
            }
        },

        layout: Layout,

        created() {
            this.$parent.title = this.title
        },

        methods:{
            fileData(data){
                this.upload.filename = data.target.files[0].name;
                this.formData = new FormData();
                this.formData.append('file', data.target.files[0]);
            },

            processUpload(){
                this.formData.append('filename', this.upload.filename);
                this.formData.append('folder', this.upload.folder);
                this.$inertia.post('/uploads/upload-file', this.formData);
            }

        }
    }
</script>

<style scoped>

</style>

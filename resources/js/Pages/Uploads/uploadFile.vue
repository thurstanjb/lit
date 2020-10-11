<template>
    <div>
        <div class="flex content-between bg-teal-400 rounded-t py-5 px-5">
            <h1 class="text-2xl flex-1">File Upload</h1>
            <inertia-link href="/uploads" class="hover:text-white text-teal-700 font-bold pt-1">
                <font-awesome-icon icon="undo-alt"/>
            </inertia-link>
        </div>
        <form id="upload_form" class="w-full bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 " @submit.prevent="processUpload">
            <div class="flex w-full mb-4 items-center justify-center bg-grey-lighter">
                <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-teal-500 rounded-lg shadow-lg tracking-wide uppercase border border-teal-500 cursor-pointer hover:bg-teal-500 hover:text-white">
                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="mt-2 text-base leading-normal">Select a file</span>
                    <input type='file' name="file" @change="fileData" class="hidden" />
                </label>
            </div>

            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-right text-sm font-bold mt-2 mr-5 md:w-1/12" for="filename">
                    File Name
                </label>
                <div class="w-full md:w-1/3">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        id="filename" type="text" name="filename" placeholder="File Name" v-model="upload.filename">
                    <p v-if="errors.filename" class="text-red-500 text-xs italic" v-html="errors.filename[0]"></p>
                </div>
            </div>
            <div class="flex w-full mb-4">
                <label class="block text-gray-700 text-sm text-right font-bold mt-2 mr-5 md:w-1/12" for="folder">
                    Folder
                </label>
                <div class="relative w-full md:w-1/4">
                    <select v-model="upload.folder" name="folder" id="folder"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option v-for="option in folders" :value="option.value">{{option.text}}</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                    <p v-if="errors.role" class="text-red-500 text-xs italic" v-html="errors.role[0]"></p>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <button
                    class="submit-btn"
                    type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import Layout from '../../Layouts/layout';

    export default {
        name: "upload-uploadFile",

        props: {
            title: String,
            errors: Object,
        },

        data(){
            return{
                upload:{
                    filename: '',
                    folder: 'mountains'
                },
                formData: null,
                folders:[
                    {value: 'mountains', text: 'Mountains'},
                    {value: 'mountaineers', text: 'Mountaineers'},
                    {value: 'routes', text: 'Routes'},
                    {value: 'misc', text: 'Miscellaneous'},
                ]
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

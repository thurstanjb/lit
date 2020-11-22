<template>
    <nav class="flex items-center justify-between flex-wrap bg-primary-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Admin</span>
        </div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-primary-200 border-primary-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                    Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" v-if="$page.auth.user">
            <div class="text-sm lg:flex-grow">
                <inertia-link href="/admin/users"  v-if="$page.auth.user.isAdmin"
                   class="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4">
                    Users
                </inertia-link>
                <inertia-link href="/admin/uploads"
                   class="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4">
                    Uploads
                </inertia-link>
                <inertia-link href="/admin/mountaineers"
                              class="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4">
                    Mountaineers
                </inertia-link>
                <inertia-link href="/admin/mountains"
                              class="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4">
                    Mountains
                </inertia-link>
                <inertia-link href="/admin/ascents"
                              class="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4">
                    Ascents
                </inertia-link>
            </div>
            <div>
                <inertia-link href="/"
                              class="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4">
                    Main
                </inertia-link>
                <a class="text-primary-200 hover:text-white font-bold px-4 cursor-pointer" @click.prevent="logout" v-if="$page.auth.user">
                    <font-awesome-icon icon="eject" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar",

        methods:{
            logout(){
                this.$inertia.post('/logout');
            }
        }
    }
</script>

<style scoped>

</style>

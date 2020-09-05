<template>
    <div>
        <navbar></navbar>
        <div class="container mx-auto mt-5">
            <slot />
        </div>
    </div>

</template>

<script>
    import Navbar from "./navbar";

    export default {
        name: "layout.php",

        data(){
            return{
                title: this.$page.title
            }
        },


        watch: {
            title: {
                immediate: true,
                handler(title) {
                    document.title = this.$page.title;
                }
            }
        },

        components: {Navbar}
    }
</script>

<style scoped>

</style>

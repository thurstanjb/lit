<template>
    <div>
        request email
    </div>
</template>

<script>
    import Layout from '../../../Layouts/layout'

    export default {
        name: "email",

        layout: Layout,

        props: {
            'title': String
        },

        created() {
            this.$parent.title = this.title
        },
    }
</script>

<style scoped>

</style>

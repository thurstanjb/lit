<template>
    <div class="flex" v-show="pageData.last_page > 1">
        <paginator-link class="page-btn--first" :link="pageData.first_page_url" :disabled="pageData.current_page === 1">
            <font-awesome-icon icon="angle-double-left" />
        </paginator-link>
        <paginator-link :link="pageData.prev_page_url">
            <font-awesome-icon icon="angle-left" />
        </paginator-link>
        <div class="page-btn--display">
            {{pageData.current_page}} of {{pageData.last_page}}
        </div>
        <paginator-link :link="pageData.next_page_url">
            <font-awesome-icon icon="angle-right" />
        </paginator-link>
        <paginator-link class="page-btn--last" :link="pageData.last_page_url" :disabled="pageData.current_page === pageData.last_page">
            <font-awesome-icon icon="angle-double-right" />
        </paginator-link>
    </div>
</template>

<script>
    import PaginatorLink from "./paginatorLink";
    export default {
        name: 'paginator',
        components: {PaginatorLink},
        props: {
            'page-data': {
                type: Object
            }
        },

        computed:{

        },

        data(){
            return{

            }
        },

        created(){

        }
    }
</script>

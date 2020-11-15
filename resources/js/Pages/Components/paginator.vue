<template>
    <div class="flex" v-show="pageData.last_page > 1">
        <paginator-link class="inline-btn--first"
                        :link="pageData.first_page_url" :disabled="pageData.current_page === 1"
                        event="firstPage" @firstPage="firstPage">
            <font-awesome-icon icon="angle-double-left" />
        </paginator-link>
        <paginator-link :link="pageData.prev_page_url" event="prevPage" @prevPage="prevPage">
            <font-awesome-icon icon="angle-left" />
        </paginator-link>
        <div class="inline-btn--display" v-html="displayText">
        </div>
        <paginator-link :link="pageData.next_page_url" event="nextPage" @nextPage="nextPage">
            <font-awesome-icon icon="angle-right" />
        </paginator-link>
        <paginator-link class="inline-btn--last"
                        :link="pageData.last_page_url" :disabled="pageData.current_page === pageData.last_page"
                        event="lastPage" @lastPage="lastPage">
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

        computed: {
            displayText(){
                return this.pageData.current_page + ' of ' + this.pageData.last_page;
            }
        },

        methods:{
            firstPage(){
                this.setPage(1);
            },

            lastPage(){
                this.setPage(this.pageData.last_page);
            },

            prevPage(){
                this.setPage((this.pageData.current_page - 1));
            },

            nextPage(){
                this.setPage((this.pageData.current_page + 1));
            },

            setPage(page_number){
                events.$emit('qm-set-page', {page: page_number})
            }
        }
    }
</script>

<template>
    <div class="flex inline-btn--last inline-input--first">
        <input :name="column" v-model="input" :placeholder="'search ' + column" class="inline-input">
        <button @click="submitted" :class="button"><font-awesome-icon :icon="icon" /></button>
    </div>
</template>

<script>
    export default {
        name: 'search-bar',

        props: {
            column: String
        },

        computed:{
            icon(){
                if(this.hasInput){
                    return 'trash-alt'
                }
                return 'search'
            },
            button(){
                if(this.hasInput){
                    return 'inline-btn--filtered'
                }
                return 'inline-btn';
            },
            hasInput(){
                return this.input === this.value_set;
            }
        },

        data(){
            return {
                input: null,
                value_set: false,
            }
        },

        created(){
            events.$on('set-filter', (params => {
                if(this.column === params.column){
                    this.input = this.value_set = params.value;
                }
            }))
        },

        methods: {
            submitted(){
                if(this.hasInput){
                    this.input = null;
                }
                events.$emit('qm-set-filter', {column: this.column, value: this.input})
            }
        }
    }
</script>

<template>
    <div class="flex">
        <select v-model="input" @change="submitted" class="inline-select" :class="textClass">
            <option :value="null">-- filter by {{column}} --</option>
            <option v-for="option in options" :value="option.value" class="inline-select--norm-text">{{option.text}}</option>
        </select>
    </div>

</template>

<script>
    export default {
        name: 'filter-ddown',

        props: {
            column: String,
            options: Array
        },

        created(){
            events.$on('set-filter', (params => {
                if(this.column === params.column){
                    this.input = params.value;
                }
            }))
        },

        computed:{
          textClass(){
              if(this.input === null){
                  return 'inline-select--init-text'
              }

              return 'inline-select--norm-text'
          }
        },

        data(){
            return{
                input: null
            }
        },

        methods:{
            submitted(){
                events.$emit('qm-set-filter', {column: this.column, value: this.input})
            }
        }
    }
</script>

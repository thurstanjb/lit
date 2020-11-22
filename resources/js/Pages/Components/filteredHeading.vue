<template>
    <th @click="fireLink" class="cursor-pointer text-left">
        <slot />
        <span class="float-right">
            <font-awesome-icon icon="angle-up" v-if="state  === 'asc'" />
            <font-awesome-icon icon="angle-down" v-if="state  === 'desc'" />
        </span>
    </th>
</template>

<script>
    export default {
        name: 'filtered-heading',

        props:{
          column: String
        },

        data(){
            return{
                current_state: null,
                state: null,
            }
        },

        created(){
          events.$on('set-order', params => {
              if(params.column === this.column){
                  this.current_state = this.state = params.order;
              }
          })
        },

        methods:{
            setState(){
                if(this.current_state === null){
                    this.current_state = 'asc';
                }else if(this.current_state === 'asc'){
                    this.current_state = 'desc';
                }else{
                    this.current_state = 'asc';
                }
            },

            fireLink(){
                this.setState();
                if(this.current_state !== null) {
                    // this.$inertia.visit(this.buildQuery());
                    events.$emit('qm-set-order', {order: this.current_state, column: this.column})
                }
            }

        }

    }
</script>

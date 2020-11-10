<template>
    <div class="flex">
        <button class="inline-btn" :disabled="isDisabled" @click="switchPage">
            <slot />
        </button>
    </div>
</template>

<script>
    export default {
        name: 'paginator-link',

        props: {
            link: String|null,
            disabled:{
                type: Boolean|null,
                default: null
            },
            event:{
                type: String|null,
                default: null
            }
        },

        computed:{
            url(){
                return this.link ? this.link : '';
            },
            isDisabled(){
                if(this.disabled !== null){
                    return this.disabled;
                }
                return this.link === null;
            }
        },

        methods:{
            switchPage(){
                if(!this.isDisabled){
                    if(this.event !== null){
                        this.$emit(this.event);
                    }else{
                        this.$inertia.visit(this.url);
                    }
                }
            }
        }
    }
</script>

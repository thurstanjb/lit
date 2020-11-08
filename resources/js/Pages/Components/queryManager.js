
export default {
    name: 'query-manager',
    queries: [],
    order_keys:[
        'asc', 'desc'
    ],
    $inertia: null,

    init(inertia){
        this.$inertia = inertia
        this.queries = this.buildQueryObjectArray(window.location.search)
        this.processQuery();
    },

    buildQueryObjectArray(string){
        let query_array = [];
        let queries = string.replace('?', '').split('&');
        queries.forEach((query) => {
            let key_value = query.split('=');
            query_array.push({key:key_value[0], value:key_value[1]})
        })

        return query_array;
    },

    processQuery(){
        this.setupListeners();
        this.notifyOrderComponents();
    },

    setupListeners(){
        events.$on('qm-set-order', (params) => {
            this.setOrder(params.order, params.column)
        })
    },

    notifyOrderComponents(){
      this.queries.forEach(query => {
          console.log(query.key, this.order_keys.includes(query.key));
          if(this.order_keys.includes(query.key)){
              console.log('emitting event');
              events.$emit('set-order', {
                  order: query.key,
                  column: query.value
              });
          }
      })
    },

    fireLink(){
        this.$inertia.visit(this.buildLink());
    },

    buildLink(){
        let base_string = window.location.pathname + '?';
        this.queries.forEach((query, index) => {
            base_string += query.key + '=' + query.value;
            if(index < this.queries.length -1){
                base_string += '&'
            }
        });

        return base_string;
    },

    // Listener methods and clearences

    setOrder(key, value){
        if(this.order_keys.includes(key)){
            this.clearOrder();
            this.queries.push({key: key, value: value})
            this.fireLink();
        }
    },

    clearOrder(){
        this.order_keys.forEach(key => {
            this.queries.forEach((query, index) => {
                if(query.key === key){
                    this.queries.splice(index,1);
                }
            })
        })
    }
}

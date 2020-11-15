
export default {
    name: 'query-manager',
    queries: [],
    order_keys:[
        'asc', 'desc'
    ],
    $inertia: null,

    init(inertia){
        this.queries = [];
        this.$inertia = inertia
        this.queries = this.buildQueryObjectArray(window.location.search)
        this.processQuery();
    },

    buildQueryObjectArray(string){
        let query_array = [];
        let queries = string.replace('?', '').split('&');
        if(queries.length > 0 && queries[0] !== ''){
            queries.forEach((query) => {
                let key_value = query.split('=');
                query_array.push({key:key_value[0], value:key_value[1]})
            });
        }

        return query_array;
    },

    processQuery(){
        this.setupListeners();
        this.notifyOrderComponents();
    },

    setupListeners(){
        events.$on('qm-set-order', (params) => {
            this.setOrder(params.order, params.column)
        });
        events.$on('qm-set-page', (params) => {
            this.setPage(params.page);
        });
        events.$on('qm-set-filter', (params) => {
            this.setFilter(params.column, params.value);
        });
    },

    notifyOrderComponents(){
      this.queries.forEach(query => {
          if(this.order_keys.includes(query.key)){
              events.$emit('set-order', {
                  order: query.key,
                  column: query.value
              });
          }else{
              events.$emit('set-filter', {
                  value: decodeURI(query.value),
                  column: query.key
              });
          }
      })
    },

    fireLink(){
        this.$inertia.visit(this.buildLink());
    },

    buildLink(){
        let base_string = window.location.pathname;
        this.queries.forEach((query, index) => {
            if(index === 0){
                base_string += '?';
            }
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
    },

    setPage(page_number){
        this.clearPage();
        this.queries.push({key: 'page', value: page_number});
        this.fireLink();
    },

    clearPage(){
        this.queries.forEach((query, index) => {
            if(query.key === 'page'){
                this.queries.splice(index, 1);
            }
        })
    },

    setFilter(key, value){
        this.clearFilter(key);
        this.clearPage();

        if(value !== null){
            this.queries.push({key: key, value: value});
        }
        this.fireLink();
    },

    clearFilter(key){
        this.queries.forEach((query, index) => {
            if(query.key === key){
                this.queries.splice(index, 1);
            }
        })
    }

}

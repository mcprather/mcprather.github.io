

let app = Vue.createApp({
    data: function() {     // returns an object of data
        return {
            meal: '',          // value is set by the select list
            results: [],       // all 109 data itmes retrieved from the json file
			menu_items: [],    // menu items filtered by meal
			time_loaded: '',
            showTable: false
        }
    },
	created() {      // section executes as page loads
		var d = new Date()
		this.time_loaded = d.toLocaleTimeString()
		
		this.getData()  // call method to load json data as page loads
	},
    methods: {    // an object of functions (methods)
        async getData() {
            const response = await fetch('menu_items.json')
            this.results = await response.json()
        },
	getMenu() {
             this.showTable = true
	     // filter data form given meal
	     this.menu_items = this.results.filter( (item) => item.meal == this.meal );		
	}
   },
    
})

app.mount('#main')   //in which div to mount the vue app

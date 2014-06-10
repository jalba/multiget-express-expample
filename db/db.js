module.exports = {
	users: [
	   {id: 1, name: 'Jhon Silver'},
	   {id: 2, name: 'Rick James'},
	   {id: 3, name: 'Bertrand Russell'}
	],
	costumers: [
	   {id: 1, name: 'Carl Sagan'},
	   {id: 2, name: 'Peter Griffin'},
	   {id: 3, name: 'Ronald McDonald'}
	],
	countries: [
	   {id: 1, name: 'Argentina'},
	   {id: 2, name: 'Brazil'},
	   {id: 3, name: 'Denmark'}
	],
    find: function(dataset) {
    		this.dataset = this[dataset];
    		return this.dataset;
          }
}
 


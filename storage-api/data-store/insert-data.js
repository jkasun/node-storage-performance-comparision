const valueGenerator = require('../../lib/valueGenerator');
let data = valueGenerator.generateData();

const Store = require('data-store');
const store = new Store('store', {
    path: './storage/data-store/storage.json' 
});
 
data.forEach(item => {
    store.set(item.key, item.value);
})
## Dirty ##

### Pros ###

* Simple implementation

### Cons ##

* Initialization time depend on the data records, Takes 5s with 10000 Records and this time is extended when data record is updated
* All data set is loaded to the memory at initialization, Higher memory usage
* Use single file to save data
* Get crash if file size is larger than 200MB, Since using a single file

## Node Persist ##

### Pros ###

* Use multiple files automatically - Higher fetch speed, Low Memory Usage
* Quick Initialization, Initialized within 2s with 10000 Records
* Simple Implementation
* Memory Cache Expire is configurable

### Cons ###

* Cannot add more than 5000 records async
* Needs Node v 7.0+

## NeDB ##

### Pros ###

* Data queries are possible
* Configurable between in memory and file
* Can use multiple data stores, manually
* Operators are possible

### Cons ###

* Need to load to the memory before using, Higher Memory Usage
* Cannot Configure less than 5s interval for data persistance
* Data persistance is slow, takes 10s+ to persist 5000 records
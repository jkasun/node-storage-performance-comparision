const { fork } = require('child_process');
const { displayChart, displayTable } = require('./gui');

let forkChild = (name, scriptPath) => {
    console.log('Running child ' + name);

    return new Promise((res, rej) => {
        const forked = fork(scriptPath);
        let startTime = Date.now();

        forked.on('close', () => {
            res(Date.now() - startTime);
        });
    })
};

let taskMap = [{
    name: 'neDB Write',
    script: './storage-api/nedb/insert-data.js'
}, {
    name: 'neDB Load',
    script: './storage-api/nedb/initialize.js'
}, {
    name: 'node-dirty Write',
    script: './storage-api/node-dirty/insert-data.js'
}, {
    name: 'node-dirty Load',
    script: './storage-api/node-dirty/initialize.js'
}, {
    name: 'node-persist Write',
    script: './storage-api/node-persist/insert-data.js'
}, {
    name: 'node-persist Load',
    script: './storage-api/node-dirty/initialize.js'
}, {
    name: 'neDB Read',
    script: './storage-api/nedb/get-data.js'
}, {
    name: 'node-dirty Read',
    script: './storage-api/node-dirty/get-data.js'
}, {
    name: 'node-persist Read',
    script: './storage-api/node-persist/get-data.js'
}, {
    name: 'data-store Write',
    script: './storage-api/data-store/insert-data.js'
}, {
    name: 'data-store Load',
    script: './storage-api/data-store/initialize.js'
}, {
    name: 'data-store Read',
    script: './storage-api/data-store/get-data.js'
}]

let i = 0;

let executeNextScript = () => {
    var task = taskMap[i];
    i++;

    if (i <= taskMap.length) {
        forkChild(task.name, task.script)
            .then((executionTime) => {
                task.executionTime = executionTime;
                executeNextScript();
            });
    } else {
        displayTable(taskMap);
        displayChart(taskMap);

        console.log('\n\n');
        forkChild('neDB Memory Usage', './storage-api/nedb/memory-usage.js').then(() => {
            forkChild('node-dirty Memory Usage', './storage-api/node-dirty/memory-usage.js').then(() => {
                forkChild('node-persist Memory Usage', './storage-api/node-persist/memory-usage.js').then(() => {
                    forkChild('data-store Memory Usage', './storage-api/data-store/memory-usage.js').then(process.exit);
                })
            }) 
        })
    }
}

executeNextScript();

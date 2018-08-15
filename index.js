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
        process.exit();
    }
}

executeNextScript();

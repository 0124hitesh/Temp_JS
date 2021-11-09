if(Worker){
    var slave = new Worker('./worker.js');
    slave.postMessage(['Start', 'work'])

    slave.onmessage = (e) =>{
        console.log(e)
        console.log('index.js')
        slave.terminate()
    }
}
var a = 1;

function worker1() {
    console.log('worker1::', this);
}

const worker2 = () => {
    console.log('worker2::', this);
}

const factory = {
    work: 'task',
    worker: worker1,
    worker3: worker2
}

factory.worker();
factory.worker3();

const factory2 = {
    work: 'task',
    worker1,
    worker2
}

factory2.worker1();
factory2.worker2();

worker1();
worker2();
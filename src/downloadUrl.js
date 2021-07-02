const promise = new Promise((resolve, reject) => {
    if(reject){
        reject();
    }
    resolve();
})

const url = 'https://content.videvo.net/videvo_files/video/free/2020-05/originalContent/3d_ocean_1590675653.mov';
const downloadFunction = (url) => {
    setTimeout(()=> {
        console.log('--------', url);
    }, 5000);
}
const [a, b, c] = promise([
    downloadFunction(url),
    downloadFunction('aaa'),
    downloadFunction('bbb'),
]);
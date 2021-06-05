'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getArticleTitles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING author as parameter.
 * 
 * URL for cut and paste: 
 * https://jsonmock.hackerrank.com/api/articles?author=<authorName>&page=<num>
 *
 */

async function getData(author, page = 1) {
    let url = `https://jsonmock.hackerrank.com/api/articles?author=${author}&page=${page}`;
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let responseData = '';
            response.on('data', (chunk) => {
                responseData += chunk;
            });
            response.on('end', () => {
                resolve(JSON.parse(responseData));
            });
            response.on('error', (error) => {
                reject(error);
            });
        })
    })
}

async function getArticleTitles(author) {
    try {
        let apiData = await getData(author);
        let responseBody = await apiData;
        let titles = [];
        const filteredData = responseBody.data.map((item) => item.title ? item.title : item.story_title);
        titles.push(...filteredData);
        while (responseBody.total_pages > responseBody.page) {
            let pageNo = 2;
            let apiDataNext = await getData(author, pageNo);
            let responseBodyNext = await apiDataNext;
            const filteredData = responseBodyNext.data.map((item) => item.title ? item.title : item.story_title);
            titles.push(...filteredData);
            responseBody.page++;
            pageNo++;
        }
        titles.sort();
        return titles;
    } catch (e) {
        console.log('Error--->>', e);
    }
}

async function main() {
    const ws = fs.createWriteStream('./output');

    const author = readLine();

    const result = await getArticleTitles(author);
    ws.write(result.join('\n') + '\n');

    ws.end();
}
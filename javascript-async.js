const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log('arrow function => ', data))
    .catch(error => console.error('Error:', error));

/*

    async: Declares that a function will work with asynchronous operations. It always returns a promise.
    await: Pauses the function execution until the promise resolves, then returns the result. Can only be used inside async functions.

    so, async functions have the capability to pause using the await keyword.

*/

console.log('=======================================');

async function getDataAsync() {
    console.log('getDataAsync :: Starting fetch...');
    const response = await fetch(API_URL);
    console.log(`getDataAsync :: Fetch completed, now parsing JSON...`);
    const data = await response.json();
    console.log('getDataAsync :: All done!');
    return data;
}

 function show() {
    console.log('show :: getDataAsync starting!');
     getDataAsync();
    console.log('show :: getDataAsync done!');
}

show();


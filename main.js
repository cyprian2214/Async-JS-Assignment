// Async JS Assignment

// 1. Create a function that calls ‘sayHello’ after 2 seconds

function sayHello() {
  console.log("Hello after 2 seconds");
}

setTimeout(sayHello, 2000);

// 2. What will be the output of this code
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Output:
// A
// C
// B

// 3. Convert this callback into a promise
function loadDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

    // Promise
loadDataPromise().then((result) => {
  console.log(result);
});

// 4. Create a Promise Chain of the functions using ‘.then()’
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User"), 1000);
  });
}

function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${user}'s posts`), 1000);
  });
}

    // Promise chain
getUser()
  .then((user) => {
    console.log(user);
    return getPosts(user);
  })
  .then((posts) => {
    console.log(posts);
  });

// 5. Rewrite the promise chain in task 4 using async/await
async function fetchUserData() {
  const user = await getUser();
  console.log(user);
  const posts = await getPosts(user);
  console.log(posts);
}

fetchUserData();

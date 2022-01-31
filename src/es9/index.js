// es9 spreed operator in destructuring
const obj = {
  name: "oscar",
  age: 32,
  country: "US",
};

let { name, ...all } = obj;
console.log(name, all);

//es9 propagation properties
const obj2 = { name: "daniel", age: 32 };
const obj3 = { ...obj2, country: "US" };
console.log(obj3);

// promise finally 
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};
helloWorld()
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  .finally(() => console.log("Ends"));

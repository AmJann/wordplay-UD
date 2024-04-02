async function asyncGetWeather() {
  // This async function returns a Promise, every time, not an actual value
  //in real life we would make api calls here
  return 72;
}

const moreWeather = asyncGetWeather();
console.log(moreWeather);

function getWeather() {
  // This regular function returns a value, every time
  //in real life we would make api calls here
  return "it's sunny";
}

function run() {
  const result = getWeather();
  console.log(result);
  const asyncResult = asyncGetWeather(); // This const is holding a promise. That promise does not yet have the value you want.
  console.log(asyncResult);
  console.log(asyncResult + 5);
}

async function asyncRun() {
  const result = getWeather();
  console.log(result);
  const asyncResult = await asyncGetWeather(); // This const will be assigned the result of that promise, once it's resolved. We will sit here and wait, until the promise is resolved.
  console.log(asyncResult);
  console.log(asyncResult + 5);
}

asyncRun();
console.log();
1;
2;
3;

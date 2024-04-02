const getWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("It's sunny");
    } else {
      reject("It's rainy");
    }
  }, 2000);
});

// getWeather
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

const getExcitingWeather = async () => {
  try {
    const weather = await getWeather;
    return weather + "!";
  } catch (reason) {
    return reason + "!";
  }
};

// getExcitingWeather().then((value) => {
//   console.log(value);
// });
const promise = (async () => {
  const result = await getExcitingWeather();
  return result;
})();

const newPromise = promise
  .then((value) => {
    return value + "That's the Weather!";
  })
  .then((value) => {
    return value + " The Weather!";
  });

(async () => {
  let result = await newPromise;
  console.log(result);
})();

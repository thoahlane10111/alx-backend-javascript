// Test function handleResponseFromAPI() from ./2-then.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const promiseAndFail = Promise.reject();
handleResponseFromAPI(promiseAndFail);
handleResponseFromAPI(promise);

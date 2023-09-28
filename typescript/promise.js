const newPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Success'), 2000);
  });
  console.log("[After promise initialization]", newPromise);

  setTimeout(() => console.log("[After resolve callback run]", newPromise), 2000);
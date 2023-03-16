//your JS code here. If required.
const promises = [];

for (let i = 1; i <= 3; i++) {
  const promise = new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      resolve(time / 1000);
    }, time);
  });
  promises.push(promise);
}

const loadingRow = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;
document.querySelector('#output').innerHTML = loadingRow;

Promise.all(promises)
  .then((times) => {
    const tableRows = `
      <tr>
        <td>Promise 1</td>
        <td>${times[0]}</td>
      </tr>
      <tr>
        <td>Promise 2</td>
        <td>${times[1]}</td>
      </tr>
      <tr>
        <td>Promise 3</td>
        <td>${times[2]}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>${(times.reduce((total, time) => total + time, 0)).toFixed(3)}</td>
      </tr>
    `;
    document.querySelector('#output').innerHTML = tableRows;
  })
  .catch((error) => {
    console.error(error);
  });

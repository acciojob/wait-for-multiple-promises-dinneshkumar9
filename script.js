 const getRandomTime = () => Math.floor(Math.random() * 3) + 1;

  const promises = [
    new Promise((resolve) => setTimeout(() => resolve(), getRandomTime() * 1000)),
    new Promise((resolve) => setTimeout(() => resolve(), getRandomTime() * 1000)),
    new Promise((resolve) => setTimeout(() => resolve(), getRandomTime() * 1000)),
  ];

  Promise.all(promises)
    .then(() => {
      const loadingRow = document.querySelector('#loading');
      loadingRow.parentNode.removeChild(loadingRow);

      const output = document.querySelector('#output');

      promises.forEach((promise, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = `Promise ${index + 1}`;
        row.appendChild(nameCell);

        const timeCell = document.createElement('td');
        timeCell.textContent = `${getRandomTime()}`;
        row.appendChild(timeCell);

        output.appendChild(row);
      });

      const totalTime = promises.reduce((acc, promise) => acc + (getRandomTime() * 1000), 0);
      const totalRow = document.createElement('tr');

      const totalNameCell = document.createElement('td');
      totalNameCell.textContent = 'Total';
      totalRow.appendChild(totalNameCell);

      const totalTimeCell = document.createElement('td');
      totalTimeCell.textContent = `${(totalTime / 1000).toFixed(3)}`;
      totalRow.appendChild(totalTimeCell);

      output.appendChild(totalRow);
    })
    .catch((error) => console.error(error));
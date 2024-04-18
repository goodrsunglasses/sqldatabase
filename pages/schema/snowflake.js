document.addEventListener('DOMContentLoaded', function() {
  fetch('http://108.83.116.193:8000/data')
      .then(response => response.json())
      .then(response => {
          const container = document.getElementById('data-container');
          const table = document.createElement('table');
          table.setAttribute('border', '1');

          // Create the table headers
          const thead = document.createElement('thead');
          const headerRow = document.createElement('tr');
          response.data.columns.forEach(header => {
              const headerCell = document.createElement('th');
              headerCell.textContent = header;
              headerRow.appendChild(headerCell);
          });
          thead.appendChild(headerRow);
          table.appendChild(thead);

          // Create the table body
          const tbody = document.createElement('tbody');
          response.data.data.forEach(row => {
              const dataRow = document.createElement('tr');
              // For each header, add a cell to the row
              response.data.columns.forEach(column => {
                  const dataCell = document.createElement('td');
                  dataCell.textContent = row[column];
                  dataRow.appendChild(dataCell);
              });
              tbody.appendChild(dataRow);
          });
          table.appendChild(tbody);

          container.innerHTML = '';  // Clear previous content
          container.appendChild(table);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          document.getElementById('data-container').textContent = 'Failed to load data.';
      });
});
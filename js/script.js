/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const data = [];
    for (let i = 0; i < lines.length; i++) {
        const values = lines[i].split(',');
        data.push(values);
    }
    return data;
}

function generateTable(data) {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');

    for (let i = 0; i < data.length; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < data[i].length; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.textContent = data[i][j];
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}

function loadData(fileName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../../assets/' + fileName, true); // Update the path to the CSV files

    xhr.onload = function() {
        if (xhr.status === 200) {
            const csvData = xhr.responseText;
            const parsedData = parseCSV(csvData);
            generateTable(parsedData);
        } else {
            console.error('Failed to load the CSV file: ' + fileName);
        }
    };

    xhr.onerror = function() {
        console.error('Failed to load the CSV file: ' + fileName);
    };

    xhr.send();
}


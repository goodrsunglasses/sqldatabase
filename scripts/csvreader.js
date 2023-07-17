function readCSV() {
    var file = "../assets/illuminati-unioned_-_revenue-86899c5972bb-2023-06-23-23-43-18.csv"; // Update with the relative path to your CSV file
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var contents = xhr.responseText;
            var lines = contents.split("\n");
            var table = "<table>";
            for (var i = 0; i < lines.length; i++) {
                var cells = lines[i].split(",");
                table += "<tr>";
                for (var j = 0; j < cells.length; j++) {
                    if (i === 0) {
                        table += "<th>" + cells[j] + "</th>";
                    } else {
                        table += "<td>" + cells[j] + "</td>";
                    }
                }
                table += "</tr>";
            }
            table += "</table>";
            document.getElementById("csvTable").innerHTML = table;
        }
    };
    xhr.open("GET", file, true);
    xhr.send();
}
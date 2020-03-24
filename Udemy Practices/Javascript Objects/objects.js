function Part(part, description, price) {
    this.partNumber = part;
    this.partDescription = description;
    this.partPrice = price;
    this.printLine = function () {
        return `${this.partNumber} - "${this.partDescription}": $${this.partPrice}`;
    }
}

var parts = [];

parts.push(new Part("04152-YZZA1", "Oil Filter", 6.22));
parts.push(new Part("00272-SLLC2", "Super Long Life Coolant", 20.99));
parts.push(new Part("00279-0WQTE-01", "0W-20 Motor Oil", 5.99));
parts.push(new Part("43512-48110", "Front Brake Rotor", 83.32));

function addCell(row, value) {
    var cell = document.createElement('td');
    cell.innerHTML = value;
    row.appendChild(cell)
}

function addRow(table, value_1, value_2, value_3) {
    var row = document.createElement('tr');
    addCell(row, value_1);
    addCell(row, value_2);
    addCell(row, value_3);
    table.appendChild(row)
}

function main() {
    var table = document.getElementById("tbl");
    addRow(table, "Part Number", "Description", "Price");

    for (i = 0; i < parts.length; i++) {
        addRow(table, parts[i].partNumber, parts[i].partDescription, parts[i].partPrice);
    }
}
//prints out each printLine() function in the console
/* for (i = 0; i < parts.length; i++) {
    console.log(parts[i].printLine());
}

//prints out each object in the console
for (key in parts) {
    console.log(parts[key]);
} */
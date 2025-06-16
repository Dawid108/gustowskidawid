function numerateTables() {
    document.querySelectorAll("table").forEach(table => {
        let rows = table.querySelectorAll("tr:not(:first-child)");
        rows.forEach((row, index) => {
            let firstCell = row.querySelector("td:first-child");
            if (firstCell) {firstCell.textContent = index + 1;
            }
        });
    });
}


window.onload = function() {
    numerateTables();
};

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

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

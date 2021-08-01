const count = 7;
let itemsPerPage = 5;
const totalPages = Math.ceil(count / itemsPerPage);
let currentPage = 1;

const side = document.getElementById('side');
side.innerHTML = "<span>Side " + currentPage + " av " + totalPages + "</span>";

function changeItemsPerPage(selectObject) {
    var value = selectObject.value;
    itemsPerPage = value;

    pagination();
}

let div_num = document.querySelectorAll(".num");
for (var i = 0; i < div_num.length; i++) {
    if (i < currentPage * itemsPerPage) {
        div_num[i].style.display = "table-row";
    }
}

function pagination() {
    for (var i = 0; i < div_num.length; i++) {
        if ((i >= (currentPage - 1) * itemsPerPage) && (i < (currentPage * itemsPerPage))) {
            div_num[i].style.display = "table-row";
        } else {
            div_num[i].style.display = "none";
        }
    }

    side.innerHTML = "<span>Side " + currentPage + " av " + totalPages + "</span>";
}

function handleNextClick () {
    if (currentPage + 1 <= totalPages) {
        currentPage = currentPage + 1;
    }

    pagination();
}

function handlePrevClick () {
    if (currentPage > 1) {
        currentPage = currentPage - 1;
    }

    pagination();
}

const addBookBtn = document.querySelector("#btn");
const bmList = document.querySelector(".bm-list");
const bmNameInput = document.querySelector("#bm-name");
const bmUrlInput = document.querySelector("#bm-url");

document.addEventListener("DOMContentLoaded", loadDM);

addBookBtn.addEventListener("click", function () {
    const name = bmNameInput.value.trim();
    const url = bmUrlInput.value.trim();

    if (!name || !url) {
        alert("Please enter both name and URL");
        return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        alert("Please enter a valid URL with http:// or https://");
        return;
    }

    addBookM(name, url);
    saveBM(name, url);

    bmNameInput.value = "";
    bmUrlInput.value = "";
});

function addBookM(name, url) {
    const li = document.createElement("li");
    li.classList.add("bm");

    const link = document.createElement("a");
    link.href = url;
    link.textContent = name;
    link.target = "_blank";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("rm-btn");

    removeBtn.addEventListener("click", function () {
        li.remove();
        removeBMfromStorage(name, url);
    });

    const span = document.createElement("span");
    span.classList.add("bm-name");
    span.appendChild(link);

    li.appendChild(span);
    li.appendChild(removeBtn);

    bmList.appendChild(li);
}

function getBMfromStorage() {
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBM(name, url) {
    const bookmarks = getBMfromStorage();
    bookmarks.push({ name, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadDM() {
    const bookmarks = getBMfromStorage();
    bookmarks.forEach(e => {
        addBookM(e.name, e.url);
    });
}

function removeBMfromStorage(name, url) {
    let bookmarks = getBMfromStorage();
    bookmarks = bookmarks.filter(bm => bm.name !== name || bm.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

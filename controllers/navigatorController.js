const sectionTitles = document.querySelectorAll(".section-title");
const articleTitles = document.querySelectorAll(".article-title");
const navigator = document.getElementById("navigator");

//Elements
titlesMenuList = document.createElement("ul");
titlesMenuList.classList.add("menu-level-1")

articleTitles.forEach((Atitle, index) => {
    //create id atribute to all section-title elements for anchor
    const idAnchor = Atitle.textContent.replaceAll(" ", "-").toLowerCase();
    articleTitles[index].id = idAnchor;
});

sectionTitles.forEach((Stitle, index) => {
    //create id atribute to all section-title elements for anchor
    const idAnchor = Stitle.textContent.replaceAll(" ", "-").toLowerCase();
    sectionTitles[index].id = idAnchor;

    //assign an identifier to section elements.
    const parentSection = document.querySelector("#" + idAnchor).parentElement;
    parentSection.tagName === "SECTION" && (parentSection.id = `${idAnchor}-section`);

    //for each title create li element
    const sectionItem = document.createElement("li");
    sectionItem.innerHTML = `<a href="#${idAnchor}">${Stitle.textContent}</a>`;

    //get Section parent and iterate all article child items
    const articleTitlesScoped = document.querySelectorAll(`#${idAnchor}-section h3.article-title`);
    let list = document.createElement("ul");
    list.classList.add("menu-level-2")
    articleTitlesScoped.forEach((article) => {
        list.innerHTML += `<li><a href="#${article.id}">${article.textContent}</a></li>`;
    });
    sectionItem.appendChild(list);
    //append packaged element with all items
    titlesMenuList.appendChild(sectionItem);
});
navigator.appendChild(titlesMenuList);

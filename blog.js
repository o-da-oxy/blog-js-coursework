function create() {
    let author=String(document.getElementById('author').value);
    let header=String(document.getElementById('header').value);
    let category=String(document.getElementById('category').value);
    let content=String(document.getElementById('content').value);
    let ol = document.querySelector('ol');

    let parent = document.querySelector('article');

    let article = document.createElement('article');
    parent.appendChild(article);

    let h1 = document.createElement('h1');
    h1.textContent = header;
    article.appendChild(h1);
    let p1 = document.createElement('p');
    p1.innerHTML = "Категория:"+"<b>"+category+"</b>";
    article.appendChild(p1);
    let p2 = document.createElement('p');
    p2.innerHTML = "Автор:"+"<b>"+author+"</b>";
    article.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = content;
    article.appendChild(p3);

    let divButtons = document.createElement('div');
    divButtons.id = "buttons";
    article.appendChild(divButtons);

    let storeButton = document.createElement('input');
    storeButton.type = "button";
    storeButton.value = "Архив";
    storeButton.id = "store";
    storeButton.onclick = function() {
        let li = document.createElement('li');
        li.textContent = header;
        ol.appendChild(li);
        article.parentNode.removeChild(article);
    };
    divButtons.appendChild(storeButton);

    let deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Удалить";
    deleteButton.id = "delete";
    deleteButton.onclick = function() {
        article.parentNode.removeChild(article);
    }; 
    divButtons.appendChild(deleteButton);
}
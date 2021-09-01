const loadSearch = async () => {
    document.getElementById('searchResult').classList.add('d-none');
    document.getElementById('spinner').classList.add('spinner-border');
    const searchContent = document.getElementById('searchedBook');
    const searchValue = searchContent.value;
    searchContent.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    showResults(data.docs);
}

const showResults = books => {
    console.log(books);  
    if ((Object.keys(books).length) === 0) {
        document.getElementById('noData').innerText = "No Data Found";
        document.getElementById('showResult').textContent = '';
        document.getElementById('dataNum').innerText = '';
    } else {
        document.getElementById('noData').innerText='';
        const container = document.getElementById('showResult');
        document.getElementById('dataNum').innerText = `Total data Found : ${Object.keys(books).length}`;
        container.textContent = '';
        books.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col-lg-2');
            div.classList.add('divStyle');
            div.innerHTML = `
            <img src = "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
            <h4>${book.title}</h4>
            <p>Author: ${book.author_name}</hp>
            <p>Publisher : ${book.publisher}</p>
            <p>Publishion Year: ${book.first_publish_year}</h>
           `;
            container.appendChild(div);
        });
    }
    document.getElementById('spinner').classList.remove('spinner-border');
    document.getElementById('searchResult').classList.remove('d-none');
}
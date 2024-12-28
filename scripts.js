// Приклад додавання фільмів до сторінки Фільми
const movies = [
    { title: "Венздей 2", releaseDate: "06-01-2025" },    // Додайте більше фільмів за потреби
];

const movieList = document.getElementById('movie-list');
if (movieList) {
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} - Режисер: ${movie.director}, Дата виходу: ${movie.releaseDate}`;
        movieList.appendChild(li);
    });
}

// Приклад додавання новин до сторінки Новини
const news = [
    { title: "Вихід другого сезону серіалу Венсдей ", content: "Другий сезон американського серіалу «Венздей» був офіційно анонсований 6 січня 2023 року. Його зйомки розпочатися у 2023 році, реліз відбудеться на Netflix, на початку 2025 року." },
    // Додайте більше новин за потреби
];

const newsList = document.getElementById('news-list');
if (newsList) {
    news.forEach(article => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        newsList.appendChild(div);
    });
}

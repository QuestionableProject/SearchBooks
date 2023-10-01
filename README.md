#EU


Book Search https://meek-granita-692710.netlify.app/

A website written for a test task
- How does it work?
A topic or a word close to the book is typed into the search bar and searched for in the Google Books library. You can also select a topic and sort the book.
You can go to the book and see more about it.

- Used libraries:
React, react-router-dom, redux-toolkit, react-redux

How to start?
 - go to https://console.cloud.google.com/apis/credentials?hl=ru for get api key
 - update `.env.example` -> `.env`
 - insert the key in `.env`
 - npm i
 - npm start

What task?
 - There should be a text field and a search button. The substring entered by the user is used to search for books. The trigger to search is either pressing Enter (when the text field is in focus) or pressing the search button.
 - Filtering by category. Below the text field is a selection with the categories: all, art, biography, computers, history, medical, poetry. If "all" is selected (initially selected), then the search is performed in all categories.
 - Sorting. Next to the category selector is a selector with sorting options: relevance (selected initially), newest.
 - The found books are displayed by cards, each of which consists of an image of the book cover, the title of the book, the name of the category and the names of the authors. If several categories come for a book, then only the first one is displayed. All authors are displayed. If any part of the data does not arrive, then there is just an empty space instead.
 - The number of books found on request is displayed above the block with cards.
 - Pagination is implemented on the principle of 'load more'. Below the block with the cards is the 'Load more' button, by clicking on it, more books are loaded to the already loaded books. The pagination step is 30.
 - When you click on the card, you go to the detailed page of the book, which displays its data: cover image, title, all categories, all authors, description.

<br/>
<br/>


#RU


Поиск книг https://meek-granita-692710.netlify.app/

Веб-сайт, написанный для тестового задания.
- Как он работает?
Тема или слово, близкое к книге, вводится в строку поиска и выполняется поиск в библиотеке Google Books. Вы также можете выбрать тему и отсортировать книгу.
Вы можете перейти к книге и узнать о ней больше.

- Используемые библиотеки:
React, react-router-dom, redux-инструментарий, react-redux

Как запустить?
- идем на https://console.cloud.google.com/apis/credentials?hl=ru для получения апи ключа
- меняем `.env.example` -> `.env`
- Вставляем апи ключ в `.env`
- npm i
- npm start

Какое задание?
  - Должны быть текстовое поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.
  - Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.
  - Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest.
  - Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
  - Над блоком с карточками отображается количество найденных по запросу книг.
  - Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
  - При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.

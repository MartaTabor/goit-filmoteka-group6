import { fetchData } from './popularFilms';
import { fetchFilmsByQuery } from './fetchFilms';

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pagination = document.getElementById('pagination');

let currPage = 1;
let totalPages = 500;

const fetchDataCallback = async page => {
  await fetchData(page);
};

const fetchFilmsByQueryCallback = async (query, page) => {
  await fetchFilmsByQuery(query, page);
};

// Funkcja tworząca przyciski paginacji
export function createPaginationButtons(currPage, totalPages) {
  pagination.innerHTML = '';

  const buttons = document.createDocumentFragment();

  // Przycisk dla pierwszej strony
  const firstPageButton = createButton('1', 1);
  if (currPage === 1) {
    firstPageButton.classList.add('active');
  }
  firstPageButton.classList.add('pagination-button');
  buttons.appendChild(firstPageButton);

  // Dodaj trzy kropki po pierwszej stronie, jeśli więcej niż 3 strony
  if (totalPages > 3 && currPage > 2) {
    const dotsAfterFirstPage = document.createElement('span');
    dotsAfterFirstPage.textContent = '...';
    dotsAfterFirstPage.classList.add('dots');
    dotsAfterFirstPage.classList.add('pagination-span');
    buttons.appendChild(dotsAfterFirstPage);
  }

  // Wygeneruj przyciski dla poszczególnych stron - max 5
  for (let i = Math.max(2, currPage - 2); i <= Math.min(currPage + 2, totalPages - 1); i++) {
    const pageButton = createButton(i.toString(), i);
    if (i === currPage) {
      pageButton.classList.add('active');
    }
    buttons.appendChild(pageButton);
    pageButton.classList.add('pagination-button');
  }

  // Dodaj trzy kropki, jeśli nie jesteśmy na pierwszej stronie
  if (totalPages > 3 && currPage < totalPages - 1) {
    const dotsBeforeLastPage = document.createElement('span');
    dotsBeforeLastPage.textContent = '...';
    dotsBeforeLastPage.classList.add('dots');
    dotsBeforeLastPage.classList.add('pagination-span');
    buttons.appendChild(dotsBeforeLastPage);
  }

  // Przycisk dla ostatniej strony
  const lastPageButton = createButton(totalPages.toString(), totalPages);
  if (currPage === totalPages) {
    lastPageButton.classList.add('active');
  }
  buttons.appendChild(lastPageButton);
  lastPageButton.classList.add('pagination-button');

  pagination.appendChild(buttons);

  function createButton(text, page) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => {
      handleButtonClick(page);
      window.scrollTo(0, 0);
    });
    return button;
  }

  //   //Usun disabled do prev, jesli aktualna strona nie jest pierwsza
  //   if (currPage > 1) {
  //     prev.classList.remove('disabled');
  //   } else {
  //     prev.classList.add('disabled');
  //   }

  //   //Dodaj disabled do next, jesli aktualna strona jest ostatnia
  //   if (currPage === totalPages) {
  //     next.classList.add('disabled');
  //   } else {
  //     next.classList.remove('disabled');
  //   }

  //   if (typeof pageCallback === 'function') {
  //     pageCallback(currPage, totalPages);
  //   }
  // }

  // Funkcja dla buttona i pobierania danych
  function handleButtonClick(page) {
    currPage = page;
    fetchDataCallback(page);
    window.scrollTo(0, 0);
  }

  // Listenery na next i prev buttons
  next.addEventListener('click', () => {
    if (currPage < totalPages) {
      handleButtonClick(currPage + 1);
      window.scrollTo(0, 0);
    }
  });

  prev.addEventListener('click', () => {
    if (currPage > 1) {
      handleButtonClick(currPage - 1);
      window.scrollTo(0, 0);
    }
  });

  // // Funkcja wywołująca pobieranie danych dla wybranej strony
  // async function pageCall(page) {
  //   currPage = page;
  //   fetchData(page, pageCallback);
  // }

  // // Funkcja wywoływana po pobraniu danych, aktualizująca paginację
  // function pageCallback(page, totalPages) {
  //   createPaginationButtons(page, totalPages);
  // }
}
fetchDataCallback(currPage);
fetchFilmsByQueryCallback(currPage);

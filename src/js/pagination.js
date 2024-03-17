import { fetchData } from './popularFilms';
import { fetchFilmsByQuery } from './fetchFilms';

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pagination = document.getElementById('pagination');

let currPage = 1;
let totalPages = 500;
let query = '';

const fetchDataCallback = async page => {
  await fetchData(page);
  currPage = page;
  createPaginationButtons(currPage, totalPages);
};

const fetchFilmsByQueryCallback = async (query, page) => {
  await fetchFilmsByQuery(query, page);
  currPage = page;
  createPaginationButtons(currPage, totalPages);
  updatePaginationListeners();
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

  updatePaginationState();
}

function createButton(text, page) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', () => {
    handleButtonClick(page);
    window.scrollTo(0, 0);
  });
  return button;
}

// Funkcja do zaktualizowania listenerow
function updatePaginationListeners() {
  next.removeEventListener('click', handleNextButtonClick);
  prev.removeEventListener('click', handlePrevButtonClick);

  next.addEventListener('click', handleNextButtonClick);
  prev.addEventListener('click', handlePrevButtonClick);
}

// Listenery na next i prev buttons
next.addEventListener('click', handleNextButtonClick);
prev.addEventListener('click', handlePrevButtonClick);

function handleNextButtonClick() {
  if (currPage < totalPages) {
    handleButtonClick(currPage + 1);
    window.scrollTo(0, 0);
  }
}

function handlePrevButtonClick() {
  if (currPage > 1) {
    handleButtonClick(currPage - 1);
    window.scrollTo(0, 0);
  }
}

//Funkcja do zmiany query
function handleQueryChange(newQuery) {
  query = newQuery;
  currPage = 1;
  if (query) {
    fetchFilmsByQueryCallback(query, currPage);
  } else {
    fetchDataCallback(currPage);
  }
}

// Funkcja obsługująca kliknięcie na przycisk paginacji
function handleButtonClick(page) {
  currPage = page;
  if (query) {
    fetchFilmsByQueryCallback(query, page);
  } else {
    fetchDataCallback(page);
  }
  window.scrollTo(0, 0);
}

// Funkcja do aktualizacji stanu paginacji
function updatePaginationState() {
  if (currPage > 1) {
    prev.classList.remove('disabled');
  } else {
    prev.classList.add('disabled');
  }

  if (currPage === totalPages) {
    next.classList.add('disabled');
  } else {
    next.classList.remove('disabled');
  }
}

fetchDataCallback(currPage);

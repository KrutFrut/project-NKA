let currentPage = 0;  // Текущая страница (начинаем с первой страницы)
const rows = document.querySelectorAll('.row');  // Все строки с товарами (страницы)
const prevBtn = document.getElementById('prevBtn');  // Кнопка "Предыдущая страница"
const nextBtn = document.getElementById('nextBtn');  // Кнопка "Следующая страница"

// Скрыть все страницы, кроме первой
function initPagination() {
    rows.forEach((row, index) => {
        if (index === currentPage) {
            row.style.display = 'flex';  // Показываем первую страницу
        } else {
            row.style.display = 'none';  // Остальные страницы скрываем
        }
    });
    updateButtons();  // Обновляем состояние кнопок
}

// Обновляем видимость кнопок
function updateButtons() {
    prevBtn.disabled = currentPage === 0;  // Если на первой странице, отключаем кнопку "Предыдущая"
    nextBtn.disabled = currentPage === rows.length - 1;  // Если на последней странице, отключаем кнопку "Следующая"
}

// Изменение страницы
function changePage(direction) {
    rows[currentPage].style.display = 'none';  // Скрываем текущую страницу
    currentPage += direction;  // Обновляем текущую страницу
    rows[currentPage].style.display = 'flex';  // Показываем новую страницу
    updateButtons();  // Обновляем кнопки
}
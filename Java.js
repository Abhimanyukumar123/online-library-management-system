// script.js

document.addEventListener("DOMContentLoaded", function() {
    const bookForm = document.getElementById('book-form');
    const booksTable = document.getElementById('books-table').getElementsByTagName('tbody')[0];

    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const genre = document.getElementById('book-genre').value;
        const year = document.getElementById('book-year').value;

        if (title && author && genre && year) {
            const newRow = booksTable.insertRow();
            newRow.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${genre}</td>
                <td>${year}</td>
                <td><button class="delete">Delete</button></td>
            `;
            
            const deleteButton = newRow.querySelector('.delete');
            deleteButton.addEventListener('click', function() {
                booksTable.deleteRow(newRow.rowIndex - 1);
            });

            // Clear form fields
            bookForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});

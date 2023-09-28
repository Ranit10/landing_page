// Get the container element
var container = document.getElementById('book-container');

// Create and append book cards
container.appendChild(
    createBookCard(
        'Run Baby Run',
        'Lorem ipsum dolor sit amet.',
        'ncert.png',
        'buy/book1.html'
    )
);

container.appendChild(
    createBookCard(
        'Another Book Title',
        'Description of the second book.',
        'AnotherImage.png',
        'buy/book2.html'
    )
);

container.appendChild(
    createBookCard(
        'Third Book Title',
        'Description of the third book.',
        'ThirdImage.png',
        'buy/book3.html'
    )
);

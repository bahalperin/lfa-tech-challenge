function appViewModel() {
    var self = this;

    /**
     * Takes an input string and returns a new string that is a copy
     * of the input string, but the first character is uppercase and the
     * remaining characters are lowercase.
     * @param   {String} word A word to capitalize.
     * @returns {String}
     */
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    /**
     * I'm adding extra properties to each book in the catalog.  This will
     * be mainly be used to make filtering the catalog easier.  Normally this
     * data would be retrieved through an AJAX request and the data would
     * already have the properties needed for filtering.  I've saved the data
     * in the data.js file and I'm manipulating it here just for the sake of
     * keeping the focus of this project on the front-end.
     */
    CATALOG.forEach(function (book) {
        book.isInFilteredCatalog = ko.observable(true);
        // Make book link to correct image location.
        book.image = 'dist/thumbnails/' + book._id + '.jpg';
        // This is used to link the book to its modal that will pop up
        // when clicked.
        book.idWithHash = '#' + book._id;
        // Adding an array of the book's languages spelled out, so the
        // catalog can be filtered by language.
        book.langNames = [];
        book.languages.forEach(function (lang) {
            book.langNames.push(LANGUAGES[lang]);
        });
        // Adding an array of the book's countries spelled out, so the
        // catalog can be filtered by country.
        var countries = book.countries.split(',');
        book.countryNames = [];
        countries.forEach(function (country) {
            book.countryNames.push(COUNTRIES[country]);
        });
    });

    self.catalog = ko.observableArray(CATALOG);

    self.filteredCatalog = ko.computed(function () {
        return self.catalog().filter(function (book) {
            return book.isInFilteredCatalog();
        });
    });

    var mdCols = 4;
    var mdColName = 'col-md-' + 12 / mdCols;

    var xsCols = 2;
    var xsColName = 'col-xs-' + 12 / xsCols;

    // Used to give book elements the correct class for Bootstrap columns.
    self.colName = mdColName + ' ' + xsColName;

    /**
     * This contains the same data as self.filteredCatalog, but it is organized
     * into arrays so that it can be displayed in rows.
     */
    self.formattedCatalog = ko.computed(function () {
        var allRows = [];
        var row;
        self.filteredCatalog().forEach(function (book, i) {
            if (i % mdCols === 0) {
                if (row) {
                    allRows.push(row);
                }
                row = [];
            }
            row.push(book);
        });

        if (row) {
            allRows.push(row);
        }

        return allRows;
    });

    self.filterOptions = ko.observableArray([
        {
            displayName: 'Title',
            value: 'name'
        },
        {
            displayName: 'Author',
            value: 'authors'
        },
        {
            displayName: 'Editor',
            value: 'editor'
        },
        {
            displayName: 'Subject',
            value: 'subjects'
        },
        {
            displayName: 'Country',
            value: 'countryNames'
        },
        {
            displayName: 'Language',
            value: 'langNames'
        }
    ]);

    self.selectedFilter = ko.observable(self.filterOptions()[0]);

    /**
     * Loops through catalog and creates a list of all book values corresponding
     * to the input filter category (title, author, etc.)
     * @param   {string} filter A property of books in the catalog.
     * @returns {Array.<string>} An array of all book values corresponding to
     *                           the input property with no repeating elements.
     */
    function createDropDownOptions(filter) {
        var options = [];
        self.catalog().forEach(function (book) {
            // Need to know if the book property is an array so we can loop
            // through all values in the array checking for matches.
            if (book[filter] instanceof Array) {
                // This value is needed to get the author/editor name string
                // from the author/editor objects.
                var name = (filter === 'authors') ? 'full_name' : 'name';

                book[filter].forEach(function (option) {
                    // If filtering by author or editor, need to access the
                    // name string from the author/editor object.  Otherwise,
                    // get the value directly from the array.
                    var bookVal = (filter === 'authors' || filter === 'editor')
                        ? option[name] : option;
                    if (options.indexOf(bookVal) === -1) {
                        options.push(bookVal);
                    }
                });
            } else {
                if (options.indexOf(book[filter]) === -1) {
                    options.push(book[filter]);
                }
            }
        });
        return options;
    }

    // Object containing arrays of options for each dropdown filter category.
    self.dropDownOptions = {};

    self.filterOptions().forEach(function (option) {
        self.dropDownOptions[option.value] = ko.computed(function () {
            return createDropDownOptions(option.value);
        });
    });

    // The array to use for dropdown autocomplete options.
    self.autocomplete = ko.computed(function () {
        return self.dropDownOptions[self.selectedFilter().value]();
    });

    // Value of user input in the search field.
    self.query = ko.observable('');
    // Query converted to lowercase for easier string comparison.
    self.lwrCaseQuery = ko.computed(function () {
        return self.query().toLowerCase();
    });
    // Previous query and filter category selected.  This is used to show
    // the user what search results they're currently looking at.
    self.prevQuery = ko.observable('');
    self.prevFilter = ko.observable('');

    self.isFilteringCatalog = ko.observable();

    // Filter the catalog by the user's search terms according to the filter
    // category selected.
    self.search = function () {
        // If the input field is blank, don't waste time looping through
        // the catalog.
        if (!self.query()) {
            return;
        }
        self.isFilteringCatalog(true);
        console.log(self.isFilteringCatalog());

        // All books will be excluded by default unless a match is found.
        self.catalog().forEach(function (book) {
            book.isInFilteredCatalog(false);
        });

        var filter = self.selectedFilter().value;
        var query = self.lwrCaseQuery();

        self.catalog().forEach(function (book) {
            // Need to know if the book property is an array so we can loop
            // through all values in the array checking for matches.
            if (book[filter] instanceof Array) {
                // This value is needed to get the author/editor name string
                // from the author/editor objects.
                var name = (filter === 'authors') ? 'full_name' : 'name';

                for (var i = 0, len = book[filter].length; i < len; i++) {
                    // If filtering by author or editor, need to access the
                    // name string from the author/editor object.  Otherwise,
                    // get the value directly from the array.
                    var bookVal = (filter === 'authors' || filter === 'editor')
                        ? book[filter][i][name] : book[filter][i];
                    if (bookVal.toLowerCase().indexOf(query) !== -1) {
                        book.isInFilteredCatalog(true);
                        break;
                    }
                }
            } else {
                if (book[filter].toLowerCase().indexOf(query) !== -1) {
                    book.isInFilteredCatalog(true);
                }
            }
        });

        // Store values of search terms and filter category from this search.
        self.prevQuery(self.query());
        self.prevFilter(self.selectedFilter().displayName);

        self.isFilteringCatalog(false);
        console.log(self.isFilteringCatalog());
    }

    self.clearFilter = function () {
        self.catalog().forEach(function (book) {
            book.isInFilteredCatalog(true);
        });
        self.query('');
        self.prevFilter('');
        self.prevQuery('');
    }

    self.selectedBook = ko.observable();

    // Function to set the selected book and show the corresponding modal.
    self.showModal = function (book) {
        self.selectedBook(book);
        var $modal = $(self.selectedBook().idWithHash);
        $modal.modal('show');
    };

    self.toggleMenu = function () {
        $('.menu').toggleClass('no-transform');
    };
}

ko.applyBindings(new appViewModel());

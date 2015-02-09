#Library For All Tech Challenge

Link to the site: [http://bahalps.github.io/lfa-tech-challenge](http://bahalps.github.io/lfa-tech-challenge)

####What did you decide to do?
I decided to display the books in a grid view.  Each book is a has a thumbnail and title.  I went down this route for two reasons:

* There wasn't a lot of information on each book to display.  It felt like there was a lot of empty space in the list view from the existing app.  The problem was especially bad on larger screens.
* People are visual.  It's more enjoyable to scroll through a page filled with pictures than one filled with text.  If the user finds a book that interests them, they can get the information they want by clicking it.

The other path I considered was having a masonry layout since the thumbnails were all different sizes.  I thought this looked nice, but I had a difficult time getting it to cooperate with the framework I chose to use.  Given more time, I'd consider implementing this layout instead.

I added a search bar at the top of the screen to filter the catalog by different catagories (title, author, etc).  My thinking was that a search bar takes up very little screen real estate but makes it easy for the user to find what they want.

####Frameworks/Libraries/Languages
This assignment was completed entirely in JavaScript/HTML/CSS.  The frameworks and libraries that I used were Knockout.js, jQuery, and Boostrap.

####Testing
I would want to test:

* When the user clicks the menu icon in the top left corner, the menu is visible.
* When the menu icon is clicked a second time, the menu is hidden.
* When a book is clicked, the modal is visible.
* The data displayed on the modal matches the book that was clicked.
* When the search button is clicked, the search function is called.
* When the clear button is clicked, all books are displayed and the input field is cleared.
* When the read button is clicked, the book opens (if the book text was in the catalog).

####Thank You!
Thanks for taking the time to check out my take on the LFA reader app!  I hope you enjoy it!

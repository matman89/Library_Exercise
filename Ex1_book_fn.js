function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.Info = function() {
        console.log(title + ' by ' + author + ', ' + pages + ' pages, ' + read)
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not Read')

// This will reference the properties of the newly added book
theHobbit.Info()


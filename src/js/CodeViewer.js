import React from 'react';

const str = `class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn() {
    console.log(this.isbn);
  }
}`;

export default function CodeViewer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>JS Data Structure</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div>Select File</div>
        </div>
        <div className="col-sm-9">
          <div>
            <h1 >javascript</h1>
            <pre className="brush: javascript;">
              {str}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

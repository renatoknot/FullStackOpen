# [Fundamentals of Web apps](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)

## 0.4: new note

Create a diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

### Solution

![New note](NewNote.png)

By https://www.websequencediagrams.com/

```
title NewNote
note over browser: When the button is clicked, the browser sends a POST request to the server
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: Server responds with code 302 which is a page redirect
note over browser: Notes page reloads
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML Code
browser->server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser:main.js
note over browser: main.js makes a request for data from data.json
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser:data.json
note over browser: browser renders notes on screen

```

## 0.5: Single page app

Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

### Solution

![Single page app](Single-Page.png)

```
title Single-Page

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js
note over browser: Request json data from server
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: data.json
note over browser: Browser renders elements

```

## 0.6: New note on Single page app

Create a diagram depicting the situation where user creates a new note using the single page version of the app.

### Solution

![New note on Single page app](newnote-spa.png)

```
title 0.6: new note on single page app

note over browser:
When the button on the form is clicked,
the browser will send the user input to the server.
The Content-Type header of the request
tells the server that the included data
is represented in the JSON format.
end note
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
note over server:
The server responds with status code 201 created.
This time the server does not ask for a redirect,
the browser stays on the same page,
and it sends no further HTTP requests.
end note
server->browser: responds with HTTP status code 201
note over browser:
So, the browser NO reloads the Notes page.
end note
note over browser:
browser executes the event handler
that renders notes to display
end note
```

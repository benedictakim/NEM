# NEM (MERN without React)

npm install
node server.js

open in local port -->error 'Error: ENOENT: no such file or directory, stat C:....\client\build\index.html'
This error is as expected b/c no react client files

open in Postman
GET local/api/books --> error 'TypeError: Cannot read property &#39;find&#39; of undefined<br> &nbsp; &nbsp;at findAll (C:\...\controllers\books.js:6:10)'

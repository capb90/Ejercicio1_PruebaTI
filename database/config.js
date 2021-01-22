  const mysql = require('mysql');

  const datab = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'LXVtFuXtXj',
    password: 'kqyCIlBifO',
    database: 'LXVtFuXtXj',
    multipleStatements: true
  });

  module.exports = datab;

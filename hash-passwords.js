const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, 'src', 'lib', 'users.json');

const users = [
  {
    id: '1',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin123', 10),
    name: 'مدير',
    role: 'admin'
  },
  {
    id: '2',
    email: 'teacher@example.com',
    password: bcrypt.hashSync('teacher123', 10),
    name: 'مدرّس',
    role: 'teacher'
  }
];

fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
console.log('Users file updated with hashed passwords');

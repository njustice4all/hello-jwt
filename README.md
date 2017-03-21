# json web token test

* docker
* mongodb

```code
npm install
node app.js
docker-compose up
```

### api
POST /api/auth/register
{username, password} <br />
POST /api/auth/login <br />
GET /api/user/list <br />
POST /api/user/assign-admin/:username

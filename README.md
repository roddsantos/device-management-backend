# DEVICE MANAGEMENT BACKEND

This is the Device Management Backend application, using Node.js
First, create a .env file in the root app folder, with the following content:

```bash
BACKEND_URL=<URL of the this application (without port)>
BACKEND_PORT=<Port of the this application>

DB_HOST=<database host>
DB_PORT=<database port>
DB_DATABASE=<database name>
DB_USER=<database username>
DB_PASSWORD=<database password (if used)>

NODE_ENV=development
```

## DATABASE CREATION

After this, enter the root folder of the app and do the following commands to create the table

```bash
$ npx sequelize-cli db:create
```

And this command to create the tables

```bash
$ npx sequelize-cli db:migrate
```

## DEVELOPMENT SERVER

Now you can start the application. If you starting with npm, just do the command to install the npm packages:

```bash
$ npm install
```

And to start the application:

```bash
$ npm run dev
```

## PRODUCTION SERVER

If you using pm2, do the following command:

```bash
$ pm2 start index.js --name dm-backend
```

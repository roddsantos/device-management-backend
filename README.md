# DEVICE MANAGEMENT BACKEND

This is the Device Management Backend application, using Node.js
First, create a .env file in the root app folder, with the following content:

```bash
$ touch .env
```

To verify if the file was created, use the command

```bash
$ ls -a
```

Now, edit the .env file using the command:

```bash
$ sudo nano .env
```

And then put the content in the file:

```bash
BACKEND_URL=<URL of the this application (without port)>
FRONTEND_URL=<URL of the frontend application, for CORS issues>
BACKEND_PORT=<Port of the this application>

DB_HOST=<database host>
DB_PORT=<database port>
DB_DATABASE=<database name>
DB_USER=<database username>
DB_PASSWORD=<database password (if used)>

NODE_ENV=development
```

Press ctrl+o and then enter to save the file, and ctrl+x to exit the file

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

An EC2 server was used for the production, so be sure to do the following in the EC2 command prompt
If you using pm2, do the following command to install pm2 globally:

```bash
$ npm install -g pm2
```

Do the command to install the npm packages:

```bash
$ npm install
```

Then you can start the application using pm2 package

```bash
$ pm2 start index.js --name dm-backend
```

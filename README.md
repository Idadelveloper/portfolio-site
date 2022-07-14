# portfolio-site
Ida Delphine's portfolio

## Running the server
- Run `npm install`
- Create a .env fie for your credentials
```
DB_USERNAME=
DB_PASSWORD=
```
- Run `node server.js`
- Your server is at `http://localhost:8000`


## Running the client
- Run `npm install`
- Create a .env file. Signup to [EmailJS](https://www.emailjs.com/) and create a project.
```
REACT_APP_EMAIL_SERVICE_ID=
REACT_APP_EMAIL_TEMPLATE_ID=
REACT_APP_EMAIL_PUBLIC_KEY=
```
- Run `npm strat`
- Your frontend is at `http://localhost:3000`


## Building the site for deployment
- Go to the client directory: `cd client`
- Run `npm run build`
- Go back to the root directory: `cd ..`
- Run `node server.js`
- The site is at port 3000



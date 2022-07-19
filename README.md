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


## Deployment on the server

For a Linux/Ubuntu server running apache2 web server, follow these steps to deploy the site

* Enable rewrite module
  
```bash
sudo a2enmod rewrite
```

* Open apache configuration file at /etc/apache2/apache2.conf
* Change the AllowOverride permission from none to all

```bash
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>
```

* Copy contents of build folder to server root normally located at /var/www/html. Ensure the .htaccess file is copied over. The .htaccess file is quite important as specified [here](https://create-react-app.dev/docs/deployment/#static-server); make sure you are in the `client` directory.

```bash
sudo cp -r build/. /var/www/html
```

* restart apache2

```bash
sudo systemctl restart apache2
```




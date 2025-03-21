
<div align="center">
<h1>EcommerceApp-Backend-Api</h1>

![image](https://imgur.com/hmZxyEG.jpg)
</div>


## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation!](https://github.com/abanoubmamdouhhanna/EcommerceApp-Backend#-api-documentation)
- [Usage](#usage)
- [Deployment!](https://github.com/abanoubmamdouhhanna/EcommerceApp-Backend#-deployment)
- [Contributing!](https://github.com/abanoubmamdouhhanna/EcommerceApp-Backend#-Contributing)
- [Licence!](https://github.com/abanoubmamdouhhanna/EcommerceApp-Backend#-licence)
- [Author](https://github.com/abanoubmamdouhhanna/EcommerceApp-Backend#-Author)

## About the Project

The Ecommerce Backend project provides a robust and scalable backend solution for managing an online store. It handles product listings, user authentication, order processing, and more, serving as the backbone for ecommerce applications.

## 🎉 Features

<h4>1- Authentication and Authorization: </h4>

- Handeling Register , Login , Logout
- Confirmation email via Gmail
- Request new email confirmation if email deleted
- Forget & Reset Password by OTP

<h4>2- User Profile Management: </h4>

- user profile
- update user info
- Delete Account 
- recover Account
- profile picture and cover picture

<h4>3- Product Management: </h4>

- Create product
- update product
- wishlist
  
<h4>4- Brand Management: </h4>

- Create brand
- update brand

<h4>5- Category /sub Category Management: </h4>

- Create category /sub category
- update category /sub category

<h4>6-Coupon Management: </h4>

- Create coupon
- update coupon

<h4>7-Order Management: </h4>

- Create order
- Cancel order
- Order delivered

<h4>8-Reviews Management: </h4>

- Create review
- Update review



## Technologies Used

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com)
- [Nodemon](https://nodemon.io)
- [jwt](https://jwt.io)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [cloudinary](https://cloudinary.com)
- [multer](https://www.npmjs.com/package/multer)
- [stripe](https://www.npmjs.com/package/stripe)
- [Nodemailer](https://nodemailer.com)
- [Nano ID](https://www.npmjs.com/package/nanoid)
- [otp-generator](https://www.npmjs.com/package/otp-generator)
- [pdfkit](https://www.npmjs.com/package/pdfkit)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [joi](https://joi.dev)
- [moment](https://momentjs.com)
- [morgan](https://www.npmjs.com/package/morgan)
- [slugify](https://www.npmjs.com/package/slugify)
- [qrcode](https://www.npmjs.com/package/qrcode)


## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abanoubmamdouhhanna/Ecommerce-Backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Ecommerce-Backend
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

   <h3>1. Set up environment variables</h3>

> Note: **environment variables(.env) located into config file**

```
APP_NAME="E-CommerceApp"
PORT=<Your_PORT_Number>
DB_LOCAL=<mongodb_url>
MOOD="DEV"
SIGNATURE=<SIGNATURE>
EMAIL_TOKEN=<EMAILSIGNATURE>
SALT_ROUNDS=<SALT_ROUNDS>
OTP_LENGTH=<OTP_LENGTH>
EMAIL=<GMAIL_EMAIL>
EMAIL_PASSWORD=<GMAIL_APP_PASSWORD>
CLOUD_NAME=<CLOUDINARY_NAME>
API_KEY=<CLOUDINARY_KEY>
API_SECRET=<CLOUDINARY_SECRET>
FORGET_PASSWORD_SIGNATURE=<FORGET_PASSWORD_SIGNATURE>
RECOVER_ACCOUNT_SIGNATURE=<RECOVER_ACCOUNT_SIGNATURE>
STRIPE_KEY=<STRIPE_KEY>
CANCEL_URL=<STRIPE_CANCEL_URL>
SUCCESS_URL=<STRIPE_SUCCESS_URL>
```

- Replace `<Your_PORT_Number>` with the port number you want your server to listen on , for example (3000)
- Replace `<mongodb_url>` with your MongoDB Cloud URL
> Note: To get `MongoDB` the  Cloud URL, follow these steps through [URL](https://www.mongodb.com/docs/guides/atlas/connection-string)
- Replace `<SIGNATURE>` with any secret key for example (**UhzOXjiSgTWDZbXUSRnh**)
> Note: In JSON Web Tokens (JWT), the signature is a string of characters that is used to verify the authenticity of the token.
- Replace `<SALT_ROUNDS>` with number between 1-20
> Note: A commonly used hashing algorithm for password storage is bcrypt, and a minimum of 10 salt rounds is generally recommended.
However, some security experts recommend using a higher number of salt rounds
, such as 12 or 14, to provide additional security against brute-force attacks. [Read More...](https://medium.com/coinmonks/to-salt-or-not-to-salt-salting-is-not-the-only-answer-to-securing-passwords-cdab26bd20ad)
- Replace `<EMAIL>` with your Google Account
- Replace `<EMAIL_PASSWORD>` with your Google App password
> Note: follow these steps : [URL](https://support.google.com/accounts/answer/185833?hl=en)
- Replace `<CLOUD_NAME>`, `API_KEY`,`API_SECRET` with keys in your  [cloudinary](https://cloudinary.com) Account .  Follow these steps on this [URL](https://cloudinary.com/documentation/how_to_integrate_cloudinary#1_create_your_account_and_set_up_your_product_environment)
> ![image](https://i.imgur.com/9TndYUV.png)
- Replace `ABSTRACT_API_KEY` with  your own api key through [URL](https://www.abstractapi.com/api/ip-geolocation-api)

<h3>2. Start the server</h3>

```
nodemon [your node app]  or  nodemon
```
or
```
npm run dev
```
## 📖 API Documentation
The API documentation is provided through [Postman JSON File](./E-commerce.postman_collection.json)

<h3>Follow These Steps</h3>

  1. Click **Download raw file**
  
  ![image](https://imgur.com/vJcIyuR.png)

  2. open **[Postman Desktop](https://www.postman.com/downloads)** or through **[Postman Browser](https://www.postman.com)**
  
  - Go to File -> import  or press **CTRL+O**
  
  ![image](https://i.imgur.com/dc2pDb8.png)     ![image](https://i.imgur.com/Q6qR6vl.png)
  
  3. You will find ten main folders (`Auth`,`User`,`Category`,`subCategory`,`Coupon`,`Brand`,`Product`,`Cart`,`Order`,`Reviews`) , each folder contains an API requests. 
  
  ![image](https://imgur.com/kXtaya3.png) 

## Usage

After setting up and running the application, you can interact with the API endpoints using tools like Postman or through frontend integration. Detailed API documentation can be found [here](link-to-api-docs).

## 🚀 Deployment

>Before you begin, Make sure that you don't have any issues or errors before deploying your project.

>You need to remove `config` or `.env` file before deployment because of the sensitive data.

<h3>What do you need ?</h3>

1. Create a run script in the `package.json` file [Here](./package.json/#L9)

```json
"scripts": {
        "start": "node index.js"
    },
```

2. Add an "engines" section to your `package.json` file [Here](./package.json/#L12)

```json
"engines": {
  "node": "16.14.0"
},
```

>Note : To check the version of Node.js installed on your system, you can use the node -v command.

```
node -v
```

3. Create a `vercel.json` file and put it in the root of your project folder and then add the code below

```json
{
    "version": 2,
    "builds": [
       { "src": "./index.js", "use": "@vercel/node" }
    ],
    "routes": [
        {
          "src": "/(.*)",
          "dest": "/"
        }
      ]
 }
```

4. For our Deployment , we gonna use [vercel](https://vercel.com) 

>Note: Vercel is a cloud platform for building, deploying, and scaling web applications. It provides a seamless deployment experience for front-end frameworks like React, Angular, and Vue.js, as well as serverless functions and full-stack applications.

- Follow these steps from [Ada Cheng](https://dev.to/adafycheng/deploy-nodejs-application-to-vercel-in-5-minutes-171m#create-a-vercel-project) article 

- Once you reach here, **congratulations!** You deployed your project successfully.

![image](https://imgur.com/lI14ck8.png)
  
- Finally, you need to do the last important thing: add environment variables to your project through these steps .

1- go to you project settings

![image](https://imgur.com/qzQ9qbb.png)

2- You can either add variables one by one,  copy and paste the whole file, or import your `.env` file [Read More](https://vercel.com/docs/concepts/projects/environment-variables).

3- After submitting your environment variables, you may need to redeploy your Vercel project
## 👍 Contributing

Leave a ⭐ If you think this project is cool.
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
6. Open a pull request.


## 🔓 Licence
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the LICENSE file for more information.

## 👨‍💻 Author

Abanoub Mamdouh
<p>✉️ You can contact me at <a href="mailto:abanoubmamdouhhanna@outlook.com">abanoubmamdouhhanna@outlook.com</a></p>

Project Link: [https://github.com/abanoubmamdouhhanna/Ecommerce-Backend](https://github.com/abanoubmamdouhhanna/EcommerceApp-Backend)


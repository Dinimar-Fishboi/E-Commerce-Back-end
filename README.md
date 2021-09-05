# E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Back-End uses an Express.js API and uses Sequelize to interact with MySQL. The video linked below will provide insight on how to GET, POST, PUT and DELETE the different Categories, Tags and Products using the application Insomnia (the application should work with Postman as well).

## Deployed Link and Screenshots

[Video Link](https://vimeo.com/598202471)

![Screen Shot 2021-09-05 at 20 39 53](https://user-images.githubusercontent.com/83541287/132123884-b268ddb5-b413-491b-bb66-d201bea5f37e.png)


## Table of Contents 
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Issues](#issues)
- [License](#license-and-copyright)

## Installation

User must run npm install or yarn to ensure all packages are successfully added to the application. In addition, they will need to modify the `.env.EXAMPLE` file to `.env` while also updating the password and username to their own.

## Usage

User will need to create the database by entering the MySQL monitor in the `db` directory and rung `source schema.sql`, then seed the data by running `node seeds/index.js`.

## Tests

Once the user has created their database and seeded it, if they return to the MySQL monitor and run `SELECT * FROM Categories`, they will be able to view their data and confirm the file has been successfully prepped before launching the code via `node server.js`.

## Issues

For unknown reasons, a 400 error code arises when running a PUT function. However - the data is successfully updated. We are working on fixing this issue.

## Questions

If you have any questions, please reach out.

- [https://github.com/Dinimar-Fishboi](https://github.com/Dinimar-Fishboi)
- [dev.fish.studio@protonmail.com](dev.fish.studio@protonmail.com)

## License and Copyright

 © Dev, Fish, 2021

Licensed under the [MIT License](LICENSE).


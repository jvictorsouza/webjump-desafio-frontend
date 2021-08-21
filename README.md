# WEBJUMP - Front-end Challenge
## Description
This repository originates from a front-end challenge from the WEBJUMP company. Basically, the challenge is to present a responsive layout, as well as product listing and filtering. 

<p align="center"><img src="https://github.com/jvictorsouza/webjump-desafio-frontend/blob/master/public/show-video.gif" width="600" height="400" /></p>

The data used in the plot is available in the challenge template. More precisely, the challenge template provided by the company WEBJUMP is available at the [`project_challenge`](https://github.com/jvictorsouza/webjump-desafio-frontend/tree/project_challenge) branch. So, to test this repository, it is necessary to run the challenge template, where the mocked API will be found, and the `master` branch frontend project. For more details about the challenge, please read the README from the [`project_challenge`](https://github.com/jvictorsouza/webjump-desafio-frontend/tree/project_challenge) branch.

## Available Scripts and Versions

This project is based on the Node.js framework, particularly with the Typescript and HTML language. Furthermore, the project uses MobX for filtering state management, ContextProviders for changing themes and styles, componentization with StyledComponents, improved user experience with Toast popup information, and routing system for each product.

* **Node.JS**: v10.19.0
* **npm**: v6.14.4

## Comands/Instructions

First of all you need to know that the Front-End will be available on port 3000 and that a mock API will be available on port 8888. If the API is available on a different port, please change the base URL inside the **./src/index.tsx** file. For execution, basically in each root folder, separately for each mentioned branch, the following commands must be executed:

```
npm install
npm run start
```

So to view the project, just access: [http://localhost:3000](http://localhost:3000).
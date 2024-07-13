FROM cypress/included:13.10.0

WORKDIR /app

COPY package.json .
COPY cypress cypress
COPY cypress.config.js .


RUN npm install


CMD ["npm", "cypress:test"]
FROM node:16
WORKDIR /Source/frontend/my-app/src/index.js
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV PORT=3000
CMD [ "node", "index.js" ]
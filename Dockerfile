#FROM node:9.6.1-alpine
FROM node:9.6.1
WORKDIR /usr/src/app
EXPOSE 3000
COPY . /usr/src/app
RUN npm install --silent
CMD ["npm","start"]

#docker-compose up -d --build
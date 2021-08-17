# use ecr to avoid pull rate limiting
# FROM node:alpine 
FROM node:alpine
WORKDIR /my-project

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 4000

CMD ["yarn","start"]
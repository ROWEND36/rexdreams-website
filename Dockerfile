FROM node:alpine
COPY . ~/websites/rexdreams
WORKDIR /rexdreams
RUN npm
EXPOSE 4000
CMD node index.js
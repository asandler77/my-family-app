FROM node:10.15.0-alpine


WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY dist ./dist

EXPOSE 4200

CMD ["node", "dist/main.js"]

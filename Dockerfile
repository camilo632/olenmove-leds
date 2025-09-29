FROM node:23-alpine
RUN npm install -g serve
WORKDIR /app
COPY dist ./dist
CMD ["serve", "-s", "dist", "-l", "3002"]


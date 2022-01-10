FROM node:16-buster-slim as build
WORKDIR /app
ENV NODE_ENV production
COPY ui/package.json ui/.env ./
RUN npm install --only=prod
COPY ui ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
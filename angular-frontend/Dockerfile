FROM node:10.19.0-alpine as base


# working directory
WORKDIR /usr/src/app

# copy package.json files
COPY package.json ./
COPY package-lock.json ./

# create build stage
FROM base as build

# install dependencies
RUN npm install --silent

# add app files
COPY . .

# build app
RUN npm run build

# copy only production files over to final build
FROM base as release
RUN rm -rf /usr/src/app/package.json && rm -rf /usr/src/app/package-lock.json
COPY --from=build /usr/src/app/package-prod.json /usr/src/app/package.json
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/client/assets /usr/src/app/dist/assets
RUN npm install --production

# start app
CMD ["npm", "start"]
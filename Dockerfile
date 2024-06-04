FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./

COPY apps/react-app ./apps/react-app
COPY packages ./packages

# Install dependencies
RUN npm install

# Can you filter the build down to just one app?
# RUN npm run build

RUN npx turbo run build --filter=react-app...

CMD ["npm", "run", "start-react-app"]
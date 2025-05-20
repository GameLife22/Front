FROM node:16 as build-stage
WORKDIR /app

# Set npm configuration to be more resilient
RUN npm config set strict-ssl false \
    && npm config set registry http://registry.npmjs.org/ \
    && npm config set fetch-timeout 300000 \
    && npm config set network-timeout 300000 \
    && npm config set fetch-retries 5

# Copy package files and install dependencies with fallback options
COPY package*.json ./
RUN npm ci --verbose || npm install --no-fund --no-audit --verbose

# Copy application code and build
COPY ./ .
RUN npm run build

FROM nginx:alpine
RUN mkdir /app
COPY --from=build-stage /app/dist/gamelife/ /app
COPY nginx.conf /etc/nginx/nginx.conf

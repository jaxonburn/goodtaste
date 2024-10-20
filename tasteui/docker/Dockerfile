# Use the official Node.js image as a base
FROM node:18 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the build files to the Nginx server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 4000
EXPOSE 4000

# Change the default Nginx configuration to serve on port 4000
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

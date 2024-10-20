# Use official Node.js image as a base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate the Prisma Client
RUN npx prisma generate

# Compile TypeScript to JavaScript
RUN npm run build

# Expose port 3000 (or whatever port your app uses)
EXPOSE 3000

# Run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]
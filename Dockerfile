# Stage 1: Build the React app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the production-ready static files
RUN npm run build

# Stage 2: Serve the app
FROM node:20-alpine

# Install a lightweight static server
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app/dist /app/dist

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]

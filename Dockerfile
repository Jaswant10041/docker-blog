# 1. Use official Node image for building
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application
COPY . .

# 6. Build the Vite app
RUN npm run build

# 7. Use Nginx for serving the built app
FROM nginx:stable-alpine

# 8. Copy the build output to Nginx's html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# 9. Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# 10. Expose port 80
EXPOSE 80

# 11. Start Nginx
CMD ["nginx", "-g", "daemon off;"]

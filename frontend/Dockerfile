# Use Node.js 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force
RUN npm install

# Verify Zustand is installed
RUN npm list zustand || echo "Zustand not found!"

# Copy the rest of the application code
COPY . .

# Expose port for Vite dev server
EXPOSE 5173

# Development command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build the frontend for production
RUN npm run build

# List the build output to verify
RUN ls -la /app/dist

# Keep container running to serve as volume source
CMD ["tail", "-f", "/dev/null"]

# The build output will be available in /app/dist
# This will be mounted as a volume to share with nginx 
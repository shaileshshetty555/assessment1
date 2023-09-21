
# Use an official Node.js runtime as the base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose ports for MongoDB and Redis (assuming default ports)
EXPOSE 27017
EXPOSE 6379

# Specify the command to run your Node.js application
CMD ["node", "app.js"]

FROM  node:18-alpine

WORKDIR /nodejs
# Copy package.json to container
COPY ["package.json", "/nodejs"]
# Install dependencies
RUN npm install
# Copy all project files to container
COPY . /nodejs
# Build project
RUN npm run build
# Run project
CMD ["npm", "start"]
# Expose port
EXPOSE 4000/tcp
#Set thr base image to create the docker image for the backend
FROM node:16-alpine

#Create a user with permissions to run the application
RUN addgroup app  && adduser -S -G app app

#Set the user to run the application
USER app

#Set the working directory
WORKDIR /app

#Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

USER root

RUN chown -R app:app .

USER app

#Install the dependencies
RUN npm install

#Copy the source code to the working directory
COPY . .

#Build the application
RUN npm run build

#Expose the port on which the application will run
EXPOSE 5500

#Start the application
CMD npm run dev

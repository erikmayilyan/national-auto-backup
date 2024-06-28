#!/bin/bash

# Start backend server
cd backend
npm install
nodemon server.js &

# Start frontend server
cd ../frontend
npm install
npm start

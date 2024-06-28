#!/bin/bash

# Start backend server
cd backend
npm install
node server.js &

# Start frontend server
cd ../frontend
npm install
PORT=3001 npm start

#!/bin/bash

# Start backend server
cd backend
npm install  # Install backend dependencies
node server.js &

# Navigate back to parent directory
cd ..

# Start frontend server
cd frontend
npm install  # Install frontend dependencies
PORT=3001 npm start  # Start frontend server with specified PORT

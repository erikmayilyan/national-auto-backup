#!/bin/bash

# Install backend dependencies and start backend server
cd backend
npm install
node server.js &
cd ..

# Install frontend dependencies, build frontend, and serve it
cd frontend
npm install
npm run build
serve -s build -l 3001 &
cd ..

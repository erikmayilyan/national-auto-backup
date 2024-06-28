#!/bin/bash
cd frontend
npm install
npm run build
serve -s build -l 3001 &
cd ..

# Install backend dependencies and start backend server
cd backend
npm install
node server.js &
cd ..

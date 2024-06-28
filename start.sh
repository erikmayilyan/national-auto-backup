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
npm run build  # Build the frontend for production
serve -s build  # Serve the built frontend files

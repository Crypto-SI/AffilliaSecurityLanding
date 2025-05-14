#!/bin/bash

# Exit on any error
set -e

echo "Building and deploying AffiliaSecurity production container..."

# Thoroughly clean the project
echo "Thoroughly cleaning the project..."
./clean.sh

# Build the Docker image with optimization flags
echo "Building Docker image..."
docker compose build --no-cache --compress

# Stop any running containers
echo "Stopping any running containers..."
docker compose down || true

# Start the production container
echo "Starting production container..."
docker compose up -d

# Wait for the container to be healthy
echo "Waiting for container to be ready..."
sleep 5

# Check if the container is running
if docker compose ps | grep -q "Up"; then
  echo "Container is running. Checking health..."
  
  # Check if the container is healthy
  HEALTH_STATUS=$(docker inspect --format='{{.State.Health.Status}}' affilliasecurity 2>/dev/null || echo "unknown")
  
  if [ "$HEALTH_STATUS" = "healthy" ]; then
    echo "✅ Deployment successful! Your site is running at http://localhost:3000"
  else
    echo "⚠️ Container is running but not yet healthy. Check logs with 'docker compose logs'"
    echo "You can access the site at http://localhost:3000 when ready."
  fi
else
  echo "❌ Deployment failed. Check logs with 'docker compose logs'"
fi 
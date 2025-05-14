#!/bin/bash

# Exit on any error
set -e

echo "Cleaning project for a fresh build..."

# Remove build artifacts
echo "Removing .next directory..."
rm -rf .next

# Remove node_modules
echo "Removing node_modules..."
rm -rf node_modules

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Reinstall dependencies
echo "Reinstalling dependencies..."
npm install

echo "Cleaning complete! The project is ready for a fresh build." 
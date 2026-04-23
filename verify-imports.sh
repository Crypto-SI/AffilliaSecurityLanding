#!/bin/bash

# Exit on any error
set -e

echo "Verifying project imports and dependencies..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Check for missing imports
echo "Checking for import errors..."
npm run lint

# Verify TypeScript types
echo "Verifying TypeScript types..."
npx tsc --noEmit

echo "All checks completed. If no errors were shown, your project should build correctly." 

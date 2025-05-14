FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install additional dependencies for better builds
RUN apk add --no-cache libc6-compat

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install all dependencies for the build
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1
# Disable cache during build to avoid caching issues
ENV NEXT_CACHE_DISABLED 1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Clear any existing .next directory
RUN rm -rf .next
# Create with correct permissions
RUN mkdir -p .next
RUN chmod -R 777 .next

# Build the application with output: 'standalone'
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Ensure public directory exists and copy it
COPY --from=builder /app/public ./public

# Set the correct permission for prerendered pages
RUN mkdir -p .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Set appropriate env variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Health check to verify the application is running properly
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the application
CMD ["node", "server.js"] 
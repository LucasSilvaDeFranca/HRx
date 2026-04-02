#!/bin/sh

# Rodar migrations do Prisma
npx prisma migrate deploy --schema=/app/prisma/schema.prisma

# Iniciar API Node.js em background
node /app/dist/server.js &

# Iniciar nginx em foreground
nginx -g 'daemon off;'

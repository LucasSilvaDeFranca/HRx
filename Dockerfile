# ==============================
# Stage 1: Build API
# ==============================
FROM node:20-alpine AS api-builder
WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/api/package.json apps/api/
COPY apps/api/prisma ./apps/api/prisma

RUN npm ci --workspace=apps/api --include-workspace-root

COPY apps/api/ apps/api/
RUN cd apps/api && npx prisma generate && npm run build

# ==============================
# Stage 2: Build Frontend
# ==============================
FROM node:20-alpine AS web-builder
WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/

RUN npm ci --workspace=apps/web --include-workspace-root

COPY apps/web/ apps/web/
COPY tsconfig.json ./
RUN cd apps/web && npm run build

# ==============================
# Stage 3: Produção (nginx + node)
# ==============================
FROM node:20-alpine

# Instalar nginx
RUN apk add --no-cache nginx

# --- API ---
WORKDIR /app
COPY --from=api-builder /app/apps/api/dist ./dist
COPY --from=api-builder /app/apps/api/prisma ./prisma
COPY --from=api-builder /app/apps/api/package.json .
COPY --from=api-builder /app/node_modules ./node_modules
COPY --from=api-builder /app/apps/api/node_modules/.prisma ./node_modules/.prisma

# --- Frontend ---
COPY --from=web-builder /app/apps/web/dist /usr/share/nginx/html

# --- Nginx config ---
RUN rm -f /etc/nginx/http.d/default.conf
COPY nginx.conf /etc/nginx/http.d/default.conf

# --- Script de inicialização ---
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]

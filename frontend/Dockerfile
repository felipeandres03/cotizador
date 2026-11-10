
# ETAPA 1: Construcción del frontend
FROM node:24-alpine AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del proyecto
COPY . .

# Generar la versión de producción
RUN npm run build


# ETAPA 2: Servidor web de producción
FROM nginx:alpine

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos compilados de React
COPY --from=build /app/dist /usr/share/nginx/html

# Documentar el puerto del servidor
EXPOSE 80

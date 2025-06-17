# Etapa 1: Construcción
FROM node:20-alpine AS build

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build

RUN ls -la /app/dist
RUN ls -la /app/dist/ui_gatos_v

# Etapa 2: Servir la aplicación
FROM nginx:stable-alpine

# Copiar los archivos compilados al directorio de Nginx
COPY --from=build /app/dist/ui_gatos_v /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]

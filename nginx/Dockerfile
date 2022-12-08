FROM node AS builder
WORKDIR /cesi-eats
COPY /cesi-eats/ .
RUN npm install && npm run build

##################################
# Installe nginx sur le conteneur docker
FROM nginx 
# On se place dans le repertoire du serveur nginx
WORKDIR /usr/share/nginx/html
# Copie notre application vue dedans
COPY --from=builder /cesi-eats/dist/ .
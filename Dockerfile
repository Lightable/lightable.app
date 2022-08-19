FROM node

LABEL authors="Brys Brad"

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . . 
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

COPY . /app

EXPOSE 4173
CMD ["pnpm", "preview"]
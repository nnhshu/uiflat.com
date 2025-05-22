FROM node:22-alpine

WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép tất cả các file trong dự án
COPY . .

# Build ứng dụng (nếu cần)
RUN npm run build

# Mở cổng
EXPOSE 3839

# Chạy ứng dụng
CMD ["npm", "start"]
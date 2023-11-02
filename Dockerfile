FROM mcr.microsoft.com/playwright:v1.39.0-jammy
EXPOSE 5173
COPY . /app
RUN cd /app && yarn install
WORKDIR /app
CMD ["yarn", "start"]


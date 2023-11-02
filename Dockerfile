FROM jonbri/playwright-extend
EXPOSE 5173
COPY . /app
RUN cd /app && yarn install
WORKDIR /app
CMD ["yarn", "start"]


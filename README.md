# Wilbur

WSL:
```sh
npx playwright install-deps
yarn playwright install
chmod -R 777 playwright-report
```

Build:
```sh
yarn
yarn start
```

Docker:
```sh
yarn docker-run
yarn docker-stop
yarn docker-enter
```

Playwright:
```sh
yarn playwright
yarn playwright:interactive
```

## Reference

### Docker

User:
```
groupapp docker
usermod -aG docker $USER
```

Run container:
```
# run Dockerfile directly
docker stop <container-id>
docker run -p 4000:4000 $(docker build -q .)
```

[DockerHub](https://hub.docker.com/repository/docker/jonbri/server/general)

Image management:
```sh
# login
echo "your-password-here" | docker login --username jonbri --password-stdin

# build image
docker build -t jonbri/server .

# run image
docker run -p 4000:4000 jonbri/server:0.0.1

# push
docker push jonbri/server
```

### Playwright

```sh
# interactive mode
npx playwright test --ui-host=0.0.0.0 --ui-port=8080
```


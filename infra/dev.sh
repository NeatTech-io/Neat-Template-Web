docker rm -f neat-template-web
docker rmi -f neat-template-web

docker build \
  -t neat-template-web \
  -f infra/Dockerfile .

docker run \
  -dit \
  -e HOST=neattech.io \
  -e BACKEND_URL=api.neattech.io \
  -p 3333:80 \
  --name=neat-template-web \
  neat-template-web
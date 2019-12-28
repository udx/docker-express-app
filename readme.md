docker build . --tag udx/docker-express-app


docker run udx/docker-express-app


docker run -it --rm \
  --name=udx-express \
  -p 24011:80 \
  andypotanin/express 

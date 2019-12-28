Makes running https://hub.docker.com/repository/docker/andypotanin/express easier.

Build locally:
```
docker build . --tag udx/docker-express-app
```

Run for testing:
```
docker run -it  --rm udx/docker-express-app 
docker run -it  --rm rabbitci.azurecr.io/udx-docker-express-app:0.0.5
```

Run as service:
``` 
docker run -d \
  --publish=80 \
  --name=express.$(hostname) \
  --restart=always \
  rabbitci.azurecr.io/udx-docker-express-app:0.0.5
```

Run as service:
``` 
docker run -d \
  --publish=80 \
  --name=express.k8.$(hostname) \
  --restart=always \
  udx/docker-express-app
```

Tag for ACR (for demo purposes):
```
docker tag udx/docker-express-app rabbitci.azurecr.io/udx-docker-express-app:0.0.1
docker tag udx/docker-express-app rabbitci.azurecr.io/udx-docker-express-app:0.0.2
docker tag udx/docker-express-app rabbitci.azurecr.io/udx-docker-express-app:0.0.3
docker tag udx/docker-express-app rabbitci.azurecr.io/udx-docker-express-app:0.0.4
docker tag udx/docker-express-app rabbitci.azurecr.io/udx-docker-express-app:0.0.5
```

Push to ACR (for demo purposes):
```
docker push rabbitci.azurecr.io/udx-docker-express-app:0.0.1
docker push rabbitci.azurecr.io/udx-docker-express-app:0.0.2
docker push rabbitci.azurecr.io/udx-docker-express-app:0.0.3
docker push rabbitci.azurecr.io/udx-docker-express-app:0.0.4
docker push rabbitci.azurecr.io/udx-docker-express-app:0.0.5
```
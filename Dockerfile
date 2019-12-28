FROM andypotanin/express:latest

WORKDIR /root/express-server
ENTRYPOINT /usr/local/bin/startServer

CMD /bin/bash
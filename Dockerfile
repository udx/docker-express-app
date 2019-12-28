FROM andypotanin/express:latest

COPY app /root/express-server
WORKDIR /root/express-server

RUN npm install
ENTRYPOINT ["/root/express-server/bin/startServer"]

EXPOSE 80

CMD ["/bin/bash"]
FROM andypotanin/express:latest

WORKDIR /root

EXPOSE 8080

CMD pm2 logs
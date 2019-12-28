FROM andypotanin/express:latest

COPY app /root/express-server
WORKDIR /root/express-server

RUN npm install
ENTRYPOINT ["/root/express-server/bin/startServer"]

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s CMD curl --fail http://localhost:80/healthz || exit 1

EXPOSE 80

CMD ["pm2", "logs"]
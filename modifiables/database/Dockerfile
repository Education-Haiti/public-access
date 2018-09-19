FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=abc
ENV MYSQL_DATABASE=visitors

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
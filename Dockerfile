FROM httpd:2.4-alpine
COPY ./htdocs/ /usr/local/apache2/htdocs/
EXPOSE 18080
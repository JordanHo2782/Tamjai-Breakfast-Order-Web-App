FROM ubuntu
ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /var/app/current
#Install PHP and NPM 
RUN apt update &&\
    apt-get install apt-utils -y &&\
    apt install apt-utils php libapache2-mod-php -y &&\
    # apt-get install systemd -y &&\
    # service restart apache2 &&\
    apt-get install zip unzip php-common php-gd php-mysql php-curl php-intl php-xsl php-mbstring php-zip php-bcmath php-soap php-xdebug php-imagick -y &&\
    apt-get install -y nodejs \
    npm
#Install composer for installing laravel dependency
RUN cd ~ &&\
    apt-get install curl &&\
    curl -sS https://getcomposer.org/installer | php &&\
    mv composer.phar /usr/local/bin/composer &&\
    ln -s /usr/local/bin/composer /usr/bin/composer &&\
    cd /var/app/current

ADD . .

RUN ls &&\
    composer update &&\
    composer install &&\
    npm install &&\
    npm run dev &&\
    chmod -R 777 . &&\
    php artisan config:clear &&\
    php artisan cache:clear &&\
    php artisan key:generate 
CMD php artisan serve --host=0.0.0.0


#!/bin/bash -vue

cd api
composer install --no-interaction && \
php artisan db:create

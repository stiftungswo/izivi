#!/bin/bash -vue

nvm install 8.3 && \
nvm use 8.3 && \
cd web-client && \
npm install -g yarn --verbose && \
yarn install

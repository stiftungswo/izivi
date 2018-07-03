#!/bin/bash -vu

# checks if formatters could have been run locally to fix the code style

# check backend (api)
composer global require "squizlabs/php_codesniffer=*"
$HOME/.composer/vendor/bin/phpcbf --standard=psr2 api/ | grep "PHPCBF CAN FIX" > /dev/null
if [ $? -eq 0  ]; then
  echo "PHP Api is not properly formatted. Please reformat and commit again. See https://github.com/stiftungswo/izivi/tree/master/api#formatting"
  exit 1;
fi

# check frontend (web-client)
cd web-client
npx prettier --list-different --print-width 140 --single-quote --trailing-comma es5 "src/**/*.js"
if [ $? -ne 0 ]; then
  echo "Web-client is not properly formatted. Please reformat and commit again. See https://github.com/stiftungswo/izivi/tree/master/web-client#formatting"
  exit 1;
fi

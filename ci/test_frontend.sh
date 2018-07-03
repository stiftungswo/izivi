#!/bin/bash -vue

if [[ $TRAVIS_COMMIT_MESSAGE != *"[skip-tests]"* ]]; then
  php api/artisan migrate:fresh --seed -q
  cd web-client && npx testcafe "firefox:headless" tests/ --app "npm run start" --app-init-delay 4000
fi

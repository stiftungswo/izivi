#!/bin/bash -vue

if [[ $TRAVIS_COMMIT_MESSAGE != *"[skip-tests]"* ]]; then
  cd web-client && npx testcafe "firefox:headless" tests/
fi

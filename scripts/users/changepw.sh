#!/bin/bash

# sh shell/sign-out.sh

curl "http://localhost:4741/" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "passwords": {
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'

echo

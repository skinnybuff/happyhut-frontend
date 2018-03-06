#!/bin/bash

# sh shell/sign-out.sh

curl "http://localhost:4741/sign-out/${ID}" \
  --include \
  --request DELETE\
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo

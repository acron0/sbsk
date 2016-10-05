#!/usr/bin/env bash

lein run | xargs aws cloudsearchdomain --profile sbsk-fb-crawler --endpoint-url "http://doc-fbvideos-7em3llq7mvfiuqoshymtrg3acu.us-east-1.cloudsearch.amazonaws.com" upload-documents --content-type application/json --documents

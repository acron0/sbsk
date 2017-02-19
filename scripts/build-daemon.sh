#!/usr/bin/env bash
export SBSK_ADMIN_ADDRESS=sbskadmin.teamwoods.org
export SBSK_ADMIN_PORT=7000
lein do \
     clean, \
     cljsbuild once min-admin, \
     garden once sbsk-admin
rm -rf resources/public/js/admin-tmp
lein uberjar

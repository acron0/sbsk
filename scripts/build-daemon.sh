#!/usr/bin/env bash
export SBSK_ADMIN_ADDRESS=admin.specialbooksbyspecialkids.org
export SBSK_ADMIN_PORT=7000
export SBSK_SEARCH_ADDRESS=video-search.specialbooksbyspecialkids.org
export SBSK_SEARCH_PORT=80
lein do \
     clean, \
     cljsbuild once min-admin, \
     garden once sbsk-admin
rm -rf resources/public/js/admin-tmp
lein uberjar

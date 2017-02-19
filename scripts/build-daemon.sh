#!/usr/bin/env bash
lein do \
     clean, \
     cljsbuild once min-admin, \
     garden once sbsk-admin
rm -rf resources/public/js/admin-tmp
lein uberjar

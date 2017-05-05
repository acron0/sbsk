#!/usr/bin/env bash
export SBSK_SEARCH_ADDRESS=video-search.specialbooksbyspecialkids.org
export SBSK_SEARCH_PORT=80
lein do \
     clean, \
     cljsbuild once min, \
     garden once sbsk, \
     upload-data

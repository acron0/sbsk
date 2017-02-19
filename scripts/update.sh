#! /usr/bin/env bash
SBSK_DIR=/home/sbsk/sbsk-app
if [ -d "$SBSK_DIR" ]; then
    rm -rf $SBSK_DIR
fi
VERSION=$(curl "https://api.github.com/repos/acron0/sbsk/tags" 2> /dev/null | jq '.[0].name' | sed 's/^.\(.*\).$/\1/')
wget -O sbsk.zip "https://github.com/acron0/sbsk/archive/$VERSION.zip"
unzip sbsk.zip
mv sbsk-$VERSION/ $SBSK_DIR
cd $SBSK_DIR
./scripts/build-daemon.sh

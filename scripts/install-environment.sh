#! /usr/bin/env bash
LOC=/usr/local/bin
wget -O jq "https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64"
mv jq $LOC/jq
chmod a+x $LOC/jq

wget "https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein"
mv lein $LOC/lein
chmod a+x $LOC/lein
echo y | lein upgrade

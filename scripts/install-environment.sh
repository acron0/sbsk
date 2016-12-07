#! /usr/bin/env bash

add-apt-repository ppa:webupd8team/java
apt-get update
apt-get install -y oracle-java8-installer unzip

LOC=/usr/local/bin
wget -O jq "https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64"
mv jq $LOC/jq
chmod a+x $LOC/jq

wget "https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein"
mv lein $LOC/lein
chmod a+x $LOC/lein
echo y | lein upgrade

adduser sbsk --disabled-password

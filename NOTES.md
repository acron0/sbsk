* Download `https://raw.githubusercontent.com/acron0/sbsk/master/scripts/install-environment.sh`
* Run it as root
* `sudo -su sbsk`
* Download `scripts/update.sh`
* Run it
* Create a shell script to set env vars and run jar

``` bash
#!/usr/bin/env bash
export SBSK_FB_APP_ID=...
export SBSK_FB_APP_SECRET=...

java -jar /home/sbsk/sbsk-app/target/uberjar/sbsk.jar -c
```
* Add AWS creds and config

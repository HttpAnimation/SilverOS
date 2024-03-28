# When custom apps get added this program will compile all of them at once and enbed them in html
gcc installPackages.c -o installPackages
gcc SilverOS.c -o SilverOS -lwebdriver

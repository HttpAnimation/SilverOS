# When custom apps get added this program will compile all of them at once and enbed them in html
gcc installPackages.c -o installPackages
# gcc SilverOS.c -o SilverOS -lwebdriver
gcc Display.c -o SliverOS
gcc Display.c -o SliverOS.exe
gcc PrintHiInWindowsEXP.c -o PrintHiInWindowsEXP.exe
# Only uncomment on windows
# gcc installWindows.c -o SilvorOS.exe
cd ~/
git clone -b main https://github.com/HttpAnimation/SilverOS.git
cd SilverOS
rm geckodriver
rm displayFlask.py
rm flaskReq.json
rm installPackages
rm installPackages.c
rm installPackages.py
rm packages.json
rm systeminfo.conf
rm web_view.c
rm compile.sh
rm display.py
chmod +x SilverOS
npm install electron --save-dev
echo "Done"
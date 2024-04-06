# SilverOS

SilverOS is a user-friendly operating system simulator designed with **:3** in mind.

## Installation - Source

To install SilverOS from the source, follow these straightforward steps:

1. Open your terminal.
2. Run the following command:

```bash
git clone -b gh-pages https://github.com/HttpAnimation/SilverOS.git
```

3. Navigate to the SilverOS directory:

```bash
cd SilverOS
```

4. Install dependencies:

```bash
npm install
```

5. Build SilverOS:

```bash
npm run make
```

6. Navigate to the build directory:

```bash
cd out/make
```

Choose your operating system and follow the specific installation instructions below:

### Linux

- RPM:

```bash
sudo dnf install *.rpm
```

### macOS

- Intel:

Extract the zip file and drag the app into your Applications folder.

- ARM:

(Not tested)

don't have a m# :(

### Windows

(Not tested)

## Mods

Enhance SilverOS with additional mods by following these steps:

1. Download the desired mod from a trusted source, such as [GitHub](https://github.com).
2. Ensure proper organization of mod files:

```
- ModEXP
  - index.html
  - package.json
  - script.js
  - style.css
```

3. Move the mod folder to the "mods" directory within the SilverOS project:

```bash
mv My\ Mod Mods
```

4. for Linux and macOS run the [modLoader.sh](https://github.com/HttpAnimation/SilverOS/blob/gh-pages/modLoader.sh) script:

```bash
./modLoader.sh
```

5. For NT use the [modLoader.bat](https://github.com/HttpAnimation/SilverOS/blob/gh-pages/modLoader.bat) script:

```bash
start modLoader.bat
```

## Login

Access the login page with the default password **admin**. Modify the password by editing the **config.json** file:

Before modification:

```json
{
    "Comment-2": "This is the login password",
    "LoginPassword": "admin"
}
```

After modification:

```json
{
    "Comment-2": "This is the login password",
    "LoginPassword": "NewPasswordHere"
}
```

## How to package
To package a mod/plugin make a new file called **package.json**

```bash
nano package.json
```

Now add the following

```json
{
    "Name": "NameOfApp",
    "Photo": "ModName/iconpath/icon.png",
    "MainEXE": "ModName/file.html",
    "Width": "800px",
    "Height": "480px",
    "NewTab": false
}
```

1) "Name"

```bash
    "Name": "NameOfApp",
```
Name is the name of app usally the folder name.

```bash
    "Name": "Forkfights",
```

2) "Photo"
```bash
    "Photo": "ModName/iconpath/icon.png",
```

Photo is the icon that gets displayed on the desktop usally a size of >612x612.

2) "Photo"

```bash
    "Photo": "Forkfights/photos/icon.png",
```

3) "MainEXE"

```bash
    "MainEXE": "ModName/file.html",
```

MainEXE is the file gets displayed this is your main page.

```bash
    "MainEXE": "Forkfights/index.html",
```

4) "Width"

```bash
    "Width": "800px",
```

Width is the x axis of the app and should usally kept to be default unless reason.

```bash
    "Width": "800px",
```

5) "Height"

```bash
    "Height": "480px",
```

Height is the size of the y-axis of your app and should usally be kept as defauly unless reason.

```bash
    "Height": "480px",
```

6) NewTab

```bash
    "NewTab": false
```

NewTab tells SilverOS if the app should be opening a full new frame or a new app window this is usally for fullscreen.


## Credits

- Markdown support by [md-block](https://md-block.verou.me/)
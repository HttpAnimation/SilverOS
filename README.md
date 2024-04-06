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

- DEB:

```bash
sudo dpkg -i *.deb
```

### macOS

- Intel:

Extract the zip file and drag the app into your Applications folder.

- ARM:

(Not tested)

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
    "Name": "Name",
    "Photo": "ModName/iconpath/icon.png",
    "MainEXE": "ModName/file.html",
    "Width": "800px",
    "Height": "480px",
    "NewTab": false
}
```



## Credits

- Markdown support by [md-block](https://md-block.verou.me/)
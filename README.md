# SilverOS

SilverOS is an operating system simulator designed for being :3.

## Installation - Source

To install SilverOS, follow these steps:

1. Open a terminal.
2. Run the following command:

```bash
git clone -b gh-pages https://github.com/HttpAnimation/SilverOS.git
```

3. Navigate to the SilverOS directory:

```bash
cd SilverOS
```

```bash
npm install
```

```bash
npm run make
```

```bash
cd out/make
```



## Mods

You can enhance SilverOS by installing mods. Follow these steps to install mods:

1. Download the desired mod from a trusted source, such as [GitHub](https://github.com).
2. Ensure that the mod files are organized properly, as follows:

```
- ModEXP
  - index.html
  - package.json
  - script.js
  - style.css
```

3. Move the mod folder to the "mods" directory within the SilverOS project:

```
$ ls
index.html
mods
scripts
:3
css
old
I Like Boys :3
My Mod
modLoader.sh
```

```
$ mv My\ Mod Mods
```

4. Run the [modLoader](https://github.com/HttpAnimation/SilverOS/blob/gh-pages/modLoader.sh) script:

```bash
./modLoader.sh
```

## Login

The default password for the login page is **admin**. You can change the password by modifying the **config.json** file:

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

## Credits

- Markdown support by [md-block](https://md-block.verou.me/)
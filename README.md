# SilverOS/main
An os simualtor.

## Installing
To install open a terminal and run the following command.

```bash
git clone -b gh-pages https://github.com/HttpAnimation/SilverOS.git
```

```bash
cd SilverOS
```

### Running

```bash
npm start
```

## Mods
To install mods do the folling

1) Download the mod and make sure it's safe first remember [github](https://github.com) first.

2) If the mod is in a zip or a sub-folder make sure it's not it should look something like this.

```
-ModEXP
-- index.html
-- package.json
-- script.js
-- style.css
```

3) Put the folder in the folder [mods](https://github.com/HttpAnimation/SilverOS/tree/gh-pages/mods).

```
$/ls
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
$/mv My\ Mod Mods
```

4) Run the [modLoader](https://github.com/HttpAnimation/SilverOS/blob/gh-pages/modLoader.sh) script.

```bash
./modLoader.sh
```


## Login
The default password for the login page is **admin** you can change the password in the file **config.json**


```json
        "Comment-2": "This is the login password",
        "LoginPassword": "Root"
```

```json
        "Comment-2": "This is the login password",
        "LoginPassword": "NewPasswordHEre"
```

## Credits
Bell | [svgrepo](https://www.svgrepo.com/svg/52215/bell)

Markdown | [md-block](https://md-block.verou.me/)
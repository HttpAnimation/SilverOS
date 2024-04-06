@echo off
setlocal enabledelayedexpansion

rem Define the path to the mods folder
set "mods_folder=mods"

rem Create a temporary file to store updated mods.json
set "temp_mods_json=%temp%\temp_mods.json"

rem Start mods.json with an opening brace
echo { > "%temp_mods_json%"

rem Read each folder in the mods folder
for /d %%i in ("%mods_folder%\*") do (
    set "folder=%%i"
    set "folder_name=%%~nxi"

    rem Check if package.json exists in the current folder
    if exist "!folder!\package.json" (
        rem Extract the path from package.json
        for /f "usebackq delims=" %%j in (`realpath "!folder!\package.json"`) do (
            set "path=%%j"
        )

        rem Append to mods.json using folder name as the key
        echo "    "!folder_name!": "!path!"," >> "%temp_mods_json%"
    )
)

rem Remove the trailing comma from the last entry in mods.json
(for /f "delims=" %%a in ('type "%temp_mods_json%"') do set "line=%%a"
echo %line:~0,-1%) > "%temp_mods_json%.new"
move /y "%temp_mods_json%.new" "%temp_mods_json%" >nul

rem End mods.json with a closing brace
echo } >> "%temp_mods_json%"

rem Overwrite the existing mods.json with the updated content
move /y "%temp_mods_json%" "mods.json" >nul

echo Updated mods.json with new mods.

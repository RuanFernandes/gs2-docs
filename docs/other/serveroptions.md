---
sidebar_position: 2
---

# Server Options

The **Server Options** file controls core behavior and global settings of a Graal server.  
These options define everything from spawn points to gameplay rules, asset handling, and system limits.

---

## Syntax

Each option follows the format:

`optionname=value`

-   `optionname` → the name of the configuration variable.
-   `value` → the setting to apply (can be a number, string, `true/false`, or a list, depending on the option).

Example:

`startlevel=onlinestartlocal.graal`

---

## How to Access the List

You can see all available server option variables directly in your server by using:

`/optionshelp`

---

## Available Server Option Variables

Below is the complete list of documented options, their purpose, and usage.

---

## Player Start & Respawn

-   **startlevel** – Level where new players spawn. Default: `onlinestartlocal.graal`.
-   **startx**, **starty** – Coordinates in the start level. Defaults: `35, 30`.
-   **unstickmelevel** – Level used when players type `unstick me`.
-   **unstickmex**, **unstickmey** – Coordinates for the unstick-me location.
-   **unstickmetime** – Cooldown time before using `unstick me` again. Default: `30`.
-   **respawntime** – Respawn time for bushes.
-   **horselifetime** – Respawn time for classic horses.
-   **baddyrespawntime** – Respawn time for baddies.

---

## Player Customization

-   **setbodyallowed** – Allow players to change body via chat. Default: `true`.
-   **setheadallowed** – Allow players to change head via chat. Default: `true`.
-   **setswordallowed** – Allow sword changes via chat. Default: `true`.
-   **setshieldallowed** – Allow shield changes via chat. Default: `true`.
-   **heartlimit** – Maximum number of hearts a player can have.
-   **swordlimit** – Maximum sword power for a player.

---

## Items & Drops

-   **bushitems** – Enable bushes dropping items.
-   **baddyitems** – Enable baddies dropping items.
-   **bushitemtypes** – Which items bushes can drop (`greenrupee, bluerupee, bombs, heart`).
-   **deathitemtypes** – Items dropped on death (`rupees, darts, bombs`).
-   **spawnrate[ item ]** – Defines drop rates (`greenrupee, bluerupee, heart, bombs`).

---

## Weapons & Combat

-   **protectedweapons** – Comma-separated list of weapons that cannot be deleted by clients.
-   **healswords** – Allow negative swordpower values that heal instead of damage.
-   **putbombenabled** – Allow bombs to be placed.
-   **bomballowedtypes** – Allowed bomb powers (`all` or list: `1,2,3`).
-   **bombfilterlog** – Log attempts to send non-allowed bombs.
-   **arrowallowedtypes** – Allowed arrow powers.
-   **arrowfilterlog** – Log attempts with invalid arrows.
-   **projectile\*** – Multiple options for controlling projectile limits, distance, speed, filters, and logging.
-   **explosion\*** – Multiple options for controlling explosion limits, radius, distance, allowed levels, and logging.

---

## Server Flags & Global Settings

-   **serverflags** – Stores global server variables.
-   **dontaddserverflags** – Prevents adding new server flags beyond the default 1000.
-   **nickname** – NPC-Server’s nickname shown in playerlist.
-   **sleepwhennoplayers** – Pauses NPC-Server when no players are online.
-   **savelevels** – Allows server-side scripts to save level modifications.
-   **levelsautosave** – Auto-save levels when tile changes occur. Requires `savelevels=true`.
-   **savelevelsmessage** – Logs when a level is saved.

---

## Admin & Staff

-   **staff** – List of accounts/community names with RC access and admin rights.
-   **staffguilds** – Guilds shown under “Staff” in the player list.
-   **onlystaff** – Allow logins only from staff accounts.
-   **normaladminscanchangegralats** – Allow non-changerights staff to modify player gralats.
-   **warpto** – Enable/disable the `/warpto` command.
-   **warptoforall** – Allow all players to use `/warpto`.
-   **warptoforlowadmins** – Allow level 1 global admins to use `/warpto`.
-   **ignorewarpto** – Ignores `/warpto` command completely (useful for scripted warpto).

---

## Guilds

-   **globalguilds** – Enable global guilds (default: true).
-   **allowedglobalguilds** – Whitelist of allowed global guilds.
-   **disallowedglobalguilds** – Blacklist of disallowed global guilds.

---

## Anti-Cheat & Security

-   **speedhacktolerance** – Threshold (10–100%) for detecting excessive packet sending.
-   **disconnectifnotmoved** – Disconnect players who are idle (useful for GUI-only games).
-   **arrowcountserverside** – Verify arrow counts on server-side.
-   **bombcountserverside** – Verify bomb counts on server-side.
-   **disablegralatlog** – Disable logging of gralat activity.
-   **lockplayerz** – Prevent modifications of `player.z`.
-   **nohidewithoutbush** – Only allow hiding under bushes (disables `hideplayer()`).

---

## Miscellaneous

-   **gmaps** – List of gmaps used (without `.gmap` extension).
-   **minimap** – Classic minimap config (`levellistfile, mapimage, x, y`).
-   **playerlisticons** – List of status icons (`plisticonNAME.png`).
-   **profilevars** – Controls what shows in player profiles (`Kills:=playerkills,...`).
-   **translatedlanguages** – Languages with `.po` translations loaded.
-   **serverlanguage** – Default language of the server.
-   **defaultlanguage** – Fallback language for players.
-   **scriptlogfunctions** – Logs specific function calls to `logs/scriptfunctionslog.txt`.
-   **logscripterrorstofile** – Log script errors to `logs/scripterrors.txt`.
-   **scriptstyle** – Configures `/style` script formatting (spaces, padding, brackets).
-   **enablegs3** – Enable `//#GS3` code execution.

---

## Notes

-   Some options accept **lists** separated by commas.
-   Some options define **min/max numeric ranges** (e.g., AP timers, spawn rates).
-   Certain options are **legacy** and may not work in GS2/GS3-only servers.
-   Use with caution: misconfigured options can cause crashes or unexpected server behavior.

---

## Credits

The original list of server options was compiled and shared by **Carlito** on the Graal forums.  
This documentation expands upon it for easier reference and structured learning.

---

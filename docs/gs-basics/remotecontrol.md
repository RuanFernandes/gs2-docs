---
sidebar_position: 1
---

# Remote Control

![Remote Control Overview](/img/remotecontrol.png)

The **Remote Control (RC)** is the primary tool for server administrators and developers.  
It provides access to server files, an internal admin-only chat, and multiple sections for managing scripts and server configuration.

---

## Main Features

### 📂 File Browser

![File Browser](/img/filebrowser.png)

The file browser allows administrators to view, edit, and manage the server’s file structure.  
It is essential for organizing assets such as levels, images, sounds, and scripts.

---

### 📜 Script Sections

RC provides three main script types, each with different scopes and use cases:

#### DB NPCs

![DB NPCs](/img/dbnpcs.png)

-   Created directly in RC.
-   Often used to **store global data** or act as **shared script repositories**.
-   Accessible by multiple other scripts, making them a central reference point.

Think of DB NPCs as the “global storage” for both data and logic.

#### Weapons

![Weapons](/img/weapons.png)

-   Scripts that only run if a player has the weapon on their account.
-   Used for gameplay-specific features, player abilities, or items.
-   Scoped **per player**: if they don’t own it, the script won’t execute.

:::note Special Case
When a weapon contains **serverside code**, it can run even if no player owns the weapon.  
In this case, the script executes in **global scope**, behaving like a regular serverside script.
:::

#### Class Scripts

![Class Scripts](/img/classescript.png)

-   Designed to be **imported into other scripts or objects**.
-   Helps avoid code duplication and keeps codebases clean.
-   Players can also have class scripts attached to them for modular functionality.

---

### ⚙️ Server Options

![Server Options](/img/serveroptions.png)

The **Server Options** panel configures core aspects of the server.  
Examples include:

-   Managing the administrator list
-   Defining server-wide gameplay rules
-   Miscellaneous global configurations

👉 See [Server Options Documentation](../other/serveroptions).

---

### 📁 Folder Configs

![Folder Configs](/img/folderconfig.png)

Determines how the server organizes its asset folders.  
Examples:

-   `heads/` → player heads
-   `bodies/` → player bodies
-   `shields/` → shields
-   `levels/` → maps

Proper folder configuration ensures that assets are loaded and referenced correctly.

---

### 🌐 Server Flags

![Server Flags](/img/serverflags.png)

A storage area for **global variables** set on the server.  
Useful for persistent values that need to be accessed across multiple scripts.

---

### 👥 Player List

A live list of all players currently connected to the server.  
Admins can use this for monitoring activity, testing, or quick player management.

---

### 🛠️ RC Options

Allows customization of the RC client itself, such as adjusting interface preferences or visual settings.

---

## Summary

The Remote Control is the backbone of Graal server administration.  
It combines file access, script management, server configuration, and real-time monitoring into one central tool.

Understanding how each section works is essential for effective server development and maintenance.

## Extra Resources

An alternative tool, **RC3**, provides the same Remote Control functionality without requiring login through the game client.

You can download the beta version here: [RC3 for Windows](http://fp4.ca/windows_rc3_beta.zip).

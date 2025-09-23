---
sidebar_position: 1
---

# Graal Development - Introduction

Welcome to the **GraalScript2 Guide**, the scripting engine that powers content across GraalOnline.

## What is this guide?

This guide provides a complete reference to GScript2, from basic syntax and variables to advanced features.  
Whether you’re new to scripting or an experienced developer, you’ll find the tools you need to create and expand content on the GraalOnline platform.

The docs are organized into clear, indexed sections. You can read them sequentially to learn step by step, or use them as a quick reference.

## Who is it for?

-   Developers learning GScript2 fundamentals
-   Experienced scripters transitioning from the older engine
-   Anyone interested in building content for GraalOnline

No prior programming experience is required, though basic scripting knowledge can be helpful.

## About GScript2

GScript2 is the core scripting language for GraalOnline. It enables developers to create:

-   Automated NPCs and game mechanics
-   Interactive GUIs and interfaces
-   Custom systems and gameplay features
-   Dynamic and persistent content

### Example GScript2 Code

Here's a simple example of GScript2 syntax:

```gs2
// NPC script example
function onCreated() {
    this.nick = "Friendly NPC";
}

function onPlayerChats() {
    if (player.chat == "hello") {
        this.chat = "Hi there " @ player.nick @ "!";
    }
}

function onPlayerEnters() {
    this.chat = "Welcome " @ player.nick @ "!";
}
```

## Getting Help

If you need support beyond this guide:

-   **Direct Assistance**: Join the [Graalians Official Discord](https://discord.gg/graalians) and ask in the scripting channel

The community is active and supportive for both beginners and advanced developers.

## Next Steps

Use the sidebar to navigate, or continue to the next section to learn the basics of GScript2.

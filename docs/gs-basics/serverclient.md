---
sidebar_position: 3
---

# 3 - Server-side and Client-side

Now that you've created your "Hello World" script, let's understand the concepts of **Server-side** and **Client-side** code in GraalScript2.

## Server-side

Server-side code runs on the **server**. Anything that happens in server-side code can be seen or experienced by everyone in the game.

## Client-side

Client-side code runs on the **client**, which means it only affects the player whose screen the script is running on.

:::note
In GraalScript2, all code is server-side by default. To make code client-side, you need to add the following line at the end of your script:

```gs2
//#CLIENTSIDE
// Everything below this line will run on the client.
```

:::

---

## Testing Your Weapon Script

Next, let's add your test weapon to your player to see server-side and client-side in action.

### Step 1: Get Your Account ID or Name

1. Press **F1** to open the server list.
2. Look for the text `Account:`.  
   ![Account Name](/img/accountname.png)
3. Your account identifier can be either a **name** or an **ID**, for example: `Graal1101801`.  
   Copy this ID, as we will need it.

### Step 2: Add the Weapon to Your Player

In the **Test Weapon Script** you created, add this line at the **top of the code**:

```gs2
findplayer("ACCOUNT_NAME").addWeapon(this.name);
```

:::note
Don't worry about what this line does for now — it will be explained later in the guide.
:::

### Step 3: Creating Client-side Code

Now let's write a simple client-side script. Add the following code below your existing Hello World code:

```gs2
//#CLIENTSIDE
function onCreated() {
    player.chat = "Hello from Client-side!";
}
```

Now save your script and Congratulations! You have successfully created a client-side script.

![Client-side Script](/img/server-client.png)

:::note
You can have both server-side and client-side code in the same script. Just remember to add `//#CLIENTSIDE` at the end of your server-side code.
:::

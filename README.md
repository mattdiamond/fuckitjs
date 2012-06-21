FuckItJS
========
### Javascript Error Steamroller

FuckItJS uses state-of-the-art technology to make sure your javascript code runs whether your compiler likes it or not.

Technology
----------

Through a process known as *Eval-Rinse-Reload-And-Repeat*, FuckItJS repeatedly compiles your code, detecting errors and slicing those lines out of the script.
To survive such a violent process, FuckItJS reloads itself after each iteration, allowing the onerror handler to catch every single error in your terribly written code.

Installation
------------

1. Include "fuckit.js"
2. The End

API
---

**FuckIt**(*path_to_your_shitty_script_file*)

This will keep evaluating your code until all errors have been sliced off like mold on a piece of perfectly good bread.
Whether or not the remaining code is even worth executing, we don't know. We also don't particularly care.

**FuckIt.noConflict**()

Are you using two different FuckIt libraries? Fuck it, use FuckIt.NoConflict.
Of course, this won't really help since FuckItJS reloads itself multiple times and will continually overwrite the global FuckIt variable, but hey... at least you can feel like you're doing something smart.

FAQ
-------

**1) Is this a good idea?**

Of course not. This is quite possibly the worst javascript plugin ever written.

**2) Isn't "eval" evil?**

See Question #1.

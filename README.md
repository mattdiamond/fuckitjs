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

1. Include jQuery, because everything requires jQuery
2. Include "fuckit.js"
3. The End

API
---

**FuckIt**(*path_to_your_shitty_script_file*)

This will keep evaluating your code until all errors have been sliced off like mold on a piece of perfectly good bread.
Whether or not the remaining code is even worth executing, we don't know. We also don't particularly care.

**FuckIt.noConflict**()

Are you using two different FuckIt libraries? Fuck it, use FuckIt.NoConflict.
Of course, this won't really help since FuckItJS reloads itself multiple times and will continually overwrite the global FuckIt variable, but hey... at least you can feel like you're doing something smart.

**FuckIt.moreConflict**()

Are you tired of running from conflict? Are you ready to overwrite every single property on the global `window` object even if it crashes your browser? Then this method is for you.

Browser Compatibility
---------------------

Really? *Really?*

FAQ
-------

**1) Is this a good idea?**

Of course not. This is quite possibly the worst javascript plugin ever written.

**2) Isn't "eval" evil?**

See Question #1.

Support
-------

For technical issues: [@mattdiamond](http://twitter.com/mattdiamond) on Twitter, or e-mail me at [mdiamond@jhu.edu](mailto:mdiamond@jhu.edu)

For personal issues: Take a deep breath, it's going to be okay.

LICENSE
-------

Copyright (C) 2012, Matt Diamond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, pulverize, distribute, synergize, compost, defenestrate, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

If the Author of the Software (the "Author") needs a place to crash and you have a sofa available, you should maybe give the Author a break and let him sleep on your couch.

If you are caught in a dire situation wherein you only have enough time to save one person out of a group, and the Author is a member of that group, you must save the Author.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO BLAH BLAH BLAH ISN'T IT FUNNY HOW UPPER-CASE MAKES IT SOUND LIKE THE LICENSE IS ANGRY AND SHOUTING AT YOU.

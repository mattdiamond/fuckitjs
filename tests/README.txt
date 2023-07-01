To run the tests:

1. Run npm serve (or something else that gives you a simple web server
   from the root directory (NOT this directory).
2. Visit http://localhost:<whatever port it's using>/tests/SpecRunner.html.

This is a bit of a pain, but you can't just load the file from a file://
URL because of CORS. And you can't use jasmine-browser-runner either,
because it cares too much about errors.

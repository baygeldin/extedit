# extedit – easy to extend editor

<img src="http://i.imgur.com/Ux7kS4P.png"/> <img src="http://i.imgur.com/z1Cntd8.png"/>

Yet another one WYSIWYG you think. Nah, actually it's more like a boilerplate for your own WYSIWYG. The main goal of it is not to make a monster all-inclusive editor with ability to customize it in a limited way, but to help you to easily extend it and change it and eventually build your own very light-weight editor which will perfectly suit you. So that you don't have to think about complex logic to handle a lot of markup, but declaratively create a new control and the action it's supposed to do to your markup.

However, it doesn't mean that it's not ready. It is and you can use it as you wish: via `npm i extedit` or just download minified version from repository. It's easier to use with webpack (just require it whereever you like together with it's css). With browserify you need to include css in html (like `src="node_modules/extedit/style.css"`).

Build tools are configured well, so making your own npm package with it should be easy.

Writing documentation is hard :( So, I'll do it later on. But the code is rather simple and it should be easy to understand how to add new functionality (I hope). Once I handle some issues which I documment in the issue tracker, I'm going to write it! ;) But the main goal actually is to get rid of jQuery and rangy libraries to make it REALLY lightweight and convert it to Polymer component. So, stay tuned! :)

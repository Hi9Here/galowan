paper-map-on-fire
=================
get the code (fork and update uri)
```sh
mkdir components
cd components
git clone git@github.com:HackITtoday/paper-map-on-fire.git
cd paper*
bower install
```
Bower will  ask you stuff go for 5^
serve with python
```sh
cd ..
python -m SimpleHTTPServer

```
or node 
```sh
cd ..
sudo npm install watch-http-server -g
watch-http-server . -p 8000
```


goto `http://localhost:8000/paper-map-on-fire/demo.html`

in a editer open components/paper-map-on-fire/paper-map-on-fire.html
Fixed it :) send us a pull request


See the [component page](http://polymerlabs.github.io/seed-element) for more information.

## Getting Started

We've put together a [guide to seed-element](http://www.polymer-project.org/docs/start/reusableelements.html) to help get you rolling.

## Testing Your Element

Add the logic specific to your new element and verify its functionality. Good unit tests are essential to your verification plan but a good way to quickly sanity test your component is to access your demo.html file via a local web server. There are several ways to do this but one easy method is to run a simple web server that ships with Python, using the commands:

```sh
python -m SimpleHTTPServer
```

Or other method using NodeJS:

```sh
http-server ./
```

This starts a web server on port 8000, so you can test your new element by navigating a browser to `localhost:8000/test/index.html`.

### web-component-tester

The tests are also compatible with [web-component-tester](https://github.com/Polymer/web-component-tester). You can run them on multiple local browsers via:

```sh
npm install -g web-component-tester
wct
```

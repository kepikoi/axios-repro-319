# Repro for axios issues [#319](https://github.com/axios/axios/issues/319) and [#2731](https://github.com/axios/axios/issues/2731)

This repro shows a bug where axios 0.19.2 does use `xhrAdapter` instead of `httpAdapter` on node if XMLHttpRequest was injected into global context. 

#

````powershell
npm install
npm run
````
````
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run start --scripts-prepend-node-path=auto

> axios-repro319@1.0.0 start C:\www\.testing\axios#319
> node index.js

Refused to set unsafe header "Cookie"
[Function: xhrAdapter]

Process finished with exit code 0
````
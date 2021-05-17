# Repro for axios issues [#319](https://github.com/axios/axios/issues/319) and [#2731](https://github.com/axios/axios/issues/2731)

This repro shows a bug where axios uses `xhrAdapter` instead of `httpAdapter` in node.js runtume if XMLHttpRequest gets injected into global context. 

#

````powershell
npm install
npm start
````
````
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run start --scripts-prepend-node-path=auto

> axios-repro319@1.0.0 start C:\www\.testing\axios#319
> node index.js

Refused to set unsafe header "Cookie"
[Function: xhrAdapter]

Process finished with exit code 0
````

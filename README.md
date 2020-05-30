# iframeReact
send info between two React websites using iframe

С сайта А на сайт B, в инпут передается сообщение и с помощью window.top.postMessage() ,
сохраняется в redux store сайта B и выводится на экран. 

Передача данных обратно с Сайта А на сайт Б (передача в iFrame) на кросдоменных платформах приводит к ошибке.

Uncaught DOMException: Blocked a frame with origin "http://localhost:8080" from accessing a cross-origin frame.

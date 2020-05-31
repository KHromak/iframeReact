# iframeReact
send info between two React websites using iframe

- С сайта А на сайт B, через инпут передается сообщение и с помощью window.top.postMessage() ,
сообщение сохраняется в redux store сайта B и выводится на экран. 

- Передача данных обратно с Сайта А на сайт Б (передача в iFrame) на кросдоменных платформах приводит к ошибке.

Uncaught DOMException: Blocked a frame with origin "http://localhost:8080" from accessing a cross-origin frame.

- Запуск приложения:
1) cd siteOne: npm install;
2) npm start
3) cd siteTwo: npm install;
4) npm start

по адресу http://localhost:8008/ появится сайт B с iFrame в котором будет отбражен сайт A.

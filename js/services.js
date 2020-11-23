//cписок услуг
const servicesItems = document.querySelectorAll(".services__item");
//массив для вычисления предыдущего таргета

//перебирает все услуги и добавляет события
servicesItems.forEach((item, index) => {
  //добавляет события при клике
  item.onclick = function () {
    //переменная для уже существующего описания
    const oldDesc = document.querySelector(".services__description");
    //создает новый элемент описания
    const desc = document.createElement("div");
    desc.classList.add("services__description");
    addText(item, desc);
    addDescElem(desc, index);
  };
});

//добавялет описанию текст в соответствии с дата-атрибутом
function addText(item, desc) {
  const dataName = item.dataset.name;
  switch (dataName) {
    case "businesscard":
      desc.innerHTML = `Для любого вашего домена, зарегистрированного на «Джино», вы можете в
        несколько кликов создать
        простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам
        нужен только для почты. Вы можете разместить здесь краткую информацию о себе или вашем бизнесе,
        ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка базового варианта
        сайта-визитки абсолютно бесплатны.`;
      break;
    case "dns":
      desc.innerHTML = `Зарегистрировав домен через «Джино», вы бесплатно получаете постоянную возможность
        изменения NS-записей и направления домена туда, куда вам хочется.
        У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, 
        зарегистрированных и поддерживаемых «Джино».`;
      break;
    case "certificate":
      desc.innerHTML = `Подтвердите владение доменным именем с помощью официального сертификата «Джино». 
        Вам достаточно распечатать документ в формате PDF, который будет доступен в панели управления сразу же после делегирования домена.`;
      break;
    case "autorenewal":
      desc.innerHTML = `С помощью функции «Автопродление» больше не нужно беспокоиться о том, что 
        ваш домен внезапно перестанет работать. «Джино» заблаговременно продлит регистрацию на следующий 
        период и вышлет вам уведомление об этом.`;
      break;
    case "cloud":
      desc.innerHTML = `Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — 
        «Джино.Облако». Это надежное место для хранения файлов — здесь точно поместится всё.
        Вы получите постоянный доступ к своей музыке, фотографиям и документам и сможете без труда делиться данными с кем угодно.`;
      break;
    case "freessl":
      desc.innerHTML = `Будучи клиентом «Джино», вы можете бесплатно получить SSL-сертификат от 
        удостоверяющего центра Let’s Encrypt. Данный сертификат позволит вашим сайтам работать по 
        безопасному протоколу HTTPS и избежать предупреждений браузера о том, что на сайте используется 
        незашифрованное соединение.
        Вы можете легко обзавестись сертификатом: в разделе «Домены» вашего аккаунта выберите нужный 
        домен и на странице его настроек перейдите во вкладку «SSL». Сертификат выдаётся по нажатию одной 
        кнопки и продлевается автоматически.`;
      break;
    case "dnssec":
      desc.innerHTML = `С помощью технологии цифрового подписывания ответа DNS-сервера вы можете 
        застраховаться от возможной его подмены и быть уверенными в том, что посетители вашего сайта не 
        попали на замаскированный сайт злоумышленников.
        Для подключения DNSSEC необходимо перейти в соответствующую вкладку в настройках вашего домена и 
        нажать кнопку «Включить».`;
      break;
    case "redirect":
      desc.innerHTML = `Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно 
        перенаправить его на любую страницу любого сайта.
        У вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным
        сайтом, а не только страницей соцсети! Персонифицирование при помощи перенаправления доменного имени 
        от «Джино» — это дополнительный инструмент в продвижении и идентификации вашей деятельности.`;
      break;
  }
}
//добавляет описание по порядку в html
function addDescElem(desc, index) {
  const oldDesc = document.querySelector(".services__description");
  //удаляет прошлый элемент с описанием если он есть и добавляет новый
  if (oldDesc) {
    oldDesc.remove();
    AddDescElemWidthMediaWidth(desc, index);
  } else {
    AddDescElemWidthMediaWidth(desc, index);
  }
}
//добавляет элемент с описанием в зависимости от ширины экрана
function AddDescElemWidthMediaWidth(desc, index) {
  const list = document.querySelector(".services__list");
  const item1 = list.children[1];
  const item3 = list.children[3];
  const item5 = list.children[5];
  const windowWidth = window.innerWidth;
  if (windowWidth > 550) {
    if (index <= 3) {
      item3.insertAdjacentElement("afterEnd", desc);
      animate(desc);
    } else if (index >= 4) {
      list.insertAdjacentElement("afterEnd", desc);
      animate(desc);
    }
  }
  if (windowWidth <= 550) {
    if (index < 2) {
      item1.insertAdjacentElement("afterEnd", desc);
      animate(desc);
    } else if (index >= 2 && index < 4) {
      item3.insertAdjacentElement("afterEnd", desc);
      animate(desc);
    } else if (index >= 4 && index < 6) {
      item5.insertAdjacentElement("afterEnd", desc);
      animate(desc);
    } else if (index >= 6) {
      list.insertAdjacentElement("afterEnd", desc);
      animate(desc);
    }
  }
}
//добавляет класс анимации
function animate(desc) {
  setTimeout(() => {
    desc.classList.add("animated");
  }, 100);
}

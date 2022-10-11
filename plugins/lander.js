import axios from 'axios';

const landerConfig = require('~/lander.config.json');

export default (context, inject) => {
  // Объект набора валидаторов
  const typesValid = {
    email(value) {
      return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
    },
  };

  // Функции для получения и установки кук
  const cookie = {
    get(name) {
      const results = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
      if (results) return decodeURIComponent(results[2]);
      return null;
    },
    set(name, valueData, optionsData) {
      const options = optionsData || {};
      let { expires } = options;
      if (typeof expires === 'number' && expires) {
        const d = new Date();
        d.setTime(expires);
        expires = d;
        options.expires = d;
      }
      if (expires && expires.toUTCString) {
        options.expires = expires.toGMTString();
      }
      const value = encodeURIComponent(valueData);
      let updatedCookie = `${name}=${value}`;

      const optionsKeys = Object.keys(options);
      for (let i = 0; i < optionsKeys.length; i += 1) {
        updatedCookie += `; ${optionsKeys[i]}`;
        const propValue = options[optionsKeys[i]];
        if (propValue !== true) {
          updatedCookie += `=${propValue}`;
        }
      }
      document.cookie = updatedCookie;
    },
  };

  // Сохранение и загрузка данных форм из хранилища
  const storage = {
    save(name, data) {
      localStorage.setItem(name, JSON.stringify(data));
    },
    load(name) {
      const value = localStorage.getItem(name);
      return value ? JSON.parse(value) : null;
    },
  };

  // Валидатор для формы
  // formData - массив
  // [ { value: "", type: ""} ]
  function valid(formData) {
    for (let i = 0; i < formData.length; i += 1) {
      if (!('value' in formData[i])) return false; // Проверка на наличие value в объекте данных
      if (formData[i].value === '') return false; // Проверка на пустую строку в value
      if ('type' in formData[i]) {
        // Проверка на наличие type в объекте данных
        if (!(formData[i].type in typesValid)) return false; // Проверка на наличие валидатора из type
        if (!typesValid[formData[i].type](formData[i].value)) return false; // Вызов валидатора, конструкция для eslint
      }
    }
    return true;
  }

  // Функция оправки данных на сервер
  // formData - объект из данных формы
  // setings = объект переопределения настроек

  function getConfig() {
    let url = '';
    if (landerConfig) {
      const { unit, type, land } = landerConfig;
      // eslint-disable-next-line max-len
      url = `https://syn.su/lander.php?r=land/index&unit=${unit}&type=${type}&land=${land}&ignore-thanksall=1`;
    }
    return url;
  }

  const url = getConfig();
  const setingSend = {
    version: '',
    redirectUrl: '',
  };

  function send(formData, setingsData) {
    return new Promise((resolve, reject) => {
      const data = new FormData();

      // Получение и переназначение настроект
      const setings = setingsData || {};
      const setingsSendData = setingSend;
      const setingsKeys = Object.keys(setingsSendData);
      for (let i = 0; i < setingsKeys.length; i += 1) {
        let value;
        if (setingsKeys[i] in setings) value = setings[setingsKeys[i]];
        else value = setingsSendData[setingsKeys[i]];
        data.append(setingsKeys[i], value);
      }

      // Обработка и подготовка данных для отправки
      const formDataKeys = Object.keys(formData);
      for (let i = 0; i < formDataKeys.length; i += 1) {
        data.append(formDataKeys[i], formData[formDataKeys[i]]);
      }
      data.append('personalDataAgree', 'on');
      data.append(
        'mergelead',
        `id_${Math.random().toString(36).substr(2, 9)} ${Math.round(new Date().getTime() / 1000)}`,
      );
      data.append('url_location', document.location.href);
      data.append('entry_point', document.location.host);
      data.append('analytics_id', cookie.get('_ga'));

      // Отправка данных
      axios({
        method: 'post',
        url,
        data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', Accept: '*/*' },
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const lander = {
    send,
    valid,
    cookie,
    storage,
  };
  inject('lander', lander);
};

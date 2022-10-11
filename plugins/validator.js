import axios from 'axios';

export default (context, inject) => {
  // Настройки
  // const unit = '';
  // const type = '';
  // const land = '';
  // const version = '';
  // const redirectUrl = '';

  // eslint-disable-next-line max-len
  const url = 'https://syn.su/lander.php?r=land/index&unit=synergy_marketplace&type=marketplace&land=KD_market&ignore-thanksall=1';

  // Объект набора валидаторов
  const typesValid = {
    email(value) {
      return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
    },
  };

  // formData - массив
  // [
  //    { value: "", type: ""}
  // ]
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
  function send(formData) {
    return new Promise((resolve, reject) => {
      const data = new FormData();
      const formDataKeys = Object.keys(formData);
      for (let i = 0; i < formDataKeys.length; i += 1) {
        data.append(formDataKeys[i], formData[formDataKeys[i]]);
      }
      data.append('personalDataAgree', 'on');
      data.append('mergelead', `id_${Math.random().toString(36).substr(2, 9)}`);
      data.append('url_location', 'https://artrussiafair.com');
      data.append('entry_point', 'https://artrussiafair.com');
      data.append('analytics_id', 'GA1.2.160377000.1632940558');

      axios({
        method: 'post',
        url,
        data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: '*/*' },
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const validator = { send, valid };
  inject('validator', validator);
};

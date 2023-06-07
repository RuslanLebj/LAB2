import Handlebars from 'handlebars';
import template_cards from './components/cards/cards.hbs';
import template_footer from './components/footer/footer.hbs';
import template_header from './components/header/header.hbs';
import template_modal_edit from './components/modal_edit/modal_edit.hbs';
import template_modal_create from './components/modal_create/modal_create.hbs';


let xhttp_select = new XMLHttpRequest();
xhttp_select.addEventListener('readystatechange', function(){
    // если с запросом, который пришел от сервера, все в порядке
    if (xhttp_select.readyState === 4 && xhttp_select.status === 200){

        // распарсили ответ от сервера, т.е распарсим файл JSON
        let response = JSON.parse(xhttp_select.response);

        render(response);
    }
});



const render = (info) => {
  console.log("функция render() вызвана");
  console.log(info)
  const formattedData = {
    objects: info.map(item => ({
      id: item.id,
      img: item.img,
      name: item.name,
      description: item.description
    }))
  };
  info = formattedData;
  let html = template_cards(info);
  console.log(info)
  let app = document.getElementById('cards');
  app.innerHTML = html;
  html = template_header();
  app = document.getElementById('header');
  app.innerHTML = html;
  html = template_footer();
  app = document.getElementById('footer');
  app.innerHTML = html;

  html = template_modal_edit();
  app = document.getElementById('modal_edit');
  app.innerHTML = html;

  html = template_modal_create();
  app = document.getElementById('modal_create');
  app.innerHTML = html;
  console.log("мы тут");
};


// посылаем запрос на сервер
xhttp_select.open('GET', "http://LAB4/src/backend.php", true);
xhttp_select.send();

// export default render;
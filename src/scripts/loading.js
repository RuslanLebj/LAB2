import template_cards from './../components/cards/cards.hbs';
import template_footer from './../components/footer/footer.hbs';
import template_header from './../components/header/header.hbs';
import template_modal_edit from './../components/modal_edit/modal_edit.hbs';
import template_modal_create from './../components/modal_create/modal_create.hbs';
import objects from '../../data/objects.json';

const loader = () => {
  let html = template_cards({objects});
  let app = document.getElementById('cards');
  app.innerHTML = html;

  html = template_footer();
  app = document.getElementById('footer');
  app.innerHTML = html;

  html = template_header();
  app = document.getElementById('header');
  app.innerHTML = html;

  html = template_modal_edit();
  app = document.getElementById('modal_edit');
  app.innerHTML = html;

  html = template_modal_create();
  app = document.getElementById('modal_create');
  app.innerHTML = html;
};

export default loader;
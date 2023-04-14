import $ from "jquery";
import bootstrap from 'bootstrap/dist/js/bootstrap';

$(document).ready(function () {

  modalWrap = document.createElement('div'); // Создаем шаблон для компонента Modal
  modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h2 class="modal-title"   
            data-mdb-toggle="popover"
            title="Member's name"
            data-mdb-trigger="hover"></h2>
          </div>
          <div class="modal-body" 
          data-mdb-toggle="popover"
          title="Member's description"
          data-mdb-trigger="hover">
            <h5></h5>
          </div>
        </div>
      </div>
    </div>
  `; 
  document.body.append(modalWrap); // Добавляем шаблон элемента в body

  function changeModal(title, description){ // Функция изменения модального окна

    $('.modal-title').text(title);
    $('.modal-body').text(description);
  
  }

  // Функция показа модального окна на клик по карточке и перехода между модальными окнами с помощью стрелок
  $('.card').click(function () { 

    changeModal($(this).find('.card-title').text(), $(this).find('.card-body').text())
    var modal = new bootstrap.Modal($('.modal'));
    modal.show();

    // Находим какое модальное окно открыто в данный момент
    var current; 
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
      if ((this) == (cards[i])) {
        current = i;
      };
    };

    // Отслеживаем нажатия
    window.addEventListener('keydown', function(event) {
      if (event.keyCode == "39") {
        if (current + 1 < cards.length){
          current = current + 1;
        }
        else{
          current = 0;
        }
        changeModal($(cards[current]).find('.card-title').text(), $(cards[current]).find('.card-text').text());
      }

      if (event.keyCode == "37") {
        if (current - 1 > 0){
          current = current - 1;
        }
        else{
          current = cards.length - 1;
        }
        changeModal($(cards[current]).find('.card-title').text(), $(cards[current]).find('.card-text').text());
      }
    });

  });

  $('.btn').click(function () {
    var toast = new bootstrap.Toast($('.toast'));
    toast.show();
  });

});

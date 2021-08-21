if (document.querySelector('.statistics')) {
  (function () {
    const statistics = document.querySelector('.statistics'),
      stat_items = document.querySelectorAll('.statistics__item'),
      elips_items = document.querySelectorAll('.ellips');

    statistics.addEventListener('click', function (e) {
      let elem = e.target;

      if (elem.closest('.statistics__item') || elem.closest('.ellips')) {

        for (let i = 0; i < stat_items.length; i++) {
          elips_items[i].classList.remove('ellips--active');
          stat_items[i].classList.remove('statistics__item--active');
        }

        let elem_collect = this.querySelectorAll(`.${elem.classList[0]}`);
        let index = [].indexOf.call(elem_collect, elem);
        elips_items[index].classList.toggle('ellips--active');
        stat_items[index].classList.toggle('statistics__item--active');
      }
    });

  })()
}
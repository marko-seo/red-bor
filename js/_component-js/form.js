const form_order = new Vue({
  el: '#form-call',
  data: {
    seen: false,
    response: '',
    reset: false,
    fields: [
      { name: 'name', type: 'text', placeholder: 'Например, Иван', label: 'Введите имя', required: false, val: ''},
      { name: 'tel', type: 'tel', placeholder: '+7 (000) 000 000 00', label: 'Введите телефон', required: true, val: ''}
    ]
  },
  methods: {
    closeForm() {
      this.seen = false;
    },
    sumbitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.fields[0]['val'],
        tel: this.fields[1]['val']
      }).then(response => {
        this.fields.forEach((el) => {el.val = ''});
        this.seen = false;
        this.response = JSON.stringify(response, null, 2)
        console.log(response.data, this.response);
      })
    }
  },
  computed: {
    showForm() {
      return {
        'form--show': this.seen
      }
    }
  }
})


const form_view = new Vue({
  el: '#form-view',
  data: {
    seen: false,
    fields: [
      { name: 'name', type: 'text', placeholder: 'Например, Иван', label: 'Введите имя', required: false, val: ''},
      { name: 'tel', type: 'tel', placeholder: '+7 (000) 000 000 00', label: 'Введите телефон', required: true, val: ''},
      {name: 'email', type: 'email', placeholder: 'Например, y@yandex.ru', label: 'Введите email', required: false, val: ''}
    ]
  },
  methods: {
    closeForm() {
      this.seen = false;
    },
    sumbitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.fields[0]['val'],
        tel: this.fields[1]['val'],
        email: this.fields[2]['val']
      }).then(response => {
        this.fields.forEach((el) => {el.val = ''});
        this.seen = false;
        this.response = JSON.stringify(response, null, 2)
        console.log(this.response);
      })
    }
  },
  computed: {
    showForm() {
      return {
        'form--show': this.seen
      }
    }
  }
})


const form_booked = new Vue({
  el: '#form-booked',
  data: {
    seen: false,
    fields: [
      { name: 'name', type: 'text', placeholder: 'Например, Иван', label: 'Введите имя', required: false, val: '' },
      { name: 'tel', type: 'tel', placeholder: '+7 (000) 000 000 00', label: 'Введите телефон', required: true, val: '' },
      { name: 'email', type: 'email', placeholder: 'Например, y@yandex.ru', label: 'Введите email', required: false, val: '' },
      { name: 'plot', type: 'text', placeholder: 'Например, 4159', label: 'Номер участка', required: true, val: ''}
    ]
  },
  methods: {
    closeForm() {
      this.seen = false;
    },
    sumbitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.fields[0]['val'],
        tel: this.fields[1]['val'],
        email: this.fields[2]['val'], 
        plot: this.fields[3]['val']
      }).then(response => {
        this.fields.forEach((el) => {el.val = ''});
        this.seen = false;
        this.response = JSON.stringify(response, null, 2)
        console.log(this.response);
      })
    }
  },
  computed: {
    showForm() {
      return {
        'form--show': this.seen
      }
    }
  }
})




document.addEventListener('click', function (e) {
  let elem = e.target;

  if (elem.closest('.btn-order-call')) {
    return form_order.seen = true;
  } else if (elem.closest('.btn-order-view')) {
    return form_view.seen = true;
  } else if (elem.closest('.btn-order-booked')) {
    return form_booked.seen = true;
  }

})

const cards = document.querySelectorAll(".card");
  
    document.querySelector('.filter').addEventListener('click', event => {
      console.log(event.target.classList)
      if (!event.target.classList.contains('button_filter')) return false;

      let filterClass = event.target.dataset['filter'];

      cards.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all'){
          elem.classList.add('hide');
        }
      });
    });  
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDayslist = [29, 30];
  
  
  for (let i = 1; i <= 31; i += 1) {
    dezDayslist.push(i);
  };
  console.log(dezDayslist);

  for (let i = 1; i <= dezDayslist.length; i += 1) {
    let day = document.createElement('li');
    document.getElementById('days').appendChild(day) ;
    day.innerText = dezDayslist[i - 1];
    if (dezDayslist[i - 1] === 24) {
      day.className = 'day holiday'
    }
    else if (dezDayslist[i - 1] === 4 || dezDayslist[i - 1] === 11 || dezDayslist[i - 1] === 18 || dezDayslist[i - 1] === 25) {
      day.className = 'day friday';
    }
    else {
      day.className = 'day';
    }
  };
  
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = 'Feriados';
  document.querySelector('.buttons-container').appendChild(button);

  button.addEventListener('click', function() {
    document.getElementsByClassName('day holiday').style.backgroundColor = 'blue'
  })
  
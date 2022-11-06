function createGame(player1,hour,player2){
  return `
   <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>`
}

let delay = -0.4

createCard = (date,day,games) => {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
           ${games}
        </div>`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "23/11",
    "quarta",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa-rica")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south-korea", "16:00", "portugal") +
      createGame("brazil", "16:00", "cameroon")
  )
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('#word1').innerText = data[0].word
        document.querySelector('#definition1').innerText = data[0].meanings[0].definitions[0].definition
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      // document.querySelector('#nextDefinition').addEventListener('click', getNextDefinition)
      // function getNextDefinition() {
      //   for(let i = 1; i < data.length; i++) {
      //     document.querySelector('#definition1').innerText = data[i].meanings[i].definitions[i].definition
      //   }
      // }
}

document.querySelector('#nextDefinition').addEventListener('click', getNextDefinition)

function getNextDefinition(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

      for(let i = 1; i < data.length; i++) {
        document.querySelector('#definition1').innerText = data[i].meanings[i].definitions[i].definition
      }

      })
    }



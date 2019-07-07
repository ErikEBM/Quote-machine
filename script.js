var quotes = [
    '“All war is a symptom of man\'s failure as a thinking animal.” ― John Steinbeck',
    '“Strictly speaking, we do not make decisions, decisions make us.” ― José Saramago',
    '“The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.” ― Albert Camus',
    '“A lie is more comfortable than doubt, more useful than love, more lasting than truth.” ― Gabriel García Márquez',
    '“Try again. Fail again. Fail better.” ― Samuel Beckett',
    '“No man chooses evil because it is evil; he only mistakes it for happiness, the good he seeks.” ― Mary Shelley',
    '“The constant happiness is curiosity.” ― Alice Munro',
    '“Always do sober what you said you\'d do drunk. That will teach you to keep your mouth shut.” ― Ernest Hemingway',
  ];
  
  function show(){
    var randomQuote = Math.floor(Math.random() * (quotes.length));
    
    document.getElementById("ShowQuotes").innerHTML = quotes[randomQuote];
  }
  window.onload = show;
  
  function GetANewQuote(){
    var randomQuote = Math.floor(Math.random() * (quotes.length));
     
    document.getElementById("ShowQuotes").innerHTML = quotes[randomQuote];
    
  }
  
  
  function tweetIt(){
    var phrase = document.getElementById('ShowQuotes').innerText;
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(phrase) + ".";
      
    window.open(tweetUrl);
  }
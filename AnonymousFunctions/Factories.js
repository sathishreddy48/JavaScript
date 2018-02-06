function GreetingsFactory(language)
{
    return function(Firstname,lastname)
    {
        if(language==='en')
            {
              console.log('Hello ' +Firstname+' '+lastname)  ; 
            }
        if(language==='es')
            {
                 console.log('Hello :Spanish ' +Firstname+' ' +lastname)  ; 
            }
    }
}
    var englishgreetings=GreetingsFactory('en');
    var spanishgreetings=GreetingsFactory('es');
englishgreetings('Satheesh','Reddy');
spanishgreetings('Satheesh','Ganji');
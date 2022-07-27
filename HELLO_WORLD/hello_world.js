ReactDOM.render(
    
    //creando elemento para ser injetado
    React.createElement(
        'h1',
        null,
        'Hello World'
    ),
    
    //injectando no nosso ID o elemento criado
    document.getElementById('root')
)
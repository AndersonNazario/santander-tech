// Fetch API

// then/catch

// fetch('https://viacep.com.br/ws/04387320/json/')
//     .then((resposta) => {

//        resposta.json().then((dados) => console.log(dados, "Estado: ", dados.estado))
        
//     })
//     .catch((erro)=>{

//         console.log(erro)

//     })

    // async/await

    async function obterDadosDoCep(){
        try {
            const   resposta = await fetch('https://viacep.com.br/ws/04387320/json/')
            const dados = await resposta.json()
    
            console.log(dados)           
        } catch (error) {
            console.log("Deu erro! ", error)
        } finally {
            console.log("Terminou a exercução.")
        }
 
    }

    obterDadosDoCep()
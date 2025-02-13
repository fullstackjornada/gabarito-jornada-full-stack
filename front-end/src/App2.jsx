import React from "react";

const App2 = () => {
  console.log("Olá, Mundo!");

  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variavel, Função...
// camelCase

// Nomeação de classes
// kebab-case

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header/>

// element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 5px black;
//   /* box-sizing: content-box; */
//   width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por -

// Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props"

{
  /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */
}

// Array(items)
//           .fill()
//           .map((currentValue, index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))

// Spread operator
// ...

// Quando componentes se re-renderizão?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

// Hook - useState

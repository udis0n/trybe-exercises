import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends React.Component {
  render() {
    const conteudosFormatados = conteudos.map((conteudo) => {
      return (
        <div key={1} className='card'>
          <p>O conteúdo é: {conteudo.conteudo}</p>
          <p>Status: {conteudo.status}</p>
          <p>Bloco: {conteudo.bloco}</p>
          <br />
        </div>
      );
    });

    return <div className='cards-container'>{conteudosFormatados}</div>;
  }
}

export default Content;

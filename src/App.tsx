import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

// Tipo para produtos com os novos campos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string,
  categoria: string, // Novo campo categoria
  faixa_etaria: string // Novo campo faixa_etária
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("https://one022a-marketplace-xpww.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

  function handleExcluir(id: number) {
    alert(`Excluir o produto com id ${id}`)
    fetch(`https://one022a-marketplace-xpww.onrender.com/produtos/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.status === 200) {
          alert("Produto excluído com sucesso")
          window.location.reload()
        } else {
          alert("Erro ao excluir o produto: Confira o terminal do backend")
        }
      })
  }

  return (
    <>
      {/* Listagem de Produtos */}
      <div className="produtos-container">
        <Link to="/cadastro-produto">Cadastro de Produto</Link>
        <h1 className='titulo-produto'>Produtos</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3> {/* Use h3 para o nome do produto */}
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-preco">{produto.preco}</p>
                <p className="produto-descricao">{produto.descricao}</p>
                {/* Exibindo os novos campos */}
                <p className="produto-categoria">Categoria: {produto.categoria}</p> {/* Categoria do produto */}
                <p className="produto-faixa-etaria">Faixa Etária: {produto.faixa_etaria}</p> {/* Faixa Etária */}
                <button className="botao-comprar">Comprar</button>
                <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
                <Link to={`/alterar-produto/${produto.id}`} className="botao-comprar">Alterar</Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App

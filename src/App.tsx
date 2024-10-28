// Importando hooks useEffect e useState do React para gerenciar estado e efeitos colaterais
import { useEffect, useState } from 'react'
import './App.css'

// Definindo o tipo de dados para os produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string
}

// Definindo o tipo de dados para os usuários
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  created_at: string,
  updated_at: string
}

// Componente principal do aplicativo
function App() {
  // Estado para armazenar o nome
  const [nome, setNome] = useState("")
  
  // Estado para armazenar a lista de produtos
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  
  // Estado para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para realizar operações após a montagem do componente
  useEffect(() => {
    // Configura o nome inicial
    setNome("Pkz1nz")

    // Busca os dados de produtos do backend
    fetch("https://one022a-marketplace-xpww.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))

    // Busca os dados de usuários do backend
    fetch("https://one022a-marketplace-xpww.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>
      {/* Exibindo o nome do usuário */}
      <h1>{nome}</h1>

      {/* Sessão de exibição dos produtos */}
      <div className="produtos-container">
        <h2>Produtos</h2>
        {
          produtos.map(produto => {
            return (
              // Exibe cada produto individualmente
              <div key={produto.id} className="produto-item">
                <h3>{produto.nome}</h3>
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p>{produto.preco}</p>
                <p>{produto.descricao}</p>
              </div>
            )
          })
        }
      </div>

      {/* Sessão de exibição dos usuários */}
      <div className="usuarios-container">
        <h2>Usuários</h2>
        {
          usuarios.map(usuario => {
            return (
              // Exibe cada usuário individualmente
              <div key={usuario.id} className="usuario-item">
                <h3>{usuario.nome}</h3>
                <p>ID: {usuario.id}</p>
                <p>Email: {usuario.email}</p>
                <p>Criado em: {usuario.created_at}</p>
                <p>Atualizado em: {usuario.updated_at}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

// Exportando o componente App para ser usado em outros módulos
export default App

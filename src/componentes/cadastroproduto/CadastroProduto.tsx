import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CadastroProduto.css'
function CadastroProduto() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [categoria, setCategoria] = useState("");  // Novo estado
    const [faixaEtaria, setFaixaEtaria] = useState("");  // Novo estado

    async function handleForm(event: FormEvent) {
        event.preventDefault();
        try {
            const resposta = await fetch("https://one022a-marketplace-xpww.onrender.com/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    nome: nome,
                    descricao: descricao,
                    preco: preco,
                    imagem: imagem,
                    categoria: categoria,  // Incluir categoria no corpo da requisição
                    faixa_etaria: faixaEtaria  // Incluir faixa_etaria no corpo da requisição
                })
            });

            if (resposta.status !== 500) {
                alert("Produto Cadastrado com Sucesso");
                navigate("/");
            } else {
                const mensagem = await resposta.text();
                alert("Erro ao Cadastrar Produto - Error: " + mensagem);
            }
        } catch (e) {
            alert("Servidor não está respondendo.");
        }
    }

    // Handlers de mudança para os campos
    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>) {
        setDescricao(event.target.value);
    }
    function handlePreco(event: ChangeEvent<HTMLInputElement>) {
        setPreco(event.target.value);
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value);
    }
    function handleCategoria(event: ChangeEvent<HTMLInputElement>) {
        setCategoria(event.target.value);
    }
    function handleFaixaEtaria(event: ChangeEvent<HTMLInputElement>) {
        setFaixaEtaria(event.target.value);
    }

    return (
        <>
            <h1>Cadastro de Produto</h1>
            <form onSubmit={handleForm}>
                <div>
                    <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
                </div>
                <div>
                    <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                </div>
                <div>
                    <input placeholder="Descrição" type="text" name="descricao" id="descricao" onChange={handleDescricao} />
                </div>
                <div>
                    <input placeholder="Preço" type="text" name="preco" id="preco" onChange={handlePreco} />
                </div>
                <div>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
                </div>
                <div>
                    <input placeholder="Categoria" type="text" name="categoria" id="categoria" onChange={handleCategoria} />
                </div>
                <div>
                    <input placeholder="Faixa Etária" type="text" name="faixa_etaria" id="faixa_etaria" onChange={handleFaixaEtaria} />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    );
}

export default CadastroProduto;

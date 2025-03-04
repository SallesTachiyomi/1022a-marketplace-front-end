import { useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function AlterarProduto() {
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://one022a-marketplace-xpww.onrender.com/produtos/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setNome(dados.nome);
                setDescricao(dados.descricao);
                setPreco(dados.preco);
                setImagem(dados.imagem);
                setCategoria(dados.categoria);  // Novo campo
                setFaixaEtaria(dados.faixa_etaria);  // Novo campo
            });
    }, [id]);

    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [categoria, setCategoria] = useState("");  // Novo estado
    const [faixaEtaria, setFaixaEtaria] = useState("");  // Novo estado

    async function handleForm(event: FormEvent) {
        event.preventDefault();
        try {
            const resposta = await fetch(`https://one022a-marketplace-xpww.onrender.com/produtos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    descricao,
                    preco,
                    imagem,
                    categoria,  // Incluir categoria no corpo da requisição
                    faixa_etaria: faixaEtaria  // Incluir faixa_etaria no corpo da requisição
                })
            });

            if (resposta.status !== 500) {
                alert("Produto Alterado com Sucesso");
                navigate("/");
            } else {
                const mensagem = await resposta.text();
                alert("Erro ao Alterar Produto - Error: " + mensagem);
            }
        } catch (e) {
            alert("Servidor não está respondendo.");
        }
    }

    // Handlers de mudança para os campos
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
            <h1>Alterar Produto</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input placeholder="Id" type="text" name="id" id="id" value={id} readOnly />
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input placeholder="Nome" type="text" name="nome" id="nome" value={nome} onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input placeholder="Descrição" type="text" name="descricao" id="descricao" value={descricao} onChange={handleDescricao} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input placeholder="Preço" type="text" name="preco" id="preco" value={preco} onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">URL Imagem</label>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" value={imagem} onChange={handleImagem} />
                    {imagem && <img className="imagem-produto-reduzida" src={imagem} alt="Imagem do Produto" />}
                </div>
                {/* Novo campo para categoria */}
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <input placeholder="Categoria" type="text" name="categoria" id="categoria" value={categoria} onChange={handleCategoria} />
                </div>
                {/* Novo campo para faixa etária */}
                <div>
                    <label htmlFor="faixa_etaria">Faixa Etária</label>
                    <input placeholder="Faixa Etária" type="text" name="faixa_etaria" id="faixa_etaria" value={faixaEtaria} onChange={handleFaixaEtaria} />
                </div>
                <div>
                    <input type="submit" value="Alterar" />
                </div>
            </form>
        </>
    );
}

export default AlterarProduto;

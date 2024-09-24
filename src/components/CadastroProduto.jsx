import { useState } from "react";
import styles from './CadastroProduto.module.css';

export function CadastroProduto({ onAddProduct }) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = (e) => {
        e.preventDefaut();

        if (nome && preco) {
            const novoProduto = {
                nome,
                preco: parseFloat(preco)
            };

            onAddProduct(novoProduto); // envia o novo produto para o componente pai
            setNome(''); // reseta os campos
            setPreco('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlfor='nome'>Nome do produto*:</label>
                <input
                    id='nome'
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlfor='preco'>Preço*:</label>
                <input
                    id='preco'
                    type='number'
                    step='0.01'
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required 
                />
            </div>
            <button type='submit' className={styles.submitButton}>Adicionar Produto</button>
        </form>
    );
}
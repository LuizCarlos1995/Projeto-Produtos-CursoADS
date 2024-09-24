import styles from './Checkout.module.css';


export function Checkout() {
    const intensCarrinho = [
        { id: 1, nome: 'Produto1', preco: 10, quantidade: 2 },
        { id: 2, nome: 'Produto2', preco: 15, quantidade: 1 },
    ]

    const calcularTotal = () => {
        return intensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
    }

    return(
        <div className={styles.checkoutContainer}>
            <h2>Checkout</h2>
            <ul>
                {intensCarrinho.map((item) => (
                    <li key={item.id}>
                    <span className="item-name">{item.nome} - Quantidade: {item.quantidade}</span>
                    <span className="item-price">Preço R$ {item.preco}</span>
                    </li>
                ))}
            </ul>
            <div className="total">
                Total: R$ {calcularTotal()}
            </div>
        </div>
    )
}
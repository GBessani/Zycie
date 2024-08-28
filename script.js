let valorTotalDoCarrinho = 0

function carrinho_De_Compras(produto,valor,input)
{
    let nomeDoProduto = produto
    let valorDoProduto = valor 
    let quantidade = 0
    quantidade = document.getElementById(input).value
    valorTotalDoCarrinho = valorTotalDoCarrinho + valorDoProduto * quantidade
    let carrinhoAparente = document.getElementById('cart')
    let total = document.getElementById('total')
    total.innerHTML = `<h4><em>Total: ${valorTotalDoCarrinho}</em></h4>`
    carrinhoAparente.innerHTML = carrinhoAparente.innerHTML +     
    `<h4><em>${nomeDoProduto} * ${quantidade} ----- ${valorDoProduto * quantidade}</em></h4>` 
}

function limpar()
{
    let carrinhoAparente = document.getElementById('cart')
    carrinhoAparente.innerHTML = '<h4><em>Carrinho</em></h4>'
    valorTotalDoCarrinho = 0.00
    let total = document.getElementById('total')
    total.innerHTML = `<h4><em>Total: ${valorTotalDoCarrinho}</em></h4>`
}

function submitPayment() {
    const paymentMethods = document.getElementsByName('payment');
    let selectedMethod = '';
    for (const method of paymentMethods) {
        if (method.checked) {
            selectedMethod = method.value;
            break;
        }
    }
    if (selectedMethod) {
        alert('Método de pagamento selecionado: ' + selectedMethod);
    } else {
        alert('Por favor, selecione um método de pagamento.');
    }
}

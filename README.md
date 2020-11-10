# Shopping_cart_api
Exemplo de uso do <a href="https://github.com/GilmarBennertJr/API_RESTFUL_NODE">RESTFul em nodejs</a>

### Projeto
Projeto simples para montar lista de compras, onde haverá uma listagem de lista de compras, acesso à lista e finalização da mesma, criado com o intuíto de demonstrar o uso da API RESTFul em node.

### Collections:
#### user
<p>name: String</p>
<p>email: String</p>
<p>password: String</p>

#### item
name: String
email: String
description: String
img: String

#### shopping_cart
user_id: String
description: String
items: Array
is_finished: Boolean

### Rotas Implementadas:

<table>
    <thead>
        <tr>
            <th>Rota</th>
            <th>Method</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/shopping-carts</td>
            <td>GET</td>
            <td>Lista todas os carrinhos de compra do usuário logado</td>
        </tr>
        <tr>
            <td>/shopping-cart/:id</td>
            <td>GET</td>
            <td>Lista apenas o carrinho solicitado através da ID no path param</td>
        </tr>
        <tr>
            <td>/shopping-cart/finish</td>
            <td>PATCH</td>
            <td>Atualiza carrinho</td>
        </tr>
        <tr>
            <td>/shopping-cart</td>
            <td>PUT</td>
            <td>Adiciona nova lista de compras</td>
        </tr>
        <tr>
            <td>/shopping-cart</td>
            <td>DELETE</td>
            <td>Exclui uma lista de compras (do id enviada no body)</td>
        </tr>
        <tr>
            <td>/items</td>
            <td>GET</td>
            <td>Trás todos os itens (produtos)</td>
        </tr>
    </tbody>
</table>

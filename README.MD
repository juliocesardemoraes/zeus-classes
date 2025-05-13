# 🔢 `Math.random()` em Javascript

### 1. **O que é `Math.random()`?**

`Math.random()` é uma função do Javascript que retorna um número decimal **pseudoaleatório** entre `0` (inclusive) e `1` (exclusivo).

### Para que é util?

- Aplicações que precisam ser randomizadas. Por exemplo uma lista de piadas. Voce têm um site de piadas com 5 piadas e quer que toda vez que algum usuário entre no seu site tenha uma piada diferente.

- Você quer montar uma aplicação de sorteio ( rifa, bingo, etc...)

- Você quer montar um jogo divertido com amigos(cara ou coroa, sorteio de 1 a 10, ou até criar uma inteligência artificial muito simples em um jogo da velha por exemplo)

#### Exemplo:

```js
let aleatorio = Math.random();
console.log(aleatorio); // ex: 0.483920101
```

> 💡 Use `Math.random()` sempre que precisar de um número aleatório simples no seu código.

---

### 2. **Multiplicando o número aleatório**

Como o valor padrão é entre `0` e `1`, para gerar outros intervalos, você pode multiplicar o resultado.

#### Exemplo: número entre 0 e 10

```js
let numero = Math.random() * 10;
console.log(numero); // ex: 7.39281
```

---

### 3. **Arredondando números aleatórios**

Para obter inteiros, combinamos `Math.random()` com métodos de arredondamento como `Math.floor()`, `Math.ceil()` ou `Math.round()`.

#### Exemplo: número inteiro de 0 a 9

```js
let inteiro = Math.floor(Math.random() * 10);
console.log(inteiro); // ex: 3
```

#### Exemplo: número inteiro de 1 a 10

```js
let inteiro = Math.floor(Math.random() * 10) + 1;
console.log(inteiro); // ex: 7
```

---

### 4. **Números aleatórios entre dois valores**

Você pode gerar um número entre dois valores específicos (`min` e `max`) com a seguinte fórmula:

```js
let min = 5;
let max = 15;
let numero = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numero); // ex: entre 5 e 15
```

### ✅ Conclusão

`Math.random()` é uma ferramenta poderosa e fácil de usar para adicionar aleatoriedade ao seu código.

Combinada com funções como `Math.floor()` e `Math.round()`, você pode controlar o intervalo dos números e criar simulações, sorteios, jogos e muito mais.

---

# ✏️ `oninput` em JavaScript

### ✅ O que é?

`oninput` é um evento que dispara **sempre que o valor de um input muda**, em tempo real (enquanto o usuário digita, cola ou apaga).

---

### 🧠 Quando usar?

- Para capturar valores digitados imediatamente
- Validações em tempo real
- Atualização dinâmica de outros elementos com base no input

---

### 🔧 Exemplo básico:

```html
<textarea oninput="mostrarValor(event)"></textarea>
<p id="resultado"></p>

<script>
  function mostrarValor(event) {
    document.getElementById("resultado").textContent = event.target.value;
  }
</script>
```

---

> 💡 O valor é atualizado à medida que você digita.

---

### 🧹 Conclusão

Use `oninput` para respostas imediatas à digitação do usuário — ideal para feedbacks instantâneos, filtros e interações em tempo real.

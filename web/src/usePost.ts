import { useState } from 'react'

export default function usePost() {
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  async function CadastrarDados<T>({ url, dados }: { url: string; dados: T }) {
    try {
      await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      })
      setSucesso(true)
    } catch (erro) {
      setErro('Nao foi possivel enviar os dados')
    }
  }

  return { CadastrarDados, sucesso, erro }
}

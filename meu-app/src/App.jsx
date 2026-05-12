import Button from './components/botoes/Button'
import {ArrowRight} from 'lucide-react'
import Input from './components/inputs/Input'

function App() {
  return (
    <div>
      <Input 
      type="password" 
      placeholder="Digite aqui"
      label="Senha"
      size="grande"
      
      />

      <Button color="branco" size="medio" text="Entrar" 

      />
    </div>
  )
}

export default App
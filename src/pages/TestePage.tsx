import { LinhaTrajetoSelector, type Linha, type Trajeto } from '@vitorandradecoelho/sd-components';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TestePage = () => {
  // Dados de exemplo para o LinhaTrajetoSelector
  const linhasExemplo = [
    { 
      _id: "1",
      id: "1", 
      clienteId: 1,
      id_migracao: 1, 
      descr: "Linha 1 - Centro", 
      cor: "#FF0000",
      codigo: "L01",
      numero: "001",
      ativo: true,
      trajetos: []
    },
    { 
      _id: "2",
      id: "2", 
      clienteId: 1,
      id_migracao: 2, 
      descr: "Linha 2 - Zona Norte", 
      cor: "#00FF00",
      codigo: "L02",
      numero: "002",
      ativo: true,
      trajetos: []
    },
    { 
      _id: "3",
      id: "3", 
      clienteId: 1,
      id_migracao: 3, 
      descr: "Linha 3 - Zona Sul", 
      cor: "#0000FF",
      codigo: "L03",
      numero: "003",
      ativo: true,
      trajetos: []
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Teste do Componente LinhaTrajetoSelector
          </h1>
          <p className="text-muted-foreground">
            Página de teste para o componente da biblioteca @vitorandradecoelho/sd-components
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Componentes da Biblioteca
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Input</h3>
                <Input placeholder="Digite algo aqui..." />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Select</h3>
                <Select>
                  <SelectTrigger aria-label="Selecione uma opção">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Opção 1</SelectItem>
                    <SelectItem value="2">Opção 2</SelectItem>
                    <SelectItem value="3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">LinhaTrajetoSelector</h3>
                <div className="border-2 border-dashed border-border rounded-lg p-4">
                  <LinhaTrajetoSelector linhas={linhasExemplo} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              ← Voltar para a página inicial
            </a>
            <a 
              href="/guia" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Ver guia do componente →
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TestePage;
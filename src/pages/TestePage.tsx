import { LinhaTrajetoSelector } from '@vitorandradecoelho/sd-components';

const TestePage = () => {
  // Dados de exemplo para o componente
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
    },
    { 
      _id: "4",
      id: "4", 
      clienteId: 1,
      id_migracao: 4, 
      descr: "Linha 4 - Zona Oeste", 
      cor: "#FFFF00",
      codigo: "L04",
      numero: "004",
      ativo: true,
      trajetos: []
    },
    { 
      _id: "5",
      id: "5", 
      clienteId: 1, 
      id_migracao: 5, 
      descr: "Linha 5 - Zona Leste", 
      cor: "#FF00FF",
      codigo: "L05",
      numero: "005",
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
              LinhaTrajetoSelector
            </h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Componente importado da biblioteca @vitorandradecoelho/sd-components
              </p>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8">
                <LinhaTrajetoSelector linhas={linhasExemplo} />
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </footer>
      </div>
    </div>
  );
};

export default TestePage;
import { Input, Select } from '@vitorandradecoelho/sd-components';

const TestePage = () => {
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
                <Select options={[
                  { value: '1', label: 'Opção 1' },
                  { value: '2', label: 'Opção 2' },
                  { value: '3', label: 'Opção 3' }
                ]} />
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
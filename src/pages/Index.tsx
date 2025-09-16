// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-bold">App de Teste</h1>
        <p className="text-xl text-muted-foreground">Testando componentes da biblioteca SD Components</p>
        
        <div className="pt-8 space-y-4">
          <a 
            href="/teste" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Ir para Página de Teste →
          </a>
          <div className="text-center">
            <a 
              href="/guia" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Ver guia do componente →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { LinhaTrajetoSelector, type Linha, type Trajeto } from '@vitorandradecoelho/sd-components';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Code2, Package, PlayCircle } from "lucide-react";

const GuiaComponente = () => {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  };

  const CopyButton = ({ text, copyKey }: { text: string; copyKey: string }) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copyToClipboard(text, copyKey)}
      className="absolute top-2 right-2"
    >
      {copiedStates[copyKey] ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );

  const installCommand = "npm install @vitorandradecoelho/sd-components";
  const importCode = `import { LinhaTrajetoSelector, type Linha, type Trajeto } from '@vitorandradecoelho/sd-components';`;
  const usageCode = `import { useState } from 'react';
import { LinhaTrajetoSelector, type Linha } from '@vitorandradecoelho/sd-components';

export default function Exemplo() {
  const [selectedLinhaId, setSelectedLinhaId] = useState('');
  const [selectedTrajetoIds, setSelectedTrajetoIds] = useState<string[]>([]);
  const linhas: Linha[] = sampleLinhas; // veja o exemplo de dados acima

  return (
    <LinhaTrajetoSelector
      linhas={linhas}
      selectedLinhaId={selectedLinhaId}
      selectedTrajetoIds={selectedTrajetoIds}
      onLinhaChange={(linha) => setSelectedLinhaId(linha?._id ?? '')}
      onTrajetoChange={(trajetos) => setSelectedTrajetoIds(trajetos.map(t => t._id))}
      linhaPlaceholder="Escolha uma linha de ônibus..."
      trajetoPlaceholder="Escolha trajetos..."
      linhaLabel="Linha de Ônibus"
      trajetoLabel="Trajetos"
    />
  );
}`;

  // Dados de exemplo corrigidos
const exampleData = [
  {
    "_id": "5e8e3bbf4be5542e43e539eb",
    "clienteId": 1314,
    "id_migracao": 3210,
    "descr": "01 - Esperança / Taboão",
    "numero": "01",
    "trajetos": [
      {
        "_id": "5e8e3bbf4be5542e43e539e9",
        "id_migracao": 8639,
        "externalId": "0",
        "nome": "01 - Esperança / Sentido Taboão",
        "colorIdx": 7,
        "qtdTransmisoesInicial": 1,
        "qtdTransmisoesFinal": 1,
        "percentConclusao": 90,
        "toleranciaArrasto": 5,
        "kmTrajeto": 17.51,
        "tempoMedioViagem": 80,
        "sentidoTipo": "P",
        "headwayCopiloto": 0,
        "orientacao": "N",
        "consorcioSinoticoUnificado": [],
        "garagem": [],
        "despachoSemCor": true,
        "ativo": true,
        "sentido": "ida",
        "codigosIntegracao": ["1"],
        "raioTrajeto": 100,
        "id": "5e8e3bbf4be5542e43e539e9"
      },
      {
        "_id": "5e8e3bbf4be5542e43e539ea",
        "id_migracao": 8640,
        "externalId": "0",
        "nome": "01 - Taboão / Sentido Esperança",
        "colorIdx": 3,
        "qtdTransmisoesInicial": 1,
        "qtdTransmisoesFinal": 1,
        "percentConclusao": 70,
        "toleranciaArrasto": 5,
        "kmTrajeto": 17.99,
        "tempoMedioViagem": 80,
        "sentidoTipo": "P",
        "headwayCopiloto": 0,
        "orientacao": "S",
        "consorcioSinoticoUnificado": [],
        "garagem": [],
        "despachoSemCor": true,
        "ativo": true,
        "sentido": "volta",
        "codigosIntegracao": ["1"],
        "raioTrajeto": 80,
        "id": "5e8e3bbf4be5542e43e539ea"
      }
    ],
    "id": "5e8e3bbf4be5542e43e539eb"
  },
  {
    "_id": "5e8e3bbf4be5542e43e539ec",
    "clienteId": 1314,
    "id_migracao": 3211,
    "descr": "02 - Centro / Vila Nova",
    "numero": "02",
    "trajetos": [
      {
        "_id": "5e8e3bbf4be5542e43e539ed",
        "id_migracao": 8641,
        "externalId": "0",
        "nome": "02 - Centro / Sentido Vila Nova",
        "colorIdx": 2,
        "qtdTransmisoesInicial": 1,
        "qtdTransmisoesFinal": 1,
        "percentConclusao": 85,
        "toleranciaArrasto": 3,
        "kmTrajeto": 12.8,
        "tempoMedioViagem": 65,
        "sentidoTipo": "P",
        "headwayCopiloto": 0,
        "orientacao": "N",
        "consorcioSinoticoUnificado": [],
        "garagem": [],
        "despachoSemCor": false,
        "ativo": true,
        "sentido": "ida",
        "codigosIntegracao": ["2"],
        "raioTrajeto": 90,
        "id": "5e8e3bbf4be5542e43e539ed"
      }
    ],
    "id": "5e8e3bbf4be5542e43e539ec"
  },
  {
    "_id": "5e8e3bbf4be5542e43e539ee",
    "clienteId": 1314,
    "id_migracao": 3212,
    "descr": "03 - Terminal / Shopping",
    "numero": "03",
    "trajetos": [
      {
        "_id": "5e8e3bbf4be5542e43e539ef",
        "id_migracao": 8642,
        "externalId": "0",
        "nome": "03 - Terminal / Sentido Shopping",
        "colorIdx": 1,
        "qtdTransmisoesInicial": 2,
        "qtdTransmisoesFinal": 2,
        "percentConclusao": 95,
        "toleranciaArrasto": 2,
        "kmTrajeto": 8.5,
        "tempoMedioViagem": 45,
        "sentidoTipo": "P",
        "headwayCopiloto": 0,
        "orientacao": "E",
        "consorcioSinoticoUnificado": [],
        "garagem": [],
        "despachoSemCor": false,
        "ativo": true,
        "sentido": "ida",
        "codigosIntegracao": ["3A"],
        "raioTrajeto": 75,
        "id": "5e8e3bbf4be5542e43e539ef"
      },
      {
        "_id": "5e8e3bbf4be5542e43e539f0",
        "id_migracao": 8643,
        "externalId": "0",
        "nome": "03 - Shopping / Sentido Terminal",
        "colorIdx": 1,
        "qtdTransmisoesInicial": 2,
        "qtdTransmisoesFinal": 2,
        "percentConclusao": 92,
        "toleranciaArrasto": 2,
        "kmTrajeto": 8.2,
        "tempoMedioViagem": 40,
        "sentidoTipo": "P",
        "headwayCopiloto": 0,
        "orientacao": "W",
        "consorcioSinoticoUnificado": [],
        "garagem": [],
        "despachoSemCor": false,
        "ativo": true,
        "sentido": "volta",
        "codigosIntegracao": ["3B"],
        "raioTrajeto": 75,
        "id": "5e8e3bbf4be5542e43e539f0"
      }
    ],
    "id": "5e8e3bbf4be5542e43e539ee"
  }
];

// Exemplo de uso corrigido
const MeuComponente = () => {
  const [selectedLinhaId, setSelectedLinhaId] = useState('');
  const [selectedTrajetoIds, setSelectedTrajetoIds] = useState([]);

  // Função success precisa ser definida ou importada
  const success = (message) => {
    console.log(message);
    // ou usar uma biblioteca de notificações como toast
  };

  return (
    <div>
      <h2>Seletor de Linha e Trajeto</h2>
      <LinhaTrajetoSelector
        linhas={exampleData}
        selectedLinhaId={selectedLinhaId}
        selectedTrajetoIds={selectedTrajetoIds}
        onLinhaChange={(linha) => {
          setSelectedLinhaId(linha?._id || '');
          success(`Linha selecionada: ${linha?.descr || 'Nenhuma'}`);
        }}
        onTrajetoChange={(trajetos) => {
          setSelectedTrajetoIds(trajetos.map(t => t._id));
          success(`${trajetos.length} trajeto(s) selecionado(s)`);
        }}
        linhaPlaceholder="Escolha uma linha de ônibus..."
        trajetoPlaceholder="Escolha trajetos..."
        linhaLabel="Linha de Ônibus"
        trajetoLabel="Trajetos"
      />
    </div>
  );
};
  const fullExample = `import React from 'react';
import { LinhaTrajetoSelector, type Linha, type Trajeto } from '@vitorandradecoelho/sd-components';

const MinhaPagina = () => {
  const linhas: Linha[] = [
    { 
      _id: "1",
      id: "1", 
      clienteId: 1,
      id_migracao: 1, 
      descr: "Linha 1 - Centro", 
      numero: "001",
      trajetos: []
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1>Minha Aplicação</h1>
      <LinhaTrajetoSelector linhas={linhas} />
    </div>
  );
};

export default MinhaPagina;`;

  const linhasDemo: Linha[] = [
    {
      "_id": "5e8e3bbf4be5542e43e539eb",
      "clienteId": 1314,
      "id_migracao": 3210,
      "descr": "01 - Esperança / Taboão",
      "numero": "01",
      "trajetos": [
        {
          "_id": "5e8e3bbf4be5542e43e539e9",
          "id_migracao": 8639,
          "externalId": "0",
          "nome": "01 - Esperança / Sentido Taboão",
          "colorIdx": 7,
          "qtdTransmisoesInicial": 1,
          "qtdTransmisoesFinal": 1,
          "percentConclusao": 90,
          "toleranciaArrasto": 5,
          "kmTrajeto": 17.51,
          "tempoMedioViagem": 80,
          "sentidoTipo": "P",
          "headwayCopiloto": 0,
          "orientacao": "N",
          "consorcioSinoticoUnificado": [],
          "garagem": [],
          "despachoSemCor": true,
          "ativo": true,
          "sentido": "ida",
          "codigosIntegracao": ["1"],
          "raioTrajeto": 100,
          "id": "5e8e3bbf4be5542e43e539e9"
        },
        {
          "_id": "5e8e3bbf4be5542e43e539ea",
          "id_migracao": 8640,
          "externalId": "0",
          "nome": "01 - Taboão / Sentido Esperança",
          "colorIdx": 3,
          "qtdTransmisoesInicial": 1,
          "qtdTransmisoesFinal": 1,
          "percentConclusao": 70,
          "toleranciaArrasto": 5,
          "kmTrajeto": 17.99,
          "tempoMedioViagem": 80,
          "sentidoTipo": "P",
          "headwayCopiloto": 0,
          "orientacao": "S",
          "consorcioSinoticoUnificado": [],
          "garagem": [],
          "despachoSemCor": true,
          "ativo": true,
          "sentido": "volta",
          "codigosIntegracao": ["1"],
          "raioTrajeto": 80,
          "id": "5e8e3bbf4be5542e43e539ea"
        }
      ],
      "id": "5e8e3bbf4be5542e43e539eb"
    },
    {
      "_id": "5e8e3bbf4be5542e43e539ec",
      "clienteId": 1314,
      "id_migracao": 3211,
      "descr": "02 - Centro / Vila Nova",
      "numero": "02",
      "trajetos": [
        {
          "_id": "5e8e3bbf4be5542e43e539ed",
          "id_migracao": 8641,
          "externalId": "0",
          "nome": "02 - Centro / Sentido Vila Nova",
          "colorIdx": 2,
          "qtdTransmisoesInicial": 1,
          "qtdTransmisoesFinal": 1,
          "percentConclusao": 85,
          "toleranciaArrasto": 3,
          "kmTrajeto": 12.8,
          "tempoMedioViagem": 65,
          "sentidoTipo": "P",
          "headwayCopiloto": 0,
          "orientacao": "N",
          "consorcioSinoticoUnificado": [],
          "garagem": [],
          "despachoSemCor": false,
          "ativo": true,
          "sentido": "ida",
          "codigosIntegracao": ["2"],
          "raioTrajeto": 90,
          "id": "5e8e3bbf4be5542e43e539ed"
        }
      ],
      "id": "5e8e3bbf4be5542e43e539ec"
    }
  ];

   return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Guia do LinhaTrajetoSelector
          </h1>
          <p className="text-muted-foreground text-lg">
            Aprenda como importar e usar o componente LinhaTrajetoSelector em seus projetos
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Visão Geral */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Visão Geral
              </CardTitle>
              <CardDescription>
                O LinhaTrajetoSelector é um componente React para seleção de linhas e trajetos de transporte público.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tabs com instruções */}
          <Tabs defaultValue="instalacao" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="instalacao">Instalação</TabsTrigger>
              <TabsTrigger value="importacao">Importação</TabsTrigger>
              <TabsTrigger value="uso">Uso</TabsTrigger>
              <TabsTrigger value="exemplo">Exemplo Completo</TabsTrigger>
            </TabsList>

            <TabsContent value="instalacao" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>1. Instalação do Pacote</CardTitle>
                  <CardDescription>
                    Instale o pacote usando npm ou yarn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{installCommand}</code>
                    </pre>
                    <CopyButton text={installCommand} copyKey="install" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="importacao" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>2. Importação do Componente</CardTitle>
                  <CardDescription>
                    Importe o componente e os tipos TypeScript necessários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{importCode}</code>
                    </pre>
                    <CopyButton text={importCode} copyKey="import" />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Tipos Disponíveis:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li><code>Linha</code> - Interface para dados de linha</li>
                      <li><code>Trajeto</code> - Interface para dados de trajeto</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="uso" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>3. Preparação dos Dados</CardTitle>
                  <CardDescription>
                    Configure os dados das linhas conforme a interface esperada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{JSON.stringify(exampleData, null, 2)}</code>
                    </pre>
                    <CopyButton text={JSON.stringify(exampleData, null, 2)} copyKey="data" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Uso do Componente</CardTitle>
                  <CardDescription>
                    Adicione o componente ao seu JSX
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{usageCode}</code>
                    </pre>
                    <CopyButton text={usageCode} copyKey="usage" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exemplo" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Exemplo Completo</CardTitle>
                  <CardDescription>
                    Um exemplo completo de uso do componente em uma página React
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{fullExample}</code>
                    </pre>
                    <CopyButton text={fullExample} copyKey="full" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Demonstração ao vivo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                Demonstração ao Vivo
              </CardTitle>
              <CardDescription>
                Veja o componente funcionando abaixo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-4">
                <LinhaTrajetoSelector linhas={linhasDemo} />
              </div>
            </CardContent>
          </Card>

          {/* Propriedades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Propriedades do Componente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">Propriedade</th>
                      <th className="border border-border p-2 text-left">Tipo</th>
                      <th className="border border-border p-2 text-left">Obrigatório</th>
                      <th className="border border-border p-2 text-left">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2"><code>linhas</code></td>
                      <td className="border border-border p-2"><code>Linha[]</code></td>
                      <td className="border border-border p-2">Sim</td>
                      <td className="border border-border p-2">Array de objetos contendo os dados das linhas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Links de navegação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8">
            <a 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              ← Voltar para a página inicial
            </a>
            <a 
              href="/teste" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Ver página de teste →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaComponente;
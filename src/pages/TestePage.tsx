/*import { LinhaTrajetoSelector, type Linha, type Trajeto } from '@vitorandradecoelho/sd-components';*/
import { LinhaTrajetoSelector } from '@vitorandradecoelho/sd-components';
import '@vitorandradecoelho/sd-components/dist/styles.css';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TestePage = () => {
  const sampleLinhas: Linha[] = [
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
  const [selectedLinhaId, setSelectedLinhaId] = useState('');
  const [selectedTrajetoIds, setSelectedTrajetoIds] = useState<string[]>([]);
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
                  <LinhaTrajetoSelector 
                    linhas={sampleLinhas}
                    selectedLinhaId={selectedLinhaId}
                    selectedTrajetoIds={selectedTrajetoIds}
                       linhaPlaceholder="Escolha uma linha de ônibus..."
                    trajetoPlaceholder="Escolha trajetos..."
                    linhaLabel="Linha de Ônibus"
                    trajetoLabel="Trajetos"
                    multiSelectTrajeto={true}
                  />
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
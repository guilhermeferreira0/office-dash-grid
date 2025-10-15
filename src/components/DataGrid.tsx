const data = [
  {
    operacao: "TIM Fiber SAC",
    acao: "CRC - CONTAS",
    trafegoDesvio: "-24.40%",
    trafegoAband: "12.80%",
    pcaForecast: "95.00%",
    pcaReal: "87.20%",
    tempoTMA: "557",
    tempoDesvio: "3.40%",
    slaPrev60: "89.40%",
    slaAte60: "98.50%",
    hcEscal: "19",
    hcProd: "19",
    hcTrab: "0",
    abs: "37.70%",
  },
  {
    operacao: "TIM Fiber SAC",
    acao: "CRT",
    trafegoDesvio: "-41.90%",
    trafegoAband: "6.70%",
    pcaForecast: "95.00%",
    pcaReal: "93.30%",
    tempoTMA: "664",
    tempoDesvio: "31.80%",
    slaPrev60: "80.20%",
    slaAte60: "55.70%",
    hcEscal: "121",
    hcProd: "108",
    hcTrab: "0",
    abs: "16.90%",
  },
  {
    operacao: "TIM Fiber SAC",
    acao: "CRT N2",
    trafegoDesvio: "-85.70%",
    trafegoAband: "16.80%",
    pcaForecast: "95.00%",
    pcaReal: "83.20%",
    tempoTMA: "466",
    tempoDesvio: "-7.50%",
    slaPrev60: "57.00%",
    slaAte60: "52.10%",
    hcEscal: "5",
    hcProd: "5",
    hcTrab: "0",
    abs: "0.00%",
  },
  {
    operacao: "TIM Fiber SAC",
    acao: "CRX",
    trafegoDesvio: "-32.60%",
    trafegoAband: "7.00%",
    pcaForecast: "95.00%",
    pcaReal: "93.00%",
    tempoTMA: "738",
    tempoDesvio: "-1.40%",
    slaPrev60: "84.30%",
    slaAte60: "57.30%",
    hcEscal: "165",
    hcProd: "151",
    hcTrab: "0",
    abs: "11.70%",
  },
  {
    operacao: "TIM Fiber SAC",
    acao: "ILHA NÃO CLIENTE",
    trafegoDesvio: "-7.10%",
    trafegoAband: "7.10%",
    pcaForecast: "95.00%",
    pcaReal: "92.90%",
    tempoTMA: "521",
    tempoDesvio: "1.50%",
    slaPrev60: "41.10%",
    slaAte60: "62.50%",
    hcEscal: "10",
    hcProd: "8",
    hcTrab: "0",
    abs: "8.20%",
  },
  {
    operacao: "TIM Fiber SAC",
    acao: "WTTX",
    trafegoDesvio: "-26.30%",
    trafegoAband: "10.30%",
    pcaForecast: "95.00%",
    pcaReal: "89.70%",
    tempoTMA: "252",
    tempoDesvio: "-43.20%",
    slaPrev60: "62.70%",
    slaAte60: "90.70%",
    hcEscal: "5",
    hcProd: "5",
    hcTrab: "0",
    abs: "17.00%",
  },
  {
    operacao: "Tim Movel",
    acao: "BKO - Sac Movel",
    trafegoDesvio: "0.00%",
    trafegoAband: "0.00%",
    pcaForecast: "0.00%",
    pcaReal: "0.00%",
    tempoTMA: "0",
    tempoDesvio: "0.00%",
    slaPrev60: "0.00%",
    slaAte60: "0.00%",
    hcEscal: "17",
    hcProd: "15",
    hcTrab: "0",
    abs: "10.30%",
  },
  {
    operacao: "Tim Movel",
    acao: "CONTROLE/POS PAGO",
    trafegoDesvio: "-20.60%",
    trafegoAband: "2.80%",
    pcaForecast: "95.00%",
    pcaReal: "97.20%",
    tempoTMA: "564",
    tempoDesvio: "-20.10%",
    slaPrev60: "86.40%",
    slaAte60: "69.70%",
    hcEscal: "265",
    hcProd: "218",
    hcTrab: "0",
    abs: "15.80%",
  },
];

export const DataGrid = () => {
  return (
    <div className="flex-1 overflow-hidden bg-background">
      <div className="h-full overflow-auto">
        <table className="w-full border-collapse text-[9px] font-calibri">
          <thead className="sticky top-0 z-10">
            <tr className="bg-grid-header text-grid-header-foreground">
              <th className="px-2 py-2 text-left font-semibold border-r border-grid-border whitespace-nowrap">
                Operação
              </th>
              <th className="px-2 py-2 text-left font-semibold border-r border-grid-border whitespace-nowrap">
                Ação
              </th>
              <th
                colSpan={2}
                className="px-2 py-1 text-center font-semibold border-r border-grid-border"
              >
                Tráfego
              </th>
              <th
                colSpan={2}
                className="px-2 py-1 text-center font-semibold border-r border-grid-border"
              >
                PCA
              </th>
              <th
                colSpan={2}
                className="px-2 py-1 text-center font-semibold border-r border-grid-border"
              >
                Tempo
              </th>
              <th
                colSpan={2}
                className="px-2 py-1 text-center font-semibold border-r border-grid-border"
              >
                SLA
              </th>
              <th
                colSpan={3}
                className="px-2 py-1 text-center font-semibold border-r border-grid-border"
              >
                HC
              </th>
              <th className="px-2 py-2 text-center font-semibold whitespace-nowrap">
                ABS %
              </th>
            </tr>
            <tr className="bg-grid-header text-grid-header-foreground">
              <th className="px-2 py-1 border-r border-grid-border"></th>
              <th className="px-2 py-1 border-r border-grid-border"></th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                % Desvio
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                % Aband.
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Forecast
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Real
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                TMA
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                % Desvio
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Prev. 60s
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Até 60s
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Escal.
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Prod.
              </th>
              <th className="px-2 py-1 text-center font-medium border-r border-grid-border whitespace-nowrap">
                Trab.
              </th>
              <th className="px-2 py-1 text-center font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-grid-row-even" : "bg-grid-row-odd"
                }
              >
                <td className="px-2 py-1.5 border-r border-grid-border whitespace-nowrap">
                  {row.operacao}
                </td>
                <td className="px-2 py-1.5 border-r border-grid-border whitespace-nowrap">
                  {row.acao}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.trafegoDesvio}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.trafegoAband}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.pcaForecast}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.pcaReal}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.tempoTMA}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.tempoDesvio}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.slaPrev60}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.slaAte60}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.hcEscal}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.hcProd}
                </td>
                <td className="px-2 py-1.5 text-center border-r border-grid-border">
                  {row.hcTrab}
                </td>
                <td className="px-2 py-1.5 text-center">{row.abs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

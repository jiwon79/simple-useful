export function useSendResult(input: number[], output: number[]) {
  const time = new Date().toISOString();
  const values = [
    [time, [1, 2, 3, 4, 5].join(','), [3, 4].join(""), "\\sqrt{2}"],
  ];
  const sheetName = "magi-mixer";
  const inputString = input.sort().join(",");
  const outputString = output.join("");

  const sendSuccess = async (latex: string) => {
    const values = [time, inputString, outputString, latex];

    const response = await fetch("/api/sheet", {
      method: "POST",
      body: JSON.stringify({sheetName, values}),
    });

    return response.json();
  }

  const sendFail = async () => {
    const values = [time, inputString, outputString, "-"];
    const response = await fetch("/api/sheet", {
      method: "POST",
      body: JSON.stringify({sheetName, values}),
    });

    return response.json();
  }

  return {sendSuccess, sendFail};
}

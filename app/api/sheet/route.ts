import { GoogleSheetService } from "@domains/google-sheet";

interface ExtendedRequest extends Request {
  json: () => Promise<{ sheetName: string, values: string[][] }>
}

export const POST = async (request: ExtendedRequest) => {
  const {sheetName, values} = await request.json()

  const sheetService = GoogleSheetService.getInstance();

  const response = await sheetService.append(sheetName, "A1", values);

  return new Response(JSON.stringify(response), {
    status: response.status
  });
}

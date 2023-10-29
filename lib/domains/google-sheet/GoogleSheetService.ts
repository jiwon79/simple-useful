import { google, sheets_v4 } from 'googleapis';

export interface SheetResponse {
  status: number;
  values: string[][];
}

export class GoogleSheetService {
  private static instance: GoogleSheetService;
  private readonly sheet: sheets_v4.Sheets;
  private readonly sheetId: string = process.env.GOOGLE_SPREADSHEET_ID!;

  constructor() {
    const clientID: string = process.env.GOOGLE_CLIENT_ID!;
    const clientEmail: string = process.env.GOOGLE_CLIENT_EMAIL!;
    const privateKey: string = process.env.GOOGLE_PRIVATE_KEY!.replace(
      /\\n/g,
      '\n',
    );

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_id: clientID,
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    this.sheet = google.sheets({ version: 'v4', auth });
  }

  public static getInstance(): GoogleSheetService {
    if (!GoogleSheetService.instance) {
      GoogleSheetService.instance = new GoogleSheetService();
    }
    return GoogleSheetService.instance;
  }

  public async append(
    sheetName: string,
    range: string,
    values: string[][],
  ): Promise<SheetResponse> {
    const resource = { values };

    const response = await this.sheet.spreadsheets.values.append({
      spreadsheetId: this.sheetId,
      range: `${sheetName}!${range}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: resource,
    });

    return {
      status: response.status,
      values: response.config.data.values,
    };
  }
}

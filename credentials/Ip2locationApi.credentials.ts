import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class Ip2locationApi implements ICredentialType {
        name = 'N8nDevIp2locationApi';

        displayName = 'Ip2location API';

        icon: Icon = { light: 'file:../nodes/Ip2location/ip2location.png', dark: 'file:../nodes/Ip2location/ip2location.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.ip2location.io',
                        required: true,
                        placeholder: 'https://api.ip2location.io',
                        description: 'The base URL of your Ip2location API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class Ip2location implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Ip2location',
                name: 'N8nDevIp2location',
                icon: { light: 'file:./ip2location.png', dark: 'file:./ip2location.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'IP2Location.io RESTful API provides IP geolocation data: country, region, city, coordinates, ZIP, timezone, ASN, ISP, domain.',
                defaults: { name: 'Ip2location' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevIp2locationApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
                ],
        };
}

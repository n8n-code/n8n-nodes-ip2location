import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET",
					"value": "GET",
					"action": "GET",
					"description": "Geolocate user's location information via IP address",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "API key.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"required": true,
			"description": "IP address (IPv4 or IPv6) for reverse IP location lookup purposes. If not present, the server IP address will be used for the location lookup.",
			"default": "8.8.8.8",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Format of the response message.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Lang",
			"name": "lang",
			"description": "Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.",
			"default": "ar",
			"type": "options",
			"options": [
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Cs",
					"value": "cs"
				},
				{
					"name": "Da",
					"value": "da"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Et",
					"value": "et"
				},
				{
					"name": "Fi",
					"value": "fi"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "Ga",
					"value": "ga"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Ms",
					"value": "ms"
				},
				{
					"name": "Nl",
					"value": "nl"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ru",
					"value": "ru"
				},
				{
					"name": "Sv",
					"value": "sv"
				},
				{
					"name": "Tr",
					"value": "tr"
				},
				{
					"name": "Vi",
					"value": "vi"
				},
				{
					"name": "Zh Cn",
					"value": "zh-cn"
				},
				{
					"name": "Zh Tw",
					"value": "zh-tw"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "lang",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
];

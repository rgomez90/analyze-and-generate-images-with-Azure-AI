

import { ImageAnalysisClient }from '@azure-rest/ai-vision-image-analysis';
import { AzureKeyCredential } from '@azure/core-auth';
import { createClient } from '@azure-rest/ai-vision-image-analysis';

const endpoint = process.env['VISION_ENDPOINT'] || '<your_endpoint>';
const key = process.env['VISION_KEY'] || '<your_key>';


const credential = new AzureKeyCredential(key);
const client = createClient(endpoint, credential);

async function analizeImage(url) {
    
    const result = await client.path('/imageanalysis:analyze').post({
        body: {
            url: url
        },
        queryParameters: {
            features: features,
            'language': 'en',
            'gender-neutral-captions': 'true',
            'smartCrops-aspect-ratios': [0.9, 1.33]
        },
        contentType: 'application/json'
      });
    return result.body;
}
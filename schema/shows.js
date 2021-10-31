const ajvInstance = require('./ajv-instance');

const schema = {
    type: 'object',
    properties: {
        payload: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    country: { type: 'string' },
                    description: { type: 'string' },
                    drm: { type: 'boolean' },
                    episodeCount: { type: 'integer' },
                    genre: { type: 'string' },
                    image: {
                        type: 'object',
                        properties: {
                            showImage: { type: 'string' }
                        }

                    },
                    language: { type: 'string' },
                    nextEpisode: {
                        type: ['object', 'null'],
                        properties: {
                            channel: { type: ['string', 'null'] },
                            channelLog: { type: ['string', 'null'] },
                            date: { type: ['string', 'null'] },
                            html: { type: ['string', 'null'] },
                            url: { type: ['string', 'null'] }
                        }
                    },
                    primaryColour: { type: 'string' },
                    seasons: {
                        type: ['array', 'null'],
                        items: {
                            type: 'object',
                            properties: {
                                slug: { type: 'string' }
                            }
                        }
                    },
                    slug: { type: 'string' },
                    title: { type: 'string' },
                    tvChannel: { type: 'string' }
                },
            additionalProperties: false
            }
        }
    }

};

module.exports = ajvInstance.compile(schema);
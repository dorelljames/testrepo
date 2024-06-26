export const dataset = 'production'
export const displayName = 'Test'
export const projectId = 'zfvrbhm2'
export const schemaTypes = [
  {
    type: 'document',
    name: 'onboarding',
    title: 'Onboarding flows',
    fields: [
      {type: 'string', name: 'title'},
      {type: 'slug', name: 'slug', options: {source: 'title', maxLength: 96}},
      {type: 'array', name: 'steps', of: [{type: 'onboardingStep'}]},
    ],
  },
  {
    type: 'document',
    name: 'onboardingStep',
    title: 'Onboarding steps',
    fields: [
      {type: 'string', name: 'title'},
      {type: 'slug', name: 'slug', options: {source: 'title', maxLength: 96}},
      {type: 'text', name: 'description'},
      {type: 'image', name: 'image', options: {hotspot: true}},
      {
        type: 'array',
        name: 'content',
        of: [
          {type: 'block'},
          {type: 'image', fields: [{type: 'string', name: 'caption'}], options: {hotspot: true}},
        ],
      },
    ],
  },
]

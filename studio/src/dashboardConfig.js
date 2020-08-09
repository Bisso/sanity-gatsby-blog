export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2f518bf5cc1f7a7affda0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r4sm4qnq',
                  apiId: '4a6aafde-2f12-4e20-b32a-59f78e261ec9'
                },
                {
                  buildHookId: '5f2f518bbed2689a72703f6e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-deroryjy',
                  apiId: '9f41a6dd-2fd2-4e06-89a7-54aebd90d33f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bisso/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-deroryjy.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

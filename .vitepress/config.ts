import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TrackBear Help",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/images/brown-bear.png' }],
    // <script defer data-domain="help.trackbear.app" src="https://metrics.trackbear.app/js/script.js"></script>
    ['script', { src: 'https://metrics.trackbear.app/js/script.js', 'data-domain': 'help.trackbear.app', defer: '' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    externalLinkIcon: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/making-an-account' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Sign Up', link: '/getting-started/signing-up' },
          { text: 'Make a Project', link: '/getting-started/make-a-project' },
          // { text: 'Make a Goal', link: '/getting-started/make-a-goal' },
          // { text: 'Join a Leaderboard', link: '/getting-started/join-a-leaderboard' },
        ]
      },
      {
        text: 'Using Trackbear',
        items: [
          { text: 'Tracking Progress', link: '/using-trackbear/tracking-progress' }
        ]
      },
      {
        text: 'Your Account',
        items: [
          { text: 'Managing Your Account', link: '/account' },
          { text: 'Settings', link: '/settings' },
          { text: 'Public Profile', link: '/public-profile' },
        ]
      }
    ],

    footer: {
      message: 'Made with 🐻 by @dispatchrabbi.',
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

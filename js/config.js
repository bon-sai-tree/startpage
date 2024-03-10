const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
   commands: [
    {
      name: 'Duckduckgo',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },
    {
      category: 'General',
      name: 'Google',
      key: 'g',
      url: 'https://www.google.ch',
      search: '/search?q={}',
      color: 'linear-gradient(90deg, rgba(66,133,244,1) 3%, rgba(52,168,83,1) 32%, rgba(251,188,5,1) 65%, rgba(234,67,53,1) 97%)',
      icon: 'google',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Protonmail',
      key: 'm',
      url: 'https://account.proton.me/login',
      search: '/#search/text={}',
      color: 'linear-gradient(52deg, rgba(108,73,254,1) 0%, rgba(169,149,255,1) 100%)',
      icon: 'mailcow',
      quickLaunch: false,
    },
    {
      category: 'Selfhosted',
      name: 'Cloud',
      key: 'c',
      url: 'https://cloud.bonsai-tree.ch',
      search: '/#search/text={}',
      color: 'linear-gradient(188deg, rgba(163,254,27,1) 0%, rgba(7,248,95,1) 56%, rgba(1,111,87,1) 100%)',
      icon: 'nextcloud',
      quickLaunch: false,
    },
    {
      category: 'Selfhosted',
      name: 'Vault',
      key: 'v',
      url: 'https://vault.bonsai-tree.ch',
      search: '/#search/text={}',
      color: 'linear-gradient(297deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%',
      icon: 'bitwarden',
      quickLaunch: false,
    },
    {
      category: 'Selfhosted',
      name: 'Mailcow',
      key: 'cow',
      url: 'https://mail.bonsai-tree.ch/SOGo/',
      search: '/#search/text={}',
      color: 'linear-gradient(162deg, rgba(80,189,55,1) 0%, rgba(17,19,20,1) 100%);',
      icon: 'mailcow',
      quickLaunch: false,
    },
    {
      category: 'Selfhosted',
      name: 'Heimdal',
      key: 'heim',
      url: 'https://heim.bonsai-tree.ch/',
      search: '/#search/text={}',
      color: 'linear-gradient(90deg, rgba(210,161,18,1) 0%, rgba(224,220,9,1) 22%, rgba(241,155,21,1) 62%, rgba(212,244,8,1) 100%);',
      icon: 'heimdal',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Threema',
      key: 't',
      url: 'https://web.threema.ch/#!/welcome',
      search: '/#search/text={}',
      color: 'linear-gradient(297deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
      icon: 'threema',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'WhatsApp',
      key: 'w',
      url: 'https://web.whatsapp.com/',
      color: 'linear-gradient(90deg, rgba(83,206,96,1) 0%, rgba(41,181,63,1) 100%)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Pfadi',
      key: 'pan',
      url: 'https://www.pfadineuhausen.ch',
      search: '/#search/text={}',
      color: 'radial-gradient(circle, rgba(0,0,0,1) 42%, rgba(250,219,61,1) 72%)',
      icon: 'pfadi',
      quickLaunch: false,
    },
    {
      name: 'Office 365',
      key: 'o',
      url: 'https://portal.office.com',
      search: '/#search/text={}',
      color: 'linear-gradient(90deg, rgba(18,159,210,1) 0%, rgba(255,177,0,1) 50%, rgba(18,159,210,1) 100%)',
      icon: 'cloud',
      quickLaunch: false,
    },
    {
      category: 'General',  
      name: 'Moodle',
      key: 'moo',
      url: 'https://moodle.zhaw.ch/course/index.php?categoryid=564',
      color: 'linear-gradient(135deg, #0064a6, #0064a6)',
      icon: 'moodle',
      quickLaunch: false,
    },
    {
      category: 'Stream',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Stream',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Stream',
      name: 'Twitch',
      key: 't',
      url: 'https://www.twitch.tv',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },
    {
      category: 'Stream',
      name: 'Proxer',
      key: 'p',
      url: 'https://proxer.me/ucp?s=reminder&utm_source=loginbox#top',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #933572, #1c2279)',
      icon: 'proxer',
      quickLaunch: false,
    },
    {
      category: 'Tech',
      name: 'GitHub',
      key: 'git',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #933572, #1c2279)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: 'ChatGPT',
      key: 'ai',
      url: 'https://chat.openai.com',
      color: 'linear-gradient(135deg, #6e42fe, #fe2d7e)',
      icon: 'openai',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: 'StackOverflow',
      key: 'sta',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
    {
      category: 'Tech',
      name: 'Reddit',
      key: 'red',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};

# Skip Ad extension project.

This is an extension that wont completely remove Ads but make them go away faster instead. 
youtube started warnign users about banning their accounts for using adblockers all of a sudden, this kinda freaked me out since i've used the same account for maybe 10 years or more, so i embraced the ads and just went with it. i was fine for a month. but day by day i grew sick of the unnecesarily annoying ads with loud af pumped up music. so i sat down and started thinking how i would fix this.

#### The issue 💀
- chance of getting the account banned for using ad blocker

#### The solution 🧠
- watch the whole ad but make it less annoying:
  - Muting the ad.
  - Speeding up the ad video x16 times.
  - Dimming the ad video until black.
  - Having the extension detect automatically when the ad starts [WIP].

#### Current challenges 🤔
- Lack of experience developing chrome extensions
  - Injecting html into YouTube.

### Roadmap 🗺️🚀
------------
- [x] Manually skip youtube ad.
  - [x] Mute ad
  - [x] Fast forward ad
  - [x] Automatically skip ad
  - [ ] Dim ad
 - [ ] Automatically execute on ad show up.
- [ ] Turn code into chrome extension.
- [ ] publish extension to chrome store.

## How you can test it? 🥸
------------
1. For the sake of quick prototyping and development i used an existing extension that lets you inject code into any website
you can find it here in the chrome web store: [User javascript and css](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)

2. Inside the extension page you can paste this JS code [skip-ad.js](https://gist.github.com/Longshoez/bbdfe7f287bfdf715aab900bfbb2329f) and this basic styling on the CSS section [skip-ad.css](https://gist.github.com/Longshoez/881023ed1393df2b4821ed6adc5440af)

3. Now everytime you enter YouTube you should see a "Skip ad" button on the top right corner of the screen. 

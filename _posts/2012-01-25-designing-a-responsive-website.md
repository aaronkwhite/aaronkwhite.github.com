---
title: Designing a Responsive Website
author: Aaron
layout: post
dsq_thread_id:
  - 552253499
categories:
  - Web Development
tags:
  - Damond Nollan
  - Media Queries
  - Mobile
  - Responsive
  - Web Design
---
# 

The original title of this post was going to be

> “How to get [Damond Nollan][1] to publish more Blog posts: An exercise in Responsive Webdesign”

 [1]: http://www.damondnollan.com "Damond Nollan"

but even I realize the drop in SEO value there kids ![;-)][2] 

 [2]: http://www.aaronkwhite.com/wp-includes/images/smilies/icon_wink.gif

The other day I wrote a post about [Responsive Web Design in Action][3], showcasing the [Swedish Broadcaster’s new site][4]. The process of designing a responsive site usually begins with the mobile view first and then addressing larger view such as a tablet or browser window at various widths. Having never designed (or developed) a responsive site before I decided to take on the design part of this challenge.

 [3]: http://www.aaronkwhite.com/2012/web-development/responsive-web-design-in-action/
 [4]: http://svt.se/ug "Swedish Broadcaster’s Responsive Web Design"

Since I was listening to my buddy [Damond’s daily Podcast (Room 3026 Live over on Blog Talk Radio)][5] I thought I’d take shot at fixing up his blogger website (*note I’m pretty sure this is not possible in Blogger, so Damond will need to migrate to WordPress!). I mentally set out a few goals:

 [5]: http://blogtalkradio.com/damondnollan "Room 3026 Live"

*   Mobile first, then the Browser
*   Add some Pretty Fonts & a new logo
*   Incorporate specific elements (such as the advertising & social media elements)
*   Address the overall readability

A few hours later and I had what I think is a solid starting place for a nice Responsive Blog:

[![][7]][7]

 []: http://www.aaronkwhite.com/wp-content/uploads/2012/01/Damond_responsive_full_thumb.jpg

 

There are two primary views required here, the full screen page viewable in a browser (above) and the thin mobile view (below). You should be able to get the content to dynamically shrink enough to where it’s readable on a tablet and then switch to the single column view for mobile devices. All that being said, I think there is the possibility for a third in-between view where the navigation from the mobile view replaces the sidebar on a tablet. This is the great thing about Responsive designs, the limitations on what you can do are endless.

[![][8]][8]

 []: http://www.aaronkwhite.com/wp-content/uploads/2012/01/Damond_responsive_thin_thumb.jpg

 

Since this was something I literally threw together in a few hours, it’s not perfect! I didn’t use a grid to do the layout, I’m not sure which grid is best for responsive design yet so I eye-balled the positioning. I’ve also made a handful of assumptions about the development, such as using javascript to resize content, images and hacking some CSS to make sure everything works as intended.

Overall I think this is a great update to Damond’s blog… maybe one of these days he’ll let me migrate it all over to WordPress. A Girl can dream can’t she?

## You can view Higher Resolution versions of the designs [here][8], [here][9] and [here][10]. 
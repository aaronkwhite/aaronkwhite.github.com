---
title: Setting up Google Apps for Justhost.com
author: Aaron
layout: post
permalink: /2011/miscellaneous/setting-up-google-apps-for-justhost-com/
dsq_thread_id:
  - 214868732
categories:
  - Miscellaneous
tags:
  - DNS
  - Email
  - Google Apps
  - Justhost.com
  - MX Records
---
# 

I’m hoping this information is useful for anyone who is using [Justhost.com][1].  I recently created a new domain for a side project I’m going to be working on and decided to setup the Free version of [Google Apps][2].  Neither Google or Justhost provided the information on configuring your MX Records properly so I had to improvise. Luckily Justhost & HostGator have similar setups using the cPanel interface.

 [1]: http://stats.justhost.com/track?c05ee06e4c70ded298351914976ee75de
 [2]: http://www.google.com/apps/intl/en/group/index.html

First, sign up for Google Apps, create your email account(s) and verify your domain.  I recommend putting the meta-tag in the header of your site, but that’s just my preference.

Next you will need to setup the MX Records for your hosted domain.  Login to the cPanel dashboard [Justhost.com][1]. Open the ‘Mail’ section and select ‘MX Entry’

[![][4]][4]

 []: http://www.aaronkwhite.com/wp-content/uploads/2011/01/Screen-shot-2011-01-23-at-10.31.25-PM.png

Now you can follow the [HostGator instructions provided by Google][4] to update your new MX Records, making sure to delete the default entry for your domain.

 [4]: http://www.google.com/support/a/bin/answer.py?answer=1042514

Finally you can wait 2-48 hours for the settings to take effect and your new Google Apps hosted email should be up and running.  If you searched anywhere on the Interwebs and found any updated information please drop me a line.  Thanks,

-Aaron
---
title: How POW saved my Ruby on Rails Education
author: Aaron
layout: post
permalink: /post/how-pow-saved-my-ruby-on-rails-education
dsq_thread_id:
  - 570136845
categories:
  - Web Development
tags:
  - MySQL
  - POW
  - Ruby
  - Ruby on Rails
  - Startup Weekend
  - Zombies
---
# 

I’ve been fortunate enough to have been a part of two winning ideas at [Startup Weekend][1], the first having been built, scrapped, rebuilt and scrapped again only to be built over a weekend by the founder and various teams of developers and designers. The other was an idea I had around improving the [wedding website space][2] focussing on beautiful design and simplicity.

 [1]: http://startupweekend.org/
 [2]: http://nowandforever.us/

My plan was to build the application using Ruby on Rails to take advantage of the simplicity of the platform, a handful of resources in the Denver/Boulder area if I had questions and hopefully the small financial footprint it takes to grow a Rails application.

I left Startup Weekend with a solid co-founder, a really great idea, a strong desire to turn this idea into something real and a huge head start with a chunk of the Rails code already written (It even had Facebook Connect ready to go). The one thing that I didn’t have was the knowledge to build a Ruby on Rails app. Not the biggest hurdle in the world, since there are a ton of resources for learning Rails ( like [Rails for Zombies][3], [Beginning Rails 3][4], and a plethora of others).

 [3]: http://railsforzombies.org/
 [4]: http://www.amazon.com/Beginning-Rails-Experts-Development-ebook/dp/B00486UF0M?SubscriptionId=AKIAJYXLFPZOVJ2LZ4WA&tag=lendle-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00486UF0M

So I set out to learn Ruby and Rails, reading a couple books at the same time, going through Zombie for Rails and working for a growing startup using PHP everyday. This isn’t a bad thing, I come from a PHP background havng been involved with or using PHP almost my entire career… Just keep in mind I’m a Designer, Front End, UI/UX guy.

So why don’t I know Ruby on Rails? Unlike the PHP world there aren’t clear instructions or easy frameworks such as MAMP to setup your local development environment. There are quite a few web servers, many different configurations and requirements for getting Rails going. Most of these issues are solvable with a few Google searches and some quality time spent in the command line.

My biggest problem was trying to get a Rails development environment setup that would’nt interfere with my work PHP environment, I also wanted to utilize my local MySQL 5.5 installation and not load everything into a virtual machine.

I’ve spent well over 6 months (obviously not every day) trying to solve this core issue… The biggest issue being that the MySQL2 Gem just would not work as advertised. There were a ton of hacks that others were able to get working, but nothing worked for me. I could create the app, but the local web server just couldnt work with my MyQSL install. I didn’t want to use SQLite since I’m way more familiar with MySQL and was planning in using it in Production… Makes sense to learn on what you’re going to use.

![POW - A zero-configuration Rack server for Mac OSX][5]

 [5]: http://pow.cx/images/logo-pow.png

An amazing thing happened a few weeks ago… The masterminds behind [37Signals][6] released a Rack Dev environment for Rails Rack apps called [POW][7].

 [6]: http://37signals.com
 [7]: http://pow.cx

> “Pow is a zero-configuration Rack server for Mac OS X. It makes developing Rails and Rack applications as frictionless as possible.”

After installing [POW][7] using the remote install script, I was able to access the default laning page in under 5 minutes.

I re-opened my Beginning Rails 3 book in my Kindle iPad app and finally started my journey learning Ruby on Rails. There was one issue once I created the scaffold for the basics blog application where the MySQL gem still didn’t want to play nicely, but after adding some magic to my .profile_bash file pointing to the correct install of MySQL 5.5 and reinstalling the MySQL2 Gem everything magically started to work as expected.

Think of [POW][7] as the web server in a box for local Ruby on Rails development. Setup POW, install your flavor of database, throw in a little RVM (Ruby Version Manager), grab the latest version of Rails (currently 3.2 as of this post) and get cranking on your Ruby on Rails application.

Thanks to this amazing little piece of software I am in the middle of learning all about Rails, IRB, the goodness that is ActiveRecord and am well on my way to making my Startup Weekend idea a reality.

You can learn more about [POW here…][7]
---
title: Flexible Web 2.0 Style Navigation
author: Big A
layout: post
dsq_thread_id:
  - 480047388
categories:
  - Web Development
tags:
  - CSS Navigation
  - HTML
  - Sliding Door
  - Web 2.0
  - Web Develpment
---
# 

I’ve been working on a major project and wanted to share a similar piece of Navigation.  For the site I’m working on requires Flexible Navigation in regards to the Web 2.0 style Tabs.  This means when you increase the font size of your browser that the background images grow with the text and the page alignment does not ‘freak out’ or ‘break’.  Now every browser displays differently so you will need to tweak my method to fit your style and layout.  My goal is to give you a working example in order provide some inspiration for your work.

[![picture-61][2]][2]

 []: http://sugaredcottage.com/aaronkwhite.com/wp-content/uploads/2009/03/picture-61.png

So a while ago I came a cross this page:  
[ http://www.boxedart.com/Tutorials/Photoshop/Tabbed-Web-2_0-Web-Page-Navigation.php][2]

 [2]: http://www.boxedart.com/Tutorials/Photoshop/Tabbed-Web-2_0-Web-Page-Navigation.php

It’s a really neat way to do rounded corner tabs in a web 2.0 type of effect.  I really like the way the ‘OFF’ tabs are contained in the same solid background tab.  On this page they show you how to slice the entire tabbed navigation and use a single background image.  Now this will work for most people, it’s definitely the quickest/easiest method to implement… however this doesn’t address LONG text or accessibility (people who can’t see small fonts, or need larger screen resolution).

Now the most popular method is the ‘[Sliding Door Method][3]‘.  Basically you create 3 images, the right & left rounded corners and the background images.  Because our tab style navigation is basically 2 tabs this method will not work without some tweaking.  You will need to slice your image (PSD provided at the bottom of the post) and within the CSS create two classes where you assign the various images (6 in total) to get everything to work.

 [3]: http://www.fiftyfoureleven.com/weblog/web-development/css/doors-meet-sprites

HTML:

> 
> 
> 
> 
> About Us
> 
> Contact Customer Service
> 
> 
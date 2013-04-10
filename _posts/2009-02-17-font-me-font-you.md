---
title: Font Me? Font You!
author: Big A
layout: post
categories:
  - Web Development
  - Post
tags:
  - font-face
  - Android
  - CSS3
  - MySQL
---
# 

I’ve been working on a site ‘re-alignment’ for  and in my travels for ideas and inspiration I came across a few resources for ‘font replacement’.  Basically this is where you specify in your CSS a font that more than likely the user doesn’t have installed by default.  In the code you provide the URL where the font is located and the browser downloads the font and swaps out the old boring type face for the shiny new font.

I’m in the process of trying to get this working here using the Droid-Sans font, which is the nice clean font used in Android.  You can find a list of open type-faces used by web designers [HERE][1].

 [1]: http://www.instantshift.com/2008/10/23/22-most-used-free-fonts-by-professional-designers/

Basically the code works like this:

>     @font-face {
>         font-family: "Robson Celtic";
>         src: url("http://site/fonts/rob-celt");
>     }

This should work for both CSS2 and CSS3 configurations, however I haven’t tested either… I’m hoping to have this working here soon.

More information can be found here:

*   
*   
*   

-Big A
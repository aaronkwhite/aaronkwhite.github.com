---
title: Migrating Fusion2 VM\'s after OS Upgrade\/Re-Install
author: Big A
layout: post
aktt_notify_twitter:
  - no
dsq_thread_id:
  - 431486094
categories:
  - VMware
tags:
  - eth0 does not exist
  - Fedora 9
  - Fusion 2
  - Migrating VM in Fusion 2
---
# 

Not sure if my blog turning into a place where I keep my notes about how to fix things because I can’t remember everything is a good thing or not, however I like to think somebody out there will find this stuff useful…

After I did a clean install of Snow Leopard I spent some time trying to get Fedora 12 beta, which I’ve come to learn doesn’t support Virtual Ethernet Interfaces.  So I needed to setup my old VM (Fedora 9) so I can work… we all know how important that is (work).

When I booted into my VM I received a message from Fusion asking if I ‘Moved’ or ‘Copied’ this VM.  I chose moved, however I’m not entirely sure of the implications of either.  After my Fedora9 VM booted I ran ‘ifconfig’ to check the IP address to I could update my /etc/hosts file, low and behold the only device available was the loopback interface. OH NO!

If you’ve ever run a slim version of a linux OS in VMware Fusion you understand that you can’t scroll up in the window to read all the text (at least I’m not aware if you can enable this or not), but after about 5-6 reboots I noticed that eth0 did not exists.  I immediately began a Google search for “Fusion linux guest device eth0 does not exist” and thankfully stumbled upon 2 items:

The first was pretty straight to the point, how to fix this issue: [http://en.gentoo-wiki.com/wiki/VMware\_Guest#Interface\_eth0\_does\_not_exist][1]

 [1]: http://en.gentoo-wiki.com/wiki/VMware_Guest#Interface_eth0_does_not_exist

The second goes into some detail about how/why this happens when you move/copy a VM: 

Basically, to fix this issue you need to remove the following file: “/etc/udev/rules.d/70-persistent-net.rules” which happens because of udev and your mac address have changed.  Hope this helps,

-Big A
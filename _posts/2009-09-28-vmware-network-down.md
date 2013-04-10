---
title: 'VMWare: Network Down'
author: Big A
layout: post
dsq_thread_id:
  - 259875186
categories:
  - VMware
  - Web Development
---
# 

This is the second time I’ve encountered this issue… I run my development server in VMWare Fusion, Fedora for Work & Ubuntu for my personal stuff (Mainly WordPress) and every so often I’ll start my VM, open Safari and get a spinning wheel.  Website Un-Reachable!  Huh? What? I’m pulling an IP address, I can ping Google from the VM WTF?  It turns out that Mac OSX sometimes thinks that vmware’s virtual network is down. I’m not entirely sure why this is so, but here is how to remedy the situation:

sudo /sbin/ifconfig vmnet8 up

Run this from a Terminal window and you should be able to ping & access your VM. Good Luck!

-Big A
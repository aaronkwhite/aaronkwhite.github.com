---
title: 'VMware Fusion 2, Ubuntu 9.04 & WMware Tools'
author: Big A
layout: post
dsq_thread_id:
  - 199654960
categories:
  - Web Development
tags:
  - Linux
  - OS X
  - Ruby
  - Ubuntu
  - VMware
---
# 

UPDATE 08/25/2009: I reloaded my Macbook Pro this weekend and install the latest VMWare (Version 2.0.5 (173382)) and did not have to make the below change to the page.c file… it seems VMWare has fixed this issue.

I received a Tweet the other day about how the use of [Ruby in the US has exploded][1]. I’ve never used Ruby, but I’ve read that it was created in order to make programming easy, well at least easier compared to other languages.  Personally  I’ve noticed a handful of more jobs requiring Ruby on Rails.  So I figured I would setup a new webserver in VMware Fusion, install Ruby & Rails to see if it really is easier to work with.

 [1]: http://www.internetnews.com/dev-news/article.php/3826466

Now on to the technical gab…

I use fusion everyday for my Fedora environment (Work Related) and Windoze… don’t worry I wont even go there.  So downloading Ubuntu Server 9.04 and installing a new environment was a snap.  Ubuntu is my favorite distro, I love the community support, rapid release cycle and apt-get!  Here’s where it gets interesting.  In order to view my updates in my fedora VM I have to rsync everything over which gets to become a HUGE pain after 10-12 times (and yes I have a shell script to do the dirty work), so I wanted to use the shared folders functionality which requires VMware Tools, so I only need to refresh my browser.  VMware DOES NOT SUPPORT UBUNTU SERVER 9.04  OH NO!  WHAT EVERY WILL I DO?  So this sux, but as every linux enthusiast knows… is not the end of the world, there is a way!

Couple things before we get started, this is done via Command Line ONLY!  This is a web server and I don’t need it to take up 12Gbs on my Mac, so we don’t need/want Gnome installed which is the default for Ubuntu Server.  If you are not comfortable with the command line, please stop here and speak with your family physician before proceeding… it’s not that difficult, but you will need to know Vi Editor.

So after you setup your VM, update the system, install build essentials and reboot (always a good idea).  Next we will need to install the Kernel Headers

Make sure you have updated version

$ sudo apt-get update

Search for kernel version (optional)

$ apt-cache search linux-headers-$(uname -r)

Install linux-header package

$ sudo apt-get install linux-headers-$(uname -r)

Make sure you have updated version

    $ sudo apt-get update

Search for kernel version (optional)

    $ apt-cache search linux-headers-$(uname -r)

Install linux-header package

    $ sudo apt-get install linux-headers-$(uname -r)

Now within Fusion, click Virtual Machine > Install VMware Tools.  This will load the virtual disk that has the tools package.  Locate the package and copy it to the /tmp directory and unpack the tools package

    cd /media/cdrom

    cp /media/cdrom/VMwareTools-1.0.3-44356.tar.gz /tmp/

    cd /tmp

    tar xvfz VMwareTools-1.0.3-44356.tar.gz

Next switch to the folder with the unpacked files and execute the installer:

    cd vmware-tools-distrib/

    ***NOTE: The following patch step is obsolete for Version 2.0.5 (173382) and later***

Now we need to patch the tools installation.  Change directory to /tmp/vmware-t0ols-distrib/lib/modules/source and locate the page.c file (this is were Vi Editor comes into play, although I guess you could install Gnome and use a graphical editor to make these changes).

First we will need to expand the vmhgfs.tar package

     untar vmhgfs.tar

cd vmhgfs-only

Now Vi into page.c, search for the following line:

    find page = __grab_cache_page(mapping, index);

and replace it with:

    page = grab_cache_page_write_begin(mapping, index, flags);

Save the file and re-tar the vmhgfs-only directory

    tar cvf vmhgfs.tar vmhgfs-only

Now go back to the directory where the VMware Tools installer is located,

    cd /tmp/vmware-tools-distrib/

and run the installer as Sudo

    sudo ./vmware-install.pl

Now the installer will ask a bunch of questions, answer yes (default) to all questions and no to the experimental question.  You will then need to verify that vmhgfs is running:

    lsmod | grep vmhgfs

If you get nothing then the mdoule is not loaded. You will need to load it with this command:

    modprobe vmhgfs

Locate your shared folders

    cd /mnt/hgfs

Enjoy! You have successfully installed VMware Tools on your Ubuntu Server 9.04 web server.  This information was compiled from about 8 different sources which took me about 6 hours to locate and get up and running, this should help out most users in a fraction of that time.  If you run into any issues I suggest you scour Google & the Ubuntu Community Forum, If you leave a comment I will try to assist the best I can.  Good Luck!

-Big A
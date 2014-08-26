# Windows tools #



[1. Code Compiler Studio](#One)
 
Code Composer Studio (CCStudio or CCS) is an integrated development environment (IDE) to develop applications for Texas Instruments (TI) embedded processors.

[2. GNU Tools for ARM Embedded Processors](#Two)

The GNU tools are a set of free APIs for C/C++ development targeted at  ARM embedded processors. 

[3. Cygwin & Alternatives](#Three)

Cygwin is  unix like environment for use in Windows.  Cygwin is used primarily for the "make" command which allows us to build .bin files for flashing to the development board.

Although Cygwin is used in the blog example that has been followed here, there are several other options available, some of which will be shown here.  
    
[4. Contiki](#Fuur)

 An open sourced operating system which we'll be using to run on our device.  

[5. SmartRF Flash Programmer v2](#Five)

 The SmartRF Flash Programmer can be used to program the flash memory in Texas Instruments low-power RF system-on-chip devices and for upgrading the firmware and bootloader on the related evaluation boards and debugger (SmartRF Evaluation Boards, CC Debugger, etc.). 

[6. SmartRF Protocol Packet Sniffer](#Six)

The SmartRF Packet Sniffer is a PC software application that can display and store radio packets captured by a listening RF device. The capture device is connected to the PC via USB. Various RF protocols are supported. The Packet Sniffer filters and decodes packets and displays them in a convenient way, with options for filtering and storage to a binary file format.
 
[7. SmartRF Studio](#Seven)

 SmartRF™ Studio is a Windows application that can be used to evaluate and configure Low Power RF-ICs from Texas Instruments. The application will help designers of RF systems to easily evaluate the RF-ICs at an early stage in the design process. It is especially useful for generation of configuration register values, for practical testing of the RF system and for finding optimized external component values. SmartRF Studio can be used both as a standalone application or together with applicable evaluation boards that are shipped in the RF-IC development kits.

[8. Putty](#Eight)

Putty is a free terminal emulation application which we've been using to read the debug output from the CS2528 development kit. 


----------

<a name="One"> </a>
# 1. Code Compiler Studio #
Prior to downloading SmartRF studio from the Texas Instruments site, you will need to register at :
 [https://myportal.ti.com/portal/dt?provider=TIPassLoginSingleContainer&lt=myti&j5=2&j3=1&goto=https://my.ti.com/cgi-bin/home.pl](https://myportal.ti.com/portal/dt?provider=TIPassLoginSingleContainer&lt=myti&j5=2&j3=1&goto=https://my.ti.com/cgi-bin/home.pl "https://myportal.ti.com/portal/dt?provider=TIPassLoginSingleContainer&lt=myti&j5=2&j3=1&goto=https://my.ti.com/cgi-bin/home.pl") 


**installation**

Donwload CCS 6.0.1 from [http://processors.wiki.ti.com/index.php/Download_CCS#Code_Composer_Studio_Version_6_Downloads](http://processors.wiki.ti.com/index.php/Download_CCS#Code_Composer_Studio_Version_6_Downloads "http://processors.wiki.ti.com/index.php/Download_CCS#Code_Composer_Studio_Version_6_Downloads")

Clicking the link requires you to login to your TI account and fill in a US Government export agreement including entering the company name and website address etc.  On the forum the first name and last name fields seem to be unfilled and read-only, although the “approval” email did have the correct information.

The CCS installer has a few options selectable during install;
  
*Processor Support*

We’re using an ARM Cortex M3 processor, so select “C2000 32-bit read-time MCUs”.  The “TI C28x Compiler” and “TI ARM Compiler” should be both selected.  
*
Select Emulators*

XDS200 Class Emulator Support options is checked and read-only.  We assume the option to uncheck the box is disabled as it’s a required install for the processor we’ve selected.

***** Note from Thursday 21st August 2014. When I connected the SmartRD06 evaluation board, It was detected as XDS100 NOT XDS200.

*App Centre*

Software option is unchecked as default.  We checked the box to install the additional products and features. There could be useful extras, so we’ll install this.  The GUI Composer box is also checked, we’ll install it, although I don’t think it’ll be used.

*First time Code Composer Studio launch*

Select workspace area.  We used the default “c:\users\username\workspace_v6_0”
A checkbox can be ticked to default the path and stop CSS asking you to select the workspace every time.  


----------


<a name="Two"> </a>
# 2. GNU Tools for ARM Embedded Processors #

Download from https://launchpad.net/gcc-arm-embedded/+download  there’s only a 32 bit version available
The installation is for the most part just a standard installer.  Upon completion of the installation you’re asked if you want to run gccvar.bat (I didn’t run it, but opened the file later in Notepad.)  It adds a path to the %path% in Windows, so the files in this folder can be execute from any folder.
The installed folder for the installer I used is “C:\Program Files (x86)\GNU Tools ARM Embedded\4.8 2014q2”.  I believe we’ll need this information for Cygwin.
The readme.txt contains some really good information on architecture and library usage. I’ll link it somewhere in the wiki.


----------


<a name="Three"> </a>
# 3. Cygwin and alternatives #

## Cygwin ##
Cygwin is (according to the site):

•	a large collection of GNU and Open Source tools which provide functionality similar to a Linux Distribution on Windows.

•	a DLL (cygwin1.dll) which provides substantial POSIX API functionality.

We need to use Cygwin to emulate Linux functionality on Windows as TI software packages SmartRF Studio isn’t supported on Linux.  It is possible to flash .elf files using uniflash (http://processors.wiki.ti.com/index.php/Category:CCS_UniFlash) on linux. 
 
**Installing**

The installer is on this page [https://cygwin.com/install.html](https://cygwin.com/install.html "https://cygwin.com/install.html")

We downloaded the x64 version.  
Choose a download Source
We selected the Install from Internet radio button
Select Root Install Directory
We use the default folder of “C:\cygwin64” and took the default option for Installs For everyone.
Select Local Package Directory
This folder seems to default to wherever the installer has been run from.  I changed the path to a folder I created - “C:\cygwin64\Package_Store”.

*Select Your Internet Connection*

I have a direct connection, so I’m using that option.  If you’re running through a proxy, you’ll need to specify it here (or select it from Internet Explorer settings)
Choose a download site
We selected http://box-soft.com.
  
*Select packages to install *

We need to install the “make” which we do in the “Select Package” window.  In the search text box type “make and the under “Devel” folder, you need to click the “make” so it won’t be skipped. There should now be a check in the box for the make binary.
Resolving Dependencies
Cygwin will select the dependencies required based on the packages we installed.  Just click next here.
Installation complete.


## Eclipse ##

In development

## Blocks::Code ##

In development

## Linux - make ##

In development

----------

<a name="Four"> </a>
# 4. Contiki #

Download link 
[http://sourceforge.net/projects/contiki/files/Contiki/Contiki%202.7/](http://sourceforge.net/projects/contiki/files/Contiki/Contiki%202.7/ "http://sourceforge.net/projects/contiki/files/Contiki/Contiki%202.7/")

Current Version is 2.7 
Download and extract the zip file into a folder.  For this walkthrough we’ll use the path from the blog - C:\Work\contiki-2.7


----------

<a name="Five"> </a>
# 5. SmartRF Flash Programmer v2 #

The file can be downloaded from 
[http://www.ti.com/tool/flash-programmer](http://www.ti.com/tool/flash-programmer "http://www.ti.com/tool/flash-programmer")

*Choose Components*

All options were checked as default, we accepted this and clicked next.
The install package also installs drivers for hardware too – when I plugged in the CC2511 USB Dongle which is included in the Development kit.


----------

<a name="Six"> </a>
# 6. SmartRF Protocol Packet Sniffer #
Download the file from 
[http://www.ti.com/tool/packet-sniffer](http://www.ti.com/tool/packet-sniffer "http://www.ti.com/tool/packet-sniffer")
Package is named swrc045z.zip

There’s 2 installers in the zip file.  We're installing Setup_SmartRF_Packet_Sniffer_2.18.1.exe

Default installation options were taken.


----------

<a name="Seven"> </a>
# 7. SmartRF Studio #

Download ink [http://www.ti.com/tool/smartrftm-studio](http://www.ti.com/tool/smartrftm-studio "http://www.ti.com/tool/smartrftm-studio")

Package is named swrc176z.zip

In development

----------


<a name="Eight"> </a>
# 8. Putty #

Putty is a stand alone executable.

Donwload link [http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html "http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html")
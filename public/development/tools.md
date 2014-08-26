#Platform Definition

## Hardware - Texas Instrument CC2538
 http://www.ti.com/product/cc2538

This Texas Instrument System on a Chip includes both low power radio and micro controller of sufficient power at a sub $4 price point 


- Microcontroller
	- Powerful ARM Cortex M3 With Code Prefetch
	- Up to 32 MHz Clock Speed
	- 512-kB, 256-kB or 128-kB In-System-Programmable Flash
	- Supports On-Chip Over-the-Air Upgrade (OTA)
	- Supports Dual ZigBee Application Profiles
	- Up to 32-kB RAM (16-kB With Retention in All Power Modes)
	- cJTAG and JTAG Debugging
- RF
	- 2.4-GHz IEEE 802.15.4 Compliant RF Transceiver
	- Excellent Receiver Sensitivity of –97 dBm
	- Robustness to Interference With ACR of 44 dB
	- Programmable Output Power Up to 7 dBm
- Security Hardware Acceleration
	- Future Proof AES-128/256, SHA2 Hardware Encryption Engine
	- Optional – ECC-128/256, RSA Hardware Acceration Engine 
	- for Secure Key Exchange
	- Radio Command Strobe Processor and Packet Handling Processor for 
	- Low-Level MAC Functionality
- Low Power
	- Active-Mode RX (CPU Idle): 20 mA
	- Active-Mode TX at 0 dBm (CPU Idle): 24 mA
	- Power Mode 1 (4-µs Wake-Up, 32 kB RAM retention, full 
	- register retention): 0.6 mA
	- Power Mode 2 (Sleep Timer Running, 16-kB RAM 
	- Retention, Configuration Register Retention): 1.3 µA
	- Power Mode 3 (External Interrupts, 16-kB RAM Retention, 
	- Configuration Register Retention): 0.4 μA
	- Wide Supply-Voltage Range (2 V–3.6 V)
- Peripherals
	- µDMA
	- 4 × General-Purpose Timers (Each 32-Bit or 2 × 16-Bit)
	- 32-Bit 32-kHz Sleep Timer
	- 12-Bit ADC With 8 Channels and Configurable Resolution
	- Battery Monitor and Temperature Sensor
	- USB 2.0 Full-Speed Device (12 Mbps)
	- 2 × SPI
	- 2 × UART
	- I2C
	- 32 General-Purpose I/O Pins 
	- (28 × 4 mA, 4 × 20 mA)
	- Watchdog Timer
- Layout
	- 8-mm × 8-mm QFN56 Package
	- Robust Device for Industrial Operation up to 125°C
	- Few External Components
	- Only a Single Crystal Needed for Asynchronous Networks
- Development Tools
	- CC2538 Development Kit
	- Reference Design Certified Under FCC and ETSI Regulations
	- Full Software Support for ZigBee Smart Energy 1.x, 
	- ZigBee Smart Energy 2.0, ZigBee Light Link and ZigBee 
	- Home Automation With Sample Applications and Reference 
	- Designs Available
	- Code Composer Studio
	- IAR Embedded Workbench for ARM
	- SmartRF Studio
	- SmartRF™ Flash Programmer

## Hardware Development Kit

http://www.ti.com/tool/cc2538dk

The CC2538 development kit provides a complete hardware performance test platform and generic software development environment for the ARM Cortex M3-based, IEEE 802.15.4 compliant CC2538 system-on-chip from Texas Instruments. The kit includes two CC2538 RF evaluation modules (CC2538EM), two general purpose development boards (SmartRF06EB) for software and hardware prototyping, one CC2531 USB dongle for packet sniffing, cables, and documentation to get you up and running with the CC2538 quickly and easily.

The CC2538 evaluation modules can be used as reference modules for prototyping and for verifying the performance of the CC2538 RF IC. In combination with SmartRF06EB and SmartRF Studio, you have a complete set of tools for measuring RF parameters and more generally evaluate the RF performance of the chip. SmartRF Studio can generate register values and set up the radio to send and receive packets, set up a continuous wave signal and read the received signal strength (RSSI).

The SmartRF06EB has integrated the XDS100v3 debug probe, so no additional hardware tools are required for debugging of software running on the devices. The debug probe is compatible with Code Composer Studio and IAR Embedded Workbench. Other JTAG probes that support ARM Cortex M3 devices, like JLink from Segger and I-jet from IAR, can also be used to download and debug software on the CC2538.

The CC2538EM boards come pre-programmed with a Packet Error Rate test, which can be used for practical range testing of the radio. Texas Instruments' ZigBee stack (Z-Stack) is of course also available for the kit.

Contains
- 2 x SmartRF06 Evaluation Boards
- 2 x CC2538 Evaluation Modules
- 1 x CC2531 USB Dongle (for packet sniffing)
- Cables
- Documentation

##Hardware IDE 

http://www.ti.com/tool/ccstudio

Code Composer Studio is an integrated development environment (IDE) that supports TI's Microcontroller and Embedded Processors portfolio. Code Composer Studio comprises a suite of tools used to develop and debug embedded applications. It includes an optimizing C/C++ compiler, source code editor, project build environment, debugger, profiler, and many other features. The intuitive IDE provides a single user interface taking you through each step of the application development flow. Familiar tools and interfaces allow users to get started faster than ever before. Code Composer Studio combines the advantages of the Eclipse software framework with advanced embedded debug capabilities from TI resulting in a compelling feature-rich development environment for embedded developers.

Getting started instructions: http://processors.wiki.ti.com/index.php/Category:Code_Composer_Studio_v6


##Operating System 
The Contiki Operating system is supported on the above hardware and abstracts key technical capabilities such as low power IP stacks and simulated multi threading capability 

The Platform to be downloaded http://sourceforge.net/projects/contiki/files/Instant%20Contiki/Instant%20Contiki%202.7/ 

Getting started instructions: http://www.contiki-os.org/start.html

Contiki source code and build instructions: https://github.com/contiki-os/contiki


Contiki wiki and self help https://github.com/contiki-os/contiki/wiki



#Additional Components component suite

Our initial plan is to use the Contiki OS on top of the TI CC2538 to give us the base functionality required. This includes

* uIP stack - low footpring IP
* MDNS- local IP based discovery
* Filesystem
* CoAP stacks etc

We anticiapte the need for further components to augment this capabilities and address the core PicoSec requirements. This list will evolve over time, but at this stage includes

##JSON -RPC capability

We have three stacks currently under evaluation.
https://github.com/nallott/picosec-code/tree/master/jsoncpp-master

https://github.com/nallott/picosec-code/tree/master/jsonrpc-cpp-0.4

https://github.com/nallott/picosec-code/tree/master/libjson-rpc-cpp-master


##BSON -RPC stack

Depending on footprint and processing impacts, we are likely to need a BSON stack to optimise the handling of JSON structures

##DTLS stack

This stack already works with COntiki and provdies a DLTS implementation which will be needed as we evolve the security capability 

https://github.com/nallott/picosec-code/tree/master/tinydtls-0.4.0


##Android host

This is self developed and will act as an Android host service for the PicoSec stack 
https://github.com/nallott/picosec-code/tree/master/ubiOS


##DNS capability 
The MDNS stack provides the local IP based service discovery capability 


https://github.com/nallott/picosec-code/tree/master/mDNSResponder-544

https://github.com/nallott/picosec-code/tree/master/mdns


##WebSocket implementation
This is a stripped down websocket implementation which will provide a an optional component that will faciliate connections from web hosted applications

https://github.com/nallott/picosec-code/tree/master/libwebsockets

##UIP

This is an optional component that could be used for performance tuning further down the track. This provides IP stack but on non-contiki systems

https://github.com/nallott/picosec-code/tree/master/uip-cygwin



	



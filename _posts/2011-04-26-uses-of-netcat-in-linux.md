---
layout: page
title: "Uses of Netcat in Linux"
date: 2011-04-26
categories: [  Linux ]
teaser: "Netcat is a networking program in UNIX-like systems for reading from and writing to network connections using TCP or UDP. Its man page says The nc utility is used for just about anything under the"

---
Netcat is a networking program in UNIX-like systems for reading from and writing to network connections using TCP or UDP. Its man page says "The nc utility is used for just about anything under the sun involving TCP or UDP". So here are a few ways it can be used:

# Using Netcat as a Simple Chat Program

Using Netcat as a chat program is easy, to try it just run the command on one of the machines with the **-l** option to listen on a port (port 12345 in this example):

```
nc -l 12345
```

And on the other machine connect to the first using its IP address or hostname and the port it is listening on by entering:

```
nc  12345
```

Once the connection is made type anything on one of the machines and press enter to display it on the other. And to close the connection press **CTRL + D** on any of them.

# Using Netcat for File Transfer

You can use Netcat to transfer files from one machine to the other. On the receiving machine run Netcat in listening mode using the -l option followed by the port number and redirect the output to a file:

```
nc -l 12345 > output1.dat
```

This command will Netcat listening on port 12345 and will write the output to a file called output1.dat in the current directory. On the sending machine enter the following command:

```
nc 192.168.1.10 12345 < input1.dat
```

This will connect to the machine using the IP address 192.168.1.10 on port 12345 and send the contents of the file input1.dat. When the transfer is complete the connection will close automatically.

# Using Netcat as a Port Scanner

Netcat can also be used as a port scanner by using the **-z** option and specifying a host and port range instead of a single port. This option checks the ports in range if there is a deamon listening without sending data. The following example will scan the ports 20 through 25 of 192.168.1.10 and list the open ones:

```
nc -z 192.168.1.10 20-25
```

To list the closed ports too include the **-v** option. For example:

```
nc -vz 192.168.1.10 20-25
```

Other options that can be used to speed up scanning are **-n** to prevent DNS lookup and **-w 1** to limit the timeout to 1 second.
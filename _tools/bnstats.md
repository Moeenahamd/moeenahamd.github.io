---
layout              : project
title               : "bnstats"
description         : "Command-line tool for listing Bitnodes Bitcoin network stats"
github_title        : "GitHub"
header:
  image_fullwidth: header_unsplash_12.jpg
github_link: "https://github.com/amgedr/"
permalink           : "/tools/bnstats/"
---     

Command-line tool for listing Bitcoin network stats from Bitnodes. Documentation for the API used to get the details of nodes can be found at: https://bitnodes.21.co/api/ To keep the script responsive the data is downloaded automatically only if the file bnstats.json does not exist. To download the latest snapshot manually, run bnstats with the refresh command. The Bitcoin nodes list can be summerized by countries, hostname, time zone, user-agent and service providers hosting the Bitcoin nodes.
---
layout: page
title: "How to Get the Title of a Webpage in Windows Forms"
date: 2013-11-18
categories: [WinForms]
teaser: "I've been working on a Windows Forms application that needs to, among other things, get the title of a webpage. I thought I might share it here in case someone else needs it."

---

I've been working on a Windows Forms application that needs to, among other things, get the title of a webpage. I thought I might share it here in case someone else needs it.

```
static string GetPageTitle(string link)
{
    try
    {
        WebClient wc = new WebClient();
        string html = wc.DownloadString(link);

        Regex x = new Regex("");
        MatchCollection m = x.Matches(html);

        if (m.Count > 0)
        {
            return m[0].Value.Replace("", "");
        }
        else
            return "";
    }
    catch (Exception ex)
    {
        Console.WriteLine("Could not connect. Error:" + ex.Message);
        return "";
    }
}
```
The function uses System.Net.WebClient to download the HTML source of the page into a string variable. Then using the regular expressions class System.Text.RegularExpressions.Regex finds the opening and closing title tags and everything in between. If a match is found the title tags in the matched string are removed by replacing them empty strings.

If you found this post useful, I'd be very grateful if you'd help it spread by sharing it. Thank you!
---
layout: page
title: "List Drives and Folders in a TreeView Using C#"
date: 2013-06-04
categories: [WinForms]
teaser: "The .NET Framework makes it easy to read drive and folder details but it does not include a Windows Forms control to automatically list them other than the FolderBrowserDialog control. Here is a fast and"

---
The .NET Framework makes it easy to read drive and folder details but it does not include a Windows Forms control to automatically list them other than the FolderBrowserDialog control. Here is a fast and simple way to use a TreeView control to list the drives and folders in a system.

![directorylist](/images/directorylist.png)

The trick to keeping the TreeView control responsive and prevent it from hanging is to read and display the drives only on the form load event. Then read and display the folders the user expands. This way the user will not have to wait for the application to read all or most of the folder structure before using it. To accomplish that every node that represents a drive or a folder should have its path saved in the TreeNode's Tag property.
```
private void MainForm_Load(object sender, EventArgs e)
{
    //get a list of the drives
    string[] drives = Environment.GetLogicalDrives();
                
    foreach (string drive in drives)
    {
        DriveInfo di = new DriveInfo(drive);
        int driveImage;

        switch (di.DriveType)    //set the drive's icon
        {
            case DriveType.CDRom:
                driveImage = 3;
                break;
            case DriveType.Network:
                driveImage = 6;
                break;
            case DriveType.NoRootDirectory:
                driveImage = 8;
                break;
            case DriveType.Unknown:
                driveImage = 8;
                break;
            default:
                driveImage = 2;
                break;
        }
                        
        TreeNode node = new TreeNode(drive.Substring(0,1),driveImage,driveImage);
        node.Tag = drive;

        if (di.IsReady == true)
            node.Nodes.Add("...");

        dirsTreeView.Nodes.Add(node);
    }
}
```
The TreeView's BeforeExpand event occurs immediately after the user clicks the TreeNode's plus sign to expand it and show its children. Here we just get a list of the folders in the path that is the Tag property and add a TreeNode for each.
```
private void dirsTreeView_BeforeExpand(object sender, TreeViewCancelEventArgs e)
{
    if (e.Node.Nodes.Count > 0)
    {
        if (e.Node.Nodes[0].Text == "..." && e.Node.Nodes[0].Tag == null)
        {
            e.Node.Nodes.Clear();

            //get the list of sub direcotires
            string[] dirs = Directory.GetDirectories(e.Node.Tag.ToString());

            foreach (string dir in dirs)
            {
                DirectoryInfo di = new DirectoryInfo(dir);
                TreeNode node = new TreeNode(di.Name, 0, 1);

                try
                {
                    //keep the directory's full path in the tag for use later
                    node.Tag = dir;  

                    //if the directory has sub directories add the place holder
                    if (di.GetDirectories().Count() > 0)
                        node.Nodes.Add(null, "...", 0, 0);
                }
                catch (UnauthorizedAccessException) 
                {
                    //display a locked folder icon
                    node.ImageIndex = 12;
                    node.SelectedImageIndex = 12;
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "DirectoryLister", 
                        MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
                finally
                {
                    e.Node.Nodes.Add(node);
                }
            }
        }
    }
}
```
If you found this post useful, I'd be very grateful if you'd help it spread by sharing it. Thank you!
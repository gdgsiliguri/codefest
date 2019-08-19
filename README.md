# Codefest
Welcome to Codefest 2019. To grab a seat in this competition what you have to do is make a pull requests. Follow the whole documentation.
## What is a pull request?
Pull requests helps you to let the maintainer of the project know the changes you want to make to their project. Once a pull request (PR) is opened
the project owner or the maintainers can review the changes and can merge them to their project or close the pr.

## How to Create a pull request?
Here we are going to create a pr with changes in the [codefest.txt](https://github.com/gdgsiliguri/codefest/blob/master/source/codefest.txt) file.
- Fork the repository to your GitHub account by clicking on the fork button in the upper right corner of the page.
- Now there are **two ways for making changes to the file**
  ### Clone the project to your local environment and edit the file (recommended):
  
  FOR THIS YOU NEED GIT INSTALLED IN YOUR LOCAL COMPUTER
  - Click on "Clone or download" button in your forked repositories page.
  - Copy the web url.
  - Run `git clone CopiedWeburl` in the terminal of your local computer. After cloning is done move inside the cloned folder.
  - Go to  ```source/codefest.txt```.
  - Type your name, email and `I love devFest` into the file and save it.
  - In the terminal run 
    > git add . <br/>
    > git commit -m "Your Commit message" <br/>
    > git push origin master <br/>
  - Now return to the forked repository in GitHub in your browser and click on "New pull request" Button.
  - Type ```I love devfest``` as the title of the pr and your name and email in the description box.
  - Click on "Create pull request" button and you are done!
  
  Want to learn more about Git? Follow our [Git Cheatsheet](https://github.com/gdgsiliguri/git-cheatsheet)
  
  ### Make change to the file on the GitHub site (easier):
  - In the forked repository go to ```source/codefest.txt``` file and click on the pencil icon to edit it.
  - Type `I love devFest` inside it and write some approprate commit messages then click on "Commit changes".
  - Now click on "New pull request" button.
  - Type ```I love devfest``` as the title of the pr and your name and email in the description box.
  - Click on "Create pull request" button and you are done! 

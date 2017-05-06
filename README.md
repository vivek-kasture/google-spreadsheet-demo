# Google-spreadsheet-demo

google-spreadsheet-demo is the ionic project, which uses google spreadsheet as database.These are the steps for the create google sheet as database.

  - Login with your google account
  - Goto to google [sheets](https://docs.google.com/spreadsheets/u/0/) and click on new sheet
  - Creat your own structured sheet
  - Click on share button and go to advanced link
  - Change access to `public`.
  - Now copy the link and get unique-ID of the spreadsheet only. For example- https://docs.google.com/spreadsheets/d/1ZNUGmH_rL4UOQc1L-ejd-RkyL5cC0WqSTBkiM2S5iKk/edit?usp=sharing from which key is `1ZNUGmH_rL4UOQc1L-ejd-RkyL5cC0WqSTBkiM2S5iKk` save it somewhere.
  - Use google script url for converting this spreadsheet data to the `JSON`data link- https://script.google.com/a/macros/techjoomla.com/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=SheetID&sheet=Sheet1
 edit above link- add your sheetID we saved in to the SheetID place and make sure that you have mentioned the sheet name in the last.
  - Now final link is here-https://docs.google.com/spreadsheets/d/1ZNUGmH_rL4UOQc1L-ejd-RkyL5cC0WqSTBkiM2S5iKk/edit#gid=0 which contains world country data.

# Gets started with app!!!

  - You dont need to create new project just clone this project
  - Fire this command (Assuming you have already installed npm, ionic and cordova)
```sh
$ npm install
$ ionic platform add android
$ ionic run android
```

Now you all have done!!!
Enjoy Coding :)

License
----

MIT


**Free Software, Hell Yeah!**

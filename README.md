1. Helpful Resources:

- Firebase manage user:
  https://firebase.google.com/docs/auth/web/manage-users

2a. Tools Used:

- Dark button from:
  https://codepen.io/ozer/pen/KwvKoR

- Drop down list:
  https://github.com/Godsont/Custom-Select-Box

2b. Trick learnt from the project:

- Swap, remove and add element of array in javascript:
  components/SocialMediaList/SocialMediaList.js
  see: btnUpClickedHandler, btnDownClickedHandler, deleteClickedHandler
  example:
  let nextValue = socialMediaListCopied[index];
  socialMediaListCopied[index] = socialMediaListCopied[index-1];
  socialMediaListCopied[index-1] = nextValue;

- How to pass data from child to parent: See SocialMediaList.js (parent)
  and Modal.js (child)
  https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs

- Copy to clipboard: see copyToClipboard in components/Boxes/HeaderBox/HeaderBoxEdit
  Copy to Clipboard js:
  https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  Copy to clipboard react:
  https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard

3. Tasks to be done:

- Implement Routing for all pages[]
- Authentication Implemented[]:
  +, install redux[]
  +, read redux basics and redux advanced[]
  +, implement redux for authentication[]
- Fully Front-end implemented[]:
  +, should have all the data ready to be send[]
  +, set up a dummy object for retrieving data on front-end[]
- Fully back-end implemented[]
- application beta finish[]

- Learn firestore[]
- Learn how to use Context API[]

4. Improvement tasks:

- Implement modal for error instead of alerting it
  (sign in, sign up, retrieve password) []
- Implement Loader for async task (retrieve) []

* Do Social Media Page Listing (Design) [DONE]
* Do front-end functionality for Edit Profile []
* Added routing for all pages []
* Added redux, authentication for all pages []

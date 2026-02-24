# Fourfront Frontend Assessment

This is a simple frontend page built with:
- HTML
- CSS
- JavaScript
- Bootstrap 5 (CDN)

The goal is to match the provided design and add small interactivity.

---

## Folder structure

- `index.html` = the page
- `css/styles.css` = styling
- `js/app.js` = JavaScript for interactivity
- `assets/` = images used on the page

---

## How to run

### Option 1: VS Code Live Server
1. Open the project folder in VS Code
2. Right click `index.html`
3. Choose **Open with Live Server**


## What I used Bootstrap for
- **Grid / responsiveness**
  - I used `container`, `row`, and responsive `col-*` classes so the layout works on mobile, tablet, and desktop.
- **Collapse component**
  - Foundation and Economy membership descriptions open/close using Bootstrap collapse.

---

## JavaScript interactivity (what the JS does)
The JavaScript in `js/app.js` does two simple things:

1. **Email validation**
   - When the user clicks **Send**, the code checks if the email contains `@` and `.`
   - If not, it shows a small red message
   - If yes, it shows a green success message

2. **Plus / minus**
   - When a membership section opens, `+` becomes `−`
   - When it closes, it changes back to `+`

---

## Images
Images are saved in the `assets` folder and are used in the HTML like:

- `./assets/TimothyMuli.jpeg`
- `./assets/JobMasai.jpeg`
- `./assets/PhilipMuthini.jpeg`
- `./assets/WilliamMatheka.jpeg`
- `./assets/KelvinKyaka.jpeg`

Note: file names are case-sensitive in WSL/Linux, so the names in HTML must match exactly.

---

## Short explanation I would give to the assessor

I built the page using plain HTML and CSS, and I used Bootstrap mainly to make it responsive using the grid system.  
For the membership section, I used Bootstrap collapse so that clicking the membership buttons shows and hides the description.  

In JavaScript, I added small interactivity:
- I validate the email input when the user clicks Send and show a message.
- I also change the plus sign to a minus sign when a membership description is opened, and switch it back when it is closed.

The code is separated into folders (css, js, assets) to keep it organized and easy to follow.
<img width="1199" alt="code-quality-task-screenshot" src="https://user-images.githubusercontent.com/8201843/113413843-4080fb80-93c4-11eb-9f20-15e4b4c1e430.png">

# Clear Code Task

## Description

Here is a small single-page **TODO-list application**. The goal of the task is to edit and change code – refactor code files, while the functionality of the application should remain the same. Changes should be made according the following guidelines:  [HTML & CSS. Beginner level](#html--css-beginner-level) and [HTML & CSS. Advanced level](#html--css-advanced-level).

No automatic code formatting tools are expected to be used at this task.

## Application Functionality :

    - Adding a new item to the "TODO" task list
    - Editing an item in the "TODO" task list
    - Deleting an item from the "TODO" task list
    - Setting an item to completed status and moving it to the "COMPLETED" list via checkbox

    - Deleting an item from the "COMPLETED" list
    - Editing an item from the "COMPLETED" list
    - Setting an item to "Incomplete" status and moving it to the "TODO" list via checkbox
    - Animation on the delete button

<details>

<summary># HTML & CSS. Beginner level</summary>

## 1. General HTML & CSS rules

### 1.1. Indentation

Always use two spaces for one indentation.
Do not use tabs for indentation and do not mix indentation types (tabs and spaces).

<details>
    <summary>Why?</summary>

Since there is a team of people working on projects, often the same project source code is displayed in different code editors. Problems start when different idempotent methods are used in the same file. Since each code editor displays tab indentation differently, a file which looks beautiful in your IDE may look quite ugly in another IDE.

</details>

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

```css
.example {
  color: blue;
}
```

### 1.2. Use lowercase

All HTML-tags, attributes and their values, CSS selectors, CSS properties and their values must be in lowercase. `<!DOCTYPE html>` is an exception to this rule.

```html
<!-- Not recommended -->
<SPAN CLASS="text-ROSE">Home</SPAN>

<!-- Recommended -->
<img src="google.png" alt="Google" />
```

```css
/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```

### 1.3. Quotes in HTML & CSS files

Use double quotes instead of single quotes for HTML attributes and CSS properties.

```html
<!-- Not recommended -->
<a class='main-button main-button-secondary'>Sign in</a>

<!-- Recommended -->
<a class="main-button main-button-secondary">Sign in</a>
```

## 2. HTML

### 2.1. Formatting

Put every block, table or list element on a new line, regardless of their styles.

Indent each nested element, thus respecting the nesting ladder.
Inline elements can (but do not have to) be put to a new line and indented to improve code readability.

- Element `<em>` is used to highlight a substring on a paragraph. It can stay where it is, because it is an inline element.
- Element `<p>` is a block element, so it must be put on a new line.

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
```

- List elements:

```html
<ul>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>React.js</li>
</ul>
```

- Table elements:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$5.00</td>
      <td>$4.50</td>
    </tr>
    <tr>
      <td>$9.00</td>
      <td>$2.50</td>
    </tr>
  </tbody>
</table>
```

- Input and button elements are inline, but putting them on a new line will increase the code readability.

```html
<div>
  <input type="text" />
  <button>Add</button>
</div>
```

### 2.2. Document Type

Use HTML5.

HTML5 is recommended for all types of HTML files and is marked by the first tag in HTML file:
`<!DOCTYPE html>`

### 2.3. Named character references

Do not use named character references.

There is no sense in using named character references, such as `&mdash;`(&mdash;), `&rdquo;`(&rdquo;) or `&#x263a;`(&#x263a;), when all files use the same encoding (UTF-8).

The only exception to this rule - special symbols in HTML (e.g. `<` and `&`) and "invisible" characters (e.g. non-breaking space `&nbsp;`).

```html
<!-- Not recommended -->
<div>Euro sign: &ldquo;&eur;&rdquo;.</div>

 <!--  Recommended -->
<div>Euro sign: "€". </div>
```

### 2.4. 'type' attribute

Do not use `type` attribute when connecting styles and scripts (use it only if you connect not CSS or JS).

<details>
    <summary>Why?</summary>
    HTML5 uses 'text/css' and 'text/javascript' by default, so there is no need to use 'type' attribute.
    This works even in old browsers.
</details>

```html
<!--  Not recommended -->
<link rel="stylesheet" href="https://www.google.com/css/main.css" type="text/css" />

<!--  Recommended -->
<link rel="stylesheet" href="https://www.google.com/css/main.css" />
```

```html
<!--  Not recommended -->
<script
  src="https://www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"
></script>

<!--  Recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
```

## Optional recommendations:

### 2.5. HTML Line-Wrapping

Break long lines into multiple lines.

Breaking a long text into multiple lines may significantly increase code readability.

```html
<md-progress-circular
  md-mode="indeterminate"
  class="md-accent"
  ng-show="ctrl.loading"
  md-diameter="35"
>
</md-progress-circular>
```

## 3. CSS

### 3.1. Single style for selectors naming

Whichever style of name writing you choose, follow it throughout the project.

If you use BEM, stick to that notation without exception.

Otherwise, it is recommended that you use a hyphen to separate words in selectors and spell them in lower case, and all the words in the selector must be separated.

[More about BEM](https://en.bem.info/methodology/quick-start/)

```css
/* Not recommended: words “demo” and “image” are not separated */
.demoimage {
}

/* Not recommended: usage of underscore instead of hyphen */
.error_status {
}

/* Recommended */
#video-id {
}
.ads-sample {
}

/* Recommended for BEM */
.block-name__element-name_modifier-name {
}

.search-form__button {
}
```

### 3.2. Meaningful naming of identifiers and classes:

Use template or meaningful class names and identifiers.

Rather than relying on ciphers or describing an element's appearance, aim to convey the purpose behind its creation in the name of its class or identifier. Alternatively, assign a descriptive template name.

It is recommended to choose names that reflect the essence of the class because they are easier to understand and will likely not need to be changed in the future.

Template names are simply a naming option for elements that have no special purpose or are not distinct from their siblings. They are usually needed as "Helpers".

Using functional or template names reduces the need for unnecessary changes to the document or templates.

```css
/* Not recommended: has no meaning */
#yee-1901 {
}

/* Not recommended: appearance description */
.button-green {
}
.clear {
}
```

```css
/* Recommended: short and simple */
#gallery {
}
#login {
}
.video {
}

/* Recommended: template name */
.clearfix {
}
.alt {
}
```

### 3.3. Keep the names of identifiers and classes concise

For identifiers and classes, use names that are as long as necessary, but as short as possible.

Try to articulate exactly what the element is supposed to do, while being as concise as possible.

This use of classes and identifiers contributes to making code easier to understand and more efficient.

```css
/* Not recommended */
#navigation {
}
.atr {
}
```

```css
/* Recommended */
#nav {
}
.author {
}
```

### 3.4. Tag selectors

Do not use tag selectors (except for intentionally resetting the default styles).

It increases performance when applying styles by a browser.
[More details here](https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)

You may want to change the tag you use to some other tag in the future, in which case you'll have to track down all the places where that tag is used in the styles and replace it with the new one, while using classes / id helps abstract your styles from the details of your html layout.

```css
/* Not recommended */
body {
}
ul#example {
}
div.error {
}

/* Recommended */
.page {
}
#example {
}
.error {
}
```

### 3.5. Indentation in blocks

Always indent the content of blocks.

Always indent any content in a block (blocks are separated by curly braces `{}`).
For example for rules within rules or declarations, to show hierarchy and make the code easier to understand.

```css
@media screen, projection {
  html {
    background: #fff;
    color: #444;
  }
}
```

### 3.6. Space after property name

Always use one space after (not before) a colon in properties.

```css
/* Not recommended */
h3 {
  font-size :16px;
  font-weight:bold;
}

/* Recommended */
h3 {
  font-size: 16px;
  font-weight: bold;
}
```

### 3.7. Semicolon after properties

Put semicolon after each property.

```css
/* Not recommended */
.test {
  display: block;
  height: 100px
}

/* Recommended */
.test {
  display: block;
  height: 100px;
}
```

### 3.8. Separate selectors and properties

Separate selectors and properties with a line break.

Start each selector or rule on a new line.

```css
/* Not recommended */
a:focus,
a:active {
  position: relative; top: 1px;
}

/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 3.2;
}
```
</details>


<details>

<summary># HTML & CSS. Advanced level.</summary>

## 1. HTML

### 1.1. Semantics

Use HTML the way it was intended to be used.

Use tags as they should be used: `<h1-6>` for headings, `<p>` for paragraphs, `<a>` for links etc.
You should also use such elements as `<aside>`, `<section>`, `<article>`.

**Why?**

- This makes it easier to read, edit, and maintain code.
- Also, if your site opens on an e-book,
  semantic tags will help the parser parse your page elements into their intended components
  and display them correctly to the user.
- This is how you take care of all users:
  if the page is opened in the mode for people who can't see well, a special robot will read each element so the user can recognize the page content. This robot relies on the fair use of semantic tags.
  Otherwise, the reader will not be able to navigate through your site.
  (read more: [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML))
- Search engines Google, Yandex, Bing use semantic tags as keywords with which they better recognize the internal content of a page,
  and therefore rank such pages higher in search results.
  The higher your page ranks in a search query, the more users will visit it.
  [More on SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/"> All recommendations </a>
```

### 1.2. Media alternatives

Always specify alternative content for multimedia.

Try to specify alternative content for multimedia:
For example, for pictures, videos, or animations defined with canvas.

For pictures, this is a meaningful alternative text (alt),
and for video and audio, transcripts and captions if possible.

**Note!** If `alt` is redundant for a picture, or if it is used only for decorative purposes in places,
where CSS cannot be used, _use the empty alternate text_ `alt=""`.

**Why?**

- The `alt` attribute is incredibly useful for accessibility:
  screen reader programs read this description to their visually impaired users,
  to let them know what is displayed on the page.
- This same description is also used by search engines (Google, Yandex) to identify their content and display it in their search results.
  So, this is another way to increase the number of users of your page.
- Plus, the description from `alt` is displayed on the page,
  if the image cannot be loaded for any reason:
  bad connection, content blocking or broken resource link.
- [Read more](https://moz.com/learn/seo/alt-text)

```html
<!-- Not recommended -->
<img src="spreadsheet.png" />

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot" />
```

The subtitle file is added using the `<track>` element:

```html
<video preload="auto" width="480" height="360" poster="cute-kitten-video.jpg">
  <source type="video/mp4" src="cute-kitten-video.mp4" />
  <source type="video/webm" src="cute-kitten-video.webm" />
  <track kind="captions" src="video-captions.vtt" />
</video>
```

## 2. CSS

### 2.1. BEM

Use BEM notation to form class names.

BEM (Block, Element, Modifier) is a component-based approach to web development. It is based on the principle of dividing an interface into independent blocks. It allows you to easily and quickly develop interfaces of any complexity and reuse existing code, avoiding "Copy-Paste".

BEM originated in Yandex, but has spread far beyond its borders.

Briefly, BEM is based on the idea of dividing any interface into blocks. The inseparable parts of the blocks are elements. Both have modifiers.

```html
<ul class="menu">
  <li
    class="
    menu__item"
  ></li>
  <li
    class="
    menu__item
    menu__item_active"
  ></li>
</ul>
```

As an example, let's look at the site menu. It can be in the header and on the side of the site - so it is a block. It has mandatory parts: menu list items, title - these are its elements. If some menu element is active, it is given a modifier.
</details>
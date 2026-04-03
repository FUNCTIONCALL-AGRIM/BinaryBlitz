const questionsData = {
  // HTML
  html: {
    basic: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyper>"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which tag represents a paragraph?",
        options: ["<p>", "<para>", "<text>", "<paragraph>"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the correct doctype for HTML5?",
        options: [
          "<!DOCTYPE HTML5>",
          "<!DOCTYPE html>",
          "<HTML5>",
          "<doctype html5>",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which attribute provides alternative text for images?",
        options: ["title", "src", "alt", "caption"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "Which tag inserts a line break?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which element is used for numbered lists?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which element contains metadata about the document?",
        options: ["<meta>", "<header>", "<body>", "<info>"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<row>"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which attribute is used to add inline styles?",
        options: ["style", "class", "id", "css"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Which element is used for the main heading of a page?",
        options: ["<head>", "<title>", "<h1>", "<header>"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "Which element holds the visible content of the page?",
        options: ["<body>", "<head>", "<main>", "<section>"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you write an HTML comment?",
        options: [
          "<!-- comment -->",
          "// comment",
          "/* comment */",
          "<! comment !>",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which tag do you use to include a JavaScript file?",
        options: [
          "<script src='file.js'>",
          "<js src='file.js'>",
          "<include src='file.js'>",
          "<scriptfile src='file.js'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "Which tag is used to include CSS in an HTML document (external file)?",
        options: [
          "<stylesheet href='style.css'>",
          "<link rel='stylesheet' href='style.css'>",
          "<style src='style.css'>",
          "<css href='style.css'>",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "Which tag groups together form controls with a caption?",
        options: ["<fieldset>", "<group>", "<formgroup>", "<controls>"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which attribute sets the URL for an <a> tag?",
        options: ["href", "src", "link", "url"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which tag represents a list item?",
        options: ["<li>", "<item>", "<list-item>", "<entry>"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Which tag is used to display an image?",
        options: ["<img>", "<image>", "<picture>", "<photo>"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "Which attribute is used to give an element a unique identifier?",
        options: ["class", "id", "name", "key"],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "What does the <head> element contain?",
        options: [
          "Visible page content",
          "Metadata about the document",
          "Navigation links",
          "Footer information",
        ],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "Which input type creates a checkbox?",
        options: ["checkbox", "check", "radio", "toggle"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<header>"],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "Which element defines important text?",
        options: ["<important>", "<strong>", "<bold>", "<big>"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "Which element defines emphasized text?",
        options: ["<italic>", "<em>", "<emphasis>", "<i>"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Which tag creates a horizontal rule?",
        options: ["<hr>", "<line>", "<hline>", "<rule>"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which attribute specifies an image's source?",
        options: ["alt", "src", "href", "link"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Which element creates a dropdown list?",
        options: ["<input>", "<select>", "<dropdown>", "<list>"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Which tag defines a table cell?",
        options: ["<td>", "<tc>", "<cell>", "<tablecell>"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which attribute makes an input field required?",
        options: ["required", "mandatory", "must", "validate"],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        id: 1,
        question:
          "Which element is used for self-contained composition in a document?",
        options: ["<section>", "<article>", "<div>", "<aside>"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which input type shows a date picker in supporting browsers?",
        options: ["date", "datetime", "calendar", "time"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which attribute on <a> opens the link in a new tab?",
        options: [
          "target='_blank'",
          "rel='new'",
          "href='_blank'",
          "open='new'",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which element is used to play audio?",
        options: ["<sound>", "<audio>", "<mp3>", "<media>"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which tag should contain the page title?",
        options: ["<title>", "<h1>", "<header>", "<headtitle>"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What does the <canvas> element provide?",
        options: [
          "Scalable vector graphics",
          "Bitmap drawing surface",
          "Audio support",
          "Table layout",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "Which semantic element represents site navigation?",
        options: ["<nav>", "<menu>", "<navigation>", "<links>"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which attribute on <form> disables browser validation?",
        options: ["novalidate", "no-validate", "validate='false'", "novate"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which tag is used for captioning a table?",
        options: ["<caption>", "<legend>", "<title>", "<label>"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "Which element is used to group form controls with a caption?",
        options: ["<fieldset>", "<group>", "<controls>", "<formgroup>"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "Which attribute provides responsive image candidates on <img>?",
        options: ["srcset", "sizes", "src", "picture"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "Which element allows multiple sources for responsive images?",
        options: ["<picture>", "<imgset>", "<sources>", "<figure>"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "Which attribute indicates an input is required?",
        options: ["required", "must", "validate", "needed"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which attribute specifies an input's placeholder text?",
        options: ["label", "placeholder", "hint", "prompt"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Which attribute specifies the input's allowed file types?",
        options: ["accept", "type", "format", "files"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which element provides an embedded inline frame?",
        options: ["<embed>", "<iframe>", "<frame>", "<window>"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "Which attribute on <script> loads a module?",
        options: [
          "type='module'",
          "module='true'",
          "defer='module'",
          "async='module'",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which attribute defers script execution until parsing is done?",
        options: ["async", "defer", "later", "delay"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question:
          "Which attribute sets the character encoding for the document?",
        options: [
          "<meta charset='UTF-8'>",
          "<meta encoding='UTF-8'>",
          "<charset='UTF-8'>",
          "<meta type='UTF-8'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "Which attribute on a link can help with SEO and noreferrer/security when opening new tabs?",
        options: [
          "rel='noopener noreferrer'",
          "rel='nofollow'",
          "rel='external'",
          "rel='security'",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "Which element is used to define a list of navigation links in HTML5?",
        options: ["<nav>", "<ul>", "<list>", "<menu>"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "Which attribute is used to associate a <label> with an input?",
        options: ["for", "id", "name", "aria-label"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which global attribute allows storing custom data on an element?",
        options: [
          "data-* attributes",
          "aria-* attributes",
          "custom-*",
          "meta-*",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which element hides content visually but keeps it accessible to screen readers?",
        options: [
          "hidden",
          "aria-hidden",
          "visually-hidden/sr-only",
          "display:none",
        ],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "Which attribute marks boolean attributes in HTML?",
        options: [
          "value present",
          "attribute present without value",
          "attribute='true'",
          "bool='yes'",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question:
          "Which element is appropriate for marking up quoted blocks of text?",
        options: ["<q>", "<blockquote>", "<quote>", "<cite>"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question:
          "Which element provides a machine-readable citation for a work?",
        options: [
          "<cite>",
          "<reference>",
          "<meta name='citation'>",
          "<cite-ref>",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "Which attribute on <img> helps with responsive layout by providing image sizes?",
        options: ["sizes", "srcset", "resolution", "media"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which element can be used to mark up a caption for a <figure>?",
        options: ["<figcaption>", "<caption>", "<label>", "<alt>"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which element is used to declare a client-side template that is not rendered directly?",
        options: [
          "<template>",
          "<slot>",
          "<script type='template'>",
          "<fragment>",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question:
          "Which attribute on <form> defines where to send form-data on submission?",
        options: ["action", "method", "enctype", "target"],
        correctAnswer: 0,
      },
      {
        id: 32,
        question:
          "Which method attribute sends form-data as URL encoded key-value pairs?",
        options: ["POST", "GET", "PUT", "PATCH"],
        correctAnswer: 1,
      },
      {
        id: 33,
        question: "Which enctype is used for file uploads?",
        options: [
          "application/json",
          "multipart/form-data",
          "text/plain",
          "application/x-www-form-urlencoded",
        ],
        correctAnswer: 1,
      },
      {
        id: 34,
        question:
          "Which input type is optimized for email input on mobile keyboards?",
        options: ["text", "email", "email-address", "mail"],
        correctAnswer: 1,
      },
      {
        id: 35,
        question: "Which attribute on <a> provides relationship information?",
        options: ["rel", "reltype", "role", "aria-role"],
        correctAnswer: 0,
      },
      {
        id: 36,
        question: "Which element is used for marked-up code snippets inline?",
        options: ["<code>", "<pre>", "<samp>", "<kbd>"],
        correctAnswer: 0,
      },
      {
        id: 37,
        question:
          "Which element preserves whitespace and shows preformatted text?",
        options: ["<pre>", "<code>", "<samp>", "<plaintext>"],
        correctAnswer: 0,
      },
      {
        id: 38,
        question:
          "Which attribute on an input restricts acceptable values with a regular expression?",
        options: ["pattern", "format", "validate", "mask"],
        correctAnswer: 0,
      },
      {
        id: 39,
        question:
          "Which element provides a short list of options a user can pick from?",
        options: ["<datalist>", "<select>", "<optionlist>", "<choices>"],
        correctAnswer: 0,
      },
      {
        id: 40,
        question:
          "Which accessibility attribute indicates the role of an element for assistive tech?",
        options: ["aria-role", "role", "access", "aria-type"],
        correctAnswer: 1,
      },
      {
        id: 41,
        question:
          "Which element represents a thematic break between paragraph-level elements?",
        options: ["<break>", "<hr>", "<divider>", "<separator>"],
        correctAnswer: 1,
      },
      {
        id: 42,
        question:
          "Which attribute defines the relationship between a document and an external resource?",
        options: ["href", "src", "rel", "type"],
        correctAnswer: 2,
      },
      {
        id: 43,
        question:
          "Which element represents a scalar measurement within a known range?",
        options: ["<meter>", "<progress>", "<range>", "<measure>"],
        correctAnswer: 0,
      },
      {
        id: 44,
        question: "Which element defines a header for a document or section?",
        options: ["<head>", "<header>", "<heading>", "<top>"],
        correctAnswer: 1,
      },
      {
        id: 45,
        question: "Which element defines a footer for a document or section?",
        options: ["<foot>", "<footer>", "<bottom>", "<end>"],
        correctAnswer: 1,
      },
      {
        id: 46,
        question: "Which input type creates a color picker?",
        options: ["color", "picker", "colortype", "palette"],
        correctAnswer: 0,
      },
      {
        id: 47,
        question:
          "Which element represents a section of a document, like a chapter?",
        options: ["<div>", "<section>", "<article>", "<chapter>"],
        correctAnswer: 1,
      },
      {
        id: 48,
        question:
          "Which element represents content aside from the main content?",
        options: ["<aside>", "<sidebar>", "<extra>", "<secondary>"],
        correctAnswer: 0,
      },
      {
        id: 49,
        question: "Which element defines a dialog box or window?",
        options: ["<dialog>", "<modal>", "<popup>", "<window>"],
        correctAnswer: 0,
      },
      {
        id: 50,
        question: "Which element defines marked/highlighted text?",
        options: ["<highlight>", "<mark>", "<strong>", "<em>"],
        correctAnswer: 1,
      },
      {
        id: 51,
        question: "Which attribute specifies that an input field is read-only?",
        options: ["disabled", "readonly", "static", "fixed"],
        correctAnswer: 1,
      },
      {
        id: 52,
        question: "Which attribute specifies that an input field is disabled?",
        options: ["disabled", "readonly", "inactive", "off"],
        correctAnswer: 0,
      },
      {
        id: 53,
        question: "Which element defines a multi-line text input control?",
        options: [
          "<textarea>",
          "<textbox>",
          "<input type='textarea'>",
          "<multiline>",
        ],
        correctAnswer: 0,
      },
      {
        id: 54,
        question: "Which element defines a list of terms and descriptions?",
        options: ["<dl>", "<dt>", "<dd>", "<list>"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question: "Which element defines a term in a description list?",
        options: ["<dl>", "<dt>", "<dd>", "<term>"],
        correctAnswer: 1,
      },
      {
        id: 56,
        question: "Which element defines a description in a description list?",
        options: ["<dl>", "<dt>", "<dd>", "<desc>"],
        correctAnswer: 2,
      },
      {
        id: 57,
        question:
          "Which attribute specifies the maximum number of characters allowed in an input?",
        options: ["maxlength", "size", "limit", "max"],
        correctAnswer: 0,
      },
      {
        id: 58,
        question: "Which attribute specifies the width of an input field?",
        options: ["width", "size", "length", "cols"],
        correctAnswer: 1,
      },
      {
        id: 59,
        question: "Which element defines a thematic grouping of content?",
        options: ["<div>", "<section>", "<group>", "<block>"],
        correctAnswer: 1,
      },
      {
        id: 60,
        question:
          "Which element defines a section that is quoted from another source?",
        options: ["<quote>", "<blockquote>", "<cite>", "<q>"],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        id: 1,
        question:
          "Which API lets pages store small amounts of key/value data in the browser persistently?",
        options: ["SessionStorage", "LocalStorage", "IndexedDB", "Cookies"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which HTML5 API supports drag-and-drop operations?",
        options: [
          "Drag and Drop API",
          "DnD API",
          "DragDrop",
          "All of the above",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which element supports srcset for responsive images?",
        options: ["<img>", "<picture>", "<figure>", "Both <img> and <picture>"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question:
          "Which attribute on <link> is used to apply stylesheets conditionally by media?",
        options: ["media", "conditional", "type", "rel"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which interface provides programmatic control of audio/video elements?",
        options: [
          "MediaController",
          "HTMLMediaElement",
          "MediaStream",
          "AudioAPI",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question:
          "Which element provides accessible labeling via the 'for' attribute?",
        options: ["<label>", "<legend>", "<caption>", "<title>"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "Which legacy feature supported offline web apps but is deprecated?",
        options: ["AppCache", "Service Workers", "WebSQL", "IndexedDB"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which API provides geolocation information to web pages?",
        options: [
          "Navigator.location",
          "Navigator.geolocation",
          "GeoAPI",
          "LocationService",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question:
          "Which syntax lets you store custom data attributes on elements?",
        options: [
          "data-* attributes",
          "custom-* attributes",
          "meta-*",
          "dataattr-*",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which element is used to measure progress of a task?",
        options: ["<meter>", "<progress>", "<bar>", "<status>"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question:
          "Which attribute on <script> helps with subresource integrity checks?",
        options: ["integrity", "crossorigin", "sha256", "sri"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "Which rel value helps browsers establish early connections to origins?",
        options: ["preconnect", "dns-prefetch", "prefetch", "prerender"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "Which link rel helps preload critical resources like fonts or modules?",
        options: ["preload", "prefetch", "preconnect", "prerender"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which attribute on <link> or <script> indicates CORS behavior for the resource?",
        options: ["crossorigin", "cors", "cross", "mode"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "Which attribute on <img> supports different image density descriptors in srcset?",
        options: [
          "1x, 2x density descriptors",
          "sizes",
          "density",
          "pixel-ratio",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "Which element helps implement accessible expandable sections with a summary header?",
        options: [
          "<details> + <summary>",
          "<expander>",
          "<accordion>",
          "<section>",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "Which attribute can be used to suggest preferred language of content?",
        options: ["lang", "locale", "xml:lang", "language"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which element provides captions/subtitles for media elements?",
        options: [
          "<track> element",
          "captions attribute",
          "subtitles attribute",
          "timeelement",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "Which element defines a shadow DOM insertion point for Web Components?",
        options: ["<slot>", "<shadow>", "<content>", "<slotpoint>"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which meta tag helps control viewport on mobile devices?",
        options: [
          "<meta name='viewport'>",
          "<meta viewport>",
          "<meta device='mobile'>",
          "<meta name='mobile'>",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "Which attribute on <a> mitigates reverse tabnabbing when opening new windows?",
        options: [
          "rel='noopener'",
          "rel='nofollow'",
          "target='_blank'",
          "rel='opener'",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which element allows embedding SVG content inline in HTML?",
        options: ["<svg>", "<vector>", "<canvas>", "<image>"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which feature allows authors to hint to the browser to render a page in the background for faster navigation?",
        options: ["prerender", "prefetch", "preconnect", "preload"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which attribute on <form> allows specifying a submit target?",
        options: ["target", "action", "method", "enctype"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which element and attribute pair provides a semantic citation reference?",
        options: ["<cite>", "<ref>", "<reference>", "<meta name='citation'>"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which HTML mechanism helps to lazy-load images in supporting browsers?",
        options: [
          "loading='lazy' on <img>",
          "defer='lazy' on <img>",
          "lazyload attribute",
          "data-lazy",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which attribute on media can require user gesture to play by default?",
        options: ["muted", "autoplay", "controls", "playsinline"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question:
          "Which element is used to group a set of <option> elements together?",
        options: ["<optgroup>", "<group>", "<options>", "<fieldset>"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which attribute on <input type='number'> sets the smallest valid value?",
        options: ["min", "step", "value", "lowest"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which attribute prevents an element from receiving focus?",
        options: [
          "tabindex='-1'",
          "tabindex='0'",
          "focusable='false'",
          "nofocus",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question:
          "Which attribute provides a fallback download filename for <a download>?",
        options: [
          "download='filename'",
          "filename='name'",
          "file='name'",
          "name='file'",
        ],
        correctAnswer: 0,
      },
      {
        id: 32,
        question:
          "Which attribute indicates that a form control is editable by the user?",
        options: [
          "contenteditable='true'",
          "editable='true'",
          "usereditable='true'",
          "allowedit='true'",
        ],
        correctAnswer: 0,
      },
      {
        id: 33,
        question:
          "Which element provides semantic grouping of navigation links for accessibility?",
        options: ["<nav>", "<menu>", "<section>", "<aside>"],
        correctAnswer: 0,
      },
      {
        id: 34,
        question:
          "Which attribute instructs browsers to bypass CORS preflight for fonts/connections?",
        options: ["crossorigin", "cors", "integrity", "preconnect"],
        correctAnswer: 0,
      },
      {
        id: 35,
        question:
          "Which attribute enables a <form> control to be associated with a form not containing it?",
        options: [
          "form='formId'",
          "formFor='formId'",
          "associate='formId'",
          "belongs='formId'",
        ],
        correctAnswer: 0,
      },
      {
        id: 36,
        question:
          "Which element provides fallback content for older browsers when embedding objects?",
        options: [
          "<object> with fallback content",
          "<embed> fallback",
          "<object-fallback>",
          "<legacy>",
        ],
        correctAnswer: 0,
      },
      {
        id: 37,
        question:
          "Which attribute on <button> sets the type to submit a form by default?",
        options: [
          "type='submit'",
          "action='submit'",
          "role='submit'",
          "method='submit'",
        ],
        correctAnswer: 0,
      },
      {
        id: 38,
        question:
          "Which attribute on <link> tells the browser that the stylesheet should be used for printing only?",
        options: [
          "media='print'",
          "rel='print'",
          "type='print'",
          "print='true'",
        ],
        correctAnswer: 0,
      },
      {
        id: 39,
        question:
          "Which element is best used for marking up the main content of a page for accessibility?",
        options: ["<main>", "<content>", "<article>", "<section>"],
        correctAnswer: 0,
      },
      {
        id: 40,
        question:
          "Which element allows authors to include JavaScript templates that are inert until used?",
        options: [
          "<template>",
          "<script type='text/template'>",
          "<script type='template'>",
          "<templateScript>",
        ],
        correctAnswer: 0,
      },
      {
        id: 41,
        question:
          "Which attribute on <audio> or <video> allows showing native controls?",
        options: ["controls", "showcontrols", "native", "ui"],
        correctAnswer: 0,
      },
      {
        id: 42,
        question:
          "Which attribute on <img> allows specifying an image placeholder before it loads?",
        options: [
          "loading='lazy'",
          "placeholder='blur'",
          "fetchpriority",
          "srcplaceholder",
        ],
        correctAnswer: 0,
      },
      {
        id: 43,
        question:
          "Which element is used to declare page headers or footers within an article or section?",
        options: [
          "<header> and <footer>",
          "<head> and <tail>",
          "<top> and <bottom>",
          "<hgroup> and <fgroup>",
        ],
        correctAnswer: 0,
      },
      {
        id: 44,
        question:
          "Which element can be used to mark an aside or tangential content?",
        options: ["<aside>", "<side>", "<float>", "<complement>"],
        correctAnswer: 0,
      },
      {
        id: 45,
        question:
          "Which HTML attribute is commonly used to enable inline accessibility labeling for ARIA-hidden elements?",
        options: ["aria-label", "title", "alt", "label"],
        correctAnswer: 0,
      },
      {
        id: 46,
        question:
          "Which element is used to create an ordered list where items are automatically generated numbers?",
        options: ["<ol>", "<ul>", "<list>", "<ordered>"],
        correctAnswer: 0,
      },
      {
        id: 47,
        question:
          "Which attribute on <script> optionally indicates that the script should be evaluated as a module?",
        options: [
          "type='module'",
          "module='true'",
          "scriptmodule='yes'",
          "esmodule='true'",
        ],
        correctAnswer: 0,
      },
      {
        id: 48,
        question:
          "Which attribute is used in a link tag to hint the browser to dns-prefetch an origin?",
        options: [
          "rel='dns-prefetch'",
          "rel='preconnect'",
          "rel='prefetch'",
          "rel='preload'",
        ],
        correctAnswer: 0,
      },
      {
        id: 49,
        question: "Which element is used to define a table header cell?",
        options: ["<th>", "<td>", "<thead>", "<header>"],
        correctAnswer: 0,
      },
      {
        id: 50,
        question:
          "Which global attribute allows toggling visibility for printing and screen readers?",
        options: ["hidden", "aria-hidden", "data-hidden", "visually-hidden"],
        correctAnswer: 3,
      },
      {
        id: 51,
        question:
          "Which attribute on a <link> or <script> instructs browsers to preserve integrity with SRI hashes?",
        options: ["integrity", "crossorigin", "referrerpolicy", "nonce"],
        correctAnswer: 0,
      },
      {
        id: 52,
        question:
          "Which approach reduces security risks with inline event handlers?",
        options: [
          "Use addEventListener",
          "onclick-secure",
          "data-event",
          "event-handler",
        ],
        correctAnswer: 0,
      },
      {
        id: 53,
        question:
          "Which element provides keyboard input representation for user actions?",
        options: ["<kbd>", "<key>", "<input type='key'>", "<keyboard>"],
        correctAnswer: 0,
      },
      {
        id: 54,
        question:
          "Which element represents output from a calculation or user action?",
        options: ["<output>", "<result>", "<calc>", "<value>"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question:
          "Which attribute on <button> or <input> can make a form control disabled?",
        options: ["disabled", "readonly", "locked", "inactive"],
        correctAnswer: 0,
      },
      {
        id: 56,
        question:
          "Which attribute helps prevent automatic translation of content by the browser?",
        options: [
          "translate='no'",
          "notranslate='true'",
          "translate='false'",
          "data-translate='no'",
        ],
        correctAnswer: 0,
      },
      {
        id: 57,
        question:
          "Which attribute is used to show a short label or keyword for a form control?",
        options: ["placeholder", "label", "hint", "caption"],
        correctAnswer: 0,
      },
      {
        id: 58,
        question:
          "Which element is intended for marking up keyboard shortcuts?",
        options: ["<samp>", "<kbd>", "<code>", "<var>"],
        correctAnswer: 1,
      },
      {
        id: 59,
        question:
          "Which link rel value hints the browser to fetch a resource for future navigation?",
        options: ["prefetch", "preload", "preconnect", "prerender"],
        correctAnswer: 0,
      },
      {
        id: 60,
        question:
          "Which HTML feature allows you to include microdata vocabularies for semantics?",
        options: ["Microdata", "RDFa", "JSON-LD only", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 61,
        question:
          "Which element is used to define a group of related options in a dropdown?",
        options: ["<optgroup>", "<optiongroup>", "<selectgroup>", "<fieldset>"],
        correctAnswer: 0,
      },
      {
        id: 62,
        question: "Which attribute specifies the visible width of a text area?",
        options: ["cols", "rows", "width", "size"],
        correctAnswer: 0,
      },
      {
        id: 63,
        question:
          "Which attribute specifies the visible number of lines in a text area?",
        options: ["cols", "rows", "height", "lines"],
        correctAnswer: 1,
      },
      {
        id: 64,
        question:
          "Which element is used to represent the result of a calculation?",
        options: ["<output>", "<result>", "<calculation>", "<answer>"],
        correctAnswer: 0,
      },
      {
        id: 65,
        question:
          "Which attribute specifies that an element is not yet, or is no longer, relevant?",
        options: ["hidden", "disabled", "inert", "obsolete"],
        correctAnswer: 0,
      },
      {
        id: 66,
        question:
          "Which element defines a scalar measurement within a known range or fractional value?",
        options: ["<meter>", "<progress>", "<range>", "<scale>"],
        correctAnswer: 0,
      },
      {
        id: 67,
        question: "Which element represents the completion progress of a task?",
        options: ["<meter>", "<progress>", "<complete>", "<status>"],
        correctAnswer: 1,
      },
      {
        id: 68,
        question:
          "Which element is used to embed external applications or interactive content?",
        options: ["<embed>", "<object>", "<iframe>", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 69,
        question:
          "Which attribute specifies the media type of the embedded content?",
        options: ["type", "media", "format", "mime"],
        correctAnswer: 0,
      },
      {
        id: 70,
        question:
          "Which element is used to define a section that is quoted from another source?",
        options: ["<quote>", "<blockquote>", "<q>", "<cite>"],
        correctAnswer: 1,
      },
      {
        id: 71,
        question: "Which element defines a short inline quotation?",
        options: ["<quote>", "<blockquote>", "<q>", "<cite>"],
        correctAnswer: 2,
      },
      {
        id: 72,
        question:
          "Which element is used to define a title or caption for a <figure> element?",
        options: ["<figcaption>", "<caption>", "<title>", "<legend>"],
        correctAnswer: 0,
      },
      {
        id: 73,
        question: "Which element is used to group a set of <figure> elements?",
        options: [
          "<figuregroup>",
          "<figures>",
          "<div>",
          "There is no specific element",
        ],
        correctAnswer: 3,
      },
      {
        id: 74,
        question:
          "Which element is used to define a header for a <table> element?",
        options: ["<thead>", "<tfoot>", "<tbody>", "<header>"],
        correctAnswer: 0,
      },
      {
        id: 75,
        question:
          "Which element is used to group the body content in a <table>?",
        options: ["<thead>", "<tfoot>", "<tbody>", "<body>"],
        correctAnswer: 2,
      },
      {
        id: 76,
        question:
          "Which element is used to group the footer content in a <table>?",
        options: ["<thead>", "<tfoot>", "<tbody>", "<footer>"],
        correctAnswer: 1,
      },
      {
        id: 77,
        question:
          "Which attribute specifies that a table cell should span multiple columns?",
        options: ["colspan", "rowspan", "span", "merge"],
        correctAnswer: 0,
      },
      {
        id: 78,
        question:
          "Which attribute specifies that a table cell should span multiple rows?",
        options: ["colspan", "rowspan", "span", "merge"],
        correctAnswer: 1,
      },
      {
        id: 79,
        question:
          "Which element is used to specify a list of pre-defined options for an <input> element?",
        options: ["<datalist>", "<select>", "<option>", "<list>"],
        correctAnswer: 0,
      },
      {
        id: 80,
        question:
          "Which attribute links an <input> element to a <datalist> element?",
        options: ["list", "datalist", "options", "suggestions"],
        correctAnswer: 0,
      },
      {
        id: 81,
        question:
          "Which input type allows the user to select a color from a color picker?",
        options: ["color", "palette", "picker", "selectcolor"],
        correctAnswer: 0,
      },
      {
        id: 82,
        question:
          "Which input type allows the user to enter a date and time with time zone?",
        options: ["datetime", "datetime-local", "date", "time"],
        correctAnswer: 0,
      },
      {
        id: 83,
        question:
          "Which input type allows the user to enter a date and time without time zone?",
        options: ["datetime", "datetime-local", "date", "time"],
        correctAnswer: 1,
      },
      {
        id: 84,
        question: "Which input type allows the user to enter a month and year?",
        options: ["month", "date", "year", "monthyear"],
        correctAnswer: 0,
      },
      {
        id: 85,
        question:
          "Which input type allows the user to enter a week number and year?",
        options: ["week", "date", "weeknumber", "weekyear"],
        correctAnswer: 0,
      },
      {
        id: 86,
        question: "Which input type allows the user to enter a time value?",
        options: ["time", "clock", "hour", "datetime"],
        correctAnswer: 0,
      },
      {
        id: 87,
        question:
          "Which attribute specifies the step interval for an input field?",
        options: ["step", "interval", "increment", "skip"],
        correctAnswer: 0,
      },
      {
        id: 88,
        question:
          "Which attribute specifies the maximum value for an input field?",
        options: ["max", "maximum", "top", "highest"],
        correctAnswer: 0,
      },
      {
        id: 89,
        question:
          "Which attribute specifies the minimum value for an input field?",
        options: ["min", "minimum", "bottom", "lowest"],
        correctAnswer: 0,
      },
      {
        id: 90,
        question:
          "Which attribute specifies a regular expression that an input field's value is checked against?",
        options: ["pattern", "regex", "validate", "match"],
        correctAnswer: 0,
      },
      {
        id: 91,
        question:
          "Which attribute specifies that an input field must be filled out before submitting the form?",
        options: ["required", "must", "mandatory", "necessary"],
        correctAnswer: 0,
      },
      {
        id: 92,
        question:
          "Which attribute specifies the maximum number of characters allowed in an <input> element?",
        options: ["maxlength", "size", "length", "max"],
        correctAnswer: 0,
      },
      {
        id: 93,
        question: "Which attribute specifies the width of an <input> element?",
        options: ["width", "size", "length", "cols"],
        correctAnswer: 1,
      },
      {
        id: 94,
        question:
          "Which attribute specifies the initial value for an input field?",
        options: ["value", "initial", "default", "placeholder"],
        correctAnswer: 0,
      },
      {
        id: 95,
        question:
          "Which attribute specifies a short hint that describes the expected value of an input field?",
        options: ["placeholder", "hint", "tip", "description"],
        correctAnswer: 0,
      },
      {
        id: 96,
        question:
          "Which attribute specifies that an input field should be automatically focused when the page loads?",
        options: ["autofocus", "focus", "autoselect", "defaultfocus"],
        correctAnswer: 0,
      },
      {
        id: 97,
        question:
          "Which attribute specifies that an input field should be automatically completed by the browser?",
        options: ["autocomplete", "autofill", "complete", "suggest"],
        correctAnswer: 0,
      },
      {
        id: 98,
        question: "Which attribute specifies that an input field is read-only?",
        options: ["readonly", "disabled", "static", "fixed"],
        correctAnswer: 0,
      },
      {
        id: 99,
        question: "Which attribute specifies that an input field is disabled?",
        options: ["disabled", "readonly", "inactive", "off"],
        correctAnswer: 0,
      },
      {
        id: 100,
        question: "Which element is used to create a clickable button?",
        options: [
          "<button>",
          "<input type='button'>",
          "<click>",
          "Both 1 and 2",
        ],
        correctAnswer: 3,
      },
    ],
  },

  // CSS
  css: {
    basic: [
      {
        id: 1,
        question: "Which property changes text color?",
        options: ["font-color", "text-color", "color", "fg-color"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "How do you apply a class selector in CSS?",
        options: [".className", "#className", "className", "*className"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which property sets the background color?",
        options: ["bgcolor", "background", "background-color", "color"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Which property controls spacing inside an element?",
        options: ["margin", "padding", "gap", "spacing"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "How to make text bold using CSS?",
        options: [
          "font-weight: bold;",
          "text-style: bold;",
          "font: bold;",
          "font-style: bold;",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which selector targets an element by id?",
        options: ["#id", ".id", "id", "*id"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which property controls the font size?",
        options: ["text-size", "font-size", "size", "type-size"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which display value places elements inline?",
        options: ["block", "inline", "flex", "grid"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question:
          "Which property controls element visibility but keeps layout?",
        options: [
          "display: none",
          "visibility: hidden",
          "opacity: 0",
          "hidden: true",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "How do you write a comment in CSS?",
        options: [
          "// comment",
          "/* comment */",
          "<!-- comment -->",
          "# comment",
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question:
          "Which box-sizing value makes width include padding and border?",
        options: ["content-box", "border-box", "padding-box", "box-total"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Which property defines the font family?",
        options: ["font-family", "font-type", "font", "typeface"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "Which property aligns inline content horizontally inside an element?",
        options: [
          "vertical-align",
          "text-align",
          "align-items",
          "justify-content",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which property controls the space between lines of text?",
        options: ["line-spacing", "leading", "line-height", "text-height"],
        correctAnswer: 2,
      },
      {
        id: 15,
        question:
          "Which property changes the mouse cursor when hovering over an element?",
        options: ["pointer", "cursor", "mouse", "hover-cursor"],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "Which unit is absolute and not relative to font-size?",
        options: ["em", "rem", "px", "%"],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Which at-rule is used to define a custom font-face?",
        options: ["@font", "@font-face", "@import-font", "@face"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question:
          "Which property is the shorthand for setting all four paddings at once?",
        options: ["padding-all", "padding", "paddings", "padding-shorthand"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which property controls an element's transparency?",
        options: ["opacity", "transparent", "visibility", "alpha"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which property sets the width of an element?",
        options: ["width", "size", "w", "max-width"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which property sets the height of an element?",
        options: ["height", "size", "h", "max-height"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which property adds space outside an element?",
        options: ["padding", "margin", "spacing", "gap"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Which property changes the font style to italic?",
        options: [
          "font-style: italic",
          "font-weight: italic",
          "text-style: italic",
          "italic: true",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which property removes the underline from links?",
        options: [
          "text-decoration: none",
          "underline: none",
          "link-decoration: none",
          "decoration: none",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which property adds a border to an element?",
        options: ["border", "border-style", "border-width", "border-color"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which property changes the background image of an element?",
        options: ["background-image", "bg-image", "image", "background"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which value makes an element not display at all?",
        options: [
          "display: none",
          "visibility: hidden",
          "opacity: 0",
          "hidden: true",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which property changes the text color to red?",
        options: [
          "color: red",
          "text-color: red",
          "font-color: red",
          "color: #ff0000",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which property centers text horizontally?",
        options: [
          "text-align: center",
          "align: center",
          "center: true",
          "horizontal-align: center",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which property adds space between letters?",
        options: [
          "letter-spacing",
          "word-spacing",
          "text-spacing",
          "character-spacing",
        ],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        id: 1,
        question: "Which property sets the layout to a two-dimensional grid?",
        options: [
          "display: grid",
          "display: flex",
          "display: block",
          "display: table",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which unit is relative to the root font-size?",
        options: ["em", "rem", "px", "%"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "How to center a block horizontally with a fixed width?",
        options: [
          "margin: auto;",
          "text-align: center;",
          "align: center;",
          "justify: center;",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which pseudo-class targets links when hovered?",
        options: [":active", ":visited", ":hover", ":focus"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Which property creates a flexible box layout?",
        options: [
          "display: flex",
          "display: block",
          "display: grid",
          "display: inline",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which property sets spacing between flex items?",
        options: ["gap", "space", "item-gap", "margin"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which property controls order of flex items?",
        options: ["z-index", "order", "flex-order", "position"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which at-rule imports fonts or other style sheets?",
        options: ["@font-face", "@import", "@media", "@charset"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Which property adds rounded corners?",
        options: [
          "border-radius",
          "corner-radius",
          "radius",
          "border-curvature",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which property controls box shadow?",
        options: ["box-shadow", "shadow", "text-shadow", "box-glow"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Which pseudo-element inserts content before an element?",
        options: [":before", "::before", ":first", "::first"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Which function performs calculations in CSS values?",
        options: ["calc()", "compute()", "math()", "value()"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "Which property controls stacking order of positioned elements?",
        options: ["z-index", "stack-order", "order", "layer"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which property creates responsive image behavior in layout?",
        options: [
          "object-position",
          "object-fit",
          "background-size",
          "contain",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which property sets an element's position relative to normal flow?",
        options: ["position", "display", "float", "place"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "Which position value removes the element from normal flow and positions relative to viewport?",
        options: ["relative", "absolute", "fixed", "static"],
        correctAnswer: 2,
      },
      {
        id: 17,
        question: "Which property defines how a background image is repeated?",
        options: [
          "background-repeat",
          "background-tile",
          "repeat",
          "bg-repeat",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which property controls element overflow behavior?",
        options: ["overflow", "clip", "flow", "hide"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "Which form of selector targets children only one level deep?",
        options: [
          "> (child selector)",
          "+ (adjacent)",
          "~ (sibling)",
          "space (descendent)",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which combinator selects the next sibling element?",
        options: [">", "+", "~", " "],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Which declaration defines multiple background layers?",
        options: [
          "background-image: url(a), url(b);",
          "background-multi: ...",
          "background-layers: ...",
          "background-list: ...",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which property controls text overflow with ellipsis?",
        options: [
          "text-ellipsis",
          "text-overflow: ellipsis",
          "overflow-text",
          "ellipsis",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Which at-rule applies styles when a media condition is met?",
        options: ["@media", "@supports", "@responsive", "@match"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which property allows transitions between property values?",
        options: ["transition", "animate", "transform", "motion"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which property defines a transform-origin point?",
        options: ["transform-origin", "origin", "pivot", "transform-center"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which value for display creates an inline-level flex container?",
        options: [
          "display: flex",
          "display: inline-flex",
          "display: inline-block",
          "display: grid",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "Which property sets the minimum width of an element?",
        options: ["min-width", "minsize", "width-min", "min-size"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which method creates equal-height columns using grid?",
        options: [
          "grid-auto-rows",
          "align-items",
          "grid-template-rows",
          "row-gap",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which function repeats track definitions in grid layout?",
        options: ["repeat()", "loop()", "times()", "repeat-track()"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which property controls placement of a grid item across columns/rows?",
        options: [
          "grid-column / grid-row",
          "column-start / row-start",
          "place-grid",
          "grid-area-only",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question: "Which property establishes a new stacking context?",
        options: [
          "opacity less than 1",
          "transform: translateZ(0)",
          "filter property",
          "all of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "Which property creates a CSS variable?",
        options: [
          "--my-var: 10px;",
          "var(--my-var)",
          "set(--my-var)",
          "css-var(--my-var)",
        ],
        correctAnswer: 0,
      },
      {
        id: 33,
        question: "Which function reads a CSS custom property value?",
        options: [
          "var(--name)",
          "get(--name)",
          "cssvar(--name)",
          "prop(--name)",
        ],
        correctAnswer: 0,
      },
      {
        id: 34,
        question:
          "Which property controls the gap between grid rows and columns?",
        options: ["gap", "grid-gap", "gutter", "spacing"],
        correctAnswer: 0,
      },
      {
        id: 35,
        question: "Which CSS unit is relative to viewport width?",
        options: ["vh", "vw", "vmin", "vmax"],
        correctAnswer: 1,
      },
      {
        id: 36,
        question:
          "Which property prevents an element from collapsing margins with its children?",
        options: [
          "overflow: auto",
          "display: block",
          "clear: both",
          "contain: layout",
        ],
        correctAnswer: 0,
      },
      {
        id: 37,
        question: "Which property sets pointer events behavior on an element?",
        options: [
          "pointer-events",
          "mouse-events",
          "touch-action",
          "event-handling",
        ],
        correctAnswer: 0,
      },
      {
        id: 38,
        question:
          "Which property controls whether content can be selected by the user?",
        options: ["user-select", "selectable", "allow-select", "text-select"],
        correctAnswer: 0,
      },
      {
        id: 39,
        question: "Which shorthand sets font properties in one declaration?",
        options: ["font", "font-all", "font-shorthand", "type"],
        correctAnswer: 0,
      },
      {
        id: 40,
        question: "Which pseudo-class matches an element when it has focus?",
        options: [":active", ":focus", ":focus-visible", ":hover"],
        correctAnswer: 1,
      },
      {
        id: 41,
        question: "Which property creates a linear gradient background?",
        options: [
          "background: linear-gradient()",
          "gradient: linear",
          "linear-gradient",
          "bg-gradient",
        ],
        correctAnswer: 0,
      },
      {
        id: 42,
        question:
          "Which property changes the transparency of an element's background?",
        options: [
          "background-opacity",
          "opacity",
          "background-color with rgba",
          "transparency",
        ],
        correctAnswer: 2,
      },
      {
        id: 43,
        question: "Which property aligns flex items along the cross axis?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "flex-align",
        ],
        correctAnswer: 0,
      },
      {
        id: 44,
        question:
          "Which property distributes space between flex items along the main axis?",
        options: [
          "justify-content",
          "align-items",
          "flex-justify",
          "space-between",
        ],
        correctAnswer: 0,
      },
      {
        id: 45,
        question: "Which value makes a flex item grow to fill available space?",
        options: ["flex-grow: 1", "flex: 1", "grow: 1", "flex-shrink: 1"],
        correctAnswer: 0,
      },
      {
        id: 46,
        question:
          "Which property controls whether flex items wrap onto multiple lines?",
        options: ["flex-wrap", "wrap", "flex-flow", "flex-direction"],
        correctAnswer: 0,
      },
      {
        id: 47,
        question:
          "Which property is a shorthand for flex-grow, flex-shrink, and flex-basis?",
        options: ["flex", "flex-property", "flex-shorthand", "flex-all"],
        correctAnswer: 0,
      },
      {
        id: 48,
        question: "Which property sets the direction of flex items?",
        options: [
          "flex-direction",
          "flex-flow",
          "direction",
          "flex-orientation",
        ],
        correctAnswer: 0,
      },
      {
        id: 49,
        question:
          "Which property is a shorthand for flex-direction and flex-wrap?",
        options: ["flex-flow", "flex-wrap", "flex-direction", "flex"],
        correctAnswer: 0,
      },
      {
        id: 50,
        question:
          "Which property aligns a flex container's lines within when there is extra space in the cross-axis?",
        options: [
          "align-content",
          "align-items",
          "justify-content",
          "flex-align",
        ],
        correctAnswer: 0,
      },
      {
        id: 51,
        question:
          "Which property sets the initial size of a flex item before remaining space is distributed?",
        options: ["flex-basis", "flex-grow", "flex-shrink", "flex-size"],
        correctAnswer: 0,
      },
      {
        id: 52,
        question:
          "Which property controls how flex items shrink when there is not enough space?",
        options: ["flex-shrink", "flex-grow", "shrink", "flex-basis"],
        correctAnswer: 0,
      },
      {
        id: 53,
        question: "Which property sets the color of the border?",
        options: ["border-color", "border-style", "border-width", "border"],
        correctAnswer: 0,
      },
      {
        id: 54,
        question: "Which property sets the style of the border?",
        options: ["border-style", "border-color", "border-width", "border"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question: "Which property sets the width of the border?",
        options: ["border-width", "border-style", "border-color", "border"],
        correctAnswer: 0,
      },
      {
        id: 56,
        question:
          "Which property is a shorthand for border-width, border-style, and border-color?",
        options: [
          "border",
          "border-shorthand",
          "border-all",
          "border-property",
        ],
        correctAnswer: 0,
      },
      {
        id: 57,
        question:
          "Which property sets the border radius for the top-left corner?",
        options: [
          "border-top-left-radius",
          "border-radius-top-left",
          "border-left-top-radius",
          "top-left-border-radius",
        ],
        correctAnswer: 0,
      },
      {
        id: 58,
        question:
          "Which property sets the border radius for the top-right corner?",
        options: [
          "border-top-right-radius",
          "border-radius-top-right",
          "border-right-top-radius",
          "top-right-border-radius",
        ],
        correctAnswer: 0,
      },
      {
        id: 59,
        question:
          "Which property sets the border radius for the bottom-left corner?",
        options: [
          "border-bottom-left-radius",
          "border-radius-bottom-left",
          "border-left-bottom-radius",
          "bottom-left-border-radius",
        ],
        correctAnswer: 0,
      },
      {
        id: 60,
        question:
          "Which property sets the border radius for the bottom-right corner?",
        options: [
          "border-bottom-right-radius",
          "border-radius-bottom-right",
          "border-right-bottom-radius",
          "bottom-right-border-radius",
        ],
        correctAnswer: 0,
      },
    ],
    advanced: [
      {
        id: 1,
        question: "Which at-rule applies styles based on viewport size?",
        options: ["@responsive", "@viewport", "@media", "@screen"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Which layout method is best for complex 2D designs?",
        options: ["flexbox", "grid", "float", "table"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which function creates a linear gradient?",
        options: [
          "gradient()",
          "linear-gradient()",
          "linear()",
          "grad-linear()",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which property allows stacking context control?",
        options: ["z-index", "stack", "order", "layer"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which pseudo-element inserts content after an element's content?",
        options: [":after", "::after", ":last", "::last"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which feature enables custom properties?",
        options: [
          "--var: value;",
          "var(--x)",
          "Both defining and using require different syntax",
          "CSS doesn't support variables",
        ],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Which function is used to reference a CSS custom property?",
        options: ["var(--name)", "get(--name)", "css(--name)", "prop(--name)"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "Which property transforms an element without affecting flow?",
        options: ["transform", "position", "translate", "move"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which property creates a clipping region?",
        options: ["clip-path", "mask", "overflow", "clip"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which display value creates a block-level flex container?",
        options: [
          "display: flex",
          "display: block-flex",
          "display: inline-flex",
          "display: grid",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "Which at-rule helps feature-detect support for a CSS property/value?",
        options: ["@supports", "@feature", "@detect", "@if"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which function clamps a value between a range?",
        options: ["clamp()", "between()", "limit()", "range()"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "Which property indicates the initial preferred size of a flex item?",
        options: ["flex-basis", "flex-grow", "flex-shrink", "flex"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which property helps reduce repaint cost by hinting the browser about likely changes?",
        options: ["will-change", "optimize", "performance", "gpu-hint"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "Which property sets blending mode between element and background?",
        options: [
          "mix-blend-mode",
          "blend",
          "background-blend-mode",
          "blend-mode",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "Which new unit represents a fragment of the available space in grids?",
        options: ["fr", "fx", "portion", "share"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which CSS API allows painting custom images via JavaScript?",
        options: [
          "CSS Paint API",
          "CSS Houdini Paint",
          "Canvas API",
          "CSS Draw API",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which property creates containment for layout, paint, and size to improve performance?",
        options: ["contain", "isolation", "clip", "overflow"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "Which value for grid-template-columns creates equal flexible tracks?",
        options: ["repeat(auto-fit, minmax(...))", "1fr 1fr", "auto", "flex"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "Which property establishes a new formatting context for floats to avoid collapse?",
        options: ["clear", "overflow: auto", "contain", "isolate"],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Which CSS function returns the larger of two values?",
        options: ["max()", "min()", "greater()", "larger()"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "Which pseudo-class matches elements when they are the first child of their parent?",
        options: [
          ":first-child",
          ":first-of-type",
          ":nth-child(1)",
          ":only-child",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which property provides an easy way to set both align-items and justify-content in grid/flex?",
        options: ["place-items", "align", "place-content", "grid-center"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which property helps set an intrinsic aspect ratio for an element?",
        options: ["aspect-ratio", "ratio", "preserve-aspect", "object-ratio"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which CSS property controls smoothing of fonts and rendering on some platforms?",
        options: [
          "font-smooth",
          "text-render",
          "font-render",
          "font-smoothing",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which selector targets elements based on attributes that begin with a value?",
        options: [
          "[attr^='value']",
          "[attr*='value']",
          "[attr$='value']",
          "[attr|='value']",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which value causes an element to act as a containing block for position: fixed?",
        options: [
          "contain-intrinsic-size",
          "contain: layout",
          "transform on ancestor",
          "position: relative",
        ],
        correctAnswer: 2,
      },
      {
        id: 28,
        question:
          "Which property toggles whether an element and its descendants are isolated from blending?",
        options: ["isolation", "mix-blend-mode", "z-index", "isolate"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which rule orders cascade layers?",
        options: ["@layer", "@cascade", "@order", "@layer-order"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which CSS feature enables styling based on the size of an ancestor container?",
        options: [
          "container queries",
          "media queries",
          "element queries",
          "parent queries",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question: "Which function returns the minimum of given values?",
        options: ["min()", "max()", "lower()", "smallest()"],
        correctAnswer: 0,
      },
      {
        id: 32,
        question:
          "Which property sets how a replaced element's content should fit its box?",
        options: ["object-fit", "background-fit", "content-fit", "fit"],
        correctAnswer: 0,
      },
      {
        id: 33,
        question:
          "Which pseudo-class matches an element when it is in a state where the user can hover?",
        options: [":hover", ":any-hover", ":active", ":can-hover"],
        correctAnswer: 1,
      },
      {
        id: 34,
        question:
          "Which property is used to create multiple columns of text layout?",
        options: ["column-count", "multi-column", "text-columns", "columns"],
        correctAnswer: 0,
      },
      {
        id: 35,
        question:
          "Which property controls whether elements are allowed to break inside a page/column?",
        options: ["break-inside", "page-break", "column-break", "break"],
        correctAnswer: 0,
      },
      {
        id: 36,
        question: "Which property creates a mask using an image or gradient?",
        options: ["mask-image", "clip-path", "background-mask", "mask"],
        correctAnswer: 0,
      },
      {
        id: 37,
        question:
          "Which CSS technique can be used to create a hardware-accelerated layer?",
        options: [
          "transform and opacity",
          "left/top positioning",
          "margin animations",
          "font-size animations",
        ],
        correctAnswer: 0,
      },
      {
        id: 38,
        question:
          "Which property pairs with filter to blur the background behind an element?",
        options: [
          "backdrop-filter",
          "background-blur",
          "filter: backdrop",
          "box-blur",
        ],
        correctAnswer: 0,
      },
      {
        id: 39,
        question: "Which function sets a fallback value for CSS variables?",
        options: [
          "var(--a, fallback)",
          "fallback(--a)",
          "var-fallback(--a)",
          "get(--a, fallback)",
        ],
        correctAnswer: 0,
      },
      {
        id: 40,
        question:
          "Which property can be used to switch writing direction and layout for different languages?",
        options: [
          "writing-mode / direction",
          "text-direction",
          "lang-direction",
          "write-direction",
        ],
        correctAnswer: 0,
      },
      {
        id: 41,
        question:
          "Which property defines how to size columns when using grid-auto-columns/rows?",
        options: [
          "grid-auto-columns / grid-auto-rows",
          "auto-columns",
          "grid-columns-auto",
          "auto-grid",
        ],
        correctAnswer: 0,
      },
      {
        id: 42,
        question:
          "Which property will establish a new stacking context when set to a value other than 'auto'?",
        options: ["transform", "position", "display", "opacity"],
        correctAnswer: 0,
      },
      {
        id: 43,
        question:
          "Which CSS value allows you to create breakpoints based on container width?",
        options: ["@container", "@media", "@query", "@container-query"],
        correctAnswer: 0,
      },
      {
        id: 44,
        question: "Which property is used to control hyphenation of text?",
        options: ["hyphens", "text-wrap", "word-break", "wrap"],
        correctAnswer: 0,
      },
      {
        id: 45,
        question:
          "Which CSS function can be used to compute sizes using viewport units?",
        options: ["calc()", "compute()", "vcalc()", "math()"],
        correctAnswer: 0,
      },
      {
        id: 46,
        question:
          "Which technique isolates CSS scoping in modern component styles?",
        options: ["shadow DOM", "scoped attribute", "iframe", "CSS modules"],
        correctAnswer: 0,
      },
      {
        id: 47,
        question:
          "Which property allows authors to control the default box alignment for grid items?",
        options: [
          "align-content",
          "align-items",
          "justify-items",
          "place-items",
        ],
        correctAnswer: 1,
      },
      {
        id: 48,
        question:
          "Which unit is relative to the smallest side of the viewport?",
        options: ["vmin", "vmax", "vh", "vw"],
        correctAnswer: 0,
      },
      {
        id: 49,
        question: "Which at-rule can help with preloading fonts?",
        options: [
          "link rel='preload' as='font'",
          "@preload",
          "@font-preload",
          "@load",
        ],
        correctAnswer: 0,
      },
      {
        id: 50,
        question:
          "Which property helps implement fluid typography using viewport units?",
        options: [
          "font-size: clamp()",
          "fluid-font",
          "responsive-font",
          "font-size: fluid()",
        ],
        correctAnswer: 0,
      },
      {
        id: 51,
        question: "Which API exposes CSS values programmatically?",
        options: ["CSS Typed OM", "CSSOM", "Document.style", "StyleManager"],
        correctAnswer: 0,
      },
      {
        id: 52,
        question:
          "Which property allows you to avoid painting an element's descendants?",
        options: [
          "contain: paint",
          "isolation",
          "will-change",
          "backface-visibility",
        ],
        correctAnswer: 0,
      },
      {
        id: 53,
        question:
          "Which value to grid-auto-flow changes how implicit grid items are placed?",
        options: ["row", "column", "dense", "row dense"],
        correctAnswer: 3,
      },
      {
        id: 54,
        question:
          "Which property controls whether an element is included in accessibility tree?",
        options: ["aria-hidden", "hidden", "role", "tabindex"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question:
          "Which CSS feature lets authors namespace cascade style blocks?",
        options: ["@layer", "@scope", "@namespace", "@cascade"],
        correctAnswer: 0,
      },
      {
        id: 56,
        question:
          "Which property controls the default animation timing function for transitions?",
        options: [
          "transition-timing-function",
          "animation-timing-function",
          "timing-function",
          "easing",
        ],
        correctAnswer: 0,
      },
      {
        id: 57,
        question:
          "Which selector matches an element based on its exact attribute value?",
        options: [
          "[attr~='value']",
          "[attr='value']",
          "[attr*='value']",
          "[attr|='value']",
        ],
        correctAnswer: 1,
      },
      {
        id: 58,
        question:
          "Which property is used to declare an overlay blending mode for background?",
        options: [
          "background-blend-mode",
          "mix-blend-mode",
          "blend-mode",
          "overlay-mode",
        ],
        correctAnswer: 0,
      },
      {
        id: 59,
        question:
          "Which mechanism is recommended for progressive enhancement of new CSS features?",
        options: [
          "@supports feature queries",
          "@media queries",
          "feature-detect JS only",
          "User agent sniffing",
        ],
        correctAnswer: 0,
      },
      {
        id: 60,
        question: "Which approach is best for responsive images?",
        options: [
          "srcset + sizes",
          "single large image",
          "use background-image only",
          "use canvas to resize",
        ],
        correctAnswer: 0,
      },
      {
        id: 61,
        question: "Which property creates a radial gradient?",
        options: [
          "radial-gradient()",
          "gradient-radial()",
          "circle-gradient()",
          "gradient()",
        ],
        correctAnswer: 0,
      },
      {
        id: 62,
        question: "Which property creates a conic gradient?",
        options: [
          "conic-gradient()",
          "gradient-conic()",
          "angle-gradient()",
          "gradient()",
        ],
        correctAnswer: 0,
      },
      {
        id: 63,
        question: "Which property sets the color of the text decoration?",
        options: [
          "text-decoration-color",
          "text-color",
          "decoration-color",
          "underline-color",
        ],
        correctAnswer: 0,
      },
      {
        id: 64,
        question: "Which property sets the style of the text decoration?",
        options: [
          "text-decoration-style",
          "text-style",
          "decoration-style",
          "underline-style",
        ],
        correctAnswer: 0,
      },
      {
        id: 65,
        question: "Which property sets the thickness of the text decoration?",
        options: [
          "text-decoration-thickness",
          "text-thickness",
          "decoration-thickness",
          "underline-thickness",
        ],
        correctAnswer: 0,
      },
      {
        id: 66,
        question:
          "Which property is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and text-decoration-thickness?",
        options: [
          "text-decoration",
          "text-decoration-shorthand",
          "text-decoration-all",
          "text-decoration-property",
        ],
        correctAnswer: 0,
      },
      {
        id: 67,
        question: "Which property sets the line through text?",
        options: [
          "text-decoration-line: line-through",
          "text-line-through",
          "line-through",
          "strikethrough",
        ],
        correctAnswer: 0,
      },
      {
        id: 68,
        question: "Which property sets the underline under text?",
        options: [
          "text-decoration-line: underline",
          "text-underline",
          "underline",
          "text-underline-style",
        ],
        correctAnswer: 0,
      },
      {
        id: 69,
        question: "Which property sets the overline over text?",
        options: [
          "text-decoration-line: overline",
          "text-overline",
          "overline",
          "text-overline-style",
        ],
        correctAnswer: 0,
      },
      {
        id: 70,
        question: "Which property removes all text decorations?",
        options: [
          "text-decoration: none",
          "text-decoration-line: none",
          "text-decoration-style: none",
          "text-decoration-color: none",
        ],
        correctAnswer: 0,
      },
      {
        id: 71,
        question: "Which property sets the text shadow?",
        options: ["text-shadow", "shadow", "text-effect", "font-shadow"],
        correctAnswer: 0,
      },
      {
        id: 72,
        question: "Which property sets the box shadow?",
        options: ["box-shadow", "shadow", "box-effect", "element-shadow"],
        correctAnswer: 0,
      },
      {
        id: 73,
        question: "Which property sets the opacity of an element?",
        options: ["opacity", "transparency", "alpha", "visibility"],
        correctAnswer: 0,
      },
      {
        id: 74,
        question: "Which property sets the background image?",
        options: ["background-image", "bg-image", "image", "background"],
        correctAnswer: 0,
      },
      {
        id: 75,
        question: "Which property sets the background color?",
        options: ["background-color", "bg-color", "color", "background"],
        correctAnswer: 0,
      },
      {
        id: 76,
        question: "Which property sets the background repeat?",
        options: ["background-repeat", "bg-repeat", "repeat", "background"],
        correctAnswer: 0,
      },
      {
        id: 77,
        question: "Which property sets the background position?",
        options: [
          "background-position",
          "bg-position",
          "position",
          "background",
        ],
        correctAnswer: 0,
      },
      {
        id: 78,
        question: "Which property sets the background size?",
        options: ["background-size", "bg-size", "size", "background"],
        correctAnswer: 0,
      },
      {
        id: 79,
        question:
          "Which property is a shorthand for all background properties?",
        options: ["background", "background-all", "bg", "background-shorthand"],
        correctAnswer: 0,
      },
      {
        id: 80,
        question: "Which property sets the background attachment?",
        options: [
          "background-attachment",
          "bg-attachment",
          "attachment",
          "background",
        ],
        correctAnswer: 0,
      },
      {
        id: 81,
        question: "Which property sets the background clip?",
        options: ["background-clip", "bg-clip", "clip", "background"],
        correctAnswer: 0,
      },
      {
        id: 82,
        question: "Which property sets the background origin?",
        options: ["background-origin", "bg-origin", "origin", "background"],
        correctAnswer: 0,
      },
      {
        id: 83,
        question: "Which property sets the list style type?",
        options: ["list-style-type", "list-type", "type", "list"],
        correctAnswer: 0,
      },
      {
        id: 84,
        question: "Which property sets the list style image?",
        options: ["list-style-image", "list-image", "image", "list"],
        correctAnswer: 0,
      },
      {
        id: 85,
        question: "Which property sets the list style position?",
        options: ["list-style-position", "list-position", "position", "list"],
        correctAnswer: 0,
      },
      {
        id: 86,
        question:
          "Which property is a shorthand for list-style-type, list-style-image, and list-style-position?",
        options: ["list-style", "list", "list-all", "list-shorthand"],
        correctAnswer: 0,
      },
      {
        id: 87,
        question: "Which property sets the table layout?",
        options: ["table-layout", "layout", "table", "display"],
        correctAnswer: 0,
      },
      {
        id: 88,
        question: "Which property sets the border collapse?",
        options: ["border-collapse", "collapse", "border", "table"],
        correctAnswer: 0,
      },
      {
        id: 89,
        question: "Which property sets the border spacing?",
        options: ["border-spacing", "spacing", "border", "table"],
        correctAnswer: 0,
      },
      {
        id: 90,
        question: "Which property sets the empty cells?",
        options: ["empty-cells", "cells", "empty", "table"],
        correctAnswer: 0,
      },
      {
        id: 91,
        question: "Which property sets the caption side?",
        options: ["caption-side", "caption", "side", "table"],
        correctAnswer: 0,
      },
      {
        id: 92,
        question: "Which property sets the vertical align?",
        options: ["vertical-align", "align", "vertical", "text-align"],
        correctAnswer: 0,
      },
      {
        id: 93,
        question: "Which property sets the white space?",
        options: ["white-space", "space", "whitespace", "text-space"],
        correctAnswer: 0,
      },
      {
        id: 94,
        question: "Which property sets the word break?",
        options: ["word-break", "break", "word", "text-break"],
        correctAnswer: 0,
      },
      {
        id: 95,
        question: "Which property sets the word wrap?",
        options: ["word-wrap", "wrap", "word", "text-wrap"],
        correctAnswer: 0,
      },
      {
        id: 96,
        question: "Which property sets the text overflow?",
        options: ["text-overflow", "overflow", "text", "overflow-text"],
        correctAnswer: 0,
      },
      {
        id: 97,
        question: "Which property sets the text transform?",
        options: ["text-transform", "transform", "text", "case"],
        correctAnswer: 0,
      },
      {
        id: 98,
        question: "Which property sets the text indent?",
        options: ["text-indent", "indent", "text", "paragraph-indent"],
        correctAnswer: 0,
      },
      {
        id: 99,
        question: "Which property sets the letter spacing?",
        options: ["letter-spacing", "spacing", "letter", "character-spacing"],
        correctAnswer: 0,
      },
      {
        id: 100,
        question: "Which property sets the word spacing?",
        options: ["word-spacing", "spacing", "word", "text-spacing"],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript
  js: {
    basic: [
      {
        id: 1,
        question: "Which keyword declares a variable with block scope?",
        options: ["var", "let", "const", "both let and const"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "How do you write a single-line comment in JS?",
        options: [
          "// comment",
          "/* comment */",
          "<!-- comment -->",
          "# comment",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which function converts a JSON string to an object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.toObject()",
          "parseJSON()",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which operator is used for strict equality?",
        options: ["==", "=", "===", "!=="],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "How do you add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "Which global object contains timing functions like setTimeout?",
        options: ["Window", "Timer", "Global", "Navigator"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How to create a function expression?",
        options: [
          "function name() {}",
          "const fn = function() {}",
          "fn := function() {}",
          "def fn() {}",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which method joins array elements into a string?",
        options: ["join()", "concat()", "toString()", "merge()"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which keyword throws an error manually?",
        options: ["raise", "throw", "error", "fail"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "How to check the type of a variable?",
        options: ["typeof x", "type(x)", "getType(x)", "typeof(x)"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Which syntax declares a constant reference in JS?",
        options: [
          "constant foo = 1",
          "const foo = 1",
          "let const foo = 1",
          "var const foo = 1",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Which method removes the last element from an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which loop repeatedly executes while condition is true?",
        options: ["do...while", "while", "forEach", "for...in"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which operator is used to concatenate strings?",
        options: ["+", "&", ".", "concat() only"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "Which built-in method converts an object to a JSON string?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "toJSON()",
          "Object.toString()",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "Which statement creates a new array with values that pass a test?",
        options: ["map()", "filter()", "reduce()", "find()"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "Which value is returned when a function has no return statement?",
        options: ["undefined", "null", "0", "''"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which keyword makes a function an async function?",
        options: ["async", "await", "defer", "asyncify"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Which method adds elements to the start of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 3,
      },
      {
        id: 20,
        question:
          "Which built-in object provides methods like map, filter and reduce?",
        options: [
          "Array.prototype",
          "Object.prototype",
          "List.prototype",
          "Collection.prototype",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the result of 2 + '2' in JavaScript?",
        options: ["4", "'22'", "22", "NaN"],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "Which operator returns the remainder of a division?",
        options: ["%", "/", "mod", "remainder"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What does the isNaN() function do?",
        options: [
          "Checks if a value is not a number",
          "Checks if a value is a number",
          "Converts a value to a number",
          "Checks if a value is null",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which method converts a string to lowercase?",
        options: [
          "toLowerCase()",
          "toLower()",
          "lowerCase()",
          "convertToLower()",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which method converts a string to uppercase?",
        options: [
          "toUpperCase()",
          "toUpper()",
          "upperCase()",
          "convertToUpper()",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which statement stops the execution of a loop?",
        options: ["break", "continue", "stop", "exit"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which statement skips the current iteration of a loop?",
        options: ["break", "continue", "skip", "next"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "What is the result of Boolean(0)?",
        options: ["true", "false", "0", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the result of Boolean('')?",
        options: ["true", "false", "''", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "What is the result of Boolean('hello')?",
        options: ["true", "false", "'hello'", "undefined"],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        id: 1,
        question: "Which method returns a promise resolved after a delay?",
        options: [
          "setTimeout returns a promise",
          "You must wrap setTimeout in a Promise",
          "delay()",
          "Promise.timeout()",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which array method creates a new array by applying a function?",
        options: ["filter()", "map()", "forEach()", "reduce()"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which operator spreads elements of an array?",
        options: ["...", "spread()", "@spread", "++"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which symbol defines a template literal?",
        options: ['"', "'", "`", "``"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Which keyword binds 'this' lexically in arrow functions?",
        options: ["this", "=>", "lex", "bind"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which method is used to handle promise rejections?",
        options: [".then()", ".catch()", ".finally()", ".resolve()"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "Which data structure stores unique values?",
        options: ["Array", "Set", "Map", "Object"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which method reduces an array to a single value?",
        options: ["reduce()", "aggregate()", "fold()", "combine()"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which syntax creates a new object with specified prototype?",
        options: [
          "Object.create(proto)",
          "{__proto__: proto}",
          "new Object(proto)",
          "Object.prototype(proto)",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which statement imports a module default export?",
        options: [
          "import * as m from 'x'",
          "import m from 'x'",
          "const m = require('x')",
          "export m from 'x'",
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "Which method serializes an object to JSON string?",
        options: [
          "JSON.toString()",
          "JSON.stringify()",
          "Object.stringify()",
          "toJSON()",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Which object method returns an array of key-value pairs?",
        options: [
          "Object.keys()",
          "Object.values()",
          "Object.entries()",
          "Object.getOwnPropertyNames()",
        ],
        correctAnswer: 2,
      },
      {
        id: 13,
        question: "Which method creates a shallow-copied array portion?",
        options: ["slice()", "splice()", "copyWithin()", "concat()"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which operator assigns a default value when a variable is nullish?",
        options: ["||", "??", "&&", "?:"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which built-in object provides key-value pairs but preserves insertion order?",
        options: ["Object", "Map", "Set", "WeakMap"],
        correctAnswer: 1,
      },
      {
        id: 16,
        question:
          "Which function creates a new Promise that resolves when all input promises resolve?",
        options: [
          "Promise.race()",
          "Promise.all()",
          "Promise.any()",
          "Promise.allSettled()",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "Which method returns the first element that satisfies a test?",
        options: ["filter()", "find()", "findIndex()", "some()"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question:
          "Which operator checks whether a property exists in an object?",
        options: ["hasOwnProperty", "in", "typeof", "exists"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which loop iterates enumerable properties of an object?",
        options: ["for...of", "for...in", "forEach", "while"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Which method converts a NodeList to an Array?",
        options: [
          "Array.from(nodeList)",
          "[...nodeList]",
          "Both of the above",
          "nodeList.toArray()",
        ],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "Which syntax defines a class in ES6?",
        options: [
          "class MyClass { }",
          "function MyClass() {}",
          "var MyClass = class {}",
          "Both 1 and 3",
        ],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "Which method binds a function's this permanently?",
        options: ["bind()", "call()", "apply()", "setThis()"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which methods call a function immediately with this and arguments?",
        options: ["call()/apply()", "bind()", "setThis()", "invoke()"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which array method tests whether at least one element passes the test?",
        options: ["every()", "some()", "filter()", "find()"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question:
          "Which built-in type is used to represent integers larger than MAX_SAFE_INTEGER?",
        options: ["BigInt", "Integer", "Long", "BigNumber"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which syntax imports only a named export from a module?",
        options: [
          "import { foo } from 'm';",
          "import foo from 'm';",
          "const { foo } = require('m');",
          "require { foo } from 'm';",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which method returns true if a value is NaN?",
        options: [
          "isNaN()",
          "Number.isNaN()",
          "NaN.is()",
          "Number.isNaNOnly()",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question:
          "Which method schedules a callback to run after current call stack?",
        options: [
          "setTimeout(fn,0)",
          "queueMicrotask(fn)",
          "requestAnimationFrame(fn)",
          "setImmediate(fn)",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question:
          "Which operator returns property value or default when property is undefined?",
        options: ["?.", "?:", "&&", "||"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which function is used to parse an integer from a string?",
        options: [
          "parseInt()",
          "Number.parse()",
          "toInteger()",
          "Number.parseInt()",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question: "Which method freezes an object to prevent modifications?",
        options: [
          "Object.seal()",
          "Object.freeze()",
          "Object.lock()",
          "Object.preventExtensions()",
        ],
        correctAnswer: 1,
      },
      {
        id: 32,
        question: "Which operator checks for strict inequality?",
        options: ["!=", "!==", "not==", "!==="],
        correctAnswer: 1,
      },
      {
        id: 33,
        question:
          "Which array method modifies the array by removing or replacing elements?",
        options: ["slice()", "splice()", "concat()", "map()"],
        correctAnswer: 1,
      },
      {
        id: 34,
        question: "Which method returns a shallow copy of an array?",
        options: ["slice()", "splice()", "copy()", "clone()"],
        correctAnswer: 0,
      },
      {
        id: 35,
        question:
          "Which method checks if a property exists directly on an object?",
        options: [
          "obj.hasOwnProperty(prop)",
          "prop in obj",
          "Object.has(obj, prop)",
          "Object.exists(obj, prop)",
        ],
        correctAnswer: 0,
      },
      {
        id: 36,
        question: "Which built-in can be used to schedule repeated execution?",
        options: [
          "setTimeout",
          "setInterval",
          "requestAnimationFrame",
          "queueMicrotask",
        ],
        correctAnswer: 1,
      },
      {
        id: 37,
        question: "Which statement is true about 'var' declarations?",
        options: [
          "Block-scoped",
          "Function-scoped",
          "Not hoisted",
          "Can't be redeclared",
        ],
        correctAnswer: 1,
      },
      {
        id: 38,
        question:
          "Which feature allows a function to accept a variable number of arguments?",
        options: [
          "arguments object",
          "rest parameter (...args)",
          "both",
          "none",
        ],
        correctAnswer: 2,
      },
      {
        id: 39,
        question: "Which event loop queue runs microtasks?",
        options: [
          "macrotask queue",
          "microtask queue",
          "render queue",
          "IO queue",
        ],
        correctAnswer: 1,
      },
      {
        id: 40,
        question:
          "Which array method returns a string concatenating all elements?",
        options: ["join()", "toString()", "concat()", "reduce()"],
        correctAnswer: 0,
      },
      {
        id: 41,
        question: "What is the output of console.log(1 + + '1')?",
        options: ["2", "11", "'11'", "NaN"],
        correctAnswer: 0,
      },
      {
        id: 42,
        question: "What is the output of console.log([] == ![])?",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: 0,
      },
      {
        id: 43,
        question: "What is the output of console.log(typeof null)?",
        options: ["null", "object", "undefined", "string"],
        correctAnswer: 1,
      },
      {
        id: 44,
        question: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
      },
      {
        id: 45,
        question: "What is the output of console.log('5' - 3)?",
        options: ["2", "8", "'53'", "NaN"],
        correctAnswer: 0,
      },
      {
        id: 46,
        question: "What is the output of console.log('5' + 3)?",
        options: ["8", "53", "'53'", "NaN"],
        correctAnswer: 1,
      },
      {
        id: 47,
        question: "What is the output of console.log([] + [])?",
        options: ["''", "[]", "[object Object]", "0"],
        correctAnswer: 0,
      },
      {
        id: 48,
        question: "What is the output of console.log([] + {})?",
        options: ["''", "[]", "[object Object]", "{}"],
        correctAnswer: 2,
      },
      {
        id: 49,
        question: "What is the output of console.log({} + [])?",
        options: ["''", "[]", "[object Object]", "0"],
        correctAnswer: 3,
      },
      {
        id: 50,
        question: "What is the output of console.log({} + {})?",
        options: ["''", "{}", "[object Object][object Object]", "NaN"],
        correctAnswer: 2,
      },
      {
        id: 51,
        question:
          "Which method returns the index of the first occurrence of a value in an array?",
        options: ["indexOf()", "findIndex()", "search()", "locate()"],
        correctAnswer: 0,
      },
      {
        id: 52,
        question:
          "Which method returns the index of the last occurrence of a value in an array?",
        options: [
          "lastIndexOf()",
          "findLastIndex()",
          "searchLast()",
          "locateLast()",
        ],
        correctAnswer: 0,
      },
      {
        id: 53,
        question:
          "Which method creates a new array with all sub-array elements concatenated?",
        options: ["flat()", "flatten()", "concatAll()", "merge()"],
        correctAnswer: 0,
      },
      {
        id: 54,
        question:
          "Which method creates a new array with the results of calling a provided function on every element?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question:
          "Which method creates a new array with all elements that pass the test?",
        options: ["filter()", "map()", "forEach()", "reduce()"],
        correctAnswer: 0,
      },
      {
        id: 56,
        question: "Which method executes a reducer function on each element?",
        options: ["reduce()", "map()", "forEach()", "filter()"],
        correctAnswer: 0,
      },
      {
        id: 57,
        question:
          "Which method executes a provided function once for each array element?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctAnswer: 0,
      },
      {
        id: 58,
        question: "Which method tests whether all elements pass the test?",
        options: ["every()", "some()", "all()", "filter()"],
        correctAnswer: 0,
      },
      {
        id: 59,
        question:
          "Which method tests whether at least one element passes the test?",
        options: ["some()", "every()", "any()", "filter()"],
        correctAnswer: 0,
      },
      {
        id: 60,
        question: "Which method sorts the elements of an array in place?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        correctAnswer: 0,
      },
    ],
    advanced: [
      {
        id: 1,
        question: "Which API provides a way to run background tasks?",
        options: [
          "Worker API",
          "Service Worker",
          "BackgroundWorker",
          "Thread API",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which feature allows destructuring arrays into variables?",
        options: [
          "let [a,b] = arr",
          "let (a,b) = arr",
          "let {a,b} = arr",
          "let a,b = arr",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which operator coalesces nullish values?",
        options: ["||", "??", "&&", "?:"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which method schedules microtasks?",
        options: [
          "setTimeout",
          "setImmediate",
          "queueMicrotask",
          "requestAnimationFrame",
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        question:
          "Which object holds key-value pairs and preserves insertion order?",
        options: ["Object", "Map", "Set", "Array"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which concept avoids blocking UI by yielding control?",
        options: ["Promises", "Async/Await", "Callbacks", "All of these"],
        correctAnswer: 3,
      },
      {
        id: 7,
        question: "Which method creates a shallow copy of an object?",
        options: [
          "Object.assign({}, obj)",
          "{...obj}",
          "Both of these",
          "clone(obj)",
        ],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "Which feature allows private fields in classes?",
        options: ["#privateField", "_private", "private:", "privateField()"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Which API streams binary data in chunks?",
        options: ["Blob API", "Fetch Streams", "FileReader", "XHR"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Which statement rejects a promise with a reason?",
        options: [
          "Promise.reject(reason)",
          "throw reason",
          "reject(reason)",
          "Promise.error(reason)",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Which construct creates a generator function?",
        options: [
          "function* gen(){ }",
          "async function gen(){ }",
          "generator function gen(){ }",
          "function gen*(){}",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which syntax allows iterating over async iterables?",
        options: ["for...of", "for await...of", "forEach", "for await in"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which object type stores weakly held keys?",
        options: ["Map", "WeakMap", "WeakSet", "Set"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question:
          "Which method returns a Promise that fulfills as soon as any input promise fulfills?",
        options: [
          "Promise.race()",
          "Promise.any()",
          "Promise.all()",
          "Promise.allSettled()",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Which API enables reactive streams?",
        options: ["Streams API", "XHR API", "Fetch API", "Socket API"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which feature provides symbol primitive values?",
        options: ["Symbol()", "Unique()", "NewKey()", "ID()"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "Which built-in API can be used to observe changes to an object's properties?",
        options: [
          "Proxy",
          "Object.observe",
          "Reflect.observe",
          "MutationObserver",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which method of Proxy handler intercepts property access?",
        options: ["get", "set", "apply", "construct"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Which global lets you fetch resources over the network?",
        options: ["XMLHttpRequest", "fetch()", "axios", "net.fetch()"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Which Web API allows bi-directional communication?",
        options: [
          "HTTP polling",
          "WebSocket",
          "Server-Sent Events",
          "Long polling",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Which method schedules a task to run on the next repaint?",
        options: [
          "setTimeout(fn, 0)",
          "requestAnimationFrame(fn)",
          "queueMicrotask(fn)",
          "setImmediate(fn)",
        ],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "Which value is used to create a BigInt literal?",
        options: [
          "9007199254740991n",
          "BigInt(9007199254740991)",
          "9007199254740991B",
          "Both 1 and 2",
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question:
          "Which mechanism ensures safe insertion of user data into HTML?",
        options: [
          "innerHTML with user data",
          "textContent",
          "eval()",
          "document.write()",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "Which event is fired when the DOM is fully parsed?",
        options: [
          "load",
          "DOMContentLoaded",
          "readystatechange",
          "beforeunload",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "Which global API provides a high-resolution time stamp?",
        options: [
          "Date.now()",
          "performance.now()",
          "console.time()",
          "new Date()",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question:
          "Which method returns a shallow copy of an object including symbols?",
        options: [
          "Object.assign()",
          "Object.getOwnPropertyDescriptors()",
          "Object.fromEntries()",
          "Object.entries()",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question:
          "Which operator checks for property existence in prototype chain?",
        options: ["hasOwnProperty", "in", "Object.hasOwn()", "exists"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "Which function allows dynamic importing of modules?",
        options: [
          "import('module')",
          "require('module')",
          "System.import('module')",
          "load('module')",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which pattern avoids callback hell?",
        options: [
          "callbacks",
          "promise chaining",
          "nested ifs",
          "synchronous loops",
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which error type should be thrown for programmatic API misuse?",
        options: ["TypeError", "SyntaxError", "ReferenceError", "RangeError"],
        correctAnswer: 0,
      },
      {
        id: 31,
        question:
          "Which API lets you persist key/value pairs larger than localStorage?",
        options: ["localStorage", "sessionStorage", "IndexedDB", "Cookies"],
        correctAnswer: 2,
      },
      {
        id: 32,
        question:
          "Which approach lets you prevent default browser handling of events?",
        options: [
          "return false",
          "event.preventDefault()",
          "event.stopPropagation()",
          "event.cancel()",
        ],
        correctAnswer: 1,
      },
      {
        id: 33,
        question: "Which function schedules a microtask?",
        options: [
          "queueMicrotask(fn)",
          "setTimeout(fn,0)",
          "setImmediate(fn)",
          "process.nextTick(fn)",
        ],
        correctAnswer: 0,
      },
      {
        id: 34,
        question: "Which API provides low-level cryptographic operations?",
        options: [
          "window.crypto.subtle",
          "cryptoJS",
          "WebCrypto API",
          "both 1 and 3",
        ],
        correctAnswer: 3,
      },
      {
        id: 35,
        question: "Which method obtains the prototype of an object?",
        options: [
          "Object.getPrototypeOf(obj)",
          "obj.__proto__",
          "Object.prototype(obj)",
          "Reflect.getPrototype(obj)",
        ],
        correctAnswer: 0,
      },
      {
        id: 36,
        question:
          "Which runtime behavior happens when you call an async function?",
        options: [
          "Returns undefined",
          "Returns a Promise",
          "Blocks until completion",
          "Throws immediately",
        ],
        correctAnswer: 1,
      },
      {
        id: 37,
        question: "Which method captures uncaught promise rejections globally?",
        options: [
          "process.on('unhandledRejection')",
          "window.onunhandledrejection",
          "Promise.catchAll()",
          "global.on('reject')",
        ],
        correctAnswer: 0,
      },
      {
        id: 38,
        question: "Which pattern can memoize function results?",
        options: ["throttling", "debouncing", "memoization", "lazy loading"],
        correctAnswer: 2,
      },
      {
        id: 39,
        question: "Which API lets pages register background sync?",
        options: ["Service Workers", "Web Workers", "IndexedDB", "WebSockets"],
        correctAnswer: 0,
      },
      {
        id: 40,
        question: "Which mechanism provides structured cloning?",
        options: [
          "JSON.stringify",
          "postMessage",
          "toString/parse",
          "transferObjects only",
        ],
        correctAnswer: 1,
      },
      {
        id: 41,
        question: "Which expression delays execution until a value is truthy?",
        options: [
          "a?.b ?? default",
          "a && a.b",
          "a.b ?? default",
          "a?.b || default",
        ],
        correctAnswer: 0,
      },
      {
        id: 42,
        question: "Which method returns a new array with values flattened?",
        options: ["flat()", "flatten()", "concatAll()", "unpack()"],
        correctAnswer: 0,
      },
      {
        id: 43,
        question: "Which ES feature enables private scoping with modules?",
        options: ["IIFE", "modules", "var hoisting", "global scope"],
        correctAnswer: 1,
      },
      {
        id: 44,
        question: "Which built-in is used for locale-aware string comparisons?",
        options: [
          "String.compare()",
          "Intl.Collator",
          "localeCompare only",
          "Intl.DateTimeFormat",
        ],
        correctAnswer: 1,
      },
      {
        id: 45,
        question: "Which method returns a new function with this bound?",
        options: ["bind()", "call()", "apply()", "compose()"],
        correctAnswer: 0,
      },
      {
        id: 46,
        question:
          "Which iterator protocol method returns an object with value and done?",
        options: ["next()", "value()", "done()", "iterate()"],
        correctAnswer: 0,
      },
      {
        id: 47,
        question: "Which method converts iterable of pairs into an object?",
        options: [
          "Object.fromEntries()",
          "Object.entries()",
          "Object.assign()",
          "Object.create()",
        ],
        correctAnswer: 0,
      },
      {
        id: 48,
        question: "Which API returns the list of own property descriptors?",
        options: [
          "Object.getOwnPropertyDescriptors()",
          "Object.getOwnPropertyNames()",
          "Object.keys()",
          "Object.entries()",
        ],
        correctAnswer: 0,
      },
      {
        id: 49,
        question:
          "Which operator can be used to define computed property names?",
        options: ["[expr]", "{[expr]: value}", "expr: value", "computed(expr)"],
        correctAnswer: 1,
      },
      {
        id: 50,
        question: "Which global method can convert a URL to parts?",
        options: [
          "new URL('...')",
          "parseURL()",
          "URL.parse()",
          "window.parseURL()",
        ],
        correctAnswer: 0,
      },
      {
        id: 51,
        question: "Which class of errors for invalid numeric range?",
        options: ["TypeError", "RangeError", "ReferenceError", "URIError"],
        correctAnswer: 1,
      },
      {
        id: 52,
        question: "Which API lets you perform binary data operations?",
        options: [
          "TypedArray / DataView",
          "Blob only",
          "String methods",
          "JSON",
        ],
        correctAnswer: 0,
      },
      {
        id: 53,
        question: "Which approach avoids layout thrashing?",
        options: [
          "Measure then mutate",
          "Mutate then measure",
          "Alternate per element",
          "No difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 54,
        question: "Which method returns a Promise that never rejects?",
        options: [
          "Promise.all()",
          "Promise.allSettled()",
          "Promise.race()",
          "Promise.any()",
        ],
        correctAnswer: 1,
      },
      {
        id: 55,
        question:
          "Which function converts Node-style callback APIs to Promise-based?",
        options: [
          "util.promisify()",
          "promisify()",
          "Promise.fromCallback()",
          "toPromise()",
        ],
        correctAnswer: 0,
      },
      {
        id: 56,
        question: "Which API provides per-frame memory debugging?",
        options: [
          "Performance API",
          "Allocation Profiler",
          "Memory API",
          "PerformanceTimeline",
        ],
        correctAnswer: 0,
      },
      {
        id: 57,
        question:
          "Which mechanism lets you atomically transfer ownership of an ArrayBuffer?",
        options: [
          "postMessage with transfer list",
          "clone",
          "JSON.stringify",
          "structured clone only",
        ],
        correctAnswer: 0,
      },
      {
        id: 58,
        question: "Which feature lets you create truly private methods/fields?",
        options: [
          "#privateField syntax",
          "_prefix convention",
          "closures only",
          "WeakMap pattern only",
        ],
        correctAnswer: 0,
      },
      {
        id: 59,
        question: "Which API is used to get user media?",
        options: [
          "navigator.mediaDevices.getUserMedia()",
          "navigator.getMedia()",
          "MediaStream.get()",
          "getUserMedia() global",
        ],
        correctAnswer: 0,
      },
      {
        id: 60,
        question: "Which approach protects against prototype pollution?",
        options: [
          "Use Object.assign with whitelist",
          "Deep merge blindly",
          "Modify Object.prototype",
          "Use eval to sanitize",
        ],
        correctAnswer: 0,
      },
      {
        id: 61,
        question: "What is a closure in JavaScript?",
        options: [
          "A function that has access to its outer function's scope",
          "A function that closes a window",
          "A function that returns a value",
          "A function that is anonymous",
        ],
        correctAnswer: 0,
      },
      {
        id: 62,
        question: "What is hoisting in JavaScript?",
        options: [
          "Moving declarations to the top of their scope",
          "Lifting heavy objects",
          "A type of function",
          "A design pattern",
        ],
        correctAnswer: 0,
      },
      {
        id: 63,
        question: "What is the event loop?",
        options: [
          "A loop that handles events",
          "A mechanism that handles asynchronous callbacks",
          "A loop in the DOM",
          "A type of for loop",
        ],
        correctAnswer: 1,
      },
      {
        id: 64,
        question: "What is the difference between == and ===?",
        options: [
          "== compares value, === compares value and type",
          "== compares type, === compares value",
          "No difference",
          "== is strict, === is loose",
        ],
        correctAnswer: 0,
      },
      {
        id: 65,
        question: "What is the difference between let and var?",
        options: [
          "let is block-scoped, var is function-scoped",
          "let is function-scoped, var is block-scoped",
          "No difference",
          "let is older, var is newer",
        ],
        correctAnswer: 0,
      },
      {
        id: 66,
        question: "What is the difference between null and undefined?",
        options: [
          "null is assigned, undefined is default",
          "undefined is assigned, null is default",
          "No difference",
          "null is a string, undefined is a number",
        ],
        correctAnswer: 0,
      },
      {
        id: 67,
        question:
          "What is the difference between function declaration and function expression?",
        options: [
          "Declaration is hoisted, expression is not",
          "Expression is hoisted, declaration is not",
          "No difference",
          "Declaration is anonymous, expression is named",
        ],
        correctAnswer: 0,
      },
      {
        id: 68,
        question: "What is the difference between call, apply, and bind?",
        options: [
          "call and apply call immediately, bind returns a function",
          "bind calls immediately, call and apply return a function",
          "No difference",
          "call and apply are the same, bind is different",
        ],
        correctAnswer: 0,
      },
      {
        id: 69,
        question: "What is the difference between setTimeout and setInterval?",
        options: [
          "setTimeout runs once, setInterval repeats",
          "setInterval runs once, setTimeout repeats",
          "No difference",
          "setTimeout is for intervals, setInterval is for timeouts",
        ],
        correctAnswer: 0,
      },
      {
        id: 70,
        question:
          "What is the difference between localStorage and sessionStorage?",
        options: [
          "localStorage persists, sessionStorage is session-only",
          "sessionStorage persists, localStorage is session-only",
          "No difference",
          "localStorage is for servers, sessionStorage is for clients",
        ],
        correctAnswer: 0,
      },
      {
        id: 71,
        question:
          "What is the difference between synchronous and asynchronous code?",
        options: [
          "Synchronous blocks, asynchronous does not",
          "Asynchronous blocks, synchronous does not",
          "No difference",
          "Synchronous is for servers, asynchronous is for clients",
        ],
        correctAnswer: 0,
      },
      {
        id: 72,
        question:
          "What is the difference between a shallow copy and a deep copy?",
        options: [
          "Shallow copies top-level, deep copies nested objects",
          "Deep copies top-level, shallow copies nested objects",
          "No difference",
          "Shallow copies are faster, deep copies are slower",
        ],
        correctAnswer: 0,
      },
      {
        id: 73,
        question:
          "What is the difference between an arrow function and a regular function?",
        options: [
          "Arrow functions don't have their own this",
          "Regular functions don't have their own this",
          "No difference",
          "Arrow functions are hoisted, regular functions are not",
        ],
        correctAnswer: 0,
      },
      {
        id: 74,
        question: "What is the difference between an array and an object?",
        options: [
          "Arrays are indexed, objects are key-value",
          "Objects are indexed, arrays are key-value",
          "No difference",
          "Arrays are for numbers, objects are for strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 75,
        question:
          "What is the difference between a for loop and a forEach loop?",
        options: [
          "for is a statement, forEach is a method",
          "forEach is a statement, for is a method",
          "No difference",
          "for is for arrays, forEach is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 76,
        question:
          "What is the difference between a while loop and a do-while loop?",
        options: [
          "while checks condition first, do-while checks after",
          "do-while checks condition first, while checks after",
          "No difference",
          "while is for arrays, do-while is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 77,
        question:
          "What is the difference between a break and a continue statement?",
        options: [
          "break exits loop, continue skips to next iteration",
          "continue exits loop, break skips to next iteration",
          "No difference",
          "break is for loops, continue is for functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 78,
        question:
          "What is the difference between a switch statement and an if-else statement?",
        options: [
          "switch is for multiple conditions, if-else is for few",
          "if-else is for multiple conditions, switch is for few",
          "No difference",
          "switch is for numbers, if-else is for strings",
        ],
        correctAnswer: 0,
      },
      {
        id: 79,
        question:
          "What is the difference between a try-catch and a throw statement?",
        options: [
          "try-catch handles errors, throw creates errors",
          "throw handles errors, try-catch creates errors",
          "No difference",
          "try-catch is for synchronous, throw is for asynchronous",
        ],
        correctAnswer: 0,
      },
      {
        id: 80,
        question: "What is the difference between a promise and a callback?",
        options: [
          "Promises are for async, callbacks are for sync",
          "Callbacks are for async, promises are for sync",
          "No difference",
          "Promises are older, callbacks are newer",
        ],
        correctAnswer: 0,
      },
      {
        id: 81,
        question: "What is the difference between async/await and promises?",
        options: [
          "async/await is syntactic sugar for promises",
          "Promises are syntactic sugar for async/await",
          "No difference",
          "async/await is for sync, promises are for async",
        ],
        correctAnswer: 0,
      },
      {
        id: 82,
        question: "What is the difference between a class and a prototype?",
        options: [
          "Class is syntactic sugar for prototype",
          "Prototype is syntactic sugar for class",
          "No difference",
          "Class is for objects, prototype is for functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 83,
        question:
          "What is the difference between a static method and an instance method?",
        options: [
          "Static is called on class, instance on object",
          "Instance is called on class, static on object",
          "No difference",
          "Static is for properties, instance is for methods",
        ],
        correctAnswer: 0,
      },
      {
        id: 84,
        question: "What is the difference between a getter and a setter?",
        options: [
          "Getter gets value, setter sets value",
          "Setter gets value, getter sets value",
          "No difference",
          "Getter is for arrays, setter is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 85,
        question: "What is the difference between a symbol and a string?",
        options: [
          "Symbol is unique, string is not",
          "String is unique, symbol is not",
          "No difference",
          "Symbol is for keys, string is for values",
        ],
        correctAnswer: 0,
      },
      {
        id: 86,
        question: "What is the difference between a Map and an Object?",
        options: [
          "Map preserves order, Object does not",
          "Object preserves order, Map does not",
          "No difference",
          "Map is for arrays, Object is for functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 87,
        question: "What is the difference between a Set and an Array?",
        options: [
          "Set stores unique values, Array does not",
          "Array stores unique values, Set does not",
          "No difference",
          "Set is for keys, Array is for values",
        ],
        correctAnswer: 0,
      },
      {
        id: 88,
        question: "What is the difference between a WeakMap and a Map?",
        options: [
          "WeakMap holds weak references, Map holds strong",
          "Map holds weak references, WeakMap holds strong",
          "No difference",
          "WeakMap is for arrays, Map is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 89,
        question: "What is the difference between a WeakSet and a Set?",
        options: [
          "WeakSet holds weak references, Set holds strong",
          "Set holds weak references, WeakSet holds strong",
          "No difference",
          "WeakSet is for keys, Set is for values",
        ],
        correctAnswer: 0,
      },
      {
        id: 90,
        question: "What is the difference between a generator and a function?",
        options: [
          "Generator can yield multiple values, function returns once",
          "Function can yield multiple values, generator returns once",
          "No difference",
          "Generator is for async, function is for sync",
        ],
        correctAnswer: 0,
      },
      {
        id: 91,
        question: "What is the difference between a proxy and an object?",
        options: [
          "Proxy can intercept operations, Object cannot",
          "Object can intercept operations, Proxy cannot",
          "No difference",
          "Proxy is for arrays, Object is for functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 92,
        question: "What is the difference between a reflect and an object?",
        options: [
          "Reflect provides methods for interceptable operations",
          "Object provides methods for interceptable operations",
          "No difference",
          "Reflect is for arrays, Object is for functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 93,
        question: "What is the difference between a module and a script?",
        options: [
          "Module has its own scope, script shares global",
          "Script has its own scope, module shares global",
          "No difference",
          "Module is for servers, script is for clients",
        ],
        correctAnswer: 0,
      },
      {
        id: 94,
        question: "What is the difference between an import and a require?",
        options: [
          "Import is ES6, require is CommonJS",
          "Require is ES6, import is CommonJS",
          "No difference",
          "Import is for servers, require is for clients",
        ],
        correctAnswer: 0,
      },
      {
        id: 95,
        question:
          "What is the difference between an export and a module.exports?",
        options: [
          "Export is ES6, module.exports is CommonJS",
          "Module.exports is ES6, export is CommonJS",
          "No difference",
          "Export is for servers, module.exports is for clients",
        ],
        correctAnswer: 0,
      },
      {
        id: 96,
        question: "What is the difference between a decorator and a function?",
        options: [
          "Decorator modifies class or method, function does not",
          "Function modifies class or method, decorator does not",
          "No difference",
          "Decorator is for arrays, function is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 97,
        question: "What is the difference between a mixin and a class?",
        options: [
          "Mixin adds functionality to class, class does not",
          "Class adds functionality to mixin, mixin does not",
          "No difference",
          "Mixin is for arrays, class is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 98,
        question: "What is the difference between a curry and a function?",
        options: [
          "Curry returns functions until all args provided",
          "Function returns functions until all args provided",
          "No difference",
          "Curry is for arrays, function is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 99,
        question: "What is the difference between a memoize and a function?",
        options: [
          "Memoize caches results, function does not",
          "Function caches results, memoize does not",
          "No difference",
          "Memoize is for arrays, function is for objects",
        ],
        correctAnswer: 0,
      },
      {
        id: 100,
        question: "What is the difference between a throttle and a debounce?",
        options: [
          "Throttle limits execution rate, debounce delays until idle",
          "Debounce limits execution rate, throttle delays until idle",
          "No difference",
          "Throttle is for arrays, debounce is for objects",
        ],
        correctAnswer: 0,
      },
    ],
  },
  // React
  react: {
    basic: [
      {
        id: 1,
        question: "What is the virtual DOM in React?",
        options: [
          "A database system",
          "A lightweight copy of the real DOM",
          "A new HTML element",
          "A CSS framework",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which hook is used for performing side effects?",
        options: ["useState", "useEffect", "useContext", "useMemo"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JavaScript Extension",
          "JS XML",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "How do you create a React component?",
        options: [
          "Create a JavaScript function or class",
          "Create an HTML file",
          "Create a CSS class",
          "Use the createComponent() method",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of props in React?",
        options: [
          "To store internal state",
          "To pass data from parent to child",
          "To handle events",
          "To style components",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which method updates state in class components?",
        options: [
          "setState()",
          "updateState()",
          "changeState()",
          "modifyState()",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the default port for React development server?",
        options: ["3000", "8080", "8000", "5000"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which command creates a new React app?",
        options: [
          "npx create-react-app",
          "npm init react-app",
          "react create app",
          "npm start react",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is React.StrictMode used for?",
        options: [
          "To enable strict TypeScript",
          "To highlight potential problems",
          "To improve performance",
          "To enable server-side rendering",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "How do you handle events in React?",
        options: [
          "Using onEvent attributes",
          "Using addEventListener",
          "Using jQuery",
          "Using inline onclick",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is conditional rendering?",
        options: [
          "Rendering different UI based on conditions",
          "Improving rendering speed",
          "Server-side rendering",
          "Lazy loading components",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "Which hook replaces componentDidMount in functional components?",
        options: [
          "useEffect with empty dependency array",
          "useState",
          "useCallback",
          "useMemo",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of React.Fragment?",
        options: [
          "To group elements without extra DOM nodes",
          "To create reusable fragments",
          "To split components",
          "To improve performance",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How do you import a component in React?",
        options: [
          "import Component from './Component'",
          "require('./Component')",
          "include './Component'",
          "loadComponent('./Component')",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is a controlled component?",
        options: [
          "A component with its state managed by React",
          "A component that controls other components",
          "A performance-optimized component",
          "A server-side rendered component",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which lifecycle method is called after component updates?",
        options: [
          "componentDidUpdate",
          "componentWillUpdate",
          "shouldComponentUpdate",
          "getSnapshotBeforeUpdate",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of React DevTools?",
        options: [
          "To debug React applications",
          "To compile React code",
          "To test React components",
          "To deploy React apps",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you add comments in JSX?",
        options: [
          "{/* comment */}",
          "<!-- comment -->",
          "// comment",
          "/* comment */",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the difference between props and state?",
        options: [
          "Props are read-only, state is mutable",
          "State is read-only, props are mutable",
          "Both are mutable",
          "Both are read-only",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which method prevents default behavior in React events?",
        options: [
          "event.preventDefault()",
          "event.stop()",
          "event.halt()",
          "event.cancel()",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of the children prop?",
        options: [
          "To pass components as content",
          "To track child components",
          "To manage component hierarchy",
          "To optimize rendering",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which hook stores mutable values without re-renders?",
        options: ["useRef", "useState", "useMemo", "useCallback"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is the significance of keys in lists?",
        options: [
          "Helps React identify which items changed",
          "Improves CSS styling",
          "Enables animations",
          "Required for all lists",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "How do you update state based on previous state?",
        options: [
          "Pass a function to setState",
          "Update directly",
          "Use forceUpdate()",
          "Call render() again",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is React's one-way data binding?",
        options: [
          "Data flows from parent to child via props",
          "Data flows in both directions",
          "Data flows from child to parent",
          "No data flow between components",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which hook is used for performance optimization?",
        options: ["useMemo", "useState", "useEffect", "useContext"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the purpose of PropTypes?",
        options: [
          "Type checking for props",
          "Performance optimization",
          "State management",
          "Routing",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "How do you pass multiple props?",
        options: [
          "<Component prop1={value1} prop2={value2} />",
          "<Component props={[value1, value2]} />",
          "<Component ...props />",
          "Using context",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the default export in React components?",
        options: [
          "export default Component",
          "export Component",
          "module.exports = Component",
          "exports.Component",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which method forces a component to re-render?",
        options: ["forceUpdate()", "rerender()", "update()", "refresh()"],
        correctAnswer: 0,
      },
    ],

    intermediate: [
      {
        id: 1,
        question: "What is the purpose of React.memo?",
        options: [
          "To memoize component rendering",
          "To create memoized values",
          "To manage memory",
          "To memoize functions",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which pattern uses render props?",
        options: [
          "Sharing code between components",
          "State management",
          "Routing",
          "Form handling",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is a Higher-Order Component (HOC)?",
        options: [
          "A function that takes a component and returns new component",
          "A component with high order",
          "A parent component",
          "A base component class",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which hook optimizes expensive calculations?",
        options: ["useMemo", "useCallback", "useEffect", "useRef"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is code splitting in React?",
        options: [
          "Splitting code into smaller chunks",
          "Dividing components",
          "Splitting state",
          "Separating styles",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "How does React.lazy work?",
        options: [
          "Lazy loads components",
          "Improves performance",
          "Reduces bundle size",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 7,
        question: "What is the purpose of Suspense?",
        options: [
          "To handle loading states",
          "To manage errors",
          "To optimize rendering",
          "To handle forms",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which hook manages complex state logic?",
        options: ["useReducer", "useState", "useContext", "useMemo"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is error boundary in React?",
        options: [
          "Catches JavaScript errors",
          "Handles network errors",
          "Validates input",
          "Checks props",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "How do you create custom hooks?",
        options: [
          "Functions starting with 'use'",
          "Using createHook()",
          "Extending React.Hook",
          "Using hook keyword",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the purpose of useLayoutEffect?",
        options: [
          "Synchronous side effects after DOM updates",
          "Asynchronous side effects",
          "Before component mounts",
          "After component unmounts",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which hook shares stateful logic?",
        options: ["Custom hooks", "useState", "useEffect", "useContext"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is prop drilling?",
        options: [
          "Passing props through multiple levels",
          "Drilling into prop objects",
          "Validating props",
          "Transforming props",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How do you optimize context updates?",
        options: [
          "Memoizing context value",
          "Using multiple contexts",
          "Avoiding context",
          "Using Redux instead",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the purpose of React.PureComponent?",
        options: [
          "Shallow prop/state comparison",
          "Deep comparison",
          "Automatic memoization",
          "Performance monitoring",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which hook prevents unnecessary re-renders?",
        options: ["useCallback", "useMemo", "useRef", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 17,
        question: "What is the virtual DOM diffing algorithm?",
        options: [
          "Reconciliation",
          "Diffing",
          "Comparison algorithm",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 18,
        question: "How do you handle forms in React?",
        options: [
          "Controlled components",
          "Uncontrolled components",
          "Form libraries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What is React Portal?",
        options: [
          "Renders children outside DOM hierarchy",
          "Creates portal to another app",
          "Transports props",
          "Connects components",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which hook tracks previous props/state?",
        options: [
          "useRef with useEffect",
          "usePrevious custom hook",
          "useState comparison",
          "Both 1 and 2",
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is the purpose of forwardRef?",
        options: [
          "Forward refs to child components",
          "Create refs",
          "Manage refs",
          "Optimize refs",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you test React components?",
        options: [
          "Jest + React Testing Library",
          "Enzyme",
          "Cypress",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "What is the significance of useImperativeHandle?",
        options: [
          "Customizes instance value exposed to parent",
          "Creates imperative code",
          "Handles refs",
          "Manages DOM nodes",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which pattern is used for compound components?",
        options: [
          "React.cloneElement",
          "Context API",
          "Render props",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "What is the purpose of React.StrictMode?",
        options: [
          "Identifies unsafe lifecycles",
          "Detects legacy API usage",
          "Warns about deprecated patterns",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "How do you handle asynchronous data fetching?",
        options: [
          "useEffect with cleanup",
          "Custom hooks",
          "Libraries like React Query",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "What is the purpose of useDebugValue?",
        options: [
          "Display custom hook labels in DevTools",
          "Debug values",
          "Log values",
          "Track state changes",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which optimization technique uses windowing?",
        options: [
          "Virtualized lists",
          "Code splitting",
          "Memoization",
          "Lazy loading",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the significance of keys in React?",
        options: [
          "Stable identity for list items",
          "Performance optimization",
          "Both",
          "Neither",
        ],
        correctAnswer: 2,
      },
      {
        id: 30,
        question: "How do you prevent memory leaks?",
        options: [
          "Cleanup in useEffect",
          "Cancel subscriptions",
          "Handle unmounting",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 31,
        question: "What is the purpose of React Children utilities?",
        options: [
          "Manipulate children props",
          "Map over children",
          "Count children",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "Which hook is for DOM measurements?",
        options: ["useLayoutEffect", "useRef", "useCallback", "Both 1 and 2"],
        correctAnswer: 3,
      },
      {
        id: 33,
        question: "What is the significance of batch updates?",
        options: [
          "Group multiple state updates",
          "Improve performance",
          "Prevent multiple renders",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 34,
        question: "How do you create polymorphic components?",
        options: [
          "Using as prop",
          "React.createElement",
          "Conditional rendering",
          "All of the above",
        ],
        correctAnswer: 0,
      },
      {
        id: 35,
        question: "What is the purpose of React.cloneElement?",
        options: [
          "Clone and modify React elements",
          "Create new elements",
          "Copy components",
          "Duplicate props",
        ],
        correctAnswer: 0,
      },
      {
        id: 36,
        question: "Which pattern handles loading and error states?",
        options: [
          "Render props with state",
          "Custom hooks",
          "Error boundaries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 37,
        question: "What is the significance of useReducer vs useState?",
        options: [
          "Complex state logic",
          "Multiple sub-values",
          "Next state depends on previous",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 38,
        question: "How do you implement drag and drop?",
        options: [
          "HTML5 Drag and Drop API",
          "Libraries like react-dnd",
          "Custom implementation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 39,
        question: "What is the purpose of React.Fragment keys?",
        options: [
          "Key prop on Fragment",
          "Not supported",
          "Only in some cases",
          "Experimental feature",
        ],
        correctAnswer: 0,
      },
      {
        id: 40,
        question: "Which technique improves perceived performance?",
        options: [
          "Skeleton screens",
          "Optimistic UI",
          "Debounced inputs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 41,
        question: "What is the significance of React.StrictMode for hooks?",
        options: [
          "Detects unsafe hooks",
          "Warns about dependencies",
          "Checks rules of hooks",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 42,
        question: "How do you handle responsive design?",
        options: [
          "CSS media queries",
          "useMediaQuery hook",
          "Container queries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 43,
        question: "What is the purpose of React.memo second argument?",
        options: [
          "Custom comparison function",
          "Props to memoize",
          "Options object",
          "Cache configuration",
        ],
        correctAnswer: 0,
      },
      {
        id: 44,
        question: "Which pattern is for headless components?",
        options: [
          "Provide logic without UI",
          "Separate presentation from logic",
          "Reusable hooks",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 45,
        question: "What is the significance of React.Fragment shorthand?",
        options: [
          "<></> syntax",
          "Shorter syntax",
          "No keys possible",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 46,
        question: "How do you implement infinite scroll?",
        options: [
          "Intersection Observer API",
          "Scroll event listeners",
          "Libraries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "What is the purpose of useDeferredValue?",
        options: [
          "Defer rendering non-urgent updates",
          "Delay state updates",
          "Slow rendering",
          "Performance monitoring",
        ],
        correctAnswer: 0,
      },
      {
        id: 48,
        question: "Which technique handles form validation?",
        options: [
          "Controlled components",
          "Form libraries",
          "Custom validation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 49,
        question:
          "What is the significance of React.memo with custom comparison?",
        options: [
          "Fine-grained control",
          "Deep comparison",
          "Specific prop checking",
          "All of the above",
        ],
        correctAnswer: 0,
      },
      {
        id: 50,
        question: "How do you handle CSS in React?",
        options: [
          "CSS Modules",
          "Styled-components",
          "Inline styles",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "What is the purpose of useTransition?",
        options: [
          "Mark updates as transitions",
          "Improve perceived performance",
          "Both",
          "Neither",
        ],
        correctAnswer: 2,
      },
      {
        id: 52,
        question: "Which pattern is for state management?",
        options: ["Context API", "Redux", "Zustand", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "What is the significance of React DevTools Profiler?",
        options: [
          "Performance profiling",
          "Component rendering times",
          "Identify bottlenecks",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 54,
        question: "How do you handle authentication?",
        options: [
          "Context for auth state",
          "Protected routes",
          "Auth providers",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 55,
        question: "What is the purpose of React.lazy with Suspense?",
        options: [
          "Code splitting with loading states",
          "Lazy loading",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "Which technique handles real-time updates?",
        options: [
          "WebSockets",
          "Server-Sent Events",
          "Polling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "What is the significance of React.memo vs useMemo?",
        options: [
          "Memoize components vs values",
          "Different use cases",
          "Both optimization techniques",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 58,
        question: "How do you implement animations?",
        options: [
          "CSS transitions",
          "React Spring",
          "Framer Motion",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "What is the purpose of useId?",
        options: [
          "Generate unique IDs",
          "Accessibility",
          "Stable IDs across renders",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "Which pattern handles side effects in class components?",
        options: [
          "Lifecycle methods",
          "componentDidMount",
          "componentDidUpdate",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],

    advanced: [
      {
        id: 1,
        question: "What is React Concurrent Mode?",
        options: [
          "New rendering mechanism",
          "Performance feature",
          "Experimental feature",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: "How does React Fiber work?",
        options: [
          "Incremental rendering",
          "Priority-based updates",
          "Suspense support",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "What is the purpose of useSyncExternalStore?",
        options: [
          "Subscribe to external stores",
          "Sync with non-React state",
          "Bridge external libraries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "What are React Server Components?",
        options: [
          "Zero-bundle-size components",
          "Server-side rendering",
          "Streaming capabilities",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "How does Suspense for Data Fetching work?",
        options: [
          "Async rendering",
          "Data fetching integration",
          "Error boundaries integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "What is selective hydration?",
        options: [
          "Hydrate parts of app",
          "Progressive hydration",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 7,
        question: "What is the purpose of useOptimistic?",
        options: [
          "Optimistic updates",
          "Better UX",
          "Immediate feedback",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 8,
        question: "How does React handle priority inversion?",
        options: [
          "Lane model",
          "Priority scheduling",
          "Task interruption",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 9,
        question: "What is the significance of startTransition?",
        options: [
          "Mark non-urgent updates",
          "Improve responsiveness",
          "Avoid blocking UI",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 10,
        question: "What are React Actions?",
        options: [
          "Server actions",
          "Form handling",
          "Data mutations",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "How does React cache work?",
        options: [
          "Memoization across renders",
          "Request deduplication",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 12,
        question: "What is the purpose of useActionState?",
        options: [
          "Handle form submissions",
          "Pending states",
          "Optimistic updates",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 13,
        question: "What are React Compiler features?",
        options: [
          "Automatic memoization",
          "Performance optimization",
          "Reduced manual work",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 14,
        question: "How does React handle hydration mismatches?",
        options: [
          "Suppress warnings",
          "Reconcile differences",
          "Client-side override",
          "All of the above",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the purpose of useFormStatus?",
        options: [
          "Form pending states",
          "Submission status",
          "Validation states",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 16,
        question: "What are React Cache Boundaries?",
        options: [
          "Cache isolation",
          "Performance boundaries",
          "Memory management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 17,
        question: "How does React handle streaming SSR?",
        options: [
          "Progressive rendering",
          "Chunked responses",
          "Suspense integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 18,
        question: "What is the purpose of use?",
        options: [
          "Read resources",
          "Suspense integration",
          "Data fetching",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What are React Context Selectors?",
        options: [
          "Optimize context updates",
          "Prevent unnecessary re-renders",
          "Performance improvement",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "How does React handle automatic batching?",
        options: [
          "Group state updates",
          "Reduce re-renders",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is the purpose of useFormState?",
        options: [
          "Form state management",
          "Server actions integration",
          "Validation handling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "What are React Suspense Lists?",
        options: [
          "Coordinate multiple Suspense boundaries",
          "Control loading order",
          "Better UX",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "How does React handle error recovery?",
        options: [
          "Error boundaries",
          "Fallback rendering",
          "Component reset",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "What is the purpose of useTransitionState?",
        options: [
          "Track transition progress",
          "Pending states",
          "Loading indicators",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "What are React Portals with event bubbling?",
        options: [
          "Event propagation through portals",
          "Virtual DOM handling",
          "React tree integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "How does React handle memory management?",
        options: [
          "Garbage collection",
          "Cleanup effects",
          "Ref management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "What is the purpose of useDeferredValue with transitions?",
        options: [
          "Defer non-critical updates",
          "Improve responsiveness",
          "Priority handling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "What are React Context performance patterns?",
        options: [
          "Splitting contexts",
          "Memoizing values",
          "Prevent unnecessary updates",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 29,
        question: "How does React handle hydration errors?",
        options: [
          "Suppress in production",
          "Client-side override",
          "Re-render from client",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "What is the purpose of useCallback with stable identity?",
        options: [
          "Prevent unnecessary re-renders",
          "Memoize callbacks",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 31,
        question: "What are React performance monitoring tools?",
        options: [
          "React DevTools Profiler",
          "Why Did You Render",
          "Performance API",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "How does React handle concurrent features?",
        options: [
          "Time slicing",
          "Priority-based rendering",
          "Interruptible rendering",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 33,
        question: "What is the purpose of useMemo with deep comparison?",
        options: [
          "Custom comparison logic",
          "Performance optimization",
          "Avoid expensive recomputation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 34,
        question: "What are React state machine patterns?",
        options: [
          "XState",
          "Finite state machines",
          "Statecharts",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 35,
        question: "How does React handle large lists?",
        options: [
          "Virtualization",
          "Windowing",
          "Infinite scroll",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 36,
        question: "What is the purpose of useLayoutEffect for measurements?",
        options: [
          "Synchronous layout measurements",
          "Avoid layout thrashing",
          "DOM measurements",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 37,
        question: "What are React testing best practices?",
        options: [
          "Testing behavior not implementation",
          "Accessibility testing",
          "Performance testing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 38,
        question: "How does React handle code splitting strategies?",
        options: [
          "Route-based splitting",
          "Component-based splitting",
          "Library splitting",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 39,
        question: "What is the purpose of useRef for instance variables?",
        options: [
          "Mutable values between renders",
          "Store previous values",
          "Track state changes",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 40,
        question: "What are React architecture patterns?",
        options: [
          "Container/Presentational",
          "Atomic Design",
          "Feature-based",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 41,
        question: "How does React handle SSR with streaming?",
        options: [
          "Progressive hydration",
          "Selective hydration",
          "Streaming responses",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 42,
        question: "What is the purpose of useReducer for complex state?",
        options: [
          "Multiple state values",
          "Complex transitions",
          "Predictable state updates",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 43,
        question: "What are React security best practices?",
        options: [
          "XSS prevention",
          "CSRF protection",
          "Secure dependencies",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 44,
        question: "How does React handle animation performance?",
        options: [
          "CSS transforms",
          "requestAnimationFrame",
          "FLIP technique",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 45,
        question: "What is the purpose of useImperativeHandle for APIs?",
        options: [
          "Expose component APIs",
          "Imperative handlers",
          "Parent-child communication",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 46,
        question: "What are React internationalization patterns?",
        options: [
          "i18n libraries",
          "Context for locale",
          "Dynamic loading",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "How does React handle offline capabilities?",
        options: [
          "Service Workers",
          "Cache API",
          "Background sync",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 48,
        question: "What is the purpose of useDebugValue for custom hooks?",
        options: [
          "Debug information",
          "DevTools integration",
          "Hook inspection",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 49,
        question: "What are React accessibility patterns?",
        options: [
          "ARIA attributes",
          "Keyboard navigation",
          "Screen reader support",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 50,
        question: "How does React handle bundle optimization?",
        options: [
          "Tree shaking",
          "Code splitting",
          "Lazy loading",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "What is the purpose of useTransition for navigation?",
        options: [
          "Smooth transitions",
          "Loading states",
          "Route changes",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 52,
        question: "What are React data fetching patterns?",
        options: ["React Query", "SWR", "Suspense", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "How does React handle state persistence?",
        options: [
          "Local storage",
          "IndexedDB",
          "Backend sync",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 54,
        question: "What is the purpose of useDeferredValue for inputs?",
        options: [
          "Debounced updates",
          "Performance optimization",
          "Responsive inputs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 55,
        question: "What are React micro-frontend patterns?",
        options: [
          "Module Federation",
          "Web Components",
          "Iframe integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "How does React handle build optimization?",
        options: [
          "Bundle analysis",
          "Compression",
          "Image optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "What is the purpose of useMemo for expensive calculations?",
        options: [
          "Memoize results",
          "Avoid recomputation",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 58,
        question: "What are React deployment strategies?",
        options: [
          "Static hosting",
          "Serverless",
          "Containerization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "How does React handle monitoring?",
        options: [
          "Error tracking",
          "Performance monitoring",
          "User analytics",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "What is the purpose of useCallback for event handlers?",
        options: [
          "Stable references",
          "Prevent re-renders",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 61,
        question: "What are React design system patterns?",
        options: [
          "Component libraries",
          "Theme providers",
          "Design tokens",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 62,
        question: "How does React handle authentication flows?",
        options: [
          "OAuth integration",
          "JWT handling",
          "Session management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 63,
        question: "What is the purpose of useRef for DOM access?",
        options: [
          "Direct DOM manipulation",
          "Imperative APIs",
          "Third-party library integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 64,
        question: "What are React state synchronization patterns?",
        options: [
          "Optimistic updates",
          "Pessimistic updates",
          "Background sync",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 65,
        question: "How does React handle error boundaries recovery?",
        options: [
          "Reset components",
          "Fallback UI",
          "Error reporting",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 66,
        question: "What is the purpose of useContext for theme?",
        options: [
          "Theme switching",
          "Dark mode",
          "Dynamic styling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 67,
        question: "What are React performance profiling techniques?",
        options: ["React.memo", "useMemo", "useCallback", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 68,
        question: "How does React handle mobile development?",
        options: [
          "React Native",
          "PWA",
          "Responsive design",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 69,
        question: "What is the purpose of useReducer middleware?",
        options: ["Side effects", "Logging", "Persistence", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 70,
        question: "What are React component patterns?",
        options: [
          "Compound components",
          "Render props",
          "HOCs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 71,
        question: "How does React handle SEO optimization?",
        options: ["SSR", "Static generation", "Meta tags", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 72,
        question: "What is the purpose of useLayoutEffect for animations?",
        options: [
          "Synchronous updates",
          "Smooth animations",
          "Layout calculations",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 73,
        question: "What are React testing patterns?",
        options: [
          "Mocking",
          "Snapshot testing",
          "Integration testing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 74,
        question: "How does React handle progressive enhancement?",
        options: [
          "Feature detection",
          "Graceful degradation",
          "Polyfills",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 75,
        question: "What is the purpose of useMemo for derived state?",
        options: [
          "Computed values",
          "Performance optimization",
          "Avoid recomputation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 76,
        question: "What are React routing patterns?",
        options: [
          "Nested routes",
          "Dynamic routes",
          "Route guards",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 77,
        question: "How does React handle analytics?",
        options: [
          "Event tracking",
          "Page views",
          "User behavior",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 78,
        question: "What is the purpose of useCallback for dependencies?",
        options: [
          "Stable references",
          "Prevent infinite loops",
          "Performance optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 79,
        question: "What are React form patterns?",
        options: [
          "Controlled components",
          "Form libraries",
          "Validation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 80,
        question: "How does React handle internationalization?",
        options: [
          "i18n libraries",
          "Context providers",
          "Translation files",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 81,
        question: "What is the purpose of useEffect for subscriptions?",
        options: [
          "Event listeners",
          "WebSocket connections",
          "Interval timers",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 82,
        question: "What are React state management patterns?",
        options: [
          "Local state",
          "Global state",
          "Server state",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 83,
        question: "How does React handle image optimization?",
        options: [
          "Lazy loading",
          "Responsive images",
          "Compression",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 84,
        question: "What is the purpose of useMemo for selectors?",
        options: [
          "Derived data",
          "Performance optimization",
          "Memoization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 85,
        question: "What are React dev tools extensions?",
        options: [
          "Profiler",
          "Component inspector",
          "Hook debugger",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 86,
        question: "How does React handle WebSocket integration?",
        options: [
          "useEffect hooks",
          "Custom hooks",
          "Reconnection logic",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 87,
        question: "What is the purpose of useReducer for undo/redo?",
        options: [
          "State history",
          "Time travel",
          "Complex state",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 88,
        question: "What are React accessibility testing tools?",
        options: [
          "axe-core",
          "Lighthouse",
          "Screen readers",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 89,
        question: "How does React handle payment integration?",
        options: ["Stripe", "Payment forms", "Security", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 90,
        question: "What is the purpose of useCallback for memoized components?",
        options: [
          "Prevent re-renders",
          "Performance optimization",
          "Stable props",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 91,
        question: "What are React deployment platforms?",
        options: ["Vercel", "Netlify", "AWS Amplify", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 92,
        question: "How does React handle real-time collaboration?",
        options: ["WebRTC", "WebSockets", "CRDTs", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 93,
        question: "What is the purpose of useMemo for filtering?",
        options: [
          "Memoized filters",
          "Performance",
          "Large datasets",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 94,
        question: "What are React build tools?",
        options: ["Webpack", "Vite", "Parcel", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 95,
        question: "How does React handle A/B testing?",
        options: [
          "Feature flags",
          "Analytics integration",
          "Dynamic rendering",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 96,
        question: "What is the purpose of useEffect for data fetching?",
        options: ["API calls", "Data loading", "Cleanup", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 97,
        question: "What are React performance metrics?",
        options: ["FCP", "LCP", "CLS", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 98,
        question: "How does React handle mobile gestures?",
        options: [
          "Touch events",
          "Gesture libraries",
          "Swipe detection",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 99,
        question: "What is the purpose of useReducer for complex forms?",
        options: ["Form state", "Validation", "Submission", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 100,
        question: "What are React best practices?",
        options: [
          "Component composition",
          "Code splitting",
          "Testing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],
  },

  node: {
    basic: [
      {
        id: 1,
        question: "What is Node.js built on?",
        options: [
          "Chrome's V8 engine",
          "SpiderMonkey",
          "JavaScriptCore",
          "Rhino",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which company originally created Node.js?",
        options: ["Google", "Facebook", "Joyent", "Microsoft"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "What is npm?",
        options: [
          "Node Package Manager",
          "Node Project Manager",
          "Node Program Manager",
          "Node Process Manager",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which method reads environment variables?",
        options: ["process.env", "env.get", "System.env", "global.env"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the CommonJS module system?",
        options: [
          "require() and module.exports",
          "import and export",
          "include and export",
          "load and export",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which method creates a web server?",
        options: [
          "http.createServer()",
          "server.create()",
          "web.createServer()",
          "http.server()",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the event loop?",
        options: [
          "Mechanism handling async operations",
          "Loop for events",
          "Event handler",
          "Callback loop",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which module handles file operations?",
        options: ["fs", "file", "io", "stream"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What does REPL stand for?",
        options: [
          "Read-Eval-Print Loop",
          "Run-Execute-Print Loop",
          "Read-Execute-Print Loop",
          "Run-Eval-Print Loop",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which method writes to console?",
        options: ["console.log()", "print()", "log()", "write()"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is package.json?",
        options: [
          "Project configuration file",
          "Package listing",
          "Dependencies file",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 12,
        question: "Which command installs dependencies?",
        options: ["npm install", "npm init", "npm start", "npm run"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is __dirname?",
        options: [
          "Current directory name",
          "File directory",
          "Document root",
          "Working directory",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which method parses JSON?",
        options: [
          "JSON.parse()",
          "parseJSON()",
          "json.parse()",
          "JSON.decode()",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is a callback function?",
        options: [
          "Function passed as argument",
          "Return function",
          "Async function",
          "Promise function",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which module handles paths?",
        options: ["path", "fs", "os", "util"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is process.argv?",
        options: [
          "Command line arguments",
          "Environment variables",
          "Process values",
          "System arguments",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which method creates directories?",
        options: ["fs.mkdir()", "fs.createDir()", "fs.mkDir()", "fs.dir()"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is a stream in Node.js?",
        options: [
          "Data flow abstraction",
          "File stream",
          "Network stream",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Which method makes HTTP requests?",
        options: [
          "http.request()",
          "http.get()",
          "http.fetch()",
          "Both 1 and 2",
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is the purpose of util module?",
        options: [
          "Utility functions",
          "Debugging",
          "Inheritance",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "Which method handles errors?",
        options: [
          "try-catch",
          "error event",
          "callback error",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "What is a buffer in Node.js?",
        options: [
          "Temporary storage for binary data",
          "Memory buffer",
          "File buffer",
          "Network buffer",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which method reads files asynchronously?",
        options: [
          "fs.readFile()",
          "fs.readFileSync()",
          "fs.read()",
          "fs.readAsync()",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of events module?",
        options: [
          "Event handling",
          "EventEmitter class",
          "Custom events",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "Which command runs Node scripts?",
        options: [
          "node script.js",
          "npm run script",
          "run node script",
          "execute script.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is package-lock.json?",
        options: [
          "Exact dependency tree",
          "Lock file",
          "Reproducible installs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "Which method converts callbacks to promises?",
        options: [
          "util.promisify()",
          "Promise.fromCallback()",
          "callbackToPromise()",
          "asyncify()",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is the purpose of os module?",
        options: [
          "Operating system info",
          "System utilities",
          "Platform detection",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "Which method handles URL parsing?",
        options: [
          "url.parse()",
          "URL() constructor",
          "parseURL()",
          "Both 1 and 2",
        ],
        correctAnswer: 3,
      },
    ],

    intermediate: [
      {
        id: 1,
        question: "What is middleware in Express?",
        options: [
          "Functions with req, res, next",
          "Request processors",
          "Route handlers",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: "Which module creates child processes?",
        options: [
          "child_process",
          "cluster",
          "worker_threads",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "What is clustering in Node.js?",
        options: [
          "Multiple process instances",
          "Load balancing",
          "CPU utilization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "Which method handles stream piping?",
        options: [
          "stream.pipe()",
          "stream.connect()",
          "pipe() method",
          "stream.link()",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of crypto module?",
        options: ["Encryption", "Hashing", "Security", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "Which method creates HTTPS server?",
        options: [
          "https.createServer()",
          "tls.createServer()",
          "ssl.createServer()",
          "secure.createServer()",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is WebSocket in Node.js?",
        options: [
          "Real-time communication",
          "Bidirectional protocol",
          "Persistent connection",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 8,
        question: "Which ORM is popular with Node.js?",
        options: ["Sequelize", "TypeORM", "Prisma", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 9,
        question: "What is the purpose of helmet middleware?",
        options: [
          "Security headers",
          "XSS protection",
          "Clickjacking prevention",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 10,
        question: "Which method handles file streams?",
        options: [
          "fs.createReadStream()",
          "fs.createWriteStream()",
          "fs.Stream()",
          "Both 1 and 2",
        ],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "What is process.nextTick()?",
        options: [
          "Async callback scheduling",
          "Next event loop tick",
          "Microtask queue",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 12,
        question: "Which module handles compression?",
        options: ["compression", "zlib", "gzip", "All of the above"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of morgan middleware?",
        options: [
          "HTTP request logging",
          "Log formatting",
          "Development tool",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 14,
        question: "Which method validates environment variables?",
        options: ["dotenv", "envalid", "config", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 15,
        question: "What is the event emitter pattern?",
        options: [
          "Observer pattern",
          "Pub/sub pattern",
          "Event handling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 16,
        question: "Which method handles database connections?",
        options: [
          "Connection pooling",
          "ORM methods",
          "Driver methods",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 17,
        question: "What is the purpose of cors middleware?",
        options: [
          "Cross-origin resource sharing",
          "API access control",
          "Browser security",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 18,
        question: "Which module handles authentication?",
        options: ["passport", "jsonwebtoken", "bcrypt", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What is the purpose of winston?",
        options: [
          "Logging library",
          "Log levels",
          "Transports",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Which method handles file uploads?",
        options: ["multer", "formidable", "busboy", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is the purpose of rate limiting?",
        options: [
          "API protection",
          "DoS prevention",
          "Resource management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "Which module handles Redis?",
        options: ["ioredis", "redis", "node-redis", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "What is the purpose of pm2?",
        options: [
          "Process manager",
          "Load balancing",
          "Monitoring",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "Which method handles GraphQL?",
        options: [
          "apollo-server",
          "express-graphql",
          "graphql-yoga",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "What is the purpose of socket.io?",
        options: [
          "Real-time communication",
          "WebSocket abstraction",
          "Fallback mechanisms",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "Which method handles validation?",
        options: ["joi", "yup", "validator", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "What is the purpose of nvm?",
        options: [
          "Node version manager",
          "Version switching",
          "Multiple Node versions",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "Which method handles testing?",
        options: ["jest", "mocha", "ava", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 29,
        question: "What is the purpose of webpack?",
        options: [
          "Module bundler",
          "Asset compilation",
          "Code splitting",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "Which method handles TypeScript?",
        options: ["ts-node", "typescript", "@types/node", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 31,
        question: "What is the purpose of nodemon?",
        options: [
          "Development tool",
          "Auto-restart",
          "File watching",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "Which method handles API documentation?",
        options: ["swagger", "openapi", "api-doc", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 33,
        question: "What is the purpose of debug module?",
        options: [
          "Conditional debugging",
          "Namespace debugging",
          "Development tool",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 34,
        question: "Which method handles configuration?",
        options: ["config", "dotenv", "convict", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 35,
        question: "What is the purpose of bunyan?",
        options: [
          "JSON logging",
          "Structured logs",
          "Log rotation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 36,
        question: "Which method handles scheduling?",
        options: ["node-cron", "agenda", "bull", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 37,
        question: "What is the purpose of helmet-csp?",
        options: [
          "Content Security Policy",
          "XSS protection",
          "Security headers",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 38,
        question: "Which method handles email?",
        options: ["nodemailer", "sendgrid", "mailgun", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 39,
        question: "What is the purpose of compression?",
        options: [
          "Gzip compression",
          "Performance",
          "Bandwidth saving",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 40,
        question: "Which method handles file watching?",
        options: ["chokidar", "fs.watch", "watchman", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 41,
        question: "What is the purpose of express-session?",
        options: [
          "Session management",
          "Cookie handling",
          "User sessions",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 42,
        question: "Which method handles caching?",
        options: ["node-cache", "memory-cache", "redis", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 43,
        question: "What is the purpose of body-parser?",
        options: [
          "Request body parsing",
          "JSON parsing",
          "URL-encoded data",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 44,
        question: "Which method handles migrations?",
        options: ["knex", "sequelize-cli", "typeorm", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 45,
        question: "What is the purpose of csurf?",
        options: [
          "CSRF protection",
          "Token validation",
          "Security",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 46,
        question: "Which method handles pagination?",
        options: [
          "Custom implementation",
          "Library helpers",
          "ORM features",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "What is the purpose of http2 module?",
        options: [
          "HTTP/2 protocol",
          "Performance",
          "Multiplexing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 48,
        question: "Which method handles monitoring?",
        options: ["prom-client", "newrelic", "datadog", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 49,
        question: "What is the purpose of node-gyp?",
        options: [
          "Native addon compilation",
          "C++ bindings",
          "Build tool",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 50,
        question: "Which method handles internationalization?",
        options: ["i18n", "intl", "globalize", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "What is the purpose of chalk?",
        options: [
          "Terminal styling",
          "Colors",
          "Formatting",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 52,
        question: "Which method handles WebRTC?",
        options: ["wrtc", "simple-peer", "peerjs", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "What is the purpose of sharp?",
        options: [
          "Image processing",
          "Resizing",
          "Optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 54,
        question: "Which method handles PDF generation?",
        options: ["pdfkit", "puppeteer", "html-pdf", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 55,
        question: "What is the purpose of uuid?",
        options: [
          "Unique identifiers",
          "Random strings",
          "ID generation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "Which method handles Excel files?",
        options: ["exceljs", "xlsx", "node-xlsx", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "What is the purpose of moment/date-fns?",
        options: [
          "Date manipulation",
          "Formatting",
          "Time zones",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 58,
        question: "Which method handles WebSockets?",
        options: ["ws", "socket.io", "websocket", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "What is the purpose of node-fetch/axios?",
        options: [
          "HTTP client",
          "API requests",
          "Promise-based",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "Which method handles Docker?",
        options: [
          "dockerode",
          "docker-compose",
          "Dockerfile",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],

    advanced: [
      {
        id: 1,
        question: "What is the libuv library?",
        options: [
          "Cross-platform async I/O",
          "Event loop",
          "Thread pool",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: "How does Node.js handle blocking operations?",
        options: [
          "Thread pool",
          "Worker threads",
          "Child processes",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "What is the purpose of AsyncLocalStorage?",
        options: [
          "Async context tracking",
          "Request context",
          "State management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "How does Node.js optimize memory usage?",
        options: [
          "Garbage collection",
          "Memory limits",
          "Heap management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "What is the purpose of Diagnostic Reporting?",
        options: [
          "Problem diagnosis",
          "Crash reports",
          "Performance issues",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "How does Node.js handle CPU-intensive tasks?",
        options: [
          "Worker threads",
          "Child processes",
          "Cluster mode",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 7,
        question: "What is the purpose of Performance Hooks?",
        options: [
          "Performance monitoring",
          "Timing measurements",
          "Resource usage",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 8,
        question: "How does Node.js optimize network performance?",
        options: [
          "Connection pooling",
          "Keep-alive",
          "HTTP/2",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 9,
        question: "What is the purpose of Source Maps?",
        options: [
          "Debugging compiled code",
          "Error tracking",
          "Stack traces",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 10,
        question: "How does Node.js handle security vulnerabilities?",
        options: [
          "Security releases",
          "Vulnerability scanning",
          "Dependency audit",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "What is the purpose of WASM in Node.js?",
        options: [
          "WebAssembly support",
          "Performance",
          "Language interoperability",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 12,
        question: "How does Node.js optimize startup time?",
        options: [
          "Snapshot",
          "Code caching",
          "Lazy loading",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 13,
        question: "What is the purpose of Trace Events?",
        options: [
          "Performance tracing",
          "Event loop monitoring",
          "Diagnostics",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 14,
        question: "How does Node.js handle memory leaks?",
        options: [
          "Heap snapshots",
          "Memory profiling",
          "Garbage collection analysis",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 15,
        question: "What is the purpose of ICU integration?",
        options: [
          "Internationalization",
          "Unicode support",
          "Localization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 16,
        question: "How does Node.js optimize file I/O?",
        options: ["Streams", "Buffer pooling", "Async I/O", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 17,
        question: "What is the purpose of Diagnostic Channel?",
        options: [
          "Pub/sub diagnostics",
          "Monitoring hooks",
          "Performance data",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 18,
        question: "How does Node.js handle DNS resolution?",
        options: ["Async DNS", "Cache", "Custom resolvers", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What is the purpose of Process Hooks?",
        options: [
          "Process lifecycle",
          "Signal handling",
          "Cleanup",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "How does Node.js optimize crypto operations?",
        options: [
          "Hardware acceleration",
          "Thread pool",
          "Async operations",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is the purpose of Heap Profiler?",
        options: [
          "Memory analysis",
          "Leak detection",
          "Optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "How does Node.js handle SSL/TLS?",
        options: [
          "OpenSSL",
          "Secure contexts",
          "Certificate management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "What is the purpose of Inspector API?",
        options: [
          "Debugging protocol",
          "DevTools integration",
          "Remote debugging",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "How does Node.js optimize JSON processing?",
        options: [
          "Native parsing",
          "Streaming JSON",
          "Schema validation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "What is the purpose of Report API?",
        options: [
          "Diagnostic reports",
          "Crash analysis",
          "Performance issues",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "How does Node.js handle HTTP/2 push?",
        options: [
          "Server push",
          "Resource hinting",
          "Performance",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "What is the purpose of TTY module?",
        options: [
          "Terminal handling",
          "ANSI codes",
          "Interactive apps",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "How does Node.js optimize database connections?",
        options: [
          "Connection pooling",
          "Query optimization",
          "Batching",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 29,
        question: "What is the purpose of V8 flags?",
        options: [
          "JavaScript engine tuning",
          "Performance optimization",
          "Memory limits",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "How does Node.js handle graceful shutdown?",
        options: [
          "Signal handling",
          "Cleanup hooks",
          "Connection draining",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 31,
        question: "What is the purpose of async_hooks?",
        options: [
          "Async resource tracking",
          "Context propagation",
          "Monitoring",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "How does Node.js optimize compression?",
        options: [
          "Streaming compression",
          "Algorithm choice",
          "Level tuning",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 33,
        question: "What is the purpose of QUIC protocol?",
        options: [
          "HTTP/3 support",
          "Performance",
          "Multiplexing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 34,
        question: "How does Node.js handle load balancing?",
        options: [
          "Cluster module",
          "Reverse proxy",
          "Service discovery",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 35,
        question: "What is the purpose of N-API?",
        options: [
          "Native addon API",
          "ABI stability",
          "Cross-version compatibility",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 36,
        question: "How does Node.js optimize cache usage?",
        options: [
          "Memory caching",
          "Disk caching",
          "CDN integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 37,
        question: "What is the purpose of Performance Timing API?",
        options: [
          "High-resolution timing",
          "Performance measurement",
          "Benchmarking",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 38,
        question: "How does Node.js handle file system watching?",
        options: [
          "inotify/FSEvents",
          "Polling fallback",
          "Event-based",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 39,
        question: "What is the purpose of Streams API?",
        options: [
          "Backpressure handling",
          "Memory efficiency",
          "Data processing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 40,
        question: "How does Node.js optimize TCP connections?",
        options: [
          "Nagle algorithm",
          "Keep-alive",
          "Socket options",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 41,
        question: "What is the purpose of ESM modules?",
        options: [
          "ECMAScript modules",
          "Import/export syntax",
          "Static analysis",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 42,
        question: "How does Node.js handle zero-downtime deployments?",
        options: [
          "Process managers",
          "Load balancers",
          "Health checks",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 43,
        question: "What is the purpose of Debugger Protocol?",
        options: [
          "Debugging interface",
          "Tool integration",
          "Remote debugging",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 44,
        question: "How does Node.js optimize JSON Web Tokens?",
        options: [
          "Asymmetric crypto",
          "Token validation",
          "Stateless auth",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 45,
        question: "What is the purpose of Process Sandboxing?",
        options: [
          "Security isolation",
          "Resource limits",
          "Privilege separation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 46,
        question: "How does Node.js handle WebAssembly modules?",
        options: [
          "WASI support",
          "Performance critical code",
          "Language interop",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "What is the purpose of HTTP Pipelining?",
        options: [
          "Request multiplexing",
          "Performance",
          "HTTP/1.1 optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 48,
        question: "How does Node.js optimize database transactions?",
        options: [
          "Isolation levels",
          "Connection management",
          "Error handling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 49,
        question: "What is the purpose of Process Isolation?",
        options: [
          "Security",
          "Resource management",
          "Fault tolerance",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 50,
        question: "How does Node.js handle real-time analytics?",
        options: [
          "Stream processing",
          "Event sourcing",
          "Time-series data",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "What is the purpose of Memory Management?",
        options: [
          "Heap optimization",
          "Garbage collection tuning",
          "Memory limits",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 52,
        question: "How does Node.js optimize WebSocket connections?",
        options: [
          "Connection pooling",
          "Message compression",
          "Binary data",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "What is the purpose of Process Signals?",
        options: [
          "Inter-process communication",
          "Graceful shutdown",
          "Debugging",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 54,
        question: "How does Node.js handle distributed tracing?",
        options: [
          "OpenTelemetry",
          "Trace context",
          "Performance monitoring",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 55,
        question: "What is the purpose of CPU Profiling?",
        options: [
          "Performance analysis",
          "Bottleneck identification",
          "Optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "How does Node.js optimize image processing?",
        options: [
          "Native modules",
          "Streaming processing",
          "Memory efficiency",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "What is the purpose of Security Policies?",
        options: [
          "Permission model",
          "Resource access control",
          "Security hardening",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 58,
        question: "How does Node.js handle API versioning?",
        options: [
          "URL versioning",
          "Header versioning",
          "Content negotiation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "What is the purpose of Load Testing?",
        options: [
          "Performance validation",
          "Scalability testing",
          "Stress testing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "How does Node.js optimize file uploads?",
        options: [
          "Streaming uploads",
          "Chunked encoding",
          "Memory efficiency",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 61,
        question: "What is the purpose of Circuit Breaker pattern?",
        options: [
          "Fault tolerance",
          "Failure prevention",
          "System resilience",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 62,
        question: "How does Node.js handle message queues?",
        options: ["RabbitMQ", "Kafka", "Redis pub/sub", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 63,
        question: "What is the purpose of Rate Limiting algorithms?",
        options: [
          "Token bucket",
          "Leaky bucket",
          "Fixed window",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 64,
        question: "How does Node.js optimize search functionality?",
        options: [
          "Elasticsearch",
          "Full-text search",
          "Indexing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 65,
        question: "What is the purpose of API Gateway?",
        options: [
          "Request routing",
          "Authentication",
          "Rate limiting",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 66,
        question: "How does Node.js handle microservices?",
        options: [
          "Service discovery",
          "API composition",
          "Distributed tracing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 67,
        question: "What is the purpose of Containerization?",
        options: ["Docker", "Kubernetes", "Orchestration", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 68,
        question: "How does Node.js optimize WebRTC applications?",
        options: [
          "Signaling servers",
          "STUN/TURN",
          "Peer connections",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 69,
        question: "What is the purpose of GraphQL optimization?",
        options: [
          "Query batching",
          "Caching",
          "Persisted queries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 70,
        question: "How does Node.js handle real-time dashboards?",
        options: [
          "WebSockets",
          "Server-Sent Events",
          "Polling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 71,
        question: "What is the purpose of A/B Testing framework?",
        options: [
          "Feature flags",
          "Experiment management",
          "Analytics integration",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 72,
        question: "How does Node.js optimize mobile backend?",
        options: [
          "Push notifications",
          "Offline sync",
          "API optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 73,
        question: "What is the purpose of Payment Processing?",
        options: [
          "Stripe integration",
          "PCI compliance",
          "Subscription management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 74,
        question: "How does Node.js handle video streaming?",
        options: [
          "HTTP Live Streaming",
          "MPEG-DASH",
          "Adaptive bitrate",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 75,
        question: "What is the purpose of Machine Learning integration?",
        options: [
          "TensorFlow.js",
          "Model serving",
          "Inference optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 76,
        question: "How does Node.js optimize SEO?",
        options: [
          "Server-side rendering",
          "Meta tags",
          "Sitemaps",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 77,
        question: "What is the purpose of Blockchain integration?",
        options: [
          "Smart contracts",
          "Wallet management",
          "Transaction processing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 78,
        question: "How does Node.js handle IoT applications?",
        options: [
          "MQTT protocol",
          "Device management",
          "Real-time data",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 79,
        question: "What is the purpose of AR/VR applications?",
        options: [
          "WebXR",
          "3D rendering",
          "Real-time interaction",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 80,
        question: "How does Node.js optimize voice applications?",
        options: [
          "WebRTC audio",
          "Speech recognition",
          "Voice synthesis",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 81,
        question: "What is the purpose of Edge Computing?",
        options: [
          "CDN integration",
          "Serverless functions",
          "Low latency",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 82,
        question: "How does Node.js handle big data?",
        options: [
          "Stream processing",
          "Batch processing",
          "Data pipelines",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 83,
        question: "What is the purpose of CI/CD pipelines?",
        options: [
          "Automated testing",
          "Deployment automation",
          "Quality gates",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 84,
        question: "How does Node.js optimize monitoring?",
        options: [
          "Metrics collection",
          "Alerting",
          "Dashboarding",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 85,
        question: "What is the purpose of Disaster Recovery?",
        options: [
          "Backup strategies",
          "Failover systems",
          "Data replication",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 86,
        question: "How does Node.js handle compliance requirements?",
        options: ["GDPR", "HIPAA", "SOC 2", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 87,
        question: "What is the purpose of Performance Budgeting?",
        options: [
          "Resource limits",
          "Performance targets",
          "Monitoring thresholds",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 88,
        question: "How does Node.js optimize build processes?",
        options: [
          "Incremental builds",
          "Cache optimization",
          "Parallel processing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 89,
        question: "What is the purpose of Documentation generation?",
        options: [
          "API documentation",
          "Code documentation",
          "Automated docs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 90,
        question: "How does Node.js handle legacy system integration?",
        options: [
          "API gateways",
          "Protocol adapters",
          "Data transformation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 91,
        question: "What is the purpose of Accessibility testing?",
        options: [
          "WCAG compliance",
          "Screen reader testing",
          "Keyboard navigation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 92,
        question: "How does Node.js optimize internationalization?",
        options: [
          "Locale management",
          "Translation workflows",
          "Formatting libraries",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 93,
        question: "What is the purpose of Threat Modeling?",
        options: [
          "Security assessment",
          "Risk analysis",
          "Mitigation planning",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 94,
        question: "How does Node.js handle data migration?",
        options: [
          "Zero-downtime migrations",
          "Data validation",
          "Rollback strategies",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 95,
        question: "What is the purpose of Capacity Planning?",
        options: [
          "Resource forecasting",
          "Scaling strategies",
          "Performance modeling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 96,
        question: "How does Node.js optimize cloud deployment?",
        options: [
          "Infrastructure as Code",
          "Auto-scaling",
          "Cost optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 97,
        question: "What is the purpose of Chaos Engineering?",
        options: [
          "Resilience testing",
          "Failure injection",
          "System validation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 98,
        question: "How does Node.js handle WebAssembly modules?",
        options: [
          "WASI integration",
          "Performance optimization",
          "Memory management",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 99,
        question: "What is the purpose of Quantum Computing preparation?",
        options: [
          "Post-quantum crypto",
          "Algorithm adaptation",
          "Future-proofing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 100,
        question: "How does Node.js optimize for sustainability?",
        options: [
          "Energy efficiency",
          "Resource optimization",
          "Green computing",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],
  },
  mongodb: {
    basic: [
      {
        id: 1,
        question: "What type of database is MongoDB?",
        options: [
          "Relational",
          "NoSQL document store",
          "In-memory",
          "Graph database",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which format does MongoDB use to store documents?",
        options: ["XML", "JSON-like BSON", "CSV", "YAML"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is a collection in MongoDB?",
        options: [
          "A table equivalent",
          "A row equivalent",
          "A database user",
          "A query",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which command inserts a single document?",
        options: [
          "db.collection.insertOne()",
          "db.insert()",
          "insert.document()",
          "db.add()",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the default port for MongoDB?",
        options: ["27017", "3306", "5432", "6379"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which operator is used for equality comparison?",
        options: ["$eq", "$ne", "$gt", "$lt"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What is the primary key field in MongoDB?",
        options: ["_id", "id", "primary_key", "key"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which command shows all databases?",
        options: ["show dbs", "show databases", "db.show()", "list databases"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "How do you switch to a database?",
        options: [
          "use database_name",
          "switch database_name",
          "connect database_name",
          "open database_name",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which command displays all collections?",
        options: [
          "show collections",
          "show tables",
          "db.getCollections()",
          "list collections",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is MongoDB's default storage engine?",
        options: ["WiredTiger", "MMAPv1", "InMemory", "RocksDB"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which method finds documents?",
        options: ["find()", "search()", "query()", "select()"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "Which operator updates specific fields?",
        options: ["$set", "$update", "$change", "$modify"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What type of schema does MongoDB use?",
        options: ["Schema-less", "Fixed schema", "XML schema", "Strict schema"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "Which command removes a document?",
        options: ["deleteOne()", "remove()", "drop()", "erase()"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "How do you limit query results?",
        options: ["limit()", "top()", "max()", "first()"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which operator sorts results?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What does CRUD stand for?",
        options: [
          "Create, Read, Update, Delete",
          "Copy, Read, Update, Delete",
          "Create, Retrieve, Update, Destroy",
          "Copy, Retrieve, Update, Destroy",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Which command counts documents?",
        options: ["countDocuments()", "count()", "size()", "length()"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is a document in MongoDB?",
        options: [
          "A record stored as BSON",
          "A table",
          "A column",
          "A database",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which operator checks field existence?",
        options: ["$exists", "$has", "$contains", "$present"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you skip documents?",
        options: ["skip()", "offset()", "jump()", "pass()"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "Which method creates an index?",
        options: ["createIndex()", "addIndex()", "makeIndex()", "buildIndex()"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What does BSON stand for?",
        options: [
          "Binary JSON",
          "Basic JSON",
          "Binary JavaScript Object Notation",
          "Both A and C",
        ],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "Which shell is used for MongoDB?",
        options: ["mongosh", "mongo", "mongocli", "mongo-shell"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which operator adds to array?",
        options: ["$push", "$add", "$append", "$insert"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which command drops a collection?",
        options: ["drop()", "remove()", "delete()", "erase()"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is GridFS used for?",
        options: [
          "Storing large files",
          "Grid computing",
          "File system",
          "Graph data",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which operator removes from array?",
        options: ["$pull", "$remove", "$delete", "$pop"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the default database?",
        options: ["test", "admin", "local", "config"],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        id: 1,
        question:
          "Which operator selects documents where a field is greater than a value?",
        options: ["$gt", "$gte", "$lt", "$lte"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What aggregation stage filters documents?",
        options: ["$match", "$filter", "$where", "$find"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which index supports text search?",
        options: [
          "text index",
          "hashed index",
          "compound index",
          "sparse index",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is a replica set?",
        options: [
          "A group of mongod instances",
          "A backup copy",
          "A sharded cluster",
          "A collection copy",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Which tool imports JSON data?",
        options: ["mongoimport", "mongorestore", "mongoload", "mongoinsert"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which operator is used for logical AND?",
        options: ["$and", "$or", "$not", "$nor"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "What aggregation stage groups documents?",
        options: ["$group", "$aggregate", "$cluster", "$collect"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which operator checks if value is in array?",
        options: ["$in", "$within", "$contains", "$has"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is sharding?",
        options: [
          "Horizontal scaling",
          "Vertical scaling",
          "Data backup",
          "Index creation",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which aggregation stage projects fields?",
        options: ["$project", "$select", "$fields", "$include"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is the oplog?",
        options: [
          "Operation log for replication",
          "Optimization log",
          "Operation lock",
          "Output log",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which operator performs left outer join?",
        options: ["$lookup", "$join", "$merge", "$combine"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is a covered query?",
        options: [
          "Query using only indexes",
          "Query covering all fields",
          "Encrypted query",
          "Backed up query",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which operator calculates average?",
        options: ["$avg", "$mean", "$average", "$calcAvg"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is TTL index?",
        options: [
          "Time-to-live index",
          "Time-tracking index",
          "Total-time index",
          "Time-type index",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which aggregation stage sorts?",
        options: ["$sort", "$order", "$arrange", "$sequence"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is a compound index?",
        options: [
          "Index on multiple fields",
          "Complex index",
          "Composite index",
          "Both A and C",
        ],
        correctAnswer: 3,
      },
      {
        id: 18,
        question: "Which operator converts to string?",
        options: ["$toString", "$string", "$str", "$convert"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is a cursor?",
        options: [
          "Pointer to query result set",
          "Current position",
          "Search pointer",
          "Index pointer",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "Which operator rounds numbers?",
        options: ["$round", "$floor", "$ceil", "$trunc"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is a sparse index?",
        options: [
          "Index only on documents with field",
          "Thin index",
          "Small index",
          "Partial index",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which aggregation stage limits?",
        options: ["$limit", "$top", "$first", "$head"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is a partial index?",
        options: [
          "Index with filter expression",
          "Incomplete index",
          "Temporary index",
          "Shared index",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which operator checks regex match?",
        options: ["$regex", "$match", "$like", "$pattern"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is write concern?",
        options: [
          "Guarantee of write propagation",
          "Write priority",
          "Write speed",
          "Write validation",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which aggregation stage skips?",
        options: ["$skip", "$offset", "$jump", "$pass"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is read preference?",
        options: [
          "Where to route read operations",
          "Read priority",
          "Read speed",
          "Read validation",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which operator gets array size?",
        options: ["$size", "$length", "$count", "$measure"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is journaling?",
        options: [
          "Write-ahead logging",
          "Daily logging",
          "Error logging",
          "Query logging",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which operator checks all array elements?",
        options: ["$all", "$every", "$each", "$allMatch"],
        correctAnswer: 0,
      },
      {
        id: 31,
        question: "What is a geospatial index?",
        options: [
          "Index for location data",
          "Space index",
          "Geography index",
          "Map index",
        ],
        correctAnswer: 0,
      },
      {
        id: 32,
        question: "Which aggregation stage unwinds array?",
        options: ["$unwind", "$expand", "$flatten", "$spread"],
        correctAnswer: 0,
      },
      {
        id: 33,
        question: "What is a hashed index?",
        options: [
          "Index using hash function",
          "Encrypted index",
          "Fast index",
          "Unique index",
        ],
        correctAnswer: 0,
      },
      {
        id: 34,
        question: "Which operator gets current date?",
        options: ["$currentDate", "$now", "$today", "$date"],
        correctAnswer: 0,
      },
      {
        id: 35,
        question: "What is a capped collection?",
        options: [
          "Fixed-size collection",
          "Protected collection",
          "Indexed collection",
          "Shared collection",
        ],
        correctAnswer: 0,
      },
      {
        id: 36,
        question: "Which operator extracts year from date?",
        options: ["$year", "$getYear", "$extractYear", "$dateYear"],
        correctAnswer: 0,
      },
      {
        id: 37,
        question: "What is a background index?",
        options: [
          "Index built without blocking",
          "Hidden index",
          "Secondary index",
          "System index",
        ],
        correctAnswer: 0,
      },
      {
        id: 38,
        question: "Which operator converts to date?",
        options: ["$toDate", "$date", "$convertDate", "$parseDate"],
        correctAnswer: 0,
      },
      {
        id: 39,
        question: "What is a unique index?",
        options: [
          "Prevents duplicate values",
          "One-of-a-kind index",
          "Special index",
          "Primary index",
        ],
        correctAnswer: 0,
      },
      {
        id: 40,
        question: "Which operator concatenates arrays?",
        options: [
          "$concatArrays",
          "$mergeArrays",
          "$joinArrays",
          "$combineArrays",
        ],
        correctAnswer: 0,
      },
      {
        id: 41,
        question: "What is the config server?",
        options: [
          "Stores metadata for sharding",
          "Configuration storage",
          "Settings database",
          "Admin server",
        ],
        correctAnswer: 0,
      },
      {
        id: 42,
        question: "Which operator gets first array element?",
        options: ["$arrayElemAt", "$first", "$head", "$start"],
        correctAnswer: 0,
      },
      {
        id: 43,
        question: "What is a mongos?",
        options: [
          "Query router for sharding",
          "Mongo shell",
          "Mongo server",
          "Mongo service",
        ],
        correctAnswer: 0,
      },
      {
        id: 44,
        question: "Which aggregation stage adds fields?",
        options: ["$addFields", "$set", "$include", "$append"],
        correctAnswer: 0,
      },
      {
        id: 45,
        question: "What is the balancer?",
        options: [
          "Moves chunks between shards",
          "Load balancer",
          "Query balancer",
          "Index balancer",
        ],
        correctAnswer: 0,
      },
      {
        id: 46,
        question: "Which operator slices array?",
        options: ["$slice", "$cut", "$part", "$segment"],
        correctAnswer: 0,
      },
      {
        id: 47,
        question: "What is a chunk?",
        options: [
          "Subset of sharded data",
          "Data block",
          "Memory block",
          "File segment",
        ],
        correctAnswer: 0,
      },
      {
        id: 48,
        question: "Which operator filters array?",
        options: ["$filter", "$where", "$match", "$select"],
        correctAnswer: 0,
      },
      {
        id: 49,
        question: "What is the arbiter?",
        options: [
          "Vote-only replica set member",
          "Judge node",
          "Controller node",
          "Master node",
        ],
        correctAnswer: 0,
      },
      {
        id: 50,
        question: "Which operator calculates sum?",
        options: ["$sum", "$total", "$add", "$calculate"],
        correctAnswer: 0,
      },
      {
        id: 51,
        question: "What is a hidden member?",
        options: [
          "Replica set member invisible to apps",
          "Secret node",
          "Backup node",
          "Test node",
        ],
        correctAnswer: 0,
      },
      {
        id: 52,
        question: "Which operator gets month from date?",
        options: ["$month", "$getMonth", "$extractMonth", "$dateMonth"],
        correctAnswer: 0,
      },
      {
        id: 53,
        question: "What is a delayed member?",
        options: [
          "Replica set member with lag",
          "Slow node",
          "Backup node",
          "Standby node",
        ],
        correctAnswer: 0,
      },
      {
        id: 54,
        question: "Which operator gets day from date?",
        options: ["$dayOfMonth", "$getDay", "$extractDay", "$dateDay"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question: "What is a primary node?",
        options: [
          "Accepts writes in replica set",
          "Main server",
          "Master server",
          "Controller node",
        ],
        correctAnswer: 0,
      },
      {
        id: 56,
        question: "Which operator gets hour from date?",
        options: ["$hour", "$getHour", "$extractHour", "$dateHour"],
        correctAnswer: 0,
      },
      {
        id: 57,
        question: "What is a secondary node?",
        options: [
          "Replicates from primary",
          "Backup server",
          "Read-only server",
          "Standby server",
        ],
        correctAnswer: 0,
      },
      {
        id: 58,
        question: "Which operator converts to number?",
        options: ["$toDouble", "$toInt", "$toLong", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "What is election timeout?",
        options: [
          "Time before new election",
          "Voting time limit",
          "Selection period",
          "Timeout period",
        ],
        correctAnswer: 0,
      },
      {
        id: 60,
        question: "Which operator gets minute from date?",
        options: ["$minute", "$getMinute", "$extractMinute", "$dateMinute"],
        correctAnswer: 0,
      },
    ],
    advanced: [
      {
        id: 1,
        question: "Which feature provides horizontal scaling?",
        options: ["Sharding", "Replication", "Indexing", "Aggregation"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What do replica sets provide?",
        options: [
          "High availability",
          "Data redundancy",
          "Automatic failover",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "Which provides atomic single-document operations?",
        options: [
          "Single-document atomicity",
          "Transactions",
          "Two-phase commit",
          "Locks",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "How do you start multi-document transaction?",
        options: [
          "session.startTransaction()",
          "db.startTransaction()",
          "start.transaction()",
          "transaction.begin()",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Which operator allows conditional updates?",
        options: ["$cond", "$if", "$switch", "$choose"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which index is best for hashed equality queries?",
        options: [
          "Hashed index",
          "Text index",
          "Compound index",
          "Wildcard index",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which tool restores binary backups?",
        options: ["mongorestore", "mongoimport", "mongoload", "mongobackup"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which aggregation stage projects fields?",
        options: ["$project", "$select", "$fields", "$pick"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What consistency for single-document writes?",
        options: [
          "Strong consistency",
          "Eventual consistency",
          "Weak consistency",
          "No consistency",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which command shows replica set status?",
        options: [
          "rs.status()",
          "repl.status()",
          "rsStatus()",
          "replset.status()",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "Which feature handles large files?",
        options: ["GridFS", "FileFS", "LargeFile", "BigFile"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which operator performs full-text search?",
        options: ["$text", "$search", "$find", "$matchText"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How specify text search weights?",
        options: [
          "$text with weights",
          "$search with weights",
          "$weight",
          "$textScore",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How sort by text search score?",
        options: ["$meta:textScore", "$textScore", "$searchScore", "$score"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "Which operators for geospatial queries?",
        options: ["$geoNear", "$near", "$geoWithin", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 16,
        question: "Which operator queries within geometry?",
        options: ["$geoWithin", "$within", "$geoContains", "$contains"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which operator queries near point?",
        options: ["$near", "$close", "$proximity", "$distance"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which operator calculates distance?",
        options: ["$geoDistance", "$distance", "$calcDistance", "$dist"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Which index types support geospatial?",
        options: ["2dsphere", "2d", "geo", "Both A and B"],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Which method performs map-reduce?",
        options: [
          "mapReduce()",
          "mapReduce",
          "executeMapReduce",
          "runMapReduce",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which validates documents?",
        options: [
          "Document validation",
          "Schema validation",
          "Data validation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 22,
        question: "Which operator specifies validation rules?",
        options: ["$jsonSchema", "$schema", "$validate", "$rules"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "Which encrypts data at rest?",
        options: [
          "Encrypted storage engine",
          "WiredTiger encryption",
          "MongoDB Encryption",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "Which encrypts data in transit?",
        options: [
          "TLS/SSL",
          "SSL/TLS",
          "Encrypted connections",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 25,
        question: "Which tools monitor MongoDB?",
        options: ["mongostat", "mongotop", "mongomonitor", "Both A and B"],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "Which tool backs up databases?",
        options: ["mongodump", "mongobackup", "mongosave", "mongoexport"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which tool restores databases?",
        options: ["mongorestore", "mongoload", "mongoimport", "mongodeploy"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which tool imports data?",
        options: ["mongoimport", "mongoload", "mongodeploy", "mongoadd"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which tool exports data?",
        options: ["mongoexport", "mongosave", "mongodump", "mongoget"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which feature compresses data?",
        options: [
          "Compression",
          "WiredTiger compression",
          "Data compression",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 31,
        question: "Which compression algorithms supported?",
        options: ["snappy", "zlib", "zstd", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "Which caches frequently accessed data?",
        options: [
          "Cache",
          "WiredTiger cache",
          "Memory cache",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 33,
        question: "Which parameter controls cache size?",
        options: [
          "wiredTigerCacheSizeGB",
          "cacheSizeGB",
          "wtCacheSizeGB",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 34,
        question: "Which enables incremental backups?",
        options: [
          "Oplog",
          "Operation log",
          "Change stream",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 35,
        question: "Which allows subscribing to changes?",
        options: [
          "Change streams",
          "Oplog tailing",
          "Data subscription",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 36,
        question: "Which method watches for changes?",
        options: ["watch()", "observe()", "subscribe()", "listen()"],
        correctAnswer: 0,
      },
      {
        id: 37,
        question: "Which handles time-series data?",
        options: [
          "Time series collections",
          "Time series data",
          "Time series analysis",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 38,
        question: "How create time series collection?",
        options: [
          "createCollection() with timeseries",
          "createTimeSeries()",
          "newTimeSeries()",
          "makeTimeSeries()",
        ],
        correctAnswer: 0,
      },
      {
        id: 39,
        question: "Which performs graph traversal?",
        options: ["$graphLookup", "$traverse", "$graph", "$path"],
        correctAnswer: 0,
      },
      {
        id: 40,
        question: "Which performs recursive search?",
        options: ["$graphLookup", "$recursive", "$traverse", "$graphSearch"],
        correctAnswer: 0,
      },
      {
        id: 41,
        question: "Which performs faceted search?",
        options: [
          "Faceted search",
          "Facet stage",
          "$facet",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 42,
        question: "Which operator for faceted search?",
        options: ["$facet", "$faceted", "$facetSearch", "$multiFacet"],
        correctAnswer: 0,
      },
      {
        id: 43,
        question: "Which provides Atlas full-text search?",
        options: [
          "Atlas Search",
          "Full-text search",
          "Text search",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 44,
        question: "Which operator for Atlas Search?",
        options: ["$search", "$text", "$find", "$match"],
        correctAnswer: 0,
      },
      {
        id: 45,
        question: "Which provides Atlas machine learning?",
        options: [
          "Atlas Data Lake",
          "Atlas Machine Learning",
          "Atlas Analytics",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 46,
        question: "Which queries data in S3?",
        options: [
          "Atlas Data Lake",
          "S3 Query",
          "Data Lake Query",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "Which enables real-time analytics?",
        options: [
          "Real-time analytics",
          "Change streams",
          "Aggregation pipeline",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 48,
        question: "Which provides BI connectivity?",
        options: [
          "BI Connector",
          "SQL Interface",
          "ODBC/JDBC",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 49,
        question: "Which allows SQL queries?",
        options: [
          "MongoDB BI Connector",
          "SQL Interface",
          "ODBC/JDBC",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 50,
        question: "Which integrates with Kafka?",
        options: [
          "Kafka Connect",
          "MongoDB Kafka Source",
          "MongoDB Kafka Sink",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "Which integrates with Spark?",
        options: [
          "MongoDB Spark Connector",
          "Spark MongoDB",
          "MongoDB for Spark",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 52,
        question: "Which integrates with Hadoop?",
        options: [
          "MongoDB Hadoop Connector",
          "Hadoop MongoDB",
          "MongoDB for Hadoop",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "Which performs data federation?",
        options: [
          "Atlas Data Federation",
          "Data Lake",
          "Federated Query",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 54,
        question: "Which provides data visualization?",
        options: [
          "Charts",
          "MongoDB Charts",
          "Data Visualization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 55,
        question: "Which enables automatic indexing?",
        options: [
          "Atlas Auto Indexing",
          "Automatic Indexing",
          "Auto Index",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "Which provides performance advisory?",
        options: [
          "Performance Advisor",
          "Index Suggestions",
          "Query Optimization",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "Which provides real-time monitoring?",
        options: [
          "Real-Time Performance Panel",
          "Live Performance Monitoring",
          "Real-Time Metrics",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 58,
        question: "Which enables automated scaling?",
        options: [
          "Atlas Auto-Scaling",
          "Auto-Scaling",
          "Automated Scaling",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "Which provides automated backups?",
        options: [
          "Atlas Backups",
          "Cloud Backups",
          "Automated Backups",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "Which enables point-in-time recovery?",
        options: [
          "Point-in-Time Recovery",
          "Continuous Backup",
          "PITR",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 61,
        question: "What is a wildcard index?",
        options: [
          "Index on all fields",
          "Index with pattern",
          "Flexible index",
          "Universal index",
        ],
        correctAnswer: 0,
      },
      {
        id: 62,
        question: "Which provides queryable encryption?",
        options: [
          "Queryable Encryption",
          "Encrypted queries",
          "Secure queries",
          "Private queries",
        ],
        correctAnswer: 0,
      },
      {
        id: 63,
        question: "What is a hidden index?",
        options: [
          "Index not used by query planner",
          "Invisible index",
          "Disabled index",
          "Test index",
        ],
        correctAnswer: 0,
      },
      {
        id: 64,
        question: "Which enables columnar compression?",
        options: [
          "Columnstore Indexes",
          "Column compression",
          "Vertical compression",
          "Data compression",
        ],
        correctAnswer: 0,
      },
      {
        id: 65,
        question: "What is a time-series bucket?",
        options: [
          "Container for time-series data",
          "Time bucket",
          "Data bucket",
          "Measurement bucket",
        ],
        correctAnswer: 0,
      },
      {
        id: 66,
        question: "Which provides automatic sharding?",
        options: [
          "Auto-sharding",
          "Automatic partitioning",
          "Smart sharding",
          "Dynamic sharding",
        ],
        correctAnswer: 0,
      },
      {
        id: 67,
        question: "What is a zone sharding?",
        options: [
          "Sharding based on ranges",
          "Geographic sharding",
          "Logical sharding",
          "Group sharding",
        ],
        correctAnswer: 0,
      },
      {
        id: 68,
        question: "Which enables cross-region replication?",
        options: [
          "Global clusters",
          "Multi-region deployment",
          "Cross-region sync",
          "Worldwide replication",
        ],
        correctAnswer: 0,
      },
      {
        id: 69,
        question: "What is a retryable write?",
        options: [
          "Automatic write retry",
          "Repeatable write",
          "Safe write",
          "Guaranteed write",
        ],
        correctAnswer: 0,
      },
      {
        id: 70,
        question: "Which provides causal consistency?",
        options: [
          "Causal consistency",
          "Logical consistency",
          "Time consistency",
          "Event consistency",
        ],
        correctAnswer: 0,
      },
      {
        id: 71,
        question: "What is a hedge read?",
        options: [
          "Parallel read to multiple secondaries",
          "Backup read",
          "Secondary read",
          "Fast read",
        ],
        correctAnswer: 0,
      },
      {
        id: 72,
        question: "Which enables change stream resumption?",
        options: [
          "Resume token",
          "Continuation token",
          "Checkpoint token",
          "Restart token",
        ],
        correctAnswer: 0,
      },
      {
        id: 73,
        question: "What is a clustered index?",
        options: [
          "Index determining physical order",
          "Grouped index",
          "Collection index",
          "Primary index",
        ],
        correctAnswer: 0,
      },
      {
        id: 74,
        question: "Which provides collation support?",
        options: [
          "Collation",
          "Sorting rules",
          "Locale support",
          "Language rules",
        ],
        correctAnswer: 0,
      },
      {
        id: 75,
        question: "What is a view in MongoDB?",
        options: [
          "Aggregation pipeline as collection",
          "Virtual collection",
          "Query view",
          "Data view",
        ],
        correctAnswer: 0,
      },
      {
        id: 76,
        question: "Which enables on-demand materialized views?",
        options: ["$merge", "$out", "$materialize", "$createView"],
        correctAnswer: 0,
      },
      {
        id: 77,
        question: "What is a $merge stage?",
        options: [
          "Writes aggregation results",
          "Combines collections",
          "Merges data",
          "Joins results",
        ],
        correctAnswer: 0,
      },
      {
        id: 78,
        question: "Which provides $unionWith?",
        options: [
          "Combines multiple collections",
          "Union operation",
          "Merge collections",
          "Combine results",
        ],
        correctAnswer: 0,
      },
      {
        id: 79,
        question: "What is a $setWindowFields?",
        options: [
          "Window functions in aggregation",
          "Set window",
          "Window operations",
          "Frame operations",
        ],
        correctAnswer: 0,
      },
      {
        id: 80,
        question: "Which enables $accumulator?",
        options: [
          "Custom accumulator",
          "User-defined accumulator",
          "Custom aggregation",
          "Programmable accumulator",
        ],
        correctAnswer: 0,
      },
      {
        id: 81,
        question: "What is a $function stage?",
        options: [
          "Custom JavaScript in aggregation",
          "User function",
          "JavaScript function",
          "Custom operation",
        ],
        correctAnswer: 0,
      },
      {
        id: 82,
        question: "Which provides $rand?",
        options: [
          "Random number generation",
          "Random sampling",
          "Random function",
          "Random value",
        ],
        correctAnswer: 0,
      },
      {
        id: 83,
        question: "What is a $sample stage?",
        options: [
          "Random document sampling",
          "Sample data",
          "Random selection",
          "Statistical sampling",
        ],
        correctAnswer: 0,
      },
      {
        id: 84,
        question: "Which enables $binarySize?",
        options: [
          "Binary data size",
          "BSON size",
          "Document size",
          "Data size",
        ],
        correctAnswer: 0,
      },
      {
        id: 85,
        question: "What is a $type operator?",
        options: [
          "Checks BSON type",
          "Data type check",
          "Type validation",
          "Type operator",
        ],
        correctAnswer: 0,
      },
      {
        id: 86,
        question: "Which provides $convert?",
        options: [
          "Type conversion",
          "Data conversion",
          "Value conversion",
          "Format conversion",
        ],
        correctAnswer: 0,
      },
      {
        id: 87,
        question: "What is a $dateFromString?",
        options: [
          "Converts string to date",
          "Parse date string",
          "Date conversion",
          "String to date",
        ],
        correctAnswer: 0,
      },
      {
        id: 88,
        question: "Which enables $dateToString?",
        options: [
          "Converts date to string",
          "Format date",
          "Date formatting",
          "Date to string",
        ],
        correctAnswer: 0,
      },
      {
        id: 89,
        question: "What is a $dateTrunc?",
        options: [
          "Truncates date to unit",
          "Date rounding",
          "Date truncation",
          "Date adjustment",
        ],
        correctAnswer: 0,
      },
      {
        id: 90,
        question: "Which provides $dateAdd?",
        options: [
          "Adds time to date",
          "Date addition",
          "Time addition",
          "Date increment",
        ],
        correctAnswer: 0,
      },
      {
        id: 91,
        question: "What is a $dateDiff?",
        options: [
          "Difference between dates",
          "Date comparison",
          "Time difference",
          "Date subtraction",
        ],
        correctAnswer: 0,
      },
      {
        id: 92,
        question: "Which enables $isoDayOfWeek?",
        options: [
          "ISO day of week",
          "Weekday number",
          "Day of week",
          "ISO weekday",
        ],
        correctAnswer: 0,
      },
      {
        id: 93,
        question: "What is a $isoWeek?",
        options: [
          "ISO week number",
          "Week number",
          "ISO week",
          "Calendar week",
        ],
        correctAnswer: 0,
      },
      {
        id: 94,
        question: "Which provides $isoWeekYear?",
        options: [
          "ISO week-year",
          "Week-based year",
          "ISO year",
          "Calendar year",
        ],
        correctAnswer: 0,
      },
      {
        id: 95,
        question: "What is a $millisecond?",
        options: [
          "Milliseconds from date",
          "Date milliseconds",
          "Time milliseconds",
          "Millisecond part",
        ],
        correctAnswer: 0,
      },
      {
        id: 96,
        question: "Which enables $second?",
        options: [
          "Seconds from date",
          "Date seconds",
          "Time seconds",
          "Second part",
        ],
        correctAnswer: 0,
      },
      {
        id: 97,
        question: "What is a $week?",
        options: ["Week of year", "Calendar week", "Week number", "Date week"],
        correctAnswer: 0,
      },
      {
        id: 98,
        question: "Which provides $year?",
        options: ["Year from date", "Date year", "Calendar year", "Year part"],
        correctAnswer: 0,
      },
      {
        id: 99,
        question: "What is a $switch operator?",
        options: [
          "Case statement",
          "Conditional branching",
          "Switch case",
          "Multiple conditions",
        ],
        correctAnswer: 0,
      },
      {
        id: 100,
        question: "Which enables $literal?",
        options: [
          "Returns value without parsing",
          "Literal value",
          "Constant value",
          "Fixed value",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Java
  java: {
    basic: [
      {
        id: 1,
        question: "Which keyword declares a class?",
        options: ["class", "struct", "object", "define"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is the entry point method?",
        options: ["main()", "start()", "run()", "init()"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which operator concatenates strings?",
        options: ["+", "&", ".", "concat()"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What type holds true/false?",
        options: ["boolean", "int", "char", "String"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Which prevents inheritance?",
        options: ["final", "static", "private", "sealed"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is polymorphism?",
        options: [
          "One name many forms",
          "Data hiding",
          "Code reuse",
          "Abstraction",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which stores key-value pairs?",
        options: ["Map", "List", "Set", "Queue"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which package contains String?",
        options: ["java.lang", "java.util", "java.io", "java.net"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is a checked exception?",
        options: [
          "Must be declared/handled",
          "Runtime exception",
          "Error",
          "All exceptions",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is default access?",
        options: ["Package-private", "Public", "Protected", "Private"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is boolean default?",
        options: ["false", "true", "null", "0"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which creates object?",
        options: ["new", "create", "object", "init"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How compare strings?",
        options: ["equals()", "==", "compare()", "equal()"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is int size?",
        options: ["32 bits", "16 bits", "64 bits", "Depends"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "Which inherits class?",
        options: ["extends", "inherits", "implements", "super"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which is not primitive?",
        options: ["String", "int", "boolean", "double"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is superclass of all?",
        options: ["Object", "Class", "Super", "Main"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which implements interface?",
        options: ["implements", "extends", "interface", "implement"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "Output: 10 + 20 + '30'?",
        options: ["102030", "30", "60", "3030"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "When garbage collected?",
        options: ["finalize()", "destroy()", "delete()", "cleanup()"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is JVM?",
        options: [
          "Java Virtual Machine",
          "Java Visual Machine",
          "Java Verified Machine",
          "Java Variable Machine",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is JRE?",
        options: [
          "Java Runtime Environment",
          "Java Runtime Engine",
          "Java Run Environment",
          "Java Runtime Extension",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is JDK?",
        options: [
          "Java Development Kit",
          "Java Developer Kit",
          "Java Design Kit",
          "Java Deployment Kit",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What is bytecode?",
        options: [
          "Intermediate code",
          "Binary code",
          "Machine code",
          "Source code",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is an interface?",
        options: [
          "Contract without implementation",
          "Abstract class",
          "Parent class",
          "Template class",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is an abstract class?",
        options: [
          "Cannot be instantiated",
          "Must be extended",
          "Contains abstract methods",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "What is static method?",
        options: [
          "Belongs to class",
          "Belongs to object",
          "Cannot be overridden",
          "Both A and C",
        ],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "What is constructor?",
        options: [
          "Initializes object",
          "Special method",
          "Same name as class",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 29,
        question: "What is method overloading?",
        options: [
          "Same name different parameters",
          "Different name same parameters",
          "Same name same parameters",
          "Different name different parameters",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is method overriding?",
        options: [
          "Subclass provides specific implementation",
          "Superclass provides implementation",
          "Same method in same class",
          "Static method implementation",
        ],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        id: 1,
        question: "Which supports forEach?",
        options: ["Iterable", "Collection", "List", "Stream"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which creates thread via interface?",
        options: ["Runnable", "Thread", "Callable", "Executor"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which prevents overriding?",
        options: ["final", "static", "private", "sealed"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Which has concurrency utilities?",
        options: [
          "java.util.concurrent",
          "java.util",
          "java.concurrent",
          "java.thread",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is reflection?",
        options: [
          "Load classes at runtime",
          "Serialize objects",
          "Dynamic binding",
          "Garbage collection",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which prevents duplicates?",
        options: ["Set", "List", "Map", "Queue"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which supports lazy operations?",
        options: ["Stream", "Iterator", "Enumeration", "Sequence"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which acquires object lock?",
        options: ["synchronized", "lock", "wait", "notify"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is NIO?",
        options: ["Non-blocking I/O", "New I/O", "Network I/O", "Both A and B"],
        correctAnswer: 3,
      },
      {
        id: 10,
        question: "Which serializes object?",
        options: ["writeObject", "toBytes", "serialize", "objectToBytes"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What is Math.min(Double.MIN_VALUE, 0)?",
        options: [
          "Double.MIN_VALUE",
          "0.0",
          "Negative infinity",
          "Positive infinity",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "Which annotation overrides?",
        options: ["@Override", "@Overwrite", "@OverrideMethod", "@Super"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is == vs equals()?",
        options: [
          "== compares references",
          "equals() compares content",
          "Both A and B",
          "They are the same",
        ],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "Which prevents serialization?",
        options: ["transient", "static", "final", "volatile"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is finally block?",
        options: [
          "Always executes",
          "Handles exceptions",
          "Catches exceptions",
          "Throws exceptions",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which maintains insertion order?",
        options: ["LinkedHashSet", "HashSet", "TreeSet", "All"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "ArrayList default capacity?",
        options: ["10", "16", "0", "Depends"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which starts thread?",
        options: ["start()", "run()", "execute()", "begin()"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is diamond operator?",
        options: ["Type inference", "Generic type", "Both", "Neither"],
        correctAnswer: 2,
      },
      {
        id: 20,
        question: "Convert string to int?",
        options: [
          "Integer.parseInt()",
          "String.toInt()",
          "Integer.valueOf()",
          "Both A and C",
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is volatile?",
        options: [
          "Ensures visibility",
          "Makes constant",
          "Prevents modification",
          "Optimizes access",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which pattern in InputStream?",
        options: ["Decorator", "Factory", "Singleton", "Observer"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What is hashCode()?",
        options: [
          "Generates hash code",
          "Compares objects",
          "Converts to string",
          "Serializes",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Deep copy method?",
        options: ["clone()", "copy()", "deepCopy()", "duplicate()"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is Comparator?",
        options: [
          "Custom sorting",
          "Compares objects",
          "Sorts collections",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 26,
        question: "Schedule repeated task?",
        options: [
          "ScheduledExecutorService",
          "Timer",
          "Thread",
          "Both A and B",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "try-with-resources?",
        options: [
          "Auto-closes resources",
          "Handles exceptions",
          "Manages memory",
          "Optimizes",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Custom serialization?",
        options: [
          "Default serialization",
          "@Serializable",
          "@Serialize",
          "@Serial",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "What is ClassLoader?",
        options: [
          "Loads classes",
          "Compiles code",
          "Executes programs",
          "Optimizes",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Get primitive class?",
        options: [
          "Primitive.class",
          "Class.forName()",
          "Type.class",
          "Primitive types don't have",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question: "What is assert?",
        options: [
          "Tests assumptions",
          "Handles exceptions",
          "Debugs code",
          "Validates input",
        ],
        correctAnswer: 0,
      },
      {
        id: 32,
        question: "Get current thread?",
        options: [
          "Thread.currentThread()",
          "Thread.getCurrent()",
          "CurrentThread.get()",
          "Thread.getRunning()",
        ],
        correctAnswer: 0,
      },
      {
        id: 33,
        question: "What is yield()?",
        options: ["Gives up CPU", "Pauses thread", "Terminates", "Waits"],
        correctAnswer: 0,
      },
      {
        id: 34,
        question: "Which synchronized by default?",
        options: ["Vector", "ArrayList", "HashSet", "HashMap"],
        correctAnswer: 0,
      },
      {
        id: 35,
        question: "What is Properties?",
        options: [
          "Manages configuration",
          "Stores properties",
          "Handles system properties",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 36,
        question: "Format dates?",
        options: ["SimpleDateFormat", "DateTimeFormatter", "DateFormat", "All"],
        correctAnswer: 3,
      },
      {
        id: 37,
        question: "What is Buffer?",
        options: ["Manages I/O memory", "Handles I/O", "Buffers data", "All"],
        correctAnswer: 3,
      },
      {
        id: 38,
        question: "Deprecated annotation?",
        options: ["@Deprecated", "@Deprecate", "@Obsolete", "@Remove"],
        correctAnswer: 0,
      },
      {
        id: 39,
        question: "What is Optional?",
        options: [
          "Avoids null",
          "Represents optional values",
          "Handles missing values",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 40,
        question: "Convert collection to array?",
        options: [
          "toArray()",
          "asArray()",
          "convertToArray()",
          "collectionToArray()",
        ],
        correctAnswer: 0,
      },
      {
        id: 41,
        question: "What is enumeration?",
        options: ["Legacy iterator", "New iterator", "Stream", "Collection"],
        correctAnswer: 0,
      },
      {
        id: 42,
        question: "What is iterator?",
        options: [
          "Modern iteration",
          "Legacy iteration",
          "Stream iteration",
          "Parallel iteration",
        ],
        correctAnswer: 0,
      },
      {
        id: 43,
        question: "What is listIterator?",
        options: [
          "Bidirectional iterator",
          "Forward iterator",
          "Random iterator",
          "Parallel iterator",
        ],
        correctAnswer: 0,
      },
      {
        id: 44,
        question: "What is fail-fast?",
        options: [
          "Throws ConcurrentModificationException",
          "Continues despite modifications",
          "Ignores modifications",
          "Handles modifications",
        ],
        correctAnswer: 0,
      },
      {
        id: 45,
        question: "What is fail-safe?",
        options: [
          "Doesn't throw on modification",
          "Throws exception",
          "Stops on modification",
          "Ignores modification",
        ],
        correctAnswer: 0,
      },
      {
        id: 46,
        question: "What is CopyOnWriteArrayList?",
        options: ["Thread-safe list", "Fail-safe list", "Copy on write", "All"],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "What is ConcurrentHashMap?",
        options: ["Thread-safe map", "Concurrent map", "Lock-striping", "All"],
        correctAnswer: 3,
      },
      {
        id: 48,
        question: "What is BlockingQueue?",
        options: [
          "Thread-safe queue",
          "Blocks when empty/full",
          "Producer-consumer",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 49,
        question: "What is ExecutorService?",
        options: [
          "Thread pool management",
          "Task execution",
          "Async operations",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 50,
        question: "What is Callable?",
        options: [
          "Returns result",
          "Can throw exception",
          "Task with return",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "What is Future?",
        options: [
          "Represents async result",
          "Gets result later",
          "Cancellable",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 52,
        question: "What is CompletableFuture?",
        options: ["Composable async", "Chainable", "Exception handling", "All"],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "What is ForkJoinPool?",
        options: [
          "Work-stealing pool",
          "Divide-and-conquer",
          "Parallel tasks",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 54,
        question: "What is Phaser?",
        options: [
          "Reusable barrier",
          "Multi-phase synchronization",
          "Dynamic parties",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 55,
        question: "What is CountDownLatch?",
        options: [
          "One-time barrier",
          "Waits for countdown",
          "Thread coordination",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "What is CyclicBarrier?",
        options: [
          "Reusable barrier",
          "Resets after use",
          "Thread coordination",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "What is Semaphore?",
        options: [
          "Controls access",
          "Counting semaphore",
          "Resource management",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 58,
        question: "What is Exchanger?",
        options: [
          "Exchanges data",
          "Point-to-point",
          "Thread coordination",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 59,
        question: "What is StampedLock?",
        options: [
          "Optimistic locking",
          "Read/write lock",
          "Stamped lock",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "What is ReentrantLock?",
        options: [
          "Reentrant mutual exclusion",
          "Extended features",
          "Condition support",
          "All",
        ],
        correctAnswer: 3,
      },
    ],
    advanced: [
      {
        id: 1,
        question: "Which is Java 9 module system?",
        options: ["JPMS", "Jigsaw", "Modules", "All"],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: "Which GC focuses on low pause?",
        options: ["G1 GC", "Serial GC", "Parallel GC", "CMS"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What are records?",
        options: ["Immutable data", "Pattern matching", "Java 14+", "All"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "Which provides reactive streams?",
        options: ["Flow API", "Reactive Streams", "Both", "Neither"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Deprecation annotation?",
        options: ["@Deprecated", "@deprecated", "@Obsolete", "@Remove"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which analyzes bytecode?",
        options: ["jvisualvm", "javap", "jmap", "jstack"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Auto-closing resources?",
        options: ["try-with-resources", "finally", "AutoClose", "resource"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which loads app classes?",
        options: ["Application ClassLoader", "Bootstrap", "Platform", "Custom"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Local variable inference?",
        options: ["var", "let", "auto", "type"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Modern date formatting?",
        options: [
          "java.time",
          "DateTimeFormatter",
          "SimpleDateFormat",
          "Both A and B",
        ],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "What is java.lang.invoke?",
        options: [
          "Method handles",
          "Dynamic language",
          "Method invocation",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 12,
        question: "Multiple inheritance of type?",
        options: ["Interfaces", "Abstract classes", "Mixins", "Not supported"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is jlink?",
        options: ["Custom runtime", "Links classes", "Optimizes", "Debugs"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Generate boilerplate?",
        options: ["@Generated", "@AutoValue", "@Builder", "All"],
        correctAnswer: 3,
      },
      {
        id: 15,
        question: "What is ServiceLoader?",
        options: [
          "Loads services",
          "Manages services",
          "Discovers services",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 16,
        question: "Pattern matching instanceof?",
        options: ["Enhanced instanceof", "Smart casting", "Java 16+", "All"],
        correctAnswer: 3,
      },
      {
        id: 17,
        question: "What is jshell?",
        options: ["REPL", "Shell execution", "Debug", "Test"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Repeatable annotations?",
        options: ["@Repeatable", "@Repeated", "@Multiple", "@Container"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is ForkJoinPool?",
        options: [
          "Divide-and-conquer",
          "Parallel tasks",
          "Work-stealing",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Sealed classes?",
        options: [
          "Restricted inheritance",
          "Java 17+",
          "Controlled subclasses",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 21,
        question: "What is jstat?",
        options: ["JVM statistics", "Profile", "Debug", "Analyze bytecode"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Non-null annotation?",
        options: ["@NonNull", "@NotNull", "@Nonnull", "All"],
        correctAnswer: 3,
      },
      {
        id: 23,
        question: "What is java.lang.ref?",
        options: ["References", "Weak references", "Memory management", "All"],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "Local type inference?",
        options: ["var", "auto", "let", "type"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is jstack?",
        options: ["Thread dumps", "Stack trace", "Debug", "Profile"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Safe varargs?",
        options: [
          "@SafeVarargs",
          "@VarargsSafe",
          "@SafeVariableArgs",
          "@Varargs",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is atomic package?",
        options: ["Atomic operations", "Concurrent access", "Lock-free", "All"],
        correctAnswer: 3,
      },
      {
        id: 28,
        question: "Text blocks?",
        options: ["Multiline strings", "Java 15+", "Raw strings", "All"],
        correctAnswer: 3,
      },
      {
        id: 29,
        question: "What is jinfo?",
        options: ["Configuration info", "Set properties", "Debug", "Profile"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Functional interface?",
        options: [
          "@FunctionalInterface",
          "@FunctionInterface",
          "@LambdaInterface",
          "@Functional",
        ],
        correctAnswer: 0,
      },
      {
        id: 31,
        question: "What is locks package?",
        options: ["Locking mechanisms", "Concurrency", "Custom locks", "All"],
        correctAnswer: 3,
      },
      {
        id: 32,
        question: "Switch expressions?",
        options: ["Expression switch", "Enhanced switch", "Java 14+", "All"],
        correctAnswer: 3,
      },
      {
        id: 33,
        question: "What is jmap?",
        options: ["Memory maps", "Heap dump", "Profile memory", "All"],
        correctAnswer: 3,
      },
      {
        id: 34,
        question: "Constructor injection?",
        options: ["@Inject", "@Autowired", "@Resource", "All"],
        correctAnswer: 3,
      },
      {
        id: 35,
        question: "What is BlockingQueue?",
        options: [
          "Producer-consumer",
          "Concurrent queues",
          "Thread-safe",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 36,
        question: "Record classes?",
        options: ["Data classes", "Java 16+", "Immutable", "All"],
        correctAnswer: 3,
      },
      {
        id: 37,
        question: "What is jcmd?",
        options: ["Diagnostic commands", "Debug", "Profile", "Monitor"],
        correctAnswer: 0,
      },
      {
        id: 38,
        question: "Method retry?",
        options: ["@Retryable", "@Retry", "@Repeat", "@Reattempt"],
        correctAnswer: 0,
      },
      {
        id: 39,
        question: "What is ConcurrentHashMap?",
        options: [
          "Thread-safe map",
          "Concurrent access",
          "Lock-striping",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 40,
        question: "Pattern matching switch?",
        options: ["Pattern switch", "Enhanced switch", "Java 17+", "All"],
        correctAnswer: 3,
      },
      {
        id: 41,
        question: "What is jdb?",
        options: ["Debug", "Profile", "Monitor", "Analyze bytecode"],
        correctAnswer: 0,
      },
      {
        id: 42,
        question: "Method caching?",
        options: ["@Cacheable", "@Cache", "@Cached", "@Memoize"],
        correctAnswer: 0,
      },
      {
        id: 43,
        question: "What is Executors?",
        options: ["Thread pools", "Executors", "Concurrent tasks", "All"],
        correctAnswer: 3,
      },
      {
        id: 44,
        question: "Foreign function?",
        options: [
          "FFM API",
          "JNI enhancements",
          "Native interface",
          "Java 16+",
        ],
        correctAnswer: 0,
      },
      {
        id: 45,
        question: "What is jhat?",
        options: [
          "Heap analysis",
          "Profile memory",
          "Debug leaks",
          "Monitor memory",
        ],
        correctAnswer: 0,
      },
      {
        id: 46,
        question: "Method validation?",
        options: ["@Valid", "@Validate", "@Constraint", "All"],
        correctAnswer: 3,
      },
      {
        id: 47,
        question: "What is Semaphore?",
        options: [
          "Controls access",
          "Counting semaphore",
          "Resource management",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 48,
        question: "Virtual threads?",
        options: ["Lightweight threads", "Project Loom", "Java 19+", "All"],
        correctAnswer: 3,
      },
      {
        id: 49,
        question: "What is jstatd?",
        options: ["Remote monitoring", "Profile", "Debug", "Analyze bytecode"],
        correctAnswer: 0,
      },
      {
        id: 50,
        question: "Method security?",
        options: ["@Secured", "@PreAuthorize", "@RolesAllowed", "All"],
        correctAnswer: 3,
      },
      {
        id: 51,
        question: "What is CyclicBarrier?",
        options: [
          "Synchronizes threads",
          "Reusable barrier",
          "Multi-phase",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 52,
        question: "Structured concurrency?",
        options: [
          "Structured task scope",
          "Java 19+",
          "Enhanced concurrency",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 53,
        question: "What is jconsole?",
        options: ["JVM monitoring", "Profile", "Debug", "Analyze bytecode"],
        correctAnswer: 0,
      },
      {
        id: 54,
        question: "Method transaction?",
        options: ["@Transactional", "@Transaction", "@Tx", "@Transact"],
        correctAnswer: 0,
      },
      {
        id: 55,
        question: "What is Exchanger?",
        options: [
          "Exchanges data",
          "Point-to-point",
          "Thread synchronization",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 56,
        question: "Vector API?",
        options: ["SIMD instructions", "Vector operations", "Java 16+", "All"],
        correctAnswer: 3,
      },
      {
        id: 57,
        question: "What is jps?",
        options: ["JVM processes", "Profile", "Debug", "Analyze bytecode"],
        correctAnswer: 0,
      },
      {
        id: 58,
        question: "Performance monitoring?",
        options: ["@Timed", "@Monitor", "@Profile", "@Performance"],
        correctAnswer: 0,
      },
      {
        id: 59,
        question: "What is Phaser?",
        options: [
          "Phased synchronization",
          "Reusable barrier",
          "Multi-phase operations",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 60,
        question: "Scoped values?",
        options: ["Java 20+", "Unscoped values", "Value ownership", "All"],
        correctAnswer: 0,
      },
      {
        id: 61,
        question: "What is JVM TI?",
        options: [
          "Tool Interface",
          "Debug interface",
          "Profile interface",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 62,
        question: "What is JMX?",
        options: [
          "Java Management Extensions",
          "Monitoring",
          "Management",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 63,
        question: "What is JFR?",
        options: [
          "Flight Recorder",
          "Diagnostic tool",
          "Performance tool",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 64,
        question: "What is JMC?",
        options: [
          "Mission Control",
          "Monitoring tool",
          "Diagnostic tool",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 65,
        question: "What is JNI?",
        options: [
          "Native Interface",
          "C/C++ integration",
          "Platform-specific",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 66,
        question: "What is JNA?",
        options: ["Native Access", "Simpler than JNI", "Library access", "All"],
        correctAnswer: 3,
      },
      {
        id: 67,
        question: "What is JPA?",
        options: ["Persistence API", "ORM standard", "Database access", "All"],
        correctAnswer: 3,
      },
      {
        id: 68,
        question: "What is CDI?",
        options: [
          "Contexts and Dependency Injection",
          "Dependency injection",
          "Context management",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 69,
        question: "What is Bean Validation?",
        options: ["Validation API", "Constraints", "Data validation", "All"],
        correctAnswer: 3,
      },
      {
        id: 70,
        question: "What is JAX-RS?",
        options: ["REST API", "Web services", "HTTP API", "All"],
        correctAnswer: 3,
      },
      {
        id: 71,
        question: "What is JAX-WS?",
        options: ["Web Services", "SOAP", "XML web services", "All"],
        correctAnswer: 3,
      },
      {
        id: 72,
        question: "What is JMS?",
        options: ["Messaging Service", "Message queues", "Pub/sub", "All"],
        correctAnswer: 3,
      },
      {
        id: 73,
        question: "What is JTA?",
        options: [
          "Transaction API",
          "Distributed transactions",
          "Transaction management",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 74,
        question: "What is JCA?",
        options: [
          "Connector Architecture",
          "Enterprise integration",
          "Resource adapters",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 75,
        question: "What is JCE?",
        options: ["Cryptography Extension", "Encryption", "Security", "All"],
        correctAnswer: 3,
      },
      {
        id: 76,
        question: "What is JSSE?",
        options: [
          "Secure Socket Extension",
          "SSL/TLS",
          "Secure communications",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 77,
        question: "What is JAAS?",
        options: [
          "Authentication and Authorization",
          "Security",
          "Login modules",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 78,
        question: "What is JAXB?",
        options: ["XML Binding", "XML to Java", "Java to XML", "All"],
        correctAnswer: 3,
      },
      {
        id: 79,
        question: "What is JAXP?",
        options: ["XML Processing", "XML parsing", "XSLT", "All"],
        correctAnswer: 3,
      },
      {
        id: 80,
        question: "What is JNDI?",
        options: [
          "Naming and Directory",
          "Resource lookup",
          "Directory services",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 81,
        question: "What is RMI?",
        options: [
          "Remote Method Invocation",
          "Distributed computing",
          "Remote objects",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 82,
        question: "What is CORBA?",
        options: [
          "Common Object Request Broker",
          "Distributed objects",
          "Language-neutral",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 83,
        question: "What is JMH?",
        options: [
          "Microbenchmark Harness",
          "Performance testing",
          "Benchmarking",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 84,
        question: "What is JUnit?",
        options: [
          "Testing framework",
          "Unit testing",
          "Test automation",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 85,
        question: "What is TestNG?",
        options: [
          "Testing framework",
          "Advanced features",
          "Annotations",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 86,
        question: "What is Mockito?",
        options: ["Mocking framework", "Test doubles", "Unit testing", "All"],
        correctAnswer: 3,
      },
      {
        id: 87,
        question: "What is PowerMock?",
        options: ["Extended mocking", "Static mocking", "Final mocking", "All"],
        correctAnswer: 3,
      },
      {
        id: 88,
        question: "What is AssertJ?",
        options: [
          "Assertion library",
          "Fluent assertions",
          "Readable tests",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 89,
        question: "What is Hamcrest?",
        options: [
          "Matcher library",
          "Expressive tests",
          "Readable assertions",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 90,
        question: "What is JaCoCo?",
        options: ["Code coverage", "Test coverage", "Metrics", "All"],
        correctAnswer: 3,
      },
      {
        id: 91,
        question: "What is SonarQube?",
        options: [
          "Code quality",
          "Static analysis",
          "Continuous inspection",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 92,
        question: "What is Checkstyle?",
        options: ["Code style", "Coding standards", "Static analysis", "All"],
        correctAnswer: 3,
      },
      {
        id: 93,
        question: "What is PMD?",
        options: ["Static analysis", "Code quality", "Bug detection", "All"],
        correctAnswer: 3,
      },
      {
        id: 94,
        question: "What is FindBugs?",
        options: [
          "Bug detection",
          "Static analysis",
          "Bytecode analysis",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 95,
        question: "What is SpotBugs?",
        options: [
          "FindBugs successor",
          "Static analysis",
          "Bug detection",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 96,
        question: "What is Error Prone?",
        options: ["Static analysis", "Bug detection", "Compiler plugin", "All"],
        correctAnswer: 3,
      },
      {
        id: 97,
        question: "What is NullAway?",
        options: [
          "Null safety",
          "Static analysis",
          "Null pointer prevention",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 98,
        question: "What is ArchUnit?",
        options: [
          "Architecture testing",
          "Dependency checks",
          "Architecture rules",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 99,
        question: "What is Pitest?",
        options: [
          "Mutation testing",
          "Test quality",
          "Mutation analysis",
          "All",
        ],
        correctAnswer: 3,
      },
      {
        id: 100,
        question: "What is Gatling?",
        options: [
          "Load testing",
          "Performance testing",
          "Stress testing",
          "All",
        ],
        correctAnswer: 3,
      },
    ],
  },

  // Python

  python: {
    basic: [
      { id: 1, question: "What does the `len()` function return for an empty list?", options: ["0", "None", "Error", "1"], correctAnswer: 0 },
      { id: 2, question: "Which operator checks if two values are equal in Python?", options: ["=", "==", "===", "equals"], correctAnswer: 1 },
      { id: 3, question: "What is the output of `print(type(3.14))`?", options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'decimal'>"], correctAnswer: 1 },
      { id: 4, question: "Which method removes and returns the last item from a list?", options: ["pop()", "remove()", "delete()", "cut()"], correctAnswer: 0 },
      { id: 5, question: "How do you create a tuple with one element?", options: ["(1)", "(1,)", "[1]", "{1}"], correctAnswer: 1 },
      { id: 6, question: "What does `range(3)` generate?", options: ["[0, 1, 2]", "[1, 2, 3]", "[3]", "[0, 3]"], correctAnswer: 0 },
      { id: 7, question: "Which keyword is used to import modules?", options: ["include", "import", "require", "using"], correctAnswer: 1 },
      { id: 8, question: "What is the result of `'abc' + 'def'`?", options: ["'abcdef'", "'abc+def'", "Error", "None"], correctAnswer: 0 },
      { id: 9, question: "Which of these is a valid dictionary key?", options: ["[1, 2]", "{1: 2}", "(1, 2)", "All of these"], correctAnswer: 2 },
      { id: 10, question: "What does `bool(0)` return?", options: ["True", "False", "None", "0"], correctAnswer: 1 },
      { id: 11, question: "Which method converts a string to lowercase?", options: [".lower()", ".tolower()", ".casefold()", ".downcase()"], correctAnswer: 0 },
      { id: 12, question: "What is the output of `2 * 'ab'`?", options: ["'abab'", "'2ab'", "Error", "'ab2'"], correctAnswer: 0 },
      { id: 13, question: "Which function creates a sequence of numbers?", options: ["seq()", "range()", "sequence()", "numbers()"], correctAnswer: 1 },
      { id: 14, question: "What does `help()` function do?", options: ["Provides help about modules, classes, functions", "Asks for user help", "Creates help documentation", "None"], correctAnswer: 0 },
      { id: 15, question: "Which module is used for mathematical operations?", options: ["math", "calc", "arithmetic", "numpy"], correctAnswer: 0 },
      { id: 16, question: "What is the result of `3 // 2`?", options: ["1.5", "1", "2", "Error"], correctAnswer: 1 },
      { id: 17, question: "Which keyword stops the current iteration and continues with next?", options: ["break", "continue", "pass", "skip"], correctAnswer: 1 },
      { id: 18, question: "What is `None` in Python?", options: ["A special value representing 'nothing'", "Same as 0", "Same as False", "An empty string"], correctAnswer: 0 },
      { id: 19, question: "Which function reads input from user?", options: ["input()", "read()", "get()", "scan()"], correctAnswer: 0 },
      { id: 20, question: "What is the output of `'hello'.replace('l', 's')`?", options: ["'hesso'", "'hello'", "'heslo'", "'hess'"], correctAnswer: 0 },
      { id: 21, question: "Which method checks if a string starts with specific characters?", options: [".startswith()", ".beginwith()", ".first()", ".prefix()"], correctAnswer: 0 },
      { id: 22, question: "What does `list('abc')` return?", options: ["['a', 'b', 'c']", "['abc']", "[97, 98, 99]", "Error"], correctAnswer: 0 },
      { id: 23, question: "Which operator gives the remainder of division?", options: ["%", "//", "/", "rem"], correctAnswer: 0 },
      { id: 24, question: "What is `max(1, 2, 3)`?", options: ["3", "6", "1", "Error"], correctAnswer: 0 },
      { id: 25, question: "How do you convert an integer to string?", options: ["str()", "string()", "toString()", "chr()"], correctAnswer: 0 },
      { id: 26, question: "Which keyword defines an anonymous function?", options: ["lambda", "def", "function", "anon"], correctAnswer: 0 },
      { id: 27, question: "What is the output of `not True`?", options: ["False", "True", "None", "Error"], correctAnswer: 0 },
      { id: 28, question: "Which module provides operating system functionality?", options: ["os", "sys", "system", "platform"], correctAnswer: 0 },
      { id: 29, question: "What does `'text'.split()` return by default?", options: ["['t', 'e', 'x', 't']", "['text']", "['te', 'xt']", "Error"], correctAnswer: 1 },
      { id: 30, question: "Which is the correct way to check if a list is empty?", options: ["if list == []", "if not list", "if len(list) == 0", "All of these"], correctAnswer: 3 }
    ],
    intermediate: [
      { id: 1, question: "What does `__name__ == '__main__'` check?", options: ["If script is being run directly", "If module is imported", "If main function exists", "If name is main"], correctAnswer: 0 },
      { id: 2, question: "Which method is called when using `with` statement?", options: ["__enter__ and __exit__", "__start__ and __end__", "__init__ and __del__", "__open__ and __close__"], correctAnswer: 0 },
      { id: 3, question: "What is the purpose of `itertools` module?", options: ["Tools for efficient looping", "Math functions", "Testing tools", "File operations"], correctAnswer: 0 },
      { id: 4, question: "Which decorator caches function results?", options: ["@lru_cache", "@cache", "@memoize", "@remember"], correctAnswer: 0 },
      { id: 5, question: "What does `collections.defaultdict` do?", options: ["Provides default values for missing keys", "Sorts dictionary", "Counts elements", "Groups items"], correctAnswer: 0 },
      { id: 6, question: "Which method makes a class iterable?", options: ["Implement __iter__", "Implement __next__", "Both", "Use yield"], correctAnswer: 2 },
      { id: 7, question: "What is `__all__` in a module?", options: ["List of exported names", "All functions", "All variables", "Module documentation"], correctAnswer: 0 },
      { id: 8, question: "Which function creates a shallow copy?", options: ["copy.copy()", "copy.deepcopy()", "object.clone()", "list.copy()"], correctAnswer: 0 },
      { id: 9, question: "What is the MRO (Method Resolution Order)?", options: ["Order Python searches for methods in class hierarchy", "Memory read order", "Module load order", "Method return order"], correctAnswer: 0 },
      { id: 10, question: "Which module handles command line arguments?", options: ["argparse", "getopt", "sys.argv", "All of these"], correctAnswer: 3 },
      { id: 11, question: "What is a descriptor?", options: ["Object with __get__, __set__, or __delete__ methods", "File descriptor", "Function description", "Class documentation"], correctAnswer: 0 },
      { id: 12, question: "Which function applies function to pairs?", options: ["functools.reduce()", "map()", "filter()", "zip()"], correctAnswer: 0 },
      { id: 13, question: "What does `property()` function create?", options: ["Managed attribute access", "Class property", "Object property", "All of these"], correctAnswer: 0 },
      { id: 14, question: "Which module provides weak references?", options: ["weakref", "gc", "memory", "ref"], correctAnswer: 0 },
      { id: 15, question: "What is monkey patching?", options: ["Modifying code at runtime", "Fixing monkey-related bugs", "A testing pattern", "Code optimization"], correctAnswer: 0 },
      { id: 16, question: "Which decorator makes method static?", options: ["@staticmethod", "@classmethod", "@property", "@function"], correctAnswer: 0 },
      { id: 17, question: "What is `__slots__` used for?", options: ["Save memory by preventing dict creation", "Create time slots", "Define slots for data", "Memory allocation"], correctAnswer: 0 },
      { id: 18, question: "Which module provides enum support?", options: ["enum", "Enum", "both", "neither"], correctAnswer: 2 },
      { id: 19, question: "What does `inspect` module do?", options: ["Examine live objects", "Inspect code quality", "Check syntax", "Debug"], correctAnswer: 0 },
      { id: 20, question: "Which function gets object's attributes?", options: ["dir()", "help()", "vars()", "All"], correctAnswer: 3 },
      { id: 21, question: "What is a metaclass?", options: ["Class of a class", "Meta programming class", "Abstract class", "Template class"], correctAnswer: 0 },
      { id: 22, question: "Which module provides context variables?", options: ["contextvars", "threading", "asyncio", "multiprocessing"], correctAnswer: 0 },
      { id: 23, question: "What is `__call__` method for?", options: ["Make instances callable", "Call function", "Call parent class", "Callback"], correctAnswer: 0 },
      { id: 24, question: "Which function creates partial functions?", options: ["functools.partial()", "partial()", "functools.bind()", "bind()"], correctAnswer: 0 },
      { id: 25, question: "What does `sys.setrecursionlimit()` do?", options: ["Set maximum recursion depth", "Limit system recursion", "Prevent recursion", "Optimize recursion"], correctAnswer: 0 },
      { id: 26, question: "Which module provides performance measurement?", options: ["timeit", "profile", "cProfile", "All"], correctAnswer: 3 },
      { id: 27, question: "What is `__getattr__` vs `__getattribute__`?", options: ["__getattr__ for missing, __getattribute__ for all", "Both same", "Opposite", "No difference"], correctAnswer: 0 },
      { id: 28, question: "Which decorator creates singleton?", options: ["Custom decorator", "@singleton", "@staticmethod", "No built-in"], correctAnswer: 3 },
      { id: 29, question: "What is the Expression Problem?", options: ["Extending types and operations", "Expression evaluation", "Math problem", "Syntax issue"], correctAnswer: 0 },
      { id: 30, question: "Which module provides abstract base classes?", options: ["abc", "abstract", "base", "ABC"], correctAnswer: 0 },
      { id: 31, question: "What is `__subclasshook__`?", options: ["Customize isinstance checks", "Hook for subclasses", "Class hook", "Subclass method"], correctAnswer: 0 },
      { id: 32, question: "Which function gets memory size?", options: ["sys.getsizeof()", "memory.size()", "obj.__sizeof__()", "Both 1 and 3"], correctAnswer: 3 },
      { id: 33, question: "What is a sentinel value?", options: ["Special value indicating condition", "Guard value", "Signal value", "All"], correctAnswer: 3 },
      { id: 34, question: "Which module handles at-exit functions?", options: ["atexit", "sys.exitfunc", "exit", "finalize"], correctAnswer: 0 },
      { id: 35, question: "What is Liskov Substitution Principle?", options: ["Subtypes must be substitutable", "Class substitution", "Type safety", "Inheritance rule"], correctAnswer: 0 },
      { id: 36, question: "Which module provides temporary files?", options: ["tempfile", "tmpfile", "temp", "temporary"], correctAnswer: 0 },
      { id: 37, question: "What is `__debug__`?", options: ["Built-in constant", "Debug mode flag", "Boolean", "All"], correctAnswer: 3 },
      { id: 38, question: "Which function gets source code?", options: ["inspect.getsource()", "source()", "code()", "getsource()"], correctAnswer: 0 },
      { id: 39, question: "What is a mixin class?", options: ["Provides functionality to multiple classes", "Mixes classes", "Combination class", "Abstract class"], correctAnswer: 0 },
      { id: 40, question: "Which module provides configuration files?", options: ["configparser", "json", "yaml", "All"], correctAnswer: 3 },
      { id: 41, question: "What is `__repr__` vs `__str__`?", options: ["__repr__ for developers, __str__ for users", "Same", "Opposite", "No difference"], correctAnswer: 0 },
      { id: 42, question: "Which function gets current frame?", options: ["inspect.currentframe()", "sys._getframe()", "Both", "None"], correctAnswer: 2 },
      { id: 43, question: "What is a factory function?", options: ["Returns objects", "Creates factories", "Manufactures objects", "All"], correctAnswer: 0 },
      { id: 44, question: "Which module provides logging?", options: ["logging", "log", "logger", "syslog"], correctAnswer: 0 },
      { id: 45, question: "What is `__new__` method?", options: ["Creates instance", "Before __init__", "Class method", "All"], correctAnswer: 3 },
      { id: 46, question: "Which module provides CSV handling?", options: ["csv", "pandas", "numpy", "All"], correctAnswer: 0 },
      { id: 47, question: "What is a frozen set?", options: ["Immutable set", "Frozen collection", "Static set", "All"], correctAnswer: 0 },
      { id: 48, question: "Which function gets traceback?", options: ["traceback.extract_stack()", "sys.exc_info()", "Both", "None"], correctAnswer: 2 },
      { id: 49, question: "What is `__doc__`?", options: ["Documentation string", "Docstring", "Both", "None"], correctAnswer: 2 },
      { id: 50, question: "Which module provides SQLite?", options: ["sqlite3", "sqlite", "db.sqlite", "database"], correctAnswer: 0 },
      { id: 51, question: "What is a context manager?", options: ["Manages resources with with", "Context handler", "Resource manager", "All"], correctAnswer: 3 },
      { id: 52, question: "Which function gets bytecode?", options: ["dis.dis()", "compile()", "Both", "None"], correctAnswer: 2 },
      { id: 53, question: "What is `__file__`?", options: ["Module's filename", "File path", "Both", "None"], correctAnswer: 2 },
      { id: 54, question: "Which module provides regex?", options: ["re", "regex", "Both", "None"], correctAnswer: 2 },
      { id: 55, question: "What is a decorator with arguments?", options: ["Returns decorator", "Two-level function", "Both", "None"], correctAnswer: 2 },
      { id: 56, question: "Which function gets function signature?", options: ["inspect.signature()", "signature()", "Both", "None"], correctAnswer: 0 },
      { id: 57, question: "What is `__annotations__`?", options: ["Type annotations dict", "Function annotations", "Both", "None"], correctAnswer: 2 },
      { id: 58, question: "Which module provides XML?", options: ["xml.etree.ElementTree", "xml.dom", "xml.sax", "All"], correctAnswer: 3 },
      { id: 59, question: "What is a coroutine?", options: ["Async function", "Generators with await", "Both", "None"], correctAnswer: 2 },
      { id: 60, question: "Which function gets module imports?", options: ["sys.modules", "importlib", "Both", "None"], correctAnswer: 2 }
    ],
    advanced: [
      { id: 1, question: "What is the GIL (Global Interpreter Lock)?", options: ["Allows one thread at a time", "Global lock", "Performance limitation", "All"], correctAnswer: 3 },
      { id: 2, question: "How does Python memory management work?", options: ["Reference counting + GC", "Mark and sweep", "Both", "Manual"], correctAnswer: 2 },
      { id: 3, question: "What are Python's memory views?", options: ["Memory buffer interface", "View objects", "Both", "None"], correctAnswer: 2 },
      { id: 4, question: "How to implement custom memory allocator?", options: ["PyMem_* API", "Custom C extension", "Both", "Cannot"], correctAnswer: 2 },
      { id: 5, question: "What is the Python C API?", options: ["C interface to Python", "Extension API", "Both", "None"], correctAnswer: 2 },
      { id: 6, question: "How does Python's import system work?", options: ["Finders and loaders", "sys.path", "Both", "Simple import"], correctAnswer: 2 },
      { id: 7, question: "What is `__pycache__`?", options: ["Bytecode cache", "Compiled files", "Both", "Temporary"], correctAnswer: 2 },
      { id: 8, question: "How to optimize Python with Cython?", options: ["Static typing", "C compilation", "Both", "Not possible"], correctAnswer: 2 },
      { id: 9, question: "What are Python's weak references?", options: ["Don't prevent garbage collection", "Weak refs", "Both", "Strong refs"], correctAnswer: 2 },
      { id: 10, question: "How does asyncio event loop work?", options: ["Single-threaded concurrency", "Event-driven", "Both", "Multi-threaded"], correctAnswer: 2 },
      { id: 11, question: "What are Python's metaclass conflicts?", options: ["Multiple metaclasses", "Resolution issues", "Both", "No conflicts"], correctAnswer: 2 },
      { id: 12, question: "How to implement descriptor protocol?", options: ["__get__, __set__, __delete__", "Property-like", "Both", "Simple"], correctAnswer: 2 },
      { id: 13, question: "What is the MRO C3 linearization?", options: ["Method resolution algorithm", "DFS", "Both", "BFS"], correctAnswer: 0 },
      { id: 14, question: "How does Python's garbage collection work?", options: ["Generational GC", "Reference cycles", "Both", "Simple"], correctAnswer: 2 },
      { id: 15, question: "What are Python's coroutine internals?", options: ["Generators + async/await", "Stackless", "Both", "Threads"], correctAnswer: 2 },
      { id: 16, question: "How to write C extensions for Python?", options: ["Python.h", "Cython", "Both", "C++"], correctAnswer: 2 },
      { id: 17, question: "What is Python's bytecode optimization?", options: ["peephole optimizer", "Bytecode manipulation", "Both", "None"], correctAnswer: 2 },
      { id: 18, question: "How does Python's multiprocessing work?", options: ["Process-based parallelism", "Avoids GIL", "Both", "Thread-based"], correctAnswer: 2 },
      { id: 19, question: "What are Python's slots limitations?", options: ["No __dict__", "No weakrefs", "Both", "No limits"], correctAnswer: 2 },
      { id: 20, question: "How to profile Python memory usage?", options: ["tracemalloc", "memory_profiler", "Both", "Cannot"], correctAnswer: 2 },
      { id: 21, question: "What is Python's GIL implementation?", options: ["PyThreadState", "Global mutex", "Both", "Simple lock"], correctAnswer: 2 },
      { id: 22, question: "How does Python's decorator chaining work?", options: ["Bottom-up application", "Nested decorators", "Both", "Top-down"], correctAnswer: 2 },
      { id: 23, question: "What are Python's __prepare__ method?", options: ["Namespace dict creation", "Metaclass method", "Both", "Class method"], correctAnswer: 2 },
      { id: 24, question: "How to implement context managers manually?", options: ["__enter__/__exit__", "contextlib", "Both", "with only"], correctAnswer: 2 },
      { id: 25, question: "What is Python's descriptor precedence?", options: ["Data vs non-data descriptors", "Lookup order", "Both", "No precedence"], correctAnswer: 2 },
      { id: 26, question: "How does Python's importlib work?", options: ["Programmatic imports", "Custom importers", "Both", "Simple"], correctAnswer: 2 },
      { id: 27, question: "What are Python's metaclass parameters?", options: ["metaclass= in class", "Inheritance", "Both", "No parameters"], correctAnswer: 2 },
      { id: 28, question: "How to optimize Python with PyPy?", options: ["JIT compilation", "Optimizations", "Both", "Cannot"], correctAnswer: 2 },
      { id: 29, question: "What is Python's __reduce__ method?", options: ["Pickling control", "Serialization", "Both", "No method"], correctAnswer: 2 },
      { id: 30, question: "How does Python's coroutine delegation work?", options: ["yield from", "await", "Both", "No delegation"], correctAnswer: 2 },
      { id: 31, question: "What is Python's __getattribute__ optimization?", options: ["Method caching", "Lookup optimization", "Both", "No optimization"], correctAnswer: 2 },
      { id: 32, question: "How to implement Python protocols?", options: ["Duck typing", "Protocol classes", "Both", "Inheritance only"], correctAnswer: 2 },
      { id: 33, question: "What is Python's MRO diamond problem?", options: ["Multiple inheritance", "Ambiguity resolution", "Both", "No problem"], correctAnswer: 2 },
      { id: 34, question: "How does Python's async generators work?", options: ["async for", "async yield", "Both", "Cannot"], correctAnswer: 2 },
      { id: 35, question: "What is Python's __class_getitem__?", options: ["Generic type parameters", "PEP 560", "Both", "Class method"], correctAnswer: 2 },
      { id: 36, question: "How to implement Python's LRU cache?", options: ["OrderedDict", "functools.lru_cache", "Both", "Manual"], correctAnswer: 2 },
      { id: 37, question: "What is Python's __init_subclass__?", options: ["Class initialization hook", "PEP 487", "Both", "Metaclass"], correctAnswer: 2 },
      { id: 38, question: "How does Python's traceback work?", options: ["Exception chain", "Stack frames", "Both", "Simple"], correctAnswer: 2 },
      { id: 39, question: "What is Python's __set_name__?", options: ["Descriptor naming", "PEP 487", "Both", "Class method"], correctAnswer: 2 },
      { id: 40, question: "How to implement Python's async context managers?", options: ["__aenter__/__aexit__", "async with", "Both", "Cannot"], correctAnswer: 2 },
      { id: 41, question: "What is Python's __fspath__?", options: ["Path protocol", "PEP 519", "Both", "File system"], correctAnswer: 2 },
      { id: 42, question: "How does Python's descriptor inheritance work?", options: ["Class vs instance", "Lookup chain", "Both", "Simple"], correctAnswer: 2 },
      { id: 43, question: "What is Python's __orig_bases__?", options: ["Generic bases", "typing", "Both", "Original"], correctAnswer: 2 },
      { id: 44, question: "How to implement Python's data classes?", options: ["dataclasses", "PEP 557", "Both", "Manual"], correctAnswer: 2 },
      { id: 45, question: "What is Python's __getattr__ vs __getattribute__ performance?", options: ["__getattr__ slower", "Both matter", "No difference", "__getattribute__ slower"], correctAnswer: 0 },
      { id: 46, question: "How does Python's GIL affect C extensions?", options: ["Can release GIL", "Performance", "Both", "No effect"], correctAnswer: 2 },
      { id: 47, question: "What is Python's __text_signature__?", options: ["Signature for help()", "PEP 457", "Both", "Documentation"], correctAnswer: 2 },
      { id: 48, question: "How to implement Python's final classes?", options: ["typing.final", "PEP 591", "Both", "Cannot"], correctAnswer: 2 },
      { id: 49, question: "What is Python's __classcell__?", options: ["Zero-arg super()", "PEP 3155", "Both", "Cell variable"], correctAnswer: 2 },
      { id: 50, question: "How does Python's async iteration work?", options: ["__aiter__/__anext__", "async for", "Both", "Cannot"], correctAnswer: 2 },
      { id: 51, question: "What is Python's __post_init__?", options: ["dataclasses method", "After __init__", "Both", "No method"], correctAnswer: 2 },
      { id: 52, question: "How to implement Python's protocol checking?", options: ["typing.runtime_checkable", "isinstance", "Both", "Manual"], correctAnswer: 2 },
      { id: 53, question: "What is Python's __match_args__?", options: ["Pattern matching", "PEP 634", "Both", "No attribute"], correctAnswer: 2 },
      { id: 54, question: "How does Python's pattern matching work?", options: ["match/case", "Structural matching", "Both", "Switch"], correctAnswer: 2 },
      { id: 55, question: "What is Python's __parameters__?", options: ["Generic parameters", "typing", "Both", "Function params"], correctAnswer: 2 },
      { id: 56, question: "How to implement Python's self types?", options: ["typing.Self", "PEP 673", "Both", "Cannot"], correctAnswer: 2 },
      { id: 57, question: "What is Python's __wrapped__?", options: ["Decorator chain", "functools.wraps", "Both", "Wrapper"], correctAnswer: 2 },
      { id: 58, question: "How does Python's descriptor protocol work with properties?", options: ["property() uses descriptors", "Same protocol", "Both", "Different"], correctAnswer: 2 },
      { id: 59, question: "What is Python's __isabstractmethod__?", options: ["abc module", "Abstract method flag", "Both", "No attribute"], correctAnswer: 2 },
      { id: 60, question: "How to implement Python's cached properties?", options: ["functools.cached_property", "PEP 412", "Both", "Manual"], correctAnswer: 2 },
      { id: 61, question: "What is Python's __static_attributes__?", options: ["No such attribute", "Hypothetical", "Doesn't exist", "All"], correctAnswer: 3 },
      { id: 62, question: "How does Python's metaclass __prepare__ work?", options: ["Returns namespace dict", "Can be ordered dict", "Both", "Simple dict"], correctAnswer: 2 },
      { id: 63, question: "What is Python's __qualname__?", options: ["Qualified name", "Nested classes", "Both", "Simple name"], correctAnswer: 2 },
      { id: 64, question: "How to implement Python's context variables?", options: ["contextvars", "Async context", "Both", "Thread-local"], correctAnswer: 2 },
      { id: 65, question: "What is Python's __annotations__ storage?", options: ["Dict in __dict__", "Class attribute", "Both", "Special"], correctAnswer: 2 },
      { id: 66, question: "How does Python's GIL interact with signals?", options: ["Signal handling", "Interrupts", "Both", "No interaction"], correctAnswer: 2 },
      { id: 67, question: "What is Python's __exception__?", options: ["In except clause", "Exception instance", "Both", "No attribute"], correctAnswer: 2 },
      { id: 68, question: "How to implement Python's async comprehensions?", options: ["async for in comprehension", "PEP 530", "Both", "Cannot"], correctAnswer: 2 },
      { id: 69, question: "What is Python's __traceback__?", options: ["Exception attribute", "Traceback object", "Both", "Debug"], correctAnswer: 2 },
      { id: 70, question: "How does Python's memory allocator work?", options: ["pymalloc", "Arenas", "Both", "System malloc"], correctAnswer: 2 },
      { id: 71, question: "What is Python's __cause__?", options: ["Exception chaining", "raise from", "Both", "No attribute"], correctAnswer: 2 },
      { id: 72, question: "How to implement Python's dataclass inheritance?", options: ["Combines fields", "Method resolution", "Both", "Simple"], correctAnswer: 2 },
      { id: 73, question: "What is Python's __context__?", options: ["Exception context", "Implicit chaining", "Both", "No attribute"], correctAnswer: 2 },
      { id: 74, question: "How does Python's import system cache work?", options: ["sys.modules", "Module cache", "Both", "No cache"], correctAnswer: 2 },
      { id: 75, question: "What is Python's __spec__?", options: ["Import spec", "PEP 451", "Both", "Module spec"], correctAnswer: 2 },
      { id: 76, question: "How to implement Python's final methods?", options: ["typing.final", "PEP 591", "Both", "@final"], correctAnswer: 2 },
      { id: 77, question: "What is Python's __override__?", options: ["PEP 698", "Explicit override", "Both", "No attribute"], correctAnswer: 2 },
      { id: 78, question: "How does Python's GIL affect I/O?", options: ["Released during I/O", "Performance", "Both", "No effect"], correctAnswer: 2 },
      { id: 79, question: "What is Python's __all__ limitations?", options: ["Only affects import *", "Module level", "Both", "No limits"], correctAnswer: 2 },
      { id: 80, question: "How to implement Python's protocol intersection?", options: ["typing.Protocol & Protocol", "Multiple protocols", "Both", "Cannot"], correctAnswer: 2 },
      { id: 81, question: "What is Python's __builtins__?", options: ["Built-in namespace", "Module", "Both", "Magic"], correctAnswer: 2 },
      { id: 82, question: "How does Python's metaclass conflict resolution work?", options: ["Most derived metaclass", "Inheritance", "Both", "Error"], correctAnswer: 2 },
      { id: 83, question: "What is Python's __loader__?", options: ["Module loader", "Import system", "Both", "Class loader"], correctAnswer: 2 },
      { id: 84, question: "How to implement Python's async protocols?", options: ["__aenter__, __aexit__, etc", "Async protocol", "Both", "Cannot"], correctAnswer: 2 },
      { id: 85, question: "What is Python's __warningregistry__?", options: ["Warning registry", "Module attribute", "Both", "Warning"], correctAnswer: 2 },
      { id: 86, question: "How does Python's garbage collection interact with __del__?", options: ["Reference cycles", "GC issues", "Both", "No interaction"], correctAnswer: 2 },
      { id: 87, question: "What is Python's __missing__?", options: ["dict subclass method", "Missing keys", "Both", "No method"], correctAnswer: 2 },
      { id: 88, question: "How to implement Python's context manager chaining?", options: ["Multiple with statements", "Contextlib.ExitStack", "Both", "Cannot"], correctAnswer: 2 },
      { id: 89, question: "What is Python's __subclasses__() limitation?", options: ["Only immediate subclasses", "Class method", "Both", "All subclasses"], correctAnswer: 0 },
      { id: 90, question: "How does Python's async await work with generators?", options: ["Similar mechanics", "Coroutine objects", "Both", "Different"], correctAnswer: 2 },
      { id: 91, question: "What is Python's __reduce_ex__?", options: ["Pickling protocol version", "Extension of __reduce__", "Both", "No method"], correctAnswer: 2 },
      { id: 92, question: "How to implement Python's generic self types?", options: ["typing.Self", "TypeVar", "Both", "Cannot"], correctAnswer: 2 },
      { id: 93, question: "What is Python's __sizeof__?", options: ["Memory size method", "sys.getsizeof()", "Both", "Size"], correctAnswer: 2 },
      { id: 94, question: "How does Python's metaclass __new__ work?", options: ["Creates class", "Before __init__", "Both", "After __init__"], correctAnswer: 2 },
      { id: 95, question: "What is Python's __basicsize__?", options: ["C API", "Type object", "Both", "Basic size"], correctAnswer: 2 },
      { id: 96, question: "How to implement Python's async descriptor?", options: ["__get__ returning awaitable", "Async property", "Both", "Cannot"], correctAnswer: 2 },
      { id: 97, question: "What is Python's __itemsize__?", options: ["C API", "Type object", "Both", "Item size"], correctAnswer: 2 },
      { id: 98, question: "How does Python's GIL implementation differ in PyPy?", options: ["No GIL in PyPy", "Different implementation", "Both", "Same"], correctAnswer: 1 },
      { id: 99, question: "What is Python's __dictoffset__?", options: ["C API", "__dict__ offset", "Both", "Dict offset"], correctAnswer: 2 },
      { id: 100, question: "How to implement Python's runtime protocol checking?", options: ["typing.runtime_checkable", "isinstance(Protocol)", "Both", "Manual checks"], correctAnswer: 2 }
    ]
  },
  cpp: {
    basic: [
      { id: 1, question: "What does `std::cout` represent?", options: ["Standard output stream", "Console output", "Both", "Input stream"], correctAnswer: 2 },
      { id: 2, question: "Which header is needed for `std::vector`?", options: ["<vector>", "<array>", "<list>", "<container>"], correctAnswer: 0 },
      { id: 3, question: "What is the size of `int` in bytes on 32-bit systems?", options: ["2", "4", "8", "Compiler dependent"], correctAnswer: 3 },
      { id: 4, question: "Which operator is used for pointer dereference?", options: ["&", "*", "->", "."], correctAnswer: 1 },
      { id: 5, question: "What does `nullptr` represent?", options: ["Null pointer", "Zero", "Both", "Invalid"], correctAnswer: 0 },
      { id: 6, question: "Which loop guarantees at least one execution?", options: ["for", "while", "do-while", "range-based for"], correctAnswer: 2 },
      { id: 7, question: "What is the default access specifier in a class?", options: ["public", "private", "protected", "package"], correctAnswer: 1 },
      { id: 8, question: "Which function is automatically called when object is created?", options: ["constructor", "destructor", "both", "none"], correctAnswer: 0 },
      { id: 9, question: "What does `const` after function signature mean?", options: ["Function doesn't modify object", "Constant return", "Both", "None"], correctAnswer: 0 },
      { id: 10, question: "Which operator is used for dynamic memory allocation?", options: ["malloc", "new", "alloc", "create"], correctAnswer: 1 },
      { id: 11, question: "What is the scope resolution operator?", options: [".", "::", "->", ":"], correctAnswer: 1 },
      { id: 12, question: "Which container provides LIFO behavior?", options: ["queue", "stack", "vector", "list"], correctAnswer: 1 },
      { id: 13, question: "What does `sizeof(char)` return?", options: ["1", "2", "4", "8"], correctAnswer: 0 },
      { id: 14, question: "Which keyword prevents function overriding?", options: ["final", "sealed", "static", "const"], correctAnswer: 0 },
      { id: 15, question: "What is the result of `5 / 2` in integer division?", options: ["2", "2.5", "2.0", "3"], correctAnswer: 0 },
      { id: 16, question: "Which header contains `std::string`?", options: ["<string>", "<cstring>", "<string.h>", "<str>"], correctAnswer: 0 },
      { id: 17, question: "What does `++i` do compared to `i++`?", options: ["Pre-increment", "Post-increment", "Same", "Different order"], correctAnswer: 0 },
      { id: 18, question: "Which type is used for boolean values?", options: ["bool", "Boolean", "bit", "flag"], correctAnswer: 0 },
      { id: 19, question: "What is the purpose of `#include`?", options: ["Include header", "Import module", "Both", "None"], correctAnswer: 0 },
      { id: 20, question: "Which operator checks address equality?", options: ["==", "=", "&", "==="], correctAnswer: 0 },
      { id: 21, question: "What does `std::endl` do?", options: ["Newline and flush", "Just newline", "End line", "Both 1 and 2"], correctAnswer: 0 },
      { id: 22, question: "Which is the correct main signature?", options: ["int main()", "void main()", "main()", "All"], correctAnswer: 0 },
      { id: 23, question: "What is a reference?", options: ["Alias for variable", "Pointer", "Both", "New variable"], correctAnswer: 0 },
      { id: 24, question: "Which operator accesses member via pointer?", options: [".", "->", "::", "*"], correctAnswer: 1 },
      { id: 25, question: "What does `const int* p` mean?", options: ["Pointer to constant int", "Constant pointer to int", "Both", "Constant pointer"], correctAnswer: 0 },
      { id: 26, question: "Which loop is range-based?", options: ["for(auto x: vec)", "for(int i=0; i<n; i++)", "while(true)", "do-while"], correctAnswer: 0 },
      { id: 27, question: "What is the ternary operator?", options: ["?:", "??", "if-else", "switch"], correctAnswer: 0 },
      { id: 28, question: "Which function terminates program?", options: ["exit()", "return", "Both", "abort()"], correctAnswer: 2 },
      { id: 29, question: "What is `auto` keyword for?", options: ["Type deduction", "Automatic variable", "Both", "None"], correctAnswer: 2 },
      { id: 30, question: "Which header has `std::sort`?", options: ["<algorithm>", "<sort>", "<vector>", "<array>"], correctAnswer: 0 }
    ],
    intermediate: [
      { id: 1, question: "What is RAII?", options: ["Resource Acquisition Is Initialization", "Memory management", "Both", "Design pattern"], correctAnswer: 0 },
      { id: 2, question: "Which smart pointer has shared ownership?", options: ["unique_ptr", "shared_ptr", "weak_ptr", "raw pointer"], correctAnswer: 1 },
      { id: 3, question: "What is move semantics?", options: ["Transfer ownership", "Efficient copying", "Both", "Memory move"], correctAnswer: 2 },
      { id: 4, question: "Which keyword prevents implicit conversions?", options: ["explicit", "implicit", "static", "const"], correctAnswer: 0 },
      { id: 5, question: "What is a lambda expression?", options: ["Anonymous function", "Function object", "Both", "Macro"], correctAnswer: 2 },
      { id: 6, question: "Which container has O(1) average lookup?", options: ["std::map", "std::unordered_map", "std::vector", "std::list"], correctAnswer: 1 },
      { id: 7, question: "What is SFINAE?", options: ["Substitution Failure Is Not An Error", "Template metaprogramming", "Both", "Compiler error"], correctAnswer: 2 },
      { id: 8, question: "Which function perfect-forwards arguments?", options: ["std::forward", "std::move", "Both", "std::transfer"], correctAnswer: 0 },
      { id: 9, question: "What is CRTP?", options: ["Curiously Recurring Template Pattern", "Static polymorphism", "Both", "Design pattern"], correctAnswer: 2 },
      { id: 10, question: "Which header provides threads?", options: ["<thread>", "<pthread>", "<concurrent>", "<async>"], correctAnswer: 0 },
      { id: 11, question: "What is `noexcept` specifier?", options: ["Won't throw exceptions", "Optimization hint", "Both", "Compile-time check"], correctAnswer: 2 },
      { id: 12, question: "Which function creates shared_ptr efficiently?", options: ["std::make_shared", "new + shared_ptr", "Both", "std::allocate_shared"], correctAnswer: 2 },
      { id: 13, question: "What is type erasure?", options: ["Hide concrete type", "std::any, std::function", "Both", "Template trick"], correctAnswer: 2 },
      { id: 14, question: "Which module system is in C++20?", options: ["Modules", "Headers", "Both", "Packages"], correctAnswer: 0 },
      { id: 15, question: "What are concepts?", options: ["Named constraints", "Template requirements", "Both", "Interfaces"], correctAnswer: 2 },
      { id: 16, question: "Which operator is three-way comparison?", options: ["<=>", "compare", "Both", "spaceship"], correctAnswer: 2 },
      { id: 17, question: "What is `constexpr`?", options: ["Compile-time evaluation", "Constant expression", "Both", "Runtime constant"], correctAnswer: 2 },
      { id: 18, question: "Which header has `std::optional`?", options: ["<optional>", "<variant>", "<any>", "<utility>"], correctAnswer: 0 },
      { id: 19, question: "What is ADL?", options: ["Argument-Dependent Lookup", "Koenig lookup", "Both", "Namespace lookup"], correctAnswer: 2 },
      { id: 20, question: "Which function safely compares floats?", options: ["std::isnan", "std::isinf", "std::fpclassify", "All"], correctAnswer: 3 },
      { id: 21, question: "What is the rule of three?", options: ["Destructor, copy constructor, copy assignment", "Memory rule", "Both", "Design rule"], correctAnswer: 2 },
      { id: 22, question: "Which header has `std::chrono`?", options: ["<chrono>", "<time>", "<ctime>", "<timer>"], correctAnswer: 0 },
      { id: 23, question: "What is `std::invoke`?", options: ["Invoke callable", "Uniform call", "Both", "Function call"], correctAnswer: 2 },
      { id: 24, question: "Which function gets type info?", options: ["typeid", "decltype", "Both", "typeof"], correctAnswer: 2 },
      { id: 25, question: "What is PIMPL?", options: ["Pointer to Implementation", "Compilation firewall", "Both", "Design pattern"], correctAnswer: 2 },
      { id: 26, question: "Which header has `std::filesystem`?", options: ["<filesystem>", "<fstream>", "<io>", "<path>"], correctAnswer: 0 },
      { id: 27, question: "What is `std::launder`?", options: ["Pointer optimization barrier", "Memory model", "Both", "Compile-time function"], correctAnswer: 2 },
      { id: 28, question: "Which function creates tuple?", options: ["std::make_tuple", "std::tie", "Both", "std::pair"], correctAnswer: 2 },
      { id: 29, question: "What is NVI?", options: ["Non-Virtual Interface", "Design pattern", "Both", "Virtual pattern"], correctAnswer: 2 },
      { id: 30, question: "Which header has `std::regex`?", options: ["<regex>", "<pattern>", "<string>", "<text>"], correctAnswer: 0 },
      { id: 31, question: "What is `std::byte`?", options: ["Byte type", "C++17 addition", "Both", "Character type"], correctAnswer: 2 },
      { id: 32, question: "Which function applies to tuple?", options: ["std::apply", "std::make_from_tuple", "Both", "std::invoke"], correctAnswer: 2 },
      { id: 33, question: "What is `[[nodiscard]]`?", options: ["Attribute", "Warn if unused", "Both", "Compile-time"], correctAnswer: 2 },
      { id: 34, question: "Which header has `std::span`?", options: ["<span>", "<array>", "<vector>", "<ranges>"], correctAnswer: 0 },
      { id: 35, question: "What is `std::any`?", options: ["Type-safe container for any", "C++17", "Both", "Variant"], correctAnswer: 2 },
      { id: 36, question: "Which function creates variant?", options: ["std::visit", "std::variant", "Both", "std::holds_alternative"], correctAnswer: 2 },
      { id: 37, question: "What is `[[likely]]`?", options: ["Branch hint", "Optimization", "Both", "Attribute"], correctAnswer: 2 },
      { id: 38, question: "Which header has `std::format`?", options: ["<format>", "<iostream>", "<stdio>", "<string>"], correctAnswer: 0 },
      { id: 39, question: "What is `std::jthread`?", options: ["Joining thread", "C++20", "Both", "Async thread"], correctAnswer: 2 },
      { id: 40, question: "Which function creates coroutine?", options: ["co_await", "co_yield", "Both", "co_return"], correctAnswer: 2 },
      { id: 41, question: "What is `std::source_location`?", options: ["Source code info", "C++20", "Both", "Debug info"], correctAnswer: 2 },
      { id: 42, question: "Which header has `std::ranges`?", options: ["<ranges>", "<algorithm>", "<iterator>", "<view>"], correctAnswer: 0 },
      { id: 43, question: "What is `std::atomic_ref`?", options: ["Atomic reference", "C++20", "Both", "Atomic pointer"], correctAnswer: 2 },
      { id: 44, question: "Which function creates expected?", options: ["std::expected", "C++23", "Both", "std::optional"], correctAnswer: 2 },
      { id: 45, question: "What is `std::generator`?", options: ["Coroutine generator", "C++23", "Both", "Range generator"], correctAnswer: 2 },
      { id: 46, question: "Which header has `std::print`?", options: ["<print>", "<format>", "<iostream>", "<console>"], correctAnswer: 0 },
      { id: 47, question: "What is `std::mdspan`?", options: ["Multi-dimensional span", "C++23", "Both", "Matrix span"], correctAnswer: 2 },
      { id: 48, question: "Which function creates stacktrace?", options: ["std::stacktrace", "C++23", "Both", "Debug trace"], correctAnswer: 2 },
      { id: 49, question: "What is `std::flat_map`?", options: ["Flat associative container", "C++23", "Both", "Vector map"], correctAnswer: 2 },
      { id: 50, question: "Which header has `std::syncstream`?", options: ["<syncstream>", "<iostream>", "<thread>", "<sync>"], correctAnswer: 0 },
      { id: 51, question: "What is `std::hive`?", options: ["Container with stable references", "C++23", "Both", "Memory container"], correctAnswer: 2 },
      { id: 52, question: "Which function creates constexpr vector?", options: ["std::vector constexpr", "C++20", "Both", "Compile-time vector"], correctAnswer: 2 },
      { id: 53, question: "What is `std::is_coroutine_handle`?", options: ["Type trait", "C++20", "Both", "Coroutine check"], correctAnswer: 2 },
      { id: 54, question: "Which header has `std::latch`?", options: ["<latch>", "<barrier>", "<semaphore>", "<sync>"], correctAnswer: 0 },
      { id: 55, question: "What is `std::counting_semaphore`?", options: ["Semaphore with counter", "C++20", "Both", "Thread sync"], correctAnswer: 2 },
      { id: 56, question: "Which function creates stop_token?", options: ["std::stop_token", "C++20", "Both", "Thread stop"], correctAnswer: 2 },
      { id: 57, question: "What is `std::format_to`?", options: ["Format to output iterator", "C++20", "Both", "Format function"], correctAnswer: 2 },
      { id: 58, question: "Which header has `std::spanstream`?", options: ["<spanstream>", "<sstream>", "<iostream>", "<stream>"], correctAnswer: 0 },
      { id: 59, question: "What is `std::basic_osyncstream`?", options: ["Synchronized output stream", "C++20", "Both", "Thread-safe stream"], correctAnswer: 2 },
      { id: 60, question: "Which function creates source_location?", options: ["std::source_location::current()", "C++20", "Both", "Debug function"], correctAnswer: 2 }
    ],
    advanced: [
      { id: 1, question: "What is the strict aliasing rule?", options: ["Type-based optimization rule", "Compiler assumption", "Both", "Memory rule"], correctAnswer: 2 },
      { id: 2, question: "How does move semantics affect exception safety?", options: ["No-throw guarantee", "Strong guarantee", "Both", "No effect"], correctAnswer: 2 },
      { id: 3, question: "What is deferred dynamic initialization?", options: ["Static variable init timing", "C++ spec", "Both", "Runtime init"], correctAnswer: 2 },
      { id: 4, question: "How does `std::launder` work?", options: ["Pointer optimization barrier", "Object lifetime", "Both", "Memory barrier"], correctAnswer: 2 },
      { id: 5, question: "What is pointer provenance?", options: ["Pointer origin tracking", "Memory model", "Both", "Compiler concept"], correctAnswer: 2 },
      { id: 6, question: "How does `std::bit_cast` work?", options: ["Type punning", "C++20", "Both", "Memory reinterpret"], correctAnswer: 2 },
      { id: 7, question: "What is the as-if rule?", options: ["Compiler optimization freedom", "C++ standard", "Both", "Program semantics"], correctAnswer: 2 },
      { id: 8, question: "How does `std::start_lifetime_as` work?", options: ["Object lifetime start", "C++23", "Both", "Memory model"], correctAnswer: 2 },
      { id: 9, question: "What is dynamic storage duration?", options: ["Heap allocation", "new/delete", "Both", "Memory duration"], correctAnswer: 2 },
      { id: 10, question: "How does `std::construct_at` work?", options: ["Object construction", "C++20", "Both", "Placement new"], correctAnswer: 2 },
      { id: 11, question: "What is temporary materialization?", options: ["PR value to X value", "C++17", "Both", "Temporary lifetime"], correctAnswer: 2 },
      { id: 12, question: "How does EBO work?", options: ["Empty Base Optimization", "Memory layout", "Both", "Compiler optimization"], correctAnswer: 2 },
      { id: 13, question: "What is `[[no_unique_address]]`?", options: ["Empty member optimization", "C++20", "Both", "Memory layout"], correctAnswer: 2 },
      { id: 14, question: "How does coroutine state work?", options: ["Heap allocation", "Promise type", "Both", "Stack allocation"], correctAnswer: 2 },
      { id: 15, question: "What is the rule of six?", options: ["With move operations", "C++11 extension", "Both", "Design rule"], correctAnswer: 2 },
      { id: 16, question: "How does `std::atomic` memory ordering work?", options: ["Memory model", "Ordering constraints", "Both", "Hardware"], correctAnswer: 2 },
      { id: 17, question: "What is `[[assume]]`?", options: ["Optimization hint", "C++23", "Both", "Compiler directive"], correctAnswer: 2 },
      { id: 18, question: "How does module linkage work?", options: ["Module vs header units", "C++20", "Both", "Compilation"], correctAnswer: 2 },
      { id: 19, question: "What is `std::is_layout_compatible`?", options: ["Type trait", "C++20", "Both", "Layout check"], correctAnswer: 2 },
      { id: 20, question: "How does `std::to_array` work?", options: ["Array creation", "C++20", "Both", "Template deduction"], correctAnswer: 2 },
      { id: 21, question: "What is the ODR?", options: ["One Definition Rule", "Linkage", "Both", "Compilation rule"], correctAnswer: 2 },
      { id: 22, question: "How does `std::bind_front` work?", options: ["Partial application", "C++20", "Both", "Function binding"], correctAnswer: 2 },
      { id: 23, question: "What is `[[likely]]` implementation?", options: ["Branch prediction hint", "Compiler-specific", "Both", "Optimization"], correctAnswer: 2 },
      { id: 24, question: "How does `std::format` compile-time work?", options: ["Compile-time parsing", "C++20", "Both", "Format string"], correctAnswer: 2 },
      { id: 25, question: "What is `std::coroutine_handle`?", options: ["Coroutine manipulation", "Low-level API", "Both", "Coroutine control"], correctAnswer: 2 },
      { id: 26, question: "How does `std::jthread` cancellation work?", options: ["Stop tokens", "Cooperative", "Both", "Thread interruption"], correctAnswer: 2 },
      { id: 27, question: "What is `std::ranges` customization points?", options: ["ADL-based", "C++20", "Both", "Algorithm customization"], correctAnswer: 2 },
      { id: 28, question: "How does `std::views` composition work?", options: ["Lazy evaluation", "Pipe syntax", "Both", "Range adaptors"], correctAnswer: 2 },
      { id: 29, question: "What is `std::expected` monadic interface?", options: ["Functional programming", "C++23", "Both", "Error handling"], correctAnswer: 2 },
      { id: 30, question: "How does `std::generator` yield work?", options: ["Coroutine yield", "C++23", "Both", "Value production"], correctAnswer: 2 },
      { id: 31, question: "What is `std::flat_map` implementation?", options: ["Sorted vectors", "C++23", "Both", "Container design"], correctAnswer: 2 },
      { id: 32, question: "How does `std::mdspan` layout work?", options: ["Multi-dimensional mapping", "C++23", "Both", "Array layout"], correctAnswer: 2 },
      { id: 33, question: "What is `std::hive` bucketization?", options: ["Memory management", "C++23", "Both", "Container optimization"], correctAnswer: 2 },
      { id: 34, question: "How does `std::print` Unicode work?", options: ["Unicode handling", "C++23", "Both", "Text output"], correctAnswer: 2 },
      { id: 35, question: "What is `std::stacktrace` collection?", options: ["Debug info", "C++23", "Both", "Stack unwinding"], correctAnswer: 2 },
      { id: 36, question: "How does `std::syncstream` synchronization work?", options: ["Thread-safe stream", "C++20", "Both", "Output coordination"], correctAnswer: 2 },
      { id: 37, question: "What is `std::basic_osyncstream`?", options: ["Synchronized stream", "C++20", "Both", "Output wrapper"], correctAnswer: 2 },
      { id: 38, question: "How does `std::latch` work?", options: ["Thread synchronization", "C++20", "Both", "Counter barrier"], correctAnswer: 2 },
      { id: 39, question: "What is `std::barrier` phase?", options: ["Synchronization phases", "C++20", "Both", "Thread coordination"], correctAnswer: 2 },
      { id: 40, question: "How does `std::counting_semaphore` work?", options: ["Resource counting", "C++20", "Both", "Concurrency control"], correctAnswer: 2 },
      { id: 41, question: "What is `std::stop_token` propagation?", options: ["Stop request propagation", "C++20", "Both", "Cancellation"], correctAnswer: 2 },
      { id: 42, question: "How does `std::jthread` automatic join work?", options: ["RAII thread", "C++20", "Both", "Thread management"], correctAnswer: 2 },
      { id: 43, question: "What is `std::format` type safety?", options: ["Compile-time checking", "C++20", "Both", "Format validation"], correctAnswer: 2 },
      { id: 44, question: "How does `std::ranges` projection work?", options: ["Value transformation", "C++20", "Both", "Algorithm customization"], correctAnswer: 2 },
      { id: 45, question: "What is `std::views::transform` composition?", options: ["Pipe operator", "C++20", "Both", "Range composition"], correctAnswer: 2 },
      { id: 46, question: "How does `std::views::filter` work?", options: ["Predicate filtering", "C++20", "Both", "Range adaptation"], correctAnswer: 2 },
      { id: 47, question: "What is `std::views::take` implementation?", options: ["Count limitation", "C++20", "Both", "Range limit"], correctAnswer: 2 },
      { id: 48, question: "How does `std::views::drop` work?", options: ["Element skipping", "C++20", "Both", "Range skip"], correctAnswer: 2 },
      { id: 49, question: "What is `std::views::join`?", options: ["Flatten ranges", "C++20", "Both", "Range combination"], correctAnswer: 2 },
      { id: 50, question: "How does `std::views::split` work?", options: ["Pattern splitting", "C++20", "Both", "Range division"], correctAnswer: 2 },
      { id: 51, question: "What is `std::ranges::sort` customization?", options: ["Projection and comparator", "C++20", "Both", "Algorithm customization"], correctAnswer: 2 },
      { id: 52, question: "How does `std::ranges::find` work?", options: ["Linear search", "C++20", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 53, question: "What is `std::ranges::copy`?", options: ["Range copying", "C++20", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 54, question: "How does `std::ranges::for_each` work?", options: ["Element application", "C++20", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 55, question: "What is `std::ranges::accumulate`?", options: ["Range reduction", "C++23", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 56, question: "How does `std::mdspan` mapping work?", options: ["Layout mapping", "C++23", "Both", "Multi-dimensional"], correctAnswer: 2 },
      { id: 57, question: "What is `std::mdspan` accessor?", options: ["Element access policy", "C++23", "Both", "Access control"], correctAnswer: 2 },
      { id: 58, question: "How does `std::submdspan` work?", options: ["Subspace selection", "C++23", "Both", "Slice operation"], correctAnswer: 2 },
      { id: 59, question: "What is `std::layouts`?", options: ["Layout policies", "C++23", "Both", "mdspan layouts"], correctAnswer: 2 },
      { id: 60, question: "How does `std::default_accessor` work?", options: ["Default access policy", "C++23", "Both", "Element access"], correctAnswer: 2 },
      { id: 61, question: "What is `std::linalg`?", options: ["Linear algebra", "C++26 proposal", "Both", "Math library"], correctAnswer: 2 },
      { id: 62, question: "How does `std::linalg::matrix_product` work?", options: ["Matrix multiplication", "C++26 proposal", "Both", "Linear algebra"], correctAnswer: 2 },
      { id: 63, question: "What is `std::text_encoding`?", options: ["Text encoding handling", "C++23", "Both", "Unicode"], correctAnswer: 2 },
      { id: 64, question: "How does `std::text` work?", options: ["Unicode text", "C++26 proposal", "Both", "String handling"], correctAnswer: 2 },
      { id: 65, question: "What is `std::net`?", options: ["Networking library", "C++26 proposal", "Both", "Network I/O"], correctAnswer: 2 },
      { id: 66, question: "How does `std::execution` work?", options: ["Execution policies", "C++17/20", "Both", "Parallel algorithms"], correctAnswer: 2 },
      { id: 67, question: "What is `std::par_unseq`?", options: ["Execution policy", "C++17", "Both", "Parallel unordered"], correctAnswer: 2 },
      { id: 68, question: "How does `std::reduce` work?", options: ["Parallel reduction", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 69, question: "What is `std::transform_reduce`?", options: ["Map-reduce", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 70, question: "How does `std::inclusive_scan` work?", options: ["Prefix sum", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 71, question: "What is `std::exclusive_scan`?", options: ["Prefix sum variant", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 72, question: "How does `std::for_each_n` work?", options: ["Counted for_each", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 73, question: "What is `std::sample`?", options: ["Random sampling", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 74, question: "How does `std::clamp` work?", options: ["Value bounding", "C++17", "Both", "Algorithm"], correctAnswer: 2 },
      { id: 75, question: "What is `std::gcd`?", options: ["Greatest common divisor", "C++17", "Both", "Numeric"], correctAnswer: 2 },
      { id: 76, question: "How does `std::lcm` work?", options: ["Least common multiple", "C++17", "Both", "Numeric"], correctAnswer: 2 },
      { id: 77, question: "What is `std::hypot` overload?", options: ["Multi-argument hypotenuse", "C++17", "Both", "Math"], correctAnswer: 2 },
      { id: 78, question: "How does `std::assoc_laguerre` work?", options: ["Special function", "C++17", "Both", "Math"], correctAnswer: 2 },
      { id: 79, question: "What is `std::assoc_legendre`?", options: ["Special function", "C++17", "Both", "Math"], correctAnswer: 2 },
      { id: 80, question: "How does `std::beta` work?", options: ["Beta function", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 81, question: "What is `std::comp_ellint_1`?", options: ["Complete elliptic integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 82, question: "How does `std::comp_ellint_2` work?", options: ["Complete elliptic integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 83, question: "What is `std::comp_ellint_3`?", options: ["Complete elliptic integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 84, question: "How does `std::cyl_bessel_i` work?", options: ["Modified cylindrical Bessel", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 85, question: "What is `std::cyl_bessel_j`?", options: ["Cylindrical Bessel", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 86, question: "How does `std::cyl_bessel_k` work?", options: ["Modified cylindrical Bessel", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 87, question: "What is `std::cyl_neumann`?", options: ["Cylindrical Neumann", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 88, question: "How does `std::ellint_1` work?", options: ["Incomplete elliptic integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 89, question: "What is `std::ellint_2`?", options: ["Incomplete elliptic integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 90, question: "How does `std::ellint_3` work?", options: ["Incomplete elliptic integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 91, question: "What is `std::expint`?", options: ["Exponential integral", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 92, question: "How does `std::hermite` work?", options: ["Hermite polynomials", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 93, question: "What is `std::laguerre`?", options: ["Laguerre polynomials", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 94, question: "How does `std::legendre` work?", options: ["Legendre polynomials", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 95, question: "What is `std::riemann_zeta`?", options: ["Riemann zeta function", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 96, question: "How does `std::sph_bessel` work?", options: ["Spherical Bessel", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 97, question: "What is `std::sph_legendre`?", options: ["Spherical Legendre", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 98, question: "How does `std::sph_neumann` work?", options: ["Spherical Neumann", "C++17", "Both", "Special function"], correctAnswer: 2 },
      { id: 99, question: "What is `std::atomic` wait/notify?", options: ["Atomic waiting", "C++20", "Both", "Concurrency"], correctAnswer: 2 },
      { id: 100, question: "How does `std::atomic_ref` work?", options: ["Atomic reference", "C++20", "Both", "Concurrency"], correctAnswer: 2 }
    ]
  },
  bootstrap: {
    "basic": [
      {
        "id": 1,
        "question": "What is Bootstrap's primary purpose?",
        "options": [
          "A JavaScript framework for building single-page applications",
          "A CSS framework for developing responsive, mobile-first websites",
          "A back-end server framework for Node.js",
          "A database management system"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which class should you use to create a responsive image that scales with its parent element?",
        "options": [
          ".img-responsive",
          ".img-fluid",
          ".responsive-img",
          ".scale-image"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "What does the .container class provide in Bootstrap?",
        "options": [
          "A full-width container spanning the entire viewport",
          "A fixed-width container with responsive breakpoints",
          "A scrollable container with overflow handling",
          "A container with maximum height constraints"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "In Bootstrap's grid system, what is the purpose of the .row class?",
        "options": [
          "To create a horizontal line separator",
          "To define a single column within the grid",
          "To wrap columns and provide proper alignment and padding",
          "To add borders around content sections"
        ],
        "correctAnswer": 2
      },
      {
        "id": 5,
        "question": "Which spacing utility class adds margin-top of 3 units (1rem = 16px)?",
        "options": [
          ".m-3",
          ".mt-3",
          ".margin-top-3",
          ".spacing-top-3"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What class creates a blue-colored button indicating a primary action?",
        "options": [
          ".btn",
          ".btn-primary",
          ".button-blue",
          ".primary-button"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Which component provides a responsive, collapsible navigation header?",
        "options": [
          ".nav",
          ".navbar",
          ".header-nav",
          ".navigation-bar"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What does col-md-4 class mean in Bootstrap's grid?",
        "options": [
          "Creates 4 columns on all screen sizes",
          "Creates a column taking 4/12 of width on medium screens and up",
          "Creates a column with fixed 400px width",
          "Creates a responsive column with minimum 4px padding"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which class centers text horizontally within its container?",
        "options": [
          ".text-center",
          ".align-center",
          ".horizontal-center",
          ".center-text"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "In Bootstrap 5, which class makes text bold?",
        "options": [
          ".text-bold",
          ".bold-text",
          ".font-weight-bold",
          ".fw-bold"
        ],
        "correctAnswer": 3
      },
      {
        "id": 11,
        "question": "How do you properly include Bootstrap from a CDN?",
        "options": [
          "Download and host all files locally",
          "Link CSS in <head> and JS before closing </body>",
          "Use @import in CSS file only",
          "Install via npm and bundle with webpack"
        ],
        "correctAnswer": 1
      },
      {
        "id": 12,
        "question": "Which class creates a container that always spans 100% of viewport width?",
        "options": [
          ".container",
          ".container-fluid",
          ".full-container",
          ".width-100"
        ],
        "correctAnswer": 1
      },
      {
        "id": 13,
        "question": "How many columns does Bootstrap's grid system use by default?",
        "options": [
          "10 columns",
          "12 columns",
          "16 columns",
          "24 columns"
        ],
        "correctAnswer": 1
      },
      {
        "id": 14,
        "question": "Which class is used to create a card component with header and footer?",
        "options": [
          ".panel",
          ".card",
          ".box",
          ".tile"
        ],
        "correctAnswer": 1
      },
      {
        "id": 15,
        "question": "What class combination creates a blue alert box with informational content?",
        "options": [
          ".alert.alert-info",
          ".alert.alert-primary",
          ".info-box",
          ".notification.info"
        ],
        "correctAnswer": 0
      },
      {
        "id": 16,
        "question": "Which class creates inline form elements on larger screens?",
        "options": [
          ".form-horizontal",
          ".form-inline",
          ".form-row",
          ".inline-form"
        ],
        "correctAnswer": 1
      },
      {
        "id": 17,
        "question": "What does the .visually-hidden class do?",
        "options": [
          "Hides element on small screens only",
          "Hides element visually but keeps for screen readers",
          "Completely removes element from DOM",
          "Shows element only when printing"
        ],
        "correctAnswer": 1
      },
      {
        "id": 18,
        "question": "Which component creates a toggleable dropdown menu?",
        "options": [
          ".dropdown",
          ".select-menu",
          ".toggle-menu",
          ".collapsible-menu"
        ],
        "correctAnswer": 0
      },
      {
        "id": 19,
        "question": "How do you create a grid with 3 equal columns on large screens that stack on mobile?",
        "options": [
          "<div class='col-3'></div> repeated 3 times",
          "<div class='col-lg-4'></div> repeated 3 times",
          "<div class='col-lg-4 col-12'></div> repeated 3 times",
          "<div class='col-4'></div> repeated 3 times"
        ],
        "correctAnswer": 2
      },
      {
        "id": 20,
        "question": "What's the correct way to create a large, outlined success button?",
        "options": [
          ".btn-lg.btn-outline-success",
          ".btn-outline-success.btn-large",
          "<button class='btn btn-outline-success btn-lg'>",
          "<button class='btn success outline large'>"
        ],
        "correctAnswer": 2
      },
      {
        "id": 21,
        "question": "Which class adds a red background color?",
        "options": [
          ".bg-red",
          ".bg-danger",
          ".background-red",
          ".color-bg-red"
        ],
        "correctAnswer": 1
      },
      {
        "id": 22,
        "question": "What is the purpose of the data-bs-toggle attribute?",
        "options": [
          "To toggle CSS classes",
          "To initialize Bootstrap JavaScript components",
          "To toggle element visibility without JS",
          "To create CSS animations"
        ],
        "correctAnswer": 1
      },
      {
        "id": 23,
        "question": "Which class creates a pill-shaped badge?",
        "options": [
          ".badge.pill",
          ".badge.rounded-pill",
          ".pill-badge",
          ".badge-pill"
        ],
        "correctAnswer": 1
      },
      {
        "id": 24,
        "question": "What does the .fixed-top class do?",
        "options": [
          "Fixes element to top of page during scroll",
          "Aligns content to top of container",
          "Adds top padding to element",
          "Creates a fixed-height header"
        ],
        "correctAnswer": 0
      },
      {
        "id": 25,
        "question": "Which class creates a list group for displaying related items?",
        "options": [
          ".list-group",
          ".item-list",
          ".group-list",
          ".ul-group"
        ],
        "correctAnswer": 0
      },
      {
        "id": 26,
        "question": "How do you create a responsive table?",
        "options": [
          "Add .table-responsive to table element",
          "Wrap table in div with .table-responsive",
          "Use .responsive-table class",
          "Bootstrap tables are responsive by default"
        ],
        "correctAnswer": 1
      },
      {
        "id": 27,
        "question": "Which class adds rounded corners to an element?",
        "options": [
          ".rounded",
          ".border-radius",
          ".rounded-corners",
          ".corner-round"
        ],
        "correctAnswer": 0
      },
      {
        "id": 28,
        "question": "What does the .shadow class do?",
        "options": [
          "Adds text shadow",
          "Adds box shadow to element",
          "Creates shadow images",
          "Adds gradient shadow effect"
        ],
        "correctAnswer": 1
      },
      {
        "id": 29,
        "question": "Which class creates a carousel/slideshow component?",
        "options": [
          ".carousel",
          ".slider",
          ".slideshow",
          ".image-rotator"
        ],
        "correctAnswer": 0
      },
      {
        "id": 30,
        "question": "What class makes an element invisible but keeps its space?",
        "options": [
          ".d-none",
          ".invisible",
          ".hidden",
          ".opacity-0"
        ],
        "correctAnswer": 1
      }
    ],
    "intermediate": [
      {
        "id": 1,
        "question": "Which class creates a column that only takes needed width?",
        "options": [
          ".col",
          ".col-auto",
          ".col-flex",
          ".col-natural"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which utility truncates text with ellipsis?",
        "options": [
          ".text-truncate",
          ".text-ellipsis",
          ".truncate-text",
          ".overflow-ellipsis"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "What's the key difference between .container and .container-fluid?",
        "options": [
          ".container has more padding",
          ".container-fluid is always 100% width",
          ".container is for mobile only",
          "No significant difference"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "Which JavaScript library is required for Bootstrap tooltips?",
        "options": [
          "jQuery",
          "Popper.js",
          "React",
          "Vue.js"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What class creates the hamburger menu icon in navbar?",
        "options": [
          ".navbar-toggler-icon",
          ".hamburger",
          ".menu-icon",
          ".nav-toggle"
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "question": "How do you create a badge for notifications?",
        "options": [
          ".badge",
          ".notification",
          ".tag",
          ".indicator"
        ],
        "correctAnswer": 0
      },
      {
        "id": 7,
        "question": "Which class enables flexbox layout?",
        "options": [
          ".d-flex",
          ".flex-container",
          ".flex-layout",
          ".display-flex"
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "question": "In Bootstrap 5, how do you maintain aspect ratios?",
        "options": [
          ".ratio",
          ".aspect-ratio",
          ".embed-responsive",
          ".media-ratio"
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "question": "Which classes control flex item order?",
        "options": [
          ".order-*",
          ".flex-order-*",
          ".item-order-*",
          ".position-*"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "Which class creates a sticky navbar?",
        "options": [
          ".sticky-top",
          ".fixed-top",
          ".position-sticky",
          ".navbar-sticky"
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "question": "What does .g-0 do on a .row?",
        "options": [
          "Removes gutters",
          "Adds negative margins",
          "Sets grid gap to zero",
          "Disables flexbox"
        ],
        "correctAnswer": 0
      },
      {
        "id": 12,
        "question": "How do you center content vertically in flex container?",
        "options": [
          ".align-items-center",
          ".justify-content-center",
          ".vertical-center",
          ".flex-center"
        ],
        "correctAnswer": 0
      },
      {
        "id": 13,
        "question": "What does data-bs-toggle='collapse' do?",
        "options": [
          "Toggles modal",
          "Toggles collapsible content",
          "Toggles dropdown",
          "Toggles tabs"
        ],
        "correctAnswer": 1
      },
      {
        "id": 14,
        "question": "How do you create dark navbar with light text?",
        "options": [
          ".navbar-dark .bg-dark",
          ".navbar-black",
          ".navbar-inverse",
          ".dark-navbar"
        ],
        "correctAnswer": 0
      },
      {
        "id": 15,
        "question": "How do you initialize a tooltip?",
        "options": [
          "Add .tooltip class",
          "Add data-bs-toggle='tooltip' and initialize via JS",
          "Works automatically",
          "Use <tooltip> element"
        ],
        "correctAnswer": 1
      },
      {
        "id": 16,
        "question": "What's correct breadcrumb markup?",
        "options": [
          "<nav class='breadcrumb'><a>Home</a></nav>",
          "<ol class='breadcrumb'><li class='breadcrumb-item'><a href='#'>Home</a></li></ol>",
          "<ul class='breadcrumb'><li>Home</li></ul>",
          "<div class='breadcrumb'>Home</div>"
        ],
        "correctAnswer": 1
      },
      {
        "id": 17,
        "question": "How do you make alert dismissible?",
        "options": [
          ".alert .alert-dismissible",
          ".alert .dismiss",
          ".alert .close",
          ".alert-dismiss"
        ],
        "correctAnswer": 0
      },
      {
        "id": 18,
        "question": "Which classes add border and rounded corners?",
        "options": [
          ".border .rounded",
          ".outline .round",
          ".bordered .rounded",
          ".border-radius"
        ],
        "correctAnswer": 0
      },
      {
        "id": 19,
        "question": "What does .shadow-sm do?",
        "options": [
          "Adds small box shadow",
          "Adds shadow to text",
          "Creates smooth shadow",
          "Adds shadow to images only"
        ],
        "correctAnswer": 0
      },
      {
        "id": 20,
        "question": "How to create 2:1 column ratio on medium screens?",
        "options": [
          "col-md-8 and col-md-4",
          "col-md-6 and col-md-6",
          "col-md-4 and col-md-8",
          "col-md-3 and col-md-9"
        ],
        "correctAnswer": 0
      },
      {
        "id": 21,
        "question": "How to create and trigger modal?",
        "options": [
          "Add .modal and .show",
          "Use button with data-bs-toggle='modal'",
          "Use <modal> element",
          "Call modal() in JS"
        ],
        "correctAnswer": 1
      },
      {
        "id": 22,
        "question": "How to make table horizontally scrollable?",
        "options": [
          ".table-responsive on wrapper",
          ".table-scroll on table",
          ".scrollable-table",
          ".table-horizontal"
        ],
        "correctAnswer": 0
      },
      {
        "id": 23,
        "question": "How to align button to right?",
        "options": [
          ".float-end",
          ".align-right",
          ".text-end",
          ".pull-right"
        ],
        "correctAnswer": 0
      },
      {
        "id": 24,
        "question": "How to create custom checkbox?",
        "options": [
          ".form-check .form-check-input .form-check-label",
          ".custom-checkbox .custom-control-input",
          ".checkbox .checkbox-input",
          ".input-checkbox"
        ],
        "correctAnswer": 0
      },
      {
        "id": 25,
        "question": "Which breakpoint is for ≥1200px?",
        "options": [
          "sm",
          "md",
          "lg",
          "xl"
        ],
        "correctAnswer": 3
      },
      {
        "id": 26,
        "question": "Which breakpoint is for ≥1400px in Bootstrap 5?",
        "options": [
          "xl",
          "xxl",
          "2xl",
          "xxxl"
        ],
        "correctAnswer": 1
      },
      {
        "id": 27,
        "question": "What does .flex-column do?",
        "options": [
          "Creates vertical flex direction",
          "Creates equal columns",
          "Adds column gap",
          "Sets column count"
        ],
        "correctAnswer": 0
      },
      {
        "id": 28,
        "question": "Which class makes element inline-block?",
        "options": [
          ".d-inline-block",
          ".inline-block",
          ".display-inline-block",
          ".inline"
        ],
        "correctAnswer": 0
      },
      {
        "id": 29,
        "question": "What does .mt-n1 do?",
        "options": [
          "Adds negative top margin",
          "Adds positive top margin",
          "Removes top margin",
          "Sets margin to auto"
        ],
        "correctAnswer": 0
      },
      {
        "id": 30,
        "question": "Which class forces display:block at medium breakpoint?",
        "options": [
          ".d-md-block",
          ".visible-md",
          ".show-md",
          ".block-md"
        ],
        "correctAnswer": 0
      },
      {
        "id": 31,
        "question": "How to create loading spinner?",
        "options": [
          ".spinner-border",
          ".loading-spinner",
          ".fa-spinner",
          ".loader"
        ],
        "correctAnswer": 0
      },
      {
        "id": 32,
        "question": "Which class creates toast notification?",
        "options": [
          ".toast",
          ".alert-toast",
          ".notification",
          ".snackbar"
        ],
        "correctAnswer": 0
      },
      {
        "id": 33,
        "question": "How to disable button?",
        "options": [
          "Add disabled attribute",
          ".disabled class",
          "Both",
          ".btn-disabled"
        ],
        "correctAnswer": 2
      },
      {
        "id": 34,
        "question": "Which class makes table row dark?",
        "options": [
          ".table-dark",
          ".bg-dark",
          ".dark-row",
          ".table-inverse"
        ],
        "correctAnswer": 0
      },
      {
        "id": 35,
        "question": "What does .valid-feedback show?",
        "options": [
          "Green validation message",
          "Red error message",
          "Warning message",
          "Info message"
        ],
        "correctAnswer": 0
      },
      {
        "id": 36,
        "question": "How to create pagination?",
        "options": [
          ".pagination",
          ".page-nav",
          ".nav-pages",
          ".page-numbers"
        ],
        "correctAnswer": 0
      },
      {
        "id": 37,
        "question": "What does .stretched-link do?",
        "options": [
          "Makes parent clickable via link",
          "Stretches link width",
          "Adds underline animation",
          "Makes link bold"
        ],
        "correctAnswer": 0
      },
      {
        "id": 38,
        "question": "How to create progress bar?",
        "options": [
          ".progress with .progress-bar",
          ".progress-bar alone",
          ".loading-bar",
          ".meter"
        ],
        "correctAnswer": 0
      },
      {
        "id": 39,
        "question": "How to create offcanvas sidebar?",
        "options": [
          ".offcanvas .offcanvas-start",
          ".sidebar .collapse",
          ".side-nav",
          ".drawer"
        ],
        "correctAnswer": 0
      },
      {
        "id": 40,
        "question": "What does .input-group do?",
        "options": [
          "Groups inputs with buttons/addons",
          "Groups form labels",
          "Creates input arrays",
          "Validates input groups"
        ],
        "correctAnswer": 0
      },
      {
        "id": 41,
        "question": "How to add validation styles to form?",
        "options": [
          ".is-valid/.is-invalid",
          ".valid/.invalid",
          ".has-success/.has-error",
          ".form-valid/.form-invalid"
        ],
        "correctAnswer": 0
      },
      {
        "id": 42,
        "question": "What does .clearfix do?",
        "options": [
          "Clears floats",
          "Clears flex context",
          "Fixes overflow",
          "Clears margins"
        ],
        "correctAnswer": 0
      },
      {
        "id": 43,
        "question": "How to create vertical divider?",
        "options": [
          ".vr",
          ".vertical-rule",
          ".divider-vertical",
          ".border-end"
        ],
        "correctAnswer": 0
      },
      {
        "id": 44,
        "question": "How to include Bootstrap Icons?",
        "options": [
          "Link bootstrap-icons.css",
          "Included in bootstrap.css",
          "Use SVG directly",
          "Import via npm only"
        ],
        "correctAnswer": 0
      },
      {
        "id": 45,
        "question": "How to embed 16:9 video?",
        "options": [
          ".ratio .ratio-16x9",
          ".embed-responsive-16by9",
          ".video-container",
          ".media-16-9"
        ],
        "correctAnswer": 0
      },
      {
        "id": 46,
        "question": "What does .form-select style?",
        "options": [
          "<select> elements",
          "Multiple selects",
          "Form groups",
          "Input groups"
        ],
        "correctAnswer": 0
      },
      {
        "id": 47,
        "question": "How to create floating label for textarea?",
        "options": [
          ".form-floating > textarea + label",
          ".float-label on textarea",
          ".textarea-with-label",
          ".form-group textarea"
        ],
        "correctAnswer": 0
      },
      {
        "id": 48,
        "question": "What does .focus-ring do?",
        "options": [
          "Custom focus indicator",
          "Adds ring loader",
          "Creates shadow on focus",
          "Animates focus state"
        ],
        "correctAnswer": 0
      },
      {
        "id": 49,
        "question": "How to hide element when printing?",
        "options": [
          ".d-print-none",
          ".print-hidden",
          ".no-print",
          ".hide-on-print"
        ],
        "correctAnswer": 0
      },
      {
        "id": 50,
        "question": "How to make tooltip show HTML content?",
        "options": [
          "data-bs-html='true'",
          "data-html='true'",
          ".html-tooltip",
          "Use title with HTML"
        ],
        "correctAnswer": 0
      },
      {
        "id": 51,
        "question": "How to listen for modal shown event?",
        "options": [
          "shown.bs.modal event",
          "modal.shown event",
          "onModalShow callback",
          "modal-open event"
        ],
        "correctAnswer": 0
      },
      {
        "id": 52,
        "question": "How to create radio toggle button group?",
        "options": [
          ".btn-group with .btn-check inputs",
          ".radio-button-group",
          ".btn-radio-group",
          ".toggle-button-group"
        ],
        "correctAnswer": 0
      },
      {
        "id": 53,
        "question": "How to create scrollspy?",
        "options": [
          "data-bs-spy='scroll'",
          ".scrollspy class",
          "data-spy='scroll'",
          ".spy-scroll"
        ],
        "correctAnswer": 0
      },
      {
        "id": 54,
        "question": "What build tool compiles Bootstrap Sass?",
        "options": [
          "Any Sass compiler",
          "Only Webpack",
          "Only Gulp",
          "Only Grunt"
        ],
        "correctAnswer": 0
      },
      {
        "id": 55,
        "question": "How to find unused Bootstrap CSS?",
        "options": [
          "Use PurgeCSS",
          "Manual inspection",
          "Browser DevTools",
          "Bootstrap analyzer"
        ],
        "correctAnswer": 0
      },
      {
        "id": 56,
        "question": "What does .text-nowrap do?",
        "options": [
          "Prevents text wrapping",
          "Forces text wrap",
          "Wraps at word breaks",
          "Creates no-wrap container"
        ],
        "correctAnswer": 0
      },
      {
        "id": 57,
        "question": "How to create sticky footer?",
        "options": [
          "Flexbox on body with flex-grow-1",
          ".fixed-bottom",
          ".sticky-footer",
          "position: absolute bottom"
        ],
        "correctAnswer": 0
      },
      {
        "id": 58,
        "question": "How to create fade carousel?",
        "options": [
          ".carousel-fade",
          "data-bs-animation='fade'",
          ".fade-carousel",
          ".carousel .fade"
        ],
        "correctAnswer": 0
      },
      {
        "id": 59,
        "question": "What does .object-fit-cover do?",
        "options": [
          "Covers container with image",
          "Contains image within container",
          "Fills container exactly",
          "Scales image proportionally"
        ],
        "correctAnswer": 0
      },
      {
        "id": 60,
        "question": "What does .translate-middle do?",
        "options": [
          "Centers element absolutely",
          "Moves element horizontally",
          "Translates text content",
          "Moves on Z-axis"
        ],
        "correctAnswer": 0
      }
    ],
    "advanced": [
      {
        "id": 1,
        "question": "How to customize Bootstrap Sass variables?",
        "options": [
          "Edit node_modules files directly",
          "Override CSS variables",
          "Create custom _variables.scss and import after Bootstrap",
          "Can't customize variables"
        ],
        "correctAnswer": 2
      },
      {
        "id": 2,
        "question": "What does !default flag do in Sass variables?",
        "options": [
          "Makes variable required",
          "Sets variable only if not already defined",
          "Marks as important",
          "Compiles faster"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "How to reduce Bootstrap CSS file size?",
        "options": [
          "Delete unused CSS manually",
          "Comment out unused @imports in SCSS",
          "Use CDN only",
          "Use minified version"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "How to create custom component with Sass mixins?",
        "options": [
          "Copy component code",
          "Use @extend with existing class",
          "Use @include with component mixins",
          "Can't create custom components"
        ],
        "correctAnswer": 2
      },
      {
        "id": 5,
        "question": "What is $theme-colors map purpose?",
        "options": [
          "Read-only color reference",
          "Defines color palette for all components",
          "Only for color utilities",
          "Deprecated feature"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "How to change global border-radius?",
        "options": [
          "Override CSS variable",
          "Modify $border-radius Sass variable",
          "Override each component",
          "Both 1 and 2"
        ],
        "correctAnswer": 3
      },
      {
        "id": 7,
        "question": "Most efficient way to load Bootstrap JS?",
        "options": [
          "bootstrap.bundle.js (includes Popper)",
          "bootstrap.js + Popper separately",
          "Individual component files",
          "No JS needed"
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "question": "How to show modal programmatically in Bootstrap 5?",
        "options": [
          "document.getElementById().show()",
          "new bootstrap.Modal().show()",
          "$().modal('show')",
          ".style.display='block'"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "How to make dropdown open on hover?",
        "options": [
          "data-bs-trigger='hover'",
          "Custom JavaScript needed",
          "Modify source code",
          ".dropdown-hover class"
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "question": "What does .form-floating do?",
        "options": [
          "Floats labels above inputs",
          "Makes forms float on page",
          "Creates floating action buttons",
          "Adds floating animations"
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "question": "How to change grid gutters?",
        "options": [
          "--bs-gutter-x/y CSS variables",
          ".gutter-width class",
          "$gutter Sass variable only",
          "Modify .row/.col padding"
        ],
        "correctAnswer": 0
      },
      {
        "id": 12,
        "question": "How to create custom utility class?",
        "options": [
          "Add directly to CSS",
          "Use utilities API and $utilities map",
          "Define before importing Bootstrap",
          "@extend existing utility"
        ],
        "correctAnswer": 1
      },
      {
        "id": 13,
        "question": "What do $enable-* variables do?",
        "options": [
          "Developer info only",
          "Globally enable/disable features",
          "Enable experimental features",
          "JavaScript only"
        ],
        "correctAnswer": 1
      },
      {
        "id": 14,
        "question": "How does Bootstrap use CSS variables for theming?",
        "options": [
          "Doesn't use CSS variables",
          "Uses mixins only",
          "Uses :root variables for runtime theming",
          "Only for utilities"
        ],
        "correctAnswer": 2
      },
      {
        "id": 15,
        "question": "Key accessibility consideration for modals?",
        "options": [
          "Must be centered",
          "Must trap keyboard focus",
          "Must have dark backdrop",
          "Must animate"
        ],
        "correctAnswer": 1
      },
      {
        "id": 16,
        "question": "Accessibility for collapse components?",
        "options": [
          "Need aria-expanded",
          "Need keyboard focus",
          "Need unique ID",
          "All of above"
        ],
        "correctAnswer": 3
      },
      {
        "id": 17,
        "question": "How to create custom color palette?",
        "options": [
          "Add to $theme-colors map",
          "Create custom utility classes",
          "Use inline styles",
          "Override CSS variables"
        ],
        "correctAnswer": 0
      },
      {
        "id": 18,
        "question": "Difference between .fixed-top and .sticky-top?",
        "options": [
          ".sticky-top becomes fixed after scroll",
          ".fixed-top uses sticky",
          "No difference",
          ".sticky-top for sidebars"
        ],
        "correctAnswer": 0
      },
      {
        "id": 19,
        "question": "How to handle RTL layouts?",
        "options": [
          "Automatic",
          "Manual style flipping",
          "bootstrap.rtl.css file",
          "Sass mixins and RTL build"
        ],
        "correctAnswer": 3
      },
      {
        "id": 20,
        "question": "What does .visually-hidden-focusable do?",
        "options": [
          "Hidden but shown on focus",
          "Completely invisible",
          "Hidden from screen readers",
          "Creates focus trap"
        ],
        "correctAnswer": 0
      },
      {
        "id": 21,
        "question": "How to add new color to theme?",
        "options": [
          "$theme-colors: map-merge($theme-colors, ('brand': #color));",
          "$new-color: #color;",
          "@include bg-variant()",
          "Can't add new colors"
        ],
        "correctAnswer": 0
      },
      {
        "id": 22,
        "question": "How to dispose Bootstrap component?",
        "options": [
          "Automatic disposal",
          ".dispose() method",
          "bootstrap.Component.getInstance().dispose()",
          "delete component"
        ],
        "correctAnswer": 2
      },
      {
        "id": 23,
        "question": "How to create 4 col on lg, 2 on md, 1 on sm?",
        "options": [
          "col-lg-3 col-md-6 col-sm-12",
          "col-lg-4 col-md-2 col-sm-1",
          "col-4 col-2 col-1",
          "Use CSS Grid"
        ],
        "correctAnswer": 0
      },
      {
        "id": 24,
        "question": "How to make navbar collapse to offcanvas?",
        "options": [
          "Use .offcanvas classes and change data-bs-target",
          "Not possible",
          "Separate offcanvas component",
          ".navbar-offcanvas class"
        ],
        "correctAnswer": 0
      },
      {
        "id": 25,
        "question": "How to change base font family in Sass?",
        "options": [
          "$font-family-base: 'Custom Font';",
          "body { font-family: }",
          "--bs-font-sans-serif",
          "Modify compiled CSS"
        ],
        "correctAnswer": 0
      },
      {
        "id": 26,
        "question": "What is $spacer variable?",
        "options": [
          "Adds space between components",
          "Base unit for spacing scale",
          "Container margin",
          "Grid gutter width"
        ],
        "correctAnswer": 1
      },
      {
        "id": 27,
        "question": "How to create custom breakpoints?",
        "options": [
          "Can't add breakpoints",
          "Modify $grid-breakpoints map",
          "Use media queries",
          ".breakpoint-* class"
        ],
        "correctAnswer": 1
      },
      {
        "id": 28,
        "question": "Difference between bootstrap.scss and bootstrap-grid.scss?",
        "options": [
          "bootstrap-grid is smaller",
          "bootstrap-grid only includes grid and utilities",
          "bootstrap-grid for flexbox",
          "No difference"
        ],
        "correctAnswer": 1
      },
      {
        "id": 29,
        "question": "How to customize grid column count?",
        "options": [
          "$grid-columns variable",
          "Fixed at 12",
          "Different grid system",
          ".col-custom-* class"
        ],
        "correctAnswer": 0
      },
      {
        "id": 30,
        "question": "How to use .position-absolute with utilities?",
        "options": [
          "Use .top-0, .start-0 for placement",
          "For absolute centering",
          "Deprecated class",
          "Same as .fixed-top"
        ],
        "correctAnswer": 0
      },
      {
        "id": 31,
        "question": "How to implement dark mode toggle?",
        "options": [
          "Toggle .dark-mode class and override CSS variables",
          ".dark class",
          "Recompile Sass",
          "Different stylesheet"
        ],
        "correctAnswer": 0
      },
      {
        "id": 32,
        "question": "What does $enable-negative-margins do?",
        "options": [
          "Enables .mt-n1 utilities",
          "Disables all margins",
          "Debugging layout",
          "Enables negative padding"
        ],
        "correctAnswer": 0
      },
      {
        "id": 33,
        "question": "How to customize box-shadow?",
        "options": [
          "Modify $box-shadow-* variables",
          "Override box-shadow property",
          ".shadow-* custom class",
          "Can't customize"
        ],
        "correctAnswer": 0
      },
      {
        "id": 34,
        "question": "Difference between .btn and .btn-link?",
        "options": [
          ".btn-link looks like link with button behavior",
          ".btn-link deprecated",
          ".btn-link for hyperlinks",
          "Same thing"
        ],
        "correctAnswer": 0
      },
      {
        "id": 35,
        "question": "How to create vertical tabs?",
        "options": [
          ".flex-column on .nav-tabs with grid layout",
          ".nav-pills instead",
          ".vertical-tabs class",
          "Not supported"
        ],
        "correctAnswer": 0
      },
      {
        "id": 36,
        "question": "How to create masonry layout?",
        "options": [
          ".masonry class on .row",
          "Use masonry.js library",
          ".row-cols-* classes",
          ".card-deck"
        ],
        "correctAnswer": 1
      },
      {
        "id": 37,
        "question": "How to change active nav-pill color?",
        "options": [
          "$nav-pills-link-active-bg variable",
          "--bs-active-bg CSS variable",
          "Override .nav-link.active",
          "data-bs-active-color"
        ],
        "correctAnswer": 0
      },
      {
        "id": 38,
        "question": "How to create custom cursor utility?",
        "options": [
          "Add to $utilities map",
          ".cursor-grab { cursor: grab; }",
          "Add to $theme-colors",
          "Modify _utilities.scss"
        ],
        "correctAnswer": 0
      },
      {
        "id": 39,
        "question": "How to change navbar link color via Sass?",
        "options": [
          "$navbar-link-color: #color;",
          ".navbar { --bs-link-color: #color; }",
          ".navbar a { color: #color; }",
          "Modify $theme-colors"
        ],
        "correctAnswer": 0
      },
      {
        "id": 40,
        "question": "How to extend Bootstrap with custom components?",
        "options": [
          "Use component mixins",
          "Copy and modify source",
          "Create separate framework",
          "Use only CSS overrides"
        ],
        "correctAnswer": 0
      },
      {
        "id": 41,
        "question": "What is Bootstrap's CSS Custom Properties architecture?",
        "options": [
          "Only uses Sass variables",
          "Uses CSS vars for runtime theming with Sass fallback",
          "Pure CSS variables only",
          "No CSS custom properties"
        ],
        "correctAnswer": 1
      },
      {
        "id": 42,
        "question": "How to optimize Bootstrap for production?",
        "options": [
          "Import only needed components",
          "Use PurgeCSS",
          "Enable compression",
          "All of above"
        ],
        "correctAnswer": 3
      },
      {
        "id": 43,
        "question": "What is the purpose of $prefix variable?",
        "options": [
          "Adds prefix to all classes",
          "Sets CSS variable prefix",
          "For namespace isolation",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 44,
        "question": "How to create responsive typography?",
        "options": [
          "Use $font-size-base with responsive maps",
          "Manual media queries",
          ".responsive-text class",
          "Bootstrap handles automatically"
        ],
        "correctAnswer": 0
      },
      {
        "id": 45,
        "question": "What is Bootstrap's approach to responsive breakpoints?",
        "options": [
          "Mobile-first with min-width queries",
          "Desktop-first with max-width queries",
          "Fluid without breakpoints",
          "Only device-specific breakpoints"
        ],
        "correctAnswer": 0
      },
      {
        "id": 46,
        "question": "How to create component variants using mixins?",
        "options": [
          "@include button-variant()",
          "Copy-paste component code",
          "Use @extend directive",
          "Create custom CSS"
        ],
        "correctAnswer": 0
      },
      {
        "id": 47,
        "question": "What is the purpose of maps in Bootstrap Sass?",
        "options": [
          "Store key-value pairs for theming",
          "Geographic maps",
          "Image maps",
          "Navigation maps"
        ],
        "correctAnswer": 0
      },
      {
        "id": 48,
        "question": "How to handle high contrast mode accessibility?",
        "options": [
          "Use CSS media queries for prefers-contrast",
          "Manual contrast checking",
          "Bootstrap handles automatically",
          "Not supported"
        ],
        "correctAnswer": 0
      },
      {
        "id": 49,
        "question": "What is Bootstrap's JavaScript architecture?",
        "options": [
          "Vanilla JS with plugin system",
          "jQuery dependent",
          "React-based",
          "No JavaScript"
        ],
        "correctAnswer": 0
      },
      {
        "id": 50,
        "question": "How to create responsive embeds with custom ratios?",
        "options": [
          "--bs-aspect-ratio CSS variable",
          "Custom .ratio-* classes",
          "JavaScript calculation",
          "Fixed height containers"
        ],
        "correctAnswer": 0
      },
      {
        "id": 51,
        "question": "What is the Utilities API?",
        "options": [
          "Sass-based system for generating utilities",
          "JavaScript API for utilities",
          "CSS custom properties API",
          "Deprecated system"
        ],
        "correctAnswer": 0
      },
      {
        "id": 52,
        "question": "How to create responsive spacing utilities?",
        "options": [
          "Use responsive map in $spacers",
          "Manual media queries",
          ".spacing-responsive class",
          "Not possible"
        ],
        "correctAnswer": 0
      },
      {
        "id": 53,
        "question": "What is Bootstrap's approach to form validation?",
        "options": [
          "CSS pseudo-classes with JS enhancement",
          "Pure JavaScript validation",
          "Server-side only",
          "No validation support"
        ],
        "correctAnswer": 0
      },
      {
        "id": 54,
        "question": "How to create custom form controls?",
        "options": [
          "Extend form control mixins",
          "Override existing classes",
          "Build from scratch",
          "Use third-party libraries"
        ],
        "correctAnswer": 0
      },
      {
        "id": 55,
        "question": "What is the purpose of $enable-caret?",
        "options": [
          "Shows caret in dropdowns",
          "Enables icon support",
          "Adds cursor indicators",
          "Deprecated variable"
        ],
        "correctAnswer": 0
      },
      {
        "id": 56,
        "question": "How to implement print styles?",
        "options": [
          ".d-print-* utilities",
          "@media print in custom CSS",
          "Separate print stylesheet",
          "Browser default only"
        ],
        "correctAnswer": 0
      },
      {
        "id": 57,
        "question": "What is Bootstrap's grid system based on?",
        "options": [
          "Flexbox with wrapping columns",
          "CSS Grid only",
          "Float-based system",
          "Table-based layout"
        ],
        "correctAnswer": 0
      },
      {
        "id": 58,
        "question": "How to handle browser compatibility?",
        "options": [
          "Autoprefixer with postCSS",
          "Manual vendor prefixes",
          "Browser-specific stylesheets",
          "No compatibility handling"
        ],
        "correctAnswer": 0
      },
      {
        "id": 59,
        "question": "What is the purpose of $enable-rounded?",
        "options": [
          "Globally enables/disables border-radius",
          "Adds extra rounding",
          "For circle elements only",
          "JavaScript rounding"
        ],
        "correctAnswer": 0
      },
      {
        "id": 60,
        "question": "How to create responsive images with art direction?",
        "options": [
          "<picture> element with Bootstrap classes",
          ".img-fluid only",
          "JavaScript swapping",
          "CSS background images"
        ],
        "correctAnswer": 0
      },
      {
        "id": 61,
        "question": "What is the purpose of $enable-shadows?",
        "options": [
          "Globally enables box-shadows",
          "Adds text shadows",
          "For drop shadows only",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 62,
        "question": "How to create fluid typography?",
        "options": [
          "CSS clamp() with viewport units",
          "JavaScript calculation",
          "Media query steps",
          "Bootstrap doesn't support"
        ],
        "correctAnswer": 0
      },
      {
        "id": 63,
        "question": "What is Bootstrap's approach to mobile navigation?",
        "options": [
          "Collapsible navbar with toggler",
          "Separate mobile menu",
          "Side drawer pattern",
          "Tab-based navigation"
        ],
        "correctAnswer": 0
      },
      {
        "id": 64,
        "question": "How to handle touch gestures?",
        "options": [
          "JavaScript event handlers",
          "CSS touch-action property",
          "Bootstrap handles automatically",
          "Not supported"
        ],
        "correctAnswer": 1
      },
      {
        "id": 65,
        "question": "What is the purpose of $enable-gradients?",
        "options": [
          "Enables gradient backgrounds",
          "Adds gradient borders",
          "For text gradients",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 66,
        "question": "How to create accessible modals?",
        "options": [
          "aria-labelledby, aria-describedby",
          "role='dialog'",
          "Focus management",
          "All of above"
        ],
        "correctAnswer": 3
      },
      {
        "id": 67,
        "question": "What is Bootstrap's icon system?",
        "options": [
          "SVG-based icon font",
          "Web font icons",
          "PNG sprite sheets",
          "No built-in icons"
        ],
        "correctAnswer": 0
      },
      {
        "id": 68,
        "question": "How to handle right-to-left text?",
        "options": [
          "dir='rtl' attribute",
          ".rtl class",
          "CSS direction property",
          "All of above"
        ],
        "correctAnswer": 3
      },
      {
        "id": 69,
        "question": "What is the purpose of $enable-transitions?",
        "options": [
          "Enables CSS transitions",
          "Adds JavaScript animations",
          "For page transitions only",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 70,
        "question": "How to create responsive tables with horizontal scroll?",
        "options": [
          ".table-responsive wrapper",
          ".table-scroll class",
          "JavaScript scrolling",
          "CSS overflow property"
        ],
        "correctAnswer": 0
      },
      {
        "id": 71,
        "question": "What is Bootstrap's approach to button states?",
        "options": [
          ":active, :focus, :hover pseudo-classes",
          "JavaScript toggled classes",
          "Data attributes",
          "No state management"
        ],
        "correctAnswer": 0
      },
      {
        "id": 72,
        "question": "How to create custom alerts with icons?",
        "options": [
          "Add HTML within .alert",
          "Use alert variant mixins",
          "Create custom component",
          "Bootstrap doesn't support icons"
        ],
        "correctAnswer": 0
      },
      {
        "id": 73,
        "question": "What is the purpose of $enable-pointer-cursor?",
        "options": [
          "Adds cursor: pointer to interactive elements",
          "Custom cursor images",
          "Touch cursor support",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 74,
        "question": "How to handle form field sizing?",
        "options": [
          ".form-control-lg/.form-control-sm",
          "CSS width property",
          "Grid column sizing",
          "JavaScript resizing"
        ],
        "correctAnswer": 0
      },
      {
        "id": 75,
        "question": "What is Bootstrap's approach to tooltip positioning?",
        "options": [
          "Popper.js for dynamic positioning",
          "CSS fixed positioning",
          "JavaScript calculations",
          "Manual placement"
        ],
        "correctAnswer": 0
      },
      {
        "id": 76,
        "question": "How to create responsive video embeds?",
        "options": [
          ".ratio classes with intrinsic aspect ratio",
          "Fixed iframe dimensions",
          "JavaScript resizing",
          "CSS object-fit"
        ],
        "correctAnswer": 0
      },
      {
        "id": 77,
        "question": "What is the purpose of $enable-print-styles?",
        "options": [
          "Enables print utility classes",
          "Adds print-specific styles",
          "JavaScript print handling",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 78,
        "question": "How to handle responsive images with srcset?",
        "options": [
          "Use <img> with srcset attribute",
          "JavaScript image swapping",
          "CSS background images",
          "Bootstrap doesn't support srcset"
        ],
        "correctAnswer": 0
      },
      {
        "id": 79,
        "question": "What is Bootstrap's approach to dropdown menus?",
        "options": [
          "Popper.js for positioning",
          "CSS absolute positioning",
          "Fixed position dropdowns",
          "Inline dropdowns only"
        ],
        "correctAnswer": 0
      },
      {
        "id": 80,
        "question": "How to create accessible form labels?",
        "options": [
          "<label> with for attribute",
          "aria-label attribute",
          "Visual labels only",
          "Placeholder as label"
        ],
        "correctAnswer": 0
      },
      {
        "id": 81,
        "question": "What is the purpose of $enable-validation-icons?",
        "options": [
          "Adds icons to validation states",
          "Form validation graphics",
          "Input group addons",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 82,
        "question": "How to handle responsive font sizes?",
        "options": [
          "Use .fs-* responsive classes",
          "CSS viewport units",
          "JavaScript font scaling",
          "Media queries only"
        ],
        "correctAnswer": 0
      },
      {
        "id": 83,
        "question": "What is Bootstrap's approach to card layouts?",
        "options": [
          "Flex-based card components",
          "Grid-based cards",
          "Float-based cards",
          "Table-based cards"
        ],
        "correctAnswer": 0
      },
      {
        "id": 84,
        "question": "How to create responsive navigation patterns?",
        "options": [
          "Navbar collapse with breakpoints",
          "JavaScript navigation",
          "CSS-only menus",
          "Separate mobile navigation"
        ],
        "correctAnswer": 0
      },
      {
        "id": 85,
        "question": "What is the purpose of $enable-grid-classes?",
        "options": [
          "Generates grid column classes",
          "Adds grid utility classes",
          "Enables CSS Grid",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 86,
        "question": "How to handle browser default style normalization?",
        "options": [
          "Reboot.css for consistent defaults",
          "CSS Reset",
          "Normalize.css",
          "No normalization"
        ],
        "correctAnswer": 0
      },
      {
        "id": 87,
        "question": "What is Bootstrap's approach to responsive utilities?",
        "options": [
          "Breakpoint-prefixed utility classes",
          "Media query mixins",
          "JavaScript responsive helpers",
          "CSS custom properties"
        ],
        "correctAnswer": 0
      },
      {
        "id": 88,
        "question": "How to create custom breakpoint-specific styles?",
        "options": [
          "Use media query mixins",
          "Create custom CSS",
          "JavaScript breakpoint detection",
          "Bootstrap doesn't support"
        ],
        "correctAnswer": 0
      },
      {
        "id": 89,
        "question": "What is the purpose of $enable-deprecation-messages?",
        "options": [
          "Shows warnings for deprecated features",
          "Enables legacy support",
          "Backward compatibility",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 90,
        "question": "How to handle CSS custom property fallbacks?",
        "options": [
          "Sass variables as fallback",
          "JavaScript polyfill",
          "Manual fallback in CSS",
          "No fallback needed"
        ],
        "correctAnswer": 0
      },
      {
        "id": 91,
        "question": "What is Bootstrap's approach to component variants?",
        "options": [
          "Modifier classes (.btn-primary)",
          "Data attributes",
          "CSS custom properties",
          "JavaScript configuration"
        ],
        "correctAnswer": 0
      },
      {
        "id": 92,
        "question": "How to create responsive data tables?",
        "options": [
          ".table-responsive with horizontal scroll",
          "Stacked table layout",
          "Card-based table on mobile",
          "All of above"
        ],
        "correctAnswer": 3
      },
      {
        "id": 93,
        "question": "What is the purpose of $enable-smooth-scroll?",
        "options": [
          "Enables smooth scrolling behavior",
          "JavaScript scrolling animations",
          "CSS scroll-behavior",
          "Deprecated feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 94,
        "question": "How to handle responsive embed ratios?",
        "options": [
          "--bs-aspect-ratio CSS variable",
          "Padding-bottom technique",
          "JavaScript aspect ratio",
          "Fixed dimensions"
        ],
        "correctAnswer": 0
      },
      {
        "id": 95,
        "question": "What is Bootstrap's approach to form spacing?",
        "options": [
          ".form-group with margin utilities",
          "Uniform form spacing",
          "No automatic spacing",
          "JavaScript spacing"
        ],
        "correctAnswer": 0
      },
      {
        "id": 96,
        "question": "How to create accessible skip navigation links?",
        "options": [
          ".visually-hidden-focusable",
          "JavaScript skip links",
          "Hidden skip links",
          "Bootstrap doesn't support"
        ],
        "correctAnswer": 0
      },
      {
        "id": 97,
        "question": "What is the purpose of $enable-cssgrid?",
        "options": [
          "Enables CSS Grid utilities",
          "Replaces flexbox with CSS Grid",
          "Legacy grid system",
          "Experimental feature"
        ],
        "correctAnswer": 0
      },
      {
        "id": 98,
        "question": "How to handle responsive border utilities?",
        "options": [
          "Breakpoint-prefixed border classes",
          "Media query mixins",
          "JavaScript border handling",
          "CSS custom properties"
        ],
        "correctAnswer": 0
      },
      {
        "id": 99,
        "question": "What is Bootstrap's approach to JavaScript events?",
        "options": [
          "Custom events with namespace",
          "Standard DOM events",
          "No JavaScript events",
          "jQuery events only"
        ],
        "correctAnswer": 0
      },
      {
        "id": 100,
        "question": "How to create progressive web app ready Bootstrap?",
        "options": [
          "Optimize critical CSS",
          "Lazy load non-critical components",
          "Service worker integration",
          "All of above"
        ],
        "correctAnswer": 3
      }
    ]
  }
};

export default questionsData;

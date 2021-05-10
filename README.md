# Practice-javascript

Link to access this project: https://samvith-tallogu.github.io/practise-javascript/

In this project, I have used the following tags. Here is an explaination of each of them:

# 1. Header
Header is used to create a Title to the page. It runs from left to right.
The following tags are used for a Header:
```html
<header></header>
```
Example:
```html
<header> This is my Page Header </header>
```
# 2. Section
A section tag is used to define a particular section of the page, you can add multiple tags inside a section. Any styles defined in for a section applies for all tags within it.

In the following HTML code, the style definition of the section applies to both the tags, h1 and p in the HTML because they are inside the section.

```html
<style>
    section {
        display: block;
        text-align: left;
    }
</style>
<section> 
    <h1> This is a header <h1>
    <p> This is a paragraph </p>
</section>
```
# 3. Script
A script tag is used in two ways

1. To link a JavaScript file with a HTML file.
2. It can also be used for writing the JS Code within the HTML File.
Here is how I linked the JS file with the HTML:
```html
<script src="main.js"></script>
```
And here is how you write the JS Code within The HTML file:
```html
<script>
//JS Code here
</script>
```
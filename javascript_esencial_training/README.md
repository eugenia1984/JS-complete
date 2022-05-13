# :book: JavaScript Essential Trining (LinkedIn Learning)

Curso de **LinkedIn Learning** de **Marten Rand-Hendrisken**.

---

## Ejercicios de practica

[Aca esta el repositorio de GitHUB para ver como guia](https://github.com/LinkedInLearning/javascript-essential-training-2832077)

---

## ¿Que hay en este repositorio ?

En la carpeta **01_01** hay un componente *Photo* en react, en las demás carpetas vamos a ir viendo JavaScript, para comprender facilmente este componente.

```JavaScript
/**
 * Fragment from React Photo Gallery component.
 * By Sandra Gonzales @neptunian
 * @link https://github.com/neptunian/react-photo-gallery
 * The MIT License (MIT)
 * Copyright (c) 2015-2018 Sandra Gonzales
 */

 import React from "react";
 import PropTypes from "prop-types";
 
 const imgWithClick = { cursor: "pointer" };
 
 const Photo = ({
   index,
   onClick,
   photo,
   margin,
   direction,
   top,
   left,
   key,
 }) => {
   const imgStyle = { margin: margin, display: "block" };
   if (direction === "column") {
     imgStyle.position = "absolute";
     imgStyle.left = left;
     imgStyle.top = top;
   }
 
   const handleClick = (event) => {
     onClick(event, { photo, index });
   };
 
   return (
     <img
       key={key}
       style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
       {...photo}
       onClick={onClick ? handleClick : null}
     />
   );
 };
 
 export const photoPropType = PropTypes.shape({
   key: PropTypes.string,
   src: PropTypes.string.isRequired,
   width: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   alt: PropTypes.string,
   title: PropTypes.string,
   srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
   sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
 });
 
 Photo.propTypes = {
   index: PropTypes.number.isRequired,
   onClick: PropTypes.func,
   photo: photoPropType.isRequired,
   margin: PropTypes.number,
   top: (props) => {
     if (props.direction === "column" && typeof props.top !== "number") {
       return new Error(
         "top is a required number when direction is set to `column`"
       );
     }
   },
   left: (props) => {
     if (props.direction === "column" && typeof props.left !== "number") {
       return new Error(
         "left is a required number when direction is set to `column`"
       );
     }
   },
   direction: PropTypes.string,
 };
 
 export default Photo;
 ```
 
- **01_02_object** se crea el objeto *backpack* y con la funcion *updateBackpack()* se renderizan las propiedades del objeto en el DOM del HTML dentro de una etiqueta *main* creada dinamicamente.

---

## Links from JavaScript Essential Training


### Chapter 1. JavaScript: A Brief Introduction

• MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript

• VisualStudioCode:https://code.visualstudio.com/

• ESLintforVisualStudioCode:
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

• PrettierforVisualStudioCode:
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode


### Chapter 2. Up and Running with JavaScript

• ```<script>``` tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

• JavaScriptmodules:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

### Chapter 3. Objects

• Object:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

• Objectbasics:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics

• Classes:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

• Object constructor function:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

• Globalobjects:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

### Chapter 4. Sidebar: String Output

• Templateliterals:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

• String:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

### Chapter 5. DOM

• DOM(DocumentObjectModel):
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

• querySelector()method:https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector

• querySelectorAll() method:
https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll

• classNameproperty:https://developer.mozilla.org/en-US/docs/Web/API/Element/className

• classNameinReact.js:https://reactjs.org/docs/faq-styling.html

• classListproperty:https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

• hasAttribute() method: https://developer.mozilla.org/en-US/docs/Web/API/Element/hasattribute

• getAttribute() method: https://developer.mozilla.org/en-US/docs/Web/API/Element/getattribute

• setAttribute() method: https://developer.mozilla.org/en-US/docs/Web/API/Element/setattribute

• removeAttribute() method:
https://developer.mozilla.org/en-US/docs/Web/API/Element/removeattribute

• style property: https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style

• getComputedStyle() method:
https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

• createElement()method:
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

• append() method: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append

• prepend()method:https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend

• appendChild() method: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

• removeChild()method:https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

• replaceChild() method: https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild

• insertBefore()method:https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

• insertAdjacentElement()method:
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
                       

### Chapter 6. Sidebar: Variables and Data Types

• varstatement:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

• letstatement:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

• conststatement:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

• Relationaloperators:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/ Operators#Relational_operators

• Arithmetic operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/ Operators#Arithmetic_operators

### Chapter 7. Arrays

• Arrays:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays

• Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/
Array#Instance_methods

### Chapter 8. Functions and Methods

• Function:https://developer.mozilla.org/en-US/docs/Glossary/Function

• Arrow function:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

• this and arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/ Functions/Arrow_functions#this_and_Arrow_Functions

• this operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

• Intl.NumberFormatobject:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
Global_Objects/Intl/NumberFormat

• List of international local and language codes: http://www.lingoes.net/en/translator/langcode.htm

• Callbackfunction:https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

• setTimeout() callback method: https://developer.mozilla.org/en-US/docs/Web/API/ WindowOrWorkerGlobalScope/setTimeout

• if/elseconditionalstatement:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

• Logicaloperators:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/ Operators#Binary_logical_operators

• switchstatement:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

• forstatement:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

• for...ofstatement:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

• forEach() array method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

• for...instatement:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

• Object entries:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

• Iterationstatements:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Iterationst

### Chapter 9. Events

• DOMevents:https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events

• Events:https://developer.mozilla.org/en-US/docs/Web/Events

• addEventListener()method:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

### Chapter 10. Advanced Things

• Using the debugger in Chrome: https://developers.google.com/web/tools/chrome-devtools/javascript 

• UnderstandingReactcomponents:https://reactjs.org/docs/thinking-in-react.html
               

docviewjs
=========
This is a GUI library for JavaScript. It started as a proof of concept that
clean OOP frontend library, with components and without hardcoded HTML is
possible on top of a browser. After the concept was proven it was 
developed for the front end of [jsdocgen](https://github.com/Perennials/jsdocgen).
Now it is also used by [phptestr](https://github.com/Perennials/phptestr).
**The project is in very beta stage, with unstable API and has only few components.**


Features
--------
- Classical object oriented API.
- Pure JavaScript, no jQuery, etc.
- Built on components, no handwriting HTML.
- XML templates.
- Micro templates with syntax highlighting.
- Localization aware.
- Themeable.


What do the XML templates look like?
------------------------------------
In docviewjs, the front end is described in XML (in this example embedded in an HTML document as "script"):
```xml
<script type="template/docviewjs" id="ExampleXmlTemplate">
	<Accordion>
		<AccordionItem state="active">
			<Label text="{my.locale.specific.resource}" class="AccordionItemTitle" />
			<MyCustomComponent />
		</AccordionItem>
	</Accordion>
</script>
```

In addition to XML templates docviewjs supports JavaScript micro templates, for when
rendering HTML is needed. Since JS micro templates are highly unreadable by their nature,
the project comes with syntax highlighter for Sublime Text which greatly eases the situation.

![Screenshot](https://raw.github.com/Perennials/docviewjs/master/redist/misc/screenshot.png)

Creating a custom component that will be used by the template is also straight forward:
```javascript

// declare our type
function MyCustomComponent () {
	
	// call super constructor
	HtmlArea.call( this );
	
	// do some custom initialization
	this.setClass( 'MyCustomComponent' );

	// render a micro template as HTML
	var html = $TT( 'Tmpl.Cases', [ 'template', 'data', 'goes', 'here' ] );

	// put the HTML inside the HtmlArea
	this.setHtml( html );
}

// inherit HtmlArea (which inherits View - the base class of all view components)
MyCustomComponent.extend( HtmlArea );
```

Now the only thing left is to instantiate the XML template and create a View from it.
This could be done with one line of code, although more elaborate APIs are also available.
```javascript
// create a View from XML template
var accordion = $T( 'ExampleXmlTemplate' );

// put the View in the DOM
myApp.appView.addView( accordion );
```


Authors
-------
Borislav Peev (borislav.asdf at gmail dot com)

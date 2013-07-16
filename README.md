docviewjs
=========
This is a GUI library for JavaScript. It started as a proof of concept that
clean OOP frontend library, with components and without hardcoded HTML is
possible on top of a browser. After the concept was proven it was 
developed for the front end of [jsdocgen](https://github.com/Perennials/jsdocgen).
Now it is also used by [phptestr](https://github.com/Perennials/phptestr).
**The project is in very beta quality, with unstable API and has only few components.**


Features
--------
- Classical object oriented API.
- Pure JavaScript, no jQuery, etc.
- Built on components, no handwriting HTML.
- XML templates.
- Micro templates with syntax highlighting.


What does the XML templates look like?
--------------------------------------
In docviewjs, the front end is described in XML.
```xml
<Accordion>
	<AccordionItem state="active">
		<Label text="{my.locale.specific.resource}" class="AccordionItemTitle" />
		<MyCustomComponent />
	</AccordionItem>
</Accordion>
```

In addition to XML templates it supports JavaScript micro templates, for when
rendering HTML is needed. Since JS micro templates are highly unreadable by their nature,
the project comes with syntax highlighter for Sublime Text which greatly eases the situation.

![Screenshot](https://raw.github.com/Perennials/docviewjs/master/redist/misc/screenshot.png)


Authors
-------
Borislav Peev (borislav.asdf at gmail dot com)

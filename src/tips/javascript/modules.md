# Modules

Modules allow you to separate your code into individual chunks or components, allowing for easier maintainability and better file organisation. Every module can have two different types of export - named export and default export. You can have multiple named exports per module but only one default export.

## HTML Script

To use modules, you need to tell the HTML that your script has <code>type="module"</code>.

![](/assets/script.png)

## Exporting

When your main script needs access to other scripts, you can only access the variables, functions, classes, etc that have been marked for export. This is great for key principles of programming like separation of concerns, encapsulation, etc.
This can be done by defining them inline or using a single export statement at the bottom of the file, but it is based on preference mainly. The syntax for exporting is simply adding <code>export</code> to the beginning of item.

![](/assets/export.png)

### Export default

You can export default (of which you can only have <emphasis>one</emphasis> default export per module) and this does not require the curly braces. You can also rename this to whatever you like and, because it is the default, it is inherently renamed.
Used a lot in React because normally you're importing a single component.

## Importing

If you want to import specific items from an external file, you use curly braces. This will also allow you to rename things if needed which can be useful for lots of exports where names might clash.

![](/assets/import-individual.png)

However, you can import everything from a file which is useful if you have loads of exports from that module file.

![](/assets/import-all.png)

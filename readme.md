# CitySchema: 
### Simple Repository/Catalog for Publishing, Extending and Preserving a Detailed, Living 3D City Model
This repository provides a framework for sharing a city model with a community collaborators who use diverse tools:

* Geographic Information Systems
* 3D Modeling Tools
* Archival / Digital Asset Management
* Open Source Tool-Chains
* Virtual Reality / Gaming

This schema has been developed over a 20year period of collaboration between municipal GIS agencies, architects and archivists in the Boston metropolitan area.  More in the acknowldgements, below.  It is designed to be easily adapted to create new nodes representing different territories, or interests.  To learn more about how the CitySchema project is being extended, visit our home page at www.pbcGIS.com/cityschema. 

The CitySchema Repository uses a system of tiled modules and simple arrangement of files to create a coherent referencing scheme for detailed terrain models, ground plan images and a collection of building, bridge and wall models -- which are each individually referenced.

Catalog data is provided in JSON and CSV format, systematically addresses each model.  This data is demonstrated with easy-to-use finder maps for tiled models and individual building models.  The same catalog files can be used by programmers to create new applications using city model components.   Each model resource is described with HTML metadata that is integrated with the catalog maps.  Each Building, Bridge and Wall model is delivered with a JSON file that describes its provenance, technical lifecycle and temporal status. 

This Repository Catalog addresses each of the requirements for the International Standards Organization Reference Model for an Open Archive Information System.  It may be used to assure the integrity of city-model assets for long-term preservation, and for the extension and improvement of the city model collection by a variety of users.

## Explore on the web!
The Repository Catalog is a web site that can be dropped in to any web server with no localization necessary. It is also fully functional off-line without any connection to the internet. 

Right-click these links to open in a new tab so that this window can stay in Git-hub.

* View the [Tiled Download Page](https://pbcgis.github.io/CitySchema-Bos3d-RepositoryCatalog/catalog/tiled_index.htm).  Click on tile I3 to try out how users can download assets, including individual building models. 
* Take a look at the [index to documentation](https://pbcgis.github.io/CitySchema-Bos3d-RepositoryCatalog/catalog/doc_index.htm), which should be sufficient to explain how the city model is put together and how it can be used to coordinate activities across diverse tools and territories. 

## Explore in GitHub
Explore this gitHub repository to learn how the Repository and Catalog package is organized as 

* City-Wide model resources, 
* Tiled resources 
* Catalog files -- inclusing interactive maps for tiles and individual building models

Everything is included in this repository except for the tiled resources, we have included only those for tile J-3. The catalog folder contains all of the html pages, stylesheets, and javascript files and json catalog data.  Blocks of text that are re-used among pages are managed n the file **config.js** and **data_dictionary.js**.  

## Download, Customize and Install
Click the **Code** button to clone or download a zip of this archive.  Use your favorite text editor (I recommend the free Visual Studio Code application) to edit the files in the catalog folder.  Open the about.html page in your browser. Edit config.js to change something in the disclaimer or banner.  Observe how your saved changes are immediately reflected when you refresh the web page in your browser!  

To publish your collection on the web, simply copy the repository catalog to a directory that is accessible from your web server.  Your city model should be live!

## Coming Soon:
We are now busy documenting the tools and workflows that we use to create and manage the model collection using ArcGIS Pro, Python and FME.  We will be posting these on the pbcGIS GitHub site, soon. To follow our progress, visit www.pbcGIS.com/cityschema . 

We look forward to expanding the capabilities for applications to subscribe to updates to city models in this schema.  It wil lbe relatively simple to add model catalogs for each of the components that provide for the API required by the Open Archive Initiative Protocol for Metadata Harvesting.

## Acknowledgements
CitySchema has been developed with key support from the **Boston Planning and Development Agency Office of Digital Cartography and GIS**.  This is the latest burst of improvements that continues a collaboration and financial support of City of Cambridge department of GIS and Historical Commission, Harvard University Graduate School of Design, Massachusetts Geographic Information System,  Harvard Center for Design Informatics, the Boston Redevelopment Authority,  Town of Brookline GIS, The Open Geospatial Consortium, The Massachusetts Institute of Technology Facilities Department, Harvard University Planning and Real Estate, Sasaki and Associates, Architects and many others. 




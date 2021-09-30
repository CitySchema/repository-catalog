# CitySchema: 
### Simple Repository/Catalog for Publishing, Extending and Preserving a Detailed, Living 3D City Model
This repository provides a framework for sharing a city model among a community of collaborators who use diverse tools:

* Geographic Information Systems
* 3D Modeling Tools
* Archival / Digital Asset Management
* Open Source Tool-Chains
* Virtual Reality / Gaming

CitySchema takes an digital asset management approach to encoding, publishing, sharing and preserving knowledge about the 3D form of places.  In this approach, the city model is  a collection of 3D models, reflecting terrain, groundplan and buildings.  Each model, like a photograph or drawing, reflects an observation or an idea made at at a certain time by a specific technique applied by an author.  The 3D models are rendered as a triangulated mesh surfaces with a potential to be texture-mapped.  Each model is associated with metadata describing its provenance and many other attributes that make the model re-useable and systematically accessible to a variety of applications.  

The modular design of the data model is easily replicated and extended by neighboring towns and campus administrations. Models shared by municipal governments or campus authorities are useful to designer/developers who can, in turn, contribute models reflecting the future of places, as they advance through the review and permittiong pipeline. 

As the participants update their models the collection becomes a historical record -- a side-effect of thoughtful model curation -- that may also becomes a deliberate vehicla for assembling and deepeing models that reflect the historical development of places.  Eventually, models of historical places will serve as context for associating many otherother documents that are collected and managed in increasingly intr-linked historical archives.   To learn more about how the CitySchema project is being extended, visit our home page at www.pbcGIS.com/cityschema. 

The CitySchema Repository uses a system of tiled modules and simple arrangement of files to create a coherent referencing scheme for detailed terrain models, ground plan images and a collection of building, bridge and wall models -- which are each individually referenced.

Catalog data is provided in JSON and CSV format, systematically addresses each model.  This data is demonstrated with easy-to-use finder maps for tiled models and individual building models.  The same catalog files can be used by programmers to create new applications using city model components.   Each model resource is described with HTML metadata that is integrated with the catalog maps.  Each Building, Bridge and Wall model is delivered with a JSON file that describes its provenance, technical lifecycle and temporal status. 

This Repository Catalog addresses each of the requirements for the International Standards Organization Reference Model for an Open Archive Information System.  It may be used to assure the integrity of city-model assets for long-term preservation, and for the extension and improvement of the city model collection by a variety of users.

## Explore on the web!
The Repository Catalog is a web site that can be dropped in to any web server with no localization necessary. It is also fully functional off-line without any connection to the internet. 

Right-click these links to open in a new tab so that this window can stay in Git-hub.

* View the [Tiled Download Page](https://github.com/CitySchema/repository-catalog/catalog/index.htm).  Click on tile I3 to try out how users can download assets, including individual building models. 
* Take a look at the [index to documentation](https://github.com/CitySchema/repository-catalog/catalog/index.htm), which should be sufficient to explain how the city model is put together and how it can be used to coordinate activities across diverse tools and territories. 

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


## Acknowledgements
CitySchema has been developed over a 20 year period of collaboration between municipal GIS agencies, architects and archivists in the Boston metropolitan area.  The latest and most substantial burst of improvements have been supported by the **Boston Planning and Development Agency Office of Digital Cartography and GIS**.   This continues very fruitful collaboration and financial support from City of Cambridge department of GIS and the Cambridge Historical Commission.   




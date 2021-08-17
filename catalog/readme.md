# Catalog Info
This folder has all of the html, javascript and css files used in the self-contained Repository/Catalog application.  

Files of note:
* **tile_polys_geojson.js:** A geojson file of all or the tiles with their labels.  This is used to create the clickable tile map.  The geojson file is disquised as javascript so that it can be loaded in spite of the browser's  Same Origin Policy. 
* **clickable_tile_map.htm:** THis is a page that contains the leaflet tile index. It is fairly simple javascript.  One col feature is that if the web-based base map layers are not available, a local map will be used. 
* **index.htm:** Perhaps should be named downloads.htm...  This map is the main download page.  It includes the clickable_tile_map.html as an i-frame just to keep from havng to hack much with that code. 
* **Template.htm:** This page includes one of each of the different styles and included html snippets.  It is a good place to start if you are testting the CSS or starting a new page. 
* **config.js:** This javascript file is included on each metadata page.  It includes any html that is repeated on each page. For example, the banner, the disclaimer and the nav links.  The html blocks are set as long text variables which are then assigned to divs in the target document using jquery selectors.
* **data_dictionary.js:** This is where you should edit the data dictionary for 3d models.  THis file is included on pages that include a data dictionary.  
* **ModelCatalog:** is the template for the model_catalog folders that are included with each tile's OBJ format model collection.  This folder contains the latest version of the Modelfinder.htm page which creates a clickable index map showing the footprint of each model in the tile.  ModelCatalog_geojson.js and tileframe_geojson.js for a demo tile so that you can work on the modelfinder app here and then copy the revised file to the Bos3d_ModelCollection_OBJ/model_Catalog_template folder before generating the tiled model collections using FME.

The rest of the pages here are pretty simple html pages.  All images are referenced from the images folder.  Yes, for now, these are created and edited as plain html. 

The one important CSS file is Bos3d.css which is intended to mimic the styling of the BPDA's web site.  These styles can be hacked to better fit in with your own web site.
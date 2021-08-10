let disclaimer = `
<br><hr>    
<h3>Disclaimer</h3>
    <p>
	<em><span style="font-size:14px;">Disclaimer:&nbsp;</span><span style="font-size: small;">The Boston Planning and Development Agency (BPDA) recognizes the value and benefit gained by sharing Geospatial data. Although the BPDA has made reasonable efforts to provide accurate data, the Agency makes no representations or guarantees about the accuracy, completeness, or currency of the information provided. The BPDA provides this data as is and with all faults, and makes no warranty of any kind. Each user is responsible for determining the suitability of the data for their intended use or purpose. Neither the City, the BPDA nor its affiliates, employees, or agents shall be liable for any loss or injury caused in whole or in part by use of any data obtained from this website. The geospatial data is updated and modified on a regular basis and users are encouraged to report any errors to the BPDA.</span></em></p>
`;

let context = `
<h2>Context</h2>
<p>The Boston Planning and Development Agency (BPDA) maintains a 3D model of the city as a visualization and analytical tool for understanding ideas related to the future of neighborhoods.  The BPDA city model is constructed of several components: Terrain, Groundplan, and 3D models of buildings.  Each of these components is
    shared in formats intended to facilitate collaboration between diverse communities who have an interest in understanding places in the city as they have changed or as they may be changed.  
</p> 
`;

let banner = `<h1 class="banner">BPDA 3D City Model</h1>`;

let nav3d = `
<a href="./tiled_index.htm" target="download">Data Download</a>
<a href="./about.htm">About the Project</a>
<a href="./doc_index.htm" target="index">Documentation Index</a>
`
let coordsys = `
<h2>Coordinate System</h2>

	<p><b>Projected Coordinate System:</b> State Plane Massachusetts Mainland (Feet),  North American Datum of 1983.
	<br>
    <b>Vertical Coordinate System for 3D data:</b> North American Vertical Datum, 1988 (NAVD 88) Feet (Height)
		<P><b>Origin / insertion point:</B> 
		 <UL>
			 <LI>State Plane Coordinates:</b>
			<ul> <li><b>X:</b>731,100 feet
				 <li><b>Y:</b>2,902,900 feet
			</ul>
		<li><b>Geographic:</b>
		<ul><li><b>Longitude:</b> 71.223391 W 
			<li><b>Latitude:</b> 42.213379 N 
			</ul>
		</ul>
  <p>For more details about the <b>Metro Boston 3D Coordinate Referencing System</b> see the <a href="./tile_grid.htm#coordinates">Boston 3D Tile Grid</a> page.
`
let datadir = `./data/`

$(function() {
    console.log("ready!");
    $("#banner").html(banner);
    $("#context").html(context);
    $("#nav3d").html(nav3d);
	$("#coordsys").html(coordsys);
    $("#disclaimer").html(disclaimer);

});
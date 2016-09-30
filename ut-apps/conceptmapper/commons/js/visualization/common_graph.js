function start(){loadData("0.json")}function loadData(e){d3.json(e,function(e){initialize(e.metadata,e.data)})}function initialize(e,t){null!=e&&void 0!=e&&null!=t&&void 0!=t?(cleanSVG(),switchToNonAlphaGraph(),this.title=void 0!=e.title?e.title:void 0,this.description=void 0!=e.description?e.description:void 0,this.type=void 0!=e.type?e.type:void 0,this.directed=void 0!=e.directed?e.directed:void 0,this.datalinks=void 0!=e.datalinks?e.datalinks:void 0,this.nodeMeasures=void 0!=e.measures?extractMeasures(e.measures,"node"):void 0,this.edgeMeasures=void 0!=e.measures?extractMeasures(e.measures,"edge"):void 0,this.nodeproperties=void 0!=e.nodeproperties?extractNodeProperties(e.nodeproperties):void 0,this.edgeproperties=void 0!=e.edgeproperties?extractEdgeProperties(e.edgeproperties):void 0,this.nodeset=void 0!=t.nodes?t.nodes:void 0,this.edgeset=void 0!=t.edges?t.edges:void 0,calculateNetworkTime(),translateEdges(),updateUI(),redraw()):alert("Unable to read network data.")}function updateUI(){d3.select("#timeselector").attr("value",timeappearances[dataAppearanceIndex]),d3.select("#description").text("Network Description: "+this.description),void 0!=nodeMeasures&&" "==d3.select("#nodemeasures").html().toString()&&(d3.select("#nodemeasures").selectAll("option").remove(),d3.select("#nodemeasures").append("option").attr("value","default").text("None"),nodeMeasures.forEach(function(e){d3.select("#nodemeasures").append("option").attr("value",e.property).text(e.title)})),void 0!=edgeMeasures&&" "==d3.select("#edgemeasures").html().toString()&&(d3.select("#edgemeasures").selectAll("option").remove(),d3.select("#edgemeasures").append("option").attr("value","default").text("None"),edgeMeasures.forEach(function(e){d3.select("#edgemeasures").append("option").attr("value",e.property).text(e.title)})),initializeSearchControl(),loadCustomControls(),updateNodeMeasureExplorationContext(),updateEdgeMeasureExplorationContext()}function initializeSearchControl(){try{var e=d3.select("#searchcontrols");null!=e&&null!=e.node()&&(removeAllChild(e),e.append("p").text("Search Value:"),e.append("datalist").attr("id","idDataList").selectAll("option").data(nodeset.map(function(e){return e.label})).enter().append("option").attr("value",function(e){return e}),e.append("input").attr("id","idTbSearch").attr("type","text").on("keydown",function(){13==d3.event.keyCode?search():27==d3.event.keyCode&&(cleanSearch(),highlightNodeMeasure(),highlightEdgeMeasure())}).attr("list","idDataList"),e.append("input").attr("id","idBtSearch").attr("type","button").attr("value","Search").on("click",function(){search()}),e.append("input").attr("id","idBtClean").attr("type","button").attr("value","Restore").on("click",function(){cleanSearch(),highlightNodeMeasure(),highlightEdgeMeasure()}),e.append("div").attr("id","idDivResultSearch").style("height","140px").style("overflow","auto").style("border-style","groove"))}catch(e){alert(e)}}function updateEdgeMeasureExplorationContext(){edgeMeasureExplorationContext=d3.select("#edgemeasures").property("value"),edgeScaleKeySet=new Array,edgeset.forEach(function(e){if(null!=e[edgeMeasureExplorationContext]&&void 0!=e[edgeMeasureExplorationContext]){var t=parseFloat(e[edgeMeasureExplorationContext]),a=edgeScaleKeySet.indexOf(t);a==-1&&edgeScaleKeySet.push(t)}});var e=d3.min(edgeScaleKeySet),t=d3.max(edgeScaleKeySet);edgeAlphaScale=e==t?d3.scale.linear().domain([e,t]).range([1,1]):d3.scale.linear().domain([e,t]).range([0,1])}function updateNodeMeasureExplorationContext(){nodeMeasureExplorationContext=d3.select("#nodemeasures").property("value"),nodeScaleKeySet=new Array,nodeset.forEach(function(e){if(null!=e[nodeMeasureExplorationContext]&&void 0!=e[nodeMeasureExplorationContext]){var t=parseFloat(e[nodeMeasureExplorationContext]),a=nodeScaleKeySet.indexOf(t);a==-1&&nodeScaleKeySet.push(t)}});var e=d3.min(nodeScaleKeySet),t=d3.max(nodeScaleKeySet);nodeRadiusScale=e==t?d3.scale.linear().domain([e,t]).range([3*defaultNodeScale,3*defaultNodeScale]):d3.scale.linear().domain([e,t]).range([defaultNodeScale,3*defaultNodeScale])}function extractNodeProperties(e){}function extractEdgeProperties(e){}function extractMeasures(e,t){var a=new Array;return e.forEach(function(e){e.class==t&&a.push(e)}),a}function translateEdges(){edgeset.forEach(function(e){e.source=nodeset[locateNode(e.source)],e.target=nodeset[locateNode(e.target)]})}function locateNode(e){for(i=0;i<nodeset.length;i++)if(e==nodeset[i].id)return i}function downloadVisualization(){var e=d3.select("#canvas").attr("title","test2").attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML;d3.select("#download").attr("href","data:application/octet-stream;base64,"+btoa(e)).attr("download","screenshot"+downloads+".svg"),downloads++}function calculateNetworkTime(){this.timeappearances=new Array,datalinks.forEach(function(e){this.timeappearances.push(e.toString().substring(0,e.toString().indexOf(".")))}),this.currentTime=timeappearances[dataAppearanceIndex]}function updateCurrentTimeByStep(e,t){var a=timeappearances.indexOf(currentTime);a+=e,a>-1&&a<timeappearances.length&&(currentTime=timeappearances[a],dataAppearanceIndex=a,t(),loadData(datalinks[a].toString()))}function onCurrentTimeUpdate(){d3.select("#timeselector").attr("value",currentTime)}function removeAllChild(e){for(;e.node().hasChildNodes();)e.node().removeChild(e.node().firstChild)}function switchToAlphaGraph(){d3.selectAll("path.node").attr("opacity",.15),d3.selectAll("line.edge").attr("opacity",.15),d3.selectAll("text.label").attr("opacity",.15)}function switchToNonAlphaGraph(){d3.selectAll("path.node").attr("opacity",1),d3.selectAll("line.edge").attr("opacity",1),d3.selectAll("text.label").attr("opacity",1)}function changeGraphExplorationContext(){this.graphExplorationContext=d3.select("#gexplorercontext").property("value"),this.trailExploration=!1,0==this.graphExplorationContext&&switchToNonAlphaGraph()}function cleanSVG(){d3.select("svg").remove()}function highlightNodeMeasure(){updateNodeMeasureExplorationContext(),d3.selectAll(".node").transition().duration(700).attr("d",d3.svg.symbol().size(function(e){if(null!=e[nodeMeasureExplorationContext]&&void 0!=e[nodeMeasureExplorationContext]){var t=parseFloat(e[nodeMeasureExplorationContext]),a=nodeRadiusScale(t);return a}return defaultNodeScale}).type(function(e){return d3.svg.symbolTypes[e.type]}))}function highlightEdgeMeasure(){updateEdgeMeasureExplorationContext(),d3.selectAll(".edge").transition().duration(700).attr("opacity",function(e){if(null!=e[edgeMeasureExplorationContext]&&void 0!=e[edgeMeasureExplorationContext]){var t=parseFloat(e[edgeMeasureExplorationContext]),a=edgeAlphaScale(t);return a}return defaultEdgeAlpha})}function highlightSourceNode(e){d3.select("#node"+e.id).attr("opacity",1),d3.select("#label"+e.id).attr("opacity",1)}function highlightNeighbors(e){for(var t=[],a=0;a<edgeset.length;a++){var o=edgeset[a],n=e==o.source?o.target:e==o.target?o.source:void 0;void 0!=n&&(d3.select("#node"+n.id).attr("opacity",1),d3.select("#label"+n.id).attr("opacity",1),o.source!=n&&o.target!=n||d3.select("#edge"+o.id).transition().attr("opacity",1),t.push(n))}return t}function searchClosure(e){for(var t=0;t<edgeset.length;t++){var a=edgeset[t];e.indexOf(a.source)!=-1&&e.indexOf(a.target)!=-1&&d3.select("#edge"+a.id).transition().attr("opacity",1)}}function searchScope(e,t){for(var a=[],o=0;o<e.length;o++){var n=e[o];if(highlightSourceNode(n),t%2==0)for(var r=highlightNeighbors(n),i=0;i<r.length;i++)a.push(r[i]);else searchClosure(e),a=e}t++,t<graphExplorationContext&&searchScope(a,t)}function showNodeRelations(e){0!=graphExplorationContext&&(graphExplorationContext<4?(switchToAlphaGraph(),searchScope([e],0)):4==graphExplorationContext&&(trailExploration||(switchToAlphaGraph(),trailExploration=!trailExploration),searchScope([e],4)))}function displayNodeInformation(e){var t=d3.select("#idDivResultSearch"),a=d3.select("#nodemeasures").property("value");if(null!=t&&null!=t.node()){removeAllChild(t);var o="Id: "+e.id+" Label: "+e.label+" Time: "+e.timeappearance;null!=e[a]&&(o+=" Measure:"+a+": "+e[a]),t.append("p").html(o)}d3.select("#node"+e.id).transition().duration(700).attr("d",d3.svg.symbol().size(function(e){if(null!=e[nodeMeasureExplorationContext]&&void 0!=e[nodeMeasureExplorationContext]){var t=parseFloat(e[nodeMeasureExplorationContext]),a=nodeRadiusScale(t);return a}return 4*defaultNodeScale}).type(function(e){return d3.svg.symbolTypes[e.type]}))}function removeNodeInfo(e){var t=d3.select("#idDivResultSearch");d3.select("#nodemeasures").property("value");null!=t&&null!=t.node()&&removeAllChild(t),d3.select("#node"+e.id).transition().duration(700).attr("d",d3.svg.symbol().size(function(e){if(null!=e[nodeMeasureExplorationContext]&&void 0!=e[nodeMeasureExplorationContext]){var t=parseFloat(e[nodeMeasureExplorationContext]),a=nodeRadiusScale(t);return a}return defaultNodeScale}).type(function(e){return d3.svg.symbolTypes[e.type]}))}function search(){var e=d3.select("#idTbSearch").property("value").toString().trim(),t=nodeset.filter(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())!=-1});switchToAlphaGraph(),t.forEach(function(e){var t=d3.select("#node"+e.id).attr("d");d3.select("#node"+e.id).attr("d",d3.svg.symbol().size(function(e){return 100*defaultNodeScale}).type(function(e){return d3.svg.symbolTypes[e.type]})).transition().attr("opacity",1).transition().attr("d",t),d3.select("#label"+e.id).transition().attr("opacity",1)})}function cleanSearch(){switchToNonAlphaGraph(),d3.select("#idTbSearch").property("value","")}var title,description,directed,nodeMeasures,edgeMeasures,datalinks,nodeproperties,edgeproperties,nodeset,edgeset,timeappearances,currentTime,dataAppearanceIndex=0,colorScale=d3.scale.category10(),edgeColorScale=d3.scale.category10(),defaultNodeScale=300,defaultEdgeAlpha=1,graphExplorationContext=0,trailExploration=!1,nodeScaleKeySet,nodeRadiusScale,nodeMeasureExplorationContext,edgeScaleKeySet,edgeAlphaScale,edgeMeasureExplorationContext,width="3080",height="2160",downloads=0;
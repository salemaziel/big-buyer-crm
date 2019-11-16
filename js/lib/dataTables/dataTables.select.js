/*!
 Select for DataTables 1.0.0
 2015 SpryMedia Ltd - datatables.net/license/mit
*/
(function(j,u,i){j=function(e,h){function j(a){var c=a.settings()[0]._select.selector;e(a.table().body()).off("mousedown.dtSelect",c).off("mouseup.dtSelect",c).off("click.dtSelect",c);e("body").off("click.dtSelect")}function s(a){var c=e(a.table().body()),b=a.settings()[0],d=b._select.selector;c.on("mousedown.dtSelect",d,function(b){if(b.shiftKey)c.css("-moz-user-select","none").one("selectstart.dtSelect",d,function(){return!1})}).on("mouseup.dtSelect",d,function(){c.css("-moz-user-select","")}).on("click.dtSelect",
d,function(b){var d=a.select.items(),f=a.cell(this).index(),k=a.settings()[0];e(b.target).closest("tbody")[0]==c[0]&&a.cell(b.target).any()&&("row"===d?(d=f.row,r(b,a,k,"row",d)):"column"===d?(d=a.cell(b.target).index().column,r(b,a,k,"column",d)):"cell"===d&&(d=a.cell(b.target).index(),r(b,a,k,"cell",d)),k._select_lastCell=f)});e("body").on("click.dtSelect",function(c){b._select.blurable&&!e(c.target).parents().filter(a.table().container()).length&&(e(c.target).parents("div.DTE").length||o(b,!0))})}
function l(a,c,b,d){if(!d||a.flatten().length)b.unshift(a),e(a.table().node()).triggerHandler(c+".dt",b)}function t(a){var c=a.settings()[0];if(c._select.info){var b=e('<span class="select-info"/>'),d=function(c,d){b.append(e('<span class="select-item"/>').append(a.i18n("select."+c+"s",{_:"%d "+c+"s selected","0":"",1:"1 "+c+" selected"},d)))};d("row",a.rows({selected:!0}).flatten().length);d("column",a.columns({selected:!0}).flatten().length);d("cell",a.cells({selected:!0}).flatten().length);e.each(c.aanFeatures.i,
function(c,a){var a=e(a),d=a.children("span.select-info");d.length&&d.remove();""!==b.text()&&a.append(b)})}}function o(a,c){if(c||"single"===a._select.style){var b=new h.Api(a);b.rows({selected:!0}).deselect();b.columns({selected:!0}).deselect();b.cells({selected:!0}).deselect()}}function r(a,c,b,d,g){var q=c.select.style(),f=c[d](g,{selected:!0}).any();"os"===q?a.ctrlKey||a.metaKey?c[d](g).select(!f):a.shiftKey?"cell"===d?(d=b._select_lastCell||null,f=function(b,a){if(b>a)var d=a,a=b,b=d;var f=
!1;return c.columns(":visible").indexes().filter(function(c){c===b&&(f=!0);return c===a?(f=!1,!0):f})},a=function(b,a){var d=c.rows({search:"applied"}).indexes();if(d.indexOf(b)>d.indexOf(a))var f=a,a=b,b=f;var g=!1;return d.filter(function(c){c===b&&(g=!0);return c===a?(g=!1,!0):g})},!c.cells({selected:!0}).any()&&!d?(f=f(0,g.column),d=a(0,g.row)):(f=f(d.column,g.column),d=a(d.row,g.row)),d=c.cells(d,f).flatten(),c.cells(g,{selected:!0}).any()?c.cells(d).deselect():c.cells(d).select()):(a=b._select_lastCell?
b._select_lastCell[d]:null,f=c[d+"s"]({search:"applied"}).indexes(),a=e.inArray(a,f),b=e.inArray(g,f),!c[d+"s"]({selected:!0}).any()&&-1===a?f.splice(e.inArray(g,f)+1,f.length):(a>b&&(q=b,b=a,a=q),f.splice(b+1,f.length),f.splice(0,a)),c[d](g,{selected:!0}).any())?(f.splice(e.inArray(g,f),1),c[d+"s"](f).deselect()):c[d+"s"](f).select():(a=c[d+"s"]({selected:!0}),f&&1===a.flatten().length?c[d](g).deselect():(a.deselect(),c[d](g).select())):c[d](g).select(!f)}function p(a,c){return function(b){return b.i18n("buttons."+
a,c)}}h.select={};h.select.version="1.0.0";e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(a,c){h.ext.selector[c.type].push(function(b,a,g){var a=a.selected,e,f=[];if(a===i)return g;for(var k=0,h=g.length;k<h;k++)e=b[c.prop][g[k]],(!0===a&&!0===e._select_selected||!1===a&&!e._select_selected)&&f.push(g[k]);return f})});h.ext.selector.cell.push(function(a,c,b){var c=c.selected,d,g=[];if(c===i)return b;for(var e=0,f=b.length;e<f;e++)d=a.aoData[b[e].row],(!0===c&&d._selected_cells&&
!0===d._selected_cells[b[e].column]||!1===c&&(!d._selected_cells||!d._selected_cells[b[e].column]))&&g.push(b[e]);return g});var m=h.Api.register,n=h.Api.registerPlural;m("select()",function(){});m("select.blurable()",function(a){return a===i?this.context[0]._select.blurable:this.iterator("table",function(c){c._select.blurable=a})});m("select.info()",function(a){return t===i?this.context[0]._select.info:this.iterator("table",function(c){c._select.info=a})});m("select.items()",function(a){return a===
i?this.context[0]._select.items:this.iterator("table",function(c){c._select.items=a;l(new h.Api(c),"selectItems",[a])})});m("select.style()",function(a){return a===i?this.context[0]._select.style:this.iterator("table",function(c){c._select.style=a;if(!c._select_init){var b=new h.Api(c);c.aoRowCreatedCallback.push({fn:function(b,a,d){a=c.aoData[d];a._select_selected&&e(b).addClass("selected");b=0;for(d=c.aoColumns.length;b<d;b++)(c.aoColumns[b]._select_selected||a._selected_cells&&a._selected_cells[b])&&
e(a.anCells[b]).addClass("selected")},sName:"select-deferRender"});b.on("preXhr.dt.dtSelect",function(){var a=b.rows({selected:!0}).ids(!0).filter(function(b){return b!==i}),c=b.cells({selected:!0}).eq(0).map(function(a){var c=b.row(a.row).id(!0);return c?{row:c,column:a.column}:i}).filter(function(b){return b!==i});b.one("draw.dt.dtSelect",function(){b.rows(a).select();c.any()&&c.each(function(a){b.cells(a.row,a.column).select()})})});b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt",
function(){t(b)});b.on("destroy.dtSelect",function(){j(b);b.off(".dtSelect")})}var d=new h.Api(c);j(d);"api"!==a&&s(d);l(new h.Api(c),"selectStyle",[a])})});m("select.selector()",function(a){return a===i?this.context[0]._select.selector:this.iterator("table",function(c){j(new h.Api(c));c._select.selector=a;"api"!==c._select.style&&s(new h.Api(c))})});n("rows().select()","row().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("row",function(b,a){o(b);b.aoData[a]._select_selected=
!0;e(b.aoData[a].nTr).addClass("selected")});this.iterator("table",function(b,a){l(c,"select",["row",c[a]],!0)});return this});n("columns().select()","column().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("column",function(b,a){o(b);b.aoColumns[a]._select_selected=!0;var c=(new h.Api(b)).column(a);e(c.header()).addClass("selected");e(c.footer()).addClass("selected");c.nodes().to$().addClass("selected")});this.iterator("table",function(b,a){l(c,"select",["column",
c[a]],!0)});return this});n("cells().select()","cell().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("cell",function(b,a,c){o(b);b=b.aoData[a];b._selected_cells===i&&(b._selected_cells=[]);b._selected_cells[c]=!0;b.anCells&&e(b.anCells[c]).addClass("selected")});this.iterator("table",function(b,a){l(c,"select",["cell",c[a]],!0)});return this});n("rows().deselect()","row().deselect()",function(){var a=this;this.iterator("row",function(a,b){a.aoData[b]._select_selected=
!1;e(a.aoData[b].nTr).removeClass("selected")});this.iterator("table",function(c,b){l(a,"deselect",["row",a[b]],!0)});return this});n("columns().deselect()","column().deselect()",function(){var a=this;this.iterator("column",function(a,b){a.aoColumns[b]._select_selected=!1;var d=new h.Api(a),g=d.column(b);e(g.header()).removeClass("selected");e(g.footer()).removeClass("selected");d.cells(null,b).indexes().each(function(b){var d=a.aoData[b.row],g=d._selected_cells;d.anCells&&(!g||!g[b.column])&&e(d.anCells[b.column]).removeClass("selected")})});
this.iterator("table",function(c,b){l(a,"deselect",["column",a[b]],!0)});return this});n("cells().deselect()","cell().deselect()",function(){var a=this;this.iterator("cell",function(a,b,d){b=a.aoData[b];b._selected_cells[d]=!1;b.anCells&&!a.aoColumns[d]._select_selected&&e(b.anCells[d]).removeClass("selected")});this.iterator("table",function(c,b){l(a,"deselect",["cell",a[b]],!0)});return this});e.extend(h.ext.buttons,{selected:{text:p("selected","Selected"),className:"buttons-selected",init:function(a){var c=
this;a.on("select.dt.DT deselect.dt.DT",function(){var a=c.rows({selected:!0}).any()||c.columns({selected:!0}).any()||c.cells({selected:!0}).any();c.enable(a)});this.disable()}},selectedSingle:{text:p("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(a){var c=this;a.on("select.dt.DT deselect.dt.DT",function(){var b=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;c.enable(1===b)});this.disable()}},
selectAll:{text:p("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:p("selectNone","Deselect all"),className:"buttons-select-none",action:function(){o(this.settings()[0],!0)}}});e.each(["Row","Column","Cell"],function(a,c){var b=c.toLowerCase();h.ext.buttons["select"+c+"s"]={text:p("select"+c+"s","Select "+b+"s"),className:"buttons-select-"+b+"s",action:function(){this.select.items(b)},init:function(a){var c=this;
a.on("selectItems.dt.DT",function(a,d,e){c.active(e===b)})}}});e(u).on("init.dt.dtSelect",function(a,c){if("dt"===a.namespace){var b=c.oInit.select||h.defaults.select,d=new h.Api(c),g="row",j="api",f=!1,k=!0,l="td, th";c._select={};if(!0===b)j="os";else if("string"===typeof b)j=b;else if(e.isPlainObject(b)&&(b.blurable!==i&&(f=b.blurable),b.info!==i&&(k=b.info),b.items!==i&&(g=b.items),b.style!==i&&(j=b.style),b.selector!==i))l=b.selector;d.select.selector(l);d.select.items(g);d.select.style(j);d.select.blurable(f);
d.select.info(k);e(d.table().node()).hasClass("selectable")&&d.select.style("os")}})};"function"===typeof define&&define.amd?define(["jquery","datatables"],j):"object"===typeof exports?j(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.select&&j(jQuery,jQuery.fn.dataTable)})(window,document);
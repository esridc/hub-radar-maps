import{an as t,a2 as e,ao as i,ap as o,aq as a,r as n,Z as r}from"./p-6635e9bb.js";function d(t,e,i,o){t.set(e,i.get(o)),i.on(o,(i=>{t.set(e,i)}))}class l extends t{setupDefaultRules(){super.setupDefaultRules();const t=this._root.language,l=this._root.interfaceColors,s=this._root.horizontalLayout,c=this._root.verticalLayout,g=this.rule.bind(this);g("InterfaceColors").setAll({stroke:e.fromHex(15066597),fill:e.fromHex(15987699),primaryButton:e.fromHex(6788316),primaryButtonHover:e.fromHex(6779356),primaryButtonDown:e.fromHex(6872182),primaryButtonActive:e.fromHex(6872182),primaryButtonText:e.fromHex(16777215),primaryButtonStroke:e.fromHex(16777215),secondaryButton:e.fromHex(14277081),secondaryButtonHover:e.fromHex(10724259),secondaryButtonDown:e.fromHex(9276813),secondaryButtonActive:e.fromHex(15132390),secondaryButtonText:e.fromHex(0),secondaryButtonStroke:e.fromHex(16777215),grid:e.fromHex(0),background:e.fromHex(16777215),alternativeBackground:e.fromHex(0),text:e.fromHex(0),alternativeText:e.fromHex(16777215),disabled:e.fromHex(11382189),positive:e.fromHex(5288704),negative:e.fromHex(11730944)});{const t=g("ColorSet");t.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[e.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),t.setPrivate("currentStep",0),t.setPrivate("currentPass",0)}g("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:i(o)}),g("Component").setAll({interpolationDuration:0,interpolationEasing:i(o)}),g("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:a,tooltipY:a,tooltipPosition:"fixed",isMeasured:!0}),g("Sprite").states.create("default",{visible:!0,opacity:1}),g("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),g("Graphics").setAll({strokeWidth:1}),g("Chart").setAll({width:n,height:n,interactiveChildren:!1}),g("ZoomableContainer").setAll({width:n,height:n,wheelable:!0,pinchZoom:!0,maxZoomLevel:32,minZoomLevel:1,zoomStep:2,animationEasing:i(o),animationDuration:600}),g("Sprite",["horizontal","center"]).setAll({centerX:a,x:a}),g("Sprite",["vertical","center"]).setAll({centerY:a,y:a}),g("Container",["horizontal","layout"]).setAll({layout:s}),g("Container",["vertical","layout"]).setAll({layout:c}),g("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),g("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),g("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),g("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),g("GrainPattern").setAll({width:200,height:200,colors:[e.fromHex(0)],size:1,horizontalGap:0,verticalGap:0,density:1,minOpacity:0,maxOpacity:.2}),g("LinearGradient").setAll({rotation:90}),g("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:r.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),g("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:s,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:t.translate("Press ENTER to toggle"),role:"checkbox"});{const t=g("Rectangle",["legend","item","background"]);t.setAll({fillOpacity:0}),d(t,"fill",l,"background")}g("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:a,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),g("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:n,height:n,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const t=g("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});d(t,"fill",l,"disabled"),d(t,"stroke",l,"disabled")}g("Label",["legend","label"]).setAll({centerY:a,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0});d(g("Label",["legend","label"]).states.create("disabled",{}),"fill",l,"disabled");g("Label",["legend","value","label"]).setAll({centerY:a,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:n,populateText:!0});d(g("Label",["legend","value","label"]).states.create("disabled",{}),"fill",l,"disabled");g("HeatLegend").setAll({stepCount:1}),g("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),g("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:n,width:15}),g("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:n,height:15}),g("HeatLegend",["vertical"]).setAll({height:n}),g("HeatLegend",["horizontal"]).setAll({width:n}),g("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),g("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const t=g("Label");t.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),d(t,"fill",l,"text")}g("RadialLabel").setAll({textType:"regular",centerY:a,centerX:a,inside:!1,radius:0,baseRadius:n,orientation:"auto",textAlign:"center"}),g("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),g("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),g("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const t=g("Tick");t.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),d(t,"stroke",l,"grid")}g("Bullet").setAll({locationX:.5,locationY:.5}),g("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:a,centerY:a,animationEasing:i(o),exportable:!1}),g("Polygon").setAll({animationEasing:i(o)});g("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:e.fromHex(16777215)});{const t=g("Label",["tooltip"]);t.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),d(t,"fill",l,"alternativeText")}g("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:s,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),g("Button").states.create("hover",{}),g("Button").states.create("down",{stateAnimationDuration:0}),g("Button").states.create("active",{});{const t=g("RoundedRectangle",["button","background"]);d(t,"fill",l,"primaryButton"),d(t,"stroke",l,"primaryButtonStroke")}d(g("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",l,"primaryButtonHover");d(g("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",l,"primaryButtonDown");d(g("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",l,"primaryButtonActive");d(g("Graphics",["button","icon"]),"stroke",l,"primaryButtonText");d(g("Label",["button"]),"fill",l,"primaryButtonText");g("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:n,role:"button",ariaLabel:t.translate("Zoom Out"),layer:30});{const t=g("RoundedRectangle",["background","button","zoom"]);t.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),d(t,"fill",l,"primaryButton")}d(g("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",l,"primaryButtonHover");d(g("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",l,"primaryButtonDown");{const t=g("Graphics",["icon","button","zoom"]);t.setAll({crisp:!0,strokeOpacity:.7,draw:t=>{t.moveTo(0,0),t.lineTo(12,0)}}),d(t,"stroke",l,"primaryButtonText")}g("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:a,centerY:a,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:t.translate("Use up and down arrows to move selection")});{const t=g("RoundedRectangle",["background","resize","button"]);t.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),d(t,"fill",l,"secondaryButton"),d(t,"stroke",l,"secondaryButtonStroke")}d(g("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",l,"secondaryButtonHover");d(g("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",l,"secondaryButtonDown");{const t=g("Graphics",["resize","button","icon"]);t.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:t=>{t.moveTo(0,.5),t.lineTo(0,12.5),t.moveTo(4,.5),t.lineTo(4,12.5)}}),d(t,"stroke",l,"secondaryButtonText")}g("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),g("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),g("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:t.translate("Play"),toggleKey:"active"});{const t=g("RoundedRectangle",["play","background"]);t.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),d(t,"fill",l,"primaryButton")}{const t=g("Graphics",["play","icon"]);t.setAll({stateAnimationDuration:0,dx:1,draw:t=>{t.moveTo(0,-5),t.lineTo(8,0),t.lineTo(0,5),t.lineTo(0,-5)}}),d(t,"fill",l,"primaryButtonText")}g("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),g("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:t=>{t.moveTo(-4,-5),t.lineTo(-1,-5),t.lineTo(-1,5),t.lineTo(-4,5),t.lineTo(-4,-5),t.moveTo(4,-5),t.lineTo(1,-5),t.lineTo(1,5),t.lineTo(4,5),t.lineTo(4,-5)}}),g("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:t.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const t=g("RoundedRectangle",["switch","background"]);t.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),d(t,"fill",l,"primaryButton")}{const t=g("Circle",["switch","icon"]);t.setAll({radius:8,centerY:0,centerX:0,dx:0}),d(t,"fill",l,"primaryButtonText")}g("Graphics",["switch","icon"]).states.create("active",{dx:16}),g("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:i(o)}),g("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:n}),g("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:n}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const t=g("RoundedRectangle",["scrollbar","main","background"]);t.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),d(t,"fill",l,"fill")}{const t=g("RoundedRectangle",["scrollbar","thumb"]);t.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),d(t,"fill",l,"secondaryButton")}d(g("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",l,"secondaryButtonHover");d(g("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",l,"secondaryButtonDown");g("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:a,width:n,centerX:a,ariaLabel:t.translate("Use up and down arrows to move selection")}),g("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:a,centerY:a,height:n,ariaLabel:t.translate("Use left and right arrows to move selection")});{const t=g("PointedRectangle",["axis","tooltip","background"]);t.setAll({cornerRadius:0}),d(t,"fill",l,"alternativeBackground")}g("Label",["axis","tooltip"]).setAll({role:void 0}),g("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),g("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),g("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),g("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),g("Star").setAll({spikes:5,innerRadius:5,radius:10}),g("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),g("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),g("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),g("SpriteResizer").setAll({rotationStep:10});g("Container",["resizer","grip"]).states.create("hover",{});{const t=g("RoundedRectangle",["resizer","grip"]);t.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),d(t,"fill",l,"background"),d(t,"stroke",l,"alternativeBackground")}{const t=g("RoundedRectangle",["resizer","grip","outline"]);t.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),t.states.create("hover",{fillOpacity:.3}),d(t,"fill",l,"alternativeBackground")}g("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),g("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const t=g("Rectangle",["resizer","rectangle"]);t.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),d(t,"stroke",l,"alternativeBackground")}g("Graphics",["button","plus","icon"]).setAll({x:a,y:a,draw:t=>{t.moveTo(-4,0),t.lineTo(4,0),t.moveTo(0,-4),t.lineTo(0,4)}}),g("Graphics",["button","minus","icon"]).setAll({x:a,y:a,draw:t=>{t.moveTo(-4,0),t.lineTo(4,0)}}),g("Graphics",["button","home","icon"]).setAll({x:a,y:a,svgPath:"M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"}),g("Button",["zoomtools"]).setAll({marginTop:1,marginBottom:2}),g("ZoomTools").setAll({x:n,centerX:n,y:n,centerY:n,paddingRight:10,paddingBottom:10})}}export{d as l,l as s};
//# sourceMappingURL=p-427e92ff.js.map
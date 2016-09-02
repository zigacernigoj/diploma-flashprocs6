(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib.note_trainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{info:1,settings:2,game:3,graf:4});

	// items
	this.instance = new lib.LOADER();
	this.instance.setTransform(400,300);
	this.instance.alpha = 0.5;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,5);

	this.title_mc = new lib.LOGO();
	this.title_mc.setTransform(398.6,86.9,1.37,1.37);
	this.title_mc.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.title_mc.cache(-131,-53,264,106);

	this.dir_txt = new cjs.Text("", "22px Arial", "#984A00");
	this.dir_txt.textAlign = "center";
	this.dir_txt.lineHeight = 26;
	this.dir_txt.lineWidth = 656;
	this.dir_txt.setTransform(400.2,237.1);

	this.s2 = new lib.starymen();
	this.s2.setTransform(82.7,486.2,0.555,0.555,-14.9);

	this.s1 = new lib.starymen();
	this.s1.setTransform(524.4,218.1,0.625,0.625,-14.9);

	this.s0 = new lib.starymen();
	this.s0.setTransform(29.3,38.2,1.049,1.049,30);

	this.text = new cjs.Text("TRAJANJE", "20px Impact", "#FFBB4E");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 85;
	this.text.setTransform(723.5,80);

	this.text_1 = new cjs.Text("HITROST", "20px Impact", "#B16A01");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 72;
	this.text_1.setTransform(620,80);

	this.warning_txt = new cjs.Text("", "20px Lucida Sans Unicode", "#CC0000");
	this.warning_txt.textAlign = "center";
	this.warning_txt.lineHeight = 22;
	this.warning_txt.lineWidth = 192;
	this.warning_txt.setTransform(409.1,109.5);
	this.warning_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.acur_mc = new lib.acouracy();
	this.acur_mc.setTransform(400,459.2,0.852,0.852);
	this.acur_mc.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.staff_mc = new lib.staff();
	this.staff_mc.setTransform(406.3,56);

	this.settings_btn = new lib.fw_btn();
	this.settings_btn.setTransform(573.2,527.1);

	this.graf_mc = new lib.graf();
	this.graf_mc.setTransform(71.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.s0,p:{x:29.3,y:38.2}},{t:this.s1,p:{x:524.4,y:218.1}},{t:this.s2,p:{x:82.7,y:486.2}},{t:this.dir_txt,p:{x:400.2,y:237.1,text:"",font:"22px Arial",color:"#984A00",textAlign:"center",lineHeight:26,lineWidth:656}},{t:this.title_mc}]},1).to({state:[{t:this.s0,p:{x:547.3,y:408.8}},{t:this.s1,p:{x:657.8,y:50.2}},{t:this.s2,p:{x:172,y:294.6}},{t:this.warning_txt},{t:this.dir_txt,p:{x:59,y:39.2,text:"nastavitve",font:"60px Arial",color:"#FFFFFF",textAlign:"",lineHeight:62,lineWidth:460}},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.staff_mc},{t:this.acur_mc}]},1).to({state:[{t:this.graf_mc},{t:this.settings_btn}]},1).wait(1));

	// buttons
	this.fw_btn = new lib.test_btn2();
	this.fw_btn.setTransform(514.6,496.8);
	this.fw_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.mainMenu_btn = new lib.test_btn2();
	this.mainMenu_btn.setTransform(284.6,496.8);
	this.mainMenu_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.cb4 = new lib.cbox0();
	this.cb4.setTransform(672.1,131.2,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb11 = new lib.cbox0();
	this.cb11.setTransform(777.1,354.2,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb10 = new lib.cbox0();
	this.cb10.setTransform(777.1,283.5,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb9 = new lib.cbox0();
	this.cb9.setTransform(777.1,207.9,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb8 = new lib.cbox0();
	this.cb8.setTransform(777.1,131.2,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb7 = new lib.cbox0();
	this.cb7.setTransform(672.1,353.2,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb6 = new lib.cbox0();
	this.cb6.setTransform(672.1,277.2,0.826,0.825,0,0,0,66.5,-7.3);

	this.cb5 = new lib.cbox0();
	this.cb5.setTransform(672.1,201.2,0.826,0.825,0,0,0,66.5,-7.3);

	this.back_btn = new lib.test_btn();
	this.back_btn.setTransform(669.8,550.2);
	this.back_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.fw_btn_1 = new lib.fw_btn();
	this.fw_btn_1.setTransform(669.8,482);
	this.fw_btn_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.tenor_btn = new lib.tenor_btn();
	this.tenor_btn.setTransform(89.3,424);
	this.tenor_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.soprano_btn = new lib.soprano_btn();
	this.soprano_btn.setTransform(90.1,505.9,1,1,0,0,0,1.8,0);
	this.soprano_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.alto_btn = new lib.alto_btn();
	this.alto_btn.setTransform(90.3,346.1);
	this.alto_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.bass_btn = new lib.bass_btn();
	this.bass_btn.setTransform(88.3,267.2);
	this.bass_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.treble_btn = new lib.treble_cleff();
	this.treble_btn.setTransform(91.3,187.3);
	this.treble_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.k4 = new lib.k4();
	this.k4.setTransform(244.6,504.9);
	this.k4.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.k3 = new lib.k3();
	this.k3.setTransform(244.6,425);
	this.k3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.k2 = new lib.k2();
	this.k2.setTransform(244.6,345.1);
	this.k2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.k1 = new lib.k1();
	this.k1.setTransform(244.6,265.2);
	this.k1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.k0 = new lib.k0();
	this.k0.setTransform(244.6,185.3);
	this.k0.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.cb3 = new lib.cbox0();
	this.cb3.setTransform(475.7,472.8,1,1,0,0,0,66.5,-7.3);

	this.cb2 = new lib.cbox0();
	this.cb2.setTransform(475.7,372.5,1,1,0,0,0,66.5,-7.3);

	this.cb1 = new lib.cbox0();
	this.cb1.setTransform(475.7,272.2,1,1,0,0,0,66.5,-7.3);

	this.cb0 = new lib.cbox0();
	this.cb0.setTransform(475.7,171.9,1,1,0,0,0,66.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mainMenu_btn},{t:this.fw_btn}]},1).to({state:[{t:this.cb0},{t:this.cb1},{t:this.cb2},{t:this.cb3},{t:this.k0},{t:this.k1},{t:this.k2},{t:this.k3},{t:this.k4},{t:this.treble_btn},{t:this.bass_btn},{t:this.alto_btn},{t:this.soprano_btn},{t:this.tenor_btn},{t:this.fw_btn_1,p:{x:669.8,y:482}},{t:this.back_btn},{t:this.cb5},{t:this.cb6},{t:this.cb7},{t:this.cb8},{t:this.cb9},{t:this.cb10},{t:this.cb11},{t:this.cb4}]},1).to({state:[{t:this.fw_btn_1,p:{x:400,y:558}}]},1).to({state:[]},1).wait(1));

	// bg
	this.mcBg = new lib.bg();
	this.mcBg.setTransform(376,283.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBg}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-374.8,-458.4,2190.3,2158.4);
p.frameBounds = [rect, rect, rect, rect, rect];


// symbols:



(lib.test_btn2 = function() {
	this.initialize();

	// Layer 1
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 173;
	this.title_txt.setTransform(-1.9,-16);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-16.4,0,18.5).s().p("ArJCvQhkAAAAhkIAAiUQAAhlBkABIWTAAQBkgBAABlIAACUQAABkhkAAQrKlPrJFPg");
	this.shape.setTransform(-98.9,-18.7,1.235,1.122,0,0,0,-80.2,-16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-20.6,0,20.8).ss(2,1,1).p("ANyjDI7jAAQh8AAAABwIAACnQAABwB8AAIbjAAQB8AAAAhwIAAinQAAhwh8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AtyDEQh6AAAAhwIAAinQAAhwB6AAIbkAAQB7AAAABwIAACnQAABwh7AAg");

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(210,126,2,0.502)","rgba(254,220,171,0.502)"],[0,1],0.1,36,0,-35.9).s().p("AuYDZQhlgBAAhjIAAjoQABgVAEgPQAQhBBQABIcxAAQA0AAAZAbQAYAYAAAxIAADoQAABjhlABgAvRikQgNARAAAgIAADoQgBAiASATQARAQAkAAIcxAAQAkAAARgQQASgTgBgiIAAjoQABgpgXgSIAAABQgRgMgfAAI8xAAQgeAAgSAMIAAgBIgBACIAAgBg");
	this.shape_3.setTransform(0.5,0.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.title_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-21.5,204.4,43.4);
p.frameBounds = [rect];


(lib.test_btn = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("AuYDOQgtAAgXgXQgWgWAAgtIAAjoQAAgsAWgWQAXgXAtgBIcxAAQAtABAXAXQAWAWAAAsIAADoQAAAtgWAWQgXAXgtAAg");

	// txt
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 173;
	this.title_txt.setTransform(-1.9,-17.2);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDCAB","#FEB23D"],[0,0.424],0,26.1,0,-25.9).s().p("AOZCFI8xAAQgkAAgRgRQgSgSABgjIAAhwQOsilQRClIAABwQABAjgSASQgRARgjAAIgBAAg");
	this.shape_1.setTransform(0,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FEDCAB","#FEB23D"],[0,1],0,-27.7,0,27.9).s().p("AveBeIAAh2QgBgfAOgRIAIgJIAAABIABgBIAAAAQASgMAegBIcxAAQAeABASAMIAAAAQAXARgBAoIAAB2QwRijusCjg");
	this.shape_2.setTransform(0,-9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D27E02","#FEDCAB"],[0,1],0.1,36,0,-35.9).s().p("AuYDYQhlAAAAhkIAAjoQAAgTAFgQQAQhABQAAIcxAAQA0AAAZAbQAXAYABAwIAADoQAABkhlAAgAOZC7QAkAAARgRQASgSgBgkIAAhyIAAh2QABgogXgRIAAAAQgSgMgegBI8xAAQgeABgSAMIAAAAIgBABIAAgBIgIAJQgOARABAfIAAB2IAAByQgBAkASASQARARAkAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.title_txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-102.1,-21.6,204.4,43.4);
p.frameBounds = [rect];


(lib.starymen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB852").s().p("ABaC/IhaguIhYAuQgUAJgKAAQgMAAgEgHQgEgHAAgIIABgKIABgDIAThtIhHhFQgKgKgEgHIgEgMQAAgIAGgFIAOgHIB1gSIA1hpIAIgKQAFgEADAAQAGAAAGAGQAIAGAHAPIAuBcIBhAPIATAEIAOAIQAEAFAAAHQAAAOgTATIhIBAIASBvIABAEIAAAIIgDAPQgEAGgKAAQgLAAgRgJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB852").s().p("Ah6DLQgLgBgDgGIAAAAQgEgIAAgHIAAgBIABgKIAAAAIABgDIAAAAIAThuIgBgBIhGhFIgBgBQgKgJgDgIIgCgDIgDgJIAAAAQAAgIAGgFIAPgHIB2gSIAvhdIAHgOIABgBIAHgIIABgBQAEgEADAAIAFABQADACAEADIAEADQAFAGAGAMIACAEIAtBaIAEABIBeAOIAEABIAPADIAEACIAKAGIADAEQACAEAAAEIAAAFQgDANgRAQIgEADIhEA+IABAFIAQBrIACAEIAAABIAAAEIAAADIgBAFIgDAKQgBADgDABQgDADgGAAIgEgBQgKgBgPgIIgDgCIhXgsIgBABIhYAtIgDABQgSAJgLAAIgCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB852").s().p("Ah7DNQgLAAgDgHIAAAAQgFgIAAgHIAAgBIACgJIAAgBIABgDIAAAAIAShvIAAgBIhIhGIgBgBQgJgKgEgHIgBgDIgEgJIAAAAQAAgJAHgFIAOgGIB4gTIAvhfIAIgNIAAgBIAIgJIABAAQAEgEADAAIAFABQADABAEAEIADACQAGAHAGAMIACAEIAuBbIADABIBgAOIAEABIAPAEIAEABIAKAGIADAEQADAEAAAFIgBAFQgCAMgRARIgEADIhFA+IAAAFIARBtIABADIAAABIAAAFIAAADIAAAFIgDAKQgBADgDACQgDACgGAAIgFAAQgKgBgPgIIgDgCIhYgtIgBABIhZAtIgDABQgSAJgLAAIgCAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB852").s().p("Ah9DQQgLgBgDgGIAAAAQgEgIAAgIIAAgBIABgJIAAgBIABgDIAAAAIAThwIgBgBIhIhHIgBgBQgKgKgDgHIgCgDIgDgJIAAgBQAAgIAGgFIAPgHIB5gTIAwhgIAHgNIABgBIAIgJIABgBQAEgEADAAIAEABQAEABAEAEIADACQAGAHAHAMIACAEIAtBdIAEABIBhAOIAEABIAPAEIAFACIAJAFIAEAEQACAEAAAFIAAAFQgDAMgRARIgEADIhFBAIAAAFIAQBuIACADIAAABIAAAEIAAAEIgBAFIgCAKQgCADgCACQgDADgGAAIgFgBQgKgBgPgIIgEgCIhZgtIgBABIhaAuIgDABQgTAJgLAAIgCAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB852").s().p("Ah+DSQgLAAgEgHIAAAAQgEgIAAgIIAAgBIABgJIAAgBIABgDIAAAAIAThyIAAgBIhJhHIgBgBQgKgKgEgHIgBgDIgEgKIAAAAQAAgJAHgFIAPgHIB6gTIAxhhIAHgOIABgBIAHgIIABgBQAEgEAEAAIAEAAQAEACAEADIADADQAHAGAGANIACAEIAuBdIAEACIBiAOIAEABIAPAEIAFACIAKAFIADAEQADAEAAAFIAAAFQgDANgRARIgEADIhHBAIAAAFIARBvIABAEIAAABIABAEIAAAEIgBAFIgDAKQgBADgCACQgDADgGAAIgFAAQgKgBgQgIIgDgCIhbguIgBAAIhbAvIgDABQgTAJgLAAIgCAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB852").s().p("Ah/DVQgMAAgDgHIgBgBQgEgHAAgIIAAgBIABgKIAAgBIABgDIAAAAIAUhzIgBgBIhKhIIgBgBQgKgKgDgIIgCgDIgDgJIgBgBQAAgJAHgFIAPgHIB9gTIAwhiIAIgOIABgBIAHgJIABAAQAEgFAEAAIAEABQAEABAEAEIADACQAHAHAGANIACAEIAvBeIAEACIBiAOIAFABIAQAEIAEACIAKAFIADAFQADADABAFIgBAFQgCANgSASIgEADIhHBBIAAAEIARBxIABAEIAAABIABAEIAAAEIgBAFIgDAKQgBADgDACQgCADgGABIgFAAQgLgCgQgIIgDgCIhbguIgCAAIhcAvIgDABQgTAKgLAAIgCAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB852").s().p("AiBDXQgMAAgDgHIAAAAQgFgIAAgIIAAgBIACgKIAAAAIABgDIAAgBIATh0IAAgBIhLhKIgBgBQgKgKgEgHIgBgDIgEgKIAAgBQAAgIAHgGIAPgHIB+gTIAxhjIAIgOIAAgBIAIgJIABgBQAEgEAEAAIAEAAQAEABAEAEIADADQAHAGAGANIACAEIAwBgIADACIBkAOIAFABIAQAEIAEACIAKAGIAEAEQADADAAAFIAAAFQgCANgSASIgEAEIhIBBIgBAFIARByIACAEIAAABIAAAEIAAAEIAAAFIgDALQgBADgDACQgCADgGAAIgGAAQgKgBgQgIIgEgCIhcgvIgCAAIhdAwIgDABQgTAJgMAAIgCAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB852").s().p("AiCDaQgMAAgEgHIAAgBQgEgIAAgIIAAgBIABgKIAAAAIABgDIAAgBIAUh1IgBgBIhLhLIgBgBQgKgKgEgHIgCgDIgDgKIgBgBQAAgJAHgFIAPgHICAgUIAyhlIAHgNIABgBIAIgKIABAAQAEgFAEAAIADABQAFAAAEAFIADACQAHAHAHANIACAEIAwBhIADACIBlAPIAFABIAQADIAEACIAKAGIAEAEQADAEABAEIAAAGQgCANgSASIgEADIhJBDIgCAEIASB0IABAEIAAABIABAEIAAAEIgBAFIgCALIgEAFQgDADgGABIgFAAQgLgBgQgJIgEgCIhdgvIgCAAIheAwIgDABQgUAKgLAAIgCAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB852").s().p("AiEDcQgMAAgDgHIgBAAQgEgIAAgIIAAgBIABgLIAAAAIABgDIAAgBIAUh3IAAgBIhNhLIgBgBQgKgKgEgHIgBgDIgEgKIAAgCQAAgIAHgGIAPgHICBgUIAyhmIAIgOIABgBIAIgJIABgBQAEgEAEAAIADAAQAFABAEAEIADACQAHAHAHANIACAEIAwBiIAEADIBmAPIAFABIAQAEIAEABIALAGIAEAEQADAEAAAFIAAAFQgCANgSATIgEADIhKBDIgBAFIASB1IABAEIAAABIABAEIAAAEIgBAFIgDALIgDAFQgDAEgGAAIgFAAQgLgBgRgIIgDgCIhfgwIgCgBIhfAyIgDABQgUAJgLAAIgDAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB852").s().p("AiFDfQgMAAgEgHIAAgBQgFgIAAgIIAAgBIABgLIAAAAIABgDIAAgBIAVh4IgBgBIhNhMIgBgBQgKgKgEgIIgCgDIgEgKIAAgBQAAgJAHgGIAQgHICCgUIAzhnIAIgOIABgBIAIgKIABAAQAEgEAEgBIADAAQAEABAFAEIADADQAHAGAHAOIACAEIAxBjIADADIBoAPIAEABIARAEIAFABIAKAGIAEAEQADAEABAFIAAAFQgCAOgSASIgEAEIhLBEIgCAEIASB2IABAFIAAABIABAEIAAAEIAAAFIgDALIgDAFQgDAEgGABIgFAAQgLgBgRgJIgEgCIhfgwIgDgBIhgAyIgDABQgUAKgMAAIgCAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCB852").s().p("AiHDiQgMgBgEgHIAAAAQgFgJAAgIIAAgBIACgKIAAgBIABgDIAAAAIAUh6IAAgBIhOhNIgBgBQgLgKgEgIIgBgDIgEgKIgBgCQAAgJAIgGIAPgHICEgUIA0hoIAIgOIAAgBIAIgKIABgBQAEgEAFAAIADAAQAEAAAFAFIADACQAHAHAHANIACAFIAyBkIADADIBpAPIAEABIARAEIAFABIAKAGIAEAEQAEAEAAAFIABAFQgCAOgTATIgEADIhLBFIgCAFIASB3IABAEIAAABIABAFIAAAEIAAAFIgDALIgDAFQgDAFgGAAIgGAAQgLAAgRgJIgEgCIhggxIgDgBIhhAyIgDABQgUAKgMABIgDAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCB852").s().p("AiIDkQgMAAgEgHIgBgBQgEgIAAgJIAAgBIABgKIAAgBIABgDIAAAAIAVh7IgBgBIhPhOIgBgBQgKgLgEgHIgCgDIgEgLIAAgBQAAgJAHgGIAQgIICFgUIA0hqIAIgOIABgBIAIgJIABgBQAEgEAFgBIADAAQAEABAFAEIADADQAHAGAIAOIACAEIAyBmIADACIBqAQIAEABIARAEIAFABIALAGIAEAEQADAEABAFIAAAFQgBAOgTAUIgEADIhMBGIgDAEIASB5IACAEIAAABIABAFIAAAEIgBAFIgCALIgDAGQgDAEgGABIgGAAQgLgBgSgJIgDgCIhigyIgDAAIhiAzIgDABQgUAKgMAAIgDAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB852").s().p("AiJDnQgNgBgEgHIgBgBQgEgIAAgIIAAgBIABgLIAAgBIABgDIAAAAIAVh9IAAgBIhQhOIgBgBQgLgLgEgHIgBgDIgEgLIgBgCQAAgJAIgGIAPgHICHgVIA1hrIAIgOIABgBIAIgKIABgBQAEgEAFAAIACAAQAFAAAFAFIADACQAHAHAIANIACAFIAzBmIACADIBsAQIAEABIARAEIAFACIALAFIAEAEQAEAEABAFIAAAGQgBAOgUATIgEAEIhNBGIgDAFIATB6IABAEIAAABIABAFIAAAEIAAAFIgDALIgCAGQgDAEgGABIgGAAQgMAAgRgJIgEgCIhjgzIgDgBIhjA0IgDABQgVAKgMABIgCAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCB852").s().p("AiLDpQgNAAgEgIIAAAAQgFgIAAgJIAAgBIABgLIAAAAIABgDIAAgBIAWh+IAAgBIhShPIgBgBQgKgLgEgIIgCgDIgEgKIAAgCQAAgKAHgGIAQgHICIgVIA1hsIAJgOIAAgBIAJgKIABgBQAEgEAFgBIACAAQAFAAAFAFIADACQAIAHAHAOIACAEIAzBoIADADIBtAQIAEABIARAEIAFACIALAGIAFADQADAEABAFIAAAGQgBAOgTAUIgEAEIhOBHIgDAEIATB8IABAEIAAABIABAEIAAAFIAAAFIgDAMIgCAFQgDAFgHABIgGAAQgLAAgSgKIgEgCIhkgzIgDgBIhkA0IgDABQgVAKgMABIgDAAg");
	this.shape_13.setTransform(0,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCB852").s().p("AiMDsQgNAAgEgIIgBgBQgFgIAAgJIAAgBIACgLIAAAAIABgDIAAgBIAVh/IAAgBIhShQIgBgBQgLgLgEgIIgBgDIgEgLIgBgCQAAgJAHgGIARgIICJgVIA2htIAJgPIAAgBIAJgKIABAAQAEgFAFgBIACAAQAFABAFAEIADADQAIAGAHAPIACAEIA0BpIADADIBtAQIAFABIARAFIAFABIALAGIAFADQAEAEABAGIAAAFQgBAPgUAUIgEADIhOBIIgEAFIATB8IABAFIAAABIACAEIAAAFIAAAFIgDAMIgDAFQgCAFgHABIgGABQgLgBgSgJIgFgCIhkg0IgEgBIhlA1IgDABQgVAKgMABIgDAAg");
	this.shape_14.setTransform(0,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCB852").s().p("AiODuQgNAAgEgIIgBAAQgFgJAAgIIAAgBIACgMIAAAAIABgDIAAgBIAWiAIAAgBIhThSIgBgBQgLgKgEgIIgCgDIgEgLIgBgCQAAgKAIgGIAQgIICLgVIA3huIAIgPIABgBIAIgKIABgBQAEgEAGgBIACAAQAFAAAFAFIADACQAIAHAHAOIACAFIA1BqIACADIBvAQIAFABIARAFIAGABIALAGIAEADQAEAEABAGIABAFQgBAPgUAUIgEAEIhQBJIgDAEIATB+IABAFIAAABIABAEIAAAFIAAAFIgDAMIgCAGQgCAFgHABIgGAAQgMAAgSgKIgEgCIhmg0IgEgBIhmA1IgDABQgVAKgNABIgDAAg");
	this.shape_15.setTransform(0,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCB852").s().p("AiPDxQgNAAgFgIIgBgBQgEgIAAgJIAAgBIABgLIAAgBIABgDIAAgBIAWiBIAAgBIhUhTIgBgBQgKgKgFgIIgBgDIgFgLIAAgDQAAgKAHgGIARgIICNgVIA2hvIAJgPIABgBIAIgKIABgBQAEgFAFgBIACAAQAGAAAFAFIADADQAIAGAIAPIACAEIA1BsIACADIBwARIAFABIASAEIAFABIALAGIAFADQAEAFABAFIAAAFQAAAPgUAVIgEAEIhRBJIgEAFIATB/IACAFIAAABIABAEIAAAFIAAAFIgDAMIgCAGQgCAFgHABIgGABQgMAAgTgKIgEgCIhng1IgEgBIhnA1IgDABQgWALgMABIgDAAg");
	this.shape_16.setTransform(0,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCB852").s().p("AiQDzQgOAAgEgIIgBAAQgFgJAAgJIAAgBIABgLIAAgBIABgDIAAgBIAXiDIAAgBIhVhTIgBgBQgLgLgEgIIgCgDIgEgLIgBgCQAAgKAIgHIARgHICOgWIA3hxIAJgOIAAgBIAJgLIABgBQAEgEAFgBIACAAQAGAAAFAFIADACQAIAHAIAOIACAFIA2BsIACAEIBxARIAFABIASAEIAFABIALAGIAFADQAEAFACAFIAAAGQAAAPgVAVIgEAEIhRBKIgFAEIAUCBIABAFIAAABIACAEIAAAFIAAAFIgDAMIgCAGQgDAGgGABIgHAAQgLAAgTgKIgFgCIhog1IgEgCIhoA3IgDABQgWAKgNABIgCAAg");
	this.shape_17.setTransform(0,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCB852").s().p("AiSD2QgOAAgEgIIgBgBQgFgIAAgJIAAgBIACgMIAAgBIABgDIAAgBIAWiEIAAgBIhVhUIgBgBQgLgLgFgIIgBgDIgFgLIgBgDQAAgKAIgGIARgIICQgWIA4hyIAJgPIAAgBIAJgKIABgBQAEgFAFgBIACAAQAFAAAGAFIADADQAIAGAIAPIACAEIA2BuIADAEIByARIAFABIASAEIAFABIALAGIAFADQAFAFABAFIABAGQgBAPgUAVIgEAEIhSBLIgFAFIAUCCIABAFIAAABIACAEIAAAFIAAAFIgDAMIgCAGQgDAGgHABIgGABQgMAAgTgKIgFgCIhog2IgEgCIhqA3IgDABQgWALgNABIgDAAg");
	this.shape_18.setTransform(0,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCB852").s().p("ABvDtIhug5IhuA5QgZAMgNgBQgPABgFgKQgFgIAAgKIACgMIABgFIAXiGIhYhWQgNgNgEgJIgFgOQAAgKAIgHIARgIICRgWIA4hzIAKgQIAKgLQAFgHAGABQAGAAAIAHQAJAIAJASIA5BzIB5ASIAXAFIARAJQAGAHAAAJQAAARgZAYIhYBQIAVCKIACAEIAAAKIgEASQgEAJgMgBQgOABgWgMg");
	this.shape_19.setTransform(0,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCB852").s().p("AiSD2QgOAAgEgIIgBgBQgFgIAAgJIAAgBIABgMIAAgBIABgDIAAgBIAXiEIAAgBIhWhUIgBgBQgKgLgFgIIgBgDIgFgLIgBgDQAAgKAIgGIARgIICQgWIA4hyIAJgPIAAgBIAJgKIABgBQAEgFAFgBIACAAQAFAAAGAFIADACQAIAHAIAPIACAEIA3BuIACAEIByARIAFABIASAEIAFABIAMAGIAFADQAEAFABAFIABAGQAAAPgVAVIgEAEIhSBLIgFAFIAUCCIABAFIAAABIACAEIAAAFIAAAGIgDALIgCAGQgDAGgGACIgHAAQgMAAgTgKIgEgCIhpg2IgEgCIhqA3IgDABQgWALgNABIgDAAg");
	this.shape_20.setTransform(0,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCB852").s().p("AiRD0QgNAAgFgIIAAgBQgFgJAAgIIAAgBIABgMIAAgBIABgDIAAgBIAXiDIAAgBIhVhTIgBgBQgLgLgFgIIgBgDIgEgLIgBgDQAAgJAIgHIAQgIICPgVIA3hxIAJgPIAAgBIAJgKIABgBQAEgEAFgBIACgBQAGABAFAEIADADQAIAGAIAPIACAFIA2BsIACAEIBxARIAFABIASAEIAFABIALAGIAFADQAEAFACAFIAAAFQAAAQgVAVIgEADIhRBLIgEAEIATCBIABAFIAAABIACAEIAAAFIAAAGIgDALIgCAGQgCAGgHABIgHABQgLgBgTgJIgFgCIhog2IgEgBIhoA2IgDABQgWALgNABIgDAAg");
	this.shape_21.setTransform(0,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCB852").s().p("AiPDxQgOAAgEgIIgBAAQgFgJAAgJIAAgBIACgLIAAgBIABgDIAAgBIAWiBIAAgBIhUhTIgBgBQgLgKgEgIIgCgDIgEgLIgBgDQAAgKAIgGIARgIICMgVIA3hwIAJgOIABgBIAIgLIABgBQAEgEAFgBIACAAQAGAAAFAFIADACQAIAHAIAOIACAFIA1BrIACAEIBwAQIAFABIASAFIAFABIALAGIAFADQAEAEABAGIABAFQgBAPgUAVIgEAEIhRBJIgEAFIAUB/IABAFIAAABIABAFIAAAEIAAAGIgDALIgCAGQgCAGgHABIgGAAQgMAAgTgKIgEgCIhng1IgEgBIhnA2IgDABQgWAKgMABIgDAAg");
	this.shape_22.setTransform(0,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCB852").s().p("AiODvQgNAAgEgIIgBgBQgFgIAAgJIAAgBIABgLIAAgBIABgDIAAgBIAXiAIgBgBIhThSIgBgBQgKgKgFgIIgBgDIgEgLIgBgDQAAgJAHgGIARgIICLgVIA3hvIAIgOIABgBIAIgKIABgBQAEgFAGgBIACAAQAFABAFAEIADADQAIAGAHAPIACAEIA1BrIADADIBvAQIAEABIASAFIAFABIALAGIAFADQAEAEABAGIAAAFQAAAPgUAUIgEAEIhQBJIgEAEIATB/IABAEIAAABIACAFIAAAEIAAAGIgDALIgCAGQgDAFgHABIgGABQgLgBgTgJIgEgCIhmg0IgEgCIhmA1IgDABQgWALgMABIgDAAg");
	this.shape_23.setTransform(0,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCB852").s().p("AiNDsQgNAAgEgHIgBgBQgEgIAAgJIAAgBIABgLIAAgBIABgDIAAgBIAWh/IAAgBIhThRIgBgBQgKgKgEgIIgCgDIgEgLIgBgCQAAgKAIgGIAQgHICKgVIA2huIAIgOIABgBIAJgKIABgBQAEgEAFgBIACAAQAFAAAFAFIADACQAIAHAHAOIACAEIA0BqIADADIBuAQIAFABIARAEIAFACIALAFIAEAEQAEAEABAFIABAGQgBAOgUAUIgEAEIhPBIIgDAFIATB9IABAEIAAABIABAFIAAAEIAAAGIgDALIgCAGQgDAFgGABIgGAAQgMAAgSgKIgEgCIhlgzIgEgCIhmA1IgCABQgVALgNAAIgDAAg");
	this.shape_24.setTransform(0,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCB852").s().p("AiLDqQgNAAgEgIIgBAAQgFgJAAgIIAAgBIACgLIAAgBIABgDIAAgBIAVh+IAAgBIhRhPIgBgBQgLgLgEgIIgBgDIgFgKIAAgDQAAgJAHgGIAQgIICJgUIA1htIAJgOIAAgBIAJgKIABgBQAEgEAFgBIACAAQAFABAFAEIADADQAIAGAHAOIACAFIA0BoIACADIBtAQIAFABIARAEIAFABIALAGIAEAEQAEAEABAFIAAAFQgBAPgTAUIgEADIhPBIIgDAEIATB8IABAFIAAABIACAEIAAAEIgBAGIgDALIgCAGQgDAFgGABIgGAAQgLgBgSgJIgEgCIhkgzIgEgBIhlA0IgCABQgVAKgMABIgDAAg");
	this.shape_25.setTransform(0,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCB852").s().p("AiKDoQgNgBgEgHIAAgBQgFgIAAgIIAAgBIABgLIAAgBIABgDIAAAAIAWh9IAAgBIhRhPIgBgBQgKgLgFgHIgBgDIgEgLIgBgCQAAgJAIgGIAQgIICHgUIA1hrIAIgPIABgBIAIgKIABAAQAEgFAFAAIACAAQAFAAAFAFIADACQAIAHAHAOIACAEIAzBnIADADIBrAQIAFABIARAEIAFABIALAGIAEAEQAEAEABAFIAAAFQgBAPgUATIgEAEIhNBHIgDAEIATB6IABAFIAAABIABAEIAAAEIAAAGIgDALIgDAGQgCAEgHABIgGAAQgLAAgSgJIgEgCIhjgzIgDgBIhkA0IgCABQgVAKgMABIgDAAg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCB852").s().p("AiIDlQgNAAgEgHIgBgBQgEgIAAgJIAAgBIABgKIAAgBIABgDIAAAAIAVh8IAAgBIhQhOIgBgBQgKgLgEgHIgCgDIgEgLIAAgBQAAgKAHgGIAQgHICGgUIA0hqIAIgPIABgBIAIgJIABgBQAEgEAFgBIADAAQAEABAFAEIADADQAHAGAIAOIACAEIAyBmIADADIBrAQIAEABIARAEIAFABIALAGIAEAEQADAEABAFIAAAFQgBAOgTATIgEAEIhNBGIgCAEIASB6IABAEIAAABIABAEIAAAFIAAAFIgDALIgCAGQgDAEgHABIgFAAQgLgBgSgJIgEgCIhigyIgDgBIhjA0IgCABQgVAKgMAAIgCAAg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCB852").s().p("AiHDjQgNgBgDgHIgBAAQgFgIABgJIAAgBIABgKIAAgBIABgDIAAAAIAVh7IgBgBIhPhNIgBgBQgKgKgEgIIgBgDIgEgKIgBgCQAAgJAIgGIAPgHICFgUIAzhpIAIgOIABgBIAIgKIABgBQAEgEAFgBIADABQAEAAAFAFIADACQAHAHAHANIACAFIAyBkIADADIBqAPIAEABIARAFIAFABIAKAGIAEADQAEAEABAGIAAAFQgCAOgTATIgEADIhLBGIgDAEIASB4IACAEIAAABIABAFIAAAEIgBAFIgCALIgDAFQgDAFgGAAIgGAAQgLAAgRgJIgEgCIhhgyIgDAAIhiAyIgCABQgVAKgMABIgCAAg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCB852").s().p("AiGDgQgMAAgEgHIAAgBQgFgIAAgIIAAgBIABgKIAAgBIABgDIAAAAIAVh5IAAgBIhOhNIgBgBQgLgKgEgIIgBgDIgEgKIAAgBQAAgJAHgGIAPgHICDgUIA0hoIAIgOIAAgBIAIgKIABAAQAEgFAFAAIADAAQAEABAFAEIADADQAHAGAHAOIACAEIAyBkIADACIBoAPIAEABIARAEIAFACIAKAGIAEADQADAEABAFIAAAGQgBANgTATIgEAEIhLBEIgCAFIASB2IABAFIAAABIABAEIAAAEIAAAFIgDALIgDAFQgDAEgGABIgGAAQgLgBgRgIIgDgCIhggxIgDgBIhhAyIgCABQgVAKgLAAIgDAAg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCB852").s().p("AiEDeQgNAAgDgIIgBAAQgEgIAAgIIAAgBIABgKIAAgBIABgDIAAAAIAVh4IgBgBIhNhMIgBgBQgKgKgEgHIgBgDIgEgLIgBgBQAAgJAHgGIAQgHICBgTIAzhnIAIgOIABgBIAIgJIABgBQAEgEAEgBIADABQAFAAAEAFIADACQAHAHAHANIACAEIAxBjIADACIBnAPIAFABIAQAEIAFACIAKAFIAEAEQADAEABAFIAAAFQgCAOgSASIgFAEIhKBEIgBAEIARB2IACAEIAAABIABAEIAAAEIgBAFIgDALIgDAFQgDAEgGABIgFAAQgLgBgRgJIgEgCIhfgwIgCgBIhgAyIgCABQgUAJgMABIgCAAg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCB852").s().p("AiDDbQgMAAgEgHIAAAAQgEgIAAgIIAAgBIABgLIAAAAIABgDIAAAAIAUh3IgBgBIhMhLIgBgBQgKgKgEgHIgBgDIgEgKIAAgBQAAgJAHgGIAPgHICAgUIAyhlIAIgOIABgBIAIgJIABgBQAEgEAEAAIADAAQAFABAEAEIADACQAHAHAHANIACAEIAwBiIADACIBmAPIAFABIAQAEIAFABIAKAGIAEAEQADAEAAAFIAAAFQgCANgSATIgEADIhJBDIgCAFIASB0IABAEIAAABIABAEIAAAEIgBAFIgCALIgEAFQgCAEgHAAIgFAAQgLgBgQgIIgEgCIhegwIgCAAIhfAxIgCABQgUAJgMAAIgCAAg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FCB852").s().p("AiCDZQgMAAgDgHIAAgBQgFgHAAgJIAAgBIABgKIAAAAIABgDIAAAAIAUh2IAAgBIhMhKIgBgBQgKgKgDgHIgCgDIgEgKIAAgBQAAgJAHgFIAPgHIB/gUIAyhkIAHgOIABgBIAIgJIABgBQAEgEAEAAIAEAAQAEABAEAEIADADQAHAGAHANIACAFIAvBgIAEACIBlAPIAEABIAQAEIAEABIALAGIADAEQADAEABAFIAAAFQgCANgSASIgEADIhJBDIgBAEIARBzIACAEIAAABIAAAEIAAAEIAAAGIgDAKIgDAFQgDADgGABIgFAAQgLgBgQgJIgEgCIhdgvIgCAAIheAwIgCABQgUAKgLAAIgDAAg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCB852").s().p("AiADXQgMgBgDgHIgBAAQgEgIAAgIIAAgBIABgKIAAAAIABgDIAAAAIAUh0IgBgBIhKhJIgBgBQgKgKgEgIIgBgDIgEgJIAAgBQAAgJAHgFIAOgHIB+gUIAxhjIAIgNIAAgBIAIgKIABAAQAEgEAEgBIAEABQAEABAEAEIADACQAHAHAGANIACAEIAwBfIADACIBkAPIAEABIAQADIAEACIALAGIADAEQADAEAAAEIAAAGQgCANgSARIgEAEIhIBBIAAAFIARBxIABAEIAAABIABAFIAAADIgBAGIgDAKQgBADgCACQgDADgGABIgFgBQgLgBgQgIIgDgCIhcgvIgCAAIhdAwIgCABQgUAJgLABIgCAAg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCB852").s().p("Ah/DUQgMAAgDgHIAAAAQgEgIAAgIIAAgBIABgKIAAAAIABgDIAAAAIAThzIAAgBIhKhIIgBgBQgKgKgEgHIgBgDIgEgKIAAgBQAAgIAHgGIAPgHIB8gTIAwhiIAIgNIABgBIAHgJIABgBQAEgEAEAAIAEAAQAEACAEADIADADQAHAGAGANIACAEIAvBeIADACIBjAPIAEABIAQADIAEACIAKAGIAEAEQACAEABAEIAAAFQgDANgRASIgEADIhHBBIgBAEIARBxIACAEIAAABIAAAEIAAAEIgBAFIgCAKQgCADgCACQgDADgGAAIgFAAQgKgBgQgIIgDgCIhbgvIgCABIhcAvIgCABQgUAJgLAAIgCAAg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCB852").s().p("Ah+DSQgLgBgDgGIgBgBQgEgHAAgIIAAgBIABgKIAAAAIABgDIAAAAIAUhyIgBgBIhJhHIgBgBQgKgKgDgHIgCgDIgDgKIAAAAQAAgJAGgFIAPgHIB7gTIAwhhIAHgNIABgBIAHgJIABgBQAEgEAEAAIAEABQAEABAEAEIADACQAGAHAHAMIACAFIAuBdIAEABIBhAOIAEABIAQAEIAEACIAKAFIAEAFQACADAAAFIAAAFQgCANgSARIgEADIhGBAIAAAFIARBvIABAEIAAABIAAAEIAAAEIAAAFIgDAKQgBADgDACQgDACgGABIgEgBQgLgBgPgIIgEgCIhagtIgBAAIhbAvIgCABQgUAJgLAAIgCAAg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCB852").s().p("Ah8DPQgMAAgDgHIAAAAQgEgHAAgIIAAgBIABgKIAAAAIABgDIAAAAIAThxIgBgBIhIhGIgBgBQgJgKgEgHIgBgDIgEgJIAAgBQAAgIAHgFIAOgHIB5gTIAwhgIAHgNIABgBIAIgJIABAAQAEgEADAAIAEAAQAEACAEADIADADQAGAGAHANIACAEIAtBcIAEABIBgAOIAFABIAPAEIAEACIAKAFIADAFQADADAAAFIAAAFQgDAMgRARIgEADIhGBAIABAFIAQBtIACAEIAAABIAAAEIAAAEIgBAFIgDAKQgBADgDACQgDACgFAAIgFAAQgKgBgQgIIgDgCIhZgtIgBAAIhaAuIgCABQgTAJgLAAIgCAAg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCB852").s().p("Ah7DNQgLAAgDgHIAAAAQgEgIAAgHIAAgBIABgKIAAAAIABgDIAAAAIAThvIgBgBIhHhGIgBgBQgKgKgEgHIgBgDIgDgJIAAAAQAAgIAGgGIAPgGIB3gTIAvheIAIgOIAAgBIAIgIIABgBQAEgEADAAIAFABQADABAEAEIADACQAGAHAGAMIACAEIAuBbIADABIBgAOIAEABIAPAEIAEACIAKAFIADAEQACAEAAAFIAAAFQgDAMgRARIgEADIhEA+IAAAFIARBtIABADIAAABIAAAEIAAAEIgBAFIgCAKQgCADgCABQgDADgGAAIgFAAQgKgCgPgHIgDgCIhYgtIgBABIhZAtIgCABQgTAJgLAAIgCAAg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCB852").s().p("Ah6DLQgLgBgDgGIAAAAQgEgIAAgIIAAgBIABgJIAAAAIABgDIAAAAIAThuIgBgBIhGhFIgBgBQgKgJgDgHIgBgDIgEgKIAAAAQAAgIAHgFIAOgHIB2gSIAvhdIAHgNIABgBIAHgJIABgBQAEgEADAAIAFABQADACAEADIAEADQAFAGAGAMIACAEIAtBaIAEABIBeAOIAEABIAPADIAEACIAKAGIADAEQACAEAAAEIAAAFQgDANgRAQIgEADIhEA+IABAFIAQBrIACAEIAAABIAAAEIAAADIgBAFIgDAKQgBADgDABQgDADgGAAIgEgBQgKgBgPgIIgDgCIhXgsIgBABIhYAtIgCABQgTAJgLAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.7,-20,41.6,40.2);
p.frameBounds = [rect, new cjs.Rectangle(-21,-20.2,42.1,40.7), new cjs.Rectangle(-21.2,-20.5,42.6,41.2), new cjs.Rectangle(-21.5,-20.7,43.2,41.7), new cjs.Rectangle(-21.8,-21,43.7,42.2), new cjs.Rectangle(-22,-21.2,44.2,42.7), new cjs.Rectangle(-22.3,-21.5,44.7,43.2), new cjs.Rectangle(-22.5,-21.7,45.2,43.7), new cjs.Rectangle(-22.8,-22,45.8,44.2), new cjs.Rectangle(-23.1,-22.2,46.3,44.7), new cjs.Rectangle(-23.3,-22.5,46.8,45.3), new cjs.Rectangle(-23.6,-22.8,47.3,45.8), new cjs.Rectangle(-23.9,-23,47.9,46.3), new cjs.Rectangle(-24.1,-23.3,48.4,46.8), new cjs.Rectangle(-24.4,-23.5,48.9,47.3), new cjs.Rectangle(-24.6,-23.8,49.5,47.8), new cjs.Rectangle(-24.9,-24,50,48.3), new cjs.Rectangle(-25.2,-24.3,50.5,48.8), new cjs.Rectangle(-25.4,-24.5,51.1,49.3), new cjs.Rectangle(-25.7,-24.8,51.6,49.8), new cjs.Rectangle(-25.4,-24.5,51.1,49.3), new cjs.Rectangle(-25.2,-24.3,50.6,48.8), new cjs.Rectangle(-24.9,-24.1,50.1,48.4), new cjs.Rectangle(-24.7,-23.8,49.6,47.9), new cjs.Rectangle(-24.4,-23.6,49.1,47.4), new cjs.Rectangle(-24.2,-23.3,48.6,46.9), new cjs.Rectangle(-23.9,-23.1,48.1,46.4), new cjs.Rectangle(-23.7,-22.9,47.6,46), new cjs.Rectangle(-23.4,-22.6,47.1,45.5), new cjs.Rectangle(-23.2,-22.4,46.6,45), new cjs.Rectangle(-23,-22.1,46.1,44.5), new cjs.Rectangle(-22.7,-21.9,45.6,44), new cjs.Rectangle(-22.5,-21.6,45.1,43.5), new cjs.Rectangle(-22.2,-21.4,44.6,43.1), new cjs.Rectangle(-22,-21.2,44.1,42.6), new cjs.Rectangle(-21.7,-20.9,43.6,42.1), new cjs.Rectangle(-21.5,-20.7,43.1,41.6), new cjs.Rectangle(-21.2,-20.5,42.6,41.2), new cjs.Rectangle(-21,-20.2,42.1,40.7), new cjs.Rectangle(-20.7,-20,41.6,40.2)];


(lib.star = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB8402").s().p("AAiBAIgigYIghAXIgEABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAMgoIghgXQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIADgBIAqgCIAPgnQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIACgBIADABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIANAnIAqACIAEABIACADIAAAEIgCADIghAXIAMAoIAAAEQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEAAgAgIgLIgDADIgDABIgcABIAWAPQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAEIgIAbIAYgQIACgBIADABIAYAQIgJgbIAAgEQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAXgPIgcgBIgEgBIgCgEIgJgag");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgSAOIAAgEQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgWgPIAcgBIADgBIADgDIAIgbIAJAaIACAEIAEABIAcABIgXAPQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABIAAAEIAJAbIgYgQIgDgBIgCABIgYAQg");
	this.shape_1.setTransform(0.1,0.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.7,-6.4,13.6,13);
p.frameBounds = [rect];


(lib.staffline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB347").ss(3,1,1).p("EgtsAAAMBbZAAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-292.5,0,585.2,0);
p.frameBounds = [rect];


(lib.scoreboard = function() {
	this.initialize();

	// Layer 1
	this.title_txt = new cjs.Text("", "20px Impact", "#FF6600");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 22;
	this.title_txt.lineWidth = 172;
	this.title_txt.setTransform(-1.9,-38.3);

	this.addChild(this.title_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-87.9,-38.3,176.1,28.4);
p.frameBounds = [rect];


(lib.scanlines = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg/9guvMB/7AAAEg/9gtGMB/7AAAEg/9grdMB/7AAAEg/9gp0MB/7AAAEg/9goLMB/7AAAEg/9gmiMB/7AAAEg/9gk5MB/7AAAEg/9gjQMB/7AAAEg/9ghnMB/7AAAEg/9gS2MB/7AAAEg/9gUfMB/7AAAEg/9gWIMB/7AAAEg/9gXxMB/7AAAEg/9gZaMB/7AAAEg/9gbDMB/7AAAEg/9gcsMB/7AAAEg/9geVMB/7AAAEg/9gf+MB/7AAAEg/9gCcMB/7AAAEg/9gAzMB/7AAAEg/9gEFMB/7AAAEg/9gFuMB/7AAAEg/9gHXMB/7AAAEg/9gJAMB/7AAAEg/9gKpMB/7AAAEg/9gMSMB/7AAAEg/9gN7MB/7AAAEg/9gPkMB/7AAAEg/9gRNMB/7AAAEg/9AA0MB/7AAAEg/9ACdMB/7AAAEg/9AEGMB/7AAAEg/9AFvMB/7AAAEg/9AHYMB/7AAAEg/9AJBMB/7AAAEg/9AKqMB/7AAAEg/9Ap1MB/7AAAEg/9AreMB/7AAAEg/9AtHMB/7AAAEg/9AuwMB/7AAAEg/9AbEMB/7AAAEg/9ActMB/7AAAEg/9AeWMB/7AAAEg/9Af/MB/7AAAEg/9AhoMB/7AAAEg/9AjRMB/7AAAEg/9Ak6MB/7AAAEg/9AmjMB/7AAAEg/9AoMMB/7AAAEg/9AZbMB/7AAAEg/9AXyMB/7AAAEg/9AWJMB/7AAAEg/9AUgMB/7AAAEg/9AS3MB/7AAAEg/9AROMB/7AAAEg/9APlMB/7AAAEg/9AN8MB/7AAAEg/9AMTMB/7AAA");
	this.shape.setTransform(0,-5.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg/9guvMB/7AAAEg/9gtGMB/7AAAEg/9grdMB/7AAAEg/9gp0MB/7AAAEg/9goLMB/7AAAEg/9gmiMB/7AAAEg/9gk5MB/7AAAEg/9gjQMB/7AAAEg/9ghnMB/7AAAEg/9gS2MB/7AAAEg/9gUfMB/7AAAEg/9gWIMB/7AAAEg/9gXxMB/7AAAEg/9gZaMB/7AAAEg/9gbDMB/7AAAEg/9gcsMB/7AAAEg/9geVMB/7AAAEg/9gf+MB/7AAAEg/9gCcMB/7AAAEg/9gAzMB/7AAAEg/9gEFMB/7AAAEg/9gFuMB/7AAAEg/9gHXMB/7AAAEg/9gJAMB/7AAAEg/9gKpMB/7AAAEg/9gMSMB/7AAAEg/9gN7MB/7AAAEg/9gPkMB/7AAAEg/9gRNMB/7AAAEg/9AA0MB/7AAAEg/9ACdMB/7AAAEg/9AEGMB/7AAAEg/9AFvMB/7AAAEg/9AHYMB/7AAAEg/9AJBMB/7AAAEg/9AKqMB/7AAAEg/9Ap1MB/7AAAEg/9AreMB/7AAAEg/9AtHMB/7AAAEg/9AuwMB/7AAAEg/9AbEMB/7AAAEg/9ActMB/7AAAEg/9AeWMB/7AAAEg/9Af/MB/7AAAEg/9AhoMB/7AAAEg/9AjRMB/7AAAEg/9Ak6MB/7AAAEg/9AmjMB/7AAAEg/9AoMMB/7AAAEg/9AZbMB/7AAAEg/9AXyMB/7AAAEg/9AWJMB/7AAAEg/9AUgMB/7AAAEg/9AS3MB/7AAAEg/9AROMB/7AAAEg/9APlMB/7AAAEg/9AN8MB/7AAAEg/9AMTMB/7AAA");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-409.4,-304.4,818.9,603.8);
p.frameBounds = [rect];


(lib.noteTrainer_tipka_bg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-11.1,0,15.1).s().p("AjXARIgEhTQgBg4AmAAIFtAAQAlAAABA4IAACvQhuiDhvB0Qg8AdgsAAQhWAAgZhqg");
	this.shape.setTransform(25.1,15.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFCC66"],[0,1],0,-22.9,0,23.8).s().p("AjCDsQgpAAAAgoIAAmGQAAgpApAAIGGAAQAoAAAAApIAAGGQAAAogoAAg");
	this.shape_1.setTransform(25,25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1.4,1.4,47.3,47.3);
p.frameBounds = [rect];


(lib.notaalkaj = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-6.9,0,5).s().p("AivAxQAAg1AzgnQA1gmBHAAQBJAAAzAmQA0AnAAA1QAAA3g3gzQg0gwhCAJIgDABIgGABQhIAPgxAlQgTAOgMAAQgRAAAAghg");
	this.shape.setTransform(20,9.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-14.5,0,14.8).s().p("AiMBpQg6gsgBg9QABg8A6gtQA7grBRgBQBSABA7ArQA7AtgBA8QABA9g7AsQg7AthSgBQhRABg7gtg");
	this.shape_1.setTransform(20,15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,40,30);
p.frameBounds = [rect];


(lib.LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#DDDDDD"],[0,1],0,-22.3,0,23.6).s().p("AJeDpQgngMgdgXQgcgYgQggQgQggAAgpQAAgmAPgfQAOgeAbgXQAagWAjgNQAkgNApAAQAmAAAgAKQAhALAZAUQAaAUARAeQAQAbAFAmIAAAGIgBAJQgCAGgEAFQgEAGgKADQgJADgPAAIibAAQAGAgAYAPQAYAOAmAAIAaAAQAKgBANgEIAHgDIAHgCIAIgBQAIAAAGAFQAGAEAAAOQgBAIgDAIQgCAIgGAIQgGAJgLAIQgbAUgeAGQgfAFgmAAQguAAgogNgAKngBQgNAOAAAWIBYAAQAAgYgNgNQgNgOgTAAQgRAAgNAPgAlWDpQgngMgdgXQgcgYgQggQgQggAAgpQAAgmAPgfQAOgeAbgXQAagWAjgNQAkgNApAAQAmAAAgAKQAhALAZAUQAaAUARAeQAQAbAFAmIAAAGIgBAJQgCAGgEAFQgEAGgKADQgJADgPAAIibAAQAGAgAYAPQAYAOAmAAIAaAAQAKgBANgEIAHgDIAHgCIAIgBQAIAAAGAFQAGAEAAAOQgBAIgDAIQgCAIgGAIQgGAJgLAIQgbAUgeAGQgfAFgmAAQguAAgogNgAkNgBQgNAOAAAWIBYAAQAAgYgNgNQgNgOgTAAQgRAAgNAPgAywDOQgvgoAAhcIAAh4IgOAAQgQAAgKgDQgKgCAAgMQAAgFAEgFIAKgJIANgKIA7gtIA7guIBAgxIAEgEIAFgDQAKgGAJAAQAJAAAGAIIABABQAGAJAAAWIAABFIAqAAIAKABQAIABAHAFQAIAEAGAJQAFAIAAAQQAAAQgFAJQgGAKgIAEQgHAFgIABIgKABIgqAAIAAB4IAAAQQAAAIADAGQADAGAGAEQAFAEALAAIAZAAIAFgBIAFABQALACAGAHQAHAGADAIQADAIABAHIABAKIAAAEQAAARgHAMQgHALgJAIQgLAIgMAFIgSAGIgWAFIgVADIgOABQhaAAgugogAO/DqQgWgKgKgNQgKgOgDgOQgDgNAAgHIAAi6QAAgeAQgQQAQgQASgHQAWgJAbgBQAkAAAUALQAUALALAPQANAQADAUIAAAGQAPgnAbgUQAbgUAfAAQASAAAQAGQAQAHALAMQALAMAGAQQAHAQAAASQAAAkgYAYQgYAYglAAQgYAAgRgJQgRgJgPgRQgOALgGAXQgHAWAAAgIAAAqQAAAHgCANQgDAOgJANQgKANgTAKQgUALghAAQgmAAgUgLgAtbDqQgWgKgKgNQgKgOgDgOQgDgNAAgHIAAi6QAAgeAQgQQAQgQASgHQAWgJAbgBQAkAAAUALQAUALALAPQANAQADAUIAAAGQAPgnAbgUQAbgUAfAAQASAAAQAGQAQAHALAMQALAMAGAQQAHAQAAASQAAAkgYAYQgYAYglAAQgYAAgRgJQgRgJgPgRQgOALgGAXQgHAWAAAgIAAAqQAAAHgCANQgDAOgJANQgKANgTAKQgUALghAAQgmAAgUgLgAEVDqQgRgKgJgNQgIgNgCgNIgCgTIAAheIgBgKQgBgHgEgIQgDgIgIgFQgHgGgOAAQgNAAgHAEQgIAFgEAGQgEAGgBAHIgBAMIAABfQAAAdgOARQgNAQgRAIQgRAHgQACIgTACIgCAAQgmAAgUgMQgTgMgKgOQgLgRgBgVIAAjAQAAgHACgNQADgNAKgNQAKgNASgKQAUgKAkAAQAkAAATALQAUAKAKAOQALARACAUIAAgGIAdgVQANgJARgJQAQgJASgGIAOgEQAQgEAVAAQAOAAAPADQAPACAOAHQAQAIAMAMQALAMAJASQAJATACAZIAACbIgDASQgCANgJAOQgKAOgUAMQgTALgkAAQgeAAgSgKg");
	this.shape.setTransform(-0.1,-27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#DDDDDD"],[0,1],0,-21.9,0,21).s().p("AF1DIQgvgoAAhcIAAh4IgOAAQgQAAgJgDQgLgCAAgLQABgGAEgEIAJgJIANgLIA7gtIA8guIA/gwIACgCIAsAAQAEAJAAAUIAABFIAqAAIAKABQAIAAAIAFQAHAFAGAIQAFAJABAPQgBAQgFAJQgGAKgHAFQgIAEgIABIgKABIgqAAIAAB4IAAARQAAAHAEAGQACAGAGAFQAFADALAAIAZAAIAGAAIAEAAQALADAGAGQAIAHACAIQADAHABAHIABAKIAAAEQAAASgHALQgHALgJAIQgLAIgMAGIgRAFIgXAFIgUADIgPABQhaAAgugogAgKDjQgjgNgagWQgbgWgPggQgPghAAgoQAAgoAPgeQAOghAagYQAagWAjgOQAigNArABQAqgBAlANQAjAOAZAWQAZAYAPAhQAOAeAAAoQAAAmgOAgQgPAfgZAYQgZAXgjANQglANgqAAQgpAAgigMgAAeAZQgNARAAAXQAAAWANARQANAQAWAAQASAAAOgQQAOgRAAgWQAAgXgOgRQgOgQgSAAQgWAAgNAQgAk8DkQgRgKgIgNQgIgNgDgNIgCgTIAAhdIgBgKQAAgIgEgIQgEgHgIgGQgGgGgPAAQgMAAgIAEQgIAFgEAGQgEAHAAAGIgBAMIAABfQgBAdgOARQgNARgRAHQgRAIgQACIgTABIgBAAQgnAAgUgMQgVgMgKgOQgLgRgBgUIAAjBQAAgGADgNQACgOAKgNQAKgNAVgKQATgKAlAAQAjAAATALQAUALAKANQAMARACAUIAAgFIAcgWQAOgJAQgJQAQgJASgGIAPgEQAPgEAVABQAOAAAPACQAPADAOAGQAQAIAMAMQALAMAJATQAKATABAZIAACaIgDASQgCANgJAPQgKANgTAMQgUALgkAAQgeAAgSgKg");
	this.shape_1.setTransform(3.3,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#DADADA"],[0,1],0,-22,0,22.4).s().p("AJHDpQgogMgcgXQgcgYgRggQgQggAAgpQAAgmAPgfQAPgeAagXQAagWAkgNQAkgNApAAQAlAAAhAKQAgALAaAUQAZAUARAeQARAbAFAmIAAAGIgCAJQgBAGgFAFQgEAGgJADQgJADgQAAIibAAQAHAgAYAPQAXAOAnAAIAZAAQALgBAMgEIAHgDIAIgCIAIgBQAHAAAHAFQAGAEAAAOQgBAIgDAIQgDAIgGAIQgFAJgMAIQgaAUgfAGQgeAFgmAAQgvAAgngNgAKQgBQgNAOAAAWIBYAAQAAgYgNgNQgOgOgTAAQgQAAgNAPgACZDOQgvgoAAhcIAAh4IgOAAQgQAAgKgDQgKgCAAgMQAAgFAEgFIAKgJIANgKIA7gtIA7guIBAgxIAJgHQAKgGAJAAQAJAAAGAIQAHAIAAAYIAABFIAqAAIAKABQAIABAHAFQAIAEAGAJQAFAIAAAQQAAAQgFAJQgGAKgIAEQgHAFgIABIgKABIgqAAIAAB4IAAAQQAAAIADAGQADAGAGAEQAFAEALAAIAZAAIAFgBIAFABQALACAGAHQAHAGADAIQADAIABAHIABAKIAAAEQAAARgHAMQgHALgJAIQgLAIgMAFIgSAGIgWAFIgVADIgOABQhaAAgugogAjgDoQgkgMgagWQgagXgPggQgPggAAgpQAAgnAOgfQAOggAagYQAagXAkgNQAjgNArAAQArAAAkANQAjANAaAXQAXAYAOAgQAOAfAAAnQAAAngOAgQgOAfgXAYQgaAXgjANQgkANgrAAQgpAAgjgNgAi3AfQgNARAAAWQAAAXANARQAOAQAVAAQASAAAOgQQAOgRAAgXQAAgWgOgRQgOgQgSAAQgVAAgOAQgAoODqQgSgKgIgNQgIgNgCgNIgDgTIAAheIgBgKQAAgHgEgIQgEgIgHgFQgHgGgOAAQgNAAgIAEQgIAFgDAGQgEAGgBAHIgBAMIAABfQAAAdgOARQgOAQgRAIQgRAHgPACIgUACIgBAAQgmAAgVgMQgUgMgKgOQgLgRgCgVIAAjAQAAgHADgNQACgNAKgNQAKgNAVgKQAUgKAkAAQAjAAAUALQAUAKAJAOQAMARACAUIAAgGIAcgVQAOgJAQgJQAQgJASgGIAPgEQAPgEAVAAQAOAAAPADQAPACAPAHQAPAIANAMQALAMAIASQAKATABAZIAACbIgCASQgCANgKAOQgKAOgTAMQgUALgkAAQgeAAgRgKg");
	this.shape_2.setTransform(-45.9,-32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#DADADA"],[0,1],0,-21.8,0,23.4).s().p("ALaDsQgngNgcgXQgcgYgRgfQgQghAAgpQAAgmAPgfQAOgdAbgYQAagWAjgNQAlgNApAAQAlAAAgALQAhAKAaAUQAZAUARAeQARAbAEAmIAAAGIgBAKQgCAFgEAFQgEAGgJADQgJADgQAAIibAAQAHAgAXAPQAYAOAmAAIAaAAQALgBAMgEIAHgDIAHgCIAJAAQAHAAAGAEQAHAEgBAPQgBAHgCAIQgDAIgGAIQgFAJgMAJQgbATgeAGQgeAFgmAAQgvAAgogMgAMjAAQgNAPAAAWIBZAAQgBgYgNgNQgNgNgTgBQgRABgNANgA0pDQQgugogBhcIAAh4IgOAAQgPAAgKgDQgKgCAAgLQAAgFAEgFIAJgJIANgLIA8gsIA7guIBAgyIAJgHQAJgFAKAAQAJAAAGAIQAGAHAAAYIAABGIArAAIAKABQAIABAHAEQAIAEAFAJQAGAJAAAPQAAAQgGAJQgFAKgIAEQgHAFgIABIgKABIgrAAIAAB4IAAAQQABAJADAGQACAFAHAFQAFADAKAAIAaAAIAFgBIAEABQALACAHAHQAHAGADAJQADAHABAHIABALIAAADQAAASgIALQgHAMgJAHQgKAIgMAGIgSAFIgWAFIgVADIgPABQhZAAgvgogAhyDtQgVgJgKgNQgLgNgDgOQgCgOAAgHIAAi4QAAgeAPgQQAOgRATgHQATgJARgBIAWgCIABAAQAlAAASALQAVAKALANQAKAOACAMIACARIAAC9IgCAUQgCANgKAOQgLAOgUAJQgTAKglAAQgmAAgWgKgAQ3DsQgVgKgLgNQgKgOgDgOQgCgNAAgHIAAi6QgBgeARgQQAQgQARgHQAWgJAcgBQAjAAAVAMQAUALAKAOQANAQADAUIAAAGQAPgnAbgUQAbgUAfAAQASAAAQAGQAQAHALAMQAMANAGAPQAGAQAAASQAAAlgYAXQgXAYgmAAQgYAAgQgJQgRgIgQgRQgNAKgHAXQgGAWgBAgIAAAqQABAHgDAOQgCANgKAOQgKAMgTAKQgUALghAAQgmAAgUgLgAvSDsQgWgKgKgNQgKgOgDgOQgDgNAAgHIAAi6QABgeAQgQQAPgQATgHQAVgJAbgBQAlAAATAMQAVALALAOQAMAQADAUIAAAGQAPgnAbgUQAbgUAfAAQASAAAQAGQAQAHALAMQAMANAFAPQAHAQAAASQAAAlgYAXQgXAYgmAAQgYAAgRgJQgQgIgQgRQgOAKgGAXQgHAWAAAgIAAAqQAAAHgCAOQgDANgJAOQgJAMgUAKQgTALgiAAQgmAAgUgLgAGVDsQgRgKgJgNQgHgNgDgNIgCgSIAAhfIgBgKQAAgHgFgIQgDgHgIgGQgGgGgOAAQgNAAgIAEQgIAFgEAGQgDAHgBAGIgBANIAABeQAAAdgPARQgNARgRAHQgRAIgQABIgTACIgBAAQgnAAgUgMQgUgMgKgOQgMgRgBgUIAAjBQAAgHADgMQACgOAKgNQAKgNAUgKQAVgKAkAAQAjAAAUALQATAKAKAOQALARADAUIAAgFIAcgWQANgJARgJQAQgJASgGIAOgEQAQgDAVAAQAOgBAPADQAPADAOAGQAQAIAMAMQALAMAJATQAJASACAaIAACaIgDASQgCAOgJANQgKAPgTALQgUALgkAAQgeAAgSgKgAk5D2QghAAgTgIQgRgGgKgKQgKgKgDgNQgKAXgWAMQgWAMglAAQg1AAgYgbQgYgaAAgtQAAgVAKgSQAKgSARgOQARgNAYgHQAYgHAcAAIAfACQAQABAPAFQABgZgUgPQgUgPghgBQgOAAgLACIgXAHQgGACgFAAIgIABQgJAAgGgDQgGgEgDgEQgFgDgDgGQgEgJAAgKQAAgPAIgLQAIgKAJgIQAMgHANgFQAbgLAdgGQAdgFAoAAQAtAAAkAIQAlAIAaASQAaATAOAdQAOAcAAArIAAB3QAAAbgNAPQgOARgRAHQgSAIgRABIgXACgAnCBqQgLAKABAPQgBAPALAKQAJAKAOAAQANAAAKgKQALgKgBgPQABgPgLgKQgKgLgNAAQgOAAgJALgAhUh7QgOgFgLgJQgMgJgFgMQgHgMAAgNQAAgMAHgMQAFgMAMgJQALgIAOgFQAOgGAQAAQAQAAAOAGQAPAFAJAIQAKAJAGAMQAGAMABAMQgBANgGAMQgGAMgKAJQgJAJgPAFQgOAEgQAAQgQAAgOgEg");
	this.shape_3.setTransform(52.3,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.9,-52.3,259.7,102.3);
p.frameBounds = [rect, new cjs.Rectangle(-130,-56.8,324.3,105.4)];


(lib.LOADBAR = function() {
	this.initialize();

	// BAR
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD8500").s().p("AsBAnIAAhNIYCAAIAABNg");
	this.shape.setTransform(77,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-3.9,154,8);
p.frameBounds = [rect];


(lib.line = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB347").ss(3,1,1).p("AmRAAIMjAA");
	this.shape.setTransform(0,0,0.761,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-30.6,0,61.3,0);
p.frameBounds = [rect];


(lib.graf = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4.3,1,1).p("EglfgCIIAAESA8HiIIAAESAyviIIAAESApXiIIAAESAAAiIIAAESAJXiIIAAESASviIIAAESAcHiIIAAESEAu3gCIIAAESEAlfgCIIAAESEgu2gCJIAAEH");
	this.shape.setTransform(299.8,386.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4.3,1,1).p("AjH5FIEHAAAjH/VIEHAAAjHy1IEHAAAjHslIEHAAAjHmUIEHAAAjHgEIEHAAAjHGKIEHAAAjHMaIEHAAAjHSqIEHAAAjHY6IEHAAAjDfWIGLAA");
	this.shape_1.setTransform(20.9,200.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4.3,1,1).p("EAu4AfWMhdvAAAEgu3AfKMAAAg+f");
	this.shape_2.setTransform(300,200.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,600.2,401.2);
p.frameBounds = [rect];


(lib.fw_btn = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("AuYDOQgtAAgXgXQgWgWAAgtIAAjoQAAgsAWgWQAXgXAtgBIcxAAQAtABAXAXQAWAWAAAsIAADoQAAAtgWAWQgXAXgtAAg");

	// txt
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 173;
	this.title_txt.setTransform(-1.9,-17.2);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDCAB","#FEB23D"],[0,0.424],0,26.1,0,-25.9).s().p("AOZCFI8xAAQgkAAgRgRQgSgSABgjIAAhwQOsilQRClIAABwQABAjgSASQgRARgjAAIgBAAg");
	this.shape_1.setTransform(0,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D27E02","#FEDCAB"],[0,1],0.1,36,0,-35.9).s().p("AuYDYQhlAAAAhkIAAjoQAAgTAFgQQAQhABQAAIcxAAQA0AAAZAbQAXAYABAwIAADoQAABkhlAAgAOZC7QAkAAARgRQASgSgBgkIAAhyIAAh2QABgogXgRIAAAAQgSgMgegBI8xAAQgeABgSAMIAAAAIgBABIAAgBIgIAJQgOARABAfIAAB2IAAByQgBAkASASQARARAkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEDCAB","#FEB23D"],[0,1],0,-27.7,0,27.9).s().p("AveBeIAAh2QgBgfAOgRIAIgJIAAABIABgBIAAAAQASgMAegBIcxAAQAeABASAMIAAAAQAXARgBAoIAAB2QwRijusCjg");
	this.shape_3.setTransform(0,-9.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.title_txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-102.1,-21.6,204.4,43.4);
p.frameBounds = [rect];


(lib.clef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{TREBLE:0,BASS:1,ALTO:2,TENOR:3,SOPRANO:4});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB347").s().p("AhTUEQhrgogzhoQgOgcgCgeQgJhsBcg4QA1ghA9ANQAsALAgAeQAuAqABA9QABBShBAyQgyAlg9gJQAfAdAnASQAsAUAxgNQAlgMAhgVQBPgwAYhXQAJgkgGgjIg6lYIgqAHIiBAFQhLgBhFgbQjJhOhgjBQgihFgMhLQgNhZAchVQA0ieBoiHQBfh7BshwIA0guIgShMQgahsgLhuQgMh2AghwQAehvBCheQAcgrAygOQAwgNAdAsQArBDAYBMQAiBqAIBwQALC5hOCmQhBCMh5BfIAsDjQBRgMBSAPQA8ANAxAgQAzAhAkAxQBkCMgVCsQgPB7haBVQhRBMhsAVIA8FoQAEAVgCAWQgEArgWAoQgpBJhKAnQg1Adg7AIIgSABQgkAAgjgMgAjXhKQgyBDgoBGQg2BfgDBvQgBBjA3BQIAfAoQAuA4A7AmQCdBkCrg9IhwosIgwAPQgYAIgUAOQhzBOgDCMQgBAWAGAWQALAxAiAmQBMBWBpAYIAAAOIghgIQhfgfhKhJQhdhbACiBIADg3QAIg4AagwQBIh/CMglIgmjQgABQBBIBrIbQBFgPA1guQBZhPgBh3QAAiBhfhTQhQhHhnAAQgTAAgUADgABLxQQgrAngYAzQghBOgYBSQgOAwADAzQACA9AHA8QAFA0ANA0IBEg9QBIhIAwhYQA7hrgPh4QgFgpgKgmQgJgpgqgRQgLgEgKAAQgUAAgRAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB347").s().p("AoPJIIgHgcQB4gpB7hZQCihzBKhnQBXh7Aci1QAMhHAAg6QgBi/h+hOQg4gig/AAQhdAAg8A3QghAfAAAoIADAcQAHAdAoANIBNANQBXALgEBwQgDA4g0AgQgvAchBAAQhGAAguglQgzgogEhKQgHiPB2h+QBQhUCnAAIBrAJQCOAaBaB9QBTBxAACDIgCAlQgUCjjHC/QiaCSjaB/QixBlgrAAIgGgBgAF8AYQgggZAAgsQAAghAVgaQAaghAtAAQAmAAAdAcQAbAaAAApQAAAfgSAXQgbAjgvAAQgjAAgbgXgAF8kuQgggbAAgrQAAgiAVgaQAaghAtAAQAmAAAdAcQAbAaAAApQAAAegSAZQgbAkgvAAQgjAAgbgXg");
	this.shape_1.setTransform(21.3,-31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB347").s().p("AANLTQhHg7AAhGQAAgtAkgeQAggeAtAAQAvAAAhAcQAeAdAAAsQAAApgmAaQgiAVgmgEQgWgCABANQgBASAqAZQAvAcA1AAQCjAAAJksQAEh+gjhTQgqhqhegCQhagDgoAxQgeAhgNBTQgQhqhEhZQgzhAhIgoQBEglAyhBQBFhWAPhrQAOBRAeAjQAmAwBbgDQBegDAshpQAihVgFh8QgJkwiiABQg1gBguAcQgqAYAAARQAAAMAWgBQAlgFAiAWQAmAaAAArQAAArgfAcQgfAdgvgBQgvAAgggeQgkgeAAgtQAAhGBGg7QBPhAByAAQCQAABcBoQBXBlAACVQAACVhuBqQhxBqiWgCQg1gBg8gaQgPAjgaAiQgUAWgcAMQAaAQAYAYQAbAgAPAjQA+gaAyABQCWgCBwBoQByBqAACUQAACThZBhQhcBkiPACQhxgBhOg/gAkOMTIAA4dIBAAAIAAYdgAoPMTIAA4dIDBAAIAAYdg");
	this.shape_2.setTransform(18.5,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB347").s().p("AANLTQhHg7AAhGQAAgtAkgeQAggfAtAAQAvABAhAdQAeAcAAAtQAAApgmAZQgiAVgmgEQgWgDABANQgBATAqAZQAvAcA1AAQCjAAAJkrQAEh/gjhSQgqhqhegCQhagEgoAxQgeAhgNBTQgQhqhEhZQgzhAhIgpQBEglAyhAQBFhWAPhsQAOBSAeAiQAmAxBbgDQBegDAshpQAihUgFh9QgJkwiiAAQg1AAguAbQgqAZAAARQAAANAWgCQAlgFAiAWQAmAaAAArQAAArgfAcQgfAcgvABQgvgBgggeQgkgeAAgtQAAhGBGg7QBPg/ByAAQCQAABcBnQBXBlAACVQAACVhuBpQhxBriWgCQg1gBg8gaQgPAkgaAhQgUAVgcAOQAaAPAYAYQAbAgAPAjQA+gaAyABQCWgBBwBnQByBpAACUQAACUhZBgQhcBliPACQhxAAhOhAgAkOMTIAA4eIBAAAIAAYegAoPMTIAA4eIDBAAIAAYeg");
	this.shape_3.setTransform(18.5,-50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB347").s().p("AANLTQhHg7AAhGQAAgtAkgeQAggfAtABQAvAAAhAdQAeAcAAAsQAAApgmAaQgiAWgmgFQgWgCABANQgBASAqAZQAvAcA1AAQCjAAAJksQAEh+gjhTQgqhqhegCQhagDgoAxQgeAhgNBTQgQhqhEhZQgzhAhIgoQBEgmAyhAQBFhWAPhrQAOBRAeAjQAmAwBbgDQBegDAshpQAihUgFh9QgJkwiiABQg1gBguAcQgqAYAAARQAAAMAWgBQAlgFAiAWQAmAaAAArQAAArgfAcQgfAdgvgBQgvAAgggeQgkgeAAgtQAAhGBGg7QBPhAByAAQCQAABcBoQBXBlAACVQAACVhuBqQhxBqiWgCQg1gBg8gaQgPAjgaAiQgUAWgcANQAaAPAYAYQAbAgAPAjQA+gaAyABQCWgCBwBoQByBpAACUQAACUhZBhQhcBkiPACQhxAAhOhAgAkOMTIAA4dIBAAAIAAYdgAoPMTIAA4dIDBAAIAAYdg");
	this.shape_4.setTransform(18.5,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-129.6,99,259.3);
p.frameBounds = [rect, new cjs.Rectangle(-32.1,-89.5,107,117.1), new cjs.Rectangle(-34.3,-88.9,105.8,157.4), new cjs.Rectangle(-34.3,-128.9,105.8,157.4), new cjs.Rectangle(-34.3,-8.9,105.8,157.4)];


(lib.cbutton = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("Al9DOQgSAAgKgXQgJgVAAguIAAjoQAAgtAJgVQAKgYASAAIL6AAQAUAAAIAYQAKAVAAAtIAADoQAAAugKAVQgIAXgUAAg");
	this.shape.setTransform(44,0);

	// txt
	this.title_txt = new cjs.Text("CESES", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 77;
	this.title_txt.setTransform(41.5,-17.2);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDCAB","#FEB23D"],[0,0.424],0,26.1,0,-25.9).s().p("AmECFQgPAAgIgRQgHgSAAgjIAAhwQGNimG4CmIAABwQAAAjgHASQgIARgPAAg");
	this.shape_1.setTransform(44,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D27E02","#FEDCAB"],[0,1],0.1,36,0,-35.9).s().p("AmEDYQgqAAAAhkIAAjoQgBgTACgQQAHhAAiAAIMJAAQAWgBALAcQAKAYAAAwIAADoQAABkgrAAgAmcikQgGARAAAfIAAB2IAAByQAAAkAHASQAIAQAPABIMJAAQAPgBAIgQQAHgSAAgkIAAhyIAAh2QAAgogKgRIAAAAQgHgNgNAAIsJAAQgNAAgHANIAAAAIgBABIAAgBg");
	this.shape_2.setTransform(44,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEDCAB","#FEB23D"],[0,1],0,-27.7,0,27.9).s().p("AmiBeIAAh2QAAgfAGgRIADgJIAAABIABgBIAAAAQAHgNANAAIMJAAQANAAAHANIAAAAQAKARAAAoIAAB2Qm4ijmNCjg");
	this.shape_3.setTransform(44,-9.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.title_txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.8,-21.6,86.4,43.4);
p.frameBounds = [rect];


(lib.cbox0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ha
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AicC2IAAlrIE5AAIAAFrg");
	this.shape.setTransform(-0.2,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// txt
	this.title_txt = new cjs.Text("CDEFGAHC", "bold 35px LucidaSansUnicode", "#E37302");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 37;
	this.title_txt.lineWidth = 290;
	this.title_txt.setTransform(78.3,27.5,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt}]}).wait(2));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(252,173,56,0.8)").ss(5,1,1).p("ABRhGIhyCNIgvgu");
	this.shape_1.setTransform(0.2,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCAD38","#FDC877","#FCAD38"],[0,0.49,1],0,-15,0,15.9).s().p("AiXCnQgGgBgEgEQgFgEAAgHIAAkuQAAgGAFgEQAEgFAGAAIEuAAQAHAAAEAFQAEAEABAGIAAEuQgBAHgEAEQgEAEgHABgAiHCIIEPAAIAAkPIkPAAg");
	this.shape_2.setTransform(0,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDC48A").s().p("ACXCxIkuAAIgBAAQgKgBgGgHQgIgHAAgLIAAkuQAAgKAHgHIABgBQAHgHAKAAIEuAAQALAAAHAIQAHAGABAKIAAABIAAEuIAAABQgBAKgGAHIgBABQgHAGgKABIAAAAIgBAAgAh9B+ID7AAIAAj7Ij7AAg");
	this.shape_3.setTransform(0,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,0,0,0)").s().p("AjqFPIAAqdIHUAAIAAKdg");
	this.shape_4.setTransform(-0.6,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-20.1,133.3,73.9);
p.frameBounds = [rect, rect];


(lib.bg2_effect = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape.setTransform(0.1,0,0.999,2,-158.1,0,0,0,282.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_1.setTransform(0,0,0.999,2.008,156.6,0,0,0.1,282.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_2.setTransform(0,0,0.999,1.804,23.2,0,0,0,282.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_3.setTransform(0.1,0,0.999,1.834,-22.6,0,0,0.1,282.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_4.setTransform(0,0,0.998,1.987,-69.7,0,0,0,282.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_5.setTransform(-0.1,0,1,1.941,108.8,0,0,0,282.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_6.setTransform(0.2,0,0.999,1.897,-110.8,0,0,0,282.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_7.setTransform(0,0,0.999,1.956,68.2,0,0,0,282.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_8.setTransform(0,0,1,1.806,45,0,0,0,282.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_9.setTransform(0,0,1,1.959,90,0,0,0,282.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_10.setTransform(0,0,1,2.01,135,0,0,0.1,282.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_11.setTransform(0,0,1,1.914,180,0,0,0,282.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_12.setTransform(0,0,1,2.049,-134.9,0,0,0.1,282.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_13.setTransform(0.1,0,1,1.849,-89.9,0,0,0,282.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_14.setTransform(0,0,1,1.992,-44.9,0,0,0,282.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgO2gsEIdtAAMgO3BYJg");
	this.shape_15.setTransform(0,0,1,1.905,0,0,0,0,282.2);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1085,-1075.3,2190.3,2158.4);
p.frameBounds = [rect];


(lib.acouracy = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9A62B").ss(1,1,1,3,true).p("AKAmpIAAMtQAAAmgmAAIzZAA");
	this.shape.setTransform(1.9,2.9);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,1],0,65.1,0,-27.1).s().p("AqSD+IAAnWQAAgmAmAAITZAAQAmAAAAAmIAAHWQlWj6lHB7QknCAklAAIg8gBg");
	this.shape_1.setTransform(0,-17.8);

	// Layer 1
	this.acur = new cjs.Text("", "41px Impact", "#B16A01");
	this.acur.textAlign = "center";
	this.acur.lineHeight = 43;
	this.acur.lineWidth = 115;
	this.acur.setTransform(-1.4,-37);

	this.title_txt = new cjs.Text("accuracy", "20px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 22;
	this.title_txt.lineWidth = 115;
	this.title_txt.setTransform(-1.9,14.1);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FDA92D","#FEE3BC"],[0,1],0,46.2,0,-46).s().p("ApsG9QgmAAAAgnIAAsrQAAgmAmAAITZAAQAmAAAAAmIAAMrQAAAngmAAg");
	this.shape_2.setTransform(0,1);

	this.addChild(this.shape_2,this.title_txt,this.acur,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-43.4,131.9,89);
p.frameBounds = [rect];


(lib.treble_cleff = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AgLDDQgQgGgIgQQgDgEAAgEQgBgRAOgIQAIgGAJACQAHACADAFQAHAGAAAKQAAAMgJAHQgGAGgJgBQAEAEAGADQAFADAIgCQAFgCAFgDQAMgIAEgNQABgFgBgFIgJg1IgGABIgTABQgKgBgLgDQgegMgPgdQgFgLgCgMQgCgNAEgNQAIgXAQgUQAOgTARgRIAIgHIgDgMQgEgQgBgRQgDgSAFgRQAFgRAJgOQAEgHAIgCQAHgCAEAHQAHAKADAMQAGAQABARQABAcgMAZQgKAWgRAOIAGAjQANgCAMACQAJADAHAEQAJAFAFAGQAPAVgDAaQgDATgNANQgMAMgRADIAJA3IAAAHQAAAGgEAGQgGALgLAGQgJAFgJABIgBAAQgFAAgFgCgAgggKIgNATQgIAPgBARQAAAOAJAMIAFAHQAGAJAJAFQAYAPAZgJIgRhVIgHACIgGAEQgRAMgBAVIABAHQACAHAFAGQALANAOAEIAAACIgEgBQgNgFgLgLQgOgOAAgTIAAgJQABgIAFgIQALgSATgFIgEgggAAMAJIAQBTQALgCAIgHQANgNAAgSQAAgTgOgNQgMgLgQAAIgGAAgAALinQgGAGgEAIQgDAMgEAMQgCAHAAAIIACASIADAQIAIgJQALgLAHgNQAKgRgDgSIgCgMQgCgGgGgDIgDAAQgDAAgDACg");
	this.shape.setTransform(-1.9,-1.9);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.tenor_btn = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AAwCyQgIgEgEgHQgEgIAAgKQAAgJAEgHQAEgIAIgEQAHgEAJABQAOAAAJAJQAJAJAAAOQAAANgJAKQgJAJgOAAQgIAAgIgEgAA1CIQgEAEAAAKQAAAJAEAFQAFAFAGAAQAHAAAEgFQAEgFAAgJQAAgKgEgEQgEgFgHAAQgGAAgFAFgAhkCsQgFgJAAgNQAAgPAIgJQAHgJANABQAOAAAHAJQAJAJgBASIgpAAQAAAIAEAEQAEAEAFAAQAFAAADgCIADgHIAQADQgDAIgGAFQgIAFgKAAQgPAAgJgKgAhVCGQgDAEAAAHIAXAAQABgHgEgFQgDgDgFAAQgFAAgEAEgAiDC1QgEgCgCgDQgCgCAAgEIAAgLIAAgcIgIAAIAAgMIAIAAIAAgNIAQgJIAAAWIALAAIAAAMIgLAAIAAAaIAAAJQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACABIAHgBIABANQgFACgHAAQgFAAgDgBgABsC1IAAg+IAPAAIAAAJQAEgHADgBQAEgCAEAAQAEAAAGADIgFAOQgFgDgDAAQgDAAgCACQgDACgBAEQgCAGAAAQIAAATgAADC1IAAggQAAgKgBgDQgBgDgBgCQgBgBgEAAQgEAAgEACQgDADgBADQgCAEAAALIAAAcIgPAAIAAg+IAOAAIAAAJQAIgKAMAAQAEAAAFACQAEABACADIAEAHIAAALIAAAngAAMApQgPgNAAgRQAAgKAHgFQAHgHALgBQALABAIAGQAHAFAAAKQAAAKgJAGQgIAEgJAAQgFgBABADQgBAFAKAFQAKAHANAAQAmAAAChEQABgegIgSQgJgZgXgBQgUAAgKALQgHAHgDATQgEgYgOgVQgMgPgRgKQAQgIAMgPQAJgPAGgRIAGAAQADAJAEAFQAJALAVgBQAVAAALgYIAkAAIgNAOQgaAYgjAAQgMAAgNgGQgFAIgGAIQgFAEgEAFQAEADAFAGQAIAHADAIQAOgGAMABQAjgBAZAYQAbAYAAAkQAAAfgUAXQgWAXghABQgbAAgSgPgAg0A4IAAjtIAPAAIAADtgAhwA4IAAjtIAtAAIAADtg");
	this.shape.setTransform(-1.7,-1.2);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.soprano_btn = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("ABBCrQgGgCgHgBQgLgBgIAEIgiAAIgHgLQgMgPgRgKIAEgDQANgIALgOQAPgUAEgaQADATAHAJQAJALAWgBQAXAAAKgZQAIgVgBgdQgChIgnABQgNgBgLAHQgJAGAAAEQAAADAFAAQAJgBAIAEQAJAHAAAKQAAAJgIAHQgHAGgLABQgLgBgJgHQgHgHAAgJQAAgSAQgOQATgOAbAAQAjAAAWAYQAUAYAAAiQAAAlgaAZQgbAZgkAAQgNAAgOgHQgEAIgHAJIgGAFIgDAEIAKAJQAHAHAEAJQAOgGANAAQAdAAAWAQgAg2CrIAAjdIAPAAIAADdgAh0CrIAAjdIAvAAIAADdgAhGhiIAAhGIAMAAIAAAIQADgEAEgDQAEgCAFAAQAJgBAGAIQAHAGAAANQAAANgHAHQgGAHgJAAQgEAAgDgCQgEgCgEgDIAAAZgAg2ibQgDAEAAAIQAAAIADAEQAEAFAFgBQAFAAADgEQACgDAAgJQAAgHgDgFQgDgDgEAAQgFAAgEADgACWh4QgGgCgDgHQgDgGAAgIQAAgHADgHQADgFAGgEQAGgEAIABQALAAAIAIQAHAGAAANQAAALgHAIQgIAHgLAAQgHAAgHgEgACbibQgEAFAAAIQAAAHAEAEQADAEAGAAQAFAAAEgEQADgEAAgHQAAgIgDgFQgEgDgFAAQgGAAgDADgAAbh5QgFgDAAgHQAAgFADgDQACgDAEgCIAKgDIANgDIAAgBQAAgFgCgCQgBgBgGAAQgEAAgCABQgCACAAAEIgNgDQACgHAFgEQAFgDAKAAQAJAAAFACQAEACACAEQABADAAAIIAAAQIABAKIADAHIgOAAIgBgFIgBAAIgHAEIgIACQgIAAgFgFgAAuiMQgFACgCABQgDACAAADQAAACACACQACACAEABQADAAAEgDIADgEIAAgHIAAgCIgIABgAh4h4QgGgCgDgHQgDgGAAgIQAAgHADgHQADgFAGgEQAGgEAHABQAMAAAHAIQAIAGAAANQAAALgIAIQgHAHgLAAQgHAAgHgEgAhzibQgEAFAAAIQAAAHAEAEQADAEAFAAQAGAAADgEQAEgEAAgHQAAgIgEgFQgDgDgGAAQgFAAgDADgAi1h5QgGgEgCgGIAOgDQAAAEADACQADACAEAAQAGAAACgCQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgDIgEgCQgQgEgFgCQgGgEAAgIQAAgGAFgFQAGgFAKABQALgBAFAEQAFAEACAGIgNACQgBgCgCgCQgCgCgFABQgFgBgCACQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIACAEIAMADQALADAEADQAFAEAAAGQAAAHgGAEQgGAGgMAAQgKAAgGgFgAByh1IAAgaQAAgIgBgDIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgCACQgDABgBAFQgBACAAAJIAAAXIgNAAIAAgzIAMAAIAAAIQAHgJAKAAQAFAAADACQAEABACACIACAGIABAJIAAAggAgLh1IAAgzIALAAIAAAIQADgGADgBQACgCAEAAQAEAAAEACIgEAMQgDgCgDAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgCACgBAEQgBAEAAANIAAAQg");
	this.shape.setTransform(-1.3,-1.1);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.note = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// acc
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-16.1,0,16.8).s().p("Ag7C7IAAhRIgpAIIAAg0IApgIIAAhRIgpAIIAAg0IApgIIAAhWIAbAAIAABQIBAgNIAAhYIAbAAIAABSIAqgJIAAA0IgqAJIAABRIAqgJIAAA0IgqAIIAABWIgbAAIAAhPIhAANIAABXgAggghIAABRIBAgNIAAhRg");
	this.shape.setTransform(-39.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-14.9,0,15).s().p("Ag2CfQgDgDAAgEIAAkvQAAgEADgDQADgDAEAAIAMAAQAEAAADADQADADAAAEIAACgQAWgJAQAAQAgAAAKAdQADAIAAAIQAAAZgYAZQgRASgTAMQgGAEgOAOIgSAQQgDADgEAAQgFAAgCgDgAgZArIAAA9IAKgMIAAABQAVgdABgTQAAgHgHgEIgDgCQgJABgNAKg");
	this.shape_1.setTransform(-29.9,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-11.4,0,12.3).s().p("AApB/QADgIgCgeQgBgggEgIQgFgMgSgJIgYAAQgSAJgFAMQgFAMgCAgQgCAdACAFIhUAAIAAhVQAoAIAggPQAQgIAMgOIAAgaQgNgOgRgGQghgPglAHIAAhUIBUAAQgEAHADAfQADAfAEAIQAEALAUAKIAYAAQATgKAEgPQAFgPAAgdIgBgdIBVAAIAABUQgogIgfAQQgQAHgMANIAAAaQANAOARAIQAfAPAmgIIAABVg");
	this.shape_2.setTransform(-39.9,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-15.3,0,13.8).s().p("AgHBUIgQARQgNAMgPAIQgKAGgPAPIgRARIAAk9IAOAAIAAC4QACgCAPgHQAVgJAMAAQAKAAAMAGIAAisIALAAIAAC4QAdgSAYAAQAaAAAIAaQACAHAAAHQABAWgWAWQgRATgVAKQgLAFgPAQIgPARgAAEAnIAABdQADADAaggQAcghAAgWQAAgPgOgIIgJgCQgOAAgUAQgAhPAnIAABdQADADAZggQAcghAAgWQAAgPgOgIIgJgCQgOAAgTAQg");
	this.shape_3.setTransform(-38.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// text
	this.title_txt = new cjs.Text("C", "bold 24px Impact", "#B16A01");
	this.title_txt.lineHeight = 26;
	this.title_txt.lineWidth = 127;
	this.title_txt.setTransform(30.8,-17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt}]}).wait(5));

	// Layer 1
	this.instance = new lib.notaalkaj();
	this.instance.setTransform(0,0,1,1,0,0,0,20,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.9,-17.1,181.8,33.3);
p.frameBounds = [rect, new cjs.Rectangle(-50,-18.7,211.9,37.5), new cjs.Rectangle(-35.8,-17.1,197.7,34.7), new cjs.Rectangle(-52.5,-17.1,214.4,33.3), new cjs.Rectangle(-48.1,-17.1,210,33.3)];


(lib.LOADER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOADBAR
	this.bar = new lib.LOADBAR();
	this.bar.setTransform(0,0,1,1,0,0,0,77,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar}]}).wait(2));

	// LOADBAR_BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B06A00").s().p("AsfBGIAAiLIY/AAIAACLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-6.9,160,14);
p.frameBounds = [rect, rect];


(lib.k4 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AgHBUIgQARQgNAMgPAIQgKAGgPAPIgRARIAAk9IAOAAIAAC4QABgCAQgHQAVgJAMAAQAKAAAMAGIAAisIALAAIAAC4QAdgSAYAAQAaAAAIAaQADAHgBAHQAAAWgVAWQgRATgVAKQgKAFgQAQIgPARgAAEAnIAABdQAEADAYggQAdghAAgWQAAgPgOgIIgJgCQgOAAgUAQgAhPAnIAABdQADADAZggQAcghAAgWQAAgPgOgIIgJgCQgOAAgTAQg");
	this.shape.setTransform(0.7,-2.2);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.k3 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B16A01","#B26B01"],[0,1],-12.5,0,12.6,0).s().p("AApB/QADgHgBggQgCgfgEgIQgFgLgSgKIgYAAQgSAJgFAMQgFAMgDAgQgBAdACAFIhVAAIAAhVQAqAIAegQQARgHALgOIAAgaQgMgOgRgGQgggPgnAHIAAhVIBVAAQgDAHACAgQADAfAEAIQAEAKAUALIAYAAQASgKAFgPQAEgPABgcIgBgfIBUAAIAABVQgngIgfAQQgQAHgMANIAAAaQANAPAQAGQAgAQAlgIIAABVg");
	this.shape.setTransform(-1.2,-1.7);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.k2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AgvCiQgEAAgDgDQgDgDAAgEIAAkvQAAgEADgDQADgDAEAAIAMAAQAEAAADADQADADAAAEIAACgQAWgJAQAAQAgAAAKAdQADAIAAAIQAAAZgYAZIAAAAQgQASgUAMIAAAAQgGAEgOAOIAAAAIgSAQQgDADgEAAIAAAAgAgZArIAAA9IAKgMIAAAAQAVgcABgTQAAgHgHgEIgDgCQgJABgNAKg");
	this.shape.setTransform(0,-2.6);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.k1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("Ag7C7IAAhRIgpAIIAAg0IApgIIAAhRIgpAHIAAg0IApgHIAAhWIAbAAIAABQIBAgOIAAhXIAcAAIAABSIApgJIAAA0IgpAJIAABRIApgIIAAAzIgpAIIAABWIgcAAIAAhPIhAAOIAABWgAggghIAABSIBAgPIAAhQg");
	this.shape.setTransform(-1.4,-1.9);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.k0 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AAgCmIAAhPIiDAbIAAg0IAogIIAAhRIgoAHIAAg0IAogHIAAhWIAbAAIAABQICEgcIAAA0IgoAJIAABRIAogIIAAAzIgoAIIAABWgAggghIAABSIBAgPIAAhQg");
	this.shape.setTransform(-2.2,-1.9);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.bg = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.scanlines();
	this.instance.setTransform(2,-16.4);
	this.instance.alpha = 0.102;

	// Layer 2
	this.bgEffect = new lib.bg2_effect();
	this.bgEffect.setTransform(344.2,336.9,1,1,0,0,180,10.1,3.8);
	this.bgEffect.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDCAB").s().p("EhCVAxfMAAAgrBIFzGXIlzsAMAAAgsbMATcA0nMgCzg6aIThAAMgCsA4JMATpg4JIVwAAMgdBA/CMA5Sg/CIa5AAICqgGIAADWMhLSBEFMBLFgkLIAAXgMhHPAaUMBHPgDaIAARUg");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEDCAB").s().p("EhCOAxdMAAAhi5MCEdAAAMAAABi5g");

	this.addChild(this.shape_1,this.shape,this.bgEffect,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-750.8,-742.2,2190.3,2158.4);
p.frameBounds = [rect];


(lib.bass_btn = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AhsCqIAAgBQA7gqAbgmIABAAQAegtALhCQAEgaAAgVQAAhJgvgeQgWgNgZAAQgkAAgXAWQgPANAAARIAAABIABAKIABABQACAOATAGIABAAIAcAFIAAAAQAZAEgBAhQgBARgQAJQgPAJgVAAQgXAAgPgLQgQgOgBgXQgCgxAogqQAbgcA5AAIAmADIgBAAQAwAIAeArQAdAnAAAtIgBANQgHA3hGBDQg1A0hOAtIgXANIAigWgACEAOQgIgIAAgKQAAgKAGgHIAAgBQAHgJANAAQALAAAIAIQAIAIAAAMQAAAGgFAIQgIAKgOAAQgKAAgIgHgACEhmQgIgIAAgMQAAgKAGgHQAHgKANAAQALAAAIAJIAAAAQAIAHAAAMQAAAIgFAHIAAABQgIAKgOAAQgKAAgIgHg");
	this.shape.setTransform(-1,-1);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.alto_btn = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AACCjQgOgNAAgQQAAgKAIgHQAGgHAKAAQAKAAAIAHQAHAGAAAKQAAAJgJAGQgHAFgJgBQgBAAgBAAQgBAAgBAAQAAAAgBABQAAABAAAAQAAAFAJAFQALAHAMAAQAlAAAChEQABgdgIgSQgJgYgWgBQgUgBgJALQgHAIgDATQgCgYgPgUQgMgPgQgJQAPgHAMgPQAPgTACgYQADASAHAIQAIALAVgBQAVAAAKgYQAIgTgBgdQgChEglAAQgMAAgLAGQgJAFAAAEQAAADAFgBQAJAAAHAEQAJAGAAAKQAAAKgHAGQgHAGgLAAQgKAAgGgGQgIgHAAgLQAAgPAOgOQASgOAaAAQAhAAAUAYQAUAWAAAiQAAAigZAYQgaAYgigBQgMAAgNgGQgEAIgEAIQgEAFgHABQAGAEAFAFQAFAIAEAIQANgGAMAAQAiAAAZAXQAaAYAAAhQAAAigUAVQgVAYggAAQgaAAgSgPgAg8CyIAAlhIAOAAIAAFhgAh2CyIAAlhIArAAIAAFhg");
	this.shape.setTransform(-0.5,-1.4);

	// Layer 1
	this.instance = new lib.noteTrainer_tipka_bg();
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,25,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);
p.frameBounds = [rect];


(lib.staff = function() {
	this.initialize();

	// keyz
	this.clef_mc = new lib.clef();
	this.clef_mc.setTransform(-259.5,98.6,0.718,0.725);
	this.clef_mc.shadow = new cjs.Shadow("#000000",1,1,5);
	this.clef_mc.cache(-50,-131,103,263);

	// lines
	this.note_mc = new lib.note();
	this.note_mc.setTransform(6.8,-170.9);

	this.instance = new lib.staffline();
	this.instance.setTransform(0,150);
	this.instance.shadow = new cjs.Shadow("#000000",4,4,5);
	this.instance.cache(-294,-1,589,4);

	this.instance_1 = new lib.staffline();
	this.instance_1.setTransform(0,120);
	this.instance_1.shadow = new cjs.Shadow("#000000",4,4,5);
	this.instance_1.cache(-294,-1,589,4);

	this.instance_2 = new lib.staffline();
	this.instance_2.setTransform(0,90);
	this.instance_2.shadow = new cjs.Shadow("#000000",4,4,5);
	this.instance_2.cache(-294,-1,589,4);

	this.instance_3 = new lib.staffline();
	this.instance_3.setTransform(0,60);
	this.instance_3.shadow = new cjs.Shadow("#000000",4,4,5);
	this.instance_3.cache(-294,-1,589,4);

	this.instance_4 = new lib.staffline();
	this.instance_4.setTransform(0,31);
	this.instance_4.shadow = new cjs.Shadow("#000000",4,4,5);
	this.instance_4.cache(-294,-1,589,4);

	this.instance_5 = new lib.staffline();
	this.instance_5.setTransform(0,30);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.note_mc,this.clef_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-295,-188,587.7,380.7);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
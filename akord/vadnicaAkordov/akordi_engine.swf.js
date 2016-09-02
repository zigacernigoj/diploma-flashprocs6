(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.akordi_engineswf = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{settings:0,kvinta:1,game:2});

	// Layer 363
	this.title_txt = new cjs.Text("nastavitve", "60px Arial", "#FFFFFF");
	this.title_txt.lineHeight = 62;
	this.title_txt.lineWidth = 460;
	this.title_txt.setTransform(19,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt}]}).to({state:[]},1).wait(2));

	// Layer 362
	this.warning_txt = new cjs.Text("", "20px Lucida Sans Unicode", "#CC0000");
	this.warning_txt.lineHeight = 22;
	this.warning_txt.lineWidth = 371;
	this.warning_txt.setTransform(233.1,89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.warning_txt}]}).to({state:[]},1).wait(2));

	// Layer 360
	this.s1 = new lib.Sprite56();
	this.s1.setTransform(657.8,50.2,0.625,0.625,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.s1).to({_off:true},1).wait(2));

	// Layer 356
	this.back_btn = new lib.Sprite52();
	this.back_btn.setTransform(449.8,549.1);
	this.back_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.timeline.addTween(cjs.Tween.get(this.back_btn).to({_off:true},1).wait(2));

	// Layer 352
	this.fw_btn = new lib.Sprite49();
	this.fw_btn.setTransform(679.8,549.1);
	this.fw_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.timeline.addTween(cjs.Tween.get(this.fw_btn).to({_off:true},1).wait(2));

	// Layer 347
	this.bass_btn = new lib.Sprite45();
	this.bass_btn.setTransform(718.5,116.4);
	this.bass_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.timeline.addTween(cjs.Tween.get(this.bass_btn).to({_off:true},1).wait(2));

	// Layer 342
	this.treble_btn = new lib.Sprite43();
	this.treble_btn.setTransform(717.6,56.7);
	this.treble_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.timeline.addTween(cjs.Tween.get(this.treble_btn).to({_off:true},1).wait(2));

	// Layer 126
	this.c13 = new lib.Sprite63();
	this.c13.setTransform(565.6,421.9,0.831,0.831);
	this.c13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c13).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 119
	this.c12 = new lib.Sprite63();
	this.c12.setTransform(305.2,421.9,0.831,0.831);
	this.c12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c12).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 112
	this.c11 = new lib.Sprite63();
	this.c11.setTransform(60.9,421.9,0.831,0.831);
	this.c11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c11).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 105
	this.c10 = new lib.Sprite63();
	this.c10.setTransform(565.6,365.2,0.831,0.831);
	this.c10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c10).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 98
	this.c9 = new lib.Sprite63();
	this.c9.setTransform(305.2,365.2,0.831,0.831);
	this.c9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c9).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 91
	this.c8 = new lib.Sprite63();
	this.c8.setTransform(60.9,365.2,0.831,0.831);
	this.c8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c8).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 84
	this.c14 = new lib.Sprite63();
	this.c14.setTransform(60.9,481.9,0.831,0.831);
	this.c14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c14).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 77
	this.c7 = new lib.Sprite63();
	this.c7.setTransform(60.9,230.9,0.831,0.831);
	this.c7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c7).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 70
	this.c6 = new lib.Sprite63();
	this.c6.setTransform(565.6,161.9,0.831,0.831);
	this.c6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c6).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 64
	this.acur_mc = new lib.Sprite83();
	this.acur_mc.setTransform(744.3,281.1,0.683,0.683);
	this.acur_mc.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.acur_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.acur_mc).wait(2).to({_off:false},0).wait(1));

	// Layer 63
	this.c5 = new lib.Sprite63();
	this.c5.setTransform(305.2,161.9,0.831,0.831);

	this.title_txt_1 = new cjs.Text("", "bold 20px LucidaSansUnicode", "#E37302");
	this.title_txt_1.textAlign = "center";
	this.title_txt_1.lineHeight = 22;
	this.title_txt_1.lineWidth = 372;
	this.title_txt_1.setTransform(202.1,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.c5}]},1).to({state:[{t:this.title_txt_1}]},1).wait(1));

	// Layer 59
	this.bb_btn = new lib.Sprite49();
	this.bb_btn.setTransform(687.1,29);
	this.bb_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);
	this.bb_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bb_btn).wait(2).to({_off:false},0).wait(1));

	// Layer 56
	this.c4 = new lib.Sprite63();
	this.c4.setTransform(60.9,163.9,0.831,0.831);
	this.c4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 49
	this.c3 = new lib.Sprite63();
	this.c3.setTransform(565.6,105.2,0.831,0.831);
	this.c3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 42
	this.c2 = new lib.Sprite63();
	this.c2.setTransform(305.2,105.2,0.831,0.831);
	this.c2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 35
	this.c1 = new lib.Sprite63();
	this.c1.setTransform(60.9,105.2,0.831,0.831);
	this.c1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 28
	this.c0 = new lib.Sprite63();
	this.c0.setTransform(60.9,37.9,0.831,0.831);
	this.c0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c0).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("EhLUAAAMCWpAAA");
	this.shape.setTransform(374.1,306.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 26
	this.accwarning = new cjs.Text("", "20px Lucida Sans Unicode", "#990000");
	this.accwarning.textAlign = "center";
	this.accwarning.lineHeight = 22;
	this.accwarning.lineWidth = 410;
	this.accwarning.setTransform(547.1,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accwarning}]},1).to({state:[]},1).wait(1));

	// Layer 22
	this.exmen_mc = new lib.Sprite39();
	this.exmen_mc.setTransform(19.5,334.3);

	this.fw1_btn = new lib.Sprite49();
	this.fw1_btn.setTransform(679.8,546);
	this.fw1_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.staff_mc = new lib.Sprite77();
	this.staff_mc.setTransform(447.1,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exmen_mc}]}).to({state:[{t:this.fw1_btn}]},1).to({state:[{t:this.staff_mc}]},1).wait(1));

	// Layer 1
	this.mcBg = new lib.Sprite27();
	this.mcBg.setTransform(376,283.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBg}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.8,-458.4,3750,2158.4);


// symbols:



(lib.Sprite65 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB347").ss(3,1,1).p("EgtsAAAMBbZAAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Sprite56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCBD61").s().p("Ag0A2IifgsICXg+IgFikIBpB7ICag5IhVCNIBnB/IigglIhZCIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},39).wait(1));

	// 
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACggOICVC7Ijpg2IiEDHIgVjvIjnhAIDchcIgIjwICbC0IDghSg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCBD61").s().p("AhNBPIjmhAIDbhcIgIjvICbC0IDghTIh7DNICUC6Ijpg1IiCDGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkvAPIDZhaIgIjtICYCyIDdhSIh6DKICTC4Ijmg1IiBDEIgUjrIjkg/");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCBD61").s().p("AhLBOIjkg/IDZhaIgIjtICYCyIDdhSIh6DKICTC4Ijmg1IiBDEg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkqAPIDVhZIgIjpICWCvIDZhQIh3DGICQC1Ijig0Ih/DBIgUjnIjgg+");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCBD61").s().p("AhKBNIjgg+IDVhZIgIjoICWCuIDZhQIh3DGICQC1Ijig0Ih/DAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AklAOIDShXIgIjlICTCsIDWhPIh2DEICOCxIjegzIh9C+IgUjkIjcg9");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCBD61").s().p("AhJBLIjcg9IDShXIgIjlICTCsIDWhPIh2DEICOCxIjegzIh9C+g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkgAOIDOhWIgIjhICRCpIDShNIhzDAICLCvIjagyIh7C6IgUjgIjYg8");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCBD61").s().p("AhIBKIjYg8IDOhWIgIjgICRCoIDShNIhzDAICLCvIjagzIh7C6g");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkbAOIDKhUIgHjeICOCmIDPhMIhyC9ICJCsIjWgxIh5C3IgTjcIjVg7");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCBD61").s().p("AhGBJIjVg7IDLhUIgIjeICOCmIDPhMIhyC9ICJCsIjWgxIh5C3g");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkWAOIDHhTIgIjaICMCkIDLhLIhvC5ICGCpIjTgwIh2C0IgTjYIjRg6");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCBD61").s().p("AhFBHIjRg5IDHhTIgIjaICMCkIDLhLIhvC5ICGCpIjTgwIh2Czg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkSANIDEhRIgHjWICJChIDIhKIhuC3ICFClIjQgvIh0CxIgTjVIjOg5");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCBD61").s().p("AhEBGIjOg5IDEhRIgHjVICJCgIDIhKIhuC3ICFClIjQgvIh0Cwg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkNANIDBhQIgIjSICHCeIDEhIIhrCzICCCjIjMgvIhyCuIgTjRIjKg4");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCBD61").s().p("AhDBFIjKg4IDBhQIgIjSICHCeIDEhIIhrCzICCCjIjMgvIhyCug");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkIANIC9hOIgHjPICECbIDBhHIhqCwICACgIjIguIhwCrIgSjNIjHg3");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCBD61").s().p("AhBBEIjHg3IC9hOIgHjOICECaIDBhHIhqCwICACgIjIguIhwCqg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkDANIC5hNIgHjLICCCYIC+hFIhoCsIB9CdIjEgtIhvCoIgRjJIjDg2");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCBD61").s().p("AhABCIjDg2IC6hMIgIjLICCCYIC+hFIhoCtIB9CcIjFgtIhtCog");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj+AMIC2hLIgHjHIB/CVIC6hEIhmCqIB7CaIjBgtIhsClIgRjGIi/g1");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCBD61").s().p("Ag/BBIi/g1IC2hLIgHjGIB/CUIC6hEIhmCqIB7CaIjBgtIhsCkg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj5AMICyhKIgHjDIB9CTIC3hDIhkCmIB4CXIi9grIhqChIgRjCIi7g0");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCBD61").s().p("Ag+BAIi7g0ICyhKIgHjDIB9CTIC3hDIhkCmIB4CXIi9grIhqChg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj0AMICvhJIgHi/IB6CQICzhCIhiCjIB2CUIi5gqIhoCeIgRi+Ii3gz");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCBD61").s().p("Ag9A/Ii3gzICvhJIgHi+IB6CPICzhCIhiCjIB2CUIi5gqIhoCdg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjwAMICshHIgHi8IB5CNICvhAIhgCfIB0CRIi2gpIhmCbIgQi6Ii1gy");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCBD61").s().p("Ag7A+Ii1gzICshGIgHi8IB5CNICvhAIhgCgIB0CQIi2gpIhmCbg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjrALICohFIgGi4IB2CKICrg/IheCdIByCOIiygpIhkCYIgQi3Iixgx");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FCBD61").s().p("Ag6A8IixgxICohFIgGi4IB2CKICrg/IheCdIByCOIizgpIhjCXg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjmALIClhEIgHi0IB0CHICog9IhcCZIBvCLIivgoIhhCVIgQizIitgw");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCBD61").s().p("Ag5A7IitgwIClhEIgHizIB0CGICog9IhcCZIBvCLIivgoIhhCUg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjhALIChhDIgGiwIBxCEICkg8IhaCWIBtCIIirgnIhfCSIgQivIipgv");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCBD61").s().p("Ag4A6IipgvIChhDIgGiwIBxCEICkg8IhaCWIBtCIIirgnIhfCSg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjcALICehBIgHitIBvCCIChg7IhYCSIBqCFIingmIhdCPIgPirIimgu");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCBD61").s().p("Ag2A4IimguICehAIgHisIBvCBIChg7IhYCTIBqCEIingmIhdCOg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjXAKICag/IgGipIBsB/ICdg6IhWCQIBoCCIijgmIhbCMIgPioIiigt");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCBD61").s().p("Ag1A3IiigtICag/IgGipIBsB/ICdg6IhWCQIBoCCIijgmIhbCMg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABugJIBmB/IiggkIhaCIIgOikIifgsICXg+IgGilIBqB8ICag5g");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCBD61").s().p("Ag0A2IifgsICXg+IgFikIBpB7ICag5IhVCNIBnB/IigglIhZCIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},19).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).wait(1));

	// Layer 1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABugJIBmB/IiggkIhaCIIgOikIifgsICXg+IgGilIBqB8ICag5g");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCBD61").s().p("Ag0A2IifgsICXg+IgFikIBpB7ICag5IhVCNIBnB/IigglIhZCIg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACggOICVC7Ijpg2IiEDHIgVjvIjnhAIDchcIgIjwICbC0IDghSg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCBD61").s().p("AhNBPIjmhAIDbhcIgIjvICbC0IDghTIh7DNICUC6Ijpg1IiCDGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[]},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-21.7,42.4,43.6);


(lib.Sprite52 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("AuYDOQguAAgWgXQgXgVABguIAAjoQgBgtAXgVQAWgYAuAAIcxAAQAuAAAWAYQAXAVgBAtIAADoQABAugXAVQgWAXguAAg");

	// Layer 2
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 173;
	this.title_txt.setTransform(-1.9,-17.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDCAB","#FEB23D"],[0,0.424],0,26.1,0,-25.9).s().p("AuYCFQgkAAgRgRQgSgSABgjIAAhwQOrimQSCmIAABwQABAjgSASQgRARgkAAg");
	this.shape_1.setTransform(0,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FEDCAB","#FEB23D"],[0,1],0,-27.7,0,27.9).s().p("AveBeIAAh2QAAgfANgRIAIgJIAAABIABgBIAAAAQASgNAeAAIcxAAQAfAAARANIAAAAQAXARgBAoIAAB2QwSijurCjg");
	this.shape_2.setTransform(0,-9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D27E02","#FEDCAB"],[0,1],0.1,36,0,-35.9).s().p("AuYDYQhlAAAAhkIAAjoQABgTAEgQQAQhABQAAIcxAAQA0gBAZAcQAYAYAAAwIAADoQAABkhlAAgAvRikQgNARAAAfIAAB2IAAByQgBAkASASQARAQAkABIcxAAQAkgBARgQQASgSgBgkIAAhyIAAh2QABgogXgRIAAAAQgRgNgfAAI8xAAQgeAAgSANIAAAAIgBABIAAgBg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.title_txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.1,-21.6,204.4,43.4);


(lib.Sprite49 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("AuYDOQguAAgWgXQgXgVABguIAAjoQgBgtAXgVQAWgYAuAAIcxAAQAuAAAWAYQAXAVgBAtIAADoQABAugXAVQgWAXguAAg");

	// Layer 2
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 173;
	this.title_txt.setTransform(-1.9,-17.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDCAB","#FEB23D"],[0,0.424],0,26.1,0,-25.9).s().p("AuYCFQgkAAgRgRQgSgSABgjIAAhwQOrimQSCmIAABwQABAjgSASQgRARgkAAg");
	this.shape_1.setTransform(0,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D27E02","#FEDCAB"],[0,1],0.1,36,0,-35.9).s().p("AuYDYQhlAAAAhkIAAjoQABgTAEgQQAQhABQAAIcxAAQA0gBAZAcQAYAYAAAwIAADoQAABkhlAAgAvRikQgNARAAAfIAAB2IAAByQgBAkASASQARAQAkABIcxAAQAkgBARgQQASgSgBgkIAAhyIAAh2QABgogXgRIAAAAQgRgNgfAAI8xAAQgeAAgSANIAAAAIgBABIAAgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEDCAB","#FEB23D"],[0,1],0,-27.7,0,27.9).s().p("AveBeIAAh2QAAgfANgRIAIgJIAAABIABgBIAAAAQASgNAeAAIcxAAQAfAAARANIAAAAQAXARgBAoIAAB2QwSijurCjg");
	this.shape_3.setTransform(0,-9.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.title_txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.1,-21.6,204.4,43.4);


(lib.Shape82 = function() {
	this.initialize();

	// Shape sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9A62B").ss(1,1,1,3,true).p("AKAmpIAAMtQAAAmgmAAIzZAA");
	this.shape.setTransform(1.9,2.9);

	// Shape sublayer 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,1],0,65.1,0,-27.1).s().p("AqSD+IAAnWQAAgmAmAAITZAAQAmAAAAAmIAAHWQlWj5lHB6QknCAklAAIg8gBg");
	this.shape_1.setTransform(0,-17.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.9,-43.4,131.9,89);


(lib.Shape75 = function() {
	this.initialize();

	// Shape sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB347").s().p("AANLTQhHg7AAhGQAAgtAkgeQAggfAtABQAvAAAhAdQAeAcAAAsQAAApgmAaQgiAWgmgFQgWgCABANQgBASAqAZQAvAcA1AAQCjAAAJksQAEh+gjhTQgqhqhegCQhagDgoAxQgeAhgNBTQgQhqhEhZQgzhAhIgoQBEgmAyhAQBFhWAPhrQAOBRAeAjQAmAwBbgDQBegDAshpQAihUgFh9QgJkwiiABQg1gBguAcQgqAYAAARQAAAMAWgBQAlgFAiAWQAmAaAAArQAAArgfAcQgfAdgvgBQgvAAgggeQgkgeAAgtQAAhGBGg7QBPhAByAAQCQAABcBoQBXBlAACVQAACVhuBqQhxBqiWgCQg1gBg8gaQgPAjgaAiQgUAWgcANQAaAPAYAYQAbAgAPAjQA+gaAyABQCWgCBwBoQByBpAACUQAACUhZBhQhcBkiPACQhxAAhOhAgAkOMTIAA4dIBAAAIAAYdgAoPMTIAA4dIDBAAIAAYdg");
	this.shape.setTransform(18.5,69.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-8.9,105.8,157.4);


(lib.Shape66 = function() {
	this.initialize();

	// Shape sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-6.9,0,5).s().p("AivAxQAAg1AzgnQA1gmBHAAQBJAAAzAmQA0AnAAA1QAAA3g3gzQg0gwhCAJIgDABIgGABQhIAPgxAlQgTAOgMAAQgRAAAAghg");
	this.shape.setTransform(20,9.1);

	// Shape sublayer 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-14.5,0,14.8).s().p("AiMBpQg6gsgBg9QABg8A6gtQA7grBRgBQBSABA7ArQA7AtgBA8QABA9g7AsQg7AthSgBQhRABg7gtg");
	this.shape_1.setTransform(20,15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,30);


(lib.Shape40 = function() {
	this.initialize();

	// Shape sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-11.1,0,15.1).s().p("AjXARIgEhTQgBg4AmAAIFtAAQAlAAABA4IAACvQhuiDhvB0Qg8AdgsAAQhWAAgZhqg");
	this.shape.setTransform(25.1,15.3);

	// Shape sublayer 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFCC66"],[0,1],0,-22.9,0,23.8).s().p("AjCDsQgpAAAAgoIAAmGQAAgpApAAIGGAAQAoAAAAApIAAGGQAAAogoAAg");
	this.shape_1.setTransform(25,25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,1.4,47.3,47.3);


(lib.Shape25 = function() {
	this.initialize();

	// Shape sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg/9AMTMB/7AAAEg/9AN8MB/7AAAEg/9APlMB/7AAAEg/9AROMB/7AAAEg/9AS3MB/7AAAEg/9AUgMB/7AAAEg/9AWJMB/7AAAEg/9AXyMB/7AAAEg/9AZbMB/7AAAEg/9AoMMB/7AAAEg/9AmjMB/7AAAEg/9Ak6MB/7AAAEg/9AjRMB/7AAAEg/9AhoMB/7AAAEg/9Af/MB/7AAAEg/9AeWMB/7AAAEg/9ActMB/7AAAEg/9AbEMB/7AAAEg/9AuwMB/7AAAEg/9AtHMB/7AAAEg/9AreMB/7AAAEg/9Ap1MB/7AAAEg/9AKqMB/7AAAEg/9AJBMB/7AAAEg/9AHYMB/7AAAEg/9AFvMB/7AAAEg/9AEGMB/7AAAEg/9ACdMB/7AAAEg/9AA0MB/7AAAEg/9gRNMB/7AAAEg/9gPkMB/7AAAEg/9gN7MB/7AAAEg/9gMSMB/7AAAEg/9gKpMB/7AAAEg/9gJAMB/7AAAEg/9gHXMB/7AAAEg/9gFuMB/7AAAEg/9gEFMB/7AAAEg/9gAzMB/7AAAEg/9gCcMB/7AAAEg/9gf+MB/7AAAEg/9geVMB/7AAAEg/9gcsMB/7AAAEg/9gbDMB/7AAAEg/9gZaMB/7AAAEg/9gXxMB/7AAAEg/9gWIMB/7AAAEg/9gUfMB/7AAAEg/9gS2MB/7AAAEg/9ghnMB/7AAAEg/9gjQMB/7AAAEg/9gk5MB/7AAAEg/9gmiMB/7AAAEg/9goLMB/7AAAEg/9gp0MB/7AAAEg/9grdMB/7AAAEg/9gtGMB/7AAAEg/9guvMB/7AAA");
	this.shape.setTransform(0,-5.2);

	// Shape sublayer 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg/9AMTMB/7AAAEg/9AN8MB/7AAAEg/9APlMB/7AAAEg/9AROMB/7AAAEg/9AS3MB/7AAAEg/9AUgMB/7AAAEg/9AWJMB/7AAAEg/9AXyMB/7AAAEg/9AZbMB/7AAAEg/9AoMMB/7AAAEg/9AmjMB/7AAAEg/9Ak6MB/7AAAEg/9AjRMB/7AAAEg/9AhoMB/7AAAEg/9Af/MB/7AAAEg/9AeWMB/7AAAEg/9ActMB/7AAAEg/9AbEMB/7AAAEg/9AuwMB/7AAAEg/9AtHMB/7AAAEg/9AreMB/7AAAEg/9Ap1MB/7AAAEg/9AKqMB/7AAAEg/9AJBMB/7AAAEg/9AHYMB/7AAAEg/9AFvMB/7AAAEg/9AEGMB/7AAAEg/9ACdMB/7AAAEg/9AA0MB/7AAAEg/9gRNMB/7AAAEg/9gPkMB/7AAAEg/9gN7MB/7AAAEg/9gMSMB/7AAAEg/9gKpMB/7AAAEg/9gJAMB/7AAAEg/9gHXMB/7AAAEg/9gFuMB/7AAAEg/9gEFMB/7AAAEg/9gAzMB/7AAAEg/9gCcMB/7AAAEg/9gf+MB/7AAAEg/9geVMB/7AAAEg/9gcsMB/7AAAEg/9gbDMB/7AAAEg/9gZaMB/7AAAEg/9gXxMB/7AAAEg/9gWIMB/7AAAEg/9gUfMB/7AAAEg/9gS2MB/7AAAEg/9ghnMB/7AAAEg/9gjQMB/7AAAEg/9gk5MB/7AAAEg/9gmiMB/7AAAEg/9goLMB/7AAAEg/9gp0MB/7AAAEg/9grdMB/7AAAEg/9gtGMB/7AAAEg/9guvMB/7AAA");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-409.4,-304.4,818.9,603.8);


(lib.Shape23 = function() {
	this.initialize();

	// Shape sublayer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnmBJlMBPNieKMgzoCpLg");
	this.shape.setTransform(-253.5,541.5);

	// Shape sublayer 14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egp9hUJMBT7CcgI7QLzg");
	this.shape_1.setTransform(268.8,538.8);

	// Shape sublayer 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAK1hMAIbTLsMhMPCMVg");
	this.shape_2.setTransform(244.2,-486.6);

	// Shape sublayer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Egl/hCBIbarcMAwlCa7g");
	this.shape_3.setTransform(-243.1,-495.8);

	// Shape sublayer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhUwgJVIKQ73MCfRBKag");
	this.shape_4.setTransform(-542.5,-238.2);

	// Shape sublayer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhTYgiiMCmxAo8IpkcJg");
	this.shape_5.setTransform(533.8,221.2);

	// Shape sublayer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhQwAI+MChhgtrMiW8BJbg");
	this.shape_6.setTransform(-517,235.1);

	// Shape sublayer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EBHxgm8ILDbkMilnAyVMCakhN5g");
	this.shape_7.setTransform(530.1,-249.4);

	// Shape sublayer 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EAohg9iIVCVBMh7FBmEg");
	this.shape_8.setTransform(394,-394);

	// Shape sublayer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EhWUAAAMCspgO2IAAdtg");
	this.shape_9.setTransform(552.7,0);

	// Shape sublayer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EhD5hD5MCHzByxI1CVCg");
	this.shape_10.setTransform(434.7,434.7);

	// Shape sublayer 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgO2BUYMAO2iovMAO3Covg");
	this.shape_11.setTransform(0,540.2);

	// Shape sublayer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhFGAwGMCKNh1NMh1MCKOg");
	this.shape_12.setTransform(-442.4,442.5);

	// Shape sublayer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhRfgO2MCi/AO2Mii/AO3g");
	this.shape_13.setTransform(-521.6,0);

	// Shape sublayer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhDWguUIVC1BMBxrCGsg");
	this.shape_14.setTransform(-431,-431.1);

	// Shape sublayer 0
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgO2hT+IdtAAMgO3Cn9g");
	this.shape_15.setTransform(0,-537.7);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1085,-1075.3,2190.3,2158.4);


(lib.Shape22 = function() {
	this.initialize();

	// Shape sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDCAB").s().p("EhCVAxfMAAAgrBIFzGXIlzsAMAAAgsbMATcA0nMgCzg6aIThAAMgCsA4JMATpg4JIVwAAMgdBA/CMA5Sg/CIa5AAICqgGIAADWMhLSBEFMBLFgkLIAAXgMhHPAaUMBHPgDaIAARUg");

	// Shape sublayer 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEDCAB").s().p("EhCOAxdMAAAhi5MCEdAAAMAAABi5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-424.5,-316.7,849.3,633.6);


(lib.Shape16 = function() {
	this.initialize();

	// Shape sublayer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCAD38","#FDC877","#FCAD38"],[0,0.49,1],0,-15,0,15.9).s().p("AiXCnQgGgBgEgEQgFgEAAgHIAAkuQAAgGAFgEQAEgFAGAAIEuAAQAHAAAEAFIAFAKIAAEuQgBAHgEAEQgEAEgHABgAiHCIIEPAAIAAkPIkPAAg");
	this.shape.setTransform(0,4.8);

	// Shape sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC48A").s().p("ACXCxIkuAAIAAAAQgLgBgGgHQgIgHAAgLIAAkuQAAgKAHgHIABgBQAHgHAKAAIEuAAQALAAAHAIQAHAGABALIAAAAIAAEuIAAABQgBAKgGAHIgBABQgHAGgKABgAh9B+ID7AAIAAj7Ij7AAg");
	this.shape_1.setTransform(0,4.8);

	// Shape sublayer 0
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,0,0,0)").s().p("AjqFPIAAqdIHUAAIAAKdg");
	this.shape_2.setTransform(-0.6,13.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-20.1,47,67);


(lib.Sprite83 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.Shape82("single",0);

	// Layer 3
	this.acur = new cjs.Text("100 %", "41px Impact", "#B16A01");
	this.acur.textAlign = "center";
	this.acur.lineHeight = 43;
	this.acur.lineWidth = 115;
	this.acur.setTransform(-1.4,-37);

	// Layer 2
	this.title_txt = new cjs.Text("accuracy", "20px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 22;
	this.title_txt.lineWidth = 115;
	this.title_txt.setTransform(-1.9,14.1);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDA92D","#FEE3BC"],[0,1],0,46.2,0,-46).s().p("ApsG9QgmAAAAgnIAAsrQAAgmAmAAITZAAQAmAAAAAmIAAMrQAAAngmAAg");
	this.shape.setTransform(0,1);

	this.addChild(this.shape,this.title_txt,this.acur,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.9,-43.4,131.9,89);


(lib.Sprite76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{TREBLE:0,ALTO:2,SOPRANO:4});

	// Layer 1
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-129.6,99,259.3);


(lib.Sprite67 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape66("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,30);


(lib.Sprite63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AicC2IAAlrIE5AAIAAFrg");
	this.shape.setTransform(-0.2,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 5
	this.title_txt = new cjs.Text("", "20px Lucida Sans Unicode", "#E37302");
	this.title_txt.lineHeight = 22;
	this.title_txt.lineWidth = 187;
	this.title_txt.setTransform(25.9,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt}]}).wait(2));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(252,173,56,0.8)").ss(5,1,1).p("ABRhGIhyCNIgvgu");
	this.shape_1.setTransform(0.2,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 3
	this.instance = new lib.Shape16("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-20.1,240.7,75.8);


(lib.Sprite41 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape40("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,1.4,47.3,47.3);


(lib.Sprite26 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape25("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-409.4,-304.4,818.9,603.8);


(lib.Sprite24 = function() {
	this.initialize();

	// Layer 16
	this.instance = new lib.Shape23("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1085,-1075.3,2190.3,2158.4);


(lib.Sprite21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AicC2IAAlrIE5AAIAAFrg");
	this.shape.setTransform(-0.2,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 5
	this.title_txt = new cjs.Text("", "20px Lucida Sans Unicode", "#E37302");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 22;
	this.title_txt.lineWidth = 187;
	this.title_txt.setTransform(133.2,-25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt}]}).wait(2));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(252,173,56,0.8)").ss(5,1,1).p("ABRhGIhyCNIgvgu");
	this.shape_1.setTransform(0.2,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 3
	this.instance = new lib.Shape16("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-25.8,254.7,114.3);


(lib.Sprite72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7C7IAAhRIgpAIIAAg0IApgIIAAhRIgpAIIAAg0IApgIIAAhWIAbAAIAABQIBAgNIAAhYIAbAAIAABSIAqgJIAAA0IgqAJIAABRIAqgJIAAA0IgqAIIAABWIgbAAIAAhPIhAANIAABXgAggghIAABRIBAgNIAAhRg");
	this.shape.setTransform(-39.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2CfIgDgHIAAkvIADgHIAHgDIAMAAQAEAAADADQADADAAAEIAACgQAWgJAQAAQAgAAAKAdQADAIAAAIQAAAZgYAZQgRASgTAMIgUASIgSAQIgHADQgFAAgCgDgAgZArIAAA9IAKgMIAAABQAVgdABgTQAAgHgHgEIgDgCQgJABgNAKg");
	this.shape_1.setTransform(-29.9,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AApB/QADgIgCgeQgBgggEgIQgFgMgSgJIgYAAQgSAJgFAMQgFAMgCAgQgCAdACAFIhUAAIAAhVQAoAIAggPQAQgIAMgOIAAgaQgNgOgRgGQghgPglAHIAAhUIBUAAQgEAHADAfQADAfAEAIQAEALAUAKIAYAAQATgKAEgPQAFgPAAgdIgBgdIBVAAIAABUQgogIgfAQQgQAHgMANIAAAaQANAOARAIQAfAPAmgIIAABVg");
	this.shape_2.setTransform(-39.9,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBUIgQARQgNAMgPAIQgKAGgPAPIgRARIAAk9IAOAAIAAC4IARgJQAVgJAMAAQAKAAAMAGIAAisIALAAIAAC4QAdgSAYAAQAaAAAIAaIACAOQABAWgWAWQgRATgVAKQgLAFgPAQIgPARgAAEAnIAABdQADADAaggQAcghAAgWQAAgPgOgIIgJgCQgOAAgUAQgAhPAnIAABdQADADAZggQAcghAAgWQAAgPgOgIIgJgCQgOAAgTAQg");
	this.shape_3.setTransform(-38.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Sprite67();
	this.instance.setTransform(-19.9,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-14.9,40,30);


(lib.Sprite45 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AhsCqIAAgBQA7gqAbgmIABAAQAegtALhCQAEgaAAgVQAAhJgvgeQgWgNgZAAQgkAAgXAWQgPANAAARIAAABIABAKIABABQACAOATAGIABAAIAcAFIAAAAQAZAEgBAhQgBARgQAJQgPAJgVAAQgXAAgPgLQgQgOgBgXQgCgxAogqQAbgcA5AAIAmADIgBAAQAwAIAeArQAdAnAAAtIgBANQgHA3hGBDQg1A0hOAtIgXANgACEAOQgIgIAAgKQAAgKAGgHIAAgBQAHgJANAAQALAAAIAIQAIAIAAAMQAAAGgFAIQgIAKgOAAQgKAAgIgHgACEhmQgIgIAAgMQAAgKAGgHQAHgKANAAQALAAAIAJIAAAAQAIAHAAAMQAAAIgFAHIAAABQgIAKgOAAQgKAAgIgHg");
	this.shape.setTransform(-1,-1);

	// Layer 1
	this.instance = new lib.Sprite41();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite43 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AgLDDQgQgGgIgQIgDgIQgBgRAOgIQAIgGAJACQAHACADAFQAHAGAAAKQAAAMgJAHQgGAGgJgBIAKAHIANABIAKgFQAMgIAEgNIAAgKIgJg1IgGABIgTABIgVgEQgegMgPgdIgHgXQgCgNAEgNQAIgXAQgUIAfgkIAIgHIgDgMIgFghQgDgSAFgRQAFgRAJgOIAMgJQAHgCAEAHIAKAWQAGAQABARQABAcgMAZQgKAWgRAOIAGAjIAZAAIAQAHIAOALQAPAVgDAaQgDATgNANQgMAMgRADIAJA3IAAAHQAAAGgEAGQgGALgLAGIgSAGgAgggKIgNATQgIAPgBARQAAAOAJAMIAFAHQAGAJAJAFQAYAPAZgJIgRhVIgHACIgGAEQgRAMgBAVIABAHIAHANQALANAOAEIAAACIgEgBQgNgFgLgLQgOgOAAgTIAAgJQABgIAFgIQALgSATgFIgEgggAAMAJIAQBTQALgCAIgHQANgNAAgSQAAgTgOgNQgMgLgQAAIgGAAgAALinIgKAOIgHAYIgCAPIACASIADAQIAIgJQALgLAHgNQAKgRgDgSIgCgMQgCgGgGgDIgDAAQgDAAgDACg");
	this.shape.setTransform(-1.9,-1.9);

	// Layer 1
	this.instance = new lib.Sprite41();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite39 = function() {
	this.initialize();

	// Layer 319
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("ECptgcVMAAAA41EDTdgcVMAAAA41Afp8BMAAAA4rEgqjgcpMAAAA4/EBjdgcVMAAAA41EioUgcfMAAAA4XEjTcgcVMAAAA4XEh8agcLMAAAA35");
	this.shape.setTransform(1626.7,0.2);

	// Layer 312
	this.cb43 = new lib.Sprite21();
	this.cb43.setTransform(3065.6,46.9,0.701,0.701);

	// Layer 305
	this.cb42 = new lib.Sprite21();
	this.cb42.setTransform(3065.6,-32,0.701,0.701);

	// Layer 298
	this.cb41 = new lib.Sprite21();
	this.cb41.setTransform(3065.6,-110.9,0.701,0.701);

	// Layer 297
	this.title8_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title8_txt.lineHeight = 17;
	this.title8_txt.lineWidth = 194;
	this.title8_txt.setTransform(3058.3,-176.8);

	// Layer 290
	this.cb40 = new lib.Sprite21();
	this.cb40.setTransform(2752,-32,0.701,0.701);

	// Layer 283
	this.cb39 = new lib.Sprite21();
	this.cb39.setTransform(2752,-110.9,0.701,0.701);

	// Layer 282
	this.title7_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title7_txt.lineHeight = 17;
	this.title7_txt.lineWidth = 194;
	this.title7_txt.setTransform(2744.7,-176.8);

	// Layer 275
	this.cb38 = new lib.Sprite21();
	this.cb38.setTransform(2508,46.9,0.701,0.701);

	// Layer 268
	this.cb37 = new lib.Sprite21();
	this.cb37.setTransform(2508,-32,0.701,0.701);

	// Layer 261
	this.cb36 = new lib.Sprite21();
	this.cb36.setTransform(2508,-110.9,0.701,0.701);

	// Layer 254
	this.cb35 = new lib.Sprite21();
	this.cb35.setTransform(2288,125.9,0.701,0.701);

	// Layer 247
	this.cb34 = new lib.Sprite21();
	this.cb34.setTransform(2288,46.9,0.701,0.701);

	// Layer 240
	this.cb33 = new lib.Sprite21();
	this.cb33.setTransform(2288,-32,0.701,0.701);

	// Layer 233
	this.cb32 = new lib.Sprite21();
	this.cb32.setTransform(2288,-110.9,0.701,0.701);

	// Layer 232
	this.title6_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title6_txt.lineHeight = 17;
	this.title6_txt.lineWidth = 194;
	this.title6_txt.setTransform(2280.7,-176.8);

	// Layer 225
	this.cb31 = new lib.Sprite21();
	this.cb31.setTransform(2091,46.9,0.701,0.701);

	// Layer 218
	this.cb30 = new lib.Sprite21();
	this.cb30.setTransform(2091,-32,0.701,0.701);

	// Layer 211
	this.cb29 = new lib.Sprite21();
	this.cb29.setTransform(2091,-110.9,0.701,0.701);

	// Layer 204
	this.cb28 = new lib.Sprite21();
	this.cb28.setTransform(1871,125.9,0.701,0.701);

	// Layer 197
	this.cb27 = new lib.Sprite21();
	this.cb27.setTransform(1871,46.9,0.701,0.701);

	// Layer 190
	this.cb26 = new lib.Sprite21();
	this.cb26.setTransform(1871,-32,0.701,0.701);

	// Layer 183
	this.cb25 = new lib.Sprite21();
	this.cb25.setTransform(1871,-110.9,0.701,0.701);

	// Layer 182
	this.title5_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title5_txt.lineHeight = 17;
	this.title5_txt.lineWidth = 194;
	this.title5_txt.setTransform(1863.8,-176.8);

	// Layer 175
	this.cb24 = new lib.Sprite21();
	this.cb24.setTransform(1650,-32,0.701,0.701);

	// Layer 168
	this.cb23 = new lib.Sprite21();
	this.cb23.setTransform(1650,-110.9,0.701,0.701);

	// Layer 161
	this.cb22 = new lib.Sprite21();
	this.cb22.setTransform(1430,125.9,0.701,0.701);

	// Layer 154
	this.cb21 = new lib.Sprite21();
	this.cb21.setTransform(1430,46.9,0.701,0.701);

	// Layer 147
	this.cb20 = new lib.Sprite21();
	this.cb20.setTransform(1430,-32,0.701,0.701);

	// Layer 140
	this.cb19 = new lib.Sprite21();
	this.cb19.setTransform(1430,-110.9,0.701,0.701);

	// Layer 133
	this.cb18 = new lib.Sprite21();
	this.cb18.setTransform(1160,46.9,0.701,0.701);

	// Layer 126
	this.cb17 = new lib.Sprite21();
	this.cb17.setTransform(1160,-32,0.701,0.701);

	// Layer 119
	this.cb16 = new lib.Sprite21();
	this.cb16.setTransform(1160,-110.9,0.701,0.701);

	// Layer 112
	this.cb15 = new lib.Sprite21();
	this.cb15.setTransform(890,125.9,0.701,0.701);

	// Layer 105
	this.cb14 = new lib.Sprite21();
	this.cb14.setTransform(890,46.9,0.701,0.701);

	// Layer 98
	this.cb13 = new lib.Sprite21();
	this.cb13.setTransform(890,-32,0.701,0.701);

	// Layer 91
	this.cb12 = new lib.Sprite21();
	this.cb12.setTransform(890,-110.9,0.701,0.701);

	// Layer 90
	this.title4_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title4_txt.lineHeight = 17;
	this.title4_txt.lineWidth = 194;
	this.title4_txt.setTransform(1422.8,-176.8);

	// Layer 89
	this.title3_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title3_txt.lineHeight = 17;
	this.title3_txt.lineWidth = 194;
	this.title3_txt.setTransform(879.8,-176.8);

	// Layer 82
	this.cb11 = new lib.Sprite21();
	this.cb11.setTransform(600,125.9,0.701,0.701);

	// Layer 75
	this.cb10 = new lib.Sprite21();
	this.cb10.setTransform(600,46.9,0.701,0.701);

	// Layer 68
	this.cb9 = new lib.Sprite21();
	this.cb9.setTransform(600,-32,0.701,0.701);

	// Layer 61
	this.cb8 = new lib.Sprite21();
	this.cb8.setTransform(600,-110.9,0.701,0.701);

	// Layer 54
	this.cb7 = new lib.Sprite21();
	this.cb7.setTransform(330,125.9,0.701,0.701);

	// Layer 47
	this.cb6 = new lib.Sprite21();
	this.cb6.setTransform(330,46.9,0.701,0.701);

	// Layer 40
	this.cb5 = new lib.Sprite21();
	this.cb5.setTransform(330,-32,0.701,0.701);

	// Layer 33
	this.cb4 = new lib.Sprite21();
	this.cb4.setTransform(330,-110.9,0.701,0.701);

	// Layer 26
	this.cb3 = new lib.Sprite21();
	this.cb3.setTransform(60,125.9,0.701,0.701);

	// Layer 19
	this.cb2 = new lib.Sprite21();
	this.cb2.setTransform(60,46.9,0.701,0.701);

	// Layer 12
	this.cb1 = new lib.Sprite21();
	this.cb1.setTransform(60,-32,0.701,0.701);

	// Layer 5
	this.cb0 = new lib.Sprite21();
	this.cb0.setTransform(60,-110.9,0.701,0.701);

	// Layer 4
	this.title2_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title2_txt.lineHeight = 17;
	this.title2_txt.lineWidth = 194;
	this.title2_txt.setTransform(592.8,-176.8);

	// Layer 3
	this.title1_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title1_txt.lineHeight = 17;
	this.title1_txt.lineWidth = 194;
	this.title1_txt.setTransform(320.3,-176.8);

	// Layer 2
	this.title0_txt = new cjs.Text("", "15px Lucida Sans Unicode", "#993300");
	this.title0_txt.lineHeight = 17;
	this.title0_txt.lineWidth = 194;
	this.title0_txt.setTransform(49.8,-176.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE3BB").s().p("AAAcVMkGGAAAMAAAg4pMEGGAAAMEGHAAAMAAAA4pg");
	this.shape_1.setTransform(1678,0);

	this.addChild(this.shape_1,this.title0_txt,this.title1_txt,this.title2_txt,this.cb0,this.cb1,this.cb2,this.cb3,this.cb4,this.cb5,this.cb6,this.cb7,this.cb8,this.cb9,this.cb10,this.cb11,this.title3_txt,this.title4_txt,this.cb12,this.cb13,this.cb14,this.cb15,this.cb16,this.cb17,this.cb18,this.cb19,this.cb20,this.cb21,this.cb22,this.cb23,this.cb24,this.title5_txt,this.cb25,this.cb26,this.cb27,this.cb28,this.cb29,this.cb30,this.cb31,this.title6_txt,this.cb32,this.cb33,this.cb34,this.cb35,this.cb36,this.cb37,this.cb38,this.title7_txt,this.cb39,this.cb40,this.title8_txt,this.cb41,this.cb42,this.cb43,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-183.2,3355.2,371.2);


(lib.Sprite27 = function() {
	this.initialize();

	// Layer 20
	this.instance = new lib.Sprite26();
	this.instance.setTransform(2,-16.4);
	this.instance.alpha = 0.102;

	// Layer 3
	this.bgEffect = new lib.Sprite24();
	this.bgEffect.setTransform(354.3,333.1,1,1,0,0,180);
	this.bgEffect.alpha = 0.199;

	// Layer 2
	this.instance_1 = new lib.Shape22("single",0);

	this.addChild(this.instance_1,this.bgEffect,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-750.8,-742.2,2190.3,2158.4);


(lib.Sprite77 = function() {
	this.initialize();

	// Layer 31
	this.n4 = new lib.Sprite72();
	this.n4.setTransform(-156.6,-300);

	// Layer 26
	this.n3 = new lib.Sprite72();
	this.n3.setTransform(-156.6,-257);

	// Layer 21
	this.n2 = new lib.Sprite72();
	this.n2.setTransform(-156.6,-196);

	// Layer 16
	this.n0 = new lib.Sprite72();
	this.n0.setTransform(-156.6,-204);

	// Layer 11
	this.n1 = new lib.Sprite72();
	this.n1.setTransform(-156.6,-156.9);

	// Layer 9
	this.instance = new lib.Sprite65();
	this.instance.setTransform(-12.5,210,1.196,1);
	this.instance.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 7
	this.instance_1 = new lib.Sprite65();
	this.instance_1.setTransform(-12.5,180,1.196,1);
	this.instance_1.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 5
	this.instance_2 = new lib.Sprite65();
	this.instance_2.setTransform(-12.5,150,1.196,1);
	this.instance_2.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 3
	this.instance_3 = new lib.Sprite65();
	this.instance_3.setTransform(-12.5,120,1.196,1);
	this.instance_3.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 1
	this.instance_4 = new lib.Sprite65();
	this.instance_4.setTransform(-12.5,91,1.196,1);
	this.instance_4.shadow = new cjs.Shadow("#000000",4,4,5);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.n1,this.n0,this.n2,this.n3,this.n4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-365,-315,228.5,567.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
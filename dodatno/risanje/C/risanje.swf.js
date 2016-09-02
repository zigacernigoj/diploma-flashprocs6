(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.risanjeswf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sprite70();
	this.instance.setTransform(-0.6,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-709.7,-469.9,2190.3,2158.4);


// symbols:
(lib.Image66 = function() {
	this.initialize(img.Image66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,592,486);


(lib.Sprite69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Image66).s().p("Egl9Al+MAAAhL7MBL7AAAMAAABL7g");
	this.shape.setTransform(243,243);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egl9Al+MAAAhL7MBL7AAAMAAABL7g");
	this.shape_1.setTransform(243,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486,486);


(lib.Sprite65 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AglAmQgRgPABgXQgBgWARgPQAPgRAWABQAXgBAPARQARAPgBAWQABAXgRAPQgPARgXgBQgWABgPgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.4,11,11);


(lib.Sprite62 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("AuYDOQguAAgWgXQgXgVABguIAAjoQgBgtAXgVQAWgYAuAAIcxAAQAuAAAWAYQAXAVgBAtIAADoQABAugXAVQgWAXguAAg");

	// Layer 2
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#873601");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 25;
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


(lib.Shape54 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg/9AMTMB/7AAAEg/9AN8MB/7AAAEg/9APlMB/7AAAEg/9AROMB/7AAAEg/9AS3MB/7AAAEg/9AUgMB/7AAAEg/9AWJMB/7AAAEg/9AXyMB/7AAAEg/9AZbMB/7AAAEg/9AoMMB/7AAAEg/9AmjMB/7AAAEg/9Ak6MB/7AAAEg/9AjRMB/7AAAEg/9AhoMB/7AAAEg/9Af/MB/7AAAEg/9AeWMB/7AAAEg/9ActMB/7AAAEg/9AbEMB/7AAAEg/9AuwMB/7AAAEg/9AtHMB/7AAAEg/9AreMB/7AAAEg/9Ap1MB/7AAAEg/9AKqMB/7AAAEg/9AJBMB/7AAAEg/9AHYMB/7AAAEg/9AFvMB/7AAAEg/9AEGMB/7AAAEg/9ACdMB/7AAAEg/9AA0MB/7AAAEg/9gRNMB/7AAAEg/9gPkMB/7AAAEg/9gN7MB/7AAAEg/9gMSMB/7AAAEg/9gKpMB/7AAAEg/9gJAMB/7AAAEg/9gHXMB/7AAAEg/9gFuMB/7AAAEg/9gEFMB/7AAAEg/9gAzMB/7AAAEg/9gCcMB/7AAAEg/9gf+MB/7AAAEg/9geVMB/7AAAEg/9gcsMB/7AAAEg/9gbDMB/7AAAEg/9gZaMB/7AAAEg/9gXxMB/7AAAEg/9gWIMB/7AAAEg/9gUfMB/7AAAEg/9gS2MB/7AAAEg/9ghnMB/7AAAEg/9gjQMB/7AAAEg/9gk5MB/7AAAEg/9gmiMB/7AAAEg/9goLMB/7AAAEg/9gp0MB/7AAAEg/9grdMB/7AAAEg/9gtGMB/7AAAEg/9guvMB/7AAA");
	this.shape.setTransform(0,-5.2);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg/9AMTMB/7AAAEg/9AN8MB/7AAAEg/9APlMB/7AAAEg/9AROMB/7AAAEg/9AS3MB/7AAAEg/9AUgMB/7AAAEg/9AWJMB/7AAAEg/9AXyMB/7AAAEg/9AZbMB/7AAAEg/9AoMMB/7AAAEg/9AmjMB/7AAAEg/9Ak6MB/7AAAEg/9AjRMB/7AAAEg/9AhoMB/7AAAEg/9Af/MB/7AAAEg/9AeWMB/7AAAEg/9ActMB/7AAAEg/9AbEMB/7AAAEg/9AuwMB/7AAAEg/9AtHMB/7AAAEg/9AreMB/7AAAEg/9Ap1MB/7AAAEg/9AKqMB/7AAAEg/9AJBMB/7AAAEg/9AHYMB/7AAAEg/9AFvMB/7AAAEg/9AEGMB/7AAAEg/9ACdMB/7AAAEg/9AA0MB/7AAAEg/9gRNMB/7AAAEg/9gPkMB/7AAAEg/9gN7MB/7AAAEg/9gMSMB/7AAAEg/9gKpMB/7AAAEg/9gJAMB/7AAAEg/9gHXMB/7AAAEg/9gFuMB/7AAAEg/9gEFMB/7AAAEg/9gAzMB/7AAAEg/9gCcMB/7AAAEg/9gf+MB/7AAAEg/9geVMB/7AAAEg/9gcsMB/7AAAEg/9gbDMB/7AAAEg/9gZaMB/7AAAEg/9gXxMB/7AAAEg/9gWIMB/7AAAEg/9gUfMB/7AAAEg/9gS2MB/7AAAEg/9ghnMB/7AAAEg/9gjQMB/7AAAEg/9gk5MB/7AAAEg/9gmiMB/7AAAEg/9goLMB/7AAAEg/9gp0MB/7AAAEg/9grdMB/7AAAEg/9gtGMB/7AAAEg/9guvMB/7AAA");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-409.4,-304.4,818.9,603.8);


(lib.Shape52 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnmBJlMBPNieKMgzoCpLg");
	this.shape.setTransform(-253.5,541.5);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egp9hUJMBT7CcgI7QLzg");
	this.shape_1.setTransform(268.8,538.8);

	// Shape Sublayer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAK1hMAIbTLsMhMPCMVg");
	this.shape_2.setTransform(244.2,-486.6);

	// Shape Sublayer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Egl/hCBIbarcMAwlCa7g");
	this.shape_3.setTransform(-243.1,-495.8);

	// Shape Sublayer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhUwgJVIKQ73MCfRBKag");
	this.shape_4.setTransform(-542.5,-238.2);

	// Shape Sublayer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhTYgiiMCmxAo8IpkcJg");
	this.shape_5.setTransform(533.8,221.2);

	// Shape Sublayer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhQwAI+MChhgtrMiW8BJbg");
	this.shape_6.setTransform(-517,235.1);

	// Shape Sublayer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EBHxgm8ILDbkMilnAyVMCakhN5g");
	this.shape_7.setTransform(530.1,-249.4);

	// Shape Sublayer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EAohg9iIVCVBMh7FBmEg");
	this.shape_8.setTransform(394,-394);

	// Shape Sublayer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EhWUAAAMCspgO2IAAdtg");
	this.shape_9.setTransform(552.7,0);

	// Shape Sublayer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EhD5hD5MCHzByxI1CVCg");
	this.shape_10.setTransform(434.7,434.7);

	// Shape Sublayer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgO2BUYMAO2iovMAO3Covg");
	this.shape_11.setTransform(0,540.2);

	// Shape Sublayer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhFGAwGMCKNh1NMh1MCKOg");
	this.shape_12.setTransform(-442.4,442.5);

	// Shape Sublayer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhRfgO2MCi/AO2Mii/AO3g");
	this.shape_13.setTransform(-521.6,0);

	// Shape Sublayer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhDWguUIVC1BMBxrCGsg");
	this.shape_14.setTransform(-431,-431.1);

	// Shape Sublayer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgO2hT+IdtAAMgO3Cn9g");
	this.shape_15.setTransform(0,-537.7);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1085,-1075.3,2190.3,2158.4);


(lib.Sprite55 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape54("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-409.4,-304.4,818.9,603.8);


(lib.Sprite53 = function() {
	this.initialize();

	// Layer 16
	this.instance = new lib.Shape52("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1085,-1075.3,2190.3,2158.4);


(lib.Sprite56 = function() {
	this.initialize();

	// Layer 19
	this.instance = new lib.Sprite55();
	this.instance.setTransform(2,-16.4);
	this.instance.alpha = 0.102;

	// Layer 2
	this.bg2Effect = new lib.Sprite53();
	this.bg2Effect.setTransform(-4.6,298.1,1,1,180);
	this.bg2Effect.alpha = 0.199;

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2D7AB").s().p("Eg+sAvVMAAAhepMB9ZAAAMAAABepg");
	this.shape.setTransform(0.3,-16.9);

	this.addChild(this.shape,this.bg2Effect,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1109.8,-784.9,2190.3,2158.4);


(lib.Sprite57 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sprite56();
	this.instance.setTransform(-24.2,-2.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1134.1,-787.7,2190.3,2158.4);


(lib.Sprite70 = function() {
	this.initialize();

	// Layer 18
	this.txtur_mc = new lib.Sprite69();
	this.txtur_mc.setTransform(281,43);

	// Layer 16
	this.pointer_mc = new lib.Sprite65();
	this.pointer_mc.setTransform(-29.1,-45.2,0.091,0.091);

	// Layer 15
	this.title_txt = new cjs.Text("\n\n", "16px Tw Cen MT", "#333333");
	this.title_txt.lineHeight = 16;
	this.title_txt.lineWidth = 187;
	this.title_txt.setTransform(50,68.4);

	// Layer 11
	this.show_btn = new lib.Sprite62();
	this.show_btn.setTransform(146.1,447.3);

	// Layer 7
	this.play_btn = new lib.Sprite62();
	this.play_btn.setTransform(146.1,385.7);

	// Layer 3
	this.clear_btn = new lib.Sprite62();
	this.clear_btn.setTransform(146.1,324.2);

	// Layer 1
	this.instance = new lib.Sprite57();
	this.instance.setTransform(425,317);

	this.addChild(this.instance,this.clear_btn,this.play_btn,this.show_btn,this.title_txt,this.pointer_mc,this.txtur_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-709.1,-470.7,2190.3,2158.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
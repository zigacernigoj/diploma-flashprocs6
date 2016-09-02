(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.interval_engineswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:1,settings:2,qval:3,game:4});

	// Layer 149
	this.text = new cjs.Text("VSE MOŽNOSTI", "18px Arial", "#E37302");
	this.text.lineHeight = 20;
	this.text.lineWidth = 149;
	this.text.setTransform(593.1,333.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},2).to({state:[]},1).wait(3));

	// Layer 148
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#DADADA"],[0,1],0.1,-22.1,0.1,25.8).s().p("AbmD4IgpgFQgTgFgPgHIgPgLIgMgMIgFgJIgDgEIgwhjIgRgkIgPgfIgMgXIgDgHIgCgKIgDgJIgBgLQAAgNAJgPQAJgPATgOQANgJAOgEIAngDQAYAAASAOQATAPAOAjIAlBUIABAAIAmhUQAPgiASgPQAUgOAYAAIAoADQAPAEANAJQAUAMAFAQIAHAcIAAALIgCAKIgDAJIgyBhIgSAkIgQAgIgLAWIgGAJIgCAEIgGAJIgLAMIgQALQgNAHgUAFIgqAFgADND4IgpgFQgTgFgOgHIgQgLIgLgMIgGgJIgCgEIgwhjIgRgkIgQgfIgLgXIgEgHIAAgKIgCgJIgBgLQAAgNAHgPQAIgPAUgOQANgJAOgEIAmgDQAZAAASAOQASAPAOAjIAmBUIABAAIAlhUQAQgiASgPQATgOAZAAIAnADQAPAEANAJQAVAMAFAQIAHAcIAAALIgDAKIgDAJIgxBhIgSAkIgQAgIgMAWIgFAJIgCAEIgHAJIgKAMIgQALIgiAMIgpAFgArQDrQgogNgcgWQgcgYgQggQgRghABgpQgBgmAQgfQAOgdAagXQAbgXAjgMQAkgNApgBQAlAAAhALQAgALAaAUQAZAUARAdQARAcAFAmIAAAFIgBAKIgHALIgNAJIgYADIibAAQAGAgAYAOQAXAPAnAAIAaAAIAWgGIAHgCIAIgCIAIgBQAHAAAHAEQAGAFAAAOIgEAQIgIAQIgRARQgbAUgfAFIhEAGQguAAgogNgAqHAAQgNAOAAAXIBYAAQAAgZgNgMQgNgOgTAAQgRAAgNAOgAx+DPQgvgoAAhbIAAh5IgOAAIgZgCQgKgCAAgMQAAgFADgFIAKgJIANgLIA7gsIA8guIA/gxIAJgHQAKgGAJAAQAJAAAHAIQAGAIAAAYIAABFIAqAAIAKABQAIABAIAEIANANQAFAJABAPQgBARgFAJIgNAOQgIAEgIABIgKABIgqAAIAAB5IAAAQQABAIADAGQACAGAGAEQAGAEAKAAIAZAAIAGgBIAEABQALACAGAHQAIAGACAIIAEAPIABAKIAAADQAAASgHAMQgHALgJAIQgLAIgMAFIgRAGIgXAEIgVAEIgOABQhagBgugogAPpD3QgpAAgVgOQgWgOgKgQQgMgTAAgZIAAk4IACgUQACgPALgPQALgRAVgMQAVgMAmAAQAlAAAVALQAVALALAOQALAPACAPIADAXIAAE3IgBAUQgCAPgJAPQgJARgWALQgVANgoAAgA+RDtQgWgJgLgOQgKgNgCgOIgDgUIAAi5QAAgdAOgRQAPgQATgIQATgIASgCIAVgCIABAAQAkAAAWALQAUALAKANQALANADANIABARIAAC9IgBATQgDAOgLANQgJAOgVAKQgVAKglAAQgmAAgVgKgATvDqQgkgNgagVQgbgXgPggQgOggAAgpQAAgoAOggQAOgeAagYQAagXAjgNQAkgNAqAAQArAAAlANQAjANAaAXQAYAYAPAeQAOAgAAAoQAAAngOAfQgPAggYAXQgaAXgjANQglANgrABQgpAAgigNgAUYAhQgNAQAAAXQAAAXANARQAOAQAUAAQATAAAOgQQAOgRAAgXQAAgXgOgQQgOgRgTAAQgUAAgOARgAlzDsQgWgKgLgNQgJgOgDgOIgDgUIAAi6QAAgeAQgQQAQgRASgHQAVgIAcgBQAkAAAUALQAUALALAOQAMARAEATIAAAHQAPgnAbgVQAbgTAeAAQATAAAQAGQAQAHALAMQALAMAGAQQAHAQAAASQAAAkgYAYQgYAXgmAAQgXABgRgKQgRgIgQgRQgNAKgGAXQgHAXAAAfIAAArIgCAUQgDAOgKANQgJANgUAKQgTALgiAAQglAAgUgLgALnD2QghAAgTgIQgSgHgJgJQgLgLgCgMQgLAWgWAMQgWANgkAAQg1AAgYgbQgZgaAAgtQABgVAJgTQAKgSARgNQASgNAXgHQAZgHAcAAIAeABIAgAHQAAgagTgPQgUgPghAAIgZACIgYAGIgKADIgJABIgOgDIgKgIIgIgKQgDgIgBgLQABgPAHgLQAIgJAKgIQALgIAOgFQAagKAegHIBFgEIBRAIQAkAIAaASQAaASAOAeQAPAcAAArIAAB2QAAAcgOAPQgNAQgRAHQgSAIgRACIgYACgAJdBpQgKALAAAPQAAAPAKAKQAKAJANABQAOgBAKgJQAKgKAAgPQAAgPgKgLQgKgKgOAAQgNAAgKAKgA2IDsQgSgKgIgNQgJgOgBgNIgDgSIAAheIgBgKQgBgIgDgHQgEgIgHgGQgIgFgOAAIgUADQgIAFgDAGQgFAHgBAHIgBAMIAABfQABAdgOARQgOAQgRAHQgRAIgPACIgUACIgCAAQgmAAgUgNQgUgMgLgOQgKgQgCgVIAAjAIACgUQADgNAKgNQAKgNAUgKQAVgLAjABQAkgBATALQAUALAKAOQAMARABAUIAAgGIAdgVQAOgJAQgJQAQgJASgHIAOgDIAlgEIAdADQAPACAPAHQAPAIANAMQAKALAJATQAJATACAZIAACbIgCASQgCANgKAOQgKAOgUALQgTAMgkAAQgegBgRgJgA90h8QgOgFgMgIQgKgKgHgLQgGgMAAgNQAAgNAGgMQAHgMAKgIQAMgIAOgGQAOgGAQABQAQgBAPAGQAOAGALAIQAKAIAHAMQAFAMAAANQAAANgFAMQgHALgKAKQgLAIgOAFIgfAFg");
	this.shape.setTransform(258.6,93.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#DADADA"],[0,1],0,-21.1,0,22.8).s().p("A0CD4IgpgEQgUgFgNgIIgRgMIgKgLIgHgJIgCgEIgvhiIgSglIgPggIgLgWIgFgHIgCgKIgBgKIgBgLQAAgMAIgPQAJgPATgNIAbgPIAngCQAYAAATAPQARAOAOAjIAmBUIACAAIAlhUQAPgjATgOQASgPAZAAIAoAEQAPAEANAJQAUAMAGAQIAGAbIAAAMIgCAKIgDAJIgxBhIgTAkIgQAfIgMAYIgEAIIgCAEIgHAJIgLALIgQAMIghANIgqAEgAHqDtQgWgKgKgNQgLgNgCgOIgCgVIAAi3QgBgeAPgQQAOgRAUgIQATgIARgCIAWgBIABAAQAkgBAVALQAUAKALANQAKAOADAMIACARIAAC9IgCAUQgDANgKAOQgKAOgVAJQgUALglAAQgnAAgVgKgAM4DrQgkgNgcgVQgbgWgRgfQgRgegCglIAAgUQACglARgcQARgdAbgWQAcgWAkgLQAmgNArAAQAkAAAeAIQAcAHAcASQASANAGANQAGANgBAJIAAAKIgCAEQgBAIgHAIIgMAMQgIAGgPAAIgagGIgOgFIgPgEIgSgBIgUACQgKAEgIAHQgIAGgDAHIgGAPQgDAIAAAJIACAQQABAIAFAIIALAPQAJAIALACIAVADIARgCIAPgCIANgFIAPgEIANgBQAOAAAJAFIALAMIAHAQIABAFIABAIQAAAKgFAOQgGAOgSANQgcASgcAIIhCAHQgrABgmgMgAVsD1QgiAAgSgHQgSgHgJgKQgLgJgCgNQgKAWgXANQgWAMgkgBQg1ABgYgbQgZgaAAgtQAAgVALgTQAJgSASgNQAQgNAYgHQAZgIAcAAIAeACIAgAGQAAgZgTgPQgUgPghAAIgZACIgYAGIgKADIgJABIgOgEIgKgIIgIgIQgEgKAAgKQABgPAHgKQAIgLAKgHQALgHAOgFQAagMAegFIBFgGIBRAIQAkAJAaASQAaATAOAdQAOAcABArIAAB2QgBAcgNAPQgNAQgRAIQgSAHgRACIgYABgATiBqQgKAKAAAPQAAAOAKAKQAJALAOgBQAOABAKgLQAKgKAAgOQAAgPgKgKQgKgLgOAAQgOAAgJALgAD8DrQgSgKgIgNQgJgMgBgNIgDgTIAAheIgBgKQgBgIgDgHQgEgIgHgFQgIgHgOAAIgUAFQgIAEgDAHQgFAGgBAHIgBAMIAABeQABAdgOARQgOARgRAIIggAJIgUABIgCAAQgmABgSgMQgUgMgLgOQgKgRgCgVIAAjBIACgTQADgOAKgNQAKgNAUgKQATgJAjgBQAkAAATAMQAUAKAKAOQAMARABATIAAgFIAdgVQAOgKAQgJQAQgIASgGIAOgFIAlgDIAdACQAPADAPAHQAPAHANANQAKAMAJASQAJATACAZIAACaIgCASQgCAOgKAOQgKAOgUAMQgTALgkgBQgeABgRgLgAkKDsQgTgIgKgKQgMgMgEgPQgPAUgRAKQgSAKgQAGIgeAIIgUAAIgKAAIgTgBIgegIQgSgFgRgMQgSgLgPgTQgPgTgKgcQgJgcAAgoQAAg0AOgiQAOgjAVgWQAWgVAbgLQAbgJAagBIAMAAIApAFIAhAKQAQAIAMAJIADhIQACggANgSQAOgTAQgIQASgJARgCIAYgCIAEAAQAlAAAVALQAVAKAKAPQALAOACAOIADAUIAAE4IgDAXQgCAPgLAPQgKAPgVAMQgVALglgBQgiABgUgKgAmIASQgPASAAAaQAAAZAPATQAQASAXAAQAWAAAQgSQAPgTAAgZQAAgagPgSQgQgSgWAAQgXAAgQASgAroD1QgiAAgTgHQgRgHgKgKQgLgJgBgNQgLAWgWANQgWAMglgBQg0ABgZgbQgYgaAAgtQAAgVAKgTQAKgSARgNQARgNAYgHQAYgIAcAAIAfACIAgAGQgBgZgTgPQgTgPghAAIgZACIgZAGIgKADIgIABIgPgEQgGgEgEgEIgHgIQgEgKAAgKQAAgPAIgKQAHgLAKgHQAMgHANgFQAbgMAdgFIBGgGIBRAIQAjAJAbASQAZATAPAdQAOAcAAArIAAB2QAAAcgNAPQgNAQgSAIIgiAJIgYABgAtyBqQgLAKAAAPQAAAOALAKQAJALAOgBQAOABAKgLQAKgKAAgOQAAgPgKgKQgKgLgOAAQgOAAgJALgAIIh8QgPgFgLgJQgLgIgGgNQgGgMgBgNQABgMAGgLQAGgNALgIQALgIAPgGQAOgFAQgBQAQABAOAFQAPAGAKAIQAKAIAHANQAGALAAAMQAAANgGAMQgHANgKAIQgKAJgPAFIgeAFg");
	this.shape_1.setTransform(337.3,34.5);

	this.text_1 = new cjs.Text("DIATONIČNI IN KROMATIČNI Z ENIM PREDZNAKOM", "18px Arial", "#E37302");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 196;
	this.text_1.setTransform(593.1,233.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.text_1}]},1).to({state:[]},1).wait(3));

	// Layer 147
	this.dir_txt = new cjs.Text("", "22px Arial", "#984A00");
	this.dir_txt.lineHeight = 26;
	this.dir_txt.lineWidth = 656;
	this.dir_txt.setTransform(72.2,237.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dir_txt,p:{x:72.2,y:237.1,text:"",font:"22px Arial",color:"#984A00",textAlign:"justify",lineHeight:26,lineWidth:656}}]},1).to({state:[{t:this.dir_txt,p:{x:593.1,y:174.3,text:"DIATONIČNI ",font:"18px Arial",color:"#E37302",textAlign:"",lineHeight:20,lineWidth:149}}]},1).to({state:[]},1).wait(3));

	// Layer 146
	this.title_txt = new cjs.Text("nastavitve", "60px Arial", "#FFFFFF");
	this.title_txt.lineHeight = 62;
	this.title_txt.lineWidth = 460;
	this.title_txt.setTransform(59,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.title_txt}]},2).to({state:[]},1).wait(3));

	// Layer 145
	this.s2 = new lib.Sprite82();
	this.s2.setTransform(82.7,486.2,0.555,0.555,-14.9);

	this.warning_txt = new cjs.Text("", "20px Lucida Sans Unicode", "#CC0000");
	this.warning_txt.textAlign = "center";
	this.warning_txt.lineHeight = 22;
	this.warning_txt.lineWidth = 192;
	this.warning_txt.setTransform(409.1,119.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.s2}]},1).to({state:[{t:this.warning_txt}]},1).to({state:[]},1).wait(3));

	// Layer 143
	this.s1 = new lib.Sprite82();
	this.s1.setTransform(524.4,218.1,0.625,0.625,-14.9);
	this.s1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1).to({_off:false},0).wait(1).to({x:657.8,y:50.2},0).to({_off:true},1).wait(3));

	// Layer 141
	this.s0 = new lib.Sprite82();
	this.s0.setTransform(29.3,38.2,1.049,1.049,30);
	this.s0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s0).wait(1).to({_off:false},0).wait(1).to({x:425.3,y:498.4},0).to({_off:true},1).wait(3));

	// Layer 136
	this.fw3_btn = new lib.Sprite78();
	this.fw3_btn.setTransform(514.6,496.8);
	this.fw3_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);
	this.fw3_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fw3_btn).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 134
	this.cb9 = new lib.Sprite65();
	this.cb9.setTransform(179.6,503.7);
	this.cb9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb9).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 131
	this.back3_btn = new lib.Sprite78();
	this.back3_btn.setTransform(284.6,496.8);
	this.back3_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);
	this.back3_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back3_btn).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 127
	this.cb8 = new lib.Sprite65();
	this.cb8.setTransform(179.6,466.6);
	this.cb8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb8).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 124
	this.cb24 = new lib.Sprite65();
	this.cb24.setTransform(679,266.4);
	this.cb24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb24).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 120
	this.cb7 = new lib.Sprite65();
	this.cb7.setTransform(179.6,429.5);
	this.cb7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb7).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 117
	this.cb23 = new lib.Sprite65();
	this.cb23.setTransform(679,229.3);
	this.cb23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb23).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 113
	this.cb6 = new lib.Sprite65();
	this.cb6.setTransform(179.6,392.4);
	this.cb6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb6).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 110
	this.cb22 = new lib.Sprite65();
	this.cb22.setTransform(679,192.2);
	this.cb22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb22).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 106
	this.cb5 = new lib.Sprite65();
	this.cb5.setTransform(179.6,355.3);
	this.cb5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb5).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 103
	this.cb21 = new lib.Sprite65();
	this.cb21.setTransform(679,155.1);
	this.cb21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb21).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 99
	this.cb4 = new lib.Sprite65();
	this.cb4.setTransform(179.6,318.2);
	this.cb4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb4).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 96
	this.cb20 = new lib.Sprite65();
	this.cb20.setTransform(509,266.4);
	this.cb20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb20).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 95
	this.back_btn = new lib.Sprite109();
	this.back_btn.setTransform(673.7,469.9);
	this.back_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);
	this.back_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back_btn).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 91
	this.fw_btn = new lib.Sprite106();
	this.fw_btn.setTransform(673.7,539);
	this.fw_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);
	this.fw_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fw_btn).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 89
	this.cb19 = new lib.Sprite65();
	this.cb19.setTransform(509,229.3);
	this.cb19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb19).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 86
	this.tenor_btn = new lib.Sprite103();
	this.tenor_btn.setTransform(49.3,424);
	this.tenor_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.tenor_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tenor_btn).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 82
	this.cb18 = new lib.Sprite65();
	this.cb18.setTransform(509,192.2);
	this.cb18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb18).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 81
	this.soprano_btn = new lib.Sprite101();
	this.soprano_btn.setTransform(48.3,505.9);
	this.soprano_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.soprano_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.soprano_btn).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 75
	this.alto_btn = new lib.Sprite99();
	this.alto_btn.setTransform(50.3,346.1);
	this.alto_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.cb17 = new lib.Sprite65();
	this.cb17.setTransform(509,155.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.alto_btn}]},2).to({state:[{t:this.cb17}]},1).to({state:[]},1).wait(2));

	// Layer 74
	this.instance = new lib.Glyph5("single",0);
	this.instance.setTransform(741.1,81.3,0.391,0.391);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Glyph8("single",0);
	this.instance_1.setTransform(734.9,81.3,0.391,0.391);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Glyph12("single",0);
	this.instance_2.setTransform(720.1,81.3,0.391,0.391);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Glyph2("single",0);
	this.instance_3.setTransform(706.3,81.3,0.391,0.391);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Glyph8("single",0);
	this.instance_4.setTransform(700.1,81.3,0.391,0.391);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Glyph2("single",0);
	this.instance_5.setTransform(686.3,81.3,0.391,0.391);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Glyph14("single",0);
	this.instance_6.setTransform(673.6,81.3,0.391,0.391);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Glyph16("single",0);
	this.instance_7.setTransform(661,81.3,0.391,0.391);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).to({state:[]},1).wait(2));

	// Layer 73
	this.instance_8 = new lib.Glyph16("single",0);
	this.instance_8.setTransform(563,81.3,0.391,0.391);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Glyph15("single",0);
	this.instance_9.setTransform(552.3,81.3,0.391,0.391);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Glyph13("single",0);
	this.instance_10.setTransform(536.7,81.3,0.391,0.391);
	this.instance_10.alpha = 0;

	this.instance_11 = new lib.Glyph14("single",0);
	this.instance_11.setTransform(524.1,81.3,0.391,0.391);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Glyph16("single",0);
	this.instance_12.setTransform(511.4,81.3,0.391,0.391);
	this.instance_12.alpha = 0;

	this.instance_13 = new lib.Glyph7("single",0);
	this.instance_13.setTransform(505.7,81.3,0.391,0.391);
	this.instance_13.alpha = 0;

	this.instance_14 = new lib.Glyph6("single",0);
	this.instance_14.setTransform(491,81.3,0.391,0.391);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},3).to({state:[]},1).wait(2));

	// Layer 71
	this.play2_btn = new lib.Sprite146();
	this.play2_btn.setTransform(725.2,37.6);
	this.play2_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.play2_btn).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 70
	this.bass_btn = new lib.Sprite97();
	this.bass_btn.setTransform(48.3,267.2);
	this.bass_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.bass_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bass_btn).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 66
	this.cb16 = new lib.Sprite65();
	this.cb16.setTransform(308.9,192.2);
	this.cb16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb16).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 65
	this.treble_btn = new lib.Sprite95();
	this.treble_btn.setTransform(51.3,187.3);
	this.treble_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.treble_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.treble_btn).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 63
	this.oneup_btn = new lib.Sprite143();
	this.oneup_btn.setTransform(624.2,37.6);
	this.oneup_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.oneup_btn).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 60
	this.k2 = new lib.Sprite93();
	this.k2.setTransform(565.5,350.6);
	this.k2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.k2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k2).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 59
	this.cb15 = new lib.Sprite65();
	this.cb15.setTransform(308.9,155.1);

	this.back_btn_1 = new lib.Sprite109();
	this.back_btn_1.setTransform(400.5,559);
	this.back_btn_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cb15}]},3).to({state:[{t:this.back_btn_1}]},1).to({state:[]},1).wait(1));

	// Layer 58
	this.instance_15 = new lib.Glyph5("single",0);
	this.instance_15.setTransform(422.4,81.3,0.391,0.391);
	this.instance_15.alpha = 0;

	this.instance_16 = new lib.Glyph8("single",0);
	this.instance_16.setTransform(416.2,81.3,0.391,0.391);
	this.instance_16.alpha = 0;

	this.instance_17 = new lib.Glyph2("single",0);
	this.instance_17.setTransform(402.4,81.3,0.391,0.391);
	this.instance_17.alpha = 0;

	this.instance_18 = new lib.Glyph17("single",0);
	this.instance_18.setTransform(389.3,81.3,0.391,0.391);
	this.instance_18.alpha = 0;

	this.instance_19 = new lib.Glyph12("single",0);
	this.instance_19.setTransform(368.1,81.3,0.391,0.391);
	this.instance_19.alpha = 0;

	this.instance_20 = new lib.Glyph7("single",0);
	this.instance_20.setTransform(362.4,81.3,0.391,0.391);
	this.instance_20.alpha = 0;

	this.instance_21 = new lib.Glyph19("single",0);
	this.instance_21.setTransform(348.5,81.3,0.391,0.391);
	this.instance_21.alpha = 0;

	this.instance_22 = new lib.Glyph2("single",0);
	this.instance_22.setTransform(334.7,81.3,0.391,0.391);
	this.instance_22.alpha = 0;

	this.instance_23 = new lib.Glyph12("single",0);
	this.instance_23.setTransform(319.9,81.3,0.391,0.391);
	this.instance_23.alpha = 0;

	this.instance_24 = new lib.Glyph7("single",0);
	this.instance_24.setTransform(307.8,81.3,0.391,0.391);
	this.instance_24.alpha = 0;

	this.instance_25 = new lib.Glyph14("single",0);
	this.instance_25.setTransform(295.2,81.3,0.391,0.391);
	this.instance_25.alpha = 0;

	this.instance_26 = new lib.Glyph5("single",0);
	this.instance_26.setTransform(284.3,81.3,0.391,0.391);
	this.instance_26.alpha = 0;

	this.instance_27 = new lib.Glyph3("single",0);
	this.instance_27.setTransform(272.8,81.3,0.391,0.391);
	this.instance_27.alpha = 0;

	this.instance_28 = new lib.Glyph18("single",0);
	this.instance_28.setTransform(260.7,81.3,0.391,0.391);
	this.instance_28.alpha = 0;

	this.instance_29 = new lib.Glyph7("single",0);
	this.instance_29.setTransform(255,81.3,0.391,0.391);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},3).to({state:[]},1).wait(2));

	// Layer 57
	this.instance_30 = new lib.Glyph17("single",0);
	this.instance_30.setTransform(178.8,114.3,0.391,0.391);
	this.instance_30.alpha = 0;

	this.instance_31 = new lib.Glyph13("single",0);
	this.instance_31.setTransform(163.3,114.3,0.391,0.391);
	this.instance_31.alpha = 0;

	this.instance_32 = new lib.Glyph10("single",0);
	this.instance_32.setTransform(152.6,114.3,0.391,0.391);
	this.instance_32.alpha = 0;

	this.instance_33 = new lib.Glyph2("single",0);
	this.instance_33.setTransform(138.8,114.3,0.391,0.391);
	this.instance_33.alpha = 0;

	this.instance_34 = new lib.Glyph17("single",0);
	this.instance_34.setTransform(125.7,114.3,0.391,0.391);
	this.instance_34.alpha = 0;

	this.instance_35 = new lib.Glyph14("single",0);
	this.instance_35.setTransform(113.1,114.3,0.391,0.391);
	this.instance_35.alpha = 0;

	this.instance_36 = new lib.Glyph5("single",0);
	this.instance_36.setTransform(102.2,114.3,0.391,0.391);
	this.instance_36.alpha = 0;

	this.instance_37 = new lib.Glyph16("single",0);
	this.instance_37.setTransform(89.6,114.3,0.391,0.391);
	this.instance_37.alpha = 0;

	this.instance_38 = new lib.Glyph12("single",0);
	this.instance_38.setTransform(74.8,114.3,0.391,0.391);
	this.instance_38.alpha = 0;

	this.instance_39 = new lib.Glyph7("single",0);
	this.instance_39.setTransform(69,114.3,0.391,0.391);
	this.instance_39.alpha = 0;

	this.instance_40 = new lib.Glyph13("single",0);
	this.instance_40.setTransform(202.5,81.3,0.391,0.391);
	this.instance_40.alpha = 0;

	this.instance_41 = new lib.Glyph16("single",0);
	this.instance_41.setTransform(189.8,81.3,0.391,0.391);
	this.instance_41.alpha = 0;

	this.instance_42 = new lib.Glyph5("single",0);
	this.instance_42.setTransform(179,81.3,0.391,0.391);
	this.instance_42.alpha = 0;

	this.instance_43 = new lib.Glyph16("single",0);
	this.instance_43.setTransform(166.3,81.3,0.391,0.391);
	this.instance_43.alpha = 0;

	this.instance_44 = new lib.Glyph7("single",0);
	this.instance_44.setTransform(160.6,81.3,0.391,0.391);
	this.instance_44.alpha = 0;

	this.instance_45 = new lib.Glyph10("single",0);
	this.instance_45.setTransform(149.9,81.3,0.391,0.391);
	this.instance_45.alpha = 0;

	this.instance_46 = new lib.Glyph2("single",0);
	this.instance_46.setTransform(136.1,81.3,0.391,0.391);
	this.instance_46.alpha = 0;

	this.instance_47 = new lib.Glyph17("single",0);
	this.instance_47.setTransform(123,81.3,0.391,0.391);
	this.instance_47.alpha = 0;

	this.instance_48 = new lib.Glyph9("single",0);
	this.instance_48.setTransform(110,81.3,0.391,0.391);
	this.instance_48.alpha = 0;

	this.instance_49 = new lib.Glyph7("single",0);
	this.instance_49.setTransform(97.9,81.3,0.391,0.391);
	this.instance_49.alpha = 0;

	this.instance_50 = new lib.Glyph14("single",0);
	this.instance_50.setTransform(85.2,81.3,0.391,0.391);
	this.instance_50.alpha = 0;

	this.instance_51 = new lib.Glyph5("single",0);
	this.instance_51.setTransform(74.4,81.3,0.391,0.391);
	this.instance_51.alpha = 0;

	this.instance_52 = new lib.Glyph3("single",0);
	this.instance_52.setTransform(62.9,81.3,0.391,0.391);
	this.instance_52.alpha = 0;

	this.instance_53 = new lib.Glyph18("single",0);
	this.instance_53.setTransform(50.8,81.3,0.391,0.391);
	this.instance_53.alpha = 0;

	this.instance_54 = new lib.Glyph7("single",0);
	this.instance_54.setTransform(45,81.3,0.391,0.391);
	this.instance_54.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]},3).to({state:[]},1).wait(2));

	// Layer 55
	this.k1 = new lib.Sprite91();
	this.k1.setTransform(565.5,270.7);
	this.k1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.k1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 53
	this.acur_mc = new lib.Sprite140();
	this.acur_mc.setTransform(67.2,198.1,0.852,0.852);
	this.acur_mc.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	this.acur_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.acur_mc).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 51
	this.s2_1 = new lib.Sprite82();
	this.s2_1.setTransform(77,196.6,0.555,0.555,-14.9);
	this.s2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s2_1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 50
	this.k0 = new lib.Sprite89();
	this.k0.setTransform(565.5,190.8);
	this.k0.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.cb14 = new lib.Sprite65();
	this.cb14.setTransform(89,303.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.k0}]},2).to({state:[{t:this.cb14}]},1).to({state:[]},1).wait(2));

	// Layer 49
	this.s1_1 = new lib.Sprite82();
	this.s1_1.setTransform(347.8,93.2,0.625,0.625,-14.9);
	this.s1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1_1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 47
	this.s0_1 = new lib.Sprite82();
	this.s0_1.setTransform(657.3,438.8,1.049,1.049,30);
	this.s0_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s0_1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 46
	this.title_txt_1 = new cjs.Text("", "20px Arial", "#CC0000");
	this.title_txt_1.textAlign = "center";
	this.title_txt_1.lineHeight = 22;
	this.title_txt_1.lineWidth = 292;
	this.title_txt_1.setTransform(174,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.title_txt_1}]},4).to({state:[]},1).wait(1));

	// Layer 43
	this.cb3 = new lib.Sprite65();
	this.cb3.setTransform(179.6,281.1);
	this.cb3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb3).wait(2).to({_off:false},0).wait(1).to({x:89,y:266.4},0).to({_off:true},1).wait(2));

	// Layer 36
	this.cb2 = new lib.Sprite65();
	this.cb2.setTransform(179.6,244);
	this.cb2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb2).wait(2).to({_off:false},0).wait(1).to({x:89,y:229.3},0).to({_off:true},1).wait(2));

	// Layer 29
	this.cb1 = new lib.Sprite65();
	this.cb1.setTransform(179.6,206.9);
	this.cb1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cb1).wait(2).to({_off:false},0).wait(1).to({x:89,y:192.2},0).to({_off:true},1).wait(2));

	// Layer 27
	this.mainMenu_btn = new lib.Sprite78();
	this.mainMenu_btn.setTransform(284.6,513.8);
	this.mainMenu_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);
	this.mainMenu_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mainMenu_btn).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// Layer 26
	this.settings_btn = new lib.Sprite106();
	this.settings_btn.setTransform(573.2,527.1);
	this.settings_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.settings_btn).wait(5).to({_off:false},0).wait(1));

	// Layer 22
	this.instance_55 = new lib.Sprite75();
	this.instance_55.setTransform(400,300);
	this.instance_55.alpha = 0.5;
	this.instance_55.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.fw_btn_1 = new lib.Sprite78();
	this.fw_btn_1.setTransform(544.5,513.8);
	this.fw_btn_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.cb0 = new lib.Sprite65();
	this.cb0.setTransform(179.6,169.8);

	this.staff_mc = new lib.Sprite134();
	this.staff_mc.setTransform(445.1,37.7);

	this.graf_mc = new lib.Sprite148();
	this.graf_mc.setTransform(71.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_55}]}).to({state:[{t:this.fw_btn_1}]},1).to({state:[{t:this.cb0,p:{x:179.6,y:169.8}}]},1).to({state:[{t:this.cb0,p:{x:89,y:155.1}}]},1).to({state:[{t:this.staff_mc}]},1).to({state:[{t:this.graf_mc}]},1).wait(1));

	// Layer 1
	this.mcBg = new lib.Sprite71();
	this.mcBg.setTransform(376,283.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBg}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.8,-458.4,2190.3,2158.4);


// symbols:



(lib.Sprite121 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB347").ss(3,1,1).p("EgtsAAAMBbZAAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Sprite109 = function() {
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


(lib.Sprite106 = function() {
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


(lib.Sprite82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	//  0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB852").s().p("ABaC/IhaguIhYAuQgUAJgKAAQgMAAgEgHQgEgHAAgIIABgKIABgDIAThtIhHhFIgOgRIgEgMQAAgIAGgFIAOgHIB1gSIA1hpIAIgKQAFgEADAAQAGAAAGAGIAPAVIAuBcIBhAPIATAEIAOAIQAEAFAAAHQAAAOgTATIhIBAIASBvIABAEIAAAIIgDAPQgEAGgKAAQgLAAgRgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},39).wait(1));

	//  0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAPjwQAIAGAIAPIACAFIA3BvIACAEIB0ARIAFABIASAFIAFAAIAMAHIAFADIAGAKIAAAFQAAAQgVAVIgEAEIhTBMIgFAEIAUCEIABAFIAAABIACAEIAAAFIAAAGIgDAMIgBAGIgKAHIgGABQgMAAgUgKIgEgCIhqg3IgEgCIhrA4IgDABQgWALgNABIgDAAQgOAAgFgIIgBgBQgFgJAAgJIAAgBIACgMIAAAAIABgDIAAgBIAXiGIAAgBIhXhVIgBgBIgPgTIgCgDIgEgLIgBgDQAAgKAIgHIARgIICRgWIA4hzIAJgPIABgBIAJgKIABgBQAEgFAFgBIACgBQAFAAAGAFg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB852").s().p("ABzDuIgEgBIhqg3IgEgCIhrA4IgDABQgWALgNAAIgDAAQgOABgFgJIgBgBQgFgIAAgJIAAgBIACgMIAAAAIABgEIAAgBIAXiFIAAgBIhXhVIgBgBIgPgTIgCgDIgEgLIgBgDQAAgKAIgHIARgIICRgWIA4hzIAJgPIABgBIAJgKIABgBQAEgFAFgBIACAAQAFAAAGAEIADADQAIAHAIAOIACAFIA3BvIACAEIB0ARIAFABIASAFIAFAAIAMAHIAFACIAGAKIAAAGQAAAQgVAVIgEAEIhTBMIgFAEIAUCEIABAFIAAABIACAEIAAAFIAAAFIgDANIgBAFIgKAIIgGAAQgMABgUgLg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj+g0QAAgKAIgGQAAAAAAAAIARgIIAAAAICQgWIAAAAIA4hyIAIgPIABgBIAAAAIABgBIAIgJIABgBQAAgBABAAQAAAAABgBQADgDAEgBQABAAABAAIAAAAQACAAADABQADABADADIADACQABABAAAAQACACACACQAFAGAGALIACAFIA4BxIAAAAIAFABIBzARIAAAAIAXAFIAAAAIAQAJIAAAAIAEAGIACAEIABAFQAAABAAAAQAAADgBAEQgEANgQAQQgCACgBABIgEAEIhPBIIgEADIgBABIAVCIIAAAAIAAABIACADIAAABIAAAKIAAAAIgFASIAAAAIgGAFIgDADIgGAAIgBAAQgCAAgCAAQgLgCgQgIQgBAAgCgBIgEgCIhpg3IgBAAIgBABIhpA2IgDABQgBAAAAAAQgWALgMABIgCAAQAAAAgBAAQgKAAgFgFQgCgBgBgCQgBgBAAAAQgEgGgBgGQAAAAAAgBQAAgCAAgCIAAgBIABgGIAAAAIAAgDIAAgDIAAgBIABgDIAAgBIAWh/IABgFIAAgBIhUhSIgDgDIgNgRIgCgCIgBgDIgEgJIgCgF");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB852").s().p("ACRD2IgEAAQgLgCgQgIIgDgBIgEgCIhpg3IgBAAIgBABIhpA2IgDABIgBAAQgWALgMABIgCAAIgBAAQgKAAgFgFIgDgDIgBgBQgEgGgBgGIAAgBIAAgEIAAgBIABgGIAAAAIAAgDIAAgDIAAgBIABgDIAAgBIAWh/IABgFIAAgBIhUhSIgDgDIgNgRIgCgCIgBgDIgEgJIgCgFQAAgKAIgGIARgIICQgWIAAAAIA4hyIAIgPIABgBIABgBIAIgJIABgBIABgBIABgBQADgDAEgBIACAAIAAAAIAFABIAGAEIADACIABABIAEAEQAFAGAGALIACAFIA4BxIAFABIBzARIAXAFIAQAJIAEAGIACAEIABAFIAAABIgBAHQgEANgQAQIgDADIgEAEIhPBIIgEADIgBABIAVCIIAAAAIAAABIACADIAAABIAAAKIAAAAIgFASIgGAFIgDADIgGAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj7gzQAAgKAIgHQAAAAAAAAIAQgHIAAAAICOgWIAAAAIA4hxIAJgPIAAgBIAAAAIABgBIAIgJIABgBQAAAAABAAQAAgBABAAQADgDAEgBQABAAABgBIAAAAQACAAADABQADACADACIADADQAAAAABABQACABACACQAFAHAGAKIACAFIA4BwIAAAAIAEABIByARIAAAAIAXAFIAAAAIAQAJIAAAAIAEAGIACAEIAAAFQAAAAAAABQAAADgBADQgDANgQAQQgCACgBABIgEAEIhPBIIgEADIgBABIAVCGIAAAAIAAABIACADIAAABIAAAKIAAAAIgEASIAAAAIgGAEIgEADIgGABIAAAAQgCAAgDgBQgKgBgQgIQgCgBgBAAIgEgCIhog2IgBAAIgBABIhoA1IgDABQgBAAAAAAQgVALgNABIgCAAQAAAAgBAAQgKAAgFgFQgCgCgBgCQAAAAgBgBQgDgGgBgFQAAgBAAAAQAAgCAAgDIAAgBIABgGIAAAAIAAgDIAAgDIAAAAIABgDIAAgBIAWh+IAAgFIAAgBIhThRIgCgDIgOgRIgCgCIgBgDIgDgJIgCgE");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB852").s().p("ACQD0IgFgBQgKgBgQgIIgDgBIgEgCIhog2IgBAAIgBABIhoA1IgDABIgBAAQgVALgNABIgCAAIgBAAQgKAAgFgFIgDgEIgBgBQgDgGgBgFIAAgBIAAgFIAAgBIABgGIAAAAIAAgDIAAgDIAAAAIABgDIAAgBIAWh+IAAgFIAAgBIhThRIgCgDIgOgRIgCgCIgBgDIgDgJIgCgEQAAgKAIgHIAQgHICOgWIAAAAIA4hxIAJgPIAAgBIABgBIAIgJIABgBIABAAIABgBQADgDAEgBIACgBIAAAAIAFABIAGAEIADADIABABIAEADQAFAHAGAKIACAFIA4BwIAEABIByARIAXAFIAQAJIAEAGIACAEIAAAFIAAABIgBAGQgDANgQAQIgDADIgEAEIhPBIIgEADIgBABIAVCGIAAAAIAAABIACADIAAABIAAAKIAAAAIgEASIgGAEIgEADIgGABg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj5gzQAAgKAIgGQAAAAAAAAIARgIIAAAAICMgVIAAAAIA3hwIAJgOIAAgBIAAAAIABgCIAIgIIABgBQABgBAAAAQAAAAABgBQADgDAEgBQABAAABAAIAAAAQACAAADABQADABADADIADACQAAAAABABQACABACACQAFAHAFAKIACAFIA4BvIAAAAIAFABIBwAQIAAAAIAWAGIAAAAIARAIIAAAAIADAGIACAEIABAFQAAABAAAAQAAADgBAEQgEAMgQARQgBABgCABIgEAEIhNBHIgEADIgBABIAUCFIAAAAIAAABIACADIAAABIAAAKIAAAAIgEARIAAAAIgGAFIgDADIgGAAIgBAAQgCAAgCAAQgLgCgPgIQgCAAgBgBIgEgCIhng1IgBAAIgBABIhnA1IgDABQgBAAAAAAQgVAKgMABIgCAAQgBAAAAAAQgKAAgFgFQgCgBgBgCQgBgBAAAAQgDgGgBgGQAAAAAAgBQgBgCAAgCIAAgBIABgGIAAAAIABgDIAAgDIAAAAIABgDIAAgBIAVh9IABgFIgBgBIhRhQIgDgDIgNgRIgCgCIgCgDIgDgJIgCgE");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB852").s().p("ACODxIgEAAQgLgCgPgIIgDgBIgEgCIhng1IgBAAIgBABIhnA1IgDABIgBAAQgVAKgMABIgCAAIgBAAQgKAAgFgFIgDgDIgBgBQgDgGgBgGIAAgBIgBgEIAAgBIABgGIAAAAIABgDIAAgDIAAAAIABgDIAAgBIAVh9IABgFIgBgBIhRhQIgDgDIgNgRIgCgCIgCgDIgDgJIgCgEQAAgKAIgGIARgIICMgVIAAAAIA3hwIAJgOIAAgBIABgCIAIgIIABgBIABgBIABgBQADgDAEgBIACAAIAAAAIAFABIAGAEIADACIABABIAEADQAFAHAFAKIACAFIA4BvIAFABIBwAQIAWAGIARAIIADAGIACAEIABAFIAAABIgBAHQgEAMgQARIgDACIgEAEIhNBHIgEADIgBABIAUCFIAAAAIAAABIACADIAAABIAAAKIAAAAIgEARIgGAFIgDADIgGAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj2gyQAAgKAHgGQAAAAAAAAIARgIIAAAAICLgVIAAAAIA3huIAIgPIABgBIAAAAIABgBIAHgJIABgBQABAAAAgBQABAAAAAAQADgDAEgBQABAAABgBIAAAAQACAAADABQADACADACIADACQAAABABAAQABACACABQAGAHAFAKIACAFIA3BuIAAAAIAFABIBvAQIAAAAIAWAFIAAAAIAQAJIAAAAIAEAGIACAEIAAAFQAAAAAAABQAAADgBADQgDANgQAQQgBABgCACIgEADIhNBGIgDADIgBABIAUCEIAAAAIAAABIACADIAAABIAAAJIAAABIgEARIAAAAIgGAFIgEACIgFABIgBAAQgCAAgCgBQgLgBgPgIQgCAAgBgBIgEgCIhmg1IgBAAIgBABIhmA0IgDABQgBAAAAABQgVAKgMABIgCAAQgBAAAAAAQgKAAgFgFQgCgCgBgCQAAAAgBgBQgDgGgBgFQAAgBAAAAQAAgCAAgDIAAgBIABgFIAAAAIABgDIAAgDIAAAAIAAgDIAAgBIAWh8IAAgFIAAgBIhRhPIgDgDIgNgQIgCgCIgBgDIgEgJIgBgE");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCB852").s().p("ACNDvIgEgBQgLgBgPgIIgDgBIgEgCIhng1IgBAAIAAABIhmA0IgDABIgBABQgVAKgMABIgCAAIgBAAQgKAAgFgFIgDgEIgBgBQgDgGgBgFIAAgBIAAgFIAAgBIABgFIAAAAIABgDIAAgDIAAAAIAAgDIAAgBIAWh8IAAgFIAAgBIhRhPIgDgDIgNgQIgCgCIgBgDIgEgJIgBgEQAAgKAHgGIARgIICLgVIAAAAIA3huIAIgPIABgBIABgBIAHgJIABgBIABgBIABAAQADgDAEgBIACgBIAAAAIAFABIAGAEIADACIABABIADADQAGAHAFAKIACAFIA3BuIAFABIBvAQIAWAFIAQAJIAEAGIACAEIAAAFIAAABIgBAGQgDANgQAQIgDADIgEADIhNBGIgDADIgBABIAUCEIAAAAIAAABIACADIAAABIAAAJIAAABIgEARIgGAFIgEACIgFABg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj0gyQAAgJAIgHQAAAAAAAAIAQgHIAAAAICKgVIAAAAIA2htIAIgPIABgBIAAAAIABgBIAHgJIABgBQABAAAAAAQABgBAAAAQADgDAEgBQABAAABAAIAAAAQACAAADABQADABACACIADADQABAAAAAAQACACACACQAFAGAGAKIACAFIA2BtIAAAAIAFABIBuAQIAAAAIAWAFIAAAAIAQAJIAAAAIADAFIACAEIABAFQAAABAAAAQAAADgBADQgDANgQAQQgCABgBACIgEAEIhMBFIgEADIgBABIAUCCIAAAAIAAABIACADIAAABIAAAJIAAABIgEARIAAAAIgGAEIgDADIgGAAIAAAAQgCAAgDAAQgKgCgPgHQgCgBgBAAIgEgCIhmg1IgBAAIAAABIhlA0IgDABQgBAAAAAAQgVALgMAAIgCAAQAAAAgBAAQgKAAgFgFQgBgBgBgCQgBgBAAAAQgDgGgBgGQAAAAAAgBQAAgCAAgCIAAgBIABgGIAAAAIAAgDIAAgCIAAgBIABgCIAAgBIAVh7IAAgEIAAgBIhQhPIgDgDIgNgQIgCgCIgBgDIgDgJIgCgE");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB852").s().p("ACMDsIgFAAQgKgCgPgHIgDgBIgEgCIhmg1IgBAAIAAABIhlA0IgDABIgBAAQgVALgMAAIgCAAIgBAAQgKAAgFgFIgCgDIgBgBQgDgGgBgGIAAgBIAAgEIAAgBIABgGIAAAAIAAgDIAAgCIAAgBIABgCIAAgBIAVh7IAAgEIAAgBIhQhPIgDgDIgNgQIgCgCIgBgDIgDgJIgCgEQAAgJAIgHIAQgHICKgVIAAAAIA2htIAIgPIABgBIABgBIAHgJIABgBIABAAIABgBQADgDAEgBIACAAIAAAAIAFABIAFADIADADIABAAIAEAEQAFAGAGAKIACAFIA2BtIAFABIBuAQIAWAFIAQAJIADAFIACAEIABAFIAAABIgBAGQgDANgQAQIgDADIgEAEIhMBFIgEADIgBABIAUCCIAAAAIAAABIACADIAAABIAAAJIAAABIgEARIgGAEIgDADIgGAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjxgxQAAgKAHgGQAAAAAAAAIAQgHIAAAAICJgVIAAAAIA1hsIAIgPIABgBIAAAAIABgBIAHgIIABgBQABgBAAAAQABAAAAgBQADgDAEgBQABAAABAAIAAAAQACAAADABQADABACADIADACQABAAAAABQACABACACQAFAHAFAJIACAFIA2BsIAAAAIAFABIBtAQIAAAAIAWAFIAAAAIAPAIIAAAAIAEAGIACAEIAAAFQAAAAAAABQAAADgBADQgDAMgQAQQgBACgBABIgEAEIhMBEIgDADIgBABIAUCBIAAAAIAAABIACADIAAABIAAAJIAAABIgFAQIAAAAIgFAFIgEACIgFABIgBAAQgCAAgCAAQgLgCgPgIQgBAAgCgBIgDgCIhlgzIgBAAIAAABIhkAzIgDABQgBAAAAAAQgVAKgMABIgCAAQAAAAAAAAQgKAAgFgFQgCgCgBgCQAAAAAAgBQgEgGAAgFQAAgBAAAAQgBgCAAgCIAAgBIABgGIAAAAIABgDIAAgDIAAAAIABgDIAAgBIAVh5IgBgEIAAgBIhPhOIgDgDIgNgQIgBgCIgCgDIgDgJIgBgD");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCB852").s().p("ACKDqIgEAAQgLgCgPgIIgDgBIgDgCIhlgzIgBAAIAAABIhkAzIgDABIgBAAQgVAKgMABIgCAAIAAAAQgKAAgFgFIgDgEIAAgBQgEgGAAgFIAAgBIgBgEIAAgBIABgGIAAAAIABgDIAAgDIAAAAIABgDIAAgBIAVh5IgBgEIAAgBIhPhOIgDgDIgNgQIgBgCIgCgDIgDgJIgBgDQAAgKAHgGIAQgHICJgVIAAAAIA1hsIAIgPIABgBIABgBIAHgIIABgBIABgBIABgBQADgDAEgBIACAAIAAAAIAFABIAFAEIADACIABABIAEADQAFAHAFAJIACAFIA2BsIAFABIBtAQIAWAFIAPAIIAEAGIACAEIAAAFIAAABIgBAGQgDAMgQAQIgCADIgEAEIhMBEIgDADIgBABIAUCBIAAAAIAAABIACADIAAABIAAAJIAAABIgFAQIgFAFIgEACIgFABg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjvgxQAAgJAIgGQAAAAAAAAIAQgIIAAAAICGgUIABAAIA1hrIAIgOIAAgBIAAAAIABgCIAIgIIABgBQAAAAAAAAQABgBAAAAQADgDAEgBQABAAABgBIAAAAQACABADAAQACACADACIADACQAAABABAAQACACACABQAFAHAFAJIACAFIA1BrIAAAAIAFABIBrAQIAAAAIAWAFIAAAAIAQAIIAAAAIAEAGIABADIABAFQAAABAAAAQAAADgBADQgDANgQAPQgBACgCABIgEAEIhKBEIgEADIAAABIATB/IAAAAIAAABIACADIAAABIAAAJIAAABIgEAQIAAAAIgGAFIgDACIgGABIAAAAQgCAAgDgBQgKgBgPgIQgBAAgCgBIgDgCIhkgzIgBAAIAAABIhjAyIgDABQAAABgBAAQgUAKgMABIgCAAQgBAAAAAAQgKgBgFgFQgBgBgBgCQAAgBgBAAQgDgGgBgGQAAAAAAgBQAAgCAAgCIAAgBIABgFIAAgBIABgDIAAgCIAAAAIAAgDIAAgBIAVh4IAAgEIgBgBIhOhNIgDgDIgMgQIgCgCIgBgDIgEgJIgBgD");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCB852").s().p("ACJDoIgFgBQgKgBgPgIIgDgBIgDgCIhkgzIgBAAIAAABIhjAyIgDABIgBABQgUAKgMABIgCAAIgBAAQgKgBgFgFIgCgDIgBgBQgDgGgBgGIAAgBIAAgEIAAgBIABgFIAAgBIABgDIAAgCIAAAAIAAgDIAAgBIAVh4IAAgEIgBgBIhOhNIgDgDIgMgQIgCgCIgBgDIgEgJIgBgDQAAgJAIgGIAQgIICGgUIABAAIA1hrIAIgOIAAgBIABgCIAIgIIABgBIAAAAIABgBQADgDAEgBIACgBIAAAAIAFABIAFAEIADACIABABIAEADIAKAQIACAFIA1BrIAFABIBrAQIAWAFIAQAIIAEAGIABADIABAFIAAABIgBAGQgDANgQAPIgDADIgEAEIhKBEIgEADIAAABIATB/IAAAAIAAABIACADIAAABIAAAJIAAABIgEAQIgGAFIgDACIgGABg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjsgwQAAgKAHgGQAAAAAAAAIAQgHIAAAAICFgUIABAAIA0hqIAIgOIAAgBIAAAAIABgBIAIgJIABAAQAAgBAAAAQABAAAAgBQADgDAEgBQABAAABAAIAAAAQACAAADABQACABADACIADADQAAAAABAAQACACABABQAGAHAFAJIACAFIA0BqIAAAAIAFABIBqAPIAAAAIAWAFIAAAAIAPAJIAAAAIAEAFIACAEIAAAFQAAAAAAABQAAACAAAEQgEAMgPAQQgCABgBABIgEAEIhKBDIgDADIgBABIAUB+IAAAAIAAABIABADIAAABIAAAJIAAAAIgEARIAAAAIgFAEIgEADIgFAAIgBAAQgCAAgCAAQgKgCgPgHQgBgBgCAAIgDgCIhjgzIgBAAIAAABIhiAyIgDABQAAAAgBABQgUAKgMAAIgCAAQAAAAgBAAQgKAAgEgFQgCgCgBgCQAAAAAAgBQgDgGgBgFQAAgBAAAAQAAgCAAgCIAAgBIABgGIAAAAIAAgDIAAgCIAAAAIABgDIAAgBIAVh3IgBgEIAAgBIhOhMIgDgDIgMgQIgCgCIgBgDIgDgIIgBgD");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCB852").s().p("ACHDlIgEAAQgKgCgPgHIgDgBIgDgCIhjgzIgBAAIAAABIhiAyIgDABIgBABQgUAKgMAAIgCAAIgBAAQgKAAgEgFIgDgEIAAgBQgDgGgBgFIAAgBIAAgEIAAgBIABgGIAAAAIAAgDIAAgCIAAAAIABgDIAAgBIAVh3IgBgEIAAgBIhOhMIgDgDIgMgQIgCgCIgBgDIgDgIIgBgDQAAgKAHgGIAQgHICFgUIABAAIA0hqIAIgOIAAgBIABgBIAIgJIABAAIAAgBIABgBQADgDAEgBIACAAIAAAAIAFABIAFADIADADIABAAIADADIALAQIACAFIA0BqIAFABIBqAPIAWAFIAPAJIAEAFIACAEIAAAFIAAABIAAAGQgEAMgPAQIgDACIgEAEIhKBDIgDADIgBABIAUB+IAAAAIAAABIABADIAAABIAAAJIAAAAIgEARIgFAEIgEADIgFAAg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjqgwQAAgJAHgGQAAAAAAAAIAQgHIAAAAICEgUIABAAIAzhpIAIgOIABgBIAAAAIABgBIAHgIIABgBQAAgBAAAAQABAAAAgBQADgCAEgBQABgBABAAIAAAAQACAAADABQACACADACIADACQAAAAABABQABABACACQAFAHAFAJIACAEIA0BpIAAAAIAFABIBpAPIAAAAIAWAFIAAAAIAPAIIAAAAIAEAGIABADIABAFQAAABAAAAQAAADgBADQgDAMgQAQQgBABgBABIgEAEIhJBCIgEADIAAABIATB9IAAAAIAAABIACADIAAABIAAAJIAAAAIgEAQIAAAAIgGAFIgDACIgGABIAAAAQgCAAgCgBQgLgBgOgIQgBAAgCgBIgEgCIhhgyIgBAAIAAABIhhAyIgDABQAAAAgBAAQgUAKgMABIgCAAQAAAAAAAAQgKAAgFgGQgBgCgBgCQAAAAgBgBQgDgFAAgGQAAAAAAgBQgBgBAAgCIAAgBIABgGIAAAAIABgDIAAgCIAAgBIABgCIAAgBIAUh2IgBgEIAAgBIhNhLIgDgDIgMgQIgBgCIgCgDIgDgIIgBgD");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCB852").s().p("ACGDjIgEgBQgLgBgOgIIgDgBIgEgCIhhgyIgBAAIAAABIhhAyIgDABIgBAAQgUAKgMABIgCAAIAAAAQgKAAgFgGIgCgEIgBgBQgDgFAAgGIAAgBIgBgDIAAgBIABgGIAAAAIABgDIAAgCIAAgBIABgCIAAgBIAUh2IgBgEIAAgBIhNhLIgDgDIgMgQIgBgCIgCgDIgDgIIgBgDQAAgJAHgGIAQgHICEgUIABAAIAzhpIAIgOIABgBIABgBIAHgIIABgBIAAgBIABgBQADgCAEgBIACgBIAAAAIAFABIAFAEIADACIABABIADADIAKAQIACAEIA0BpIAFABIBpAPIAWAFIAPAIIAEAGIABADIABAFIAAABIgBAGQgDAMgQAQIgCACIgEAEIhJBCIgEADIAAABIATB9IAAAAIAAABIACADIAAABIAAAJIAAAAIgEAQIgGAFIgDACIgGABg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjngvQAAgJAHgGQAAAAAAAAIAPgHIAAAAICDgUIAAAAIA0hoIAHgOIABgBIAAAAIABgBIAHgIIABgBQAAAAAAAAQABgBAAAAQADgDAEgBQABAAABAAIAAAAQACAAADABQACABADACIACACQABABAAAAQACABACACQAFAHAFAJIACAEIA0BoIAAAAIAEABIBoAPIAAAAIAWAFIAAAAIAPAIIAAAAIADAFIACAEIAAAFQAAAAAAABQAAACAAADQgEAMgPAQQgBABgCACIgEADIhIBCIgDADIgBABIATB7IAAAAIAAABIACADIAAABIAAAJIAAAAIgEAQIAAAAIgFAFIgEACIgFAAIgBAAQgCAAgCAAQgKgCgOgHQgCAAgBgBIgEgCIhggxIgBAAIAAABIhgAxIgDABQAAAAgBAAQgUAKgLAAIgCAAQgBAAAAAAQgKAAgEgFQgCgCgBgCQAAgBAAAAQgDgGgBgFQAAgBAAAAQAAgCAAgCIAAgBIABgFIAAgBIABgDIAAgCIAAAAIAAgCIAAgBIAVh1IgBgEIgBgBIhMhKIgCgDIgNgQIgBgCIgBgDIgDgIIgBgC");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCB852").s().p("ACEDgIgEAAQgKgCgOgHIgDgBIgEgCIhggxIgBAAIAAABIhgAxIgDABIgBAAQgUAKgLAAIgCAAIgBAAQgKAAgEgFIgDgEIAAgBQgDgGgBgFIAAgBIAAgEIAAgBIABgFIAAgBIABgDIAAgCIAAAAIAAgCIAAgBIAVh1IgBgEIgBgBIhMhKIgCgDIgNgQIgBgCIgBgDIgDgIIgBgCQAAgJAHgGIAPgHICDgUIAAAAIA0hoIAHgOIABgBIABgBIAHgIIABgBIAAAAIABgBQADgDAEgBIACAAIAAAAIAFABIAFADIACACIABABIAEADIAKAQIACAEIA0BoIAEABIBoAPIAWAFIAPAIIADAFIACAEIAAAFIAAABIAAAFQgEAMgPAQIgDADIgEADIhIBCIgDADIgBABIATB7IAAAAIAAABIACADIAAABIAAAJIAAAAIgEAQIgFAFIgEACIgFAAg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjlgvQAAgJAHgFQAAAAAAAAIAQgIIAAAAICBgTIAAAAIAzhmIAHgOIABgBIAAAAIABgCIAHgIIABAAQAAgBAAAAQABAAAAgBQADgCAEgBQABgBABAAIAAAAQACAAADABQACACACABIADADQABAAAAAAQACACACABQAFAHAFAJIACAEIAzBnIAAAAIAEABIBnAPIAAAAIAVAFIAAAAIAPAIIAAAAIAEAFIABADIABAFQAAABAAAAQAAADgBADQgDAMgPAPQgCACgBABIgEADIhHBBIgEADIAAABIATB6IAAAAIAAABIACADIAAABIAAAIIAAABIgEAQIAAAAIgGAEIgDACIgGABIAAAAQgCAAgCgBQgKgBgOgHQgCgBgBAAIgEgCIhfgxIgBAAIAAABIhfAwIgDABQAAABgBAAQgUAKgLAAIgCAAQAAAAgBAAQgKAAgEgGQgBgCgBgCQAAAAgBgBQgDgFAAgGQAAAAAAgBQAAgBAAgCIAAgBIABgGIAAAAIABgDIAAgCIAAAAIAAgDIAAgBIAUhzIgBgEIgBgBIhLhJIgCgDIgMgPIgCgCIgBgDIgDgJIgBgC");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCB852").s().p("ACDDeIgEgBQgKgBgOgHIgDgBIgEgCIhfgxIgBAAIAAABIhfAwIgDABIgBABQgUAKgLAAIgCAAIgBAAQgKAAgEgGIgCgEIgBgBQgDgFAAgGIAAgBIAAgDIAAgBIABgGIAAAAIABgDIAAgCIAAAAIAAgDIAAgBIAUhzIgBgEIgBgBIhLhJIgCgDIgMgPIgCgCIgBgDIgDgJIgBgCQAAgJAHgFIAQgIICBgTIAAAAIAzhmIAHgOIABgBIABgCIAHgIIABAAIAAgBIABgBQADgCAEgBIACgBIAAAAIAFABIAEADIADADIABAAIAEADIAKAQIACAEIAzBnIAEABIBnAPIAVAFIAPAIIAEAFIABADIABAFIAAABIgBAGQgDAMgPAPIgDADIgEADIhHBBIgEADIAAABIATB6IAAAAIAAABIACADIAAABIAAAIIAAABIgEAQIgGAEIgDACIgGABg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjiguQAAgJAHgGQAAAAAAAAIAPgHIAAAAIB/gTIABAAIAyhlIAHgOIABgBIAAAAIABgBIAHgIIABgBQAAAAABgBQAAAAAAAAQADgDAEgBQABAAABgBIAAAAQACABADAAQACACACACIADACQABAAAAAAQACACABABQAGAHAFAJIACAEIAyBmIAAAAIAEABIBmAOIAAAAIAVAFIAAAAIAPAIIAAAAIADAGIACADIAAAFQAAAAAAABQAAACAAADQgDAMgQAQQgBABgBABIgEADIhHBAIgDADIAAABIASB5IAAAAIAAABIACADIAAABIAAAIIAAABIgEAPIAAAAIgFAFIgEACIgFABIAAAAQgCAAgDgBQgJgBgOgIQgCAAgBgBIgEgCIhegwIgBAAIAAABIheAwIgDABQAAAAgBABQgUAJgLABIgCAAQAAAAAAAAQgLgBgEgFQgBgCgBgCQAAgBAAAAQgDgGAAgFQAAgBAAAAQgBgCAAgCIAAgBIABgFIAAAAIABgDIAAgCIAAAAIABgDIAAgBIAUhyIgCgEIAAgBIhLhIIgCgDIgMgPIgCgCIgBgDIgDgIIAAgC");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCB852").s().p("ACCDcIgFgBQgKgBgNgIIgDgBIgEgCIhegwIgBAAIAAABIheAwIgDABIgBABQgTAJgMABIgCAAIAAAAQgKgBgEgFIgDgEIAAgBQgDgGAAgFIAAgBIgBgEIAAgBIABgFIAAAAIABgDIAAgCIAAAAIABgDIAAgBIAUhyIgCgEIAAgBIhLhIIgCgDIgMgPIgCgCIgBgDIgDgIIAAgCQAAgJAHgGIAPgHIB/gTIABAAIAyhlIAIgOIAAgBIABgBIAHgIIABgBIAAgBIABAAQADgDAEgBIACgBIAAAAIAFABIAEAEIADACIABAAIADADIAKAQIACAEIAzBmIAEABIBmAOIAVAFIAPAIIADAGIACADIAAAFIAAABIAAAFQgEAMgPAQIgCACIgEADIhHBAIgDADIAAABIASB5IAAAAIAAABIACADIAAABIAAAIIAAABIgEAPIgFAFIgEACIgFABg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjgguQAAgJAHgFQAAAAAAAAIAPgHIAAAAIB+gTIABAAIAyhkIAHgOIABgBIAAAAIABgBIAGgIIABAAQAAgBABAAQAAAAABgBQACgDAEgBQABAAABAAIAAAAQACAAACABQADABACACIADACQAAABABAAQABABACACQAFAHAFAIIACAEIAyBlIAAAAIAEABIBlAOIAAAAIAVAFIAAAAIAOAIIAAAAIAEAFIABADIABAFQAAABAAAAQAAADgBADQgDALgPAQQgBABgBABIgEADIhGBAIgDADIgBABIATB3IAAAAIAAABIABADIAAABIAAAIIAAABIgEAPIAAAAIgFAFIgDABIgFABIgBAAQgCAAgCAAQgKgCgOgHQgBAAgCgBIgDgCIhdgwIgBAAIAAABIhdAwIgDABQAAAAgBAAQgTAKgMAAIgCAAQAAAAAAAAQgKAAgEgGQgBgCgBgCQAAAAAAgBQgDgFgBgGQAAAAAAgBQAAgBAAgCIAAgBIABgFIAAgBIABgDIAAgBIAAgBIAAgCIAAgBIAUhxIgCgEIAAgBIhKhHIgCgDIgMgPIgBgCIgBgDIgDgIIgBgC");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCB852").s().p("ACADZIgEAAQgKgCgOgHIgDgBIgDgCIhdgwIgBAAIAAABIhdAwIgDABIgBAAQgTAKgMAAIgCAAIAAAAQgKAAgEgGIgCgEIAAgBQgDgFgBgGIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAgBIAAgCIAAgBIAUhxIgCgEIAAgBIhKhHIgCgDIgMgPIgBgCIgBgDIgDgIIgBgCQAAgJAHgFIAPgHIB+gTIABAAIAyhkIAHgOIABgBIABgBIAGgIIABAAIABgBIABgBQACgDAEgBIACAAIAAAAIAEABIAFADIADACIABABIADADIAKAPIACAEIAyBlIAEABIBlAOIAVAFIAOAIIAEAFIABADIABAFIAAABIgBAGQgDALgPAQIgCACIgEADIhGBAIgDADIgBABIATB3IAAAAIAAABIABADIAAABIAAAIIAAABIgEAPIgFAFIgDABIgFABg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjdgtQAAgJAHgFQAAAAAAAAIAOgHIAAAAIB9gUIABAAIAxhiIAHgOIABgBIAAAAIABgBIAGgHIABgBQAAgBABAAQAAAAABgBQACgCAEgBQABgBABAAIAAAAQACABACAAQADACACACIADACQAAAAABAAQABACACABQAFAHAFAIIACAEIAxBjIAAAAIAEABIBkAPIAAAAIAVAFIAAAAIAOAIIAAAAIADAFIACADIAAAEQAAABAAAAQAAADAAADQgDAMgPAPQgCABgBABIgEAEIhFA+IgDADIAAABIASB2IAAAAIAAABIACADIAAAAIAAAJIAAABIgEAPIAAAAIgFAEIgEACIgFABIAAAAQgCAAgDgBQgJgBgOgHQgBgBgCAAIgDgCIhcgvIgBAAIAAABIhcAuIgDABQAAABgBAAQgTAJgLABIgCAAQAAAAgBAAQgKgBgEgGQgBgBgBgCQAAgBAAAAQgDgGAAgFQAAAAAAgBQAAgCAAgBIAAgBIABgGIAAAAIABgDIAAgCIAAAAIAAgCIAAgBIAUhwIgCgDIgBgBIhJhIIgCgDIgMgOIgBgCIgBgDIgDgIIAAgB");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCB852").s().p("AB/DXIgFgBQgJgBgOgHIgDgBIgDgCIhcgvIgBAAIAAABIhcAuIgDABIgBABQgTAJgLABIgCAAIgBAAQgKgBgEgGIgCgDIAAgBQgDgGAAgFIAAgBIAAgDIAAgBIABgGIAAAAIABgDIAAgCIAAAAIAAgCIAAgBIAUhwIgCgDIgBgBIhJhIIgCgDIgMgOIgBgCIgBgDIgDgIIAAgBQAAgJAHgFIAOgHIB9gUIABAAIAxhiIAHgOIABgBIABgBIAGgHIABgBIABgBIABgBQACgCAEgBIACgBIAAAAIAEABIAFAEIADACIABAAIADADIAKAPIACAEIAxBjIAEABIBkAPIAVAFIAOAIIADAFIACADIAAAEIAAABIAAAGQgDAMgPAPIgDACIgEAEIhFA+IgDADIAAABIASB2IAAAAIAAABIACADIAAAAIAAAJIAAABIgEAPIgFAEIgEACIgFABg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjbgtQAAgIAHgGQAAAAAAAAIAPgHIAAAAIB7gTIABAAIAwhhIAHgNIABgBIAAAAIABgCIAGgHIABgBQABAAAAgBQAAAAABAAQACgDAEgBQABAAABAAIAAAAQACAAACABQADABACACIACACQABAAAAAAQACACACABQAFAHAFAIIACAEIAwBiIAAAAIAFABIBiAPIAAAAIAUAFIAAAAIAPAHIAAAAIADAFIABAEIABAEQAAAAAAABQAAADgBACQgDAMgPAPQgBABgBABIgEAEIhEA9IgDADIgBABIASB1IAAAAIAAABIACADIAAAAIAAAJIAAAAIgEAPIAAAAIgFAFIgDABIgFABIgBAAQgCAAgCAAQgJgCgOgHQgBAAgCgBIgDgCIhbguIgBAAIAAABIhbAuIgDABQAAABgBAAQgTAJgLAAIgCAAQAAAAAAAAQgLAAgDgGQgBgCgBgCQAAAAAAgBQgDgFAAgFQAAgBAAAAQAAgCAAgCIAAgBIABgFIAAAAIAAgDIAAgCIAAAAIABgCIAAgBIAThvIgCgDIgBgBIhHhHIgDgDIgLgOIgCgCIgBgDIgCgIIgBgB");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FCB852").s().p("AB9DUIgEAAQgJgCgOgHIgDgBIgDgCIhbguIgBAAIAAABIhbAuIgDABIgBABQgTAJgLAAIgCAAIAAAAQgLAAgDgGIgCgEIAAgBQgDgFAAgFIAAgBIAAgEIAAgBIABgFIAAAAIAAgDIAAgCIAAAAIABgCIAAgBIAThvIgCgDIgBgBIhHhHIgDgDIgLgOIgCgCIgBgDIgCgIIgBgBQAAgIAHgGIAPgHIB7gTIABAAIAwhhIAHgNIABgBIABgCIAGgHIABgBIABgBIABAAQACgDAEgBIACAAIAAAAIAEABIAFADIACACIABAAIAEADIAKAPIACAEIAwBiIAFABIBiAPIAUAFIAPAHIADAFIABAEIABAEIAAABIgBAFQgDAMgPAPIgCACIgEAEIhEA9IgDADIgBABIASB1IAAAAIAAABIACADIAAAAIAAAJIAAAAIgEAPIgFAFIgDABIgFABg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjYgsQAAgJAGgFQAAAAAAAAIAPgHIAAAAIB6gTIABAAIAwhgIAGgNIABgBIAAAAIABgBIAHgIIABAAQAAgBAAAAQAAAAABgBQACgCAEgBQABgBABAAIAAAAQACAAACABQACACADABIACACQABAAAAABQACABABABQAGAIAEAHIACAEIAwBhIAAAAIAFABIBhAPIAAAAIAUAEIAAAAIAOAIIAAAAIADAFIACADIAAAEQAAABAAAAQAAADAAADQgDALgPAPQgBACgBABIgEADIhEA9IgDADIAAABIASBzIAAAAIAAABIABADIAAAAIAAAJIAAAAIgDAPIAAAAIgFAFIgEABIgFABIAAAAQgCAAgCgBQgKgBgNgHQgBAAgCgBIgDgCIhaguIgBAAIAAABIhaAuIgDABQAAAAgBABQgTAJgLAAIgCAAQAAAAAAAAQgKAAgEgHQgBgBgBgCQAAgBAAAAQgCgGgBgFQAAAAAAgBQAAgBAAgCIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAUhuIgDgDIAAgBIhHhGIgDgDIgLgOIgBgCIgBgDIgDgHIAAgB");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCB852").s().p("AB8DSIgEgBQgKgBgNgHIgDgBIgDgCIhaguIgBAAIAAABIhaAuIgDABIgBABQgTAJgLAAIgCAAIAAAAQgKgBgEgGIgCgDIAAgCQgCgFgBgFIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgDIAAgBIAUhtIgDgDIAAgBIhHhGIgDgDIgLgOIgBgCIgBgDIgDgHIAAgBQAAgJAGgFIAPgHIB6gTIABAAIAwhgIAGgNIABgBIABgBIAHgIIABAAIAAgBIABgBQACgCAEgBIACgBIAAAAIAEABIAFADIACACIABABIADACIAKAPIACAEIAwBhIAFABIBhAPIAUAEIAOAIIADAFIACADIAAAEIAAABIAAAGQgDALgPAPIgCADIgEADIhEA9IgDADIAAABIASBzIAAAAIAAABIABADIAAAAIAAAJIAAAAIgDAPIgFAFIgEABIgFABg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjWgsQAAgIAHgFQAAAAAAAAIAOgHIAAAAIB5gTIAAAAIAwhfIAGgNIABgBIAAAAIABgBIAHgHIABgBQAAAAAAgBQAAAAABAAQACgDAEgBQABAAABAAIAAAAQACAAACABQACABACACIADACQABAAAAAAQACABABACQAFAHAFAHIACAFIAwBfIAAAAIAEABIBgAOIAAAAIAUAFIAAAAIAOAIIAAAAIADAEIABAEIABAEQAAAAAAABQAAACgBADQgDALgOAQQgCABgBABIgEADIhCA8IgDADIAAABIARByIAAAAIAAABIACADIAAAAIAAAJIAAAAIgEAPIAAAAIgFAEIgDACIgFAAIgBAAQgCAAgCAAQgJgCgNgGQgCgBgBAAIgDgCIhZguIgBAAIAAABIhZAuIgDABQAAAAgBAAQgTAJgKAAIgCAAQAAAAgBAAQgKAAgDgGQgBgCgBgCQAAgBAAAAQgDgFAAgFQAAgBAAAAQAAgCAAgCIAAgBIABgFIAAAAIABgDIAAgBIAAgBIAAgCIAAgBIAThsIgCgDIgBgBIhGhFIgCgDIgMgOIgBgCIgBgDIgDgHIAAgB");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCB852").s().p("AB6DPIgEAAQgJgCgNgGIgDgBIgDgCIhZguIgBAAIAAABIhZAuIgDABIgBAAQgTAJgKAAIgCAAIgBAAQgKAAgDgGIgCgEIAAgBQgDgFAAgFIAAgBIAAgEIAAgBIABgFIAAAAIABgDIAAgBIAAgBIAAgCIAAgBIAThsIgCgDIgBgBIhGhFIgCgDIgMgOIgBgCIgBgDIgDgHIAAgBQAAgIAHgFIAOgHIB5gTIAAAAIAwhfIAGgNIABgBIABgBIAHgHIABgBIAAgBIABAAQACgDAEgBIACAAIAAAAIAEABIAEADIADACIABAAIADADIAKAOIACAFIAwBfIAEABIBgAOIAUAFIAOAIIADAEIABAEIABAEIAAABIgBAFQgDALgOAQIgDACIgEADIhCA8IgDADIAAABIARByIAAAAIAAABIACADIAAAAIAAAJIAAAAIgEAPIgFAEIgDACIgFAAg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjTgrQAAgIAGgGQAAAAAAAAIAOgGIAAAAIB3gTIABAAIAvheIAHgNIABgBIAAAAIABgBIAGgHIABgBQAAAAAAAAQAAgBABAAQACgDAEgBQABAAABAAIAAAAQACAAACABQACABACACIADACQAAAAABAAQABACACABQAFAHAFAIIACAEIAvBeIAAAAIAEABIBfAOIAAAAIAUAFIAAAAIANAHIAAAAIADAFIACADIAAAEQAAABAAAAQAAADAAACQgDAMgPAPQgBABgBABIgEADIhCA8IgDADIAAABIASBwIAAAAIAAABIABADIAAAAIAAAJIAAAAIgDAOIAAAAIgFAFIgEABIgFABIAAAAQgCAAgCAAQgJgCgNgHQgCAAgBgBIgDgCIhYgsIgBAAIAAABIhYAsIgDABQAAABgBAAQgSAJgLAAIgCAAQAAAAAAAAQgLAAgDgHQgBgCgBgCQAAAAAAgBQgCgFAAgFQAAAAAAgBQAAgBAAgCIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThrIgDgDIgBgBIhFhEIgCgDIgMgOIgBgCIgBgDIgCgHIAAAA");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCB852").s().p("AB5DNIgEAAQgJgCgNgHIgDgBIgDgCIhYgsIgBAAIAAABIhYAsIgDABIgBABQgSAJgLAAIgCAAIAAAAQgLAAgDgHIgCgEIAAgBQgCgFAAgFIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThrIgDgDIgBgBIhFhEIgCgDIgMgOIgBgCIgBgDIgCgHIAAAAQAAgIAGgGIAOgGIB3gTIABAAIAvheIAHgNIABgBIABgBIAGgHIABgBIAAAAIABgBQACgDAEgBIACAAIAAAAIAEABIAEADIADACIABAAIADADIAKAPIACAEIAvBeIAEABIBfAOIAUAFIANAHIADAFIACADIAAAEIAAABIAAAFQgDAMgPAPIgCACIgEADIhCA8IgDADIAAABIASBwIAAAAIAAABIABADIAAAAIAAAJIAAAAIgDAOIgFAFIgEABIgFABg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjRgrQAAgIAHgFQAAAAAAAAIAOgHIAAAAIB1gSIABAAIAvhcIAGgNIABgBIAAAAIABgCIAGgHIABAAQAAgBAAAAQAAAAABgBQACgCAEgBQABgBABAAIAAAAQACABACAAQACACACABIADACQAAAAABAAQABACACABQAFAHAEAIIACAEIAvBdIAAAAIAEABIBeAOIAAAAIATAFIAAAAIAOAHIAAAAIADAFIABADIABAEQAAAAAAABQAAACgBADQgDALgOAPQgBABgBABIgEADIhBA7IgDADIAAABIARBvIAAAAIAAABIACADIAAAAIAAAIIAAABIgEAOIAAAAIgFAFIgDABIgFABIgBAAQgCAAgCgBQgJgBgMgHQgCAAgBgBIgDgCIhXgsIgBAAIAAABIhXAsIgDABQAAABgBAAQgSAJgLAAIgCAAQAAAAAAAAQgKgBgDgGQgBgCgBgCQAAgBAAAAQgDgFAAgFQAAgBAAAAQAAgCAAgBIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThqIgDgDIgBgBIhEhDIgCgDIgLgNIgBgCIgBgDIgDgIIAAAA");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCB852").s().p("AB3DLIgEgBQgJgBgMgHIgDgBIgDgCIhXgsIgBAAIAAABIhXAsIgDABIgBABQgSAJgLAAIgCAAIAAAAQgKgBgDgGIgCgEIAAgBQgDgFAAgFIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThqIgDgDIgBgBIhEhDIgCgDIgLgNIgBgCIgBgDIgDgIIAAAAQAAgIAHgFIAOgHIB1gSIABAAIAvhcIAGgNIABgBIABgCIAGgHIABAAIAAgBIABgBQACgCAEgBIACgBIAAAAIAEABIAEADIADACIABAAIADADIAJAPIACAEIAvBdIAEABIBeAOIATAFIAOAHIADAFIABADIABAEIAAABIgBAFQgDALgOAPIgCACIgEADIhBA7IgDADIAAABIARBvIAAAAIAAABIACADIAAAAIAAAIIAAABIgEAOIgFAFIgDABIgFABg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAdioIAsBYIAEABIBdAOIAEABIAPADIAEACIAKAGIADAEIACAIIgBAFQgDAMgQAQIgEADIhDA9IABAFIAQBqIABAEIAAABIAAAEIAAADIgBAFIgCAKIgFAEIgIACIgFAAQgKgCgOgHIgDgCIhWgsIgCABIhXAtIgCABQgSAIgLAAIgCAAQgKAAgDgHQgEgHAAgIIAAgBIABgJIAAAAIABgDIAShtIgBgBIhFhEIgBgBIgNgQIgBgDIgEgJQAAgIAHgFIAOgHIB1gSIAuhcIAHgNIABgBIAHgJIABAAQAEgEAEAAIAEABIAIAFIADACIALATg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCB852").s().p("AByDIQgKgCgOgHIgDgCIhXgsIAAABIhYAtIgBABQgTAIgKAAIgDAAQgKAAgDgHQgEgHAAgIIAAgBIABgJIAAAAIABgDIAThtIgBgBIhGhEIgBgBIgNgQIgBgDIgDgJQAAgIAGgFIAOgHIB1gSIAuhcIAHgNIABgBIAHgJIABAAQAEgEADAAIAFABIAHAFIAEACIALATIACAEIAsBYIAEABIBdAOIAEABIAPADIAEACIAKAGIADAEIABAIIAAAFQgDAMgQAQIgFADIhDA9IABAFIARBqIABAEIAAABIAAAEIAAADIgBAFIgCAKIgFAEIgJACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},19).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).wait(1));

	// Layer 1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAdioIAsBYIAEABIBdAOIAEABIAPADIAEACIAKAGIADAEIACAIIgBAFQgDAMgQAQIgEADIhDA9IABAFIAQBqIABAEIAAABIAAAEIAAADIgBAFIgCAKIgFAEIgIACIgFAAQgKgCgOgHIgDgCIhWgsIgCABIhXAtIgCABQgSAIgLAAIgCAAQgKAAgDgHQgEgHAAgIIAAgBIABgJIAAAAIABgDIAShtIgBgBIhFhEIgBgBIgNgQIgBgDIgEgJQAAgIAHgFIAOgHIB1gSIAuhcIAHgNIABgBIAHgJIABAAQAEgEAEAAIAEABIAIAFIADACIALATg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCB852").s().p("AByDIQgKgCgOgHIgDgCIhXgsIAAABIhYAtIgBABQgTAIgKAAIgDAAQgKAAgDgHQgEgHAAgIIAAgBIABgJIAAAAIABgDIAThtIgBgBIhGhEIgBgBIgNgQIgBgDIgDgJQAAgIAGgFIAOgHIB1gSIAuhcIAHgNIABgBIAHgJIABAAQAEgEADAAIAFABIAHAFIAEACIALATIACAEIAsBYIAEABIBdAOIAEABIAPADIAEACIAKAGIADAEIABAIIAAAFQgDAMgQAQIgFADIhDA9IABAFIARBqIABAEIAAABIAAAEIAAADIgBAFIgCAKIgFAEIgJACg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjRgrQAAgIAGgFQAAAAAAAAIAPgHIAAAAIB1gSIABAAIAvhdIAGgNIABgBIAAAAIABgBIAGgHIABAAQAAgBAAAAQAAAAABgBQACgCAEgBQABgBABAAIAAAAQACABACAAQACACACABIADACQAAAAABAAQABACACABQAFAHAEAIIACAEIAvBdIAAAAIAEABIBeAOIAAAAIATAEIAAAAIAOAIIAAAAIADAFIABADIABAEQAAAAAAABQAAACAAADQgDALgPAPQgBABgBABIgEADIhBA7IgDADIAAABIARBvIAAAAIAAABIACADIAAAAIAAAJIAAAAIgEAOIAAAAIgEAFIgEABIgFABIAAAAQgCAAgDgBQgJgBgMgHQgCAAgBgBIgDgCIhXgsIgBAAIAAABIhYAsIgCABQAAABgBAAQgSAJgLAAIgCAAQAAAAAAAAQgKgBgEgGQgBgCAAgCQAAgBAAAAQgDgFAAgFQAAgBAAAAQAAgCAAgBIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThqIgDgDIgBgBIhEhDIgCgDIgLgNIgBgCIgBgDIgDgIIAAAA");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCB852").s().p("AB4DLIgFgBQgJgBgMgHIgDgBIgDgCIhXgsIgBAAIAAABIhYAsIgCABIgBABQgSAJgLAAIgCAAIAAAAQgKgBgEgGIgBgEIAAgBQgDgFAAgFIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThqIgDgDIgBgBIhEhDIgCgDIgLgNIgBgCIgBgDIgDgIIAAAAQAAgIAGgFIAPgHIB1gSIABAAIAvhcIAGgOIABgBIABgBIAGgHIABAAIAAgBIABgBQACgCAEgBIACgBIAAAAIAEABIAEADIADACIABAAIADADIAJAPIACAEIAvBdIAEABIBeAOIATAEIAOAIIADAFIABADIABAEIAAABIAAAFQgDALgPAPIgCACIgEADIhBA7IgDADIAAABIARBvIAAAAIAAABIACADIAAAAIAAAIIAAABIgEAOIgEAFIgEABIgFABg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjUgrQAAgJAHgFQAAAAAAAAIAOgGIAAAAIB3gTIABAAIAvheIAHgNIABgBIAAAAIABgBIAGgHIABgBQAAAAAAgBQAAAAABAAQACgDAEgBQABAAABAAIAAAAQACAAACABQACABACACIADACQAAAAABAAQABABACACQAFAHAFAHIACAEIAvBfIAAAAIAEABIBfAOIAAAAIAUAFIAAAAIAOAHIAAAAIADAFIABADIABAEQAAABAAAAQAAADgBACQgDAMgPAPQgBABgBABIgEADIhBA8IgDADIgBABIASBwIAAAAIAAABIABADIAAABIAAAIIAAAAIgDAPIAAAAIgFAEIgDABIgFABIgBAAQgCAAgCAAQgJgCgNgGQgCgBgBAAIgDgCIhYgtIgBAAIAAABIhZAtIgCABQAAAAgBAAQgTAJgKAAIgCAAQAAAAAAAAQgLAAgDgGQgBgCgBgCQAAgBAAAAQgCgFgBgGQAAAAAAgBQAAgBAAgCIAAgBIABgFIAAAAIABgDIAAgBIAAgBIAAgCIAAgBIAThrIgCgDIgBgBIhFhEIgDgDIgLgOIgBgCIgBgDIgDgHIAAAA");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCB852").s().p("AB5DNIgEAAQgJgCgNgGIgDgBIgDgCIhYgtIgBAAIAAABIhZAtIgCABIgBAAQgSAJgLAAIgCAAIAAAAQgLAAgDgGIgCgEIAAgBQgCgFgBgGIAAgBIAAgDIAAgBIABgFIAAAAIABgDIAAgBIAAgBIAAgCIAAgBIAThrIgCgDIgBgBIhFhEIgDgDIgLgOIgBgCIgBgDIgDgHIAAAAQAAgJAHgFIAOgGIB3gTIABAAIAvheIAHgNIABgBIABgBIAGgHIABgBIAAgBIABAAQACgDAEgBIACAAIAAAAIAEABIAEADIADACIABAAIADADIAKAOIACAEIAvBfIAEABIBfAOIAUAFIAOAHIADAFIABADIABAEIAAABIgBAFQgDAMgPAPIgCACIgEADIhBA8IgDADIgBABIASBwIAAAAIAAABIABADIAAABIAAAIIAAAAIgDAPIgFAEIgDABIgFABg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjWgsQAAgIAGgFQAAAAAAAAIAPgHIAAAAIB4gTIABAAIAwhfIAGgNIABgBIAAAAIABgBIAHgIIABAAQAAgBAAAAQAAAAABgBQACgCAEgBQABgBABAAIAAAAQACABACAAQACACADABIACACQABAAAAABQACABABABQAFAIAFAHIACAEIAwBgIAAAAIAEABIBgAOIAAAAIAUAFIAAAAIAOAIIAAAAIADAEIABAEIABAEQAAAAAAABQAAACAAADQgDALgPAQQgBABgBABIgEADIhDA8IgDADIAAABIASByIAAABIAAAAIABADIAAABIAAAIIAAABIgEAOIAAAAIgEAFIgEABIgFABIAAAAQgCAAgDgBQgJgBgNgHQgBAAgCgBIgDgCIhZgtIgBAAIAAABIhaAtIgCABQAAAAgBABQgTAJgLAAIgCAAQAAAAAAAAQgKgBgEgGQgBgCAAgCQAAAAAAgBQgDgFAAgFQAAAAAAgBQAAgCAAgBIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThtIgDgDIAAgBIhHhFIgCgDIgLgOIgBgCIgBgDIgDgHIAAgB");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCB852").s().p("AB7DQIgFgBQgJgBgNgHIgDgBIgDgCIhZgtIgBAAIAAABIhaAtIgCABIgBABQgTAJgLAAIgCAAIAAAAQgKgBgEgGIgBgEIAAgBQgDgFAAgFIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgCIAAgBIAThtIgDgDIAAgBIhHhFIgCgDIgLgOIgBgCIgBgDIgDgHIAAgBQAAgIAGgFIAPgHIB4gTIABAAIAwhfIAGgNIABgBIABgBIAHgIIABAAIAAgBIABgBQACgCAEgBIACgBIAAAAIAEABIAFADIACACIABABIADACIAKAPIACAEIAwBgIAEABIBgAOIAUAFIAOAIIADAEIABAEIABAEIAAABIAAAFQgDALgPAQIgCACIgEADIhDA8IgDADIAAABIASByIAAABIAAAAIABADIAAABIAAAIIAAABIgEAOIgEAFIgEABIgFABg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjZgsQAAgJAHgFQAAAAAAAAIAOgHIAAAAIB7gTIAAAAIAxhgIAGgOIABgBIAAAAIABgBIAHgHIABgBQAAAAAAgBQAAAAABAAQACgDAEgBQABAAABAAIAAAAQACAAACABQACABADACIACACQABAAAAAAQACACABABQAGAHAEAIIACAEIAxBhIAAAAIAEABIBiAOIAAAAIAUAFIAAAAIAOAIIAAAAIADAFIABADIABAEQAAABAAAAQAAADgBADQgDALgPAPQgBABgBACIgEADIhDA9IgDADIgBABIASB0IAAAAIAAAAIACADIAAABIAAAIIAAABIgEAPIAAAAIgFAEIgDACIgFAAIgBAAQgCAAgCAAQgJgCgOgGQgBgBgCAAIgDgCIhaguIgBAAIAAABIhbAtIgCABQAAABgBAAQgTAJgLAAIgCAAQAAAAAAAAQgLAAgDgGQgBgCgBgCQAAAAAAgBQgDgFAAgFQAAgBAAAAQAAgCAAgCIAAgBIABgFIAAAAIABgDIAAgCIAAAAIAAgCIAAgBIAThuIgCgDIgBgBIhHhGIgCgDIgMgOIgBgCIgBgDIgDgHIAAgB");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCB852").s().p("AB8DSIgEAAQgJgCgOgGIgDgBIgDgCIhaguIgBAAIAAABIhbAtIgCABIgBABQgTAJgLAAIgCAAIAAAAQgLAAgDgGIgCgEIAAgBQgDgFAAgFIAAgBIAAgEIAAgBIABgFIAAAAIABgDIAAgCIAAAAIAAgCIAAgBIAThuIgCgDIgBgBIhHhGIgCgDIgMgOIgBgCIgBgDIgDgHIAAgBQAAgJAHgFIAOgHIB7gTIAAAAIAxhgIAGgOIABgBIABgBIAHgHIABgBIAAgBIABAAQACgDAEgBIACAAIAAAAIAEABIAFADIACACIABAAIAEADIAJAPIACAEIAxBhIAEABIBiAOIAUAFIAOAIIADAFIABADIABAEIAAABIgBAGQgDALgPAPIgCADIgEADIhDA9IgDADIgBABIASB0IAAAAIAAAAIACADIAAABIAAAIIAAABIgEAPIgFAEIgDACIgFAAg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjcgtQAAgIAHgGQAAAAAAAAIAPgHIAAAAIB8gTIAAAAIAxhiIAHgNIABgBIAAAAIABgBIAGgIIABAAQABgBAAAAQAAAAABgBQACgCAEgBQABgBABAAIAAAAQACAAACABQADACACABIACACQABABAAAAQACABACABQAFAIAFAIIACAEIAxBiIAAAAIAEABIBjAPIAAAAIAUAEIAAAAIAOAIIAAAAIADAFIACADIABAFQAAAAAAABQAAACgBADQgDAMgPAPQgBABgBABIgEAEIhFA+IgDADIAAABIASB1IAAAAIAAAAIABADIAAABIAAAJIAAAAIgDAPIAAAAIgFAFIgEABIgFABIAAAAQgCAAgDgBQgJgBgOgHQgBAAgCgBIgDgCIhbgvIgBAAIAAABIhcAvIgCABQAAAAgBABQgTAJgLAAIgCAAQAAAAgBAAQgKAAgEgGQgBgCAAgCQgBgBAAAAQgCgGgBgFQAAAAAAgBQAAgBAAgCIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgDIAAgBIAUhvIgCgDIgBgBIhIhHIgCgDIgMgOIgBgCIgBgDIgDgIIgBgB");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCB852").s().p("AB+DVIgFgBQgJgBgOgHIgDgBIgDgCIhbgvIgBAAIAAABIhcAvIgCABIgBABQgTAJgLAAIgCAAIgBAAQgKAAgEgGIgBgEIgBgBQgCgGgBgFIAAgBIAAgDIAAgBIABgFIAAgBIABgDIAAgBIAAAAIAAgDIAAgBIAUhvIgCgDIgBgBIhIhHIgCgDIgMgOIgBgCIgBgDIgDgIIgBgBQAAgIAHgGIAPgHIB8gTIAAAAIAxhhIAHgOIABgBIABgBIAGgIIABAAIABgBIABgBQACgCAEgBIACgBIAAAAIAEABIAFADIACACIABABIAEACIAKAQIACAEIAxBiIAEABIBjAPIAUAEIAOAIIADAFIACADIABAFIAAABIgBAFQgDAMgPAPIgCACIgEAEIhFA+IgDADIAAABIASB1IAAAAIAAAAIABADIAAABIAAAIIAAABIgDAPIgFAFIgEABIgFABg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjegtQAAgJAHgGQAAAAAAAAIAPgHIAAAAIB9gTIABAAIAxhjIAHgNIABgBIAAAAIABgCIAGgHIABgBQAAAAABgBQAAAAABAAQACgDAEgBQABAAABAAIAAAAQACAAACABQADABACACIADACQAAAAABAAQABACACABQAFAHAFAIIACAFIAxBjIAAAAIAFABIBkAPIAAAAIAUAFIAAAAIAPAIIAAAAIADAFIABADIABAEQAAABAAAAQAAADAAADQgEALgPAQQgBABgBABIgEAEIhFA+IgDADIgBABIATB3IAAAAIAAAAIABAEIAAAAIAAAJIAAAAIgEAQIAAAAIgFAEIgDACIgFAAIgBAAQgCAAgCAAQgKgCgNgGQgCgBgBAAIgEgCIhcgwIgBAAIAAABIhdAvIgCABQgBABAAAAQgUAJgLAAIgCAAQAAAAAAAAQgKAAgEgGQgBgCgBgCQAAAAAAgBQgDgFgBgFQAAgBAAAAQAAgCAAgCIAAgBIABgFIAAAAIABgDIAAgCIAAAAIAAgCIAAgBIAUhxIgCgDIAAgBIhJhIIgCgDIgMgOIgCgCIgBgDIgDgIIAAgB");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCB852").s().p("AB/DXIgEAAQgKgCgNgGIgDgBIgEgCIhcgwIgBAAIAAABIhdAvIgCABIgBABQgUAJgLAAIgCAAIAAAAQgKAAgEgGIgCgEIAAgBQgDgFgBgFIAAgBIAAgEIAAgBIABgFIAAAAIABgDIAAgCIAAAAIAAgCIAAgBIAUhxIgCgDIAAgBIhJhIIgCgDIgMgOIgCgCIgBgDIgDgIIAAgBQAAgJAHgGIAPgHIB9gTIABAAIAxhjIAHgNIABgBIABgCIAGgHIABgBIABgBIABAAQACgDAEgBIACAAIAAAAIAEABIAFADIADACIABAAIADADIAKAPIACAFIAxBjIAFABIBkAPIAUAFIAPAIIADAFIABADIABAEIAAABIAAAGQgEALgPAQIgCACIgEAEIhFA+IgDADIgBABIATB3IAAAAIAAAAIABAEIAAAAIAAAJIAAAAIgEAQIgFAEIgDACIgFAAg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjhguQAAgJAHgFQAAAAAAAAIAPgHIAAAAIB/gUIABAAIAyhkIAHgOIAAgBIAAAAIABgBIAHgIIABAAQAAgBABAAQAAAAABgBQACgDAEgBQABAAABAAIAAAAQACAAACABQADABACACIADADQAAAAABAAQACABABACQAFAHAFAIIACAFIAyBkIAAAAIAFABIBlAPIAAAAIAVAFIAAAAIAOAIIAAAAIAEAFIABADIABAFQAAAAAAABQAAADgBACQgDAMgPAQQgBABgCABIgEADIhGBAIgDADIAAABIASB4IAAAAIAAAAIACAEIAAAAIAAAJIAAABIgEAPIAAAAIgFAEIgEACIgFABIAAAAQgCAAgDAAQgJgCgOgHQgCgBgBAAIgDgCIhegwIgBAAIAAABIheAwIgCABQgBAAAAAAQgUAKgLAAIgCAAQAAAAAAAAQgLAAgEgGQgBgCgBgCQAAAAAAgBQgDgFAAgGQAAAAAAgBQAAgBAAgCIAAgBIABgGIAAAAIAAgDIAAgCIAAAAIABgCIAAgBIAUhxIgCgEIgBgBIhJhIIgDgDIgMgPIgBgCIgBgDIgDgIIgBgC");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FCB852").s().p("ACBDaIgFAAQgJgCgOgHIgDgBIgDgCIhegwIgBAAIAAABIheAwIgCABIgBAAQgUAKgLAAIgCAAIAAAAQgLAAgEgGIgCgEIAAgBQgDgFAAgGIAAgBIAAgDIAAgBIABgGIAAAAIAAgDIAAgCIAAAAIABgCIAAgBIAUhxIgCgEIgBgBIhJhIIgDgDIgMgPIgBgCIgBgDIgDgIIgBgCQAAgJAHgFIAPgHIB/gUIABAAIAyhkIAHgOIAAgBIABgBIAHgIIABAAIABgBIABgBQACgDAEgBIACAAIAAAAIAEABIAFADIADADIABAAIADADIAKAPIACAFIAyBkIAFABIBlAPIAVAFIAOAIIAEAFIABADIABAFIAAABIgBAFQgDAMgPAQIgDACIgEADIhGBAIgDADIAAABIASB4IAAAAIAAAAIACAEIAAAAIAAAJIAAABIgEAPIgFAEIgEACIgFABg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjjgvQAAgIAHgGQAAAAAAAAIAPgHIAAAAICAgUIABAAIAyhlIAHgOIABgBIAAAAIABgBIAHgIIABgBQAAAAAAgBQABAAAAAAQADgDAEgBQABAAABgBIAAAAQACABADAAQACACACACIADACQABAAAAAAQACACACABQAFAHAFAJIACAEIAyBmIAAAAIAFABIBmAPIAAAAIAVAFIAAAAIAPAIIAAAAIADAFIACAEIAAAEQAAABAAAAQAAADAAADQgDAMgQAPQgBACgBABIgEADIhHBBIgDADIgBABIATB5IAAAAIAAAAIACAEIAAAAIAAAJIAAABIgEAPIAAAAIgFAFIgEACIgFABIgBAAQgCAAgCgBQgKgBgOgIQgBAAgCgBIgDgCIhfgwIgBAAIAAABIhfAwIgCABQgBAAAAABQgUAJgLABIgCAAQgBAAAAAAQgKgBgEgFQgCgCAAgCQAAgBgBAAQgDgGAAgFQAAgBAAAAQAAgCAAgCIAAgBIABgFIAAAAIABgDIAAgCIAAAAIAAgDIAAgBIAUhyIgBgEIgBgBIhLhJIgCgDIgMgPIgBgCIgCgDIgDgIIAAgD");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCB852").s().p("ACCDdIgEgBQgKgBgOgIIgDgBIgDgCIhfgwIgBAAIAAABIhfAwIgCABIgBABQgUAJgLABIgCAAIgBAAQgKgBgEgFIgCgEIgBgBQgDgGAAgFIAAgBIAAgEIAAgBIABgFIAAAAIABgDIAAgCIAAAAIAAgDIAAgBIAUhyIgBgEIgBgBIhLhJIgCgDIgMgPIgBgCIgCgDIgDgIIAAgDQAAgIAHgGIAPgHICAgUIABAAIAyhlIAHgOIABgBIABgBIAHgIIABgBIAAgBIABAAQADgDAEgBIACgBIAAAAIAFABIAEAEIADACIABAAIAEADIAKAQIACAEIAyBmIAFABIBmAPIAVAFIAPAIIADAFIACAEIAAAEIAAABIAAAGQgDAMgQAPIgCADIgEADIhHBBIgDADIgBABIATB5IAAAAIAAAAIACAEIAAAAIAAAJIAAABIgEAPIgFAFIgEACIgFABg");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjmgvQAAgJAHgGQAAAAAAAAIAQgHIAAAAICBgUIABAAIAzhnIAHgNIABgBIAAAAIABgCIAHgIIABAAQAAgBAAAAQABAAAAgBQADgDAEgBQABAAABAAIAAAAQACAAADABQACABADACIACADQABAAAAAAQACACACABQAFAHAFAJIACAEIAzBnIAAAAIAFABIBnAPIAAAAIAVAFIAAAAIAPAIIAAAAIAEAGIABADIABAFQAAAAAAABQAAADgBADQgDAMgPAPQgCABgBACIgEADIhHBBIgEADIAAABIATB7IAAAAIAAABIABADIAAABIAAAJIAAAAIgEAQIAAAAIgFAEIgDACIgGABIAAAAQgCAAgDAAQgKgCgOgHQgBgBgCAAIgDgCIhggxIgBAAIAAABIhgAwIgCABQgBABAAAAQgUAKgMAAIgCAAQAAAAAAAAQgKAAgFgGQgBgBgBgCQAAgBAAAAQgDgGgBgFQAAgBAAAAQAAgCAAgCIAAgBIABgGIAAAAIABgDIAAgCIAAAAIAAgDIAAgBIAUhzIgBgEIAAgBIhMhKIgCgDIgMgQIgCgCIgBgDIgDgIIgBgC");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FCB852").s().p("ACEDfIgFAAQgKgCgOgHIgDgBIgDgCIhggxIgBAAIAAABIhgAwIgCABIgBABQgUAKgMAAIgCAAIAAAAQgKAAgFgGIgCgDIAAgBQgDgGgBgFIAAgBIAAgEIAAgBIABgGIAAAAIABgDIAAgCIAAAAIAAgDIAAgBIAUhzIgBgEIAAgBIhMhKIgCgDIgMgQIgCgCIgBgDIgDgIIgBgCQAAgJAHgGIAQgHICBgUIABAAIAzhnIAHgNIABgBIABgCIAHgIIABAAIAAgBIABgBQADgDAEgBIACAAIAAAAIAFABIAFADIACADIABAAIAEADIAKAQIACAEIAzBnIAFABIBnAPIAVAFIAPAIIAEAGIABADIABAFIAAABIgBAGQgDAMgPAPIgDADIgEADIhHBBIgEADIAAABIATB7IAAAAIAAABIABADIAAABIAAAIIAAABIgEAQIgFAEIgDACIgGABg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjpgwQAAgJAIgFQAAAAAAAAIAPgIIAAAAICDgUIABAAIAzhoIAIgOIABgBIAAAAIABgBIAHgIIABgBQAAAAAAgBQABAAAAAAQADgDAEgBQABAAABgBIAAAAQACABADAAQACACADACIACACQABAAAAABQACABACACQAFAHAFAJIACAEIA0BoIAAAAIAFABIBoAPIAAAAIAWAFIAAAAIAPAJIAAAAIADAFIACAEIABAEQAAABAAAAQAAADgBADQgDAMgQAQQgBABgBACIgEADIhJBCIgDADIgBABIATB8IAAAAIAAABIACADIAAABIAAAJIAAAAIgEAQIAAAAIgFAFIgEACIgFABIgBAAQgCAAgCgBQgKgBgPgIQgBAAgCgBIgDgCIhhgxIgBAAIAAABIhhAxIgCABQgBAAAAAAQgVAKgLABIgCAAQAAAAgBAAQgKgBgEgFQgCgCAAgCQgBAAAAgBQgDgFgBgGQAAAAAAgBQAAgCAAgCIAAgBIABgFIAAAAIABgDIAAgCIAAgBIAAgCIAAgBIAVh1IgBgEIgBgBIhMhLIgDgDIgMgQIgBgCIgCgDIgDgIIgBgD");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCB852").s().p("ACFDiIgEgBQgKgBgPgIIgDgBIgDgCIhhgxIgBAAIAAABIhhAxIgCABIgBAAQgUAKgMABIgCAAIgBAAQgKgBgEgFIgCgEIgBgBQgDgFgBgGIAAgBIAAgEIAAgBIABgFIAAAAIABgDIAAgCIAAgBIAAgCIAAgBIAVh1IgBgEIgBgBIhMhLIgCgDIgNgQIgBgCIgCgDIgDgIIgBgDQAAgJAIgFIAPgIICDgUIABAAIAzhoIAIgOIABgBIABgBIAHgIIABgBIAAgBIABAAQADgDAEgBIACgBIAAAAIAFABIAFAEIACACIABABIAEADIAKAQIACAEIA0BoIAFABIBoAPIAWAFIAPAJIADAFIACAEIABAEIAAABIgBAGQgDAMgQAQIgCADIgEADIhJBCIgDADIgBABIATB8IAAAAIAAABIACADIAAABIAAAJIAAAAIgEAQIgFAFIgEACIgFABg");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjrgwQAAgJAHgGQAAAAAAAAIAQgIIAAAAICFgUIAAAAIA0hpIAIgOIABgBIAAAAIABgBIAHgJIABAAQAAgBAAAAQABAAAAgBQADgDAEgBQABAAABAAIAAAAQACAAADABQACABADACIADADQAAAAABAAQABACACABQAGAHAFAJIACAFIA0BpIAAAAIAFABIBqAQIAAAAIAVAFIAAAAIAPAIIAAAAIAEAFIACAEIAAAFQAAAAAAABQAAADAAADQgEAMgPAQQgCABgBABIgEAEIhJBDIgEADIAAABIATB9IAAABIAAAAIACADIAAABIAAAJIAAABIgEAQIAAAAIgGAEIgDACIgGABIAAAAQgCAAgDAAQgKgCgOgHQgCgBgBAAIgEgCIhigzIgBAAIAAABIhiAyIgDABQAAAAgBABQgUAKgLAAIgCAAQgBAAAAAAQgKAAgFgFQgBgCgBgCQAAgBgBAAQgDgGAAgFQAAgBAAAAQgBgCAAgCIAAgBIABgGIAAAAIABgDIAAgCIAAAAIABgDIAAgBIAUh2IAAgEIgBgBIhNhMIgDgDIgMgQIgCgCIgBgDIgDgIIgBgD");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FCB852").s().p("ACHDkIgFAAQgKgCgOgHIgDgBIgEgCIhigzIgBAAIAAABIhiAyIgDABIgBABQgUAKgLAAIgCAAIgBAAQgKAAgFgFIgCgEIgBgBQgDgGAAgFIAAgBIgBgEIAAgBIABgGIAAAAIABgDIAAgCIAAAAIABgDIAAgBIAUh2IAAgEIgBgBIhNhMIgDgDIgMgQIgCgCIgBgDIgDgIIgBgDQAAgJAHgGIAQgIICFgUIAAAAIA0hpIAIgOIABgBIABgBIAHgJIABAAIAAgBIABgBQADgDAEgBIACAAIAAAAIAFABIAFADIADADIABAAIADADIALAQIACAFIA0BpIAFABIBqAQIAVAFIAPAIIAEAFIACAEIAAAFIAAABIAAAGQgEAMgPAQIgDACIgEAEIhJBDIgEADIAAABIATB9IAAABIAAAAIACADIAAABIAAAJIAAABIgEAQIgGAEIgDACIgGABg");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjugxQAAgJAIgGQAAAAAAAAIAPgHIAAAAICHgVIAAAAIA1hqIAIgPIAAgBIAAAAIABgBIAIgIIABgBQAAAAAAgBQABAAAAAAQADgDAEgBQABAAABgBIAAAAQACAAADABQACACADACIADACQAAABABAAQACABABACQAGAHAFAJIACAFIA1BqIAAAAIAFABIBrAQIAAAAIAWAFIAAAAIAPAIIAAAAIAEAGIABADIABAFQAAABAAAAQAAADgBADQgDANgQAQQgBABgCABIgEAEIhKBDIgDADIgBABIAUB/IAAABIAAAAIABADIAAABIAAAJIAAABIgEAQIAAAAIgFAFIgEACIgFABIgBAAQgCAAgCgBQgKgBgPgIQgCAAgBgBIgEgCIhjgzIgBAAIAAABIhjAzIgDABQAAAAgBAAQgUAKgMABIgCAAQAAAAAAAAQgLAAgEgGQgCgBgBgCQAAgBAAAAQgDgGgBgGQAAAAAAgBQAAgBAAgDIAAgBIABgFIAAAAIAAgDIAAgDIAAAAIABgDIAAgBIAVh3IgBgFIAAgBIhOhMIgDgDIgNgQIgBgCIgCgDIgDgJIgBgD");

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCB852").s().p("ACIDnIgEgBQgKgBgPgIIgDgBIgEgCIhjgzIgBAAIAAABIhjAzIgDABIgBAAQgUAKgMABIgCAAIAAAAQgLAAgEgGIgDgDIAAgBQgDgGgBgGIAAgBIAAgEIAAgBIABgFIAAAAIAAgDIAAgDIAAAAIABgDIAAgBIAVh3IgBgFIAAgBIhOhMIgDgDIgNgQIgBgCIgCgDIgDgJIgBgDQAAgJAIgGIAPgHICHgVIAAAAIA1hqIAIgPIAAgBIABgBIAIgIIABgBIAAgBIABAAQADgDAEgBIACgBIAAAAIAFABIAFAEIADACIABABIAEADIAKAQIACAFIA1BqIAFABIBrAQIAWAFIAPAIIAEAGIABADIABAFIAAABIgBAGQgDANgQAQIgDACIgEAEIhKBDIgDADIgBABIAUB/IAAABIAAAAIABADIAAABIAAAJIAAABIgEAQIgFAFIgEACIgFABg");

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjxgxQAAgKAIgGQAAAAAAAAIAQgHIAAAAICIgVIAAAAIA1hsIAIgOIABgBIAAAAIABgBIAHgJIABAAQABgBAAAAQABAAAAgBQADgDAEgBQABAAABAAIAAAAQACAAADABQADABACACIADADQABAAAAAAQACACACACQAFAGAFAKIACAFIA2BrIAAAAIAEABIBtAQIAAAAIAWAFIAAAAIAQAJIAAAAIADAFIACAEIABAFQAAAAAAABQAAADgBADQgEAMgQAQQgBACgBABIgEAEIhLBEIgEADIgBABIAUCAIAAABIAAAAIACAEIAAAAIAAAKIAAAAIgEARIAAAAIgGAEIgDADIgGAAIAAAAQgCAAgDAAQgKgCgPgHQgBgBgCAAIgEgCIhkg0IgBAAIAAABIhkAzIgDABQAAAAgBAAQgUALgMAAIgCAAQAAAAgBAAQgKAAgFgFQgBgCgBgCQgBAAAAgBQgDgFgBgGQAAgBAAAAQAAgCAAgCIAAgBIABgGIAAAAIABgDIAAgCIAAgBIAAgCIAAgBIAVh5IAAgFIAAgBIhQhNIgCgDIgNgQIgCgCIgBgDIgDgJIgCgD");

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FCB852").s().p("ACKDpIgFAAQgKgCgPgHIgDgBIgEgCIhkg0IgBAAIAAABIhkAzIgDABIgBAAQgUALgMAAIgCAAIgBAAQgKAAgFgFIgCgEIgBgBQgDgFgBgGIAAgBIAAgEIAAgBIABgGIAAAAIABgDIAAgCIAAgBIAAgCIAAgBIAVh5IAAgFIAAgBIhQhNIgCgDIgNgQIgCgCIgBgDIgDgJIgCgDQAAgKAIgGIAQgHICIgVIAAAAIA1hsIAIgOIABgBIABgBIAHgJIABAAIABgBIABgBQADgDAEgBIACAAIAAAAIAFABIAFADIADADIABAAIAEAEQAFAGAFAKIACAFIA2BrIAEABIBtAQIAWAFIAQAJIADAFIACAEIABAFIAAABIgBAGQgEAMgQAQIgCADIgEAEIhLBEIgEADIgBABIAUCAIAAABIAAAAIACAEIAAAAIAAAJIAAABIgEARIgGAEIgDADIgGAAg");

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjzgyQAAgJAHgGQAAAAAAAAIARgIIAAAAICJgVIAAAAIA2htIAIgOIABgBIAAAAIABgCIAHgIIABgBQABAAAAgBQABAAAAAAQADgDAEgBQABAAABgBIAAAAQACAAADABQADACACACIADACQABABAAAAQACACACABQAFAHAGAKIACAEIA2BtIAAAAIAEABIBuAQIAAAAIAWAFIAAAAIAQAJIAAAAIAEAGIACADIAAAFQAAABAAAAQAAADgBAEQgDAMgQAQQgBABgCACIgEAEIhMBFIgDADIgBABIAUCBIAAABIAAAAIACAEIAAAAIAAAKIAAAAIgEARIAAAAIgGAFIgEACIgFABIgBAAQgCAAgCgBQgLgBgPgIQgBAAgCgBIgDgCIhmg0IgBAAIAAABIhlAzIgDABQAAABgBAAQgVAKgLABIgCAAQgBAAAAAAQgKAAgFgFQgCgCgBgCQAAAAgBgBQgDgGgBgFQAAgBAAAAQAAgCAAgDIAAgBIABgFIAAAAIABgDIAAgDIAAAAIAAgDIAAgBIAWh6IAAgFIgBgBIhQhOIgDgDIgMgQIgCgCIgBgDIgEgJIgBgE");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FCB852").s().p("ACLDsIgEgBQgLgBgPgIIgDgBIgDgCIhmg0IgBAAIAAABIhlAzIgDABIgBABQgVAKgLABIgCAAIgBAAQgKAAgFgFIgDgEIgBgBQgDgGgBgFIAAgBIAAgFIAAgBIABgFIAAAAIABgDIAAgDIAAAAIAAgDIAAgBIAWh6IAAgFIgBgBIhQhOIgCgDIgNgQIgCgCIgBgDIgEgJIgBgEQAAgJAHgGIARgIICJgVIAAAAIA2htIAIgOIABgBIABgCIAHgIIABgBIABgBIABAAQADgDAEgBIACgBIAAAAIAFABIAFAEIADACIABABIAEADQAFAHAGAKIACAEIA2BtIAEABIBuAQIAWAFIAQAJIAEAGIACADIAAAFIAAABIgBAHQgDAMgQAQIgDADIgEAEIhMBFIgDADIgBABIAUCBIAAABIAAAAIACAEIAAAAIAAAKIAAAAIgEARIgGAFIgEACIgFABg");

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj2gyQAAgKAIgGQAAAAAAAAIAQgIIAAAAICLgVIAAAAIA3huIAIgPIABgBIAAAAIABgBIAHgJIABAAQABgBAAAAQABAAAAgBQADgDAEgBQABAAABAAIAAAAQACAAADABQADABADACIACADQABAAAAABQACABACACQAGAHAFAJIACAFIA3BuIAAAAIAEABIBvAQIAAAAIAXAGIAAAAIAQAIIAAAAIADAGIACAEIABAFQAAAAAAABQAAADgBADQgEANgQAQQgBABgBACIgEADIhNBGIgEADIgBABIAVCDIAAABIAAAAIABAEIAAAAIAAAKIAAABIgEARIAAAAIgGAEIgDADIgGAAIAAAAQgCAAgDAAQgKgCgQgHQgBgBgCAAIgDgCIhng1IgBAAIAAABIhmA0IgDABQAAAAgBAAQgVALgMAAIgCAAQAAAAgBAAQgKAAgFgFQgBgBgBgCQgBgBAAAAQgDgGgBgGQAAAAAAgBQgBgCAAgCIAAgBIABgGIAAAAIABgDIAAgDIAAAAIABgDIAAgBIAVh7IAAgFIAAgBIhRhPIgDgDIgNgQIgCgCIgBgDIgDgJIgCgE");

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FCB852").s().p("ACNDuIgFAAQgKgCgQgHIgDgBIgDgCIhng1IgBAAIAAABIhmA0IgDABIgBAAQgVALgMAAIgCAAIgBAAQgKAAgFgFIgCgDIgBgBQgDgGgBgGIAAgBIgBgEIAAgBIABgGIAAAAIABgDIAAgDIAAAAIABgDIAAgBIAVh7IAAgFIAAgBIhRhPIgDgDIgNgQIgCgCIgBgDIgDgJIgCgEQAAgKAIgGIAQgIICLgVIAAAAIA3huIAIgPIABgBIABgBIAHgJIABAAIABgBIABgBQADgDAEgBIACAAIAAAAIAFABIAGADIACADIABABIAEADQAGAHAFAJIACAFIA3BuIAEABIBvAQIAXAGIAQAIIADAGIACAEIABAFIAAABIgBAGQgEANgQAQIgCADIgEADIhNBGIgEADIgBABIAVCDIAAABIAAAAIABAEIAAAAIAAAKIAAAAIgEASIgGAEIgDADIgGAAg");

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj4gzQAAgKAHgGQAAAAAAAAIARgIIAAAAICMgVIAAAAIA3hvIAJgPIAAgBIAAAAIABgBIAIgJIABgBQABAAAAgBQAAAAABAAQADgDAEgBQABAAABgBIAAAAQACAAADABQADACADACIADACQAAABABAAQACACACACQAFAGAFAKIACAFIA4BvIAAAAIAEABIBwAQIAAAAIAXAGIAAAAIAQAJIAAAAIAEAFIACAEIAAAFQAAABAAAAQAAADgBAEQgDAMgQARQgCABgBACIgEADIhNBHIgEADIgBABIAUCEIAAABIAAAAIACAEIAAABIAAAJIAAABIgEARIAAAAIgGAFIgDACIgGABIgBAAQgCAAgCgBQgLgBgPgIQgCAAgBgBIgEgCIhng1IgBAAIgBABIhnA0IgDABQAAAAgBAAQgVALgMABIgCAAQgBAAAAAAQgKAAgFgFQgCgCgBgCQAAAAgBgBQgDgFgBgGQAAgBAAAAQAAgCAAgDIAAgBIABgFIAAAAIAAgDIAAgDIAAgBIABgCIAAgBIAVh9IABgFIAAgBIhShQIgDgDIgNgRIgCgCIgBgDIgEgJIgBgE");

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FCB852").s().p("ACODxIgEgBQgLgBgPgIIgDgBIgEgCIhng1IgBAAIgBABIhnA0IgDABIgBAAQgVALgMABIgCAAIgBAAQgKAAgFgFIgDgEIgBgBQgDgFgBgGIAAgBIAAgFIAAgBIABgFIAAAAIAAgDIAAgDIAAgBIABgCIAAgBIAVh9IABgFIAAgBIhShQIgDgDIgNgRIgCgCIgBgDIgEgJIgBgEQAAgKAHgGIARgIICMgVIAAAAIA3hvIAJgPIAAgBIABgBIAIgJIABgBIABgBIABAAQADgDAEgBIACgBIAAAAIAFABIAGAEIADACIABABIAEAEQAFAGAFAKIACAFIA4BvIAEABIBwAQIAXAGIAQAJIAEAFIACAEIAAAFIAAABIgBAHQgDAMgQARIgDADIgEADIhNBHIgEADIgBABIAUCEIAAABIAAAAIACAEIAAABIAAAJIAAABIgEARIgGAFIgDACIgGABg");

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj7gzQAAgKAIgHQAAAAAAAAIARgHIAAAAICNgWIABAAIA3hxIAJgOIAAgBIAAAAIABgCIAIgJIABAAQAAgBABAAQAAAAABgBQADgDAEgBQABAAABAAIAAAAQACAAADABQADABADACIADADQAAAAABABQACABACACQAFAHAGAKIACAFIA3BwIAAAAIAFABIBxARIAAAAIAXAFIAAAAIARAJIAAAAIAEAGIABAEIABAFQAAAAAAABQAAADgBADQgDANgRAQQgBACgCABIgEAEIhOBIIgEADIgBABIAVCFIAAABIAAAAIACAEIAAABIAAAJIAAABIgFASIAAAAIgFAEIgEADIgGAAIAAAAQgCAAgDAAQgLgCgPgHQgCgBgBAAIgEgCIhog3IgBAAIgBABIhoA2IgDABQgBAAAAAAQgVALgNAAIgCAAQAAAAAAAAQgKAAgGgEQgCgCgBgCQAAAAAAgBQgEgGgBgGQAAAAAAgBQAAgCAAgCIAAgBIABgGIAAAAIAAgDIAAgDIAAAAIABgDIAAgBIAWh+IAAgFIAAgBIhShRIgDgDIgNgRIgCgCIgCgDIgDgJIgCgE");

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FCB852").s().p("ACQDzIgFAAQgLgCgPgHIgDgBIgEgCIhog3IgBAAIgBABIhoA2IgDABIgBAAQgVALgNAAIgCAAIAAAAQgKAAgGgEIgDgEIAAgBQgEgGgBgGIAAgBIAAgEIAAgBIABgGIAAAAIAAgDIAAgDIAAAAIABgDIAAgBIAWh+IAAgFIAAgBIhShRIgDgDIgNgRIgCgCIgCgDIgDgJIgCgEQAAgKAIgHIARgHICNgWIABAAIA3hxIAJgOIAAgBIABgCIAIgJIABAAIABgBIABgBQADgDAEgBIACAAIAAAAIAFABIAGADIADADIABABIAEADQAFAHAGAKIACAFIA3BwIAFABIBxARIAXAFIARAJIAEAGIABAEIABAFIAAABIgBAGQgDANgRAQIgDADIgEAEIhOBIIgEADIgBABIAVCFIAAABIAAAAIACAEIAAABIAAAKIAAAAIgFASIgFAEIgEADIgGAAg");

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj+g0QAAgKAIgGQAAAAAAAAIARgIIAAAAICQgWIAAAAIA4hyIAIgPIABgBIAAAAIABgBIAIgJIABgBQAAAAABgBQAAAAABAAQADgDAEgBQABAAABgBIAAAAQACAAADABQADACADACIADACQABABAAAAQACACACACQAFAGAGALIACAFIA4BxIAAAAIAFABIBzARIAAAAIAXAFIAAAAIAQAJIAAAAIAEAGIACAEIABAFQAAABAAAAQAAADgBAEQgEANgQAQQgCACgBABIgEAEIhPBIIgEADIgBABIAVCHIAAABIAAAAIACAEIAAABIAAAKIAAAAIgFASIAAAAIgGAFIgDACIgGABIgBAAQgCAAgCgBQgLgBgQgIQgBAAgCgBIgEgCIhpg3IgBAAIgBABIhpA2IgDABQgBAAAAAAQgWALgMABIgCAAQAAAAgBAAQgKAAgFgFQgCgBgBgCQgBgBAAAAQgEgGgBgGQAAgBAAAAQAAgCAAgDIAAgBIABgFIAAAAIABgDIAAgDIAAgBIAAgDIAAgBIAWh/IABgFIAAgBIhUhSIgDgDIgNgRIgCgCIgBgDIgEgJIgCgF");

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FCB852").s().p("ACRD2IgEgBQgLgBgQgIIgDgBIgEgCIhpg3IgBAAIgBABIhpA2IgDABIgBAAQgVALgNABIgCAAIgBAAQgKAAgFgFIgDgDIgBgBQgEgGgBgGIAAgBIAAgFIAAgBIABgFIAAAAIABgDIAAgDIAAgBIABgDIAAgBIAVh/IABgFIAAgBIhUhSIgDgDIgNgRIgCgCIgBgDIgEgJIgCgFQAAgKAIgGIARgIICQgWIAAAAIA4hyIAIgPIABgBIABgBIAIgJIABgBIABgBIABAAQADgDAEgBIACgBIAAAAIAFABIAGAEIADACIABABIAEAEQAFAGAGALIACAFIA4BxIAFABIBzARIAXAFIAQAJIAEAGIACAEIABAFIAAABIgBAHQgEANgQAQIgDADIgEAEIhPBIIgEADIgBABIAVCHIAAABIAAAAIACAEIAAABIAAAKIAAAAIgFASIgGAFIgDACIgGABg");

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAPjwQAIAGAIAPIACAFIA3BvIACAEIB0ARIAFABIASAFIAFAAIAMAHIAFADIAGAKIAAAFQAAAQgVAVIgEAEIhTBMIgFAEIAUCEIABAFIAAABIACAEIAAAFIAAAGIgDAMIgBAGIgKAHIgGABQgMAAgUgKIgEgCIhqg3IgEgCIhrA4IgDABQgWALgNABIgDAAQgOAAgFgIIgBgBQgFgJAAgJIAAgBIACgMIAAAAIABgDIAAgBIAXiGIAAgBIhXhVIgBgBIgPgTIgCgDIgEgLIgBgDQAAgKAIgHIARgIICRgWIA4hzIAJgPIABgBIAJgKIABgBQAEgFAFgBIACgBQAFAAAGAFg");
	this.shape_81.setTransform(0,0.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FCB852").s().p("ABzDuIgEgBIhqg3IgEgCIhrA4IgDABQgWALgNAAIgDAAQgOABgFgJIgBgBQgFgIAAgJIAAgBIACgMIAAAAIABgEIAAgBIAXiFIAAgBIhXhVIgBgBIgPgTIgCgDIgEgLIgBgDQAAgKAIgHIARgIICRgWIA4hzIAJgPIABgBIAJgKIABgBQAEgFAFgBIACAAQAFAAAGAEIADADQAIAHAIAOIACAFIA3BvIACAEIB0ARIAFABIASAFIAFAAIAMAHIAFACIAGAKIAAAGQAAAQgVAVIgEAEIhTBMIgFAEIAUCEIABAFIAAABIACAEIAAAFIAAAFIgDANIgBAFIgKAIIgGAAQgMABgUgLg");
	this.shape_82.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[]},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-20,41.6,40.2);


(lib.Sprite74 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD8500").s().p("AsBAnIAAhNIYCAAIAABNg");
	this.shape.setTransform(77,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.9,154,8);


(lib.Shape147 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4.3,1,1).p("EAlfgCIIAAESEAu3gCIIAAESAcHiIIAAESASviIIAAESAJXiIIAAESAAAiIIAAESApXiIIAAESAyviIIAAESA8HiIIAAESEglfgCIIAAESEgu2gCJIAAEH");
	this.shape.setTransform(299.8,386.6);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4.3,1,1).p("AjH/VIEHAAAjH5FIEHAAAjHy1IEHAAAjHslIEHAAAjHmUIEHAAAjHGKIEHAAAjHgEIEHAAAjHMaIEHAAAjHSqIEHAAAjHY6IEHAAAjDfWIGLAA");
	this.shape_1.setTransform(20.9,200.6);

	// Shape Sublayer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4.3,1,1).p("Egu3AfKMAAAg+fEAu4AfWMhdvAAA");
	this.shape_2.setTransform(300,200.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,600.2,401.2);


(lib.Shape144 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AhthtIDbBqIAAAIIjbBpg");
	this.shape.setTransform(-0.7,-16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-27.7,22.1,22.1);


(lib.Shape139 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9A62B").ss(1,1,1,3,true).p("AKAmpIAAMtQAAAmgmAAIzZAA");
	this.shape.setTransform(1.9,2.9);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,1],0,65.1,0,-27.1).s().p("AqSD+IAAnWQAAgmAmAAITZAAQAmAAAAAmIAAHWQlWj5lHB6QknCAklAAIg8gBg");
	this.shape_1.setTransform(0,-17.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.9,-43.4,131.9,89);


(lib.Shape132 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB347").s().p("AANLTQhHg7AAhGQAAgtAkgeQAggfAtABQAvAAAhAdQAeAcAAAsQAAApgmAaQgiAWgmgFQgWgCABANQgBASAqAZQAvAcA1AAQCjAAAJksQAEh+gjhTQgqhqhegCQhagDgoAxQgeAhgNBTQgQhqhEhZQgzhAhIgoQBEgmAyhAQBFhWAPhrQAOBRAeAjQAmAwBbgDQBegDAshpQAihUgFh9QgJkwiiABQg1gBguAcQgqAYAAARQAAAMAWgBQAlgFAiAWQAmAaAAArQAAArgfAcQgfAdgvgBQgvAAgggeQgkgeAAgtQAAhGBGg7QBPhAByAAQCQAABcBoQBXBlAACVQAACVhuBqQhxBqiWgCQg1gBg8gaQgPAjgaAiQgUAWgcANQAaAPAYAYQAbAgAPAjQA+gaAyABQCWgCBwBoQByBpAACUQAACUhZBhQhcBkiPACQhxAAhOhAgAkOMTIAA4dIBAAAIAAYdgAoPMTIAA4dIDBAAIAAYdg");
	this.shape.setTransform(18.5,69.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-8.9,105.8,157.4);


(lib.Shape122 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-6.9,0,5).s().p("AivAxQAAg1AzgnQA1gmBHAAQBJAAAzAmQA0AnAAA1QAAA3g3gzQg0gwhCAJIgDABIgGABQhIAPgxAlQgTAOgMAAQgRAAAAghg");
	this.shape.setTransform(20,9.1);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-14.5,0,14.8).s().p("AiMBpQg6gsgBg9QABg8A6gtQA7grBRgBQBSABA7ArQA7AtgBA8QABA9g7AsQg7AthSgBQhRABg7gtg");
	this.shape_1.setTransform(20,15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,30);


(lib.Shape98 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AACCSQgNgMAAgOQAAgJAHgGQAGgGAIAAQAKAAAHAGQAGAFAAAJQAAAJgIAFQgHAEgIgBQgBAAAAAAQgBAAgBAAQAAABAAAAQgBABABAAQgBAEAJAFQAJAGALAAQAhAAACg8QABgagIgRQgIgWgTAAQgTgBgIAKQgGAHgDARQgBgWgOgSQgKgNgPgIQAOgGAKgNQAOgSACgVQADAQAFAHQAIAKATgBQATAAAJgWQAGgRAAgZQgCg+ghAAQgKAAgKAGQgIAFAAADQgBADAFgBIAPAEQAHAFABAJQgBAJgGAFQgHAGgJAAQgKAAgEgGQgIgGAAgKQAAgOAMgMQAQgMAZAAQAdAAASAVQASAUAAAeQgBAegWAWQgXAWgfgBQgKAAgMgFIgHAOIgJAFIAJAIIAIAOIAWgFQAfAAAWAUQAYAWAAAeQAAAegSATQgUAVgcAAQgXAAgQgNgAg2CfIAAk8IANAAIAAE8gAhqCfIAAk8IAnAAIAAE8g");
	this.shape.setTransform(0,-6.4);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B16A01").s().p("Ag9AqQgGgHAAgSQAAggASAAQAKAAAFANIAAAAIAAgMIASAAIAAA9IgSAAIAAgKQgFAMgKAAQgHABgFgIgAgxAOIACAOIAGAFIAGgEQABgEAAgIIgCgOIgGgDIAAAAQgHAAAAAOgAAmAvIAAgvIgKAAIAAgOIAKAAIAAgRIASAAIAAARIAMAAIAAAOIgMAAIAAAvgAAAAvIAAhgIAQAAIAABgg");
	this.shape_1.setTransform(-1.5,15.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-22.4,21.5,43);


(lib.Shape86 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-11.1,0,15.1).s().p("AjXARIgEhTQgBg4AmAAIFtAAQAlAAABA4IAACvQhuiDhvB0Qg8AdgsAAQhWAAgZhqg");
	this.shape.setTransform(25.1,15.3);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFCC66"],[0,1],0,-22.9,0,23.8).s().p("AjCDsQgpAAAAgoIAAmGQAAgpApAAIGGAAQAoAAAAApIAAGGQAAAogoAAg");
	this.shape_1.setTransform(25,25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,1.4,47.3,47.3);


(lib.Shape76 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-18.4,0,20.8).s().p("AtxDEQh8AAAAhwIAAinQAAhwB8AAIbjAAQB8AAAABwIAACnQAABwh8AAQtyl4txF4g");

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-20.6,0,20.8).ss(2,1,1).p("ANyjDI7jAAQh8AAAABwIAACnQAABwB8AAIbjAAQB8AAAAhwIAAinQAAhwh8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AtyDEQh6AAAAhwIAAinQAAhwB6AAIbkAAQB7AAAABwIAACnQAABwh7AAg");

	// Shape Sublayer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(210,126,2,0.502)","rgba(254,220,171,0.502)"],[0,1],0.1,36,0,-35.9).s().p("AuYDZQhlgBAAhjIAAjoQABgVAEgPQAQhBBQABIcxAAQA0AAAZAbQAYAYAAAxIAADoQAABjhlABgAvRikQgNARAAAgIAADoQgBAiASATQARAQAkAAIcxAAQAkAAARgQQASgTgBgiIAAjoQABgpgXgSIAAABQgRgMgfAAI8xAAQgeAAgSAMIAAgBIgBACIAAgBg");
	this.shape_3.setTransform(0.5,0.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.7,-21.5,204.4,43.4);


(lib.Shape69 = function() {
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


(lib.Shape67 = function() {
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


(lib.Shape66 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDCAB").s().p("EhCVAxfMAAAgrBIFzGXIlzsAMAAAgsbMATcA0nMgCzg6aIThAAMgCsA4JMATpg4JIVwAAMgdBA/CMA5Sg/CIa5AAICqgGIAADWMhLSBEFMBLFgkLIAAXgMhHPAaUMBHPgDaIAARUg");

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEDCAB").s().p("EhCOAxdMAAAhi5MCEdAAAMAAABi5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-424.5,-316.7,849.3,633.6);


(lib.Shape61 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCAD38","#FDC877","#FCAD38"],[0,0.49,1],0,-11.9,0,12.9).s().p("Ah5CGQgFAAgDgEIgEgIIAAjzIAEgIQADgEAFAAIDyAAQAGAAADAEIAEAIIAADzIgEAIQgDAEgGAAgAhtBuIDaAAIAAjaIjaAAg");
	this.shape.setTransform(-15.1,8);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC48A").s().p("Ah5COQgIgBgGgFQgGgGAAgJIAAjzQAAgIAFgFIABAAQAGgGAIAAIDyAAQAJAAAHAGQAEAFABAIIAAD0QgBAIgEAGIAAAAQgHAFgIABgAhkBkIDKAAIAAjJIjKAAg");
	this.shape_1.setTransform(-15.2,8);

	// Shape Sublayer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,0,0,0)").s().p("Ai8ENIAAoZIF4AAIAAIZg");
	this.shape_2.setTransform(-15.7,14.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.6,-12,37.8,53.9);


(lib.Shape59 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.102)","rgba(255,204,0,0.153)"],[0,1],0,14.5,0,-14.4).s().p("AuYDOQguAAgWgXQgXgVABguIAAjoQgBgtAXgVQAWgYAuAAIcxAAQAuAAAWAYQAXAVgBAtIAADoQABAugXAVQgWAXguAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.1,-20.6,202.4,41.4);


(lib.Shape57 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,-5.2,0,7.4).s().p("AgNABQhtgfhnBLIAAg/QAAgRACgJIACgFIAAABIABgBQADgHAIAAIGkAAQAGAAAFAHQAEAKAAAVIAAA/QgkAMgmAAQhTAAhSg4g");
	this.shape.setTransform(24.4,-4.3);

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDCAB","#FEB23D"],[0,0.424],0,17,0,-11.1).s().p("AjRBlQgJAAgEgKQgDgJAAgTIAAh9QAAgRACgJIACgFIAAABIABgBQADgHAIAAIGkAAQAGAAAFAHQAEAKAAAVIAAB9QABATgEAJQgFAKgHAAg");
	this.shape_1.setTransform(24.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D27E02","#FEDCAB"],[0,1],0.1,19.5,0,-19.3).s().p("AjRB1QgYAAAAg2IAAh9IABgTQAEgjATAAIGkAAQALAAAGAPQAFANAAAaIAAB9QAAA2gWAAgAjfhYQgCAJAAARIAAB9QAAATADAJQAEAKAJAAIGkAAQAHAAAFgKQAEgJgBgTIAAh9QAAgVgEgKQgFgHgGAAImkAAQgIAAgDAHIgBABIAAgBg");
	this.shape_2.setTransform(24.4,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-11.7,46.8,23.5);


(lib.Glyph19 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EggIA82QusvxAA9FQAA88PAv3QO7v9bPAAQPeAAU3FFIAAPaQ3woOs5AAQyzAAqUMvQqUMvAAXMQAAWMLBMvQLBMuTHAAQQVABSwqFIAAOEQxHI10PAAQ67AAusvzgEABDgziIyz5FILkAAIP6PyIPtvyILkAAIy1ZFg");
	this.shape.setTransform(17.6,-23.5,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,-48.1,30,49.1);


(lib.Glyph18 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ego4A50IAAtIMA+AhaOMg6LAAAIAAsQMBN8AAAIAAMQMg+ABaOMA+AAAAIAANIg");
	this.shape.setTransform(15.5,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.4,-36.9,26.2,37);


(lib.Glyph17 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgG2A50MgrshzmIQbAAMAjrBepMAinhepIOYAAMgp9Bzmg");
	this.shape.setTransform(17.1,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-36.9,32.4,37);


(lib.Glyph16 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgILA50MAAAhnWMgpCAAAIAAsQMBibAAAIAAMQMgpCAAAMAAABnWg");
	this.shape.setTransform(16.2,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-36.9,31.5,37);


(lib.Glyph15 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgjLA3nIAAwPQTiJDMqAAQJlAAF8lFQF3lJAAoOQAAmyj1kyQj6kxqZl3In8kmQuxoamBnbQmGnhAAp1QAAtcJsomQJsosPAAAQNVAAO2EeIAAPAQySnNo/AAQofAAljEjQljEhAAG5QAAFxEEEeQEEEdKwGKIISEsQPAIgF8HlQF8HlAAKnQAAPFrGJKQrGJJyVAAQruAAyIlGg");
	this.shape.setTransform(13.8,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,-37.9,22.6,38.9);


(lib.Glyph14 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAWJA50Mgg8gw7IvPAAMAAAAw7IwQAAMAAAhzmMAjAAAAQQngBI6HWQI1HWAAOAQAALAmGImQmLInrGEkMAmmA2KgA6CjWIFUAAQPPAAH3mLQH5mLAAr3QAAx+5/gBIqUAAg");
	this.shape.setTransform(18.3,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,27.1,37);


(lib.Glyph13 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgnRAsNQuxwjAA7qQAA7pOxwfQOswkYlAAQYnAAOwQkQOtQfAAbpQAAbqutQjQuwQf4nABQ4lgBuswfgEga7gjmQpsMuAAWwQAAW2JsM5QJrM0RQAAQRRAAJss0QJss5AA22QAA2wpssuQpss1xRAAQxQAAprM1g");
	this.shape.setTransform(19.9,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,-37.9,34.6,38.9);


(lib.Glyph12 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAcKA50Mg6QhZSMAAABZSIuEAAMAAAhzmIQGAAMA6LBZRMAAAhZRIOEAAMAAABzmg");
	this.shape.setTransform(18.9,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,28.3,37);


(lib.Glyph10 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgiNA50MAAAhzmIQbAAMAAABnVMA0AAAAIAAMRg");
	this.shape.setTransform(15.7,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,21.9,37);


(lib.Glyph9 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAWnA50Mgyhg6lMAAAA6lIvZAAMAAAhzmIPZAAMAAAA43MAuxg43IQfAAMgtSA3JMA1QA8dg");
	this.shape.setTransform(18.6,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,27.7,37);


(lib.Glyph8 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgY3BDvIAAudQJYC9HWAAQJMAADwlYQDrlaAAtSMAAAhlhIQaAAMAAABk+UAAAAlvgjrAAAQleABomhpg");
	this.shape.setTransform(3.4,-14.7,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-36.9,16,44.4);


(lib.Glyph7 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgILA50MAAAhzmIQXAAMAAABzmg");
	this.shape.setTransform(7.4,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,5.3,37);


(lib.Glyph6 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAbgA50MAAAg2nMg2+AAAMAAAA2nIwbAAMAAAhzmIQbAAMAAAAwvMA2+AAAMAAAgwvIQaAAMAAABzmg");
	this.shape.setTransform(18.8,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,28.1,37);


(lib.Glyph5 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egh+A50MAAAhzmMBAmAAAIAAMQMgwLAAAMAAAAlIMAoXAAAIAAMEMgoXAAAMAAAAp5MAzhAAAIAAMRg");
	this.shape.setTransform(15.7,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,21.8,37);


(lib.Glyph3 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgjOA50MAAAhzmIeAAAQRVgBJTGkQJOGlgBMWQAAJ/mKH1QmMHzrZEUQcWIpAAWpQAAKLmPH5QkyGAmuCcQmuCar7ABgEgS9AtjIDXAAQR8gBFTiQQKKkTAArqQAAqUpNmyQpIm5t1ABIkmAAgAy9nAIFPAAQNMAAHLloQHLlpABqZQgBw46YAAImZAAg");
	this.shape.setTransform(16.1,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.8,-36.9,22.6,37);


(lib.Glyph2 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAj5A50Isg/9MgxCAAAIsvf9IvPAAMAt3hzmIQOAAMAtKBzmgA09NmMAngAAAMgTqgx5g");
	this.shape.setTransform(17.6,-18.4,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-36.9,34.3,37);


(lib.Glyph0 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Glyph39 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgeSA/PIAAyXMAZUhSyI2WAAIAA5UMA5oAAAIAAZUMgYjBL1IYjAAIAAZUg");
	this.shape.setTransform(10,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,-40.4,19.4,40.5);


(lib.Glyph35 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgX2A/PMgS/h+dMAisAAAUAGBA0RACoAkJUACggkiAC5gcXICR3hMAisAAAMgQuB+dg");
	this.shape.setTransform(13.4,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-40.4,27.5,40.5);


(lib.Glyph33 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgQeA/PMAAAhlJIzcAAIAA5UMBH2AAAIAAZUIziAAMAAABlJg");
	this.shape.setTransform(11.8,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,-40.4,23,40.5);


(lib.Glyph31 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAGLA/PMAAAgqCQAAqKhkibQhpibmxAAMAAAA5CMgg5AAAMAAAh+dIXRAAQXQAAITBzQIMBzFPHbQFLHWAAQLQgBOxjqFFQjsFFqxBBQJwCbDXECQDXEEA3DcQAzDXAAPUMAAAAhXgAjztdQFgAACRhfQCMhkABoXIAAm9QAAmBiHh4QiNh4lqAAg");
	this.shape.setTransform(13.9,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.1,-40.4,23.5,40.5);


(lib.Glyph28 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgSMA+nQoHjXk8mpQk7mpg7n0Qg9n0AAziIAA1nQAAzEA9n5QA2n+EymkQErmkIDjhQIDjhKsAAQKJAAIJDXQICDSE8GpQE6GpA8H0QA9H0gBTiIAAVnQAATEg2H+Qg8H5ksGkQkyGkoCDhQoEDhqsAAQqJAAoDjSgEgDugqcQhbB9ABJxMAAAA7CQgBLBA9ClQA2ClDSAAQDVAAA9i+QA7i+AArLMAAAg6GQAAo1g7ibQhCigjCAAQikAAhUCCg");
	this.shape.setTransform(14,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-41.3,24.4,42.2);


(lib.Glyph27 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAH5A/PMgRGg5gMAAAA5gI7fAAMAAAh+dIbfAAMASaA49MAAAg49IbhAAMAAAB+dg");
	this.shape.setTransform(13.9,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.1,-40.4,23.5,40.5);


(lib.Glyph25 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgabA/PMAAAh+dMAg3AAAMAAABlJIUAAAIAAZUg");
	this.shape.setTransform(10.6,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.1,-40.4,17,40.5);


(lib.Glyph23 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgWrA/PIAA2HQC+APBVAAQDhAACChuQCChuAUigQAUigAAnMMAAAhY9MAg3AAAMAAABUgQAAS/gZFeQgZFZjNEYQjIEYleBuQlZBpq6AAg");
	this.shape.setTransform(7.7,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-40.4,14.6,40.5);


(lib.Glyph22 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgQbA/PMAAAh+dMAg3AAAMAAAB+dg");
	this.shape.setTransform(7.4,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.1,-40.4,10.6,40.5);


(lib.Glyph20 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgVjA96QnQkEjxl8Qjwl8g7mfQg9mkAAtDMAAAgljQAByIB9oNQB8oNJUmzQJOm4OsAAQOaAAJiF8QJjF8C5INQC4IIAAPjIAAFeMgg5AAAIAArfQAAq3g7ivQg9ivjfAAQjCAAhGCWQhHCWABJsMAAAA8rQgBIhBHCvQBFCqDRAAQDlAABWjDQBQjDAAo1IAAvAImoAAIAAzMMAmfAAAMAAABD3I0tAAIi9pEQjdF3lFC+QlKC5m7AAQoSAAnMj/g");
	this.shape.setTransform(14,-20.1,0.05,0.05);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-41.3,24.5,42.2);


(lib.Glyph18_1 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgcfA/PMAAAh+dMA20AAAIAAZUI19AAIAAX/IUjAAIAAYCI0jAAIAAb0IYIAAIAAZUg");
	this.shape_1.setTransform(11.2,-20.1,0.05,0.05);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.1,-40.4,18.3,40.5);


(lib.Glyph14_1 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EAH5A/PIhv2vIrxAAIh8WvMgh/AAAMAQuh+dMAviAAAMAS2B+dgAl/SFILSAAQig1dif/pUgFDAkTgBQAQzg");
	this.shape_1.setTransform(13,-20.1,0.05,0.05);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-40.4,26.7,40.5);


(lib.Glyph5_1 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgE3A/PMAAAhDyQAAusgti+Qgti+jIhfQjNhkq8AAIjIAAIAAuxQW5k7L2vUISmAAMAAAB+dg");
	this.shape_1.setTransform(8.8,-20.1,0.05,0.05);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,-40.4,17.1,40.5);


(lib.Glyph2_1 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgJmAllIAA7+I8CAAIAAzDIcCAAIAA8IITDAAIAAcIIcMAAIAATDI8MAAIAAb+g");
	this.shape_1.setTransform(13.7,-20.1,0.05,0.05);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.6,-32.2,24.1,24.1);


(lib.Glyph0_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Sprite148 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.Shape147("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,600.2,401.2);


(lib.Sprite140 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.Shape139("single",0);

	// Layer 3
	this.acur = new cjs.Text("", "41px Impact", "#B16A01");
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


(lib.Sprite133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-129.6,99,259.3);


(lib.Sprite123 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape122("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,30);


(lib.Sprite87 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape86("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,1.4,47.3,47.3);


(lib.Sprite78 = function() {
	this.initialize();

	// Layer 4
	this.title_txt = new cjs.Text("TRENING", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 173;
	this.title_txt.setTransform(-1.9,-16);

	// Layer 3
	this.instance = new lib.Shape76("single",0);

	this.addChild(this.instance,this.title_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.7,-21.5,204.4,43.4);


(lib.Sprite75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.bar = new lib.Sprite74();
	this.bar.setTransform(-76.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar}]}).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B06A00").s().p("AsfBGIAAiLIY/AAIAACLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-6.9,160,14);


(lib.Sprite70 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Shape69("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-409.4,-304.4,818.9,603.8);


(lib.Sprite68 = function() {
	this.initialize();

	// Layer 16
	this.instance = new lib.Shape67("single",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1085,-1075.3,2190.3,2158.4);


(lib.Sprite65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AhYBnIAAjNICxAAIAADNg");
	this.shape.setTransform(0,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 5
	this.title_txt = new cjs.Text("PRIMA", "bold 46px LucidaSansUnicode", "#E37302");
	this.title_txt.lineHeight = 48;
	this.title_txt.lineWidth = 290;
	this.title_txt.setTransform(9.7,-5,0.365,0.365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt}]}).wait(2));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(252,173,56,0.8)").s().p("AgjBDIgmglQgFgFAAgFQAAgHAEgDIAAgBQAEgEAGAAQAGAAAEAEIALAKIAJAGIAMgBIAKgHIBChSIgBAAQAEgFAGAAQAGgBAFAEIgBAAQAFAEABAFQAAAGgDAFIhaBxIgHAEIgBAAIgHABg");
	this.shape_1.setTransform(-15,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 3
	this.instance = new lib.Shape61("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-12,151.5,53.9);


(lib.Sprite60 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.Shape59("single",0);
	this.instance.setTransform(24.4,0,0.224,0.541);

	// Layer 3
	this.title_txt = new cjs.Text("", "25px Impact", "#B16A01");
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 27;
	this.title_txt.lineWidth = 77;
	this.title_txt.setTransform(40.7,-9.2,0.541,0.541);

	// Layer 2
	this.instance_1 = new lib.Shape57("single",0);

	this.addChild(this.instance_1,this.title_txt,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-11.7,46.8,23.5);


(lib.Sprite146 = function() {
	this.initialize();

	// Layer 8
	this.instance = new lib.Shape144("single",0);

	// Layer 7
	this.instance_1 = new lib.Glyph23("single",0);
	this.instance_1.setTransform(18.8,26.9,0.293,0.293);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Glyph14_1("single",0);
	this.instance_2.setTransform(11.2,26.9,0.293,0.293);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Glyph31("single",0);
	this.instance_3.setTransform(3.1,26.9,0.293,0.293);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Glyph20("single",0);
	this.instance_4.setTransform(-5.1,26.9,0.293,0.293);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Glyph22("single",0);
	this.instance_5.setTransform(-9.4,26.9,0.293,0.293);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Glyph14_1("single",0);
	this.instance_6.setTransform(-17,26.9,0.293,0.293);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Glyph39("single",0);
	this.instance_7.setTransform(-22.9,26.9,0.293,0.293);
	this.instance_7.alpha = 0;

	// Layer 2
	this.play2_btn = new lib.Sprite60();
	this.play2_btn.setTransform(-32.7,-16.6,1.314,1.314);
	this.play2_btn.shadow = new cjs.Shadow("#000000",1,1,5);

	// Layer 1
	this.instance_8 = new lib.Shape144("single",0);
	this.instance_8.setTransform(6,-0.9);

	this.addChild(this.instance_8,this.play2_btn,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,-32.1,61.5,59.3);


(lib.Sprite143 = function() {
	this.initialize();

	// Layer 7
	this.instance = new lib.Glyph25("single",0);
	this.instance.setTransform(34.9,26.9,0.293,0.293);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Glyph14_1("single",0);
	this.instance_1.setTransform(27.3,26.9,0.293,0.293);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Glyph35("single",0);
	this.instance_2.setTransform(19.5,26.9,0.293,0.293);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Glyph31("single",0);
	this.instance_3.setTransform(11.4,26.9,0.293,0.293);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Glyph18_1("single",0);
	this.instance_4.setTransform(5.1,26.9,0.293,0.293);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Glyph33("single",0);
	this.instance_5.setTransform(-1.7,26.9,0.293,0.293);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Glyph27("single",0);
	this.instance_6.setTransform(-9.8,26.9,0.293,0.293);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Glyph22("single",0);
	this.instance_7.setTransform(-14.1,26.9,0.293,0.293);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.Glyph35("single",0);
	this.instance_8.setTransform(-24.6,26.9,0.293,0.293);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Glyph28("single",0);
	this.instance_9.setTransform(-32.8,26.9,0.293,0.293);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Glyph27("single",0);
	this.instance_10.setTransform(-40.9,26.9,0.293,0.293);
	this.instance_10.alpha = 0;

	// Layer 6
	this.instance_11 = new lib.Glyph5_1("single",0);
	this.instance_11.setTransform(5.9,-8,0.43,0.43);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Glyph2_1("single",0);
	this.instance_12.setTransform(-9.7,-8,0.43,0.43);
	this.instance_12.alpha = 0;

	// Layer 1
	this.oneup_btn = new lib.Sprite60();
	this.oneup_btn.setTransform(-30.7,-16.6,1.314,1.314);
	this.oneup_btn.shadow = new cjs.Shadow("#000000",1,1,5);

	this.addChild(this.oneup_btn,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.3,-32.1,80.9,59.3);


(lib.Sprite129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCA82B").s().p("Ag7C7IAAhRIgpAIIAAg0IApgIIAAhRIgpAIIAAg0IApgIIAAhWIAbAAIAABQIBAgNIAAhYIAbAAIAABSIAqgJIAAA0IgqAJIAABRIAqgJIAAA0IgqAIIAABWIgbAAIAAhPIhAANIAABXgAggghIAABRIBAgNIAAhRg");
	this.shape.setTransform(-39.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-14.9,0,15).s().p("Ag2CfIgDgHIAAkvIADgHIAHgDIAMAAQAEAAADADQADADAAAEIAACgQAWgJAQAAQAgAAAKAdQADAIAAAIQAAAZgYAZQgRASgTAMIgUASIgSAQIgHADQgFAAgCgDgAgZArIAAA9IAKgMIAAABQAVgdABgTQAAgHgHgEIgDgCQgJABgNAKg");
	this.shape_1.setTransform(-29.9,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-11.4,0,12.3).s().p("AApB/QADgIgCgeQgBgggEgIQgFgMgSgJIgYAAQgSAJgFAMQgFAMgCAgQgCAdACAFIhUAAIAAhVQAoAIAggPQAQgIAMgOIAAgaQgNgOgRgGQghgPglAHIAAhUIBUAAQgEAHADAfQADAfAEAIQAEALAUAKIAYAAQATgKAEgPQAFgPAAgdIgBgdIBVAAIAABUQgogIgfAQQgQAHgMANIAAAaQANAOARAIQAfAPAmgIIAABVg");
	this.shape_2.setTransform(-39.9,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FCA21B","#FDBC5B"],[0,1],0,-15.3,0,13.8).s().p("AgHBUIgQARQgNAMgPAIQgKAGgPAPIgRARIAAk9IAOAAIAAC4IARgJQAVgJAMAAQAKAAAMAGIAAisIALAAIAAC4QAdgSAYAAQAaAAAIAaIACAOQABAWgWAWQgRATgVAKQgLAFgPAQIgPARgAAEAnIAABdQADADAaggQAcghAAgWQAAgPgOgIIgJgCQgOAAgUAQgAhPAnIAABdQADADAZggQAcghAAgWQAAgPgOgIIgJgCQgOAAgTAQg");
	this.shape_3.setTransform(-38.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCA82B").s().p("AA2CmIAAhPIiZASIAAkOIAtAAIAABQICagTIAAEOgAg2ghIAABSIBsgOIAAhRg");
	this.shape_4.setTransform(-32.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Sprite123();
	this.instance.setTransform(-19.9,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-14.9,40,30);


(lib.Sprite103 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AAwCyQgIgEgEgHQgEgIAAgKQAAgJAEgHQAEgIAIgEQAHgEAJABQAOAAAJAJQAJAJAAAOQAAANgJAKQgJAJgOAAQgIAAgIgEgAA1CIQgEAEAAAKQAAAJAEAFQAFAFAGAAQAHAAAEgFQAEgFAAgJQAAgKgEgEQgEgFgHAAQgGAAgFAFgAhkCsQgFgJAAgNQAAgPAIgJQAHgJANABQAOAAAHAJQAJAJgBASIgpAAIAEAMQAEAEAFAAIAIgCIADgHIAQADQgDAIgGAFQgIAFgKAAQgPAAgJgKgAhVCGQgDAEAAAHIAXAAQABgHgEgFQgDgDgFAAQgFAAgEAEgAiDC1IgGgFIgCgGIAAgLIAAgcIgIAAIAAgMIAIAAIAAgNIAQgJIAAAWIALAAIAAAMIgLAAIAAAaIAAAJIACABIACABIAHgBIABANIgMACgABsC1IAAg+IAPAAIAAAJQAEgHADgBIAIgCIAKADIgFAOIgIgDQgDAAgCACQgDACgBAEIgCAWIAAATgAADC1IAAggQAAgKgBgDIgCgFIgFgBIgIACIgEAGIgCAPIAAAcIgPAAIAAg+IAOAAIAAAJQAIgKAMAAIAJACQAEABACADIAEAHIAAALIAAAngAAMApQgPgNAAgRQAAgKAHgFQAHgHALgBQALABAIAGQAHAFAAAKQAAAKgJAGQgIAEgJAAQgFgBABADQgBAFAKAFQAKAHANAAQAmAAAChEQABgegIgSQgJgZgXgBQgUAAgKALQgHAHgDATQgEgYgOgVQgMgPgRgKQAQgIAMgPQAJgPAGgRIAGAAQADAJAEAFQAJALAVgBQAVAAALgYIAkAAIgNAOQgaAYgjAAQgMAAgNgGIgLAQIgJAJQAEADAFAGQAIAHADAIQAOgGAMABQAjgBAZAYQAbAYAAAkQAAAfgUAXQgWAXghABQgbAAgSgPgAg0A4IAAjtIAPAAIAADtgAhwA4IAAjtIAtAAIAADtg");
	this.shape.setTransform(-1.7,-1.2);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite101 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("ABBCrIgNgDIgTADIgiAAIgHgLQgMgPgRgKIAEgDIAYgWQAPgUAEgaQADATAHAJQAJALAWgBQAXAAAKgZQAIgVgBgdQgChIgnABQgNgBgLAHQgJAGAAAEQAAADAFAAQAJgBAIAEQAJAHAAAKQAAAJgIAHQgHAGgLABQgLgBgJgHQgHgHAAgJQAAgSAQgOQATgOAbAAQAjAAAWAYQAUAYAAAiQAAAlgaAZQgbAZgkAAQgNAAgOgHIgLARIgGAFIgDAEIAKAJIALAQQAOgGANAAQAdAAAWAQgAg2CrIAAjdIAPAAIAADdgAh0CrIAAjdIAvAAIAADdgAhGhiIAAhGIAMAAIAAAIIAHgHIAJgCQAJgBAGAIQAHAGAAANQAAANgHAHQgGAHgJAAIgHgCIgIgFIAAAZgAg2ibIgDAMQAAAIADAEIAJAEQAFAAADgEQACgDAAgJQAAgHgDgFQgDgDgEAAQgFAAgEADgACWh4QgGgCgDgHQgDgGAAgIQAAgHADgHIAJgJIAOgDQALAAAIAIQAHAGAAANQAAALgHAIQgIAHgLAAQgHAAgHgEgACbibQgEAFAAAIQAAAHAEAEQADAEAGAAQAFAAAEgEQADgEAAgHQAAgIgDgFQgEgDgFAAQgGAAgDADgAAbh5QgFgDAAgHQAAgFADgDIAGgFIAKgDIANgDIAAgBIgCgHIgHgBIgGABIgCAGIgNgDQACgHAFgEQAFgDAKAAIAOACIAGAGIABALIAAAQIABAKIADAHIgOAAIgBgFIgBAAIgHAEIgIACQgIAAgFgFgAAuiMIgHADQgDACAAADIACAEQACACAEABIAHgDIADgEIAAgHIAAgCgAh4h4IgJgJIgDgOIADgOIAJgJIANgDQAMAAAHAIQAIAGAAANQAAALgIAIQgHAHgLAAQgHAAgHgEgAhzibQgEAFAAAIQAAAHAEAEQADAEAFAAQAGAAADgEQAEgEAAgHQAAgIgEgFQgDgDgGAAQgFAAgDADgAi1h5QgGgEgCgGIAOgDIADAGQADACAEAAIAIgCQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgDIgEgCIgVgGQgGgEAAgIQAAgGAFgFIAQgEIAQADQAFAEACAGIgNACIgDgEIgHgBIgHABIgCACIACAEIAMADIAPAGQAFAEAAAGQAAAHgGAEQgGAGgMAAQgKAAgGgFgAByh1IAAgaIgBgLIgDgEIgFgBIgGACIgEAGIgBALIAAAXIgNAAIAAgzIAMAAIAAAIQAHgJAKAAIAIACIAGADIACAGIABAJIAAAggAgLh1IAAgzIALAAIAAAIIAGgHIAGgCIAIACIgEAMIgGgCIgFABIgDAGIgBARIAAAQg");
	this.shape.setTransform(-1.3,-1.1);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite99 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.Shape98("single",0);

	// Layer 1
	this.instance_1 = new lib.Sprite87();
	this.instance_1.setTransform(-26.9,-26.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite97 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AhsCqIAAgBQA7gqAbgmIABAAQAegtALhCQAEgaAAgVQAAhJgvgeQgWgNgZAAQgkAAgXAWQgPANAAARIAAABIABAKIABABQACAOATAGIABAAIAcAFIAAAAQAZAEgBAhQgBARgQAJQgPAJgVAAQgXAAgPgLQgQgOgBgXQgCgxAogqQAbgcA5AAIAmADIgBAAQAwAIAeArQAdAnAAAtIgBANQgHA3hGBDQg1A0hOAtIgXANgACEAOQgIgIAAgKQAAgKAGgHIAAgBQAHgJANAAQALAAAIAIQAIAIAAAMQAAAGgFAIQgIAKgOAAQgKAAgIgHgACEhmQgIgIAAgMQAAgKAGgHQAHgKANAAQALAAAIAJIAAAAQAIAHAAAMQAAAIgFAHIAAABQgIAKgOAAQgKAAgIgHg");
	this.shape.setTransform(-1,-1);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite95 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AgLDDQgQgGgIgQIgDgIQgBgRAOgIQAIgGAJACQAHACADAFQAHAGAAAKQAAAMgJAHQgGAGgJgBIAKAHIANABIAKgFQAMgIAEgNIAAgKIgJg1IgGABIgTABIgVgEQgegMgPgdIgHgXQgCgNAEgNQAIgXAQgUIAfgkIAIgHIgDgMIgFghQgDgSAFgRQAFgRAJgOIAMgJQAHgCAEAHIAKAWQAGAQABARQABAcgMAZQgKAWgRAOIAGAjIAZAAIAQAHIAOALQAPAVgDAaQgDATgNANQgMAMgRADIAJA3IAAAHQAAAGgEAGQgGALgLAGIgSAGgAgggKIgNATQgIAPgBARQAAAOAJAMIAFAHQAGAJAJAFQAYAPAZgJIgRhVIgHACIgGAEQgRAMgBAVIABAHIAHANQALANAOAEIAAACIgEgBQgNgFgLgLQgOgOAAgTIAAgJQABgIAFgIQALgSATgFIgEgggAAMAJIAQBTQALgCAIgHQANgNAAgSQAAgTgOgNQgMgLgQAAIgGAAgAALinIgKAOIgHAYIgCAPIACASIADAQIAIgJQALgLAHgNQAKgRgDgSIgCgMQgCgGgGgDIgDAAQgDAAgDACg");
	this.shape.setTransform(-1.9,-1.9);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite93 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B16A01","#B26B01"],[0,1],-10,0,10.2,0).s().p("AAhBmQADgGgCgZQgBgZgDgGQgFgKgOgIIgTAAQgOAIgEAKQgFAJgBAaQgBAXABAEIhEAAIAAhEQAhAGAZgMQANgGAKgLIAAgVQgLgLgNgGQgagMgfAHIAAhFIBEAAQgDAHACAYQADAZADAHQADAIAQAJIATAAQAPgIAEgMQADgMABgXIgBgZIBEAAIAABFQgggHgZAMQgNAGgJALIAAAVQAKALANAGQAaAMAegGIAABEg");
	this.shape.setTransform(7.7,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B16A01").s().p("Ag2CfIgDgHIAAkvIADgHIAHgDIAMAAQAEAAADADQADADAAAEIAACgQAWgJAQAAQAhAAAJAdQADAIAAAIQAAAZgYAZQgRASgTAMIgUASIgSAQIgHADQgFAAgCgDgAgZArIAAA9IAKgMIAAABQAVgdABgTQAAgHgHgEIgDgCQgJABgNAKg");
	this.shape_1.setTransform(-12.7,2.3);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite91 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("Ag7C7IAAhRIgpAIIAAg0IApgIIAAhRIgpAHIAAg0IApgHIAAhWIAbAAIAABQIBAgOIAAhXIAcAAIAABSIApgJIAAA0IgpAJIAABRIApgIIAAAzIgpAIIAABWIgcAAIAAhPIhAAOIAABWgAggghIAABSIBAgPIAAhQg");
	this.shape.setTransform(-1.4,-1.9);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite89 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B16A01").s().p("AA2CmIAAhPIiZASIAAkOIAtAAIAABQICagTIAAEOgAg2ghIAABSIBsgPIAAhQg");
	this.shape.setTransform(-2.2,-1.9);

	// Layer 1
	this.instance = new lib.Sprite87();
	this.instance.setTransform(-26.9,-26.9);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,47.3,47.3);


(lib.Sprite71 = function() {
	this.initialize();

	// Layer 20
	this.instance = new lib.Sprite70();
	this.instance.setTransform(2,-16.4);
	this.instance.alpha = 0.102;

	// Layer 3
	this.bgEffect = new lib.Sprite68();
	this.bgEffect.setTransform(354.3,333.1,1,1,0,0,180);
	this.bgEffect.alpha = 0.199;

	// Layer 2
	this.instance_1 = new lib.Shape66("single",0);

	this.addChild(this.instance_1,this.bgEffect,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-750.8,-742.2,2190.3,2158.4);


(lib.Sprite134 = function() {
	this.initialize();

	// Layer 18
	this.note1_mc = new lib.Sprite129();
	this.note1_mc.setTransform(6.8,-123.9);

	// Layer 13
	this.note_mc = new lib.Sprite129();
	this.note_mc.setTransform(6.8,-170.9);

	// Layer 11
	this.instance = new lib.Sprite121();
	this.instance.setTransform(0,210);
	this.instance.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 9
	this.instance_1 = new lib.Sprite121();
	this.instance_1.setTransform(0,180);
	this.instance_1.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 7
	this.instance_2 = new lib.Sprite121();
	this.instance_2.setTransform(0,150);
	this.instance_2.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 5
	this.instance_3 = new lib.Sprite121();
	this.instance_3.setTransform(0,120);
	this.instance_3.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 3
	this.instance_4 = new lib.Sprite121();
	this.instance_4.setTransform(0,91);
	this.instance_4.shadow = new cjs.Shadow("#000000",4,4,5);

	// Layer 1
	this.instance_5 = new lib.Sprite121();
	this.instance_5.setTransform(0,90);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.note_mc,this.note1_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-295,-185.9,321.9,438.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
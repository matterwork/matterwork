MathJax.Hub.Config({
  TeX: {
    Macros: { 
    tooltipc: ["\\tooltip{\\color{green}{#1}}{#2}",2],
    texttip: ["\\tooltip{#1}{\\text{#2}}",2],
    texttipc: ["\\tooltip{\\color{green}{#1}}{\\text{#2}}",2]
    }
  },
  tex2jax: {
    inlineMath: [['$','$'],['\\(','\\)']],
    preview: ["[math]"],
    processEscapes: true
  }
}); 
MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX,
      MML = MathJax.ElementJax.mml;
  TEX.Definitions.macros.tooltip = "myToolTip";
  TEX.Parse.Augment({
    myToolTip: function (name) {
    var arg = this.ParseArg(name), tip = this.ParseArg(name);
    this.Push(MML.maction(arg,tip).With({actiontype: MML.ACTIONTYPE.TOOLTIP}));
    }
  });
}); 
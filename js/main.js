$(function () {
  var jqconsole = $('#console').jqconsole('Hi, I\'m Brandon\nEnter \'?\' if you don\'t know what to do.\n', '> ');
  
  function process(input){
    var parsed = input.split(" ");
    switch(parsed[0]){
      case "?":
      case "ls":
      case "help":
        return text.help();
      case "brandon":
        return text.brandon;
      case "work":
        return text.work();
      case "positions":
        return text.positions();
      case "projects":
        return text.projects();
      case "fun":
        return text.fun();
      case "contact":
        return text.contact;
      default:
        return text.notRight;
    }
  }

  var startPrompt = function () {
    jqconsole.Prompt(true, function (input) {
      if(input) jqconsole.Write(process(input), 'jqconsole-output', false);
      else jqconsole.Write(text.notRight, 'jqconsole-output');
      startPrompt();
    });
  };

  startPrompt();
});

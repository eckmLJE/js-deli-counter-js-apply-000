function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katz) {
	var line = "The line is currently: 1. " + katz.slice(0,1);
	if (katz.length === 1) {
		return line;
    } else if (katz.length > 1) {
		for (var c = 1; c < katz.length; c++) {
			line = line + ", " + (c+1) + ". " + katz.slice(c, c+1);
        }
		return line;
    } else {
		return "The line is currently empty."
    }
}